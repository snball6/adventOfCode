function calcSquareFeet(input) {
    let dimensions = input.split("x");
    let l = parseInt(dimensions[0]);
    let w = parseInt(dimensions[1]);
    let h = parseInt(dimensions[2]);

    let side1 = l * w;
    let side2 = w * h;
    let side3 = h * l;

    let smallestSide = Math.min(side1, side2, side3);

    return 2 * side1 + 2 * side2 + 2 * side3 + smallestSide;
}

function totalWrappingPaper(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        total += calcSquareFeet(input[i]);
    }
    return total;
}

function getRibbon(present) {
    let dimensions = present.split("x");
    let l = parseInt(dimensions[0]);
    let w = parseInt(dimensions[1]);
    let h = parseInt(dimensions[2]);

    let side1perimeter = 2 * l + 2 * w;
    let side2perimeter = 2 * w + 2 * h;
    let side3perimeter = 2 * h + 2 * l;

    let smallestPerimeter = Math.min(side1perimeter, side2perimeter, side3perimeter);

    return smallestPerimeter + l*w*h;
}

function totalRibbon(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        total += getRibbon(input[i]);
    }
    return total;
}
