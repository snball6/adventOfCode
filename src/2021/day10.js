function findIllegalClosureOnLine(input) {
    let inputArray = input.split("");

    let parenCount = 0;
    let bracketCount = 0;
    let curlyBrace = 0;
    let tagCount = 0;

    console.log(inputArray);
    for (let i = 0; i < inputArray.length; i++) {
        switch (inputArray[i]) {
            case '(':
                parenCount++;
                console.log("paren:", parenCount);
                break;
            case '[':
                bracketCount++;
                console.log("bracket:", bracketCount);
                break;
            case '{':
                curlyBrace++;
                console.log("curly:",curlyBrace);
                break;
            case '<':
                tagCount++;
                console.log("tag:", tagCount);
                break;
            case ')':
                if (parenCount > 0) {
                    parenCount--;
                    console.log("paren:", parenCount);
                } else {
                    return ")";
                }
                break;
            case ']':
                if (bracketCount > 0) {
                    bracketCount--;
                    console.log("bracket:", bracketCount);
                } else {
                    return "]";
                }
                break;
            case '}':
                if (curlyBrace > 0) {
                    curlyBrace--;
                    console.log("curly:",curlyBrace);
                } else {
                    return "}";
                }
                break;
            case '>':
                if (tagCount > 0) {
                    tagCount--;
                    console.log("tag:", tagCount);
                } else {
                    return ">";
                }
                break;
        }
    }
    return "";
}