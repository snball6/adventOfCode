function recordTailMovement(direction, moves, head, tail, tailMovements) {
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

    for (let i = moves; i > 0; i--) {
        //loop the number of moves

        head.x += xIncrement;
        head.y += yIncrement;
        //right
        if (head.x - 1 > tail.x) { //if head is at least 1 space away
            tail.x++;
            //diagonal up
            if (head.y > tail.y) {
                tail.y++;
            }
            //diagonal down
            if (head.y < tail.y) {
                tail.y--;
            }
        }
        //up
        if (head.y - 1 > tail.y) { //if head is at least 1 space away
            tail.y++;
            //diagonal right
            if (head.x > tail.x) {
                tail.x++;
            }
            //diagonal left //untested
            if (head.x < tail.x) {
                tail.x--;
            }
        }
        //left
        if (head.x + 1 < tail.x) { //if head is at least 1 space away
            tail.x--;
            //diagonal up
            if (head.y > tail.y) {
                tail.y++;
            }
            //diagonal down
            if (head.y < tail.y) { //untested
                tail.y--;
            }
        }
        //down //all untested - copy paste reverse from up
        if (head.y + 1 < tail.y) { //if head is at least 1 space away
            tail.y--;
            //diagonal right
            if (head.x > tail.x) {
                tail.x++;
            }
            //diagonal left //untested
            if (head.x < tail.x) {
                tail.x--;
            }
        }

        tailMovements[tail.x + ',' + tail.y] = '#';
    }

    return tailMovements
}

function countTailVisitCount(input) {
    let head = {
        x: 0,
        y: 0
    }
    let tail = {
        x: 0,
        y: 0
    }
    let tailMovements = {
        '0,0': '#'
    }

    for (let i = 0; i < input.length; i++) {
        recordTailMovement(input[i][0], input[i][1], head, tail, tailMovements)
    }

    return Object.keys(tailMovements).length;

}