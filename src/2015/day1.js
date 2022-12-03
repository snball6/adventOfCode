function getFloor(input){
    let up = input.split("(").length-1;
    let down = input.split(")").length-1;

    return up-down;
}

function basementThreshold(input){
    let floor = 0;
    for(let i =0; i<input.length; i++){
        if(input[i]=="("){
            floor++;
        } else {
            floor--;
        }

        if(floor ==-1){
            return i+1;
        }
    }
}