function costToAlign(crabs, position){
    let totalFuel = 0;

    for(let i = 0; i<crabs.length; i++){
        totalFuel += moveCrab(crabs[i], position);
    }
    return totalFuel;
}


function moveCrab(currentPosition, endingPosition){
    if(currentPosition > endingPosition){
        return currentPosition - endingPosition;
    } else {
        return endingPosition - currentPosition;
    }
}

function calculateCheapestPosition(crabs){
    //assuming the least costly spot will be within the range of positions crabs are already in
    let min = Math.min(...crabs);
    let max = Math.max(...crabs);

    let currentMinPosition = 1;
    let currentMinCost = costToAlign(crabs, 1);
    for(let i = min; i<=max; i++){
        let cost = costToAlign(crabs, i)
        if(cost < currentMinCost){
            currentMinCost = cost;
            currentMinPosition = i;
        }
    }

    return [currentMinPosition, currentMinCost];
}