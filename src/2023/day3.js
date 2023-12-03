function creatAdjacentDictForLookup(inputStringArray) {
    let notSymbols = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


    let dict = {};

    for (let row = 0; row < inputStringArray.length; row++) {
        let characterSplit = inputStringArray[row].split("");
        // console.log(characterSplit)
        for (let col = 0; col < characterSplit.length; col++) {
            // console.log("row: " + row + " col: " + col + ": " + characterSplit[col]);
            if (!notSymbols.includes(characterSplit[col])) {
                dict[(row - 1) + "," + (col - 1)] = true;
                dict[(row - 1) + "," + (col - 0)] = true;
                dict[(row - 1) + "," + (col + 1)] = true;

                dict[row + "," + (col - 1)] = true;
                dict[row + "," + (col + 1)] = true;

                dict[(row + 1) + "," + (col - 1)] = true;
                dict[(row + 1) + "," + (col - 0)] = true;
                dict[(row + 1) + "," + (col + 1)] = true;
            }
        }
    }
    return dict;
}

function sumAdjacentToSymbols(input) {
    let digits = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let adjacentDict = creatAdjacentDictForLookup(input);

    let sum = 0;
    for (let row = 0; row < input.length; row++) {
        let partNumber = '';
        let isAdjacent = false;

        let characterSplit = input[row].split("");

        for (let col = 0; col < characterSplit.length; col++) {

            let currentChar = characterSplit[col];
            // console.log("row: " + row + " col: " + col + ": " + characterSplit[col]);
            //add to part number
            if (digits.includes(currentChar)) {
                partNumber += currentChar;
                if (adjacentDict[row + "," + col] == true) {
                    isAdjacent = true
                }
            }
            //end of part number, update previous
            else {
                if (isAdjacent) {
                    // console.log(partNumber);
                    sum += parseInt(partNumber);
                    // console.log("adding: " +  parseInt(partNumber));
                    partNumber = '';
                    isAdjacent = false;

                } else {
                    partNumber = '';
                }
            }

            //last digit add
            if (col == characterSplit.length - 1 && isAdjacent) {
                sum += parseInt(partNumber);
            }
        }
    }

    return sum;
}