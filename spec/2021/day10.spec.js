describe("day9", () => {
    describe("Part 1", () => {
        fit("should find corrupt closures", () => {
            // expect(findIllegalClosureOnLine("(]")).toEqual("]");
            // expect(findIllegalClosureOnLine("{()()()>")).toEqual(">");
            // expect(findIllegalClosureOnLine("(((()))}")).toEqual("}");
            // expect(findIllegalClosureOnLine("<([]){()}[{}])")).toEqual(")");

            expect(findIllegalClosureOnLine("{([(<{}[<>[]}>{[]{[(<()>")).toEqual("}");
            // expect(findIllegalClosureOnLine("[[<[([]))<([[{}[[()]]]")).toEqual(")");
            // expect(findIllegalClosureOnLine("[{[{({}]{}}([{[{{{}}([]")).toEqual("]");
            // expect(findIllegalClosureOnLine("[<(<(<(<{}))><([]([]()")).toEqual(")");
            // expect(findIllegalClosureOnLine("<{([([[(<>()){}]>(<<{{")).toEqual(">");
        });

        it("should provide nothing for non corrupt lines", () => {
            expect(findIllegalClosureOnLine("[]")).toEqual("");
            expect(findIllegalClosureOnLine("([])")).toEqual("");
            expect(findIllegalClosureOnLine("{()()()}")).toEqual("");
            expect(findIllegalClosureOnLine("<([{}])>")).toEqual("");
            expect(findIllegalClosureOnLine("[<>({}){}[([])<>]]")).toEqual("");
            expect(findIllegalClosureOnLine("(((((((((())))))))))")).toEqual("");

            
        });
    });
});