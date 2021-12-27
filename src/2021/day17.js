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

        if (yPos > maxHeightData.maxHeight) {
            maxHeightData = yPos;
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
        console.log(xPos, yPos);
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
    velocity: [6, 9],
    maxHeight: 45
};

function findStylishVelocity(target) {

    let safeMaxY = 0;
    for (let x = 0; x < target.xMax; x++) {
        for (let y = 0; y < safeMaxY; y++) {
            // hitsTarget(x, y, target);
        }
    }

    return {};
}