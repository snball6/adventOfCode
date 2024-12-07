function parseAlmanac(input) {
    let inputObject = {}
    inputObject.seeds = spacedStringArrayToInt(input.shift());

    input.shift(); //first header
    inputObject.seedToSoil = getMapSet("soil-to-fertilizer map:", input);
    inputObject.soilToFert = getMapSet("fertilizer-to-water map:", input);
    inputObject.fertToWater = getMapSet("water-to-light map:", input);
    inputObject.waterToLight = getMapSet("light-to-temperature map:", input);
    inputObject.lightToTemp = getMapSet("temperature-to-humidity map:", input);
    inputObject.tempToHum = getMapSet("humidity-to-location map:", input);
    inputObject.humToLoc = getMapSet("end", input);

    return inputObject
}

function getMapSet(stopString, inputArray) {
    let temp = [];
    while (inputArray[0] != stopString) {
        temp.push(spacedStringArrayToInt(inputArray.shift()));
    }
    //remove next header row
    inputArray.shift();
    return temp;
}

function spacedStringArrayToInt(array) {
    let stringArray = array.split(" ");
    let intArray = [];
    for (num of stringArray) {
        intArray.push(parseInt(num));
    }
    return intArray;
}

function getLocationNumber(seed, almanac) {
    let soil = findDestination(seed, almanac.seedToSoil);
    let fert = findDestination(soil, almanac.soilToFert);
    let water = findDestination(fert, almanac.fertToWater);
    let light = findDestination(water, almanac.waterToLight);
    let temp = findDestination(light, almanac.lightToTemp);
    let hum = findDestination(temp, almanac.tempToHum);
    let loc = findDestination(hum, almanac.humToLoc);

    return loc;
}

function findDestination(source, maps) {
    for (map of maps) {
        let sourceRange = map[1];
        let destRange = map[0];
        let range = map[2];

        let difference = source - sourceRange;
        if (difference >= 0 && difference <= range) {
            return destRange + difference;
        }
    }
    return source;
}

function getlowestLocationNumber(input) {
    let almanac = parseAlmanac([...input]);
    let locations = [];
    for (seed of almanac.seeds) {
        locations.push(getLocationNumber(seed, almanac));
    }
    return Math.min(...locations);
}

function getlowestLocationNumberPart2(input) {
    let almanac = parseAlmanac([...input]);
    //starting value
    let min = getLocationNumber(almanac.seeds[0], almanac);

    for (let i = 0; i < almanac.seeds.length; i += 2) {
        let startSeedRange = almanac.seeds[i];
        let endSeedRange = almanac.seeds[i] + almanac.seeds[i + 1];
        for (let seedNum = startSeedRange; seedNum < endSeedRange; seedNum++) {
            let loc = getLocationNumber(seedNum, almanac);
            if (loc < min) {
                // console.log(min);
                min = loc;
            }
        }
        // console.log("outer loop");
    }

    return min;
}