describe("day12", () => {
    describe("Part 1", () => {
        it('should build cave node object', () => {
            let sample = [
                ['start', 'A'],
                ['start', 'b'],
                ['A', 'c'],
                ['A', 'b'],
                ['b', 'd'],
                ['A', 'end'],
                ['b', 'end'],
            ]

            let actual = buildCaves(sample);

            expect(actual).toEqual({
                'start': {
                    adjacent: ['A', 'b'],
                    visits: 0,
                    isBigCave: false
                },
                'A': {
                    adjacent: ['start','c', 'b', 'end'],
                    visits: 0,
                    isBigCave: true
                },
                'b': {
                    adjacent: ['start', 'A', 'd','end'],
                    visits: 0,
                    isBigCave: false
                },
                'c': {
                    adjacent: ['A'],
                    visits: 0,
                    isBigCave: false
                },
                'd': {
                    adjacent: ['b'],
                    visits: 0,
                    isBigCave: false
                },
                'end': {
                    adjacent: ['A', 'b'],
                    visits: 0,
                    isBigCave: false,
                }
            }

            );

        });

        it('should map possible paths', () => {
            let sample = [
                ['start', 'A'],
                ['start', 'b'],
                ['A', 'c'],
                ['A', 'b'],
                ['b', 'd'],
                ['A', 'end'],
                ['b', 'end'],
            ]

            let actual = findPossiblePaths(sample);

            expect(actual).toEqual([
                ['start', 'A', 'b', 'A', 'c', 'A', 'end'],
                ['start', 'A', 'b', 'A', 'end'],
                ['start', 'A', 'b', 'end'],
                ['start', 'A', 'c', 'A', 'b', 'A', 'end'],
                ['start', 'A', 'c', 'A', 'b', 'end'],
                ['start', 'A', 'c', 'A', 'end'],
                ['start', 'A', 'end'],
                ['start', 'b', 'A', 'c', 'A', 'end'],
                ['start', 'b', 'A', 'end'],
                ['start', 'b', 'end']
            ]);
        });

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