fdescribe("day18", () => {
    describe("Part 1", () => {
        it('should explode', () => {
                expect(explode('[[[[[9,8],1],2],3],4]'.split("")).join("")).toEqual('[[[[0,9],2],3],4]');
                expect(explode('[7,[6,[5,[4,[3,2]]]]]'.split("")).join("")).toEqual('[7,[6,[5,[7,0]]]]');
                expect(explode('[[6,[5,[4,[3,2]]]],1]' .split("")).join("")).toEqual('[[6,[5,[7,0]]],3]');
                expect(explode('[[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]'.split("")).join("")).toEqual('[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]');
                expect(explode('[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]'.split("")).join("")).toEqual('[[3,[2,[8,0]]],[9,[5,[7,0]]]]');
        });

        it('should create split pair', () => {
            expect(createSplitPair(10)).toEqual(['[',5,',',5,']']);
            expect(createSplitPair(11)).toEqual(['[',6,',',5,']']);
            expect(createSplitPair(12)).toEqual(['[',6,',',6,']']);
        });

        xit('should split', () => {
            expect(split('[[[[0,7],4],[15,[0,13]]],[1,1]]'.split("")).join("")).toEqual('[[[[0,7],4],[[7,8],[0,13]]],[1,1]]');
            expect(split('[[[[0,7],4],[[7,8],[0,13]]],[1,1]]'.split("")).join("")).toEqual('[[[[0,7],4],[[7,8],[0,[6,7]]]],[1,1]]');
        });
    });
});
