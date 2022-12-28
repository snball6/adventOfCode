describe("day11", () => {
    //formatted with column selects + manual changes
    let sample;
    let actual;

    beforeEach(function () {
        sample = {
            0: {
                items: [79, 98],
                operation: (old) => (old * 19),
                test: (worry) => (worry % 23 == 0),
                divisibleTest: 23,
                ifTrue: 2,
                ifFalse: 3,
                inspections: 0
            },
            1: {
                items: [54, 65, 75, 74],
                operation: (old) => (old + 6),
                test: (worry) => (worry % 19 == 0),
                divisibleTest: 19,
                ifTrue: 2,
                ifFalse: 0,
                inspections: 0
            },
            2:
            {
                items: [79, 60, 97],
                operation: (old) => (old * old),
                test: (worry) => (worry % 13 == 0),
                divisibleTest: 13,
                ifTrue: 1,
                ifFalse: 3,
                inspections: 0
            },
            3:
            {
                items: [74],
                operation: (old) => (old + 3),
                test: (worry) => (worry % 17 == 0),
                divisibleTest: 17,
                ifTrue: 0,
                ifFalse: 1,
                inspections: 0
            }
        }

        actual = {
            0: {
                items: [75, 75, 98, 97, 79, 97, 64],
                operation: (old) => (old * 13),
                test: (worry) => (worry % 19 == 0),
                divisibleTest: 19,
                ifTrue: 2,
                ifFalse: 7,
                inspections: 0
            },
            1: {
                items: [50, 99, 80, 84, 65, 95],
                operation: (old) => (old + 2),
                test: (worry) => (worry % 3 == 0),
                divisibleTest: 3,
                ifTrue: 4,
                ifFalse: 5,
                inspections: 0
            },
            2: {
                items: [96, 74, 68, 96, 56, 71, 75, 53],
                operation: (old) => (old + 1),
                test: (worry) => (worry % 11 == 0),
                divisibleTest: 11,
                ifTrue: 7,
                ifFalse: 3,
                inspections: 0
            },
            3: {
                items: [83, 96, 86, 58, 92],
                operation: (old) => (old + 8),
                test: (worry) => (worry % 17 == 0),
                divisibleTest: 17,
                ifTrue: 6,
                ifFalse: 1,
                inspections: 0
            },
            4: {
                items: [99],
                operation: (old) => (old * old),
                test: (worry) => (worry % 5 == 0),
                divisibleTest: 5,
                ifTrue: 0,
                ifFalse: 5,
                inspections: 0
            },
            5: {
                items: [60, 54, 83],
                operation: (old) => (old + 4),
                test: (worry) => (worry % 2 == 0),
                divisibleTest:2,
                ifTrue: 2,
                ifFalse: 0,
                inspections: 0
            },
            6: {
                items: [77, 67],
                operation: (old) => (old * 17),
                test: (worry) => (worry % 13 == 0),
                divisibleTest: 13,
                ifTrue: 4,
                ifFalse: 1,
                inspections: 0
            },
            7: {
                items: [95, 65, 58, 76],
                operation: (old) => (old + 5),
                test: (worry) => (worry % 7 == 0),
                divisibleTest: 7, 
                ifTrue: 3,
                ifFalse: 6,
                inspections: 0
            }
        }
    });

    describe("Part 1", () => {
        it("Helper - it completeOneRound", () => {
            completeRound(sample);
            expect(sample[0].items).toEqual([20, 23, 27, 26]);
            expect(sample[1].items).toEqual([2080, 25, 167, 207, 401, 1046]);
            expect(sample[2].items).toEqual([]);
            expect(sample[3].items).toEqual([]);
        });

        it("Sample - it should calculate monkey business", () => {
            expect(getMonkeyBusiness(sample)).toEqual(10605);
        });

        it("Actual - it should calculate monkey business", () => {
            expect(getMonkeyBusiness(actual)).toEqual(66124);
        });
    });

    describe("Part 2", () => {
        it("Helper - it handles new rules_1 round", () => {
            getMonkeyBusinessPart2(sample, 1);
            expect(sample[0].inspections).toEqual(2);
            expect(sample[1].inspections).toEqual(4);
            expect(sample[2].inspections).toEqual(3);
            expect(sample[3].inspections).toEqual(6);
        });
        it("Helper - it handles new rules_20 rounds", () => {
            getMonkeyBusinessPart2(sample, 20);
            expect(sample[0].inspections).toEqual(99);
            expect(sample[1].inspections).toEqual(97);
            expect(sample[2].inspections).toEqual(8);
            expect(sample[3].inspections).toEqual(103);
        });

        it("Helper - it handles new rules_1000 rounds", () => {
            getMonkeyBusinessPart2(sample, 1000);
            expect(sample[0].inspections).toEqual(5204);
            expect(sample[1].inspections).toEqual(4792);
            expect(sample[2].inspections).toEqual(199);
            expect(sample[3].inspections).toEqual(5192);
        });

        it("sample - it should get monkey business", () => {
            expect(getMonkeyBusinessPart2(sample, 10000)).toEqual(2713310158);
        });

        it("actual - it should get monkey business", () => {
            expect(getMonkeyBusinessPart2(actual, 10000)).toEqual(19309892877);
        });
    });
});