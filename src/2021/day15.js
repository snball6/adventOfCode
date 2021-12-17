// let tiny = [
//     '116',
//     '138',
//     '213'
// ]
function findLowestRiskPath(stringArray) {
    let tree = buildTree(stringArray);
    let endPoint = (stringArray[0].length -1) + ',' + (stringArray.length -1);
    let paths = traverseTree(tree, [], 0, '0,0', endPoint);

    let minimum = paths[0].riskValue; //start value
    let minPath = paths[0].path;

    paths.forEach(path => {
        if (path.riskValue < minimum) {
            minimum = path.riskValue;
            minPath = path.path;
        }
    });
    console.log(minPath);
    return minimum;
}

function traverseTree(tree, path, total, nextNode, endPoint) {
    // console.log("-----------------");
    // console.log('path', path);
    // console.log('total', total);
    // console.log('nextNode', nextNode);
    let newPath = path.slice(0);
    newPath.push(nextNode);
    if (nextNode != '0,0') {
        total += tree[nextNode].value;
    }

    if (nextNode == endPoint) {
        //end of path and returns single element
        return [{
            path: newPath,
            riskValue: total
        }]
    }

    let adjacent = tree[nextNode].adjacent.filter(node => !newPath.includes(node)); //adjacent items not already visited
    let pathsRecursed = [];
    adjacent.forEach(node => {
        //not end of path and keeps going to find the rest
        let nextLevelPaths = traverseTree(tree, newPath, total, node, endPoint);
        pathsRecursed = pathsRecursed.concat(nextLevelPaths);
    });

    //if no adjacent items, never entered forEach and returns an empty array
    return pathsRecursed;

}

function buildTree(stringArray) {
    let nodes = {}

    for (let y = 0; y < stringArray.length; y++) {
        for (let x = 0; x < stringArray[0].length; x++) {
            let adjacentNodes = []
            if (notBottomRow(y, stringArray)) {
                adjacentNodes.push(x + ',' + (y + 1));
            }
            if (notRightEdge(x, stringArray)) {
                adjacentNodes.push((x + 1) + ',' + y);
            }
            //I'm hoping I'm safe to only check moving down and right since it SIGNIFICANTLY increases this search, but we'll see 
            // if (notLeftEdge(x)) {
            //     adjacentNodes.push((x - 1) + ',' + y);
            // }
            // if (notTopRow(y)) {
            //     adjacentNodes.push(x + ',' + (y - 1));
            // }
            
            nodes[x + ',' + y] = {
                value: parseInt(stringArray[y][x]),
                adjacent: adjacentNodes
            }
        }
    }
    return nodes;
}

//reuse and adapt from day 9
function notTopRow(y) {
    return y != 0;
}

function notLeftEdge(x) {
    return x != 0;
}

function notRightEdge(x, input) {
    return x != input[0].length - 1;
}

function notBottomRow(y, input) {
    return y != input.length - 1;
}