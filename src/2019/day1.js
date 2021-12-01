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

function fuelByMassRecursive(mass) {
    let fuel = fuelByMass(mass);
    if(fuel<0){
        return 0;
    } else {
        let recursedFuel = fuelByMassRecursive(fuel);
        return fuel+recursedFuel;
    }
}

function getTotalFuelRecursive(modules){
    let totalFuel = 0;
    for(let i = 0; i<modules.length; i++){
        totalFuel+=fuelByMassRecursive(modules[i]);
    }
    return totalFuel;
}