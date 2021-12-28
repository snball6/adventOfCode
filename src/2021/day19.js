//For math refresher: https://math.stackexchange.com/questions/42640/calculate-distance-in-3d-space
//decided to leave mapping distance as squared to avoid rounding errors from the square root
function createDistanceMap(scannerData) {
    let map = {}
    for (let i = 0; i < scannerData.length; i++) {
        let squaredDistance = Math.pow(scannerData[i][0], 2) + Math.pow(scannerData[i][1], 2) + Math.pow(scannerData[i][2], 2);
        if (map[squaredDistance] != undefined) {
            console.log("assumption wrong for distance: " + squaredDistance + ": " + scannerData[i]);
        }
        map[squaredDistance] = scannerData[i]; //this is making the dubious assumption two beacons are never the same distance away from a scanner...+

    }
    return map;
}

function parseScanners(inputData) {
    let scanners = {};
    let tempArrayForScanner = [];

    let scannerCounter = 0;
    for (let i = 1; i < inputData.length; i++) {
        if (inputData[i].includes('---')) {
            //start of new scanner
            scanners[scannerCounter] = new Scanner(tempArrayForScanner);
            scannerCounter++;
            tempArrayForScanner = [];
        } else if (inputData[i] == '') {
            //do nothing
        } else {
            let splitString = inputData[i].split(",");
            let row = [
                parseInt(splitString[0]),
                parseInt(splitString[1]),
                parseInt(splitString[2]),
            ];
            tempArrayForScanner.push(row);
        }
    }
    //do it one last time for last scanner
    scanners[scannerCounter] = new Scanner(tempArrayForScanner);
    console.log(scanners);
    return scanners;
}
class Scanner {
    constructor(arrayOfBeacons) {
        this.arrayOfBeacons = arrayOfBeacons;
        this.distanceMap = createDistanceMap(arrayOfBeacons);
        this.position = [null,null,null];
    }
}
