function fuelByMass(mass) {
    return Math.floor(mass/3)-2;
}

function getTotalFuel(modules){
    let totalFuel = 0;
    for(let i = 0; i<modules.length; i++){
        totalFuel+=fuelByMass(modules[i]);
    }
    return totalFuel;
}