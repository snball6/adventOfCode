function simulateLanternFish(fishAges, days){
    let fishes = fishAges;

    for(let i = 0; i<days; i++){
        let newlyBirthedFishes = [];
        for(let fish = 0; fish<fishes.length; fish++){
            switch(fishes[fish]){
                case(0):
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