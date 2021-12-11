describe("day11", () => {
    describe("Part 1", () => {
        it('should parse input into little octopuses', () => {
            let smallSample = [
                '11',
                '19'
            ]

            let parsed = parseToOctopus(smallSample);

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

            let step1 = takeStep(smallSample)
            expect(parseToArray(step1)).toEqual([
                [3, 4, 5, 4, 3],
                [4, 0, 0, 0, 4],
                [5, 0, 0, 0, 5],
                [4, 0, 0, 0, 4],
                [3, 4, 5, 4, 3],
            ]);

            let step2 = takeStep(step1)
            expect(parseToArray(step2)).toEqual([
                [4, 5, 6, 5, 4],
                [5, 1, 1, 1, 5],
                [6, 1, 1, 1, 6],
                [5, 1, 1, 1, 5],
                [4, 5, 6, 5, 4],
            ])
        });

        it('should simulate flashes_sampleInput', () => {
            let smallSample = parseToOctopus(sampleInput);

            let step1 = takeStep(smallSample)
            expect(parseToArray(step1)).toEqual([
                [6,5,9,4,2,5,4,3,3,4],
                [3,8,5,6,9,6,5,8,2,2],
                [6,3,7,5,6,6,7,2,8,4],
                [7,2,5,2,4,4,7,2,5,7],
                [7,4,6,8,4,9,6,5,8,9],
                [5,2,7,8,6,3,5,7,5,6],
                [3,2,8,7,9,5,2,8,3,2],
                [7,9,9,3,9,9,2,2,4,5],
                [5,9,5,7,9,5,9,6,6,5],
                [6,3,9,4,8,6,2,6,3,7],
            ]);

            let step2 = takeStep(step1)
            expect(parseToArray(step2)).toEqual([
                [8,8,0,7,4,7,6,5,5,5],
                [5,0,8,9,0,8,7,0,5,4],
                [8,5,9,7,8,8,9,6,0,8],
                [8,4,8,5,7,6,9,6,0,0],
                [8,7,0,0,9,0,8,8,0,0],
                [6,6,0,0,0,8,8,9,8,9],
                [6,8,0,0,0,0,5,9,4,3],
                [0,0,0,0,0,0,7,4,5,6],
                [9,0,0,0,0,0,0,8,7,6],
                [8,7,0,0,0,0,6,8,4,8]
            ]);
        });

        it("should count flashes_sampleData specific days", () => {
            expect(countFlashes(sampleInput, 1)).toEqual(0);
            expect(countFlashes(sampleInput, 2)).toEqual(35);
        });

        it("should count flashes_sampleData 10 day", () => {
            expect(countFlashes(sampleInput, 10)).toEqual(204);
        });

        it("should count flashes_sampleData", () => {
            expect(countFlashes(sampleInput, 100)).toEqual(1656);
        });

        it("should count flashes_puzzleInput", () => {
            expect(countFlashes(puzzleInput, 100)).toEqual(1688);
        });

        describe("Part 2", () => {
            it("should find step with simultaneous flash_sampleInput", () => {
                expect(findAllFlashStep(sampleInput)).toEqual(195);
            });

            it("should find step with simultaneous flash_puzzleInput", () => {
                expect(findAllFlashStep(puzzleInput)).toEqual(403);
            });
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