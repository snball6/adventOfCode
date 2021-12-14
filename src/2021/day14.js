
function performPolymerInsert(startValue, map) {
    let newValue = '';
    let pair;

    for (let i = 0; i < startValue.length - 1; i++) {
        newValue += startValue[i];
        pair = startValue[i] + startValue[i + 1];

        let mapValue = map[pair];
        newValue += mapValue;
    }
    newValue += startValue[startValue.length - 1];

    return newValue;
}

function getMostCommonMinusLeastCommon(string){
    let totals = {};

    for(let i = 0; i<string.length; i++){
        addOrUpdate(totals, string[i]); //day5Helper funciton - adds key at 1 or increments
    }

    //arbitrary starting values
    let most = ['Initial',0];
    let least = ['Initial', 99999];
    for(key in totals){
        if(totals[key] > most[1]){
            most = [key, totals[key]];
        }
        if(totals[key] < least[1]){
            least = [key, totals[key]];
        }
    }
    return most[1]-least[1];
}

function take10StepsAndCalculate(startValue, map){
    let newValue = startValue;
    for(let i = 0; i<10; i++){
        newValue=performPolymerInsert(newValue, map);
    }

    return getMostCommonMinusLeastCommon(newValue);
}
