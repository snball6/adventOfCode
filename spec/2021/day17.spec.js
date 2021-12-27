fdescribe("day17", () => {
    describe("Part 1", () => {
        it('should determine if a velocity pair will hit a target', () => {
            let target =
            {
                xMin: 20,
                xMax: 30,
                yMin: -10,
                yMax: -5,
            }

            expect(hitsTarget(7, 2, target)).toEqual(true);
            // expect(hitsTarget(6, 3, target)).toEqual(true);
            // expect(hitsTarget(9, 0, target)).toEqual(true);


            expect(hitsTarget(17, -4, target)).toEqual(false);
        });

        it('should find most stylish velocity_sample data', () => {
            let target =
            {
                xMin: 20,
                xMax: 30,
                yMin: -10,
                yMax: -5,
            }

            expect(findStylishVelocity(target)).toEqual({
                velocity: [6, 9],
                maxHeight: 45
            });
        });

        it('should find most stylish velocity_puzzle input', () => {
            let target =
            {
                xMin: 94,
                xMax: 151,
                yMin: -156,
                yMax: -103,
            }

            expect(findStylishVelocity(target)).toEqual({
                velocity: [14,155],
                maxHeight: 12090
            });
        });
    });
    describe("Part 2", () => {

    });


});