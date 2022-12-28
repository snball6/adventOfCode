function getStart(grid) {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid.length; x++) {
            if (grid[y][x] == 'S') {
                return [y, x];
            }
        }
    }

}

function getOptions(grid, visited, currentY, currentX) {
    let options = []
    let currentElevation = getElevation(grid, currentY, currentX);
    //top
    if (currentY - 1 > 0) {
        //not already visited
        if (!visited[(currentY - 1) + ',' + currentX]) {
            let topsElevation = getElevation(grid, currentY - 1, currentX);
            if (currentElevation + 1 >= topsElevation) {
                options.push([currentY - 1, currentX]);
            }
        }
    }
    //bottom
    if (currentY + 1 < grid.length) {
        if (!visited[(currentY + 1) + ',' + currentX]) {
            let bottomElevation = getElevation(grid, currentY + 1, currentX);
            if (currentElevation + 1 >= bottomElevation) {
                options.push([currentY + 1, currentX]);
            }
        }
    }
    //right
    if (currentX + 1 < grid[0].length) {
        if (!visited[currentY + ',' + (currentX + 1)]) {
            let rightElevation = getElevation(grid, currentY, currentX + 1);
            if (currentElevation + 1 >= rightElevation) {
                options.push([currentY, currentX + 1]);
            }
        }
    }
    //left
    if (currentX - 1 > 0) {
        if (!visited[currentY + ',' + (currentX - 1)]) {
            let leftElevation = getElevation(grid, currentY, currentX - 1);
            if (currentElevation + 1 >= leftElevation) {
                options.push([currentY, currentX - 1]);
            }
        }
    }

    return options;
}

function getElevation(grid, y, x) {
    let char = grid[y][x];
    if (char == 'S') {
        char = 'a';
    } else if (char == 'E') {
        char = 'z'
    }
    return char.charCodeAt(0);
}

function getLeastSteps(grid) {
    let start = getStart(grid);
    let currentY = start[0];
    let currentX = start[1];
    let visited = {};
    visited[currentY + ',' + currentX];

    let possibleSteps = [];
    findPath(grid, visited, currentY, currentX, possibleSteps);
    return possibleSteps;
}

function findPath(grid, visited, currentY, currentX, possibleSteps) {
    // console.log("Find path");
    console.log("current: " + currentY + ',' + currentX);
    if (grid[currentY][currentX] == 'E') {
        console.log("END");
        possibleSteps.push(Object.keys(visited).length);
        return;
    } else {
        //find available paths
        let nextSteps = getOptions(grid, visited, currentY, currentX);
        // console.log(nextSteps);
        if (nextSteps.length == 0) {
            console.log("No where to go");
            //no where left to go
            return;
        } else {
            let possibleLengths = []
            for (let i = 0; i < nextSteps.length; i++) {
                let newY = nextSteps[i][0];
                let newX = nextSteps[i][1];
                let deepCopyVisited = JSON.parse(JSON.stringify(visited));
                deepCopyVisited[newY + ',' + newX] = true;
                findPath(grid, deepCopyVisited, newY, newX, possibleSteps);
            }
            return;
        }
    }
}