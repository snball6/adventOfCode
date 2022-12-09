function recordTailMovement(direction, moves, knots, tailMovements,) {
    let xIncrement = 0;
    let yIncrement = 0;

    switch (direction) {
        case 'R':
            xIncrement = 1;
            break;
        case 'L':
            xIncrement = -1;
            break;
        case 'D':
            yIncrement = -1;
            break;
        case 'U':
            yIncrement = 1;
            break;
    }
    //loop the number of moves
    for (let i = moves; i > 0; i--) {
        //move first knot
        knots[0].x += xIncrement;
        knots[0].y += yIncrement;
        //loop for all knots
        for (let knotIndex = 0; knotIndex < knots.length - 1; knotIndex++) {
            const leadingKnot = knots[knotIndex];
            const followingKnot = knots[knotIndex + 1];

            moveToFollow(leadingKnot, followingKnot);

            if (knotIndex + 2 == knots.length) {
                tailMovements[followingKnot.x + ',' + followingKnot.y] = '#';
            }
        }
    }

    return tailMovements
}

function moveToFollow(leadingKnot, followingKnot) {
    //right
    if (leadingKnot.x - 1 > followingKnot.x) { //if head is at least 1 space away
        followingKnot.x++;
        //diagonal up
        if (leadingKnot.y > followingKnot.y) {
            followingKnot.y++;
        }
        //diagonal down
        if (leadingKnot.y < followingKnot.y) {
            followingKnot.y--;
        }
    }
    //up
    if (leadingKnot.y - 1 > followingKnot.y) { //if head is at least 1 space away
        followingKnot.y++;
        //diagonal right
        if (leadingKnot.x > followingKnot.x) {
            followingKnot.x++;
        }
        //diagonal left //untested
        if (leadingKnot.x < followingKnot.x) {
            followingKnot.x--;
        }
    }
    //left
    if (leadingKnot.x + 1 < followingKnot.x) { //if head is at least 1 space away
        followingKnot.x--;
        //diagonal up
        if (leadingKnot.y > followingKnot.y) {
            followingKnot.y++;
        }
        //diagonal down
        if (leadingKnot.y < followingKnot.y) { //untested
            followingKnot.y--;
        }
    }
    //down //all untested - copy paste reverse from up
    if (leadingKnot.y + 1 < followingKnot.y) { //if head is at least 1 space away
        followingKnot.y--;
        //diagonal right
        if (leadingKnot.x > followingKnot.x) {
            followingKnot.x++;
        }
        //diagonal left //untested
        if (leadingKnot.x < followingKnot.x) {
            followingKnot.x--;
        }
    }
}

function countTailVisitCount(input, length) {
    let knots = [];
    for (let i = 0; i < length; i++) {
        knots.push({
            x: 0,
            y: 0
        });
    }
    let tailMovements = {
        '0,0': '#'
    }

    for (let i = 0; i < input.length; i++) {
        recordTailMovement(input[i][0], input[i][1], knots, tailMovements)
    }

    return Object.keys(tailMovements).length;

}