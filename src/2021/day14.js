
function performPolymerInsert(startValue, map) {
    let newValue = '';
    let pair;

    for (let i = 0; i < startValue.length - 1; i++) {
        newValue += startValue[i];
        pair = startValue[i] + startValue[i + 1];

        let mapValue = map[pair];
        newValue += mapValue;
    }
    newValue += startValue[startValue.length - 1];

    return newValue;
}

function getMostCommonMinusLeastCommon(string) {
    let totals = {};

    for (let i = 0; i < string.length; i++) {
        addOrUpdate(totals, string[i]); //day5Helper funciton - adds key at 1 or increments
    }

    //arbitrary starting values
    let most = ['Initial', 0];
    let least = ['Initial', 99999];
    for (key in totals) {
        if (totals[key] > most[1]) {
            most = [key, totals[key]];
        }
        if (totals[key] < least[1]) {
            least = [key, totals[key]];
        }
    }
    return most[1] - least[1];
}

function take10StepsAndCalculate(startValue, map) {
    let newValue = startValue;
    for (let i = 0; i < 10; i++) {
        newValue = performPolymerInsert(newValue, map);
    }

    return getMostCommonMinusLeastCommon(newValue);
}

//-----------------------------------part 2 attempt 1: Linked list---------------------------//

function take10StepsAndCalculate_Linked(startValue, map) {
    let polymerCounts = {}

    let headNode = null;
    for (let i = startValue.length - 1; i >= 0; i--) {
        addOrUpdate(polymerCounts, startValue[i]);
        headNode = new ListNode(startValue[i], headNode);
    }

    for (let i = 0; i < 10; i++) {
        let now = new Date();
        console.log(i + "\t" + now.getMinutes() + '\t' + now.getSeconds());
        let currentNode = headNode;
        let tempNextNode;
        let polymerToInsert;
        while (currentNode.next != null) {
            tempNextNode = currentNode.next;
            polymerToInsert = map[currentNode.value + tempNextNode.value];
            addOrUpdate(polymerCounts, polymerToInsert);
            currentNode.next = new ListNode(polymerToInsert, tempNextNode);
            currentNode = tempNextNode;
        }
    }

    return (getMostCommonMinusLeastCommonFromDictionary(polymerCounts));
}

class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

function getMostCommonMinusLeastCommonFromDictionary(dictionary) {
    let most = ['Initial', 0];
    //pick a item from the array to initialize the least value so I don't keep being burned by not picking a big enough starting value...
    let starterKey = Object.keys(dictionary)[0]
    let starterValue = dictionary[starterKey]
    let least = [starterKey, starterValue];
    for (key in dictionary) {
        if (dictionary[key] > most[1]) {
            most = [key, dictionary[key]];
        }
        if (dictionary[key] < least[1]) {
            least = [key, dictionary[key]];
        }
    }
    return most[1] - least[1];
}

//-----------------------------------------part 2 attempt 2: Mega array -------------------------------------------------//
// 2192039569602 //example of most occuring letter alone
// 4294967296 //array max size

//it would take 510+ maxed out arrays JUST to hold the most common letter...
//how dumb would it be to make a 2d array of 2 maxed lengths...

function take10StepsAndCalculate_WeirdArray(startValue, map) {
    let polymerCounts = {}

    let currentArray = new MegaArray();
    for (let i = 0; i < startValue.length; i++) {
        addOrUpdate(polymerCounts, startValue[i]);
        currentArray.push(startValue[i]);
    }

    for (let i = 0; i < 10; i++) {
        let polymerToInsert;
        let nextArray = new MegaArray();
        let a = currentArray.next();
        let b = currentArray.next();
        // let now = new Date();
        // console.log(i + "\t" + now.getMinutes() + '\t' + now.getSeconds());
        while (b != undefined) {
            polymerToInsert = map[a + b];

            addOrUpdate(polymerCounts, polymerToInsert);
            nextArray.push(a);
            nextArray.push(polymerToInsert);
            a = b;
            b = currentArray.next();
        }
        nextArray.push(a);
        currentArray = nextArray;
    }
    return (getMostCommonMinusLeastCommonFromDictionary(polymerCounts));
}

class MegaArray {
    constructor() {
        this.currentArrayLength = 0;
        this.arraysFilled = 0;
        this.backingArray = [[]];
        this.pointer = 0;
        this.arrayPointer = 0;
    }

    push(element) {
        this.backingArray[this.arraysFilled].push(element);
        this.currentArrayLength++;
        if (this.currentArrayLength == 4100000000) { //4100000000
            this.arraysFilled++;
            this.backingArray.push([]);
            this.currentArrayLength = 0; //reset
        }
    }

    next() {
        let value = this.backingArray[this.arrayPointer][this.pointer];
        this.pointer++;
        if (this.pointer == 4100000000) {
            this.arrayPointer++;
            this.pointer = 0;
        }
        return value;
    }
}

//-----------------------------------------part 2 attempt 3: Buckets! -------------------------------------------------//
//------------------------------------how about that buckets idea like with the fish?----------------------------------//

function takeStepsAndCalculate_Buckets(startValue, map, iterations) {
    let totalPolymerCounts = {}

    let currentPairCounts = {}
    for (let i = 0; i < startValue.length - 1; i++) {
        addOrIncrease(totalPolymerCounts, startValue[i], 1);

        let pair = startValue[i] + startValue[i + 1];
        addOrIncrease(currentPairCounts, pair, 1);
    }
    addOrIncrease(totalPolymerCounts, startValue[startValue.length-1], 1); //the very last element needs ot be added to the counts

    for (let i = 0; i < iterations; i++) {

        let nextPairCounts = {}
        for (key in currentPairCounts) {
            let first = key[0];
            let second = key[1];
            let polymerToAdd = map[key];
            let occurences = currentPairCounts[key]
            addOrIncrease(totalPolymerCounts, polymerToAdd, occurences);
            addOrIncrease(nextPairCounts, first + polymerToAdd, occurences);
            addOrIncrease(nextPairCounts, polymerToAdd + second, occurences);
        }
        currentPairCounts = nextPairCounts
    }
    return (getMostCommonMinusLeastCommonFromDictionary(totalPolymerCounts));
}

function addOrIncrease(dictionary, key, amount) {
    if (key in dictionary) {
        dictionary[key] += amount;
    } else {
        dictionary[key] = amount;
    }
}