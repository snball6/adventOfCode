function calculatePositionPart1(input){
    let horizontal = 0;
    let depth = 0;
    for(let i = 0; i < input.length; i++){
        let command = input[i].split(" ");
        let value = parseInt(command[1]);

        switch(command[0]){
            case 'forward':
                horizontal += value;
                break;
            case 'down':
                depth += value;
                break;
            case 'up':
                depth -= value;
                break
            default:
                console.log("Direction not found: " + command[0]);
        }
    }
    return horizontal * depth;
}

function calculatePositionPart2(input){
    let horizontal = 0;
    let depth = 0;
    let aim = 0
    for(let i = 0; i < input.length; i++){
        let command = input[i].split(" ");
        let value = parseInt(command[1]);

        switch(command[0]){
            case 'forward':
                horizontal += value;
                depth += aim * value;
                break;
            case 'down':
                aim += value;
                break;
            case 'up':
                aim -= value;
                break
            default:
                console.log("Direction not found: " + command[0]);
        }
    }
    return horizontal * depth;
}