function calcScore(card) {
    let overlap = card.cardNumbers.filter(el => card.winningNumbers.includes(el));

    if (overlap.length == 0) {
        return 0
    } else {
        return 2 ** (overlap.length - 1);
    }
}

function sumAllPoints(input) {
    let sum = 0;
    for (i in input) {
        sum += calcScore(input[i]);
    }
    return sum;
}

function tallyScratchCards(input) {
    let cardTotals = {};

    //add one each for original
    for (i in input) {
        cardTotals[i] = 1;
    }
    //start incrementing
    for (i in input) {
        let currentCard = input[i];
        let instancesOfThisCard = cardTotals[i];
        let overlap = currentCard.cardNumbers.filter(el => currentCard.winningNumbers.includes(el));
        let cardsCopiesWon = overlap.length;
        for (let x = 1; x <= cardsCopiesWon; x++) {
            let nextCardNum = parseInt(i) + x;
            cardTotals[nextCardNum] += instancesOfThisCard;
        }
    }

    let sum = 0;
    for(i in cardTotals){
        sum+= cardTotals[i];
    }

    return sum;
}
