

fdescribe("Day 23", () => {

    describe("Part 1", () => {
        // #############
        // #...........#
        // ###C#B#A#D###
        //   #C#D#A#B#
        //   #########
        //
        //Did it by hand counting up each steps!
        //
        //18240 too high
        //17538 too high
        //13598 too high
        //13558 WINS!

        //to solve part 2, though, I need a code way to do this...

        it("should calculate the lowest energy option", () => {
            // Part one spot names
            // #############
            // #AB.C.D.E.FG#
            // ###H#I#J#K###
            //   #L#M#N#O#
            //   #########

            let exampleState = {
                'H': 'B',
                'I': 'C',
                'J': 'B',
                'K': 'D',
                'L': 'A',
                'M': 'D',
                'N': 'C',
                'O': 'A',
                'A': '',
                'B': '',
                'C': '',
                'D': '',
                'E': '',
                'F': '',
                'G': '',
            }
            let roomTree = new RoomTree(1);
            console.log(getHNeighbors(exampleState));
            console.log(roomTree);
        });
    });
});