function getXRegistersForCycles(input, cycles) {
    let xRegister = {

    };
    let cycle = 0;
    let x = 1;
    for (let i = 0; i < input.length; i++) {
        // want to know what the value was DURING 
        // so incrementing cycle first - effects after
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

function drawPixels(input) {
    let endOfLine = [40,80,120,160,200,240];
    let display = '\n';

    let cycle = 0;
    let x = 1;
    for (let i = 0; i < input.length; i++) {
        // want to know what the value was DURING 
        // so incrementing cycle first - effects after
        if (input[i][0] == 'noop') {
            cycle++;
            display = addPixel(x, cycle, display, endOfLine);
        } else {
            cycle++;
            display = addPixel(x, cycle, display, endOfLine);
            cycle++;
            display = addPixel(x, cycle, display, endOfLine);
            x += input[i][1];
        }
    }
    return display;
}

function addPixel(x, cycle, display, endOfLine) {
    let pixelPosition = (cycle%40)-1;
    if (-1 <= (x - pixelPosition) && (x - pixelPosition) <= 1) {
        display += '#';
    } else {
        display += '.';
    }
    if (endOfLine.includes(cycle)) {
        display += '\n';
    }
    return display;
}
