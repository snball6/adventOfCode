function getVisibleTrees(sample) {
    let visibility = [];
    let visibleCount = 0;
    for (let y = 0; y < sample.length; y++) {
        visibility.push([]);
        for (let x = 0; x < sample[y].length; x++) {
            let visDirection = getVisibilityInAllDirections(y, x, sample);
            visibility[y].push(visDirection);
            if(visDirection!=''){
                visibleCount++;
            }
        }
    }
    return visibleCount;
}

function getVisibilityInAllDirections(treeY, treeX, input) {
    let gridWidth = input[0].length;
    let gridHeight = input.length;
    let direction = ''; //trbl clockwise top/right/bottom/left
    let topVisible = true;
    let rightVisible = true;
    let bottomVisible = true;
    let leftVisible = true;

    let treeHeight = input[treeY][treeX];

    // check up to top - same x different y's
    for (let y = treeY - 1; y >= 0; y--) {
        if (treeHeight <= input[y][treeX]) {
            topVisible = false;
            break;
        }
    }

    // check to right - same y different x's
    for (let x = treeX + 1; x < gridWidth; x++) {
        if (treeHeight <= input[treeY][x]) {
            rightVisible = false;
            break;
        }
    }

    // check down to bottom - same x different y's
    for (let y = treeY + 1; y < gridHeight; y++) {
        if (treeHeight <= input[y][treeX]) {
            bottomVisible = false;
            break;
        }
    }

    // check to left - same y different x's
    for (let x = treeX - 1; x >= 0; x--) {
        if (treeHeight <= input[treeY][x]) {
            leftVisible = false;
            break;
        }
    }

    let directionString =
        (topVisible ? 't' : '') +
        (rightVisible ? 'r' : '') +
        (bottomVisible ? 'b' : '') +
        (leftVisible ? 'l' : '');

    return directionString

}