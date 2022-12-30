function getExposedSidesTotal(set) {
    let exposedSides = Object.keys(set).length * 6;

    for (const [key, value] of Object.entries(set)) {
        let cordinates = key.split(',');
        let x = parseInt(cordinates[0]);
        let y = parseInt(cordinates[1]);
        let z = parseInt(cordinates[2]);

        //left
        if (set[(x - 1) + ',' + y + ',' + z]) {
            exposedSides--;
        }
        //right
        if (set[(x + 1) + ',' + y + ',' + z]) {
            exposedSides--;
        }
        //top
        if (set[x + ',' + (y - 1) + ',' + z]) {
            exposedSides--;
        }
        //bottom
        if (set[x + ',' + (y + 1) + ',' + z]) {
            exposedSides--;
        }
        //up z
        if (set[x + ',' + y + ',' + (z - 1)]) {
            exposedSides--;
        }
        //down z        
        if (set[x + ',' + y + ',' + (z + 1)]) {
            exposedSides--;
        }

        console.log(cordinates);
    }
    return exposedSides;
}