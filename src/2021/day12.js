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


function findPossiblePaths(input){
    let caveMap = buildCaves(input);

    let paths = buildPaths(caveMap, 'start');

    caveMap['start'].adjacent.forEach(adjToStart => {

    });

    return paths
}

function buildPaths(caveMap, currentNode, pathArray){
        if(currentNode == 'end'){
            //if next node is end return string
            return pathArray.push('end');
        } else if (currentNode == 'start'){
            //next node is start - bad path
            return "No path";
        } else {
            let previousVisits = pathArray.filter(path => path==currentNode).length;
            if(!isUpperCase(currentNode) && previousVisits > 1 ){
                //next node has been visited once - small cave
                return "No path";
            } else if(isUpperCase(currentNode) && previousVisits > 2){
                //next node has already been visited twice - big cave
                return "No path";
            };
        }

        //for each adjacent build a path
        let paths = [];

        caveMap[currentNode].adjacent.forEach(nextNode => {
            let pathForThisBranch = pathArray.slice().push(currentNode);
            let tempPath = buildPaths(caveMap, currentNode, pathForThisBranch);

            if(tempPath != "No path"){
                paths.push(tempPath);
            }
        });

        return paths;
}



















function isUpperCase(str) {
    return str === str.toUpperCase();
}