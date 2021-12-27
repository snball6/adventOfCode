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

let versionTotal; //beware the global variable...

function totalVersionNumbers(hex) {
    versionTotal = 0;
    let binaryString = convertHexToBinary(hex);
    parsePacket(binaryString, 0);

    return versionTotal;
}

function parsePacket(binaryString, index) {
    let binaryVersion = binaryString.substring(index, index += 3); // note substring has noninclusive ending index and I am incrementing my index as I do this
    let binaryPacketType = binaryString.substring(index, index += 3); //noninclusive ending index

    let version = convertBinaryToDec(binaryVersion);
    versionTotal += version;
    let decPacketType = convertBinaryToDec(binaryPacketType);

    if (decPacketType == 4) {
        let literalBits = '';
        while (binaryString[index] != 0) {
            index++; //increment passed the 1
            literalBits += binaryString.substring(index, index += 4);
        }
        index++; //increment passed the 0
        literalBits += binaryString.substring(index, index += 4);
        let literalValue = convertBinaryToDec(literalBits);
        return [new LiteralPacket(version, decPacketType, literalValue), index];
    } else {
        let lengthTypeId = binaryString[index++];
        if (lengthTypeId == 0) {
            let totalBitsInSubpackets = convertBinaryToDec(binaryString.substring(index, index += 15));
            let operator = new OperatorPacket(version, decPacketType);
            let bitsAfter = 0;
            while (bitsAfter < totalBitsInSubpackets) {
                let subPacket = parsePacket(binaryString, index);
                bitsAfter += subPacket[1] - index;
                index = subPacket[1];
                operator.subPackets.push(subPacket[0]);
            }
            return [operator, index];
        } else {
            let numberOfSubPackets = convertBinaryToDec(binaryString.substring(index, index += 11));
            let operator = new OperatorPacket(version, decPacketType);
            for (let i = 0; i < numberOfSubPackets; i++) {
                let subPacket = parsePacket(binaryString, index);
                index = subPacket[1];
                operator.subPackets.push(subPacket[0]);
            }
            return [operator, index];
        }
    }
}

class OperatorPacket {
    constructor(version, packetTypeId) {
        this.verison = version;
        this.packetTypeId = packetTypeId;
        this.subPackets = [];
    }
}

class LiteralPacket {
    constructor(version, packetTypeId, value) {
        this.version = version;
        this.packetTypeId = packetTypeId;
        this.value = value;

    }
}

function calculatePackets(hex) {
    let binaryString = convertHexToBinary(hex);
    let packets = parsePacket(binaryString, 0);

    return findValueOfPacket(packets[0]);
}

function findValueOfPacket(packet) {
    switch (packet.packetTypeId) {
        case 4:
            return packet.value;
        case 0:
            let sum = 0;
            for (let i = 0; i < packet.subPackets.length; i++) {
                sum += findValueOfPacket(packet.subPackets[i]);
            }
            return sum;
        case 1:
            let product = 1;
            for (let i = 0; i < packet.subPackets.length; i++) {
                product *= findValueOfPacket(packet.subPackets[i]);
            }
            return product;
        case 2:
            let min;
            for (let i = 0; i < packet.subPackets.length; i++) {
                let subValue = findValueOfPacket(packet.subPackets[i]);
                if (min == undefined || min > subValue) {
                    min = subValue;
                }
            }
            return min;
        case 3:

            let max;
            for (let i = 0; i < packet.subPackets.length; i++) {
                let subValue = findValueOfPacket(packet.subPackets[i]);
                if (max == undefined || max < subValue) {
                    max = subValue;
                }
            }
            return max;
        case 5:
            return findValueOfPacket(packet.subPackets[0]) > findValueOfPacket(packet.subPackets[1]) ? 1 : 0;
        case 6:
            return findValueOfPacket(packet.subPackets[0]) < findValueOfPacket(packet.subPackets[1]) ? 1 : 0;
        case 7:
            return findValueOfPacket(packet.subPackets[0]) == findValueOfPacket(packet.subPackets[1]) ? 1 : 0;
    }

}