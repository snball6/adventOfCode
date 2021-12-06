function simulateLanternFish(fishAges, days) {
    let fishes = fishAges.slice(0, fishAges.length);

    for (let i = 0; i < days; i++) {
        let newlyBirthedFishes = [];
        for (let fish = 0; fish < fishes.length; fish++) {
            switch (fishes[fish]) {
                case (0):
                    newlyBirthedFishes.push(8);
                    fishes[fish] = 6;
                    break;
                default:
                    fishes[fish]--;
                    break;
            }
        }
        fishes = fishes.concat(newlyBirthedFishes);
    }
    return fishes;
}

function simulateLanternFish2_Aggregate(fishAges, days) {


    let fishes = aggregateFishes(fishAges);

    for (let i = 0; i < days; i++) {
        let currently0 = fishes[0];
        let currently1 = fishes[1];
        let currently2 = fishes[2];
        let currently3 = fishes[3];
        let currently4 = fishes[4];
        let currently5 = fishes[5];
        let currently6 = fishes[6];
        let currently7 = fishes[7];
        let currently8 = fishes[8];

        //shift down ages and add new borns
        fishes[0] = currently1;
        fishes[1] = currently2;
        fishes[2] = currently3;
        fishes[3] = currently4;
        fishes[4] = currently5;
        fishes[5] = currently6;
        fishes[6] = currently7 + currently0; //just birthed
        fishes[7] = currently8;
        fishes[8] = currently0;
    }

    let total = 0;
    for(key in fishes){
        total+= fishes[key];
    }

    return total;
}

function aggregateFishes(fishAges) {
    let fishes = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0
    }

    for (let fish = 0; fish < fishAges.length; fish++) {
        fishes[fishAges[fish]]++;
    }
    return fishes;
}
