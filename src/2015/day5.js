function isNiceString(input) {
    let vowelsCount = 0;
    let hasDoubleLetter = false;
    let hasNaughtyStrings = false;

    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        let nextChar = (input.length - 1 == i) ? '' : input[i + 1];

        if (isVowel(currentChar)) {
            vowelsCount++;
        }

        if (currentChar == nextChar) {
            hasDoubleLetter = true;
        }

        if (naughtStrings[currentChar] == nextChar) {
            hasNaughtyStrings = true;
        }
    }

    return (vowelsCount >= 3) && hasDoubleLetter && !hasNaughtyStrings;
}

function isVowel(letter) {
    return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
}

let naughtStrings = {
    'a': 'b',
    'c': 'd',
    'p': 'q',
    'x': 'y'
}

function countNiceStrings2(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (hasRepeats(input[i])) {
            total++;
        }
    }
    return total;
}

function hasRepeats(input) {
    let repeatTwoSet = false;
    let repeatWithOneBetween = false;
    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        let nextChar = (input.length - 1 == i) ? '@' : input[i + 1]; //garbage symbol here so I don't get a false match for ends of strings
        let thirdChar = (input.length - 2 == i) ? '%' : input[i + 2];

        let before = input.slice(0, i);
        let after = (input.length - 2 == i) ? [] : input.slice(i + 2, input.length);

        if (before.includes(currentChar + nextChar) ||
            after.includes(currentChar + nextChar)) {
            repeatTwoSet =  true;
        }
        if(currentChar == thirdChar){
            repeatWithOneBetween = true;
        }
    }
    return repeatTwoSet && repeatWithOneBetween;
}


function countNiceStrings(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNiceString(input[i])) {
            total++;
        }
    }
    return total;
}