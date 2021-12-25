class HelperImage {
    constructor(stringArray) {
        this.pixels = {};

        this.minY = 0;
        this.minX = 0;
        this.maxY = stringArray.length;
        this.maxX = stringArray[0].length;

        for (let y = 0; y < this.maxY; y++) {
            for (let x = 0; x < this.maxX; x++) {
                this.pixels[y + ',' + x] = stringArray[y][x];
            }
        }
    }

    get(y, x) {
        let value = this.pixels[y + ',' + x];
        if (value == undefined) {
            return '.';
        } else {
            return value;
        }
    }

    set(y, x, value) {
        this.pixels[y + ',' + x] = value;
        if (y < this.minY) {
            this.minY = y;
        }
        if (y > this.maxY) {
            this.maxY = y;
        }
        if (x < this.minX) {
            this.minX = x;
        }
        if (x > this.maxX) {
            this.maxX = x;
        }
    }

    getSurrounding(y, x) {
        let rows = '';
        rows += this.get(y - 1, x - 1);
        rows += this.get(y - 1, x);
        rows += this.get(y - 1, x + 1);
        rows += this.get(y, x - 1);
        rows += this.get(y, x);
        rows += this.get(y, x + 1);
        rows += this.get(y + 1, x - 1);
        rows += this.get(y + 1, x);
        rows += this.get(y + 1, x + 1);

        return rows;
    }
}

function calculatePixel(algorithm, surroundingString){
    let binary = surroundingString.replaceAll('.','0').replaceAll('#','1');
    let dec = convertBinaryToDec(binary); //day 16's parse int wrapper
    return algorithm[dec];
}

function countLit(algorithm, image, iterations){
    return 0;
}