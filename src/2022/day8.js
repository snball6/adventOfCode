//PART 1
function getVisibleTrees(input) {
    let visibility = [];
    let visibleCount = 0;
    for (let y = 0; y < input.length; y++) {
        visibility.push([]);
        for (let x = 0; x < input[y].length; x++) {
            let visDirection = getVisibilityInAllDirections(y, x, input);
            visibility[y].push(visDirection);
            if (visDirection != '') {
                visibleCount++;
            }
        }
    }
    return visibleCount;
}

function getVisibilityInAllDirections(treeY, treeX, input) {
    let gridWidth = input[0].length;
    let gridHeight = input.length;
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

//part 2
function getScenicScore(treeY, treeX, input) {
    let gridWidth = input[0].length;
    let gridHeight = input.length;
    let topVisible = 0;
    let rightVisible = 0;
    let bottomVisible = 0;
    let leftVisible = 0;

    let treeHeight = input[treeY][treeX];

    // check up to top - same x different y's
    for (let y = treeY - 1; y >= 0; y--) {
        topVisible++;
        if (treeHeight <= input[y][treeX]) {
            break;
        }
    }

    // check to right - same y different x's
    for (let x = treeX + 1; x < gridWidth; x++) {
        rightVisible++;
        if (treeHeight <= input[treeY][x]) {
            break;
        }
    }

    // check down to bottom - same x different y's
    for (let y = treeY + 1; y < gridHeight; y++) {
        bottomVisible++;
        if (treeHeight <= input[y][treeX]) {
            break;
        }
    }

    // check to left - same y different x's
    for (let x = treeX - 1; x >= 0; x--) {
        leftVisible++;
        if (treeHeight <= input[treeY][x]) {
            break;
        }
    }

    return topVisible * rightVisible * bottomVisible * leftVisible
}

function getTopScenicScore(input) {
    let topScore = 0;
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            let scenicScore = getScenicScore(y, x, input);
            if (topScore < scenicScore) {
                topScore = scenicScore;
            }
        }
    }
    return topScore;
}