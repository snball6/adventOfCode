//it's big, it's not super elegant, but it gets the job done
function explode(snailNumber) {
    let leftBracketCount = 0;
    let index = 0;
    while (leftBracketCount < 5) {
        if (snailNumber[index] == "[") {
            leftBracketCount++;
        } else if (snailNumber[index] == "]") {
            leftBracketCount--;
        }
        index++;
    }
    let outerBracketIndex = index - 1;
    let rightBracketIndex = index + 3;

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
                snailNumber[index] = parseInt(snailNumber[index]) + pairRight;
                break outside2;
        }
        index++;
    }
    const beforePair = snailNumber.slice(0, outerBracketIndex);
    const afterPair = snailNumber.slice(rightBracketIndex + 1);
    let pairReplaced = beforePair.concat(0).concat(afterPair);
    return pairReplaced;
}

function split(snailNumber) {
    let index = 0;
    while (index < snailNumber.length) {
        switch (snailNumber[index]) {
            case "[":
            case "]":
            case ",":
                break;
            default:
                let number = parseInt(snailNumber[index]);
                if (number >= 10) {

                }
        }
        index++;
    }
}

function createSplitPair(number) {
    return ['[',
        Math.ceil(number / 2)
        , ',',
        Math.floor(number / 2)
        , ']'
    ]
}
