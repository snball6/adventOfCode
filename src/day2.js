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