describe("day6", () => {

    describe("Part 1", () => {
        it("Should simulate lanternfish totals for the given number of days", () => {
            
            expect(simulateLanternFish([6], 4)).toEqual([2]);
            expect(simulateLanternFish([6], 5)).toEqual([1]);
            expect(simulateLanternFish([6], 6)).toEqual([0]);

            expect(simulateLanternFish([6], 7)).toEqual([6, 8]);
            expect(simulateLanternFish([6], 8)).toEqual([5, 7]);
            expect(simulateLanternFish([6], 9)).toEqual([4, 6]);
            expect(simulateLanternFish([6], 10)).toEqual([3, 5]);
            expect(simulateLanternFish([6], 11)).toEqual([2, 4]);
            
            expect(simulateLanternFish([6], 12)).toEqual([1, 3]);
            expect(simulateLanternFish([6], 13)).toEqual([0, 2]);
            expect(simulateLanternFish([6], 14)).toEqual([6, 1, 8]);
            expect(simulateLanternFish([6], 15)).toEqual([5, 0, 7]);
            expect(simulateLanternFish([6], 16)).toEqual([4, 6, 6, 8]);
        });

        it("Should simulate lanternfish totals for the given number of days_sample input", () => {
            let actualFishes = simulateLanternFish(sampleInput, 80);
            expect(actualFishes.length).toEqual(5934);
        });

        it("Should simulate lanternfish totals for the given number of days_puzzle input", () => {
            let actualFishes = simulateLanternFish(puzzleInput, 80);
            expect(actualFishes.length).toEqual(388739);
        });


    });

    describe("Part 2", () => {
       
    });

    //input parsed and structured using column select
    let sampleInput = [3,4,3,1,2]

    let puzzleInput = [
        2,1,1,1,1,1,1,5,1,1,1,1,5,1,1,3,5,1,1,3,1,1,3,1,4,4,4,5,1,1,1,3,1,3,1,1,2,2,1,1,1,
        5,1,1,1,5,2,5,1,1,2,1,3,3,5,1,1,4,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,4,1,5,1,2,1,1,1,1,
        5,1,1,1,1,1,5,1,1,1,4,5,1,1,3,4,1,1,1,3,5,1,1,1,2,1,1,4,1,4,1,2,1,1,2,1,5,1,1,1,5,
        1,2,2,1,1,1,5,1,2,3,1,1,1,5,3,2,1,1,3,1,1,3,1,3,1,1,1,5,1,1,1,1,1,1,1,3,1,1,1,1,3,
        1,1,4,1,1,3,2,1,2,1,1,2,2,1,2,1,1,1,4,1,2,4,1,1,4,4,1,1,1,1,1,4,1,1,1,2,1,1,2,1,5,
        1,1,1,1,1,5,1,3,1,1,2,3,4,4,1,1,1,3,2,4,4,1,1,3,5,1,1,1,1,4,1,1,1,1,1,5,3,1,5,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,5,1,4,4,1,1,1,1,1,1,1,1,3,1,
        3,1,4,1,1,2,2,2,1,1,2,1,1
    ]
});