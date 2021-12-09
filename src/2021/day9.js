function findLowestPoints(input) {
    let lowest = [];
    let tempCurrent;
    //for each row
    for (let i = 0; i < input.length; i++) {
        //for each string
        for (let j = 0; j < input[i].length; j++) {
            let lowCheck = true;
            tempCurrent = input[i][j]; //might need to parse int here, but I think I can get away with it

            let logThisLoop = true;
            if (logThisLoop) console.log("next:", tempCurrent);
            if (notTopRow(i)) {
                if (!isLessThan(tempCurrent,input[i - 1][j])) {
                    if (logThisLoop) console.log("Top is lower")
                    lowCheck = false;
                };
            }

            if (notLeftEdge(j)) {
                if (!isLessThan(tempCurrent, input[i][j - 1])) {
                    if (logThisLoop) console.log("left is lower")
                    lowCheck = false;
                };
            }

            if (notBottom(i, input)) {
                if (!isLessThan(tempCurrent, input[i + 1][j])) {
                    if (logThisLoop) console.log("bottom is lower")
                    lowCheck = false;
                };
            }

            if (notRightEdge(j, input)) {
                if (!isLessThan(tempCurrent, input[i][j + 1])) {
                    if (logThisLoop) console.log("right is lower")
                    lowCheck = false;
                };
            }

            if (lowCheck) {
                lowest.push(parseInt(tempCurrent));
            }
        }
    }
    console.log(lowest);
    return lowest;
}


function getRiskLevel(input){
    let lowest = findLowestPoints(input);
    let total = 0;

    for(let i = 0; i<lowest.length; i++){
        total+=lowest[i]+1;
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