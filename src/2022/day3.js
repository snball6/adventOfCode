function findDuplicate(bag) {
    let compartment1 = bag.substring(0, (bag.length/2)).split("");
    let compartment2 = bag.substring((bag.length/2), bag.length).split("");

    let repeat = compartment1.filter((el => compartment2.includes(el)));

    return repeat[0];
}

function getItemValue(item){
    //ascii A = 65 and Z = 90 a = 97 and z = 122
    let ascii = item.charCodeAt(0);
    if(ascii > 96){
        return ascii - 96;
    } else {
        return ascii - 38;
    }
}

function sumPrioritiesPart1(input){
    let priority = 0;

    for(let i = 0; i<input.length; i++){
        priority += getItemValue(findDuplicate(input[i]));
    }
    return priority;
}
