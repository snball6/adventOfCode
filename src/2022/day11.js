function completeRound(monkeys) {
    let numberOfMonkeys = Object.keys(monkeys).length;
    //for each monkey
    for (let i = 0; i < numberOfMonkeys; i++) {
        let currentMonkey = monkeys[i];
        //for each item the monkey has
        for(let j = 0; j<currentMonkey.items.length; j++){
            let currentWorry= currentMonkey.items[j];
            //Inspection + worry increase
            currentWorry = currentMonkey.operation(currentWorry);
            currentMonkey.inspections++;
            //worry decrease
            currentWorry = Math.floor(currentWorry/3);
            if(currentMonkey.test(currentWorry)){
                monkeys[currentMonkey.ifTrue].items.push(currentWorry);
            } else {
                monkeys[currentMonkey.ifFalse].items.push(currentWorry);
            }
        }
        currentMonkey.items = [];
    }
}

function getMonkeyBusiness(monkeys) {
    for (let i = 0; i < 20; i++) {
        completeRound(monkeys);
    }
    let topScore = 0;
    let secondTopScore = 0;

    for(let i = 0; i< Object.keys(monkeys).length; i++){
        if(monkeys[i].inspections >= topScore){
            secondTopScore = topScore;
            topScore = monkeys[i].inspections;
        } else if (monkeys[i].inspections >= secondTopScore){
            secondTopScore = monkeys[i].inspections;
        }
    }
    return topScore * secondTopScore;
}