function findLowestPoints(input) {
    let lowest = [];
    let tempCurrent;
    //for each row
    for (let i = 0; i < input.length; i++) {
        //for each string
        for (let j = 0; j < input[i].length; j++) {
            let lowCheck = true;
            tempCurrent = input[i][j];

            if (notTopRow(i)) {
                if (!isLessThan(tempCurrent, input[i - 1][j])) {
                    lowCheck = false;
                };
            }

            if (notLeftEdge(j)) {
                if (!isLessThan(tempCurrent, input[i][j - 1])) {
                    lowCheck = false;
                };
            }

            if (notBottom(i, input)) {
                if (!isLessThan(tempCurrent, input[i + 1][j])) {
                    lowCheck = false;
                };
            }

            if (notRightEdge(j, input)) {
                if (!isLessThan(tempCurrent, input[i][j + 1])) {
                    lowCheck = false;
                };
            }

            if (lowCheck) {
                lowest.push(parseInt(tempCurrent));
            }
        }
    }
    return lowest;
}


function getRiskLevel(input) {
    let lowest = findLowestPoints(input);
    let total = 0;

    for (let i = 0; i < lowest.length; i++) {
        total += lowest[i] + 1;
    }
    return total;
}


//functions used once are just like comments, but are also good sometimes for sanity :)
function notTopRow(i) {
    return i != 0;
}

function notLeftEdge(j) {
    return j != 0;
}

function notRightEdge(j, input) {
    return j != input[0].length - 1;
}

function notBottom(i, input) {
    return i != input.length - 1;
}

function isLessThan(current, neighbor) {
    return current < neighbor;
}

//----------------------------part2--------------------------
function findLowestPointsLocations(input) {
    let lowest = [];
    let tempCurrent;
    //for each row
    for (let i = 0; i < input.length; i++) {
        //for each string
        for (let j = 0; j < input[i].length; j++) {
            let lowCheck = true;
            tempCurrent = input[i][j];

            if (notTopRow(i)) {
                if (!isLessThan(tempCurrent, input[i - 1][j])) {
                    lowCheck = false;
                };
            }

            if (notLeftEdge(j)) {
                if (!isLessThan(tempCurrent, input[i][j - 1])) {
                    lowCheck = false;
                };
            }

            if (notBottom(i, input)) {
                if (!isLessThan(tempCurrent, input[i + 1][j])) {
                    lowCheck = false;
                };
            }

            if (notRightEdge(j, input)) {
                if (!isLessThan(tempCurrent, input[i][j + 1])) {
                    lowCheck = false;
                };
            }

            if (lowCheck) {
                lowest.push({
                    value: parseInt(tempCurrent),
                    i: i,
                    j: j
                }
                );
            }
        }
    }
    return lowest;
}