//Going with a "Dictionary" of coordinates--so I can infinitely go either direction
//Standard graph structure with 0,0 as start. One move to east = (1,0), west (-1,0), north (0,1), and south (0,-1) 
function createDict(input){
    let houses = {
        '0,0': 1
    };
    
    let x= 0;
    let y =0;

    for(let i = 0; i<input.length; i++){
        let direction = input[i];
        switch(direction){
            case '^':
                y++;
            break;
            case '>':
                x++
            break;
            case 'v':
                y--;
            break;
            case '<':
                x--
            break;
        }
        addOrIncrease(houses, x+','+y, 1);
    }
    return houses;
}

function part1CountHouses(input){
    let houses = createDict(input);

    return Object.keys(houses).length;
}

//Stolen from Day 14 2021
function addOrIncrease(dictionary, key, amount) {
    if (key in dictionary) {
        dictionary[key] += amount;
    } else {
        dictionary[key] = amount;
    }
}