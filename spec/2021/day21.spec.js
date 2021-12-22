describe("day21", () => {
    describe("Part 1", () => {
        it('should build a deterministic dice which loops through 100', () => {
           let dice = new Dice();
           expect(dice.getRollDeterministic()).toEqual(1);
           expect(dice.getRollDeterministic()).toEqual(2);
           for(let i = 0; i<97; i++){
               dice.getRollDeterministic();
           }
           expect(dice.getRollDeterministic()).toEqual(100);
           expect(dice.getRollDeterministic()).toEqual(1);
           expect(dice.getRollDeterministic()).toEqual(2);

           expect(dice.incrementer).toEqual(102)
        });

        it('should easily grab total of next 3', () => {
            let dice = new Dice();

            expect(dice.getSumOfNext3Roll()).toEqual(1+2+3);
            expect(dice.getSumOfNext3Roll()).toEqual(4+5+6);
            expect(dice.getSumOfNext3Roll()).toEqual(7+8+9);

            expect(dice.incrementer).toEqual(9)
         });

         it('should calculate the answer', () => {
            expect(getPart1Answer(4,8)).toEqual(745*993);
         });

         it('should calculate the answer', () => {
            expect(getPart1Answer(7,2)).toEqual(678468);
         });

    });
    describe("Part 2", () => {

    });


});