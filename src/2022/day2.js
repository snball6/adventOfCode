function calcScorePart1(input) {
    let totalScore = 0;

    for (let i = 0; i < input.length; i++) {
        let opponent = input[i][0];
        let you = input[i][1];

        let normalizedYou = normalize(you);


        switch (normalizedYou) {
            case 'A':
                totalScore += 1;
                break;
            case 'B':
                totalScore += 2;
                break;
            case 'C':
                totalScore += 3;
                break;
        }
        //draw
        if (normalizedYou == opponent) {
            totalScore += 3;
        }
        //win
        else if (
            (normalizedYou == 'A' && opponent == 'B') || //Rock beats scissors
            (normalizedYou == 'B' && opponent == 'C') || //Scissors beats paper
            (normalizedYou == 'C' && opponent == 'A')    //Paper beats rock    
        ) {
            totalScore += 6;
        }

    }
    return totalScore;
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
