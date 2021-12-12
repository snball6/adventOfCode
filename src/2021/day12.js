function buildCaves(input) {
    let caveMap = {

    };

    input.forEach(connection => {
        let left = connection[0];
        let right = connection[1];

        //add new caves if they do not already exists
        if (caveMap[left] == undefined) {
            caveMap[left] = {
                adjacent: []
            }
        };
        if (caveMap[right] == undefined) {
            caveMap[right] = {
                adjacent: []
            }
        };

        //add mappings
        caveMap[left].adjacent.push(right);
        caveMap[right].adjacent.push(left);
    });

    return caveMap;
}


function findPossiblePaths(input) {
    let caveMap = buildCaves(input);
    let paths = buildPaths(caveMap, 'start', []);
    return paths;
}

function buildPaths(caveMap, currentNode, pathArray) {
    if (currentNode == 'end') {
        let pathForThisBranch = pathArray.slice();
        pathForThisBranch.push('end');
        //if next node is end return string
        return [pathForThisBranch];
    } else {
        let previousVisits = pathArray.filter(path => path == currentNode).length;
        if (!isUpperCase(currentNode) && previousVisits >= 1) {
            //next node has been visited once - small cave
            return "No path";
        }
    }

    //for each adjacent build a path
    let paths = [];

    caveMap[currentNode].adjacent.forEach(nextNode => {
        let pathForThisBranch = pathArray.slice();
        pathForThisBranch.push(currentNode);
        let tempPath = buildPaths(caveMap, nextNode, pathForThisBranch);

        if (tempPath != "No path") {
            paths = paths.concat(tempPath);
        }
    });

    return paths;
}


function findPossiblePathsPart2(input) {
    let caveMap = buildCaves(input);
    let paths = buildPathsPart2(caveMap, 'start', [], false);
    return paths;
}

function buildPathsPart2(caveMap, currentNode, pathArray, hasVisitedSmallCaveTwice) {
    if (currentNode == 'end') {
        let pathForThisBranch = pathArray.slice();
        pathForThisBranch.push('end');
        //if next node is end return string
        return [pathForThisBranch];
    } else {
        let previousVisits = pathArray.filter(path => path == currentNode).length;
        if (!isUpperCase(currentNode) &&
            previousVisits >= 1) {
            //next node has been visited once - small cave
            if (hasVisitedSmallCaveTwice || currentNode == 'start') { //already double visited or start cave
                return "No path";
            } else {
                hasVisitedSmallCaveTwice = true; //double visiting now and allowed to proceed
            }
        }
    }

    //for each adjacent build a path
    let paths = [];

    caveMap[currentNode].adjacent.forEach(nextNode => {
        let pathForThisBranch = pathArray.slice();
        pathForThisBranch.push(currentNode);
        let tempPath = buildPathsPart2(caveMap, nextNode, pathForThisBranch, hasVisitedSmallCaveTwice);

        if (tempPath != "No path") {
            paths = paths.concat(tempPath);
        }
    });

    return paths;
}


function isUpperCase(str) {
    return str === str.toUpperCase();
}