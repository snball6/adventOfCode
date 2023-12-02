function getFirstLast(inputRow) {
    //Number extraction found via https://www.tutorialspoint.com/extract-a-number-from-a-string-using-javascript#:~:text=Users%20can%20follow%20the%20syntax,digits%20in%20the%20given%20string.
    let charArray = [...inputRow]
    let numbers = charArray.reduce(function (numString, element) {
        let nums = "0123456789";
        if (nums.includes(element)) {
            return numString + element;
        }
        return numString;
    }, "");


    return parseInt(numbers[0] + numbers[numbers.length - 1]);
}

function getFirstPuzzleResult(input) {
    let total = 0;
    for (row of input) {
        total += getFirstLast(row);
    }
    return total;
}

function getSecondPuzzleResult(input) {
    let total = 0;
    for (row of input) {
        total += getFirstLastPart2(row);
    }
    return total;
}

function getFirstLastPart2(inputRow) {
    //gonna brute force it cause why not. Behold my ugly code!

    let first;
    let last;

    let charArray = [...inputRow]
    for (let i = 0; i < charArray.length; i++) {
        first = findFirstNumber(charArray, i);
        if (first != null) {
            firstMatchDigits[first] = first;
            break;
        }
    }

    for (let i = charArray.length - 1; i >= 0; i--) {
        last = findLastNumber(charArray, i);
        if (last != null) {
            lastMatchDigits[last] = last;
            break;
        }
    }
    return parseInt(first + last);
}

function findFirstNumber(charArray, i) {
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(charArray[i])) {
        return charArray[i];
    }
    if (['o', 't', 's'].includes(charArray[i]) && (charArray.length - i >= 3)) {
        let maybeNumber = charArray[i] + charArray[i + 1] + charArray[i + 2];
        switch (maybeNumber) {
            case 'one':
                return '1';
            case 'two':
                return '2';
            case 'six':
                return '6';
        }
    }
    if (['f', 'n'].includes(charArray[i]) && (charArray.length - i >= 4)) {
        let maybeNumber = charArray[i] + charArray[i + 1] + charArray[i + 2] + charArray[i + 3];
        switch (maybeNumber) {
            case 'four':
                return '4';
            case 'five':
                return '5';
            case 'nine':
                return '9';
        }
    }
    if (['s', 'e', 't'].includes(charArray[i]) && (charArray.length - i >= 5)) {
        let maybeNumber = charArray[i] + charArray[i + 1] + charArray[i + 2] + charArray[i + 3] + charArray[i + 4];
        switch (maybeNumber) {
            case 'three':
                return '3';
            case 'seven':
                return '7';
            case 'eight':
                return '8';
        }
    }
}
let firstMatchDigits = {
    
}

let lastMatchDigits = {
    
}
function findLastNumber(charArray, i) {
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(charArray[i])) {
        return charArray[i];
    }
    if (['e', 'o', 'x'].includes(charArray[i]) && (i >= 2)) {
        let maybeNumber = charArray[i - 2] + charArray[i - 1] + charArray[i];
        switch (maybeNumber) {
            case 'one':
                return '1';
            case 'two':
                return '2';
            case 'six':
                return '6';
        }
    }
    if (['e', 'r'].includes(charArray[i]) && (i >= 3)) {
        let maybeNumber = charArray[i - 3] + charArray[i - 2] + charArray[i - 1] + charArray[i];
        switch (maybeNumber) {
            case 'four':
                return '4';
            case 'five':
                return '5';
            case 'nine':
                return '9';
        }
    }
    if (['e', 'n', 't'].includes(charArray[i]) && (i >= 4)) {
        let maybeNumber = charArray[i - 4] + charArray[i - 3] + charArray[i - 2] + charArray[i - 1] + charArray[i];
        switch (maybeNumber) {
            case 'three':
                return '3';
            case 'seven':
                return '7';
            case 'eight':
                return '8';
        }
    }
}