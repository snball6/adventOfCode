function hitsTarget(xVel, yVel, target) {
    //target structure expected
    // {
    //     xMin:94,
    //     xMax: 151,
    //     yMin: 156,
    //     yMax: 103,
    // }
    let maxHeightData = {
        velocity: [xVel, yVel],
        maxHeight: 0
    }

    let xPos = 0;
    let yPos = 0;

    while (true) {
        xPos += xVel;
        yPos += yVel;
        if (xVel > 0) {
            xVel--;
        } else if (xVel < 0) {
            xVel++ //curious in what instance my velocity would be negative...
        }
        yVel--;

        // console.log(xPos, yPos);
        if (yPos > maxHeightData.maxHeight) {
            // console.log("higher");
            maxHeightData.maxHeight = yPos;
        }

        //negatives hurting my brain so here's a picture...
        // .............#....#............
        // .......#..............#........
        // ...............................
        // S........................#.....
        // ...............................
        // ...............................
        // ...........................#...
        // ...............................
        // ....................TTTTTTTTTTT <-Y MAX (-5)
        // ....................TTTTTTTTTTT
        // ....................TTTTTTTT#TT
        // ....................TTTTTTTTTTT
        // ....................TTTTTTTTTTT
        // ....................TTTTTTTTTTT <-Y Min (-10)
        if (xPos >= target.xMin &&
            xPos <= target.xMax &&
            yPos >= target.yMin &&
            yPos <= target.yMax) {

            if (globalMaxHeight.maxHeight < maxHeightData.maxHeight) {
                globalMaxHeight = maxHeightData;
            }

            return true;
        }

        if (xPos > target.xMax || yPos < target.yMin) {
            //overshot

            return false;
        }
    }
}

function hitsTargetShortCircuitIfNotStylish(xVel, yVel, target) {
    //target structure expected
    // {
    //     xMin:94,
    //     xMax: 151,
    //     yMin: 156,
    //     yMax: 103,
    // }
    let maxHeightData = {
        velocity: [xVel, yVel],
        maxHeight: 0
    }

    let xPos = 0;
    let yPos = 0;

    while (true) {
        xPos += xVel;
        yPos += yVel;
        if (xVel > 0) {
            xVel--;
        } else if (xVel < 0) {
            xVel++ //curious in what instance my velocity would be negative...
        }
        yVel--;

        // console.log(xPos, yPos);
        if (yPos > maxHeightData.maxHeight) {
            // console.log("higher");
            maxHeightData.maxHeight = yPos;
        } else {
            //if it's on it's downturn
            //and still hasn't beat the max
            //don't bother looping to check if it is going to hit the target
            if (globalMaxHeight.maxHeight > maxHeightData.maxHeight) {
                return false;
            }
        }
        if (xPos >= target.xMin &&
            xPos <= target.xMax &&
            yPos >= target.yMin &&
            yPos <= target.yMax) {

            if (globalMaxHeight.maxHeight < maxHeightData.maxHeight) {
                globalMaxHeight = maxHeightData;
            }

            return true;
        }

        if (xPos > target.xMax || yPos < target.yMin) {
            //overshot
            return false;
        }
    }
}

let globalMaxHeight = {
    velocity: null,
    maxHeight: 0
};

function findStylishVelocity(target) {
    globalMaxHeight = {
        velocity: null,
        maxHeight: 0
    };
    //I think there is a maths way to do this, but brute force because my brain cannot be bothered just now...
    let safeMaxY = 500; //arbitrarily "big"
    for (let x = 0; x < target.xMax; x++) {
        for (let y = safeMaxY; y > 0; y--) {
            hitsTargetShortCircuitIfNotStylish(x, y, target);
        }
    }

    return globalMaxHeight;
}

function countVelocities(target) {
    let total = 0;
    for (let x = 0; x <= target.xMax; x++) {
        for (let y = 1000; y >= target.yMin; y--) {
            if (hitsTarget(x, y, target)) {
                total++;
            };
        }
    }

    return total;
}