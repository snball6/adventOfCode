// used for help parsing data https://www.reddit.com/r/adventofcode/comments/a4ma4o/private_leaderboard_star_times_display/

// function parse(responseText) { 
//     resp=JSON.parse(responseText); 
//     sortedMembers = Object.values(resp.members).sort((a,b) => b.local_score - a.local_score); 
//     for(i=1; i<sortedMembers.length; i++) {
//         stars = rows[i].querySelectorAll(".privboard-star-both, .privboard-star-firstonly, .privboard-star-unlocked");
//         for(let day in sortedMembers[i-1].completion_day_level) {
//             var compl1 = sortedMembers[i-1].completion_day_level[day][1];
//             var compl2 = sortedMembers[i-1].completion_day_level[day][2];
//             stars[day-1].title = "" 
//                 + (compl1 != null ? (new Date(compl1.get_star_ts*1000)) : "")
//                 + (compl2 != null ? ("\n"+new Date(compl2.get_star_ts*1000)) : "");
//         }
//     }
// }; 
let countDownTime = new Date('December 1, 2021 01:00:00');
let countDownStop = new Date('December 25, 2021 01:00:00')

let dateChange = false;
let countdown = setInterval(function () {
    if (countDownTime < countDownStop){
        let newDate = dateAdd(countDownTime, 'minute', 60);
        dateChange = newDate.getDate() != countDownTime.getDate();
        countDownTime = newDate
        document.getElementById("countdown").innerHTML = customDateFormat(countDownTime);

        if(dateChange){
            dateChange = false;
            //NOT YET WORKING incrementally updating date row to links to progress through puzzle unlocks
            //useful link: https://www.javascripttutorial.net/dom/manipulating/replace-a-dom-element/


            let dateToUpdate = countDownTime.getDate();

            //Update links of numbers
            let linkedSingleDigitATag = createDayATag(dateToUpdate)
            let parentRowElement = document.getElementsByClassName("privboard-days");
            let elementToUpdate = parentRowElement[0].children[dateToUpdate-1]; //index off by one
            elementToUpdate.parentNode.replaceChild(linkedSingleDigitATag, elementToUpdate);

            //update class styling of stars
            
        }
    }
}, 10);

function customDateFormat(date) {// because of stupid 0 indexed months
    return date.getFullYear() + "." + (date.getMonth() + 1).toString().padStart(2, '0') + "." + date.getDate().toString().padStart(2, '0') + " " + date.getHours().toString().padStart(2, '0') + ":" + (date.getMinutes().toString().padStart(2, '0'));
}

function createDayATag(dayNumber){
    let linkedSingleDigitATag = document.createElement("a");
    linkedSingleDigitATag.href = "https://adventofcode.com/2021/day/"+dayNumber;
    if(dayNumber<10){
        linkedSingleDigitATag.innerText = dayNumber;
    } else {
        let dayDigits = dayNumber.toString().split('');
        const lineBreak = document.createElement('br');
        linkedSingleDigitATag.innerHTML = dayDigits[0] + '<br>' + dayDigits[1];
    }
    return linkedSingleDigitATag
}

/**
 * Adds time to a date. Modelled after MySQL DATE_ADD function.
 * Example: dateAdd(new Date(), 'minute', 30)  //returns 30 minutes from now.
 * https://stackoverflow.com/a/1214753/18511
 * 
 * @param date  Date to start with
 * @param interval  One of: year, quarter, month, week, day, hour, minute, second
 * @param units  Number of units of the given interval to add.
 */
function dateAdd(date, interval, units) {
    if (!(date instanceof Date))
        return undefined;
    var ret = new Date(date); //don't change original date
    var checkRollover = function () { if (ret.getDate() != date.getDate()) ret.setDate(0); };
    switch (String(interval).toLowerCase()) {
        case 'year': ret.setFullYear(ret.getFullYear() + units); checkRollover(); break;
        case 'quarter': ret.setMonth(ret.getMonth() + 3 * units); checkRollover(); break;
        case 'month': ret.setMonth(ret.getMonth() + units); checkRollover(); break;
        case 'week': ret.setDate(ret.getDate() + 7 * units); break;
        case 'day': ret.setDate(ret.getDate() + units); break;
        case 'hour': ret.setTime(ret.getTime() + units * 3600000); break;
        case 'minute': ret.setTime(ret.getTime() + units * 60000); break;
        case 'second': ret.setTime(ret.getTime() + units * 1000); break;
        default: ret = undefined; break;
    }
    return ret;
}

function parseMembers() {

}