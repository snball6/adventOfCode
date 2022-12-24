xdescribe("day16", () => {

    describe("Part 1", () => {
        it("sample - it should traverse and find the optimal path", () => {
            expect(partOneOptimalPath(sample)).toEqual(1651);
        });


    });

    describe("Part 2", () => {

    });

    let sample = {
        'AA': {
            rate: 0,
            leadsTo: ['DD', 'II', 'BB']
        },
        'BB': {
            rate: 13,
            leadsTo: ['CC', 'AA']
        },
        'CC': {
            rate: 2,
            leadsTo: ['DD', 'BB']
        },
        'DD': {
            rate: 20,
            leadsTo: ['CC', 'AA', 'EE']
        },
        'EE': {
            rate: 3,
            leadsTo: ['FF', 'DD']
        },
        'FF': {
            rate: 0,
            leadsTo: ['EE', 'GG']
        },
        'GG': {
            rate: 0,
            leadsTo: ['FF', 'HH']
        },
        'HH': {
            rate: 22,
            leadsTo: ['GG']
        },
        'II': {
            rate: 0,
            leadsTo: ['AA', 'JJ']
        },
        'JJ': {
            rate: 21,
            leadsTo: ['II']
        },
    }

});