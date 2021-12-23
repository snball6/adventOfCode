
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

//-----------------------------------part 2 attempt 1---------------------------//

function take10StepsAndCalculate_Linked(startValue, map) {
    let polymerCounts = {}   

    let headNode = null;
    for (let i = startValue.length-1; i >= 0; i--) {
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
    //arbitrary starting values
    let most = ['Initial', 0];
    let least = ['Initial', 99999];
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

//-----------------------------------------part 2 attempt 2 -------------------------------------------------//
// 2192039569602 //example of most occuring letter alone
// 4294967296 //array max size

//it would take 510+ maxed out arrays JUST to hold the most common letter...
//how dumb would it be to make a 2d array of 2 maxed lengths...

function take10StepsAndCalculate_WeirdArray(startValue, map) {
    let polymerCounts = {}   

    let megaArray = new MegaArray();
    for (let i = startValue.length-1; i >= 0; i--) {
        addOrUpdate(polymerCounts, startValue[i]);
        megaArray.push(startValue[i]);
    }
    console.log(megaArray);

    for (let i = 0; i < 10; i++) {

        // for (let i = 0; i < startValue.length - 1; i++) {
        //     newValue += startValue[i];
        //     pair = startValue[i] + startValue[i + 1];
    
        //     let mapValue = map[pair];
        //     newValue += mapValue;
        // }
        // newValue += startValue[startValue.length - 1];

    }

    return (getMostCommonMinusLeastCommonFromDictionary(polymerCounts));
}

class MegaArray {
    constructor(){
        this.currentArrayLength = 0;
        this.arraysFilled = 0;
        this.backingArray=[[]];
        this.pointer = 0;
        this.arrayPointer = 0;
    }

    push(element){
        this.backingArray[this.arraysFilled].push(element);
        this.currentArrayLength++;
        if(this.currentArrayLength == 5){ //4100000000
            this.arraysFilled++;
            this.backingArray.push([]);
            this.currentArrayLength = 0; //reset
        }
    }

    next(){
        let value = this.backingArray[this.arrayPointer][pointer];
        this.pointer++;
        if(this.pointer == 5){
            this.arrayPointer++;
            this.pointer = 0;
        }
        return value;
    }
}