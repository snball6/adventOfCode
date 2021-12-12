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
            let actual = findPossiblePaths(slightlyLargerExample);
            expect(actual.length).toEqual(19);

            let evenLargerExample = [
                ['fs','end'],
                ['he','DX'],
                ['fs','he'],
                ['start','DX'],
                ['pj','DX'],
                ['end','zg'],
                ['zg','sl'],
                ['zg','pj'],
                ['pj','he'],
                ['RW','he'],
                ['fs','DX'],
                ['pj','RW'],
                ['zg','RW'],
                ['start','pj'],
                ['he','WI'],
                ['zg','he'],
                ['pj','fs'],
                ['start','RW']
            ]
            actual = findPossiblePaths(evenLargerExample);
            expect(actual.length).toEqual(226);
        });

        it('should map possible_puzzleInput', () => {
            let actual = findPossiblePaths(puzzleInput);
            expect(actual.length).toEqual(19);
        });


    });
    describe("Part 2", () => {

    });



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