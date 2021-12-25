fdescribe("day20", () => {
    describe("Part 1", () => {
        describe("helperImage class", () => {
            it('should create image with helper for safely getting coordinates', () => {
                let image = new HelperImage(sampleImage);

                expect(image.get(1,0)).toEqual('#');
                expect(image.get(10,0)).toEqual('.');
            });

            it('should set coordinates and update metadata on min max accordingly', () => {
                let image = new HelperImage(sampleImage);


                image.set(0, 0, '.');
                expect(image.get(0,0)).toEqual('.');

                image.set(-1, 10, '#');
                expect(image.get(-1,10)).toEqual('#');
                expect(image.minY).toEqual(-1);
                expect(image.maxX).toEqual(10);

                image.set(20, -5, '#');
                expect(image.maxY).toEqual(20);
                expect(image.minX).toEqual(-5);
            });

            it('should get surrounding pixels', ()=>{
                let image = new HelperImage(sampleImage);

                expect(image.getSurrounding(2, 2)).toEqual('...#...#.');

                expect(image.getSurrounding(0, 0)).toEqual('....#..#.');
            });
        });
        it('should handle the binary conversion and return a light or dark pixel', () => {
            expect(calculatePixel(sampleAlgorithm, '...#...#.')).toEqual('#');
        });

        it('should enhance and count the number of lights', () => {
            expect(countLit(sampleAlgorithm, sampleImage, 1)).toEqual(24);
            expect(countLit(sampleAlgorithm, sampleImage, 2)).toEqual(35);
        });

    });

    let sampleAlgorithm = '..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..##' +
        '#..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###' +
        '.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#.' +
        '.#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#.....' +
        '.#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#..' +
        '...####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.....' +
        '..##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#'

    let sampleImage = [
        '#..#.',
        '#....',
        '##..#',
        '..#..',
        '..###',
    ]
});