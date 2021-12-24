function explode(snailNumber) {
    let leftBracketCount = 0;
    let index = 0;
    while (leftBracketCount < 5) {
        if (snailNumber[index] == "[") {
            leftBracketCount++;
        }
        index++;
    }
    let outerBracketIndex = index-1;
    let rightBracketIndex = index+3;

    let pairLeft = parseInt(snailNumber[index]);
    let pairRightIndex = index + 2 //skipping a , 

    index--;
    outside1:
    while (index >= 0) {
        switch (snailNumber[index]) {
            case "[":
            case "]":
            case ",":
                break;
            default:
                snailNumber[index] = parseInt(snailNumber[index]) + pairLeft;
                break outside1;
        }
        index--;
    }
    index = pairRightIndex;
    let pairRight = parseInt(snailNumber[index]);

    index++;
    outside2:
    while (index < snailNumber.length) {
        switch (snailNumber[index]) {
            case "[":
            case "]":
            case ",":
                break;
            default:
                console.log("here?");
                snailNumber[index] = parseInt(snailNumber[index]) + pairRight;
                break outside2;
        }
        index++;
    }
snailNumber.
    console.log(snailNumber[index]);
    return snailNumber.join("");
}