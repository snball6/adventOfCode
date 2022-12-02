function calcScorePart1(input) {
    let totalScore = 0;

    for (let i = 0; i < input.length; i++) {
        let opponent = input[i][0];
        let you = normalize(input[i][1]);
        totalScore += getScore(you, opponent);

    }
    return totalScore;
}

function getScore(normalizedYou, opp) {
    let score = 0;
    switch (normalizedYou) {
        case 'A':
            score += 1;
            break;
        case 'B':
            score += 2;
            break;
        case 'C':
            score += 3;
            break;
    }
    //draw
    if (normalizedYou == opp) {
        score += 3;
    }
    //win
    else if (
        (normalizedYou == 'A' && opp == 'C') ||  //Rock beats scissors
        (normalizedYou == 'B' && opp == 'A') ||  //Paper beats Rock
        (normalizedYou == 'C' && opp == 'B')   ///Scissors beats Paper
    ) {
        score += 6;
    }
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

function calcScorePart2(input) {
    let totalScore = 0;

    for (let i = 0; i < input.length; i++) {
        let opponent = input[i][0];
        let yourStrategy = input[i][1];
        let you;
        switch (yourStrategy) {
            case 'X': 
                //loose
                switch(opponent){
                    case 'A':
                        you = 'C' //scissors loses to rock
                        break;
                    case 'B':
                        you = 'A' //rock loses to paper
                        break;
                    case 'C':
                        you = 'B' //paper loses to scissors
                        break;
                }
                break;
            case 'Y':
                //tie
                you = opponent;
                break;
            case 'Z':
                //win
                switch(opponent){
                    case 'A':
                        you = 'B' //paper beats to rock
                        break;
                    case 'B':
                        you = 'C' //scissors beats to paper
                        break;
                    case 'C':
                        you = 'A' //rockbeats to scissors
                        break;
                }
                break;
        }

        totalScore += getScore(you, opponent);

    }
    return totalScore;
}
