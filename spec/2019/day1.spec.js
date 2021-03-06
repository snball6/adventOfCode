describe("day1", () => {

    describe("Part 1", () => {
        it("should calculate fuel by mass", () => {
            expect(fuelByMass(12)).toBe(2);
            expect(fuelByMass(14)).toBe(2);
            expect(fuelByMass(1969)).toBe(654);
            expect(fuelByMass(100756)).toBe(33583);
        });
    
        it("should calculate fuel for all modules", () => {
            let expectedTotal = 2+2+654+33583;
    
            expect(getTotalFuel([12,14,1969,100756])).toBe(expectedTotal);
        });
    
        it("should calculate Part1 answer", () => {
            // expect(getTotalFuel(input)).toBe("ANSWER");
            expect(getTotalFuel(input)).toBe(3372695);
        });
    });

    describe("Part 2", () => {
        it("should recurse fuel requirements", () => {
            expect(fuelByMassRecursive(12)).toBe(2);
            expect(fuelByMassRecursive(1969)).toBe(966);
            expect(fuelByMassRecursive(100756)).toBe(50346);
        });

        it("should calculate Part2 answer", () => {
            // expect(getTotalFuelRecursive(input)).toBe("ANSWER");
            expect(getTotalFuelRecursive(input)).toBe(5056172);
        });
    });


    let input = [
        149895,
        89996,
        98406,
        105129,
        81621,
        118239,
        76034,
        75248,
        145049,
        52137,
        137654,
        78153,
        92688,
        123037,
        61391,
        105590,
        96292,
        97343,
        106933,
        83151,
        60467,
        110976,
        133919,
        111869,
        119326,
        101284,
        68673,
        87159,
        111010,
        77874,
        113160,
        51401,
        138135,
        53885,
        140769,
        64373,
        148795,
        87103,
        50288,
        144316,
        67856,
        120288,
        95355,
        128460,
        84755,
        127690,
        85806,
        76292,
        57886,
        62479,
        78576,
        131616,
        130344,
        101320,
        68605,
        124509,
        103802,
        118230,
        129314,
        124777,
        80908,
        111895,
        82578,
        111454,
        138739,
        107566,
        140125,
        144627,
        121508,
        56419,
        112553,
        76470,
        57530,
        138587,
        134643,
        117339,
        88833,
        119183,
        82644,
        143335,
        110222,
        114309,
        132245,
        146443,
        113942,
        52574,
        116978,
        53635,
        125507,
        100058,
        133025,
        82765,
        52334,
        87317,
        105273,
        130353,
        89154,
        96997,
        83906,
        58085,
    ]
});