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

//just for better readability
function peak(array) {
    return array[array.length - 1];
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