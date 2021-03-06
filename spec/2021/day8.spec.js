describe("day8", () => {
    describe("Part 1", () => {
        it("Should count number of easy digits in output_sample input", () => {
            let singleLine = [{
                tenUnique: ["acedgfb", "cdfbe", "gcdfa", "fbcad", "dab", "cefabd", "cdfgeb", "eafb", "cagedb", "ab"],
                fourOutput: ["cdfeb", "fcadb", "cdfeb", "cdbaf"]
            }];
            expect(countEasyDigitsInOutput(singleLine)).toEqual(0);
            expect(countEasyDigitsInOutput(sampleInput)).toEqual(26);
        });

        it("Should count number of easy digits in puzzle input", () => {
            expect(countEasyDigitsInOutput(puzzleInput)).toEqual(310);
        });
    });

    describe("Part 2", () => {

        it("Should buildMap of values_single Line", () => {
            let singleLine = {
                tenUnique: ["acedgfb", "cdfbe", "gcdfa", "fbcad", "dab", "cefabd", "cdfgeb", "eafb", "cagedb", "ab"],
                fourOutput: ["cdfeb", "fcadb", "cdfeb", "cdbaf"]
            };
            expect(buildMap(singleLine)).toEqual({
                0: "cagedb",
                1: "ab",
                2: "gcdfa",
                3: "fbcad",
                4: "eafb",
                5: "cdfbe",
                6: "cdfgeb",
                7: "dab",
                8: "acedgfb",
                9: "cefabd",
            });
        });

        it("Should map output values_single Line", () => {
            let singleLine = {
                tenUnique: ["acedgfb", "cdfbe", "gcdfa", "fbcad", "dab", "cefabd", "cdfgeb", "eafb", "cagedb", "ab"],
                fourOutput: ["cdfeb", "fcadb", "cdfeb", "cdbaf"]
            };
            expect(mapOutput(singleLine)).toEqual(5353);
        });

        it("Should map output values_single Line_problem set", () => {
            let singleLine = { tenUnique: ["be", "cfbegad", "cbdgef", "fgaecd", "cgeb", "fdcge", "agebfd", "fecdb", "fabcd", "edb"], fourOutput: ["fdgacbe", "cefdb", "cefbgd", "gcbe"] };

            expect(buildMap(singleLine)).toEqual({
                0: "agebfd",
                1: "be",
                2: "fabcd",
                3: "fecdb",
                4: "cgeb",
                5: "fdcge",
                6: "fgaecd",
                7: "edb",
                8: "cfbegad",
                9: "cbdgef",
            });

            expect(mapOutput(singleLine)).toEqual(8394);
        });

        it("Should total all outputs", () => {
            expect(totalOutputs(sampleInput)).toEqual(61229);
        });

        it("Should total all outputs", () => {
            expect(totalOutputs(puzzleInput)).toEqual(915941);
        });
    });

    let sampleInput = [
        { tenUnique: ["be", "cfbegad", "cbdgef", "fgaecd", "cgeb", "fdcge", "agebfd", "fecdb", "fabcd", "edb"], fourOutput: ["fdgacbe", "cefdb", "cefbgd", "gcbe"] },
        { tenUnique: ["edbfga", "begcd", "cbg", "gc", "gcadebf", "fbgde", "acbgfd", "abcde", "gfcbed", "gfec"], fourOutput: ["fcgedb", "cgb", "dgebacf", "gc"] },
        { tenUnique: ["fgaebd", "cg", "bdaec", "gdafb", "agbcfd", "gdcbef", "bgcad", "gfac", "gcb", "cdgabef"], fourOutput: ["cg", "cg", "fdcagb", "cbg"] },
        { tenUnique: ["fbegcd", "cbd", "adcefb", "dageb", "afcb", "bc", "aefdc", "ecdab", "fgdeca", "fcdbega"], fourOutput: ["efabcd", "cedba", "gadfec", "cb"] },
        { tenUnique: ["aecbfdg", "fbg", "gf", "bafeg", "dbefa", "fcge", "gcbea", "fcaegb", "dgceab", "fcbdga"], fourOutput: ["gecf", "egdcabf", "bgf", "bfgea"] },
        { tenUnique: ["fgeab", "ca", "afcebg", "bdacfeg", "cfaedg", "gcfdb", "baec", "bfadeg", "bafgc", "acf"], fourOutput: ["gebdcfa", "ecba", "ca", "fadegcb"] },
        { tenUnique: ["dbcfg", "fgd", "bdegcaf", "fgec", "aegbdf", "ecdfab", "fbedc", "dacgb", "gdcebf", "gf"], fourOutput: ["cefg", "dcbef", "fcge", "gbcadfe"] },
        { tenUnique: ["bdfegc", "cbegaf", "gecbf", "dfcage", "bdacg", "ed", "bedf", "ced", "adcbefg", "gebcd"], fourOutput: ["ed", "bcgafe", "cdgba", "cbgef"] },
        { tenUnique: ["egadfb", "cdbfeg", "cegd", "fecab", "cgb", "gbdefca", "cg", "fgcdab", "egfdb", "bfceg"], fourOutput: ["gbdfcae", "bgc", "cg", "cgb"] },
        { tenUnique: ["gcafb", "gcf", "dcaebfg", "ecagb", "gf", "abcdeg", "gaef", "cafbge", "fdbac", "fegbdc"], fourOutput: ["fgae", "cfgab", "fg", "bagce"] }
    ];

    //parsed with find and replace - notepad++
    // ' ' with '","'
    // \r\n with "] },\r\n{ tenUnique: ["
    // ,"|", with ], fourOutput: [

    let puzzleInput = [
        { tenUnique: ["eb", "cbgfae", "cabdf", "fedab", "efb", "adgcef", "cbgaefd", "egdb", "dbgefa", "eafgd"], fourOutput: ["dfbae", "be", "gdafe", "gcefab"] },
        { tenUnique: ["bfcae", "acegfd", "dbfac", "daf", "bgfdc", "dfgaceb", "gfebdc", "da", "dbag", "cdgbaf"], fourOutput: ["bgfdc", "dfcba", "bdegfc", "efadcg"] },
        { tenUnique: ["afgdb", "dcge", "ed", "dfe", "geafcd", "aefdcb", "adgef", "gfcea", "gdbecfa", "agfceb"], fourOutput: ["dfe", "ceabdf", "efbcag", "gefacd"] },
        { tenUnique: ["ebad", "gbfed", "dfe", "caefdbg", "gdbcf", "fgcdae", "de", "fdgabe", "efbag", "gabecf"], fourOutput: ["gacfed", "bgedf", "dfebgac", "befga"] },
        { tenUnique: ["dabegfc", "gfeab", "gdefbc", "ecagdb", "bcfd", "fd", "ecdgb", "adgfec", "bfdge", "dgf"], fourOutput: ["efbag", "egbdf", "ceagfd", "dfegb"] },
        { tenUnique: ["bfadge", "dbgec", "fgbdce", "cafbgde", "gbe", "gcbafd", "cfbe", "be", "cgbdf", "aedcg"], fourOutput: ["bcdeg", "egacd", "beg", "cgedb"] },
        { tenUnique: ["aecfgd", "dabcegf", "gca", "dbgacf", "gc", "degbaf", "caged", "gefc", "adebc", "agfed"], fourOutput: ["agc", "gc", "cg", "fdgaebc"] },
        { tenUnique: ["beagfc", "ecf", "agdecbf", "cf", "acfd", "dgace", "deafgc", "efbgd", "gdfce", "gadbce"], fourOutput: ["decfbga", "dbaceg", "bfgde", "gdecfa"] },
        { tenUnique: ["cgbef", "dafeg", "fdc", "gbadfc", "cbed", "aedbcgf", "cd", "bfagce", "fcgde", "efgcdb"], fourOutput: ["gefcd", "fgacbd", "cd", "bfegdc"] },
        { tenUnique: ["bce", "efdcbg", "ebgfda", "cbfgae", "bdegc", "ce", "dfec", "dbefg", "cgadb", "edcfgab"], fourOutput: ["cfaebgd", "bedgc", "cfed", "efcd"] },
        { tenUnique: ["gedcfba", "cfbdg", "dgecf", "bafdcg", "efbgda", "cbed", "efd", "bcfged", "de", "afegc"], fourOutput: ["bfcdg", "agefc", "fabdgec", "fegca"] },
        { tenUnique: ["fa", "dgcef", "gfacd", "bdgac", "fcbegd", "fedcga", "adef", "fcgaebd", "afbgec", "acf"], fourOutput: ["gefdac", "egfcbda", "egfdc", "gefdca"] },
        { tenUnique: ["ebcgf", "dagbc", "cfedga", "cfgba", "afg", "agebfc", "befa", "dcfgaeb", "af", "edbgcf"], fourOutput: ["cbgefd", "acdgb", "afdgce", "fabe"] },
        { tenUnique: ["gfe", "fg", "fdageb", "bgfd", "cagfde", "abegf", "baecf", "daegb", "cabged", "cgfdeba"], fourOutput: ["gfe", "gdafbce", "fg", "bgdf"] },
        { tenUnique: ["bagdce", "acfbd", "faebcgd", "dae", "fecdbg", "ageb", "ae", "dbcae", "defacg", "gedcb"], fourOutput: ["dea", "eabg", "bcdae", "aecdb"] },
        { tenUnique: ["gceaf", "dagc", "eda", "febcagd", "gebdaf", "ecafdg", "deacf", "ad", "cdebf", "abgcef"], fourOutput: ["fdaec", "fdebc", "dcfae", "ade"] },
        { tenUnique: ["adebcfg", "ecd", "ecbag", "bgaecf", "cgdfb", "afecdb", "gbedc", "caedbg", "aegd", "ed"], fourOutput: ["bedcag", "gabecf", "dcgfb", "fcabed"] },
        { tenUnique: ["fbecda", "cabgf", "dg", "deag", "cdeagf", "gdf", "begcdfa", "acfed", "cfagd", "dcegfb"], fourOutput: ["dg", "edcfa", "gefdbc", "gdea"] },
        { tenUnique: ["gfbcad", "dafbge", "fdcbea", "dgbfa", "dbeag", "eb", "eba", "eadcg", "bgef", "edgfcab"], fourOutput: ["agbed", "degafb", "eagdb", "caedg"] },
        { tenUnique: ["aegbdc", "fecdgb", "eac", "cgefab", "fecag", "abcf", "ca", "dbgeafc", "gebcf", "fedga"], fourOutput: ["fbgecad", "abfc", "cgefba", "agcef"] },
        { tenUnique: ["dc", "fcda", "gadbec", "fabcgde", "gbcfda", "dcg", "befcg", "deabfg", "bgdcf", "fgdba"], fourOutput: ["cdfa", "acfdebg", "fgadbe", "ecfbg"] },
        { tenUnique: ["cdbagf", "gcf", "badgc", "fgdac", "fc", "cbgead", "fbcd", "defga", "ecagbf", "gdbafce"], fourOutput: ["gfabdc", "bdcf", "gcdab", "fdcb"] },
        { tenUnique: ["cfdabe", "faedc", "febcg", "acbd", "abf", "cdagfe", "ebdgcaf", "bdgfea", "ba", "beafc"], fourOutput: ["fab", "bafdce", "dacbfe", "fab"] },
        { tenUnique: ["eag", "cfedba", "aecgdfb", "deafgb", "agcdb", "gefc", "eg", "gdeafc", "ecadg", "cedfa"], fourOutput: ["fedabc", "gbadc", "bacdg", "gecad"] },
        { tenUnique: ["fgcae", "afbdec", "cad", "edfab", "cedfa", "cdfb", "bdceag", "bfdeag", "fdgecba", "dc"], fourOutput: ["ecagf", "dc", "fdecab", "cdaef"] },
        { tenUnique: ["fcegbd", "dagefb", "dbf", "cgfbd", "eafcdg", "dbagc", "cfdeg", "gecbafd", "fb", "efcb"], fourOutput: ["bf", "efcgd", "gdcef", "gbfedc"] },
        { tenUnique: ["dgbcfe", "dagef", "fcbadg", "fdceg", "efbc", "edgbfca", "deabgc", "ec", "cbdfg", "gec"], fourOutput: ["feagd", "dbafgec", "fdgcb", "bdgaecf"] },
        { tenUnique: ["fgbcd", "dagcef", "fb", "begfac", "cbdge", "bcf", "gacfd", "gafbdc", "gbfadce", "adfb"], fourOutput: ["bfc", "bcdgf", "deagcf", "fgdbc"] },
        { tenUnique: ["gafdbe", "gefba", "bf", "gbdaec", "faecg", "bcgfead", "bgdf", "efb", "acfbde", "gdeba"], fourOutput: ["becagd", "bf", "bdfg", "fb"] },
        { tenUnique: ["af", "agdcfbe", "aegfbc", "agdf", "dfbce", "acdbf", "fab", "edabgc", "cdabg", "gdbafc"], fourOutput: ["dagf", "fa", "bdfce", "bfgdca"] },
        { tenUnique: ["edfgba", "edbgf", "afb", "beadc", "gbcdfae", "dfga", "afgceb", "af", "edbaf", "gefbcd"], fourOutput: ["efgcba", "ebagdf", "dbgfe", "fa"] },
        { tenUnique: ["fecba", "df", "dbf", "dcefgba", "dgaf", "aefbd", "decbgf", "bcdeag", "begad", "deafbg"], fourOutput: ["acbedg", "degabc", "fdebcg", "deabg"] },
        { tenUnique: ["cgabedf", "abd", "daebgf", "gbde", "db", "bdaefc", "fecgad", "cagfb", "gabdf", "edfga"], fourOutput: ["gabfc", "cgbaf", "beagcdf", "cafdge"] },
        { tenUnique: ["efdgb", "fbe", "adcbfe", "edfbga", "cafgbde", "gefdca", "be", "eagb", "gbfdc", "geafd"], fourOutput: ["eb", "eabg", "bega", "abfgde"] },
        { tenUnique: ["cfadg", "bfeacg", "gae", "ecdfga", "dgcea", "fabdcg", "efgbacd", "aecbd", "ge", "fedg"], fourOutput: ["adcgef", "fdgaec", "gdface", "gcfadb"] },
        { tenUnique: ["gabd", "fcdbag", "cagfbe", "deafgc", "dcbaf", "ad", "bdefc", "dca", "dcbefag", "bcagf"], fourOutput: ["facdb", "gceadf", "dagb", "bcafg"] },
        { tenUnique: ["adc", "eabfcd", "ecbgad", "dfab", "bedfc", "edcfa", "ecafg", "fecbdg", "fdaebgc", "ad"], fourOutput: ["cadebf", "egcaf", "gaecf", "febdc"] },
        { tenUnique: ["gfdab", "cd", "agcbef", "cedf", "ecabdf", "ebacf", "febdgca", "dbcgea", "fbdca", "dcb"], fourOutput: ["fabdc", "fcbdae", "acebf", "dc"] },
        { tenUnique: ["bagcd", "gdabfc", "dcg", "fgecdb", "dc", "dfcbaeg", "cbage", "dfgba", "dcfa", "dfbega"], fourOutput: ["dc", "egbfcad", "gfdba", "dgc"] },
        { tenUnique: ["deb", "beacd", "cdbga", "gbdfce", "cegfbda", "abgced", "be", "dacfbg", "agbe", "cfeda"], fourOutput: ["gfbcad", "deb", "ebd", "cgadeb"] },
        { tenUnique: ["efbag", "gbe", "gbaefc", "adbefcg", "gb", "bacg", "efbacd", "edafg", "bgdfec", "abcfe"], fourOutput: ["bacg", "gfead", "dfeag", "dbfgce"] },
        { tenUnique: ["gdbfea", "dacgfb", "dacbfge", "fgceb", "cd", "afedb", "efcdba", "bcfed", "cdb", "ecad"], fourOutput: ["gdfacb", "bdgfea", "ecgbf", "ecda"] },
        { tenUnique: ["caedbf", "dcge", "abgdc", "gcfbae", "fcdbgae", "bcg", "abcedg", "bgdfa", "cg", "decba"], fourOutput: ["acdgbe", "cg", "gbc", "ecfdabg"] },
        { tenUnique: ["adfce", "bdefga", "acdgfeb", "fadeg", "gecdba", "gebf", "bfcagd", "afg", "ebdga", "fg"], fourOutput: ["bdage", "fg", "edafbg", "fgadbe"] },
        { tenUnique: ["gfbdec", "cabdf", "dca", "fgca", "gbcdf", "ca", "fbaed", "cagbdf", "fagbced", "eadgcb"], fourOutput: ["ac", "badecg", "afbde", "bcdfeg"] },
        { tenUnique: ["gdc", "agbed", "adbgc", "abgfc", "eabgfcd", "acfd", "dc", "gecfdb", "cfeagb", "gcafbd"], fourOutput: ["fdac", "beadg", "gcafbd", "cdabg"] },
        { tenUnique: ["cf", "ecgfadb", "ecabdg", "begcaf", "bfadc", "fabdgc", "dbacg", "cgdf", "bfade", "cfb"], fourOutput: ["dafbc", "cadgb", "becfdag", "cbf"] },
        { tenUnique: ["fda", "abgfe", "gcadbf", "cdae", "egfcad", "bfedcg", "gcfed", "ad", "dfega", "fgdeacb"], fourOutput: ["cgdef", "efcbgda", "fbgdeca", "eacd"] },
        { tenUnique: ["ef", "ebfcad", "dceag", "acgbdf", "fec", "bagfedc", "fbeg", "ecgdf", "ebdfcg", "bfgcd"], fourOutput: ["efcgd", "bgef", "fdcgb", "gfcbd"] },
        { tenUnique: ["gadbecf", "bdgcea", "fb", "bafedg", "bfcdag", "bdfc", "aefgc", "dabgc", "facgb", "baf"], fourOutput: ["abf", "adfebg", "fba", "bdagc"] },
        { tenUnique: ["afgceb", "dfcba", "cdeb", "gafdecb", "bcf", "edfcba", "bc", "aedfc", "fdbga", "fcaedg"], fourOutput: ["fbedgca", "efcgda", "ebacfg", "deabcf"] },
        { tenUnique: ["gefbcad", "cgfbd", "cagdf", "dfa", "fa", "gdaefb", "fabc", "cefdgb", "aedgc", "gbcdfa"], fourOutput: ["deafbg", "caegd", "ebfadcg", "dfa"] },
        { tenUnique: ["bfced", "gdabfc", "dbeac", "afgdce", "fegb", "dfgcaeb", "egdbcf", "fce", "fe", "dbfcg"], fourOutput: ["bfdce", "cdegfa", "acdegf", "befdc"] },
        { tenUnique: ["edb", "befcda", "fabcd", "ed", "adbce", "cfbaegd", "fbcgad", "cedf", "gcaeb", "agebdf"], fourOutput: ["fegdab", "bed", "fgaecdb", "afdecb"] },
        { tenUnique: ["fbea", "gebdac", "gbdea", "fbeagd", "gdfab", "fa", "dfa", "adfcegb", "aecfdg", "bgcdf"], fourOutput: ["faebdg", "cfbdgea", "dbcgf", "adbgf"] },
        { tenUnique: ["eac", "cgabef", "aebgf", "cgbde", "dfebcag", "efadbc", "aegbc", "daefbg", "facg", "ca"], fourOutput: ["fcag", "eabfcg", "cae", "cgbde"] },
        { tenUnique: ["ce", "fce", "gdefb", "geca", "dcfeg", "afdcg", "gfcdea", "ecabgdf", "gbfdac", "cedafb"], fourOutput: ["gcefd", "fcdage", "gdacf", "gefcd"] },
        { tenUnique: ["fbdcgea", "fabcg", "ebafg", "gfecab", "fge", "gebc", "bdfcag", "debaf", "eg", "fgdeca"], fourOutput: ["acgfb", "bacfg", "cgbfa", "gfbea"] },
        { tenUnique: ["acdeb", "gcedba", "befac", "bacdgef", "gfbec", "fbdeca", "afc", "fdceag", "fa", "dabf"], fourOutput: ["baegdc", "gecfb", "dgfeca", "bafcdge"] },
        { tenUnique: ["dfgbc", "deagfcb", "cfga", "dabgc", "fagbed", "cfbgda", "bfedcg", "ag", "abg", "adceb"], fourOutput: ["gdfceba", "cgdab", "dbcea", "ga"] },
        { tenUnique: ["ecafbg", "ge", "feg", "cadef", "decfabg", "begd", "geafd", "dfgacb", "gfdaeb", "gbafd"], fourOutput: ["dacef", "ge", "gef", "faedg"] },
        { tenUnique: ["gabecd", "ecdag", "edabc", "fdcbgae", "ebdafc", "bcdg", "gbadef", "dg", "cfage", "edg"], fourOutput: ["cgbade", "cbgd", "cgdb", "edfbgca"] },
        { tenUnique: ["beca", "bgead", "fbecgd", "fbagcde", "cb", "gbc", "egfdab", "dgfac", "dgbac", "eabcgd"], fourOutput: ["gaebd", "dcafg", "dbgefca", "abec"] },
        { tenUnique: ["bcfea", "ead", "cebda", "fbdcge", "dgabce", "gedbc", "fcdage", "da", "dcafebg", "badg"], fourOutput: ["cbged", "aegfcd", "dbag", "agdb"] },
        { tenUnique: ["cefagd", "gfbedc", "fagc", "acedb", "efc", "aefbdg", "afcde", "fc", "gafed", "febgdac"], fourOutput: ["feabdg", "ceafgd", "eacfdg", "feagdc"] },
        { tenUnique: ["dbegfa", "aefdcbg", "bafecd", "cd", "cfaged", "bfade", "febdc", "adcb", "dcf", "cfbge"], fourOutput: ["cd", "badfe", "dbca", "bdgfae"] },
        { tenUnique: ["dcfa", "eaf", "aedgfc", "aecgbfd", "efcag", "fa", "edabfg", "fegdbc", "cgedf", "agbec"], fourOutput: ["ceagb", "cfbdeg", "gabedf", "fa"] },
        { tenUnique: ["db", "eadgbf", "dagfc", "gbefdc", "egbcaf", "bdegafc", "debc", "fbd", "bcdgf", "fegcb"], fourOutput: ["gfcedb", "ebdc", "eagbfd", "ecbd"] },
        { tenUnique: ["cb", "cgbafde", "dcfegb", "cdfgae", "facb", "bcg", "degab", "gefacb", "caefg", "cgbea"], fourOutput: ["degba", "bfgedc", "egacb", "egcfa"] },
        { tenUnique: ["gbcfd", "dabgfe", "abecfgd", "beagcf", "cg", "gcad", "bgadf", "fdecb", "bafdgc", "gbc"], fourOutput: ["abegdf", "dagfeb", "cdebf", "gcbdf"] },
        { tenUnique: ["bfaedc", "deabgf", "aecbf", "fgcba", "ec", "bdefacg", "aedc", "fcbgde", "dbafe", "bce"], fourOutput: ["gfcdbea", "fbdae", "bdcaef", "ec"] },
        { tenUnique: ["bedafgc", "dgcbfa", "ebc", "afgcb", "cfade", "geba", "debfcg", "cgfbea", "ceabf", "eb"], fourOutput: ["faedc", "ebga", "bega", "baeg"] },
        { tenUnique: ["dfeag", "acegd", "cae", "bgdca", "gdefab", "ec", "cefd", "cadgefb", "eadfcg", "fabcge"], fourOutput: ["faecgb", "gedaf", "eca", "aec"] },
        { tenUnique: ["abgf", "cgebdfa", "dfcab", "adcfg", "cdbgaf", "bdcefg", "efcdga", "dfb", "bf", "abecd"], fourOutput: ["gfeadc", "baecd", "gcdeaf", "bfegdc"] },
        { tenUnique: ["cbgde", "egfadc", "dafec", "abdf", "cba", "ba", "afgecb", "bdeac", "aedbcf", "adecfbg"], fourOutput: ["eadfc", "debcg", "abc", "ba"] },
        { tenUnique: ["ecdfgb", "adecgf", "fcged", "cbef", "bdceagf", "bde", "adgbc", "cbgde", "gbfead", "eb"], fourOutput: ["agdcef", "dfabge", "eb", "cedfag"] },
        { tenUnique: ["dgb", "bg", "dgfaec", "efadg", "bedag", "afbg", "bagfdce", "bfcegd", "edabc", "agebfd"], fourOutput: ["befdga", "dgbea", "dceab", "ebadg"] },
        { tenUnique: ["cfbe", "agedb", "bcg", "acefg", "acegfdb", "bgafec", "aecbg", "gafced", "abgfcd", "cb"], fourOutput: ["cgbadf", "adfgcb", "gfacbed", "cdeagf"] },
        { tenUnique: ["gadfc", "bag", "acgdbf", "abfgce", "bfgda", "fedcag", "dfcegab", "gb", "fdeba", "gdbc"], fourOutput: ["bcfgae", "febad", "bg", "bag"] },
        { tenUnique: ["cbaef", "fgea", "gabfdc", "fac", "cegdba", "ecabg", "fdebc", "ceagfdb", "af", "gaefbc"], fourOutput: ["gfcbad", "dbcage", "cbaef", "fca"] },
        { tenUnique: ["bace", "bdcfe", "bfgedc", "afb", "cabdfe", "ab", "aegdf", "befad", "agecbfd", "dfcgab"], fourOutput: ["ab", "cebgfd", "bace", "fdgbeac"] },
        { tenUnique: ["agfb", "bgcad", "edgca", "becfda", "cabfgd", "gefdcb", "ba", "cabdgef", "bcdfg", "bad"], fourOutput: ["cdabg", "daceg", "bda", "bgfdc"] },
        { tenUnique: ["cbefad", "gcfbade", "bdcgf", "edcaf", "gad", "acfegd", "dfeagb", "ga", "gcea", "cdagf"], fourOutput: ["gda", "ag", "agd", "ga"] },
        { tenUnique: ["agc", "adgec", "ca", "cgdfe", "bfdcaeg", "cdfbge", "cedfga", "edagb", "acbgef", "facd"], fourOutput: ["abgde", "bdfcaeg", "gdabe", "gca"] },
        { tenUnique: ["egcda", "degcb", "fabcgde", "fgaebd", "be", "gfdeac", "ecab", "bde", "gfcdb", "edgbac"], fourOutput: ["dbe", "afgbde", "ecab", "deb"] },
        { tenUnique: ["defbga", "bceg", "cabgef", "cadgbef", "agefb", "dfgcba", "becaf", "dceaf", "bc", "cba"], fourOutput: ["gaebf", "cafeb", "bc", "dfacgb"] },
        { tenUnique: ["bedag", "bdfcea", "dfbacg", "efdg", "ebcga", "abedfcg", "dg", "aefbd", "gbdfae", "bdg"], fourOutput: ["caebg", "degbcaf", "gbcfda", "efadb"] },
        { tenUnique: ["eb", "bacdf", "bde", "bega", "gdfaec", "daecg", "dafcbge", "acdbge", "cdabe", "ecdfgb"], fourOutput: ["agecd", "eb", "edb", "bde"] },
        { tenUnique: ["gabcd", "dcafbe", "edacgb", "badce", "gdcefba", "fgabc", "dcbgfe", "dg", "dage", "dgb"], fourOutput: ["dg", "ceafgdb", "dfgbec", "ceadbg"] },
        { tenUnique: ["acedb", "geadcb", "cafd", "edf", "fdcegb", "dbfae", "dfcabe", "fd", "agfdbce", "agbfe"], fourOutput: ["adfbe", "dcbaef", "dcaf", "eagfb"] },
        { tenUnique: ["dgfb", "daebcf", "gaced", "dab", "ecgbfad", "eabfgc", "db", "gabedf", "fgeba", "agbed"], fourOutput: ["bd", "bd", "acedfb", "fcdbega"] },
        { tenUnique: ["daebf", "befdac", "gf", "bdecfag", "egfb", "gabefd", "adfgbc", "fgeda", "fgd", "cdage"], fourOutput: ["agedc", "fg", "fdbeac", "defcab"] },
        { tenUnique: ["bcgda", "egbdac", "bgf", "dgbface", "cagbdf", "afcb", "fb", "ecfdgb", "edgfa", "gadbf"], fourOutput: ["fbcegd", "egcbfd", "adgfcb", "dgbaec"] },
        { tenUnique: ["de", "ebcfa", "dec", "bacegdf", "afdbec", "ecgbaf", "fcaed", "cafgd", "bfde", "cedabg"], fourOutput: ["cdeagb", "cfgabde", "fbed", "bgedfca"] },
        { tenUnique: ["cdgbf", "cgedbf", "cdef", "baceg", "ef", "dfbacg", "bef", "egbcf", "dfeagb", "bafgcde"], fourOutput: ["gbfce", "fbdcag", "fcabgd", "ef"] },
        { tenUnique: ["fbac", "efbdga", "gebdc", "fc", "bfegc", "bgcfead", "dfcega", "baecfg", "afgeb", "cgf"], fourOutput: ["adcgbef", "abcgef", "fcg", "bacf"] },
        { tenUnique: ["eagdbf", "de", "bacfgd", "abfce", "dfgab", "dfabe", "cfegda", "bedg", "fde", "cebagdf"], fourOutput: ["dfgace", "cfgdba", "degb", "bged"] },
        { tenUnique: ["cefabg", "bcfgd", "decbg", "fdcgeab", "cdbae", "ceg", "bgefcd", "efgd", "eg", "cfgdab"], fourOutput: ["bfgdc", "fbdcga", "gce", "adecb"] },
        { tenUnique: ["ecgabd", "ebgd", "gdc", "fdaegc", "dbcaf", "fcegdab", "acgeb", "agdcb", "eabfgc", "gd"], fourOutput: ["gdbafec", "efacbdg", "bgeafc", "dfacb"] },
        { tenUnique: ["egbfac", "abg", "fgeca", "fgaedc", "dbfeg", "cbae", "acbfgd", "gefab", "ba", "bfcdgea"], fourOutput: ["gab", "ab", "efbgca", "aecbfdg"] },
        { tenUnique: ["eadgcfb", "ge", "aegbd", "cedagf", "dagfb", "feabcd", "abcged", "dbeca", "cegb", "egd"], fourOutput: ["debca", "fadcbe", "baedg", "ge"] },
        { tenUnique: ["cagfeb", "edabc", "gd", "gfdabe", "cdfg", "degcfab", "bgcfa", "dgbacf", "gbcda", "dgb"], fourOutput: ["gd", "bfeacg", "afedgb", "dbaec"] },
        { tenUnique: ["ba", "bfad", "febcg", "decafg", "fdeac", "fdgcabe", "bca", "abdefc", "gacbde", "bcefa"], fourOutput: ["badgce", "cba", "eacbf", "bcafe"] },
        { tenUnique: ["ac", "cedfa", "bdecgf", "dgfea", "fgbdac", "dfgabce", "abce", "edcfb", "caefbd", "fac"], fourOutput: ["gafcbd", "ecfgbd", "fbgcde", "faegd"] },
        { tenUnique: ["bf", "eafcd", "caebg", "fgcb", "dcfbaeg", "abf", "bfaegd", "cbeagd", "baefgc", "acefb"], fourOutput: ["gdbcefa", "cbeag", "fab", "bfa"] },
        { tenUnique: ["gcb", "ebcgd", "cfdbaeg", "dafcge", "cedfg", "dgfbce", "badec", "begf", "gb", "cbgdfa"], fourOutput: ["fgaebdc", "gbdce", "gbfe", "afdcbg"] },
        { tenUnique: ["gfbdc", "dac", "bdeagf", "daebcf", "gecdaf", "fcgad", "geca", "ca", "gafed", "fbcdgae"], fourOutput: ["bafcde", "dgbfc", "adebcf", "gcadf"] },
        { tenUnique: ["ecbgaf", "cadefb", "ec", "debc", "bgcdaef", "ace", "ecafd", "egdfba", "aedbf", "facgd"], fourOutput: ["ec", "eca", "efcagb", "bfaed"] },
        { tenUnique: ["aef", "fbad", "ebacg", "afceb", "af", "fedcbg", "bfced", "cgadfbe", "fcbade", "gaecdf"], fourOutput: ["bgcdef", "abgce", "efdbcg", "aebcg"] },
        { tenUnique: ["cafbde", "ba", "cabf", "agfed", "ecfbd", "gfebdac", "dbeagc", "abe", "cbgedf", "fdbae"], fourOutput: ["abe", "gdaceb", "eba", "bea"] },
        { tenUnique: ["cbdfg", "ebg", "edagf", "be", "caegbd", "cbdgfae", "fgebd", "cefb", "cebgdf", "cbdgfa"], fourOutput: ["bedgca", "be", "fbdcge", "edabcfg"] },
        { tenUnique: ["ebga", "cbdafg", "cafgebd", "eb", "aedgbf", "ecfgbd", "fcaed", "eafbd", "bed", "adgfb"], fourOutput: ["caefd", "bfdga", "dcfea", "cdgabf"] },
        { tenUnique: ["efgdbac", "ab", "dgcfb", "abg", "afedg", "faeb", "dbegfa", "dacegf", "bdagf", "dagcbe"], fourOutput: ["fbcgd", "gacbdfe", "cdbgf", "ab"] },
        { tenUnique: ["ga", "dbfca", "acge", "edfgab", "gab", "agfcb", "cabfge", "bfdcge", "dgfeacb", "efgcb"], fourOutput: ["ag", "fbecg", "ag", "bfcgea"] },
        { tenUnique: ["fdcgbe", "bad", "cfbga", "ceadfb", "bdeacg", "bdafc", "ebdcgaf", "bcefd", "da", "afde"], fourOutput: ["gefdbc", "daef", "fade", "afcdb"] },
        { tenUnique: ["dcagbf", "cbgef", "abg", "ab", "feagd", "beagcf", "cfbegd", "cbae", "fegab", "gdbeacf"], fourOutput: ["gba", "ebgfa", "ab", "fecdgb"] },
        { tenUnique: ["cdbge", "aefcdb", "febca", "feadgb", "eagdbfc", "ecbgf", "gafc", "gbf", "ebacfg", "fg"], fourOutput: ["gf", "gefbad", "gf", "dbecafg"] },
        { tenUnique: ["dgb", "efdgab", "becfga", "aebgc", "gd", "cgde", "cebagd", "bagcd", "cebdgaf", "afbdc"], fourOutput: ["agcbd", "dg", "gbd", "gdec"] },
        { tenUnique: ["dcafebg", "ebdga", "degc", "ecgabd", "bge", "dfcgab", "efabgc", "feadb", "gadbc", "ge"], fourOutput: ["badcg", "acgedb", "adebf", "badge"] },
        { tenUnique: ["aegbfdc", "fa", "fagebd", "dfeac", "fae", "eadcgb", "edgfc", "bcfa", "abefcd", "bdace"], fourOutput: ["fbca", "ecdbfa", "agecdfb", "dcfae"] },
        { tenUnique: ["gbdcea", "gcfa", "ecdafbg", "bagfe", "bgc", "ecfdb", "gecbf", "fgaedb", "abfgce", "cg"], fourOutput: ["dbafge", "bgaefd", "edcbf", "faebg"] },
        { tenUnique: ["cfdegab", "dbgcfa", "ebf", "fe", "fcaeb", "fecdba", "cbage", "abcfd", "gfbead", "cefd"], fourOutput: ["fcbea", "ef", "fe", "bceaf"] },
        { tenUnique: ["dfebga", "fde", "bgfd", "fd", "gdcbea", "cebafd", "dgabe", "fegad", "cdeagfb", "acfge"], fourOutput: ["fgeca", "cdeabg", "gdceab", "fd"] },
        { tenUnique: ["fgeda", "fcdegb", "gdbaef", "dbfcega", "fad", "acfeg", "fgabdc", "baed", "da", "dgfeb"], fourOutput: ["gdefa", "afd", "acfge", "efgbd"] },
        { tenUnique: ["daecbg", "ace", "abcgfd", "dcbegfa", "efcag", "dafe", "ae", "cbegf", "gfcda", "agedcf"], fourOutput: ["aedbgc", "gacef", "gadfce", "egfcb"] },
        { tenUnique: ["dfacb", "egdac", "daecgb", "ceb", "be", "begafc", "edgb", "cadebfg", "edcba", "egfcad"], fourOutput: ["abcegd", "cfdbage", "acbdf", "aegcfbd"] },
        { tenUnique: ["cdfae", "afgced", "dbgac", "fcebad", "gfdbea", "badcf", "fb", "adcfebg", "cbef", "bfd"], fourOutput: ["bafgde", "begfad", "bgcda", "aebfcd"] },
        { tenUnique: ["gace", "eabdgf", "gcedf", "gfaedc", "efbdc", "edg", "ge", "gacbfed", "dfcga", "cfgbda"], fourOutput: ["acge", "eg", "dfceg", "gefbad"] },
        { tenUnique: ["abdcf", "bdegfa", "bgedfca", "ce", "geafd", "dfeagc", "edc", "aedfc", "fegc", "gacdbe"], fourOutput: ["dcfaeg", "ecd", "cde", "aegfbd"] },
        { tenUnique: ["egdbcf", "agdfbc", "gacdebf", "dec", "gdcfb", "gebda", "ec", "dafebc", "cgfe", "dcegb"], fourOutput: ["cfbeadg", "efgdbc", "gcebfd", "ecd"] },
        { tenUnique: ["dafge", "acefg", "ecgb", "cfagdb", "ebfcagd", "cgfab", "ec", "ecf", "aedcfb", "acbefg"], fourOutput: ["becg", "ec", "gecbaf", "adfgbec"] },
        { tenUnique: ["bad", "dafgc", "cgebd", "efbdcg", "cbedgfa", "cgabd", "bfeagd", "ab", "dgecba", "cbea"], fourOutput: ["edcfabg", "fadcg", "dba", "gfcda"] },
        { tenUnique: ["dcefag", "bcagd", "ecfag", "gfacbde", "fgcaeb", "cfagb", "afb", "efbagd", "ecfb", "bf"], fourOutput: ["afdecg", "ebagdf", "bcfe", "fb"] },
        { tenUnique: ["aedgcbf", "dacefg", "bfgce", "dgfebc", "dbcfag", "fb", "cefgd", "gabce", "bfc", "fbed"], fourOutput: ["acgdfb", "bfegc", "geabc", "edgfac"] },
        { tenUnique: ["df", "aebdgcf", "gdcba", "fcbad", "cbdage", "bdcagf", "deagcf", "fdbg", "aefbc", "afd"], fourOutput: ["cdfba", "df", "cebfa", "daf"] },
        { tenUnique: ["edcgf", "bfeadg", "bfdea", "bg", "gfbed", "gfba", "eafcdbg", "dcfaeb", "bge", "degbca"], fourOutput: ["begcda", "aebfd", "fbag", "fedgc"] },
        { tenUnique: ["dbfgaec", "bcf", "edcb", "abfeg", "egfcb", "fgbdca", "gcafed", "bc", "bfcdge", "cdfeg"], fourOutput: ["dgefcba", "cfgbde", "ecdgf", "cb"] },
        { tenUnique: ["eafg", "gbdaf", "gcabd", "fecbda", "dgebcaf", "cdfebg", "adfgbe", "bgf", "gf", "bdfea"], fourOutput: ["gcadb", "fage", "gaef", "afdceb"] },
        { tenUnique: ["debagfc", "cbdfa", "gebc", "cfgaed", "gc", "aegfdb", "cdfebg", "ebgdf", "cfg", "bcdgf"], fourOutput: ["eafbdcg", "dgfebca", "deafcg", "gadefc"] },
        { tenUnique: ["adg", "abced", "fbega", "dg", "abegcf", "fgde", "cfegadb", "gdabe", "aegfbd", "gdbacf"], fourOutput: ["abecd", "afgbce", "gdabfc", "dag"] },
        { tenUnique: ["efacg", "fagb", "ebgdfca", "dfcabe", "gcdbea", "fa", "fbaceg", "cegfd", "geacb", "fca"], fourOutput: ["edgfc", "fca", "fa", "cgeba"] },
        { tenUnique: ["fbadcg", "caebdg", "egfbd", "fdgcb", "gdbca", "fbc", "egdbacf", "facd", "fc", "egcbaf"], fourOutput: ["acdgb", "egfbca", "gbceda", "gfcbd"] },
        { tenUnique: ["adfge", "bfea", "fb", "fagbdc", "bdf", "edfbag", "ecdbg", "fgbed", "dbgafce", "ecgadf"], fourOutput: ["dbefg", "bdegf", "aegcdf", "fdeagc"] },
        { tenUnique: ["ebgdc", "afecg", "dcfgeb", "gbf", "cfbd", "dbaecg", "bf", "ecbfg", "agfdecb", "dbgfea"], fourOutput: ["afgbcde", "gefbc", "fb", "gcebdf"] },
        { tenUnique: ["fga", "efdab", "fgdcea", "bagc", "fbgcea", "gfebc", "abdcegf", "cbgfde", "gfbea", "ga"], fourOutput: ["dgceaf", "gfa", "ag", "cbefg"] },
        { tenUnique: ["gead", "dfaebgc", "ag", "fgcead", "dacef", "fdecba", "adgcf", "fgcbea", "cga", "bgdfc"], fourOutput: ["faced", "fgbcd", "bgfeac", "fagcbe"] },
        { tenUnique: ["bdfaceg", "gafbcd", "cfae", "daebg", "gecdf", "edcag", "cdegfa", "cga", "ecbgdf", "ac"], fourOutput: ["gdeca", "agc", "face", "ac"] },
        { tenUnique: ["dbgcf", "eg", "badfe", "edgbcf", "gbe", "aefbgdc", "eabfcg", "dgfbac", "decg", "fgdeb"], fourOutput: ["cfgbad", "abdfe", "eabdf", "egb"] },
        { tenUnique: ["fcbgad", "gfcadbe", "eadb", "bcadf", "cfedba", "bce", "be", "fecgd", "cgabef", "efdcb"], fourOutput: ["fgcabe", "ebad", "edba", "fdcbga"] },
        { tenUnique: ["df", "bedgf", "bcgedf", "bcaegd", "dcgf", "eacbdf", "ebcdg", "dfb", "agedfcb", "egfab"], fourOutput: ["dcgf", "fdb", "edbgc", "egdacfb"] },
        { tenUnique: ["facdb", "eca", "fceagd", "cfeba", "dcbe", "fbcead", "ec", "afdbgc", "acdgbfe", "begfa"], fourOutput: ["fdeagc", "ce", "aec", "ec"] },
        { tenUnique: ["ecfbad", "gdabefc", "edb", "be", "bceg", "abdfg", "dacgef", "gbaed", "cedag", "cebdga"], fourOutput: ["eb", "adgfb", "gcade", "egcb"] },
        { tenUnique: ["agedbf", "cegbda", "abf", "eafgc", "fb", "debafc", "gaebf", "eadfbcg", "begda", "bgfd"], fourOutput: ["gacfe", "aegdb", "gaecf", "abdeg"] },
        { tenUnique: ["afbced", "ae", "efa", "cdebf", "ceabf", "eacgfbd", "gbafc", "caed", "gbefad", "bedgcf"], fourOutput: ["dbcgfe", "fae", "acgbf", "cfbae"] },
        { tenUnique: ["fbeda", "cfaebg", "agbdcf", "gbaecdf", "dag", "gfecda", "gfabc", "gd", "bcgd", "dafgb"], fourOutput: ["dafbecg", "dfeba", "dfaeb", "gfdcba"] },
        { tenUnique: ["dacfbe", "dcbfgae", "abd", "ba", "fdgeb", "cbfa", "egadcb", "edabf", "fdeca", "geacdf"], fourOutput: ["gcbdaef", "dbefa", "bfac", "dabfe"] },
        { tenUnique: ["cgeafb", "fdce", "gafdbc", "edgca", "dbacegf", "efcagd", "cge", "baedg", "gdafc", "ce"], fourOutput: ["bcfdega", "ce", "ec", "cefd"] },
        { tenUnique: ["db", "eacgdf", "bgd", "gcbad", "afdcebg", "fcgbed", "dfab", "aebgc", "dfbcga", "fcagd"], fourOutput: ["agcdf", "dbg", "gafcbd", "fecagd"] },
        { tenUnique: ["fdge", "cgd", "eadfcb", "gd", "gbfdc", "bcfga", "cbefadg", "cfbde", "deabcg", "gbcefd"], fourOutput: ["dgfe", "acfebd", "fbcdg", "ecdagb"] },
        { tenUnique: ["gcefd", "fbd", "db", "efgdb", "cbgfea", "bead", "cfdbga", "begfa", "bfgdeac", "fgdeba"], fourOutput: ["abcgfd", "dbf", "fabge", "fdb"] },
        { tenUnique: ["efgcd", "ac", "eafcbd", "befagc", "bdcafeg", "fegba", "acgb", "fca", "gaefc", "ebafdg"], fourOutput: ["efcag", "bagc", "ca", "gebafd"] },
        { tenUnique: ["gb", "bgd", "bcdag", "adecb", "edbfag", "cdeagbf", "cfedab", "acfdg", "eagdbc", "cgeb"], fourOutput: ["dcagb", "acfgedb", "dbg", "dbg"] },
        { tenUnique: ["gfdeac", "gfe", "fbea", "bacge", "bcgafe", "becgdfa", "bcgfe", "ef", "egcbad", "fbdcg"], fourOutput: ["bfdgc", "gcfeba", "adgceb", "fge"] },
        { tenUnique: ["bcd", "dc", "dgfcba", "eagcdb", "cbgafed", "dgbfe", "dcebg", "feacbg", "cdea", "acbge"], fourOutput: ["gbefd", "dbgfac", "gbdafc", "adce"] },
        { tenUnique: ["bd", "dbegf", "bgd", "geadbc", "fgecd", "afebg", "fbagcde", "bgcfde", "dbfc", "eacgdf"], fourOutput: ["bd", "gdb", "db", "gcedf"] },
        { tenUnique: ["afdcgb", "cbeaf", "bedaf", "dfbge", "dab", "cbdfeag", "da", "fdaceb", "cgebfa", "deca"], fourOutput: ["egfdb", "abd", "fdabce", "gcfedab"] },
        { tenUnique: ["bcdfaeg", "afbegc", "dcbae", "defb", "cdaeg", "dfacbe", "cbe", "eb", "fcgabd", "abcdf"], fourOutput: ["ebc", "caedb", "caedg", "be"] },
        { tenUnique: ["dgcfeb", "dbefg", "ecfgd", "bge", "bafecg", "fgadce", "eb", "cdbe", "degcfba", "gadbf"], fourOutput: ["be", "acegdbf", "cdgfbe", "abgfd"] },
        { tenUnique: ["ab", "gfdbae", "dagfe", "agdfb", "bad", "facgde", "gfbdc", "dacfgeb", "aebg", "dbfcae"], fourOutput: ["gabe", "bfgdae", "caedfb", "bcgeadf"] },
        { tenUnique: ["cfade", "agfce", "ebacdf", "fde", "cbdfga", "bcedfg", "decfbag", "dacbf", "adeb", "de"], fourOutput: ["fbcda", "ecafd", "aefdcb", "faceg"] },
        { tenUnique: ["gbefda", "fdaegcb", "cbdag", "eacbd", "cea", "cefagd", "dbface", "efbc", "dbeaf", "ce"], fourOutput: ["edbfa", "faecdb", "ebcf", "gdfceab"] },
        { tenUnique: ["fgbead", "gcdbe", "ba", "adfeg", "bgdae", "afeb", "cadgfb", "bad", "bcgefda", "fgedac"], fourOutput: ["cdafbg", "feagd", "abdge", "gcfbade"] },
        { tenUnique: ["cbfe", "daceb", "decfag", "dbefca", "agdeb", "bc", "acfed", "egfbacd", "bafdgc", "cdb"], fourOutput: ["dbc", "dbfaecg", "decaf", "gfcdab"] },
        { tenUnique: ["eafdgc", "fcdb", "gbdae", "cb", "cgbad", "feacgb", "cgadfeb", "cdfbga", "abc", "fgdca"], fourOutput: ["bafcdg", "cadfge", "baegd", "bfcgda"] },
        { tenUnique: ["fabged", "cfdbea", "badec", "abc", "efadb", "gacde", "fdbc", "cb", "fbagec", "eabcgfd"], fourOutput: ["cdaeb", "cbdea", "bfaed", "aebcd"] },
        { tenUnique: ["gbc", "adfebc", "ecdagfb", "ecbgda", "geca", "eabdc", "dbgce", "edbfg", "gc", "abdgcf"], fourOutput: ["gc", "fegadbc", "agec", "gc"] },
        { tenUnique: ["cdgfb", "cbedag", "dcgef", "gcefad", "ceg", "adgebf", "cdeagfb", "dfgea", "acfe", "ce"], fourOutput: ["cdebga", "ec", "dcgef", "ce"] },
        { tenUnique: ["ca", "gdfba", "gadcf", "dfecgb", "cfadeg", "eadc", "afbceg", "fac", "dafcgbe", "decgf"], fourOutput: ["decgf", "edgfc", "bgdcafe", "aecgdf"] },
        { tenUnique: ["abdcge", "cae", "bfecg", "efcdba", "bfeda", "gcadfeb", "ac", "faebc", "fgbaed", "fcad"], fourOutput: ["aebfc", "ca", "ca", "aebcf"] },
        { tenUnique: ["bcafg", "cafeb", "eb", "feadbg", "fcgade", "fcdbea", "dagecfb", "ecdb", "abe", "dfaec"], fourOutput: ["fcegad", "cbfgeda", "bcdaegf", "fcadeb"] },
        { tenUnique: ["becg", "gfbda", "gae", "egfcdab", "ge", "deacbf", "edcfag", "agcdbe", "gadeb", "bcaed"], fourOutput: ["gdabe", "cegb", "dcbgae", "abdce"] },
        { tenUnique: ["adfebc", "fdbcga", "gecab", "gfbdae", "dg", "cdfg", "dbg", "fcadb", "bacdg", "gedcabf"], fourOutput: ["egbac", "dbfaceg", "gd", "dg"] },
        { tenUnique: ["ebcgfd", "agdbe", "fabd", "efcbga", "cfbgaed", "dgb", "fdgeab", "efgba", "db", "acdge"], fourOutput: ["db", "cgead", "bgacdfe", "cgbefd"] },
        { tenUnique: ["dcfbga", "edbag", "ae", "abe", "fdgbe", "dgbca", "aced", "bfaceg", "gbacde", "adfcbge"], fourOutput: ["gefdb", "cdea", "cdgba", "bfdge"] },
        { tenUnique: ["dbgcef", "acef", "cbe", "cbfedga", "decab", "acefdb", "fdbcga", "ce", "gbaed", "dbfac"], fourOutput: ["ce", "fecabd", "daebc", "ebcdgf"] },
        { tenUnique: ["db", "dcbaf", "egcfbad", "fbdeca", "ebdc", "egbfad", "cbagf", "bfd", "ecfagd", "aefdc"], fourOutput: ["dagfbe", "cdeb", "cfbead", "fabcd"] },
        { tenUnique: ["fbagdc", "gafbc", "aecbd", "fbgeac", "fcabd", "fdgc", "afd", "fd", "gfbcdea", "gbeafd"], fourOutput: ["fda", "eacdb", "dbegfa", "dgcf"] },
        { tenUnique: ["dgfeab", "fabcgd", "fg", "fgb", "cagfb", "dcgf", "dcabf", "cdfaeb", "fdgcbea", "bcaeg"], fourOutput: ["adfbc", "dbgfca", "bcdafg", "gfb"] },
        { tenUnique: ["baegc", "bd", "daefgc", "fadgc", "gfdb", "cbd", "ebacfd", "cdbgaf", "dgcabef", "cgbad"], fourOutput: ["daebfcg", "fcbaed", "bd", "cgfabd"] },
        { tenUnique: ["cafbgde", "cdf", "fdgae", "beacd", "cf", "adfce", "cfeg", "agfcbd", "fdcaeg", "gdfaeb"], fourOutput: ["ecdfgba", "efdca", "acdbe", "cdabe"] },
        { tenUnique: ["adfceb", "bg", "gdbeafc", "bgafe", "fcdbeg", "fegbca", "gfdae", "cafeb", "cbag", "beg"], fourOutput: ["egafd", "efdcba", "gfacbe", "bcga"] },
        { tenUnique: ["fbgda", "cfgbda", "fgdeb", "ebag", "cedbaf", "edb", "eb", "gafecdb", "gcefd", "fgbead"], fourOutput: ["eagb", "dgbfe", "decafb", "adfgb"] },
        { tenUnique: ["gefcbd", "eafdg", "cdbagef", "aegfc", "dg", "gbfcae", "dgf", "aefdb", "dgac", "adgcef"], fourOutput: ["dgca", "feagbc", "dg", "agefcd"] },
        { tenUnique: ["dbfeca", "ebcaf", "cag", "gafceb", "gcabefd", "bfga", "ga", "adgcfe", "ecdgb", "aecgb"], fourOutput: ["gdbcafe", "agc", "cga", "afbce"] },
        { tenUnique: ["ecdbfa", "cebdgaf", "efdbga", "bagfc", "gacbed", "cd", "cdfe", "dbfca", "ebdaf", "dac"], fourOutput: ["daebf", "ecfd", "dfec", "cfed"] },
        { tenUnique: ["agcef", "bf", "afbced", "badecg", "edfgbc", "efgabdc", "fegbc", "cbged", "fbe", "bfdg"], fourOutput: ["dgfb", "fbdeca", "dagceb", "gcbed"] },
        { tenUnique: ["daefgb", "cbaeg", "cegd", "gea", "cfbgad", "bfcea", "eg", "fadecbg", "bedagc", "abdcg"], fourOutput: ["aeg", "ge", "gefdab", "ge"] },
        { tenUnique: ["gfbca", "bac", "aebcfd", "dbcfag", "gdeacf", "bc", "gdafc", "dgbc", "ebafg", "ecbgdfa"], fourOutput: ["cba", "dgcb", "cbdg", "eabfdc"] },
        { tenUnique: ["dbegc", "gacfbd", "cegfab", "gabefdc", "bcgfe", "ef", "bfagc", "feg", "fdgeab", "feac"], fourOutput: ["abfdcg", "afec", "gdbfea", "fdgaceb"] },
        { tenUnique: ["bfcea", "cd", "cde", "dcfbeag", "gabed", "fegdca", "fdcb", "abgecf", "ebdca", "fabcde"], fourOutput: ["efbac", "bfeagc", "cabdfe", "cfgabe"] }
    ]
});
