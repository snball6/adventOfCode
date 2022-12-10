function getXRegistersForCycles(input, cycles) {
    let xRegister = {

    };
    let cycle = 0;
    let x = 1;
    for (let i = 0; i < input.length; i++) {
        // want to know what the value was DURING 
        // so incrementing cycle first - effects after
        console.log(input[i])
        if (input[i][0] == 'noop') {
            cycle++;
            if (cycles.includes(cycle)) {
                xRegister[cycle] = x;
            }
        } else {
            cycle++;
            if (cycles.includes(cycle)) {
                xRegister[cycle] = x;
            }
            cycle++;
            if (cycles.includes(cycle)) {
                xRegister[cycle] = x;
            }
            x += input[i][1];
        }
    }
    return xRegister;
}

function getSignalStrength(input) {
    let xRegisters = getXRegistersForCycles(input, [20, 60, 100, 140, 180, 220]);
    let total = 0;
    for (const [key, value] of Object.entries(xRegisters)) {
        total += key * value;
    }
    return total;
}