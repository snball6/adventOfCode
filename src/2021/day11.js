class Octo {
    constructor(rowIndex, colIndex, value) {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        this.value = value;
        this.hasFlashed = false;
    }
}

function countFlashes(input, days) {
    let flashesCount = 0;

    let octoArray = parseToOctopus(input);
    for(let day = 1; day < days; day++){
        octoArray = takeStep(octoArray);

        //get flashed
        let flashed = getAllFlashed(octoArray);
        flashesCount+=flashed.length;

        //resent flashed bool
        for(const flashedOcto of flashed){
            flashedOcto.hasFlashed = false;
        }
    }

    return flashesCount;
}



function parseToOctopus(input) {
    let octoArray = [];

    for (let i = 0; i < input.length; i++) {
        let rowArray = [];
        let splitString = input[i].split("");
        for (let j = 0; j < splitString.length; j++) {
            rowArray.push(
                new Octo(i, j, parseInt(splitString[j]))
            );
        }
        octoArray.push(rowArray);
    }

    return octoArray;
}

function parseToArray(octoArray) {
    let intArray = [];

    for (let i = 0; i < octoArray.length; i++) {
        let rowArray = [];
        for (let j = 0; j < octoArray[i].length; j++) {
            rowArray.push(
                octoArray[i][j].value
            );
        }
        intArray.push(rowArray);
    }

    return intArray;
}

function takeStep(input) {

    //increase all
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            let currentOcto = input[row][col];
            currentOcto.value++;
            if (currentOcto.value > 9) {
                //increaseNeighbors
                flash(currentOcto, input);
            }
        }
    }
    console.log('initial increase', parseToArray(input));

    //handle chain reaction flash
    let filteredOcto = getAllUnflashed(input);

    while (filteredOcto.length > 0) {
        for (const octo of filteredOcto) {
            flash(octo, input)
        }
        filteredOcto = getAllUnflashed(input);
    }

    //decrease flashed oct to 0
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            let currentOcto = input[row][col];

            if (currentOcto.value > 9) {
                currentOcto.value = 0;
            }
        }
    }
    return input;
}

function getAllUnflashed(octo2DArray) {
    let octo1DArray = [];
    for (let row = 0; row < octo2DArray.length; row++) {
        let filteredArray = octo2DArray[row].filter(octo => octo.value > 9 && !octo.hasFlashed);
        octo1DArray = octo1DArray.concat(filteredArray)
    }
    return octo1DArray;
}

function getAllFlashed(octo2DArray) {
    let octo1DArray = [];
    for (let row = 0; row < octo2DArray.length; row++) {
        let filteredArray = octo2DArray[row].filter(octo => octo.hasFlashed);
        octo1DArray = octo1DArray.concat(filteredArray)
    }
    return octo1DArray;
}

function flash(octo, octoArray) {
    octo.hasFlashed = true; //reset to 0 can wait until all flashes finished

    let notTopEdge = octo.rowIndex > 0;
    let notLeftEdge = octo.colIndex > 0;
    let notBottomEdge = octo.rowIndex < octoArray.length - 1;
    let notRightEdge = octo.colIndex < octoArray[0].length - 1;

    //abc
    //d*e
    //fgh

    //a b and c update
    if (notTopEdge) {
        if (notLeftEdge) {
            octoArray[octo.rowIndex - 1][octo.colIndex - 1].value++;
        }

        octoArray[octo.rowIndex - 1][octo.colIndex].value++;

        if (notRightEdge) {
            octoArray[octo.rowIndex - 1][octo.colIndex + 1].value++;
        }
    }

    //d and e
    if (notLeftEdge) {
        octoArray[octo.rowIndex][octo.colIndex - 1].value++;
    }

    if (notRightEdge) {
        octoArray[octo.rowIndex][octo.colIndex + 1].value++;
    }

    //f g and h update
    if (notBottomEdge) {
        if (notLeftEdge) {
            octoArray[octo.rowIndex + 1][octo.colIndex - 1].value++;
        }

        octoArray[octo.rowIndex + 1][octo.colIndex].value++;

        if (notRightEdge) {
            octoArray[octo.rowIndex + 1][octo.colIndex + 1].value++;
        }
    }
}
