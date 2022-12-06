function getTopOfStack(stackState, moves, part) {
    
    for (let i = 0; i < moves.length; i++) {
        if(part==1){
            crateMover9000(moves[i].move, moves[i].to, moves[i].from, stackState);
        }
        else{
            crateMover9001(moves[i].move, moves[i].to, moves[i].from, stackState);
        }
    }
    
    let tops = '';
    for (let i = 1; i < stackState.length; i++) {
        tops+=stackState[i].pop();
    }
    return tops;
}

function crateMover9000(cratesToMove, to, from,  stackState) {
    for (let j = cratesToMove; j > 0; j--) {
        // console.log("Moving: " + stackState[from][stackState[from].length -1] + " from "+ from + " to: " + to );
        stackState[to].push(stackState[from].pop());
        // nice2DArrayConsole(stackState);
    }
}

function crateMover9001(cratesToMove, to, from,  stackState) {
    let stackToMove = [];
    for (let j = cratesToMove; j > 0; j--) {
        stackToMove.unshift(stackState[from].pop());  
    }
    stackState[to].push(...stackToMove);
}

function nice2DArrayConsole(array){
    console.log("[")
    for (let topI = 0; topI < array.length; topI++) {
        let s = topI + ': [';
        for (let innerI = 0; innerI < array[topI].length ; innerI++){
            s+=(array[topI][innerI]);
            if (innerI < array[topI].length -1){
                s+=', ';
            }
        }
        s+=']';
        console.log(s);
    }
    console.log("]")
}