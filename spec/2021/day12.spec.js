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
                },
                'A': {
                    adjacent: ['start', 'c', 'b', 'end'],
                },
                'b': {
                    adjacent: ['start', 'A', 'd', 'end'],
                },
                'c': {
                    adjacent: ['A'],
                },
                'd': {
                    adjacent: ['b'],
                },
                'end': {
                    adjacent: ['A', 'b'],
                }
            }

            );

        });

        it('should map possible paths', () => {


            let actual = findPossiblePaths(smallSample);
            expect(actual.length).toEqual(10);
            expect(actual).toContain(['start', 'A', 'b', 'A', 'c', 'A', 'end']);
            expect(actual).toContain(['start', 'A', 'c', 'A', 'b', 'A', 'end']);

            expect(actual).toContain(['start', 'A', 'b', 'A', 'end']);
            expect(actual).toContain(['start', 'A', 'b', 'end']);
            expect(actual).toContain(['start', 'A', 'c', 'A', 'b', 'end']);
            expect(actual).toContain(['start', 'A', 'c', 'A', 'end']);
            expect(actual).toContain(['start', 'A', 'end']);
            expect(actual).toContain(['start', 'b', 'A', 'c', 'A', 'end']);
            expect(actual).toContain(['start', 'b', 'A', 'end']);
            expect(actual).toContain(['start', 'b', 'end']);
        });

        it('should map possible_sampleInputs', () => {

            let actual = findPossiblePaths(slightlyLargerExample);
            expect(actual.length).toEqual(19);


            actual = findPossiblePaths(evenLargerExample);
            expect(actual.length).toEqual(226);
        });

        it('should map possible_puzzleInput', () => {
            let actual = findPossiblePaths(puzzleInput);
            expect(actual.length).toEqual(4773);
        });


    });
    describe("Part 2", () => {
        it('should map possible paths in new way_small sample', () => {
            let actual = findPossiblePathsPart2(smallSample);
            console.log(actual);
            expect(actual.length).toEqual(36);
        });

        it('should map possible paths in new way_sampleInputs', () => {
            let actual = findPossiblePathsPart2(smallSample);
            expect(actual.length).toEqual(36);

            actual = findPossiblePathsPart2(slightlyLargerExample);
            expect(actual.length).toEqual(103);


            actual = findPossiblePathsPart2(evenLargerExample);
            expect(actual.length).toEqual(3509);
        });

        it('should map possible_puzzleInput', () => {
            let actual = findPossiblePathsPart2(puzzleInput);
            expect(actual.length).toEqual(4773);
        });
    });

    let smallSample = [
        ['start', 'A'],
        ['start', 'b'],
        ['A', 'c'],
        ['A', 'b'],
        ['b', 'd'],
        ['A', 'end'],
        ['b', 'end'],
    ]

    let slightlyLargerExample = [
        ['dc', 'end'],
        ['HN', 'start'],
        ['start', 'kj'],
        ['dc', 'start'],
        ['dc', 'HN'],
        ['LN', 'dc'],
        ['HN', 'end'],
        ['kj', 'sa'],
        ['kj', 'HN'],
        ['kj', 'dc']
    ]

    let evenLargerExample = [
        ['fs', 'end'],
        ['he', 'DX'],
        ['fs', 'he'],
        ['start', 'DX'],
        ['pj', 'DX'],
        ['end', 'zg'],
        ['zg', 'sl'],
        ['zg', 'pj'],
        ['pj', 'he'],
        ['RW', 'he'],
        ['fs', 'DX'],
        ['pj', 'RW'],
        ['zg', 'RW'],
        ['start', 'pj'],
        ['he', 'WI'],
        ['zg', 'he'],
        ['pj', 'fs'],
        ['start', 'RW']
    ]

    let puzzleInput = [
        ['ln', 'nr'],
        ['ln', 'wy'],
        ['fl', 'XI'],
        ['qc', 'start'],
        ['qq', 'wy'],
        ['qc', 'ln'],
        ['ZD', 'nr'],
        ['qc', 'YN'],
        ['XI', 'wy'],
        ['ln', 'qq'],
        ['ln', 'XI'],
        ['YN', 'start'],
        ['qq', 'XI'],
        ['nr', 'XI'],
        ['start', 'qq'],
        ['qq', 'qc'],
        ['end', 'XI'],
        ['qq', 'YN'],
        ['ln', 'YN'],
        ['end', 'wy'],
        ['qc', 'nr'],
        ['end', 'nr']
    ]
});