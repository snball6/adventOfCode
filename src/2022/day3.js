function findDuplicate(bag) {
    let compartment1 = bag.substring(0, (bag.length / 2)).split("");
    let compartment2 = bag.substring((bag.length / 2), bag.length).split("");

    let repeat = compartment1.filter((el => compartment2.includes(el)));

    return repeat[0];
}

function getItemValue(item) {
    //ascii A = 65 and Z = 90 a = 97 and z = 122
    let ascii = item.charCodeAt(0);
    if (ascii > 96) {
        return ascii - 96;
    } else {
        return ascii - 38;
    }
}

function sumPrioritiesPart1(input) {
    let priority = 0;

    for (let i = 0; i < input.length; i++) {
        priority += getItemValue(findDuplicate(input[i]));
    }
    return priority;
}

function findDuplicateAcrossBags(bag1string, bag2string, bag3string) {
    let bag1 = bag1string.split("");
    let bag2 = bag2string.split("");
    let bag3 = bag3string.split("");
    let repeat1And2 = bag1.filter((el => bag2.includes(el)));
    let repeatIn3 = repeat1And2.filter((el => bag3.includes(el)))
    return repeatIn3[0];
}

function sumPrioritiesOfBadges(input) {
    let priority = 0;

    for (let i = 0; i < input.length; i+=3) {
        priority += getItemValue(findDuplicateAcrossBags(input[i], input[i+1], input[i+2]));
    }
    return priority;
}
