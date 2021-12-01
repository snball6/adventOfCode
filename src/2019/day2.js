function compute(input) {
    let i = 0;
    while (i < input.length) {
        instruction = input[i];

        switch (instruction) {
            case 1:
                input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];
                break;
            case 2:
                input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
                break;
            case 99:
                i = input.length;
                break;
            default:
                console.log("ERROR unknown op code");
                i = input.length;
        }
        i += 4;
    }
    return input;
}

function findNounAndVerb(desiredOutput, input){
    let originalInput = input;

    let modifiedInput;
    for(let noun=0; noun<100; noun++){
        for(let verb=0; verb<100; verb++){
            let modifiedInput = originalInput.slice();
            modifiedInput[1] = noun;
            modifiedInput[2] = verb;
            compute(modifiedInput);

            if(modifiedInput[0]==desiredOutput){
                return 100 * noun + verb;
            }
        }    
    }
    return "No match found error";
}