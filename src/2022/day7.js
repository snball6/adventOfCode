let i = 0;
function buildFileStructure(input) {
    let i=0;
    let root = {
        totalFileSize: 0,
        childFiles: [],
        childDirectories: []
    }

    let currentLocation = root;
    while (i < input.length) {
        if (input[i] == '$ ls') {
            i++; //move to next - note based on spot check my puzzle input had no empty directories
            while (!input[i].includes('$')) {
                let line = input[i];
                if (line[0] == 'd') {
                    //add directory
                    let directoryName = line.split(" ")[1];
                    currentLocation.childDirectories.push(
                        {
                            [directoryName]: {
                                totalFileSize: 0,
                                childFiles: [],
                                childDirectories: [],
                                parent: currentLocation
                            }
                        }
                    );
                } else {
                    //add file
                    let fileName = line.split(" ")[1];
                    let fileSize = parseInt(line.split(" ")[0])
                    currentLocation.childFiles.push(
                        {
                            [fileName]: {
                                totalFileSize: fileSize,
                            }
                        }
                    );
                    currentLocation.totalFileSize += fileSize;
                }
                i++
            }
            //start adding objects to parent

            break;

        }
        // if (input[i].includes('$ cd')) {
        //     console.log("cd" + input[i]);
        // }

        // i++
    }
    console.log(root);

}

function addSubFiles(structure, current){
    
}