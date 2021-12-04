class Board {
    grid = [];
    dictionaryOfNumbers = {}
    rowCounts = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0
    }
    columnCounts = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0
    }

    constructor(arrayOfBoard) {
        //Sample and test input are 5 by 5 boards. Hardcoding
        for(let row = 0; row<5; row++){
            let boardNumberRow = [];
            for(let column = 0; column <5; column++){
                let gridNum = arrayOfBoard[row][column];
                let newNum = new BoardNumber(arrayOfBoard[row][column]);
                boardNumberRow.push(newNum);
                this.dictionaryOfNumbers[gridNum]= {
                    boardNumber: newNum,
                    row: row,
                    column: column
                };
            }
            this.grid.push(boardNumberRow);
        }
    }

    markNumber(number) {
        if(number.toString() in this.dictionaryOfNumbers){
            let boardNumberData = this.dictionaryOfNumbers[number];
            boardNumberData.boardNumber.markNumber();
            this.rowCounts[boardNumberData.row] ++;
            this.columnCounts[boardNumberData.column] ++;
        }
        return this.checkForFullRowOrColumn();
    }

    getSumOfUnmarked() {
        console.log("Totalling")
        let total = 0;
        for (let num in this.dictionaryOfNumbers){
            if(!this.dictionaryOfNumbers[num].boardNumber.marked){
                total+=this.dictionaryOfNumbers[num].boardNumber.number;
            }
        }
        return total;
    }

    checkForFullRowOrColumn(){
        for(let i = 0; i<5; i++){
            if(this.rowCounts[i]>=5 || this.columnCounts[i] >=5){
                console.log("YES");
                return true;
            }
        }
        return false;
    }
}

class BoardNumber {
    marked = false;
    number;
    constructor(number) {
        this.number = number;
    }

    markNumber() {
        this.marked = true;
    }
}

function getWinningScoreOfFirstBoardToWin(input){
    let drawnNumbersArray = input['drawnNumbers'];
    let boards = [];
    for(let i = 0; i<input['boards'].length; i++){
        boards.push(new Board(input['boards'][i]))
    }
    console.log(boards);
    for(let numberDrawnIndex = 0; numberDrawnIndex < drawnNumbersArray.length; numberDrawnIndex++){
        for(let boardIndex = 0; boardIndex < boards.length; boardIndex++){
            if(boards[boardIndex].markNumber(drawnNumbersArray[numberDrawnIndex])){
                console.log("HERE TOO");
                return boards[boardIndex].getSumOfUnmarked() * drawnNumbersArray[numberDrawnIndex];
            };
        }   
    }
    console.log(boards);
}