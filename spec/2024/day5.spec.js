describe("day5", () => {

    describe("Part 1", () => {
        it("Should build rules dictionary", () => {
            dict = buildRulesDictionary(sampleRulesDay5)
            //spot check assertions on entries
            expect(dict[29]).toEqual([13]);
            expect(dict[53]).toEqual([29, 13]);
        });

        it("Should confirm if following rules", () => {
            dict = buildRulesDictionary(sampleRulesDay5)
            expect(isCorrectOrder(dict, sampleUpdates[0])).toEqual(true);
            expect(isCorrectOrder(dict, sampleUpdates[1])).toEqual(true);
            expect(isCorrectOrder(dict, sampleUpdates[2])).toEqual(true);
            expect(isCorrectOrder(dict, sampleUpdates[3])).toEqual(false);
            expect(isCorrectOrder(dict, sampleUpdates[4])).toEqual(false);
            expect(isCorrectOrder(dict, sampleUpdates[5])).toEqual(false);

        });

        it("Should get middle number", () => {
            expect(getMiddle([75, 47, 61, 53, 29])).toEqual(61);
            expect(getMiddle([97, 61, 53, 29, 13])).toEqual(53);
            expect(getMiddle([75, 29, 13])).toEqual(29);
        });

        it("Solve the puzzle sample", () => {
            expect(day5Part1(sampleUpdates, sampleRulesDay5)).toEqual(143)
        });

        it("Solve the puzzle actual", () => {
            expect(day5Part1(actualUpdates, actualRulesDay5)).toEqual(5747)
        });
    });

    describe("Part 2", () => {
        it("Should sort by rules", () => {
            dict = buildRulesDictionary(sampleRulesDay5)
            expect(sortCorrect([75,97,47,61,53], dict)).toEqual([97,75,47,61,53]);
            expect(sortCorrect([61,13,29], dict)).toEqual([61,29,13]);
            expect(sortCorrect([97,13,75,29,47], dict)).toEqual([97,75,47,29,13]);
        });

        it("Solve the puzzle sample", () => {
            expect(day5Part2(sampleUpdates, sampleRulesDay5)).toEqual(123)
        });

        it("Solve the puzzle actual", () => {
            expect(day5Part2(actualUpdates, actualRulesDay5)).toEqual(5502)
        });
    });
});