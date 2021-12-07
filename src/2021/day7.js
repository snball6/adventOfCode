function costToAlign_part1(crabs, position){
    let totalFuel = 0;

    for(let i = 0; i<crabs.length; i++){
        totalFuel += moveCrab_part1(crabs[i], position);
    }
    return totalFuel;
}


function moveCrab_part1(currentPosition, endingPosition){
    if(currentPosition > endingPosition){
        return currentPosition - endingPosition;
    } else {
        return endingPosition - currentPosition;
    }
}

function calculateCheapestPosition_part1(crabs){
    //assuming the least costly spot will be within the range of positions crabs are already in
    let min = Math.min(...crabs);
    let max = Math.max(...crabs);

    let currentMinPosition = 1;
    let currentMinCost = costToAlign_part1(crabs, 1);
    for(let i = min; i<=max; i++){
        let cost = costToAlign_part1(crabs, i)
        if(cost < currentMinCost){
            currentMinCost = cost;
            currentMinPosition = i;
        }
    }

    return [currentMinPosition, currentMinCost];
}

function moveCrab_part2(currentPosition, endingPosition){
    let distance = 0;
    if(currentPosition > endingPosition){
        distance = currentPosition - endingPosition;
    } else {
        distance = endingPosition - currentPosition;
    }

    return 0.5*(distance*distance)+0.5*distance //0.5x^2+0.5x
    //thank you internet for helping me remember how to find the slope from points...
}

function costToAlign_part2(crabs, position){
    let totalFuel = 0;

    for(let i = 0; i<crabs.length; i++){
        totalFuel += moveCrab_part2(crabs[i], position);
    }
    return totalFuel;
}

function calculateCheapestPosition_part2(crabs){
    //assuming the least costly spot will be within the range of positions crabs are already in
    let min = Math.min(...crabs);
    let max = Math.max(...crabs);

    let currentMinPosition = 1;
    let currentMinCost = costToAlign_part2(crabs, 1);
    for(let i = min; i<=max; i++){
        let cost = costToAlign_part2(crabs, i)
        if(cost < currentMinCost){
            currentMinCost = cost;
            currentMinPosition = i;
        }
    }

    return [currentMinPosition, currentMinCost];
}
