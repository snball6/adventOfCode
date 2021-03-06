describe("day10", () => {
    describe("Part 1", () => {
        it("should find corrupt closures", () => {
            expect(findIllegalClosureOnLine("(]")).toEqual("]");
            expect(findIllegalClosureOnLine("{()()()>")).toEqual(">");
            expect(findIllegalClosureOnLine("(((()))}")).toEqual("}");
            expect(findIllegalClosureOnLine("<([]){()}[{}])")).toEqual(")");

            expect(findIllegalClosureOnLine("{([(<{}[<>[]}>{[]{[(<()>")).toEqual("}");
            expect(findIllegalClosureOnLine("[[<[([]))<([[{}[[()]]]")).toEqual(")");
            expect(findIllegalClosureOnLine("[{[{({}]{}}([{[{{{}}([]")).toEqual("]");
            expect(findIllegalClosureOnLine("[<(<(<(<{}))><([]([]()")).toEqual(")");
            expect(findIllegalClosureOnLine("<{([([[(<>()){}]>(<<{{")).toEqual(">");
        });

        it("should provide nothing for non corrupt lines", () => {
            expect(findIllegalClosureOnLine("[]")).toEqual("");
            expect(findIllegalClosureOnLine("([])")).toEqual("");
            expect(findIllegalClosureOnLine("{()()()}")).toEqual("");
            expect(findIllegalClosureOnLine("<([{}])>")).toEqual("");
            expect(findIllegalClosureOnLine("[<>({}){}[([])<>]]")).toEqual("");
            expect(findIllegalClosureOnLine("(((((((((())))))))))")).toEqual("");
        });

        it("should score closure errors_sampleInput", () => {
            expect(scoreClosureErrors(sampleInput)).toEqual(26397);
        });

        it("should score closure errors_puzzleInput", () => {
            expect(scoreClosureErrors(puzzleInput)).toEqual(339537);
        });


        describe("Part 2", () => {
            it("should find missing closures for line", () => {
                expect(findMissingClosures("[({(<(())[]>[[{[]{<()<>>")).toEqual("}}]])})]")
                expect(findMissingClosures("[(()[<>])]({[<{<<[]>>(")).toEqual(")}>]})");
                expect(findMissingClosures("(((({<>}<{<{<>}{[]{[]{}")).toEqual("}}>}>))))");
                expect(findMissingClosures("{<[[]]>}<{[{[{[]{()[[[]")).toEqual("]]}}]}]}>");
                expect(findMissingClosures("<{([{{}}[<[[[<>{}]]]>[]]")).toEqual("])}>");
            });

            it("should score line closures", () => {
                expect(scoreClosures("}}]])})]")).toEqual(288957);
                expect(scoreClosures(")}>]})")).toEqual(5566);
                expect(scoreClosures("}}>}>))))")).toEqual(1480781);
                expect(scoreClosures("]]}}]}]}>")).toEqual(995444);
                expect(scoreClosures("])}>")).toEqual(294);
            });

            it("should score autocompletes_sampleInput", () => {
                expect(scoreAutoCompletes(sampleInput)).toEqual(288957);
            });

            it("should score autocompletes_puzzleInput", () => {
                expect(scoreAutoCompletes(puzzleInput)).toEqual(2412013412);
            });

        });

        let sampleInput = [
            '[({(<(())[]>[[{[]{<()<>>',
            '[(()[<>])]({[<{<<[]>>(',
            '{([(<{}[<>[]}>{[]{[(<()>',
            '(((({<>}<{<{<>}{[]{[]{}',
            '[[<[([]))<([[{}[[()]]]',
            '[{[{({}]{}}([{[{{{}}([]',
            '{<[[]]>}<{[{[{[]{()[[[]',
            '[<(<(<(<{}))><([]([]()',
            '<{([([[(<>()){}]>(<<{{',
            '<{([{{}}[<[[[<>{}]]]>[]]'
        ]

        let puzzleInput = [
            '([<{(<{(({<{{{[]<>}<<>()>}<<()()>[()()])}{({()[]}[<>{}])<(<><>)<[]{}>>}>{{((()<>)<[]()>)[{[]<>}(()[])]',
            '<<[[<[(<[<[[[{()<>}(<>{})]]][{(<{}{}>(<>))[[<>](<><>)]}[({{}<>}<[]()>){<{}{}>[{}[]]}]]><{(<([][]',
            '{<([[[({{(<[([{}<>]<{}{}>)[[<>[]]]]{{(()<>)[()]}}>){((([{}<>]{[]{}})<<[][]><<>{}>>){([[]{}]<<>()>){',
            '{{[{({{(({<[<{[]{}](<>)>][<(()[])(()[])>[[<>{}](<>())]]><<([{}]{{}{}})[{[]}{{}[]}]>[{<()<>><<>>}]>',
            '(<<<[(({[[[{<[{}<>]{<><>}><({})>}{{{()}{(){}}}}][{[({}{})[<><>]]<({}[])[()()]>}(<([]<>)<[](',
            '<[{[((<<[[<[({[]()}{(){}})[{<>[]}<()()>]]>]]<[{{[[[][]]<[]()>][<<>{}><<><>>]}}({[<[]()><{}[]>]{<[]',
            '(({((({{[[(([<[]<>>(())]{{()<>}<<>[]>}))]]([<([{{}()}(<>{})][({}<>)])>](({{<()<>>[{}())}{((){}){[]()}}})',
            '({{({(<<{<<([<{}>])(<[()<>][{}[])>{[()()][{}{}]})>[[[{{}[]}[(){}]][{<>{}}{()<>}]]({<<>[]>{{',
            '<[<<{[(<{[{({({}[])(()[])}[{{}<>}{{}<>}]){<{<>[]}[<>()]>{<{}()>}}}{{{{()()}}[{{}<>}({}<>)]}}}}>{{[[{<[',
            '[{([<{{<<<[([<[]()>])]([{{<>{}}}{(()[])[<>[]]}])><[(<{()<>}{<>}>[([]{})<<>{}>]}([{()<>}({}[])]<<{}[]>({}{}',
            '<([<([{{<<{<(([]<>)<{}{}>)>({[(){}]}((<>[])<{}[]>))}<{<(()[])<[]>>({[][]}(()[]))}(<{()[]}{[]()}})>>[([({()[',
            '{{{[({(<[{[[{{()<>}[<>()]}{({}<>)<{}()>}]{{[()()][(){}]}[{<>()}]}]}]>)(({<<(({{}<>}([]<>))({<>[]}<[]{',
            '({{({<([{[{{[[[]()><{}[]>]({{}[]}[{}()])}}<{[{[]()}[<>]]<[{}<>]<()<>>>}>]{<<(((){}){<>()})[[[][]]]>[([<><>]{',
            '(<[[{{[(([{{<((){}){<>{}}>{<{}[]><<>[]>}}(({<>[]}<<><>>)({()[]}<()<>>))}<{(<()()>[{}{}]){{',
            '{{{[{<<(<<[{({(){}}[{}{}])}[{[<>[]]{()()}}{[()]{(){}}}]]>>)><{((<<{<[]{}>([]{})}{{{}{}}}><([{}[]](()()))>',
            '[<(<<<[(([((<<<><>>>[<[]<>>(()[])])[{((){}){<><>}}<<{}{}>(()[])>]){(([[]<>]<[]>)<{[]}[[]<>]>)<<{{}{}}[[',
            '<(<<({(([[({[[[])(()[])][<[]()>{{}[]}]}{({{}}{(){}})(((){})([]<>))})([[([][])<{}<>>]<<()><<>()>>](',
            '[{[[<{<<{<{<{<()()><{}[]>}([(){}](<>()))>(<{<>[]}([])><[[][]](<>{})>)}(({<[]<>>{()()}}<<[][]>>){({()[]',
            '<([<{((({({[<(()[])[{}]>({[]()})]<<[[]]>>}<[[{[]{}}[{}{}]]([{}[]]{(){}})]({(<>())})>)}({<[{{{}',
            '({{([(<<{({(<(<><>)<{}<>>><<{}()>[()()]>){<{{}()}(<>[]>>}})}>>[<<<{(({{}<>}(()[])){<[][]><{}>})',
            '[<((<<{{<[[[[{[]()}][{[]{}}(<>())]]]]{<<{(()<>)((){})}<[<>[]]{[][]}>>(<(()())(()[])><{{}<>}({}())>)>[<<[(',
            '[(<<(<<[(([{((()())<<><>>}[{()<>}({}<>)]}]{{<(<>[]){(){}}>([<>()]({}{}))}})<<(<[[][]][[][]]>[([][]){(){',
            '<[([[<<[{(<([([]{}){{}<>}][{()}([][])])>)({<({(){}}){[[]{}][()()]}>{{{[]()}({}{})}(<[]{}><<>()>)}}[{[<[]()><',
            '{<{<[[{({<[<<({})<()[]>>((<>{})<[]{}>)>]>})}((<[[(<<{}{}>{[][]}>)<<[()[]]{<>{}}>{{()[]}[()]}>]<({[',
            '[({({(<<<<<[[<[]{}>]{<<>{}><[]{}>}]><<<([]{})<{}[]>><[{}[]][()<>]>>[[<{}[]>{[]}](<{}()>[{}<>])]>>>>{<{([((',
            '<({[({<{[<({{<()[]]}[{()[]}[{}<>]]}{[{()<>}{<><>}]([[][]]<[]<>>)})>[[[(<()<>>({}[]))<[(){}]<<><>>>]][[<({}{}',
            '{<(<<(([[{(<[[()[]]<()[]>]{<()<>><()[]>}><{<[]{}>{()()}}>)([([(){}]{<>{}})[{<>{}}[<>{}]]]<<[[]{}]{()',
            '{[([[{[<[<{(<<[]{}]>({<><>}({})))([{{}<>}]<{()<>}[{}[]]>)}<([(()[])<()()>])<{{[]{}}[{}()]}(<<><>>[()()]',
            '<<[{<[({((<<({{}()}{()[]})>[<<{}{}>{<><>}>]>){{<[{[]()}[[]()]]{[{}[]]}>[{<{}{}>{[]<>}}([{}[]]((){}))]}(',
            '<<{((([[({<{[(()<>)<()[]>]({()[]}({}<>))}{{{[]<>}[{}[]]}[{<><>}]}>}<[[([{}()]{(){}})<({}<>)[[]()',
            '{(([({{(([<{{{<>()}<<>()>}[{<>()}(()())]}>]{(<([()<>]{()<>}){{()<>}}><<{{}}{[][]}>(<(){}><{',
            '{<(({{[<([(<<([][])(<>()]>{{{}{}}{[]<>}}>)[{(<()[]>{<>{}})[{()[]}<[]<>>]}{<{{}[]}><<{}>[{}<>',
            '(<{{([<[[{{[{[[]()][()()]}{<<>{}>}][{{<>()}<()()>}(((){}){<>{}})]}{<(({}()))<[(){}]<(){}>>>(<({}[]>[[][]]>)}}',
            '(({({[({<{{{[[()()]({}())]}[([{}]<{}()>)([{}()]{{}{}})]}[((<{}<>><()()>))]}[{{{(<>{}){<><>)}[<()()',
            '(<({{<([{[([[({}<>)][([]<>){[]{}]]][[<()[]>]])][<{[[{}[]](())]<<()[]>(())>}{<{{}[]}[<>{}]>{<[]<>>',
            '(([[([([<[{[(({}[])<[]{}>)]}][[{({()<>}[{}[]])(([]())(()<>))}<[<[]{}>({}<>)]{{{}{}}{[][]}}>]{{{',
            '<[{[{<<{[[<{(({})(<>{}]){([]())[[]()]}}{(<()()>([]())){([]{})<[][]>}}>]{({[[<><>]{[]()}](<{}[]><[]<>>)}',
            '([{<({{([([[{{()[]}}({(){}}[<>{}])>]({{(())([]<>)}<[()<>][[]()]>}([{()[]}{()()}])))](([[[{<>{}}[<>(',
            '<[[[(<[{{[[{{{<>[]><<>>}[{()[]}({}())]}[<[{}<>]<[][]>>]]]}{{({{{<>()}{()<>}}<<{}[]>({}[])>}[[(<><',
            '[[<[<({<[({{[[<>{}][[]{}]]{<()()>{<>{}}}}[<<<>{}><[]<>>><<{}<>>(()[])>]}){<[(([]())[<>()))[({}[])<',
            '<<(<<<<((([[<<{}[]>(<>())>]]<{{[[]<>]<[]>}{[{}()]{<>[]}}}<[[<>{}]({}())]>>)){{([(({}[])({}[]',
            '([{<([<[[[{[[{<>[]}{[]()}>([[]])]<({{}{}}({}[])){(<>{})<()()>}>}<{(([]()){()<>})[{<>{}}{<>()}]}<(([]',
            '<{[<(({([[((((<>[])[[]{}])({[][]}))(<[()<>]{<><>}>)){<<{<>[]}<<>()}>>{({{}{}}(()()))}}]][{',
            '({<{<<<{{{(((([]())[<>]){<(){}><{}[]>})<{([]<>)[<><>]}[{()<>}({}<>)]>){((<[]()>[<>{}]){<()<>>(',
            '[{<(([(<[((([[(){}]{[]()}])))]>)[<{(<<[<<>[]><()()>]>>){[<{{(){}}({}[])}([{}()][<>])><((()<>)[[]])[[{}()](<>',
            '{<<[<{[(<{<([{()[]}({}<>)]{[{}<>][{}()]})([{<>{}}<<>>])>{(<{{}())<{}()>>(({}[])<<>()>))[({<>()}[()[]])<<{}<>',
            '[<([<<<[({([<<(){}><{}[]>>[[<>{}][{}<>]]]<[<()[]><(){}>]([<>{}][<>[]])>)<<{<[]<>>[[]{}]}<({}(',
            '<[[(<[{[[({{{<<>[]][{}[]]}[[[]{}]]}}){{[[(<>{})(()<>)]({<>()})]({({}{})<[]{}>}[<()<>>])}{<{[()[]]}[<',
            '<(<(<((<[((([[<>()]]){<[<>[]]><([]{})>})[<<{<>()}{{}<>}>(((){})[<>[]])>{[[<>()][{}[]]](([][])([]))}])((',
            '[(<{{<(((<<{[[<>[]]]{([]<>)<{}[]>}}[<{{}{}}[{}()]><{[]()}[{}]>]>{[<{{}[]}([]<>)>[[(){}][()()]]]',
            '<(<(([[{[<<<(({}))[{[][]}]>[[([]{})({}[])]]>[<<(<>[]){<>[]}><[()<>]>)<[{{}<>}(<>{})]{[<>()]{{}{}}}>]>{[{<{',
            '({<({{{[[(([<<()[]><<><>>>])(<((<>()))(<<><>><[]<>>)>)){{({[[]()]{[]<>}}[[{}[]]<[]()>])}({({()()}<[]()',
            '{{{<[<{<{[<(<{[]()}><[()[]]{[][]}>){<<[]>[<><>]>([<>()][<>()])}>)<<<(([]())[<>[]]){[[][]](<>{})}><([(){}]{{}{',
            '<[((<<<({<[((<{}<>>[[]{}})((<>[])))({<()()>{<><>}}{(<><>){(){}}})][[<<[]>>[{<>[]}{[]()}]]([{',
            '(((<<{<({<[[[{()()}(()<>))(<()[]>((){}))][{({}[])[{}()]}<<{}{}>{()()}>]]>})<<{{<[[<>{}]<[][]>]((<><',
            '[<[{[[{{<{[(<<<>[]><{}()>>)({[{}[]]}((<>())<()[]]))]{{({()[]}([]<>)){{<>[]}[[][]]}}}}{({(<<>[]>{[]})[[{}',
            '<<[({[[[[([<(<<>[]>{()[]})>{<[()<>]>[[[]<>]({})]}]<(<{{}}([])>[<{}()>])[{{<>()}<(){}>}<<<>{}}[{}{}]>]',
            '([(((([[<[{({<{}>})<([{}<>][(){}])<<[]()><()[]>>>]{[([<>[]](()()))[{{}[]}[{}<>]]]({({}<>)[<>()]}<{()<>}{[]{',
            '[[<{[{<{{(<(<[<>{}]><([]{})[{}<>]>)>{{[{<>[]}[{}()]]<<()>{[]}>}[[((){})([])]{<<>()>([][])}]})',
            '{<[{{{<{([<[<{{}{}}[[]{}]><{{}[]}>]{(<{}<>><{}[]>)(<(){}><()()>)}>]<<<({{}}(<>()))[<{}[]>(<>{})]>({<[]>{()<',
            '{<[{[<(({[{{({{}[]}[()[]]}}<(([]())[()[]]){(()){<>()}}>}[<<{<><>}>[([]{}){{}<>}]>[{{<>{}}{()[]}}',
            '<{[{([<{<((<[<()[]>{[][]}]<<()[]><<>{}>>><([<><>]<()()>)({{}()}<(){}>)>){<(([][]){[][]})(<[]><{}{}>)>',
            '(([<((((({{{[<()[]]{{}<>}]{<()()>({}<>)}}([[{}()]<<>>][((){})<<>[]>])}}(<{{[(){}]{()()}}}{([{}()',
            '<<<((<[[{[<([<{}<>>(<><>)]<{[]<>}<[]<>>>)>]{([{[[]<>][<>()]}({[]<>}<<>[]>)])[[{{<>[]}(()())}',
            '{<(<<<(({{(((([]<>)(<>[]))))}[(([[[][]][{}()]])<<(<>{}><{}{}>>{(()[])([]())}>)]}([({((<>){[]<>}){<[][]',
            '({(([[[[<{[{(<{}[]>[{}<>])(<[]<>>({}[]))}{([<><>]{{}{}}){{{}[]}[[][]]}}]<[((()[])([]<>))[{[][]',
            '[<([[([[<({({<[]()>}<[[]()]([]<>)>)([[()[]]]{[<>{}][()()]})))>]<({{[{<{}{}>}{{()()}[<>[]]}]{([{',
            '({<<{{({[{[{{[[]<>]<(){}>}<<<>{}>({}{})>}<{[{}<>]}(<[]>[()[]]))]}]<<<<<{(){}}<<>[]>>{<[]{}>{(){}}',
            '(({<([<((<((({{}[]}[[]()])){{[[]()]<[]{}>}(<[][]>{<>})})({{[()()]{{}<>}}(({}{})[<><>])}[[([]{})[',
            '({{[(<{{<<<<[{{}{}}{{}{}}][<[]()>[[]()]]>([{{}}<[]<>>][<[]{}>{()<>}])>[<{({}{})({}<>>}[<{}<>>[<>()]]>]><<',
            '{[((({{(<(<{[{[]()}}<<[][]>(<>[])>}<(<[]()><()<>>){[<><>]<<>()>}>><[{<()[]>}{[{}[]](<>{})}]>)<({<{<><>}>}{',
            '[(([{([<<<([[(()())][([]{})[<>{}]]]({((){})((){})}(([][])[()<>])))[<((<>())[<>{}])>{{[[]<>](',
            '<(({<([(<<<{([{}[]]<[]>)}({{<>{}}[[]{}]}(<{}[]>(()<>)))>>({<{<<>()>((){})}((()())[<>{}])><[<[]()>]{<',
            '[<[{({<[({[(<[{}[]]{[]<>}>(({}{}){{}[]}))(<{()[]}>)]{<([[][]][{}<>])<<<>{}>>>{{((){}){()()}}<{{}}',
            '[<([{<(<(<<{([[]<>]{(){}})((()<>)[[]])}<[<{}()>]<{<><>}<{}{}>>>>([{({}<>){{}()}}]<((()()))<<[][]>',
            '({[{((<{[{([<{()()}{<>()}>[[()[]]]])}[{([[{}]{<>{}}]({[]()}[{}[]]))<{<{}<>>}>}]][[[(<({}{}){{}',
            '[[<{{<{[([(<([[]<>][()<>]))[[[<>[]]]({()()}([][]))])(([[[][]]([]())])<{{{}<>}([]{})}<{[][]}{',
            '<<({<[{[<{<<([<>()]({}<>))][([{}()][{}[]])]>}>]}{[<[[[[[[]{}]<{}>]<<{}()>{()[]}>]][<{({}())',
            '(<<[({[([([[(<<>{}>){[(){}][()]}][[[(){}]{[]<>}]]]<[([<>[]]([]))[{{}<>}{()()}]]<[<{}[]>(()())]<<<><>>{{}[]',
            '{([[[<[(<({<{{{}{}}[[]<>]}<[()[]]{<>[]}>>}<<<(()())<{}[]>>[([][])<<><>>]>[(((){})(()[])){<{}()>(()[])',
            '{[<{[[[((<{[{[[]<>]{{}()}}[{{}<>}{<><>}]][<<()<>>{<>{}}>[{[]{}}((){})>]}(<[<[][]>({}())]<[<>[]](()[])',
            '{({(<<{({({([<(){}>[()()]](<[]><[]<>>))([{<>()}<{}<>>]{<[]<>>[[][]]})})({[(([]<>)[[]])]{([[]{}]{{}()}',
            '{{[<{<<{<{({(({}()))[<<>{}]{()()}]}({{[]{}}([][])}[<<>()>{[]<>}]))}>(<<[{<[]()><<>{}>}]{((<>[]))<(',
            '{{[<[{<(([({([{}{}]({}[]))<<()>(<>[])>})[<<{[][]}<[]()>><{{}[]}<<>{}>>>{{{{}{}}{<>{}}}([{}',
            '[[([(<{{[{{{{{()()}[[][]]}([{}()](<>))}<{<<>[]>[{}[]]}<<{}()>>>}}]<<[{[<{}>({})](<()[]>)}](<<<[][]>(',
            '{<[([{{{((<{((<>())){<[]<>>}}<<{<><>}[<>{}]>{{()[]}(()[])}>>{{{<()()>[[]{}]}[[<><>]<[]()>]}([{{}}{()()}][(<>[',
            '[{<{[([((<(<(((){})[<>]){({}[])<{}<>>}>(((()())([]{}))<[()()]{[]{}}>))([((()<>)<{}()})<{{}[]}<<>',
            '{(({{{<[<({([<{}()>]{<<><>>{<><>}})}){<(((<>[])<[][]>)(<[]<>>{{}<>}))(<{<>{}}<()[]>>[[{}[]]({}())])>',
            '{<([{(<{<<{(<{()}{<>[]}>)([[{}()]{<>{}}]<({}{})>)}[<<<()[]>({}<>)>[<[]>[<>{}]]><(<{}()>[<>{}])>]',
            '<{{{{(({{{[{<[[][]]<()<>>>}[({{}[]}([]<>))({{}{}}{<>()>)]]}}}([{<{{<{}<>><<><>>}}{([{}<>]<<>{}>)',
            '{<[<<{<([[[[[[<>[]](()[])]({{}[]}<{}>)][((()())({}()))<{{}[]}(<>())>]]([<[{}[]][<>[]]>]<{([]{})}{(',
            '{<{[[([<([[[(<()()>({}[]))[{()[]}]]((({}[]><()()>)[({}){[]<>}])]]{<<{<()[]>}{<<>[]>{<>()}}>><[{(()<>)({}<',
            '[[<[[<{{{{<<{{[][]}<(){}>}><{([]())[[]<>]}<<{}[]>(<>())>>>}<{{[[(){}]<<>()>]<{{}()}[[][]]>}}<(<<(',
            '<[[(({({(({{{([]{}){<>{}}}{[<><>]{[]<>}}}}))[({[[({}<>){<><>}]{<<>{}><<><>>}]}[<{<{}<>>(<>{})}(([',
            '({<<([{[<[<([((){})([]())][(()<>)({}[])]){{[{}()]({}[])}[{{}()}{{}()}]}>{{({<>[]}{<>})[<(){}>',
            '<(<{<[<{({{[<{{}[]}{[]<>)>][{[{}{}][()<>]}(<[]<>>[[]{}])]}(([[[]<>]{()()}]<[{}[]]{<>{}}>)((([][]))',
            '<{<(<<((<<[[{<()()><<><>>}<(()<>)({}<>)>>[<<[][]>(<><>)>{(<>[])}]](<{<()[]>([]())}[{<><>}<{}[]>]>)>>{(',
            '{(({(<(<<[[[{<<>()><{}()>}[[<><>]{()<>>]]{[{(){}}]}]]>>)(<<(<({([]())<<><>>}({[]()}({}<>)))>',
            '<{<<[<<{[<([[(()())<<><>>][<<>[]>(<>())]]({<{}{}><<><>>}{[{}]<<>[]>})){[{{[]}<{}[]>}[[(){}]{[]<>}]]',
            '({[[{<[([[[{[[(){}]{[][]}]<({}[])({}())>}{{<()[]>{<><>}}<{<>}>}]{<<<()<>]{<>{}}>[<[]<>>{{}()}]><[<<',
            '<{{{([({<{{([{()}[()<>]][(<>())(())])([({}[])[{}{}]]({{}{})([]())))}{(<[<>()]{()<>}><[()<>][<>[]]',
            '((<[(<[(({{(<<(){}>{(){}}>({()[]}[<>[]]))<(((){})({}()))<<[]{}><()[]>>>}})<[{([<<>{}>]){<{<>{}}{()<>}>}}{{(']
    });
});