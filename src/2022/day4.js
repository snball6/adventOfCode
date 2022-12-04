function countFullOverlapPairs(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        let first = input[i][0]; //2 8
        let second = input[i][1]; //3 7

        if (
            //first includes second
            (first[0] <= second[0] &&
                first[1] >= second[1])
            ||
            //second includes first
            (second[0] <= first[0] &&
                second[1] >= first[1])
        ) {
            total++;
        }
    }
    return total;
}