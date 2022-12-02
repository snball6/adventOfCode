function getHighestCalories(input){
    let highest = 0;
    for(let i=0; i<input.length; i++){
        let elfTotal =0;
        for(let j=0; j<input[i].length; j++){
            elfTotal+=input[i][j];
        }
        if(elfTotal > highest){
            highest = elfTotal;
        }
    }
    return highest;
}

