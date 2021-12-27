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

        it('should find most stylish velocity', () => {
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
    });
    describe("Part 2", () => {

    });


});