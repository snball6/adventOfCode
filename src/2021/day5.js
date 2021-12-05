function filterToHorizontalAndVertical(input) {
    //where x1 and x2 match or where y1 and y2 match
    return input.filter(line => line.start[0] == line.end[0] || line.start[1] == line.end[1]);
}

function buildDictionaryOfVents(input) {
    let dictionary = {};

    let x1;
    let y1;
    let x2;
    let y2;
    for (let i = 0; i < input.length; i++) {
        let x1 = input[i].start[0];
        let y1 = input[i].start[1];
        let x2 = input[i].end[0];
        let y2 = input[i].end[1];

        if (isHorizontal(input[i])) {
            if (isAscending(x1, x2)) {
                for (let j = x1; j <= x2; j++) {
                    addOrUpdate(dictionary, j + ',' + y1);
                }
            } else {
                for (let j = x1; j >= x2; j--) {
                    addOrUpdate(dictionary, j + ',' + y1);
                }
            }
        } else if (isVertical(input[i])) {
            if (isAscending(y1, y2)) {
                for (let j = y1; j <= y2; j++) {
                    addOrUpdate(dictionary, x1 + ',' + j);
                }
            } else {
                for (let j = y1; j >= y2; j--) {
                    addOrUpdate(dictionary, x1 + ',' + j);
                }
            }
        } else {
            //diagonal cases
            if (isAscending(x1, x2)) {
                //if x ascending
                if (isAscending(y1, y2)) {
                    //if y also ascending
                    let y = y1;
                    for (let x = x1; x <= x2; x++) {
                        addOrUpdate(dictionary, x + ',' + y);
                        y++;
                    }
                } else {
                    // if y descending
                    let y = y1;
                    for (let x = x1; x <= x2; x++) {
                        addOrUpdate(dictionary, x + ',' + y);
                        y--;
                    }
                }
            } else {
                //if x descending
                if (isAscending(y1, y2)) {
                    //if y also ascending
                    let y = y1;
                    for (let x = x1; x >= x2; x--) {
                        addOrUpdate(dictionary, x + ',' + y);
                        y++;
                    }
                } else {
                    // if y descending
                    let y = y1;
                    for (let x = x1; x >= x2; x--) {
                        addOrUpdate(dictionary, x + ',' + y);
                        y--;
                    }
                }
            }
        }
    }
    return dictionary;
}

function getCountOf2OrGreaterOverlaps(input) {
    let dictionary = buildDictionaryOfVents(input);

    let total = 0;
    for (point in dictionary) {
        if (dictionary[point] >= 2) {
            total++;
        }
    }
    return total;
}


function isHorizontal(lineData) {
    return lineData.start[1] == lineData.end[1];
}

function isVertical(lineData) {
    return lineData.start[0] == lineData.end[0];
}

function isAscending(start, end) {
    return start < end;
}

function addOrUpdate(dictionary, key) {
    if (key in dictionary) {
        dictionary[key]++;
    } else {
        dictionary[key] = 1;
    }
}