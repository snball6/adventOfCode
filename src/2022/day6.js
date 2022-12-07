function getFirstMarker(input, uniqueNumber) {
    let offset = uniqueNumber-1;
    let firstMarker = 0;
    for (let i = offset; i < input.length; i++) {
        let block = input.slice(i-offset, i+1);
        let unique = String.prototype.concat(...new Set(block));

        if(unique.length == uniqueNumber){
            firstMarker = i+1;
            break;
        }
    }
    return firstMarker;
}