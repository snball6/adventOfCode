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
let countDownTime = new Date(2021, 12, 01, 01, 00);
let countdown = setInterval(function() {
    //NOT WORKING YET...
    countDownTime.setHours(countDownTime.getHours()+1);
    document.getElementById("countdown").innerHTML = countDownTime.getFullYear() + "." + countDownTime.getMonth() + "." + countDownTime.getDay() + " " + countDownTime.getHours() + ":" + countDownTime.getMinutes();

}, 1000);