class Dice {
    constructor() {
        this.incrementer = 0;
    }

    getSumOfNext3Roll() {
        return this.getRollDeterministic() +
            this.getRollDeterministic() +
            this.getRollDeterministic();
    }

    getRollDeterministic() {
        //increment                //mod 100   ///plus 1 so I only get 1-100 and never 0
        return ((this.incrementer++) % 100) + 1;
    }
}


function getPart1Answer(player1Start, player2Start) {
    let dice = new Dice();

    let player1Position = player1Start;
    let player2Position = player2Start;

    let player1Score = 0;
    let player2Score = 0;

    while (player1Score < 1000 &&
        player2Score < 1000) {
        let nextRoll = dice.getSumOfNext3Roll();
        player1Position += nextRoll;
        player1Position = player1Position % 10 == 0 ? 10 : player1Position % 10; //there's probably a better way to do this, but lazy...
        player1Score += player1Position;

        if (player1Score >= 1000) {
            break;
        }
        nextRoll = dice.getSumOfNext3Roll();
        player2Position += nextRoll;
        player2Position = player2Position % 10 == 0 ? 10 : player2Position % 10;
        player2Score += player2Position;
    }

    if (player1Score < player2Score) {
        return player1Score * dice.incrementer;
    } else {
        return player2Score * dice.incrementer;
    }
}