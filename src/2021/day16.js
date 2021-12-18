function convertHexToBinary(hexValue) {
    let binary = "";
    for (let i = 0; i < hexValue.length; i++) {
        switch (hexValue[i]) {
            case '0':
                binary += "0000";
                break;
            case '1':
                binary += "0001";
                break;
            case '2':
                binary += "0010";
                break;
            case '3':
                binary += "0011";
                break;
            case '4':
                binary += "0100";
                break;
            case '5':
                binary += "0101";
                break;
            case '6':
                binary += "0110";
                break;
            case '7':
                binary += "0111";
                break;
            case '8':
                binary += "1000";
                break;
            case '9':
                binary += "1001";
                break;
            case 'A':
                binary += "1010";
                break;
            case 'B':
                binary += "1011";
                break;
            case 'C':
                binary += "1100";
                break;
            case 'D':
                binary += "1101";
                break;
            case 'E':
                binary += "1110";
                break;
            case 'F':
                binary += "1111";
                break;
        }
    }
    return binary;
}

function convertBinaryToDec(binaryString) {
    return parseInt(binaryString, 2);
}

function totalVersionNumbers(hex) {
    let binaryString = convertHexToBinary(hex);
    let index = 0;

    let versionTotal = 0;

    let binaryVersion = binaryString.substring(index, index += 3); // note substring has noninclusive ending index and I am incrementing my index as I do this
    versionTotal += convertBinaryToDec(binaryVersion);
    let binaryPacketType = binaryString.substring(index, index += 3); //noninclusive ending index

    //assuming nonliteral outter packet (based on sample data and first few characters of my puzzle input)
    //Literal value calculation - 
    let lengthTypeId = binaryString[index++];
    if (lengthTypeId == 0) {
        let totalBitsInSubpackets = convertBinaryToDec(binaryString.substring(index, index += 15));
        binaryVersion = binaryString.substring(index, index += 3); 
        versionTotal += convertBinaryToDec(binaryVersion);
        binaryPacketType = binaryString.substring(index, index += 3);

        console.log(totalBitsInSubpackets);
    } else {
        let numberOfSubPackets = convertBinaryToDec(binaryString.substring(index, index += 11));
    }
    console.log("index", index);


    return versionTotal;
}

function parseBinaryToPackets(binaryString){
    let index = 0;
    let packets = [];
    packets.push({
        version: convertBinaryToDec(binaryString.substring(index, index += 3)), // note substring has noninclusive ending index and I am incrementing my index as I do this
        packetType: convertBinaryToDec(binaryString.substring(index, index += 3)),
    });

    //starting on first one
    if(packets[0].packetType==4){
        packets[0].value = literalCalculation(binaryString.substring(index, binaryString.length));
    } else {
        let lengthTypeId = binaryString[index++];
        if (lengthTypeId == 0) {
            let totalBitsInSubpackets = convertBinaryToDec(binaryString.substring(index, index += 15));
            console.log('subpackets',binaryString.substring(index, index+=(totalBitsInSubpackets+1)));
            // packet.subPackets = parseBinaryToPackets(binaryString.substring(index, totalBitsInSubpackets+1));
        } else {
            let numberOfSubPackets = convertBinaryToDec(binaryString.substring(index, index += 11));
        }
    }

    console.log(packets);
    return packets;
}

function literalCalculation(binaryString) {
    let index = 0;
    let literalBits = '';
    while (binaryString[index] != 0) {
        index++; //increment passed the 1
        literalBits += binaryString.substring(index, index += 4);
        console.log('literalBits', literalBits);
    }
    index++; //increment passed the 0
    literalBits += binaryString.substring(index, index += 4);
    console.log('literalBits', literalBits);

    return convertBinaryToDec(literalBits);
}
