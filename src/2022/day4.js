function countFullOverlapPairs(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        let first = input[i][0];
        let second = input[i][1];

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

function countAllOverlapPairs(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        let first = input[i][0];
        let second = input[i][1];

        let doNotOverlap =
            //range of first ends before start of second
            (first[1] < second[0]) ||
            //range of second ends before start of first
            (second[1] < first[0]);

        if (!doNotOverlap) {
            total++;
        }
    }
    return total;
}