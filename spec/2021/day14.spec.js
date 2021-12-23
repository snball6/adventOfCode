fdescribe("day14", () => {
    describe("Part 1", () => {
        it('should insert between letters_sampleInput', () => {
            //step 1
            let actual = performPolymerInsert(sampleStart, sampleInput)
            expect(actual).toEqual('NCNBCHB');
            //step2
            actual = performPolymerInsert(actual, sampleInput)
            expect(actual).toEqual('NBCCNBBBCBHCB');
            actual = performPolymerInsert(actual, sampleInput)
            expect(actual).toEqual('NBBBCNCCNBBNBNBBCHBHHBCHB');
            actual = performPolymerInsert(actual, sampleInput)
            expect(actual).toEqual('NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB');
        });
        it('should calculate score', () => {
            expect(getMostCommonMinusLeastCommon('AAAABBAAAAAA')).toEqual(8);
        });

        it('should take 10 steps and count up elements_sampleInput', () => {
            expect(take10StepsAndCalculate(sampleStart, sampleInput)).toEqual(1588);
        });

        it('should take 10 steps and count up elements_puzzleInput', () => {
            expect(take10StepsAndCalculate(puzzleStart, puzzleInput)).toEqual(2947);
        });

    });
    describe("Part 2", () => {
        it('should do the same thing but linked list data structure..._puzzleInput', () => {
            expect(take10StepsAndCalculate_Linked(sampleStart, sampleInput)).toEqual(1588);
            //it still cannot make is to 40 though. Dies by 23
        });

        it('should do the same thing but weird giant array data structure..._puzzleInput', () => {
            expect(take10StepsAndCalculate_WeirdArray(sampleStart, sampleInput)).toEqual(1588);
        });
    });
    let sampleStart = 'NNCB';
    let sampleInput = {
        'CH': 'B',
        'HH': 'N',
        'CB': 'H',
        'NH': 'C',
        'HB': 'C',
        'HC': 'B',
        'HN': 'C',
        'NN': 'C',
        'BH': 'H',
        'NC': 'B',
        'NB': 'B',
        'BN': 'B',
        'BB': 'N',
        'BC': 'B',
        'CC': 'N',
        'CN': 'C',
    };

    let puzzleStart = 'CFFPOHBCVVNPHCNBKVNV';
    let puzzleInput = {
        'KO': 'F',
        'CV': 'H',
        'CF': 'P',
        'FK': 'B',
        'BN': 'P',
        'VN': 'K',
        'BC': 'H',
        'OP': 'S',
        'HS': 'V',
        'HK': 'N',
        'CC': 'F',
        'CK': 'V',
        'OC': 'S',
        'SN': 'C',
        'PK': 'H',
        'BB': 'S',
        'PO': 'F',
        'HF': 'K',
        'BV': 'P',
        'HP': 'F',
        'VF': 'H',
        'BP': 'H',
        'CH': 'C',
        'KN': 'O',
        'NP': 'F',
        'FS': 'F',
        'BH': 'B',
        'VB': 'P',
        'OS': 'S',
        'KK': 'O',
        'SO': 'P',
        'NB': 'O',
        'PS': 'O',
        'KV': 'O',
        'CS': 'P',
        'PN': 'O',
        'HB': 'V',
        'NF': 'P',
        'SC': 'S',
        'NH': 'N',
        'HV': 'K',
        'FN': 'V',
        'KS': 'P',
        'BO': 'C',
        'KP': 'V',
        'OK': 'B',
        'OV': 'P',
        'CN': 'C',
        'SB': 'H',
        'VP': 'C',
        'HC': 'P',
        'FB': 'F',
        'VS': 'K',
        'PH': 'C',
        'VC': 'H',
        'KH': 'B',
        'SH': 'B',
        'BK': 'N',
        'SP': 'P',
        'SF': 'B',
        'OO': 'B',
        'VH': 'K',
        'PP': 'C',
        'FV': 'P',
        'KC': 'P',
        'CO': 'S',
        'NO': 'O',
        'FO': 'K',
        'SK': 'O',
        'ON': 'K',
        'VO': 'H',
        'VV': 'H',
        'CP': 'P',
        'FC': 'B',
        'FP': 'N',
        'FH': 'C',
        'KF': 'F',
        'PB': 'C',
        'NN': 'K',
        'SS': 'O',
        'CB': 'C',
        'HH': 'S',
        'FF': 'S',
        'KB': 'N',
        'HO': 'O',
        'BF': 'N',
        'PV': 'K',
        'OB': 'B',
        'OH': 'N',
        'VK': 'V',
        'NV': 'H',
        'SV': 'F',
        'NC': 'P',
        'OF': 'V',
        'NS': 'V',
        'PF': 'N',
        'HN': 'K',
        'BS': 'S',
        'NK': 'H',
        'PC': 'O',
    }
});