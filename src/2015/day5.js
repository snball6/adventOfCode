function isNiceString(input) {
    let vowelsCount = 0;
    let hasDoubleLetter = false;
    let hasNaughtyStrings = false;

    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        let nextChar = (input.length - 1 == i) ? '' : input[i + 1];

        if (isVowel(currentChar)) {
            console.log(currentChar);
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

function countNiceStrings(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNiceString(input[i])) {
            total++;
        }
    }
    return total;
}