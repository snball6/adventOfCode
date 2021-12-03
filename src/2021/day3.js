function getPowerConsumption(report) {
    let commonBits = '';

    for (let i = 0; i < report[0].length; i++) { //loop for each digit of the binary
        let zeroCount = 0;
        let oneCount = 0;
        for (let j = 0; j < report.length; j++) { //loop for all binaries
            if (report[j][i] == 0) {
                zeroCount++;
            } else {
                oneCount++;
            }
        }
        if (zeroCount > oneCount) {
            commonBits += '0';
        } else {
            commonBits += '1';
        }
    }
    let gammaRate = binaryConvert(commonBits);
    let epsilonRate = binaryConvert(getInvertedBinary(commonBits));
    return gammaRate * epsilonRate;
}

function getInvertedBinary(string) {
    let inverted = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == '0') {
            inverted += '1'
        } else {
            inverted += '0'
        }
    }
    return inverted;
}

function binaryConvert(string) {
    return parseInt(string, 2);
}

function getOxygenRating(report) {
    let numbersToKeep = report;
    for (let digit = 0; digit < report[0].length; digit++) {
        numbersToKeep = (keepCommonDigit(numbersToKeep, digit))
        if(numbersToKeep.length==1){
            break;
        }
    }
    return binaryConvert(numbersToKeep[0]);
}

function getCO2Scrubber(report) {
    let numbersToKeep = report;
    for (let digit = 0; digit < report[0].length; digit++) {
        numbersToKeep = (keepLeastCommonDigit(numbersToKeep, digit))
        if(numbersToKeep.length==1){
            break;
        }
    }
    return binaryConvert(numbersToKeep[0]);
}

function keepCommonDigit(array, position) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][position] == 0) {
            zeroCount++;
        } else {
            oneCount++;
        }
    }
    let commonDigit = zeroCount > oneCount ? 0 : 1;
    let binariesToKeep = []
    for (let i = 0; i < array.length; i++) {
        if (array[i][position] == commonDigit) {
            binariesToKeep.push(array[i])
        }
    }
    return binariesToKeep;
}


function keepLeastCommonDigit(array, position) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][position] == 0) {
            zeroCount++;
        } else {
            oneCount++;
        }
    }
    let leastCommonDigit = zeroCount <= oneCount ? 0 : 1;
    let binariesToKeep = []
    for (let i = 0; i < array.length; i++) {
        if (array[i][position] == leastCommonDigit) {
            binariesToKeep.push(array[i])
        }
    }
    return binariesToKeep;
}

function getLifeSupport(report){
    return getCO2Scrubber(report) * getOxygenRating(report);
}