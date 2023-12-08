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
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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

function getGearMap(input) {

    let dictOfGearAdjacent = {};

    for (let row = 0; row < input.length; row++) {
        let characterSplit = input[row].split("");
        // console.log(characterSplit)
        for (let col = 0; col < characterSplit.length; col++) {
            // console.log("row: " + row + " col: " + col + ": " + characterSplit[col]);
            if (characterSplit[col] == "*") {
                addOrUpdateList(dictOfGearAdjacent, ((row - 1) + "," + (col - 1)), (row + "," + col));
                addOrUpdateList(dictOfGearAdjacent, ((row - 1) + "," + (col - 0)), (row + "," + col));
                addOrUpdateList(dictOfGearAdjacent, ((row - 1) + "," + (col + 1)), (row + "," + col));


                addOrUpdateList(dictOfGearAdjacent, ((row) + "," + (col - 1)), (row + "," + col));
                addOrUpdateList(dictOfGearAdjacent, ((row) + "," + (col + 1)), (row + "," + col));


                addOrUpdateList(dictOfGearAdjacent, ((row + 1) + "," + (col - 1)), (row + "," + col));
                addOrUpdateList(dictOfGearAdjacent, ((row + 1) + "," + (col - 0)), (row + "," + col));
                addOrUpdateList(dictOfGearAdjacent, ((row + 1) + "," + (col + 1)), (row + "," + col));
            }
        }
    }

    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let gearMap = {};

    for (let row = 0; row < input.length; row++) {
        let partNumber = '';
        let characterSplit = input[row].split("");
        let gearsAdjacentToThisPartNumber = [];

        for (let col = 0; col < characterSplit.length; col++) {
            let currentChar = characterSplit[col];
            // console.log("row: " + row + " col: " + col + ": " + characterSplit[col]);

            //add to part number
            if (digits.includes(currentChar)) {
                partNumber += currentChar;
                //if this digit is adjacent to any gears
                if (dictOfGearAdjacent[row + "," + col]) {
                    //add to the gear list
                    gearsAdjacentToThisPartNumber.push(...dictOfGearAdjacent[row + "," + col]);
                }
            }
            //end of part number, update previous
            else {
                //remove duplicates
                gearsAdjacentToThisPartNumber = gearsAdjacentToThisPartNumber.filter(function (v, i, self) {
                    // It returns the index of the first
                    // instance of each value
                    //from https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/
                    return i == self.indexOf(v);
                });

                if (gearsAdjacentToThisPartNumber.length > 0) {
                    for (let g = 0; g < gearsAdjacentToThisPartNumber.length; g++) {
                        let key = gearsAdjacentToThisPartNumber[0];
                        addOrUpdateList(gearMap, key, parseInt(partNumber));
                    }
                    // console.log("adding: " +  parseInt(partNumber));
                    gearsAdjacentToThisPartNumber = [];
                    partNumber = '';
                } else {
                    partNumber = '';
                }
            }

            //last digit add
            if (col == characterSplit.length - 1) {
                gearsAdjacentToThisPartNumber = gearsAdjacentToThisPartNumber.filter(function (v, i, self) {
                    return i == self.indexOf(v);
                });

                if (gearsAdjacentToThisPartNumber.length > 0) {
                    for (let g = 0; g < gearsAdjacentToThisPartNumber.length; g++) {
                        let key = gearsAdjacentToThisPartNumber[0];
                        addOrUpdateList(gearMap, key, parseInt(partNumber));
                    }
                }
            }
        }
    }

    return gearMap;
}

function addOrUpdateList(dictionary, key, gear) {
    if (key in dictionary) {
        dictionary[key].push(gear);
    } else {
        dictionary[key] = [gear];
    }
}

function sumGearRatios(input) {
    let gearMap = getGearMap(input)
    let sum = 0;

    for (const gear in gearMap) {
        if (gearMap[gear].length == 2) {
            sum += gearMap[gear][0] * gearMap[gear][1];
        }
    }
    return sum;
}