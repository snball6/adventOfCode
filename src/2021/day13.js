function buildDictionary(input){
    let map = {}

    for(let i = 0; i< input.length; i++){
        let key = input[i][0]+","+input[i][1];
        map[key] = '#';
    }
    return map;
}

function foldAndCount(dots, folds){
    let map = buildDictionary(dots);


    let tempMap = {};
    //for a loop later
    let fold = folds[0].split("=");

    if(fold[0]=='y'){
        let foldRow = fold[1]
        for(key in map){
            let split = key.split(",");
            let x = parseInt(split[0]);
            let y = parseInt(split[1]);
            if(y>foldRow){
                let yTranslate = (y-foldRow)*2
                //make new map because I'm suspicious how modifying the map I'm itterating over will go...
                let newY = y-yTranslate;
                tempMap[x + ',' + newY] = '#';
            } else {
                tempMap[key] = '#'
            }
        }
    } else if (fold[0] =='x'){
        let foldRow = fold[1]
        for(key in map){
            let split = key.split(",");
            let x = parseInt(split[0]);
            let y = parseInt(split[1]);
            if(x>foldRow){
                let xTranslate = (x-foldRow)*2
                let newX = x-xTranslate;
                tempMap[newX + ',' + y] = '#';
            } else {
                tempMap[key] = '#'
            }
        }
    }

    return Object.keys(tempMap).length;
}