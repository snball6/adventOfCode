describe("day12", () => {
    //formatted with column selects + manual changes
    let sample;
    let actual;

    beforeEach(function () {
        sample = [
            ['S', 'a', 'b', 'q', 'p', 'o', 'n', 'm'],
            ['a', 'b', 'c', 'r', 'y', 'x', 'x', 'l'],
            ['a', 'c', 'c', 's', 'z', 'E', 'x', 'k'],
            ['a', 'c', 'c', 't', 'u', 'v', 'w', 'j'],
            ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i'],
        ]
    });

    describe("Part 1", () => {
        it("Helper - it should get the startLocation", () => {
            expect(getStart(sample)).toEqual([0, 0]);//yx

            let another = [
                ['a', 'a', 'b', 'q', 'p', 'o', 'n', 'm'],
                ['a', 'b', 'c', 'r', 'y', 'x', 'x', 'l'],
                ['S', 'c', 'c', 's', 'z', 'E', 'x', 'k'],
                ['a', 'c', 'c', 't', 'u', 'v', 'w', 'j'],
                ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i'],
            ]
            expect(getStart(another)).toEqual([2, 0]);
        });

        it("Helper - it should determine available paths", () => {
            expect(getOptions(sample, {}, 0, 0)).toEqual([
                [1, 0],
                [0, 1]
            ]);

            expect(getOptions(sample, { '2,7': true }, 1, 7)).toEqual([
                0, 7
            ])

        });


        it("Helper - it should elimnatePreviously visited paths", () => {
            expect(getOptions(sample, { '0,1': true }, 0, 0)).toEqual([
                [1, 0]
            ]);
        });

        it("Sample - it should get the least steps", () => {
            expect(getLeastSteps(sample)).toEqual(31);
        });

        // it("Actual - it should calculate monkey business", () => {
        //     expect(getLeastSteps(sample)).toEqual(31);
        // });
    });

    describe("Part 2", () => {

    });
});