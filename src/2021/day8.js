let segmentNumberToOptions = {
    2: [1],
    3: [7],
    4: [4],
    5: [2, 3, 5],
    6: [0, 6, 9],
    7: [8]
}

function countEasyDigitsInOutput(input) {
    let knownNumber = 0;
    input.forEach(line => {
        line.fourOutput.forEach(digit => {
            if (digit.length == 2 ||
                digit.length == 3 ||
                digit.length == 4 ||
                digit.length == 7) {
                knownNumber++;
            }
        });
    });
    return knownNumber;
}

function buildMap(input) {
    let map = {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
    }
    let fiveDigits = [];
    let sixDigits = [];
    input.tenUnique.forEach(entry => {
        switch (entry.length) {
            case 2:
                map[1] = entry;
                break;
            case 3:
                map[7] = entry;
                break;
            case 4:
                map[4] = entry;
                break;
            case 5:
                //deduction needed...
                fiveDigits.push(entry);
                break;
            case 6:
                sixDigits.push(entry);
                //deduction needed...
                break;
            case 7:
                map[8] = entry;
                break;
            default:
                console.log("Unexpected length", entry.length);
        }
    });

    //2,3,5 only 3 will have both of the segments used by 1
    let oneSegmentone = map[1][0];
    let oneSegmenttwo = map[1][1];;
    let three = fiveDigits.filter((e) => {
        return e.includes(oneSegmentone) && e.includes(oneSegmenttwo);
    });
    map[3] = three[0];
    fiveDigits.splice(fiveDigits.indexOf(three[0], 1));

    //likewise of 0, 6, 9 only 6 will NOT have both of the segments used by 1
    let six = sixDigits.filter((e) => {
        return !e.includes(oneSegmentone) || !e.includes(oneSegmenttwo);
    });
    map[6] = six[0];
    sixDigits.splice(sixDigits.indexOf(six[0]), 1);

    //9 will include all the segments of 3
    let threeSegmentone = map[3][0];
    let threeSegmenttwo = map[3][1];;
    let threeSegmentthree = map[3][2];;
    let threeSegmentfour = map[3][3];;
    let threeSegmentfive = map[3][4];;
    let nine = sixDigits.filter((e) => {
        return e.includes(threeSegmentone) &&
            e.includes(threeSegmenttwo) &&
            e.includes(threeSegmentthree) &&
            e.includes(threeSegmentfour) &&
            e.includes(threeSegmentfour) &&
            e.includes(threeSegmentfive)
    });
    map[9] = nine[0];
    sixDigits.splice(sixDigits.indexOf(nine[0]), 1);

    //remaining six digit option
    map[0] = sixDigits[0];

    // between 2 and 5. 5 will be 1 segement off from 6 while 2 with be 2 segements off
    let five = fiveDigits.filter(e => {
        return differingSegmentsFrom6(map[6], e) == 1;
    });
    map[5] = five[0];
    fiveDigits.splice(fiveDigits.indexOf(five[0]), 1);

    //remaining five digit option
    map[2] = fiveDigits[0];

    return map;
}

function differingSegmentsFrom6(sixMap, possible2or5) {
    let sixSegements = sixMap.split("");
    let count = 0;
    for (let i = 0; i < sixSegements.length; i++) {
        if (!possible2or5.includes(sixSegements[i])) {
            count++;
        }
    }
    return count;
}

function mapOutput(input) {
    let map = buildMap(input);

    let output = '';

    let temp;
    for(let i=0; i<input.fourOutput.length; i++){
        temp = input.fourOutput[i];
        output+=findValue(temp, map);
    }
    return parseInt(output);
}

function findValue(temp, map){
    for(entry in map){
        //MAP ENTRIES MAY NOT BE IN SAME LETTER ORDER AS THE OUTPUT .... WHYYY ... 
        if(temp.length == map[entry].length){
            let splitTemp = temp.split("");
            let splitPossible = map[entry].split("");
            let uniqueBetween =  splitTemp.filter(function(obj) { return splitPossible.indexOf(obj) == -1; }); //https://stackoverflow.com/questions/15912538/get-the-unique-values-from-two-arrays-and-put-them-in-another-array
            if(uniqueBetween.length == 0){
                return entry;
            }
        }
    }
}



