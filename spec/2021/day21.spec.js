describe("day21", () => {
   describe("Part 1", () => {
      it('should build a deterministic dice which loops through 100', () => {
         let dice = new Dice();
         expect(dice.getRollDeterministic()).toEqual(1);
         expect(dice.getRollDeterministic()).toEqual(2);
         for (let i = 0; i < 97; i++) {
            dice.getRollDeterministic();
         }
         expect(dice.getRollDeterministic()).toEqual(100);
         expect(dice.getRollDeterministic()).toEqual(1);
         expect(dice.getRollDeterministic()).toEqual(2);

         expect(dice.incrementer).toEqual(102)
      });

      it('should easily grab total of next 3', () => {
         let dice = new Dice();

         expect(dice.getSumOfNext3Roll()).toEqual(1 + 2 + 3);
         expect(dice.getSumOfNext3Roll()).toEqual(4 + 5 + 6);
         expect(dice.getSumOfNext3Roll()).toEqual(7 + 8 + 9);

         expect(dice.incrementer).toEqual(9)
      });

      it('should calculate the answer', () => {
         expect(getPart1Answer(4, 8)).toEqual(745 * 993);
      });

      it('should calculate the answer', () => {
         expect(getPart1Answer(7, 2)).toEqual(678468);
      });

   });
   describe("Part 2", () => {
      it('should build a dice returning the sums each turn could produce - 3*3*3 options then repeats totaled', () => {
         let dice = new QuantumDie();
         //for example, the sum of 3 in one branch, 4 in 3, 5 in 6 cases, etc.
         expect(dice.getSumOfNext3Roll()).toEqual({3: 1, 4: 3, 5: 6, 6: 7, 7: 6, 8: 3, 9: 1 });//7 possible each roll
      });

      it('should calculate the answer', () => {
         expect(getPart2Answer(4, 8)).toEqual(444356092776315);
      });

      it('should calculate the answer', () => {
         expect(getPart2Answer(7, 2)).toEqual(131180774190079); //slow but works
      });
   });


});