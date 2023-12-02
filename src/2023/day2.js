function parseGame(inputRow) {
    var objectShape = {
        'game': null,
        'rounds': [
        ]
    }
    var gameNumberAndData = inputRow.split(':');

    var gameNumber = gameNumberAndData[0].split(' ');
    objectShape.game = parseInt(gameNumber[1]);

    var rounds = gameNumberAndData[1].split(';');

    for (i in rounds) {
        var cubesDictForRound = {};
        var cubes = rounds[i].trim().split(',');
        for (j in cubes) {
            var cubeData = cubes[j].trim().split(' ');
            cubesDictForRound[cubeData[1]] = parseInt(cubeData[0]);
        }
        objectShape.rounds.push(cubesDictForRound)
    }

    return objectShape;
}

let bagCubes = {
    'red': 12,
    'green': 13,
    'blue': 14
}

function isPossible(gameObject) {
    let possible = true;
    for(i in gameObject.rounds){
        for(const dictEntry in gameObject.rounds[i]){
            let roundsNumber = gameObject.rounds[i][dictEntry];
            let bagsNumber = bagCubes[dictEntry];
            if(roundsNumber > bagsNumber){
                possible = false;
                break;
            }
        }
    }
    return possible;
}

function sumPossible(input){
    let sum = 0;
    for(i in input){
        let parsed = parseGame(input[i]);
        if(isPossible(parsed)){
            sum += parsed.game;
        }
    }
    return sum;
}

function getFewestDict(gameObject){
    let minimum = {
        'red': 0,
        'green': 0,
        'blue': 0
    };
    for(i in gameObject.rounds){
        for(const dictEntry in gameObject.rounds[i]){
            let roundsNumber = gameObject.rounds[i][dictEntry];
            let minimumSoFar = minimum[dictEntry];
            if(roundsNumber > minimumSoFar){
                minimum[dictEntry] = roundsNumber
            }
        }
    }
    return minimum;
}

function getPower(bag){
    return bag['red'] * bag['green'] * bag['blue'];
}

function sumPower(input){
    let sum = 0;
    for(i in input){
        let parsed = parseGame(input[i]);
        sum += getPower(getFewestDict(parsed));
    }
    return sum;
}
