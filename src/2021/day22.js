function getCubesInCuboid(stepObject) {
    let cubes = [];

    let xMin = stepObject.x[0] < stepObject.x[1] ? stepObject.x[0] : stepObject.x[1];
    let xMax = stepObject.x[0] > stepObject.x[1] ? stepObject.x[0] : stepObject.x[1];
    let yMin = stepObject.y[0] < stepObject.y[1] ? stepObject.y[0] : stepObject.y[1];
    let yMax = stepObject.y[0] > stepObject.y[1] ? stepObject.y[0] : stepObject.y[1];
    let zMin = stepObject.z[0] < stepObject.z[1] ? stepObject.z[0] : stepObject.z[1];
    let zMax = stepObject.z[0] > stepObject.z[1] ? stepObject.z[0] : stepObject.z[1];

    for (let x = xMin; x <= xMax; x++) {
        for (let y = yMin; y <= yMax; y++) {
            for (let z = zMin; z <= zMax; z++) {
                cubes.push(x + ',' + y + ',' + z);
            }
        }
    }
    return cubes;
}

function getCuboidsLeftOn(stepArray){
    let cubesOn = [];
    for(let i = 0; i<stepArray.length; i++){
        let newCuboid = getCubesInCuboid(stepArray[i]);

        if(stepArray[i].op == 'on'){
            //merge in
            cubesOn = [...new Set([...cubesOn, ...newCuboid])];
        } else {
            //filter out
            cubesOn = cubesOn.filter(x=>!newCuboid.includes(x));
        }
    }
    return cubesOn.length;
}