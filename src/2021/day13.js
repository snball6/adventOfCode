function buildDictionary(input) {
    let map = {}

    for (let i = 0; i < input.length; i++) {
        let key = input[i][0] + "," + input[i][1];
        map[key] = '#';
    }
    return map;
}

function foldAndCount(dots, folds) {
    let map = buildDictionary(dots);


    let tempMap = {};
    //for a loop later
    let fold = folds[0].split("=");

    if (fold[0] == 'y') {
        let foldRow = fold[1]
        for (key in map) {
            let split = key.split(",");
            let x = parseInt(split[0]);
            let y = parseInt(split[1]);
            if (y > foldRow) {
                let yTranslate = (y - foldRow) * 2
                //make new map because I'm suspicious how modifying the map I'm itterating over will go...
                let newY = y - yTranslate;
                tempMap[x + ',' + newY] = '#';
            } else {
                tempMap[key] = '#'
            }
        }
    } else if (fold[0] == 'x') {
        let foldRow = fold[1]
        for (key in map) {
            let split = key.split(",");
            let x = parseInt(split[0]);
            let y = parseInt(split[1]);
            if (x > foldRow) {
                let xTranslate = (x - foldRow) * 2
                let newX = x - xTranslate;
                tempMap[newX + ',' + y] = '#';
            } else {
                tempMap[key] = '#'
            }
        }
    }

    return Object.keys(tempMap).length;
}

function createFinalOutputVisual(dots, folds) {
    let map = buildDictionary(dots);


    let tempMap = {};

    for (let i = 0; i < folds.length; i++) {
        let tempMap = {};
        let fold = folds[i].split("=");

        if (fold[0] == 'y') {
            let foldRow = fold[1]
            for (key in map) {
                let split = key.split(",");
                let x = parseInt(split[0]);
                let y = parseInt(split[1]);
                if (y > foldRow) {
                    let yTranslate = (y - foldRow) * 2
                    let newY = y - yTranslate;
                    tempMap[x + ',' + newY] = '#';
                } else {
                    tempMap[key] = '#'
                }
            }
        } else if (fold[0] == 'x') {
            let foldRow = fold[1]
            for (key in map) {
                let split = key.split(",");
                let x = parseInt(split[0]);
                let y = parseInt(split[1]);
                if (x > foldRow) {
                    let xTranslate = (x - foldRow) * 2
                    let newX = x - xTranslate;
                    tempMap[newX + ',' + y] = '#';
                } else {
                    tempMap[key] = '#'
                }
            }
        }
        map = tempMap;
    }

    return createImage(map);
}

//is parsing an unparsing all the keys efficient? No, but I don't can't be bothered to take the time to look for better options right now.
function createImage(map){
    let array = [];
    let maxX = 0;
    let maxY = 0;
    for (key in map) {
        let split = key.split(",");
        let x = parseInt(split[0]);
        let y = parseInt(split[1]);

        if(x>maxX){
            maxX = x;
        }

        if(y>maxY){
            maxY = y;
        }
    }

    for(let x = 0; x<=maxX; x++){
        let row = [];
        for(let y =0; y<=maxY; y++){
            row.push(".");
        }
        array.push(row);
    }

    for (key in map) {
        let split = key.split(",");
        let x = parseInt(split[0]);
        let y = parseInt(split[1]);
        array[x][y] = "#";
    }

    //flatten array
    let flattenedArray = []
    array.forEach(row => {
        flattenedArray.push(row.join(""));
    });
    return flattenedArray;
}