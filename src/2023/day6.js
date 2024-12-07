function winRange(time, distanceToBeat) {
    //Known points: 
    //start: 0,0 - held button 0, no speed, 0 distance   
    //end: 7,0 - held the entire time, no speed acrued
    //max: (7/2), (7/2)^2 -                        

    //thought about showing my work, but it's all on scratch pads. The result being:
    //curve line is y = -x^2+t*x where t is time of race
    //solving for y instead (so I can check when y is > or < the goal)
    //x = (1/2)(sqt(t^2-4y)+t)
    //much credit do to wolframalpha for helping me remember how to maths...

    console.log(time^2-4*distanceToBeat);
    let aboveMax = (1/2)*(Math.sqrt(time^2-4*distanceToBeat)+time);
    console.log(aboveMax);
    return aboveMax;
}