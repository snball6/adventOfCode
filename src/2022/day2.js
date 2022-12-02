
let moveRules = {
    'A': {
        'toLose': 'C',
        'toBeat': 'B',
        'value': 1,
    },
    'B': {
        'toLose': 'A',
        'toBeat': 'C',
        'value': 2
    },
    'C': {
        'toLose': 'B',
        'toBeat': 'A',
        'value': 3
    }
}

function calcScorePart1(input) {
    let totalScore = 0;

    for (let i = 0; i < input.length; i++) {
        let opponent = input[i][0];
        let you = normalize(input[i][1]);
        totalScore += getScore(you, opponent);
    }
    return totalScore;
}

function calcScorePart2(input) {
    let totalScore = 0;

    for (let i = 0; i < input.length; i++) {
        let opponent = input[i][0];
        let yourStrategy = input[i][1];

        let opponentObject = moveRules[opponent];
        let yourMove;
        switch (yourStrategy) {
            case 'X':
                //loose
                yourMove = opponentObject.toLose;
                break;
            case 'Y':
                //draw
                yourMove = opponent;
                break;
            case 'Z':
                //win
                yourMove = opponentObject.toBeat
                break;
        }

        totalScore += getScore(yourMove, opponent);

    }
    return totalScore;
}

function getScore(normalizedYou, opp) {
    let score = 0;

    if (normalizedYou == opp) {
        score += 3;
    } else if (moveRules[opp].toBeat == normalizedYou) {
        score += 6;
    }

    score += moveRules[normalizedYou].value;

    return score;
}

//make same letters for both sides--I assume part 2 won't have  y x and z directly 
//correlate this way, but for now it works
function normalize(input) {
    switch (input) {
        case 'X':
            return 'A';
        case 'Y':
            return 'B';
        case 'Z':
            return 'C';
        default:
            return "uh oh";
    }
}