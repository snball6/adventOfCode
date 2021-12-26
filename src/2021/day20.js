class HelperImage {
    constructor(stringArray) {
        this.infiniteSpaceFiller = '.';
        this.lit = 0;
        this.pixels = {};

        this.minY = 0;
        this.minX = 0;
        this.maxY = stringArray.length;
        this.maxX = stringArray[0].length;

        for (let y = 0; y < this.maxY; y++) {
            for (let x = 0; x < this.maxX; x++) {
                this.pixels[y + ',' + x] = stringArray[y][x];
                if(stringArray[y][x]=='#'){
                    this.lit++;
                }
            }
        }
    }

    get(y, x) {
        let value = this.pixels[y + ',' + x];
        if (value == undefined) {
            return this.infiniteSpaceFiller;
        } else {
            return value;
        }
    }

    set(y, x, value) {
        if(value=='#'){
            this.lit++;
        }
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

function calculatePixel(algorithm, surroundingString) {
    let binary = surroundingString.replaceAll('.', '0').replaceAll('#', '1');
    let dec = convertBinaryToDec(binary); //day 16's parse int wrapper
    return algorithm[dec];
}

function countLit(algorithm, img, iterations, prod) {
    let image = new HelperImage(img);
    // consoleLogFriendlyDebug(image);
    for (let iteration = 0; iteration < iterations; iteration++) {
        let nextImage = new HelperImage([[]]);
        if(iteration%2==0 && prod){
            nextImage.infiniteSpaceFiller ='#';
        }

        let buffer = 1;
        for (let y = image.minY - buffer; y <= image.maxY + buffer; y++) {
            for (let x = image.minX - buffer; x <= image.maxX + buffer; x++) {
                //for each point with a buffer of one to allow for infinite size
                let surrounding = image.getSurrounding(y, x);
                nextImage.set(y, x, calculatePixel(algorithm, surrounding));
            }
        }
        image = nextImage;
        // consoleLogFriendlyDebug(image);

    }

    return image.lit;
}

function consoleLogFriendlyDebug(image){
    let arrayVersion = [];
    for (let y = image.minY-4; y <= image.maxY + 4; y++) {
        let row = '';
        for (let x = image.minX-4; x <= image.maxX + 4; x++) {
            row+=image.get(y, x);
        }
        arrayVersion.push(row);
    }
    console.log(arrayVersion);
}