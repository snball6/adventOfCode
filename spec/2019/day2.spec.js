describe("day2", () => {

    describe("Part 1", () => {
        it("should handle addition op code", () => {
            let program = [1,0,0,0,99];

            let returnProgram = compute(program);
            expect(returnProgram).toEqual([2,0,0,0,99]);
        });
        
        it("should handle multiplication op code", () => {
            let program = [2,3,0,3,99];

            let returnProgram = compute(program);
            expect(returnProgram).toEqual([2,3,0,6,99]);

            program = [2,4,4,5,99,0];

            returnProgram = compute(program);
            expect(returnProgram).toEqual([2,4,4,5,99,9801]);
        });

        it("should handle combined op codes", () => {
            let program = [1,1,1,4,99,5,6,0,99];

            let returnProgram = compute(program);
            expect(returnProgram).toEqual([30,1,1,4,2,5,6,0,99]);
        });

        it("should calculate Part1 answer", () => {
            let modifiedInput = input.slice();
            modifiedInput[1] = 12;
            modifiedInput[2] = 2;

            let returnProgram = compute(modifiedInput);
            // expect(returnProgram[0]).toEqual("Answer");
            expect(returnProgram[0]).toEqual(6087827);
        });
    });

    describe("Part 2", () => {
        it("should find noun and verb to produce output", ()=> {
            // expect(findNounAndVerb(19690720, input.slice())).toEqual("Answer");
            expect(findNounAndVerb(19690720, input.slice())).toEqual(5379);
        });
    });


    let input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,9,19,23,1,6,23,27,1,10,27,31,1,5,31,35,2,6,35,39,1,5,39,43,1,5,43,47,2,47,6,51,1,51,5,55,1,13,55,59,2,9,59,63,1,5,63,67,2,67,9,71,1,5,71,75,2,10,75,79,1,6,79,83,1,13,83,87,1,10,87,91,1,91,5,95,2,95,10,99,2,9,99,103,1,103,6,107,1,107,10,111,2,111,10,115,1,115,6,119,2,119,9,123,1,123,6,127,2,127,10,131,1,131,6,135,2,6,135,139,1,139,5,143,1,9,143,147,1,13,147,151,1,2,151,155,1,10,155,0,99,2,14,0,0 ]
});