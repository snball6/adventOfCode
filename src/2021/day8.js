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
            if(digit.length==2 ||
               digit.length==3 ||
               digit.length==4 ||
               digit.length==7)
               {
                   knownNumber++;
               }
        });
    });
    return knownNumber;
}

function mapOutput(input){
// segments visual to keep my brain from hurting
//        aa1a 
//       b    c
//       b    c
//        dddd 
//       e    f
//       e    f
//        gggg

let possibleMappings = {
    a: 'abcdefg',
    b: 'abcdefg',
    c: 'abcdefg',
    d: 'abcdefg',
    e: 'abcdefg',
    f: 'abcdefg',
    g: 'abcdefg'
}

//ab
//after 2 digit combo can only map to c or f
let possibleMappings = {
    a: 'cf',
    b: 'cf',
    c: 'abdeg',
    d: 'abdeg',
    e: 'abdeg',
    f: 'abdeg',
    g: 'abdeg'
}

//dab
//3 digit should contain both of the 2 digit for 1, plus a new one 
//then we know the map for a  - can eliminate from others
let possibleMappings = {
    a: 'cf',
    b: 'cf',
    c: 'bdeg',
    d: 'a',
    e: 'bdeg',
    f: 'bdeg',
    g: 'bdeg'
}

//eafb
//4 digit should contain both of the 2 digit for 1, plus new 2 ones 
// that can be b or d
let possibleMappings = {
    a: 'cf',
    b: 'cf',
    c: 'eg',
    d: 'a',
    e: 'bd',
    f: 'bd',
    g: 'eg'
}

//cdfbe, gcdfa, fbcad
//5 this is REALLY hurting my brain now
//2 3 and 5 will all cross the middle bar(d), but only 5 will
//cross the upper left(b) segment
// e and f are my possible b and d's
//only one of the three above contains both -> that's 5
//the others only contain f -> that'sd
let possibleMappings = {
    a: 'cf',
    b: 'cf',
    c: 'eg',
    d: 'a',
    e: 'b',
    f: 'd',
    g: 'eg'
}

//cdfbe(5), gcdfa, fbcad
// 5 will be missing c which makes the cf map clear
// 5 in this batch is contains b but not a
// so b maps to f
let possibleMappings = {
    a: 'c',
    b: 'f',
    c: 'eg',
    d: 'a',
    e: 'b',
    f: 'd',
    g: 'eg'
}

//cdfbe(5), gcdfa, fbcad
// ONE MORE! Of the remaining numbers the one with c and f map (a &b) is 3
//fbcad = 3
//leaving gcdfa = 2
//G map should be in all of the above
//but e should not (3 and 5 don't use it)
//c is in all of them
//thus g maps to e
let possibleMappings = {
    a: 'c',
    b: 'f',
    c: 'g',
    d: 'a',
    e: 'b',
    f: 'd',
    g: 'e'
}

//fuck that was hard. now I have to code it...

}




