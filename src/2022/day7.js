function buildFileStructure(input) {
    let i = 0;

    let root = {
        name: 'root',
        totalFileSize: 0,
        childFiles: [],
        childDirectories: []
    }

    let directoryMap = {
        'root': root
    }

    let currentLocation = root;
    while (i < input.length) {
        if (input[i] == '$ ls') {
            i++; //move forward to the list
            //note based on spot check my puzzle input had no empty directories
            i = ParseLSOutput(input, i, currentLocation, directoryMap);
        } else {
            //assume cd
            let lineSplit = input[i].split(" ");
            let directoryName = lineSplit[2]; // ['$', 'cd', 'dirname']
            if (directoryName == "..") {
                currentLocation = currentLocation.parent;
            } else {
                currentLocation = directoryMap[currentLocation.name + directoryName]
            }
            i++
        }
    }
    return [root, directoryMap]; //lazy return 2 things...
}

function ParseLSOutput(input, i, currentLocation, directoryMap) {
    while (!input[i].includes('$')) {
        let line = input[i];
        if (line[0] == 'd') {
            //add directory
            let directoryName = line.split(" ")[1];
            let newDirectory = {
                name: directoryName,
                totalFileSize: 0,
                childFiles: [],
                childDirectories: [],
                parent: currentLocation
            }

            currentLocation.childDirectories.push(
                {
                    [directoryName]: newDirectory
                }
            );
            //DIRECTORIE NAMES REPEAT - making parent + child the key
            directoryMap[currentLocation.name + directoryName] = newDirectory;
        } else {
            //add file
            let fileName = line.split(" ")[1];
            let fileSize = parseInt(line.split(" ")[0]);
            currentLocation.childFiles.push(
                {
                    [fileName]: {
                        totalFileSize: fileSize,
                    }
                }
            );
            //recurse add file size to parents
            let finished = addFileSizeToParents(currentLocation, fileSize);
        }
        i++;
        if (i >= input.length) {
            //end of output
            break;
        }
    }
    return i;
}

function addFileSizeToParents(currentLocation, fileSize) {
    currentLocation.totalFileSize += fileSize;
    //if it has a parent directory
    if (currentLocation.parent) {
        addFileSizeToParents(currentLocation.parent, fileSize);
    }
    return true;
}

function partOneSolution(input) {
    let output = buildFileStructure(input);
    let directories = output[1];

    let total = 0;
    for (const [key, value] of Object.entries(directories)) {
        if (value.totalFileSize <= 100000) {
            total += value.totalFileSize;
        }
    }
    return total;
}

function partTwoSolution(input) {
    let output = buildFileStructure(input);
    let directories = output[1];

    let totalFileSize = 70000000;
    let usedSpace = directories['root'].totalFileSize;
    let unusedSpace = totalFileSize - usedSpace;

    let spaceRequiredByUpdate = 30000000;
    let spaceToFreeUp = spaceRequiredByUpdate - unusedSpace;

    let nearestMatch = 30000000; //start largest

    for (const [key, value] of Object.entries(directories)) {
        if (
            value.totalFileSize > spaceToFreeUp &&
            value.totalFileSize < nearestMatch) {
            nearestMatch = value.totalFileSize;
        }
    }
    return nearestMatch;
}