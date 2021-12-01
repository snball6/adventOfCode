function countNumberOfIncreases(report){
    let counter = 0;
    let previous = 9999; //arbitrary larger number so first is not an increase
    report.forEach(depth => {
        if(depth > previous){
            counter++;
        }
        previous = depth;
    });

    return counter;
}

function createSlidingWindows(report){
    let windows = [];
    for(let i = 0; i<report.length-2; i++){
        windows.push(report[i]+report[i+1]+report[i+2]);
    }
    return windows;
}