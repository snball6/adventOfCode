describe("day5", () => {

    describe("Part 1", () => {
        it("Should only consider horizontal and vertical lines", () => {
            let filteredInput = filterToHorizontalAndVertical(sampleInput);

            expect(filteredInput.length).toEqual(6)
            expect(filteredInput[0]).toEqual(sampleInput[0])
            expect(filteredInput[1]).toEqual(sampleInput[2])
            expect(filteredInput[2]).toEqual(sampleInput[3])
            expect(filteredInput[3]).toEqual(sampleInput[4])
            expect(filteredInput[4]).toEqual(sampleInput[6])
            expect(filteredInput[5]).toEqual(sampleInput[7])
        });

        it("Should build dictionary of vents", () => {
            let vents = [
                {
                    start: [0, 0],
                    end: [1, 0]
                },
                {
                    start: [7, 0],
                    end: [7, 4]
                },
                {
                    start: [9, 4],
                    end: [3, 4]
                },
            ]
            let dictionary = buildDictionaryOfVents(vents);

            expect(dictionary['0,0']).toEqual(1);
            expect(dictionary['1,0']).toEqual(1);
            expect(dictionary['7,0']).toEqual(1);
            expect(dictionary['7,1']).toEqual(1);
            expect(dictionary['7,2']).toEqual(1);
            expect(dictionary['7,3']).toEqual(1);

            expect(dictionary['7,4']).toEqual(2);

            expect(dictionary['9,4']).toEqual(1);
            expect(dictionary['8,4']).toEqual(1);
            expect(dictionary['6,4']).toEqual(1);
            expect(dictionary['5,4']).toEqual(1);
            expect(dictionary['4,4']).toEqual(1);
            expect(dictionary['3,4']).toEqual(1);
        });

        it("Should count 2 or greater overlaps_sample input filtered", () => {
            let filteredInput = filterToHorizontalAndVertical(sampleInput);

            let actual = getCountOf2OrGreaterOverlaps(filteredInput);

            expect(actual).toEqual(5);
        });

        it("Should count 2 or greater overlaps_puzzle input filtered", () => {
            let filteredInput = filterToHorizontalAndVertical(puzzleInput);

            let actual = getCountOf2OrGreaterOverlaps(filteredInput);

            expect(actual).toEqual(7468);
        });

    });

    describe("Part 2", () => {
        it("Should build dictionary of vents_one diagonal", () => {
            let vents = [
                {
                    start: [1, 1],
                    end: [3, 3]
                },
            ]
            let dictionary = buildDictionaryOfVents(vents);

            expect(Object.keys(dictionary).length).toEqual(3);
            expect(dictionary['1,1']).toEqual(1);
            expect(dictionary['2,2']).toEqual(1);
            expect(dictionary['3,3']).toEqual(1);
        });

        it("Should build dictionary of vents_diagonal", () => {
            let vents = [
                {
                    start: [1, 1],
                    end: [3, 3]
                },
                {
                    start: [9, 7],
                    end: [7, 9]
                },
                {
                    start: [9, 9],
                    end: [7, 7]
                },
                {
                    start: [10, 19],
                    end: [12, 17]
                }
            ]
            let dictionary = buildDictionaryOfVents(vents);

            expect(dictionary['1,1']).toEqual(1);
            expect(dictionary['2,2']).toEqual(1);
            expect(dictionary['3,3']).toEqual(1);
            
            expect(dictionary['9,7']).toEqual(1);
            expect(dictionary['8,8']).toEqual(2);
            expect(dictionary['7,9']).toEqual(1);

            expect(dictionary['10,19']).toEqual(1);
            expect(dictionary['11,18']).toEqual(1);
            expect(dictionary['12,17']).toEqual(1);

            expect(dictionary['9,9']).toEqual(1);
            expect(dictionary['7,7']).toEqual(1);
        });

        it("Should build dictionary of vents_sample set debugging", () => {
            let vents = [
                {
                    start: [0, 9],
                    end: [5, 9]
                },
                {
                    start: [8, 0],
                    end: [0, 8]
                },
                {
                    start: [9, 4],
                    end: [3, 4]
                }
            ]
            let dictionary = buildDictionaryOfVents(vents);

            console.log(dictionary);
            expect(dictionary['0,9']).toEqual(1);
            expect(dictionary['1,9']).toEqual(1);
            expect(dictionary['2,9']).toEqual(1);
            expect(dictionary['3,9']).toEqual(1);
            expect(dictionary['4,9']).toEqual(1);
            expect(dictionary['5,9']).toEqual(1);

            expect(dictionary['8,0']).toEqual(1);
            expect(dictionary['7,1']).toEqual(1);
            expect(dictionary['6,2']).toEqual(1);
            expect(dictionary['5,3']).toEqual(1);
            expect(dictionary['4,4']).toEqual(2);
            expect(dictionary['3,5']).toEqual(1);
            expect(dictionary['2,6']).toEqual(1);
            expect(dictionary['1,7']).toEqual(1);
            expect(dictionary['0,8']).toEqual(1);

            expect(dictionary['9,4']).toEqual(1);
            expect(dictionary['8,4']).toEqual(1);
            expect(dictionary['7,4']).toEqual(1);
            expect(dictionary['6,4']).toEqual(1);
            expect(dictionary['5,4']).toEqual(1);
            expect(dictionary['3,4']).toEqual(1);
        });

        it("Should count 2 or greater overlaps_sample input unfiltered", () => {

            let actual = getCountOf2OrGreaterOverlaps(sampleInput);

            expect(actual).toEqual(12);
        });

        it("Should count 2 or greater overlaps_puzzle input unfiltered", () => {

            let actual = getCountOf2OrGreaterOverlaps(puzzleInput);

            expect(actual).toEqual(22364);
        });
    });

    //input parsed and structured using column select
    let sampleInput = [
        {
            start: [0, 9],
            end: [5, 9]
        },
        {
            start: [8, 0],
            end: [0, 8]
        },
        {
            start: [9, 4],
            end: [3, 4]
        },
        {
            start: [2, 2],
            end: [2, 1]
        },
        {
            start: [7, 0],
            end: [7, 4]
        },
        {
            start: [6, 4],
            end: [2, 0]
        },
        {
            start: [0, 9],
            end: [2, 9]
        },
        {
            start: [3, 4],
            end: [1, 4]
        },
        {
            start: [0, 0],
            end: [8, 8]
        },
        {
            start: [5, 5],
            end: [8, 2]
        }]

    let puzzleInput = [
        { start: [593, 10], end: [593, 98] },
        { start: [777, 236], end: [964, 236] },
        { start: [650, 575], end: [476, 575] },
        { start: [120, 612], end: [715, 17] },
        { start: [508, 707], end: [508, 89] },
        { start: [98, 834], end: [751, 834] },
        { start: [623, 554], end: [623, 701] },
        { start: [929, 976], end: [62, 109] },
        { start: [368, 893], end: [330, 931] },
        { start: [495, 335], end: [40, 335] },
        { start: [44, 704], end: [423, 704] },
        { start: [683, 711], end: [683, 487] },
        { start: [26, 940], end: [833, 133] },
        { start: [961, 183], end: [454, 183] },
        { start: [301, 306], end: [301, 935] },
        { start: [973, 822], end: [398, 822] },
        { start: [639, 911], end: [515, 911] },
        { start: [861, 180], end: [184, 857] },
        { start: [31, 97], end: [857, 923] },
        { start: [966, 376], end: [966, 114] },
        { start: [881, 485], end: [881, 377] },
        { start: [930, 98], end: [110, 918] },
        { start: [841, 889], end: [841, 35] },
        { start: [512, 261], end: [880, 261] },
        { start: [48, 533], end: [48, 674] },
        { start: [207, 226], end: [52, 226] },
        { start: [823, 952], end: [177, 306] },
        { start: [331, 566], end: [423, 566] },
        { start: [422, 418], end: [422, 130] },
        { start: [699, 517], end: [699, 567] },
        { start: [757, 784], end: [241, 784] },
        { start: [508, 445], end: [560, 393] },
        { start: [866, 275], end: [435, 706] },
        { start: [74, 41], end: [74, 258] },
        { start: [386, 369], end: [334, 317] },
        { start: [240, 94], end: [240, 969] },
        { start: [851, 197], end: [577, 197] },
        { start: [28, 906], end: [741, 193] },
        { start: [286, 227], end: [286, 293] },
        { start: [849, 800], end: [849, 665] },
        { start: [736, 307], end: [336, 307] },
        { start: [69, 701], end: [494, 276] },
        { start: [421, 823], end: [96, 823] },
        { start: [121, 626], end: [121, 393] },
        { start: [318, 351], end: [194, 351] },
        { start: [670, 671], end: [439, 671] },
        { start: [603, 914], end: [603, 272] },
        { start: [61, 507], end: [61, 889] },
        { start: [266, 39], end: [157, 39] },
        { start: [543, 664], end: [869, 664] },
        { start: [382, 709], end: [884, 709] },
        { start: [499, 80], end: [548, 80] },
        { start: [489, 79], end: [878, 79] },
        { start: [695, 86], end: [644, 86] },
        { start: [987, 585], end: [987, 557] },
        { start: [287, 67], end: [551, 67] },
        { start: [975, 983], end: [35, 43] },
        { start: [707, 351], end: [232, 351] },
        { start: [529, 175], end: [852, 175] },
        { start: [32, 811], end: [604, 811] },
        { start: [106, 153], end: [815, 153] },
        { start: [195, 268], end: [509, 582] },
        { start: [50, 922], end: [312, 922] },
        { start: [220, 500], end: [872, 500] },
        { start: [473, 33], end: [569, 33] },
        { start: [858, 847], end: [162, 151] },
        { start: [937, 947], end: [26, 36] },
        { start: [726, 435], end: [402, 435] },
        { start: [686, 601], end: [474, 813] },
        { start: [764, 880], end: [84, 200] },
        { start: [850, 950], end: [850, 464] },
        { start: [413, 620], end: [413, 285] },
        { start: [893, 560], end: [229, 560] },
        { start: [149, 100], end: [149, 901] },
        { start: [358, 613], end: [243, 613] },
        { start: [202, 445], end: [202, 411] },
        { start: [127, 153], end: [513, 539] },
        { start: [147, 846], end: [53, 940] },
        { start: [139, 920], end: [679, 380] },
        { start: [913, 953], end: [913, 735] },
        { start: [339, 466], end: [339, 177] },
        { start: [113, 882], end: [647, 882] },
        { start: [18, 880], end: [134, 880] },
        { start: [897, 152], end: [897, 428] },
        { start: [473, 511], end: [636, 511] },
        { start: [880, 370], end: [358, 370] },
        { start: [400, 244], end: [721, 244] },
        { start: [419, 987], end: [120, 688] },
        { start: [872, 224], end: [481, 224] },
        { start: [335, 302], end: [730, 302] },
        { start: [961, 324], end: [961, 157] },
        { start: [769, 301], end: [959, 301] },
        { start: [829, 124], end: [144, 124] },
        { start: [523, 372], end: [985, 372] },
        { start: [520, 33], end: [520, 685] },
        { start: [554, 644], end: [808, 898] },
        { start: [82, 676], end: [870, 676] },
        { start: [303, 612], end: [303, 705] },
        { start: [338, 40], end: [338, 939] },
        { start: [836, 47], end: [72, 811] },
        { start: [371, 751], end: [575, 955] },
        { start: [929, 505], end: [929, 324] },
        { start: [273, 181], end: [275, 183] },
        { start: [347, 595], end: [347, 463] },
        { start: [95, 629], end: [95, 606] },
        { start: [809, 188], end: [126, 871] },
        { start: [857, 924], end: [145, 212] },
        { start: [668, 277], end: [668, 63] },
        { start: [700, 904], end: [700, 45] },
        { start: [814, 899], end: [22, 899] },
        { start: [205, 98], end: [714, 607] },
        { start: [943, 28], end: [40, 931] },
        { start: [282, 620], end: [773, 129] },
        { start: [424, 803], end: [285, 803] },
        { start: [688, 329], end: [299, 329] },
        { start: [146, 628], end: [34, 628] },
        { start: [573, 417], end: [164, 826] },
        { start: [292, 232], end: [412, 112] },
        { start: [412, 508], end: [145, 508] },
        { start: [632, 648], end: [632, 92] },
        { start: [885, 904], end: [885, 513] },
        { start: [295, 981], end: [132, 818] },
        { start: [134, 681], end: [41, 681] },
        { start: [810, 531], end: [959, 531] },
        { start: [188, 590], end: [188, 215] },
        { start: [960, 795], end: [189, 24] },
        { start: [729, 211], end: [729, 833] },
        { start: [214, 817], end: [845, 817] },
        { start: [196, 609], end: [584, 609] },
        { start: [384, 908], end: [384, 101] },
        { start: [770, 907], end: [770, 530] },
        { start: [451, 469], end: [451, 812] },
        { start: [571, 261], end: [834, 261] },
        { start: [799, 436], end: [799, 983] },
        { start: [248, 105], end: [248, 879] },
        { start: [783, 906], end: [783, 903] },
        { start: [955, 670], end: [790, 670] },
        { start: [723, 750], end: [723, 429] },
        { start: [572, 427], end: [546, 427] },
        { start: [610, 341], end: [527, 341] },
        { start: [925, 426], end: [816, 317] },
        { start: [151, 403], end: [151, 684] },
        { start: [408, 969], end: [408, 369] },
        { start: [276, 425], end: [276, 75] },
        { start: [186, 86], end: [186, 758] },
        { start: [412, 420], end: [412, 531] },
        { start: [361, 60], end: [976, 60] },
        { start: [787, 649], end: [667, 769] },
        { start: [45, 866], end: [91, 866] },
        { start: [319, 963], end: [51, 963] },
        { start: [112, 866], end: [112, 747] },
        { start: [291, 475], end: [504, 475] },
        { start: [175, 116], end: [357, 116] },
        { start: [968, 961], end: [968, 213] },
        { start: [13, 12], end: [987, 986] },
        { start: [640, 728], end: [767, 728] },
        { start: [981, 505], end: [246, 505] },
        { start: [864, 981], end: [128, 981] },
        { start: [91, 66], end: [931, 906] },
        { start: [798, 116], end: [91, 823] },
        { start: [552, 74], end: [88, 538] },
        { start: [620, 872], end: [232, 872] },
        { start: [45, 229], end: [658, 229] },
        { start: [413, 75], end: [413, 436] },
        { start: [815, 257], end: [815, 686] },
        { start: [989, 22], end: [36, 975] },
        { start: [178, 904], end: [233, 849] },
        { start: [635, 128], end: [635, 96] },
        { start: [640, 820], end: [640, 313] },
        { start: [890, 787], end: [167, 64] },
        { start: [221, 22], end: [826, 22] },
        { start: [914, 132], end: [60, 986] },
        { start: [848, 31], end: [392, 487] },
        { start: [105, 969], end: [858, 969] },
        { start: [903, 868], end: [143, 108] },
        { start: [38, 941], end: [621, 358] },
        { start: [171, 340], end: [14, 497] },
        { start: [286, 460], end: [81, 255] },
        { start: [726, 688], end: [857, 819] },
        { start: [494, 689], end: [510, 689] },
        { start: [517, 913], end: [598, 913] },
        { start: [932, 66], end: [932, 431] },
        { start: [977, 982], end: [18, 23] },
        { start: [95, 101], end: [95, 278] },
        { start: [574, 467], end: [349, 467] },
        { start: [63, 803], end: [63, 882] },
        { start: [838, 874], end: [255, 874] },
        { start: [900, 752], end: [181, 33] },
        { start: [102, 897], end: [989, 10] },
        { start: [374, 439], end: [374, 277] },
        { start: [513, 504], end: [513, 885] },
        { start: [814, 932], end: [814, 407] },
        { start: [824, 656], end: [959, 521] },
        { start: [415, 570], end: [616, 570] },
        { start: [577, 880], end: [577, 181] },
        { start: [287, 524], end: [986, 524] },
        { start: [955, 665], end: [323, 665] },
        { start: [556, 365], end: [263, 658] },
        { start: [154, 226], end: [886, 226] },
        { start: [803, 750], end: [866, 750] },
        { start: [558, 725], end: [558, 395] },
        { start: [941, 115], end: [941, 150] },
        { start: [180, 410], end: [180, 874] },
        { start: [458, 753], end: [112, 753] },
        { start: [199, 253], end: [363, 253] },
        { start: [423, 650], end: [22, 650] },
        { start: [892, 851], end: [279, 238] },
        { start: [611, 109], end: [611, 198] },
        { start: [983, 344], end: [339, 988] },
        { start: [299, 47], end: [299, 934] },
        { start: [435, 652], end: [700, 387] },
        { start: [186, 775], end: [677, 284] },
        { start: [136, 576], end: [136, 368] },
        { start: [818, 744], end: [305, 744] },
        { start: [767, 171], end: [767, 431] },
        { start: [930, 842], end: [259, 171] },
        { start: [342, 831], end: [342, 601] },
        { start: [193, 672], end: [46, 525] },
        { start: [925, 164], end: [528, 164] },
        { start: [725, 92], end: [617, 200] },
        { start: [67, 729], end: [67, 739] },
        { start: [547, 153], end: [547, 245] },
        { start: [763, 434], end: [763, 509] },
        { start: [314, 888], end: [357, 888] },
        { start: [72, 645], end: [491, 645] },
        { start: [92, 67], end: [240, 67] },
        { start: [827, 936], end: [788, 897] },
        { start: [852, 378], end: [77, 378] },
        { start: [448, 337], end: [668, 337] },
        { start: [846, 739], end: [499, 739] },
        { start: [465, 691], end: [315, 541] },
        { start: [716, 163], end: [18, 861] },
        { start: [78, 965], end: [983, 60] },
        { start: [114, 952], end: [820, 246] },
        { start: [950, 351], end: [419, 882] },
        { start: [266, 36], end: [266, 482] },
        { start: [773, 841], end: [773, 66] },
        { start: [742, 198], end: [742, 46] },
        { start: [417, 512], end: [304, 625] },
        { start: [900, 277], end: [900, 338] },
        { start: [983, 431], end: [473, 941] },
        { start: [986, 282], end: [734, 30] },
        { start: [742, 19], end: [769, 19] },
        { start: [952, 320], end: [948, 324] },
        { start: [92, 590], end: [548, 590] },
        { start: [107, 39], end: [107, 696] },
        { start: [603, 749], end: [603, 26] },
        { start: [55, 282], end: [888, 282] },
        { start: [670, 848], end: [985, 533] },
        { start: [981, 982], end: [92, 93] },
        { start: [147, 428], end: [649, 930] },
        { start: [773, 737], end: [821, 785] },
        { start: [791, 576], end: [791, 852] },
        { start: [327, 672], end: [530, 469] },
        { start: [847, 122], end: [381, 122] },
        { start: [419, 493], end: [498, 572] },
        { start: [879, 842], end: [879, 239] },
        { start: [267, 717], end: [267, 869] },
        { start: [142, 449], end: [174, 417] },
        { start: [342, 718], end: [342, 397] },
        { start: [603, 207], end: [314, 207] },
        { start: [612, 648], end: [735, 771] },
        { start: [37, 10], end: [971, 944] },
        { start: [891, 716], end: [891, 86] },
        { start: [252, 217], end: [662, 627] },
        { start: [185, 165], end: [941, 921] },
        { start: [854, 717], end: [676, 717] },
        { start: [158, 791], end: [336, 791] },
        { start: [762, 226], end: [98, 890] },
        { start: [73, 189], end: [92, 189] },
        { start: [649, 511], end: [253, 115] },
        { start: [719, 456], end: [514, 251] },
        { start: [605, 286], end: [325, 286] },
        { start: [454, 609], end: [454, 489] },
        { start: [374, 541], end: [783, 541] },
        { start: [599, 177], end: [94, 682] },
        { start: [600, 384], end: [32, 384] },
        { start: [810, 933], end: [39, 162] },
        { start: [780, 871], end: [409, 871] },
        { start: [24, 639], end: [24, 316] },
        { start: [454, 80], end: [454, 95] },
        { start: [556, 541], end: [907, 541] },
        { start: [627, 295], end: [750, 295] },
        { start: [245, 71], end: [214, 102] },
        { start: [725, 445], end: [614, 445] },
        { start: [779, 538], end: [779, 390] },
        { start: [746, 667], end: [351, 272] },
        { start: [117, 776], end: [117, 660] },
        { start: [498, 495], end: [88, 905] },
        { start: [697, 721], end: [697, 919] },
        { start: [580, 314], end: [580, 166] },
        { start: [22, 656], end: [641, 37] },
        { start: [413, 433], end: [44, 802] },
        { start: [182, 305], end: [805, 928] },
        { start: [739, 277], end: [739, 499] },
        { start: [172, 210], end: [172, 259] },
        { start: [894, 576], end: [894, 322] },
        { start: [265, 263], end: [265, 437] },
        { start: [430, 228], end: [780, 578] },
        { start: [464, 531], end: [798, 531] },
        { start: [713, 63], end: [668, 63] },
        { start: [918, 831], end: [256, 169] },
        { start: [414, 375], end: [467, 375] },
        { start: [440, 32], end: [391, 32] },
        { start: [439, 806], end: [955, 806] },
        { start: [335, 820], end: [335, 279] },
        { start: [727, 458], end: [422, 458] },
        { start: [312, 274], end: [619, 581] },
        { start: [136, 724], end: [538, 322] },
        { start: [589, 680], end: [589, 850] },
        { start: [335, 648], end: [232, 545] },
        { start: [499, 216], end: [405, 216] },
        { start: [942, 710], end: [942, 455] },
        { start: [969, 556], end: [721, 556] },
        { start: [756, 552], end: [756, 902] },
        { start: [98, 870], end: [445, 870] },
        { start: [476, 833], end: [476, 269] },
        { start: [820, 127], end: [407, 127] },
        { start: [337, 519], end: [714, 519] },
        { start: [756, 95], end: [11, 840] },
        { start: [317, 339], end: [317, 286] },
        { start: [353, 86], end: [43, 86] },
        { start: [93, 950], end: [938, 105] },
        { start: [705, 509], end: [705, 319] },
        { start: [244, 879], end: [721, 402] },
        { start: [434, 794], end: [711, 517] },
        { start: [272, 381], end: [431, 381] },
        { start: [652, 104], end: [652, 587] },
        { start: [850, 866], end: [34, 50] },
        { start: [645, 902], end: [79, 336] },
        { start: [701, 39], end: [701, 295] },
        { start: [492, 793], end: [95, 396] },
        { start: [352, 554], end: [395, 554] },
        { start: [123, 405], end: [322, 206] },
        { start: [941, 745], end: [716, 520] },
        { start: [450, 512], end: [569, 631] },
        { start: [42, 25], end: [817, 800] },
        { start: [909, 387], end: [909, 863] },
        { start: [919, 934], end: [919, 546] },
        { start: [439, 881], end: [569, 881] },
        { start: [167, 866], end: [167, 669] },
        { start: [242, 264], end: [242, 694] },
        { start: [981, 786], end: [228, 33] },
        { start: [452, 434], end: [452, 660] },
        { start: [22, 26], end: [22, 29] },
        { start: [26, 155], end: [677, 806] },
        { start: [801, 627], end: [313, 627] },
        { start: [657, 135], end: [657, 270] },
        { start: [872, 875], end: [440, 443] },
        { start: [636, 248], end: [636, 338] },
        { start: [776, 51], end: [93, 51] },
        { start: [498, 600], end: [894, 600] },
        { start: [263, 984], end: [263, 807] },
        { start: [416, 390], end: [899, 873] },
        { start: [269, 137], end: [976, 137] },
        { start: [752, 12], end: [752, 617] },
        { start: [55, 925], end: [548, 925] },
        { start: [856, 551], end: [771, 551] },
        { start: [653, 93], end: [653, 587] },
        { start: [403, 286], end: [403, 417] },
        { start: [895, 706], end: [221, 32] },
        { start: [139, 822], end: [139, 928] },
        { start: [696, 194], end: [696, 143] },
        { start: [270, 678], end: [710, 678] },
        { start: [879, 353], end: [879, 360] },
        { start: [949, 712], end: [752, 712] },
        { start: [665, 661], end: [817, 661] },
        { start: [462, 952], end: [980, 434] },
        { start: [692, 766], end: [692, 478] },
        { start: [157, 117], end: [144, 117] },
        { start: [438, 701], end: [408, 701] },
        { start: [401, 703], end: [401, 724] },
        { start: [876, 831], end: [108, 63] },
        { start: [749, 892], end: [832, 892] },
        { start: [455, 124], end: [455, 776] },
        { start: [551, 222], end: [551, 372] },
        { start: [533, 80], end: [726, 80] },
        { start: [342, 740], end: [56, 740] },
        { start: [793, 370], end: [34, 370] },
        { start: [949, 614], end: [949, 623] },
        { start: [610, 287], end: [610, 760] },
        { start: [978, 834], end: [85, 834] },
        { start: [644, 894], end: [644, 341] },
        { start: [35, 887], end: [176, 887] },
        { start: [168, 958], end: [964, 162] },
        { start: [341, 886], end: [341, 470] },
        { start: [417, 845], end: [417, 702] },
        { start: [338, 347], end: [304, 313] },
        { start: [651, 10], end: [72, 10] },
        { start: [853, 160], end: [853, 85] },
        { start: [381, 568], end: [436, 623] },
        { start: [794, 437], end: [250, 437] },
        { start: [861, 72], end: [206, 72] },
        { start: [807, 813], end: [807, 827] },
        { start: [820, 502], end: [820, 329] },
        { start: [547, 508], end: [547, 773] },
        { start: [160, 129], end: [160, 175] },
        { start: [756, 468], end: [756, 80] },
        { start: [442, 661], end: [405, 661] },
        { start: [304, 817], end: [304, 765] },
        { start: [99, 42], end: [957, 900] },
        { start: [212, 110], end: [854, 752] },
        { start: [44, 620], end: [661, 620] },
        { start: [212, 311], end: [784, 883] },
        { start: [329, 671], end: [329, 908] },
        { start: [86, 359], end: [553, 826] },
        { start: [257, 799], end: [934, 122] },
        { start: [409, 663], end: [409, 367] },
        { start: [528, 623], end: [593, 688] },
        { start: [957, 525], end: [544, 938] },
        { start: [846, 766], end: [113, 33] },
        { start: [176, 680], end: [176, 102] },
        { start: [167, 287], end: [167, 929] },
        { start: [932, 870], end: [834, 968] },
        { start: [86, 774], end: [49, 774] },
        { start: [745, 231], end: [70, 906] },
        { start: [435, 760], end: [138, 463] },
        { start: [776, 810], end: [625, 810] },
        { start: [928, 930], end: [76, 78] },
        { start: [602, 24], end: [602, 688] },
        { start: [394, 424], end: [65, 424] },
        { start: [946, 966], end: [93, 113] },
        { start: [494, 39], end: [951, 39] },
        { start: [607, 699], end: [832, 699] },
        { start: [13, 403], end: [391, 403] },
        { start: [726, 475], end: [726, 29] },
        { start: [828, 625], end: [836, 617] },
        { start: [396, 770], end: [167, 770] },
        { start: [28, 546], end: [374, 200] },
        { start: [56, 113], end: [837, 894] },
        { start: [290, 589], end: [740, 139] },
        { start: [930, 805], end: [296, 171] },
        { start: [646, 895], end: [49, 895] },
        { start: [111, 15], end: [111, 497] },
        { start: [11, 274], end: [570, 833] },
        { start: [257, 624], end: [603, 624] },
        { start: [63, 844], end: [666, 844] },
        { start: [846, 661], end: [846, 464] },
        { start: [431, 72], end: [431, 674] },
        { start: [726, 674], end: [726, 40] },
        { start: [286, 660], end: [286, 909] },
        { start: [847, 222], end: [847, 861] },
        { start: [325, 896], end: [325, 416] },
        { start: [793, 953], end: [365, 953] },
        { start: [987, 956], end: [62, 31] },
        { start: [845, 853], end: [363, 371] },
        { start: [79, 782], end: [506, 782] },
        { start: [424, 21], end: [424, 369] },
        { start: [938, 162], end: [177, 923] },
        { start: [86, 193], end: [799, 906] },
        { start: [320, 164], end: [320, 654] },
        { start: [840, 306], end: [840, 711] },
        { start: [852, 736], end: [852, 690] },
        { start: [876, 966], end: [143, 233] },
        { start: [787, 926], end: [38, 177] },
        { start: [374, 112], end: [340, 112] },
        { start: [132, 541], end: [740, 541] },
        { start: [29, 28], end: [968, 967] },
        { start: [916, 212], end: [170, 958] },
        { start: [371, 553], end: [521, 403] },
        { start: [88, 796], end: [870, 796] },
        { start: [656, 367], end: [71, 367] },
        { start: [785, 166], end: [785, 427] },
        { start: [320, 30], end: [320, 549] },
        { start: [909, 527], end: [816, 620] },
        { start: [832, 965], end: [302, 965] },
        { start: [672, 259], end: [80, 259] },
        { start: [578, 513], end: [578, 243] },
        { start: [975, 561], end: [537, 123] },
        { start: [135, 330], end: [188, 330] },
        { start: [501, 695], end: [501, 573] },
        { start: [717, 230], end: [878, 230] },
        { start: [854, 501], end: [27, 501] },
        { start: [705, 885], end: [950, 885] },
        { start: [704, 338], end: [704, 630] },
        { start: [477, 485], end: [864, 485] },
        { start: [901, 42], end: [305, 638] },
        { start: [660, 540], end: [660, 546] },
        { start: [555, 79], end: [190, 79] },
        { start: [226, 126], end: [800, 700] },
        { start: [575, 908], end: [944, 908] },
        { start: [94, 478], end: [94, 746] },
        { start: [461, 425], end: [929, 893] },
        { start: [861, 429], end: [451, 19] },
        { start: [832, 825], end: [179, 172] },
        { start: [186, 133], end: [298, 133] },
        { start: [684, 270], end: [558, 270] },
        { start: [786, 872], end: [125, 872] },
        { start: [649, 178], end: [649, 595] },
        { start: [893, 738], end: [412, 257] },
        { start: [760, 854], end: [901, 713] },
        { start: [16, 914], end: [866, 64] },
        { start: [935, 928], end: [266, 259] },
        { start: [323, 229], end: [32, 229] },
        { start: [608, 828], end: [608, 49] },
        { start: [715, 892], end: [74, 251] },
        { start: [787, 187], end: [787, 903] },
        { start: [405, 793], end: [405, 183] },
        { start: [232, 704], end: [232, 389] },
        { start: [130, 706], end: [130, 657] },
    ]
});