// https://en.wikipedia.org/wiki/A*_search_algorithm#Pseudocode
// https://briangrinstead.com/blog/astar-search-algorithm-in-javascript/
// https://gist.github.com/bgrins/581352

function findLowestRiskPath(grid) {
    let width = grid[0].length;
    let height = grid.length;
    let intGrid = [];
    for (let y = 0; y < height; y++) {
        let row = [];
        for (let x = 0; x < width; x++) {
            row.push(parseInt(grid[y][x]));
        }
        intGrid.push(row);
    }

    //Using an opensource A* search for search
    let graph = new Graph(intGrid);
    let start = graph.grid[0][0];
    let end = graph.grid[height - 1][width - 1]; //zero index adjustment

    let lowestWeightPath = astar.search(graph, start, end);
    return getWeight(lowestWeightPath);
}

function getWeight(path) {
    let total = 0;
    for (let node = 0; node < path.length; node++) {
        total += path[node].weight;
    }
    return total;
}

function findLowestRiskPathPart2(grid) {
    let intGrid = [];
    for (let downIncrease = 0; downIncrease < 5; downIncrease++) {
        for (let y = 0; y < grid.length; y++) {
            let row = [];
            for (let rightIncrease = 0; rightIncrease < 5; rightIncrease++) {
                for (let x = 0; x < grid[0].length; x++) {
                    let gridValue = parseInt(grid[y][x]) + rightIncrease+downIncrease;
                    row.push(wrapAround(gridValue));
                }
            }
            intGrid.push(row);
        }
    }

    //Using an opensource A* search for search
    let graph = new Graph(intGrid);
    let start = graph.grid[0][0];
    let end = graph.grid[graph.grid.length-1][graph.grid[0].length-1]; //zero index adjustment

    let lowestWeightPath = astar.search(graph, start, end);
    return getWeight(lowestWeightPath);
}

function wrapAround(number) {
    if (number < 10) {
        return number;
    } else {
        return (number % 10) + 1;
    }
}