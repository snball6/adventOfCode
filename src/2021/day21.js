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

class QuantumDie {
    constructor() {
        this.options = {}
        for (let roll1 = 1; roll1 < 4; roll1++) {
            for (let roll2 = 1; roll2 < 4; roll2++) {
                for (let roll3 = 1; roll3 < 4; roll3++) {
                    addOrUpdate(this.options, roll1 + roll2 + roll3) //day 5 helper
                }
            }
        }
    }

    getSumOfNext3Roll() {
        return this.options;
    }
}

function getPart2Answer(player1Start, player2Start) {
    let dice = new QuantumDie();
    let diceRolls = dice.getSumOfNext3Roll();


    let games = [new Game(player1Start, player2Start, 0, 0, 1)];
    let player1Wins = 0;
    let player2Wins = 0;

    while (games.length > 0) {
        console.log("loop");
        let tempGames1 = [];
        //player 1 moves
        for (let i = 0; i < games.length; i++) {
            for (const roll in diceRolls) {
                let currentGame = games[i];
                let instancesOfRoll = diceRolls[roll];
                let player1Position = currentGame.player1Pos + parseInt(roll);
                player1Position = player1Position % 10 == 0 ? 10 : player1Position % 10; //there's probably a better way to do this, but lazy...
                let player1Score = player1Position + currentGame.player1Score;
                tempGames1.push(new Game(
                    player1Position, //move 1
                    currentGame.player2Pos, //2 stays same
                    player1Score, //update 1 score
                    currentGame.player2Score, //2 stays same
                    currentGame.instances * instancesOfRoll //existing instances multiply by new branches
                ));
            }
        }
        let tempGames2 = [];
        for (let i = 0; i < tempGames1.length; i++) {
            if (tempGames1[i].findWinner()) {
                // console.log("1 wins");
                player1Wins += tempGames1[i].instances;
                // console.log(player1Wins);
            } else {
                tempGames2.push(tempGames1[i]);
            }
        }

        let tempGames3 = []
        for (let i = 0; i < tempGames2.length; i++) {
            for (const roll in diceRolls) {
                let currentGame = tempGames2[i];
                let instancesOfRoll = diceRolls[roll];
                let player2Position = currentGame.player2Pos + parseInt(roll);
                player2Position = player2Position % 10 == 0 ? 10 : player2Position % 10; //there's probably a better way to do this, but lazy...
                let player2Score = player2Position + currentGame.player2Score;
                tempGames3.push(new Game(
                    currentGame.player1Pos, //1 stays same
                    player2Position, //2 moves
                    currentGame.player1Score, // 1 stays same
                    player2Score, //update 2 score
                    currentGame.instances * instancesOfRoll //existing instances multiply by new branches
                ));
            }
        }

        games = [];
        for (let i = 0; i < tempGames3.length; i++) {
            if (tempGames3[i].findWinner()) {
                player2Wins += tempGames3[i].instances;
            } else {
                games.push(tempGames3[i]);
            }
        }
    }

    return player1Wins > player2Wins ? player1Wins : player2Wins;

}

class Game {
    constructor(player1Pos, player2Pos, player1Score, player2Score, instances) {
        this.player1Pos = player1Pos;
        this.player2Pos = player2Pos;
        this.player1Score = player1Score;
        this.player2Score = player2Score;
        this.instances = instances; //how many games of this type?
    }

    // checkForMerger(otherGame) {
    //     if (otherGame.player1Pos == this.player1Pos &&
    //         otherGame.player2Pos == this.player2Pos &&
    //         otherGame.player1Score == this.player1Score &&
    //         otherGame.player2Score == this.player2Score
    //     ) {
    //         return true;
    //     } else {
    //         false
    //     }
    // }

    findWinner() {
        if (this.player1Score >= 21) {
            return "player1";
        }
        if (this.player2Score >= 21) {
            return "player2";
        }
        return null;
    }
}