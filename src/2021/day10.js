function findIllegalClosureOnLine(input) {
    let inputArray = input.split("");

    let stack = [];
    for (let i = 0; i < inputArray.length; i++) {
        switch (inputArray[i]) {
            case '(':
            case '[':
            case '{':
            case '<':
                stack.push(inputArray[i]);
                break;
            case ')':
            case ']':
            case '}':
            case '>':
                if (isMatchingClosure(peak(stack), inputArray[i])) {
                    stack.pop();
                }
                else {
                    return inputArray[i];
                }
                break;
        }
    }
    return "";
}

function findMissingClosures(input) {
    let inputArray = input.split("");

    let stack = [];
    for (let i = 0; i < inputArray.length; i++) {
        switch (inputArray[i]) {
            case '(':
            case '[':
            case '{':
            case '<':
                stack.push(inputArray[i]);
                break;
            case ')':
            case ']':
            case '}':
            case '>':
                if (isMatchingClosure(peak(stack), inputArray[i])) {
                    stack.pop();
                }
                else {
                    return "CORRUPT LINE";
                }
                break;
        }
    }

    let closures = "";
    while (stack.length > 0) {
        closures += getMatchingClosure(stack.pop());
    }

    return closures;
}

//just for better readability
function peak(array) {
    return array[array.length - 1];
}

function getMatchingClosure(opening) {
    switch (opening) {
        case '(':
            return ')';
        case '[':
            return ']';
        case '{':
            return '}';
        case '<':
            return '>';
    }
}

function isMatchingClosure(opening, closing) {
    switch (opening) {
        case '(':
            return closing == ')';
        case '[':
            return closing == ']';
        case '{':
            return closing == '}';
        case '<':
            return closing == '>';
    }
}

function scoreClosureErrors(input) {
    let score = 0;
    let temp;
    for (let line = 0; line < input.length; line++) {
        temp = findIllegalClosureOnLine(input[line]);
        switch (temp) {
            case ')':
                score += 3;
                break;
            case ']':
                score += 57;
                break;
            case '}':
                score += 1197;
                break;
            case '>':
                score += 25137;
                break;
                break;
            default:
            //do nothing
        }
    }
    return score;
}

function scoreClosures(closureString) {
    let total = 0;

    for (let char = 0; char < closureString.length; char++) {
        total *= 5;
        switch (closureString[char]) {
            case ')':
                total += 1;
                break;
            case ']':
                total += 2;
                break;
            case '}':
                total += 3;
                break;
            case '>':
                total += 4;
                break;
            default:
        }
    }

    return total;
}


function scoreAutoCompletes(input) {
    let scores = [];

    let filteredInput = input.filter(line => findIllegalClosureOnLine(line) == ""); //just non corrupt ones;

    for (let i = 0; i < filteredInput.length; i++) {
        scores.push(
            scoreClosures(
                findMissingClosures(filteredInput[i])
            )
        )
    }
    scores.sort(function(a, b){return a-b});

    let scoreMiddle = (scores.length-1)/2;

    return scores[scoreMiddle];
}