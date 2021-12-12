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

    return paths
}

function buildPaths(caveMap, currentNode, pathArray) {
    console.log('currentNode:', currentNode);
    console.log('pathArray:', pathArray);
    if (currentNode == 'end') {
        console.log("END OF BRANCH");
        let pathForThisBranch = pathArray.slice();
        pathForThisBranch.push('end');
        //if next node is end return string
        return [pathForThisBranch];
    } else {
        let previousVisits = pathArray.filter(path => path == currentNode).length;
        if (!isUpperCase(currentNode) && previousVisits >= 1) {
            console.log("small cave - too many visits");
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

    console.log("PATHS", paths);
    return paths;
}



















function isUpperCase(str) {
    return str === str.toUpperCase();
}