function getHighestCalories(input) {
    let highest = 0;
    for (let i = 0; i < input.length; i++) {
        let elfTotal = 0;
        for (let j = 0; j < input[i].length; j++) {
            elfTotal += input[i][j];
        }
        if (elfTotal > highest) {
            highest = elfTotal;
        }
    }
    return highest;
}

function getTop3Highest(input) {
    let highest = [0, 0, 0];
    for (let i = 0; i < input.length; i++) {
        let elfTotal = 0;
        for (let j = 0; j < input[i].length; j++) {
            elfTotal += input[i][j];
        }

        if (elfTotal >= highest[0]) {
            //new top
            highest = [elfTotal, highest[0], highest[1]] //insert front, drop last
        }
        else if (elfTotal >= highest[1]) {
            highest = [highest[0], elfTotal, highest[1]]; //insert second, drop last
        }
        else if (elfTotal > highest[2]) {
            highest = [highest[0], highest[1], elfTotal]; //insert second, drop last
        }
    }

    return highest[0] + highest[1] + highest[2];
}


