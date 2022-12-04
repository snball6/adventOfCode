//Going with a "Dictionary" of coordinates--so I can infinitely go either direction
//Standard graph structure with 0,0 as start. One move to east = (1,0), west (-1,0), north (0,1), and south (0,-1) 
function createDictPart1(input){
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
    let houses = createDictPart1(input);

    return Object.keys(houses).length;
}

function part2CountHouses(input){
    let houses = createDictPart2(input);

    return Object.keys(houses).length;
}

function createDictPart2(input){
    let houses = {
        '0,0': 1
    };
    
    let santaX= 0;
    let santaY =0;
    let roboX= 0;
    let roboY =0;

    for(let i = 0; i<input.length; i+=2){
        let direction = input[i];
        switch(direction){
            case '^':
                santaY++;
            break;
            case '>':
                santaX++
            break;
            case 'v':
                santaY--;
            break;
            case '<':
                santaX--
            break;
        }
        addOrIncrease(houses, santaX+','+santaY, 1);
    }

    for(let i = 1; i<input.length; i+=2){
        let direction = input[i];
        switch(direction){
            case '^':
                roboY++;
            break;
            case '>':
                roboX++
            break;
            case 'v':
                roboY--;
            break;
            case '<':
                roboX--
            break;
        }
        addOrIncrease(houses, roboX+','+roboY, 1);
    }
    return houses;
}

//Stolen from Day 14 2021
function addOrIncrease(dictionary, key, amount) {
    if (key in dictionary) {
        dictionary[key] += amount;
    } else {
        dictionary[key] = amount;
    }
}