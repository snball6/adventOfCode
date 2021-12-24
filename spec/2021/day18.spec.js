fdescribe("day18", () => {
    describe("Part 1", () => {
        it('should explode', () => {
            expect(explode('[[[[[9,8],1],2],3],4]'.split(""))).toEqual('[[[[0,9],2],3],4]');
        });
    });
});