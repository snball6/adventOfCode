describe("day11", () => {
    describe("Part 1", () => {
        it('should parse input into little octopuses', () => {
            let smallSample = [
                '11',
                '19'
            ]

            let parsed = parseToOctopus(smallSample);

            console.log(parsed);

            expect(parsed[0][0].rowIndex).toEqual(0);
            expect(parsed[0][0].colIndex).toEqual(0);
            expect(parsed[0][0].value).toEqual(1);
            expect(parsed[0][0].hasFlashed).toEqual(false);

            expect(parsed[0][1].rowIndex).toEqual(0);
            expect(parsed[0][1].colIndex).toEqual(1);
            expect(parsed[0][1].value).toEqual(1);
            expect(parsed[0][1].hasFlashed).toEqual(false);

            expect(parsed[1][0].rowIndex).toEqual(1);
            expect(parsed[1][0].colIndex).toEqual(0);
            expect(parsed[1][0].value).toEqual(1);
            expect(parsed[1][0].hasFlashed).toEqual(false);

            expect(parsed[1][1].rowIndex).toEqual(1);
            expect(parsed[1][1].colIndex).toEqual(1);
            expect(parsed[1][1].value).toEqual(9);
            expect(parsed[1][1].hasFlashed).toEqual(false);
        });

        it('should parse octopuses back to a console log friendly array', () => {
            let smallSample = [
                '11',
                '19'
            ]
            let parsed = parseToOctopus(smallSample);

            expect(parseToArray(parsed)).toEqual([
                [1, 1],
                [1, 9]
            ]);
        });

        it('should simulate flashes', () => {
            let smallSample = parseToOctopus([
                '11111',
                '19991',
                '19191',
                '19991',
                '11111',
            ]);

            let actual = takeStep(smallSample)
            expect(parseToArray(actual)).toEqual([
                [3, 4, 5, 4, 3],
                [4, 0, 0, 0, 4],
                [5, 0, 0, 0, 5],
                [4, 0, 0, 0, 4],
                [3, 4, 5, 4, 3],
            ]);

            // expect(takeStep(smallSample)).toEqual([
            //     [4, 5, 6, 5, 4],
            //     [5, 1, 1, 1, 5],
            //     [6, 1, 1, 1, 6],
            //     [5, 1, 1, 1, 5],
            //     [4, 5, 6, 5, 4],
            // ])

        });

        it("should count flashes_sampleData", () => {

            // expect(countFlashes(sampleInput, 100)).toEqual(1656);
        });



        describe("Part 2", () => {


        });

        let sampleInput = [
            '5483143223',
            '2745854711',
            '5264556173',
            '6141336146',
            '6357385478',
            '4167524645',
            '2176841721',
            '6882881134',
            '4846848554',
            '5283751526',
        ]

        let puzzleInput = [
            '3172537688',
            '4566483125',
            '6374512653',
            '8321148885',
            '4342747758',
            '1362188582',
            '7582213132',
            '6887875268',
            '7635112787',
            '7242787273',
        ]
    });
});