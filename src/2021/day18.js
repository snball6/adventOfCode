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

    let pairReplaced = [];
    outside1:
    while (index < snailNumber.length) {
        switch (snailNumber[index]) {
            case "[":
            case "]":
            case ",":
                break;
            default:
                let number = parseInt(snailNumber[index]);
                if (number >= 10) {
                    const beforeNum = snailNumber.slice(0, index);
                    const afterNum = snailNumber.slice(index + 1);
                    pairReplaced = beforeNum.concat(createSplitPair(number)).concat(afterNum);
                    break outside1;
                }
        }
        index++;
    }
    return pairReplaced;
}

function createSplitPair(number) {
    return ['[',
        Math.floor(number / 2)
        , ',',
        Math.ceil(number / 2)
        , ']'
    ]
}

function stringToStringIntArray(snailNumber) {
    let index = 0;

    let numArray = [];
    while (index < snailNumber.length) {
        switch (snailNumber[index]) {
            case "[":
            case "]":
            case ",":
                numArray.push(snailNumber[index]);
                break;
            default:
                numArray.push(parseInt(snailNumber[index]));
                break;
        }
        index++;
    }
    return numArray;
}

function addSnailNumbers(stringArray) {
    let sum = stringToStringIntArray(stringArray[0]);
    for (let i = 1; i < stringArray.length; i++) {
        let intParsed = stringToStringIntArray(stringArray[i]);
        sum = ['['].concat(sum).concat([',']).concat(intParsed).concat([']']);
        sum = reduce(sum);
    }
    return sum.join("");
}

function reduce(sum) {
    let needsExplosion = false;
    let needsSplit = false;
    let leftBracketCount = 0;
    for (let i = 0; i < sum.length; i++) {
        switch (sum[i]) {
            case "[":
                leftBracketCount++;
                if (leftBracketCount > 4) {
                    needsExplosion = true;
                }
                break;
            case "]":
                leftBracketCount--;
                break;
            case ",":
                break;
            default:
                if (sum[i] > 9) {
                    needsSplit = true;
                }
                break;
        }
    }

    if (needsExplosion) {
        sum = explode(sum);
        return reduce(sum);
    } else if (needsSplit) {
        sum = split(sum);
        return reduce(sum);
    } else {
        return sum;
    }
}

function calculateMagnitude(snailNumber) {
    let magReduced = [];

    outerbreak:
    for (let i = 0; i < snailNumber.length; i++) {
        switch (snailNumber[i]) {
            case "[":
            case "]":
                break;
            case ",":
                if (Number.isInteger(snailNumber[i - 1])
                    && Number.isInteger(snailNumber[i + 1])) {

                    let magnitude = snailNumber[i - 1] * 3 + snailNumber[i + 1] * 2;
                    magReduced = snailNumber.slice(0, i - 2).concat([magnitude]).concat(snailNumber.slice(i + 3));
                    break outerbreak;
                }
            default:
                break;
        }
    }

    if (magReduced.includes(',')) {
        return calculateMagnitude(magReduced);
    } else {
        return magReduced[0];
    }
}