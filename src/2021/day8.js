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