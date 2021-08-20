describe("day1", () => {

    it("should calculate fuel by mass", () => {
        expect(fuelByMass(12)).toBe(2);
        expect(fuelByMass(14)).toBe(2);
        expect(fuelByMass(1969)).toBe(654);
        expect(fuelByMass(100756)).toBe(33583);
    });
});