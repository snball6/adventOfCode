function buildCaves(input) {
    let caveMap = {

    };

    input.forEach(connection => {
        let left = connection[0];
        let right = connection[1];

        //add new caves if they do not already exists
        if (caveMap[left] == undefined) {
            caveMap[left] = {
                adjacent: [],
                visits: 0,
                isBigCave: isUpperCase(left)
            }
        };
        if (caveMap[right] == undefined) {
            caveMap[right] = {
                adjacent: [],
                visits: 0,
                isBigCave: isUpperCase(right)
            }
        };

        //add mappings
        caveMap[left].adjacent.push(right);
        caveMap[right].adjacent.push(left);
    });

    return caveMap;
}


function findPossiblePaths(input){
    let caveMap = buildCaves(input);

    let paths = [];

    caveMap['start'].adjacent.forEach(adjToStart => {

    });
}

function buildPaths(caveMap, currentNode){
        //if next node is end return string

        //if all next nodes have hit max visits (2 for big 1 for small) return indiciation this is a bad path

        //buildPaths for each adjacent node
}



















function isUpperCase(str) {
    return str === str.toUpperCase();
}