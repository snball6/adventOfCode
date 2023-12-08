function calcScore(card) {
    let overlap = card.cardNumbers.filter(el => card.winningNumbers.includes(el));

    if(overlap.length == 0){
        return 0
    } else {
        return 2 ** (overlap.length - 1);
    }
}

function sumAllPoints(input) {
    let sum = 0;
    for(i in input){
        sum += calcScore(input[i]);
    }
    return sum;
}