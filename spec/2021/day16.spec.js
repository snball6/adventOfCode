describe("day16", () => {
    describe("Part 1", () => {
        it('should convert hex to binary', () => {
            expect(convertHexToBinary("D2FE28")).toEqual("110100101111111000101000");
        });

        it('should convert binary to decimal', () => {
            expect(convertBinaryToDec("100")).toEqual(4);
        });

        it('should parse a literal', () => {
            let binaryString = convertHexToBinary('D2FE28');
            expect(parsePacket(binaryString, 0)[0]).toEqual(new LiteralPacket(6, 4, 2021));
        });

        it('should parse an operator_total length type', () => {
            let expected = new OperatorPacket(1,6)
            expected.subPackets.push(new LiteralPacket(6,4,10));
            expected.subPackets.push(new LiteralPacket(2,4,20))
            let binaryString = convertHexToBinary('38006F45291200');
            expect(parsePacket(binaryString, 0)[0]).toEqual(expected);
        });

        it('should parse an operator_number of subpackets type', () => {
            let expected = new OperatorPacket(7,3)
            expected.subPackets.push(new LiteralPacket(2,4,1));
            expected.subPackets.push(new LiteralPacket(4,4,2));
            expected.subPackets.push(new LiteralPacket(1,4,3));
            let binaryString = convertHexToBinary('EE00D40C823060');
            expect(parsePacket(binaryString, 0)[0]).toEqual(expected);
        });

        it('should total version numbers_sample data', () => {
            expect(totalVersionNumbers("8A004A801A8002F478")).toEqual(16);
            expect(totalVersionNumbers("620080001611562C8802118E34")).toEqual(12);
            expect(totalVersionNumbers("C0015000016115A2E0802F182340")).toEqual(23);
            expect(totalVersionNumbers("A0016C880162017C3686B18A3D4780")).toEqual(31);
        });

        it('should total version numbers_puzzle input', () => {
            expect(totalVersionNumbers(puzzleInput)).toEqual(889);
        });
    });
    describe("Part 2", () => {
        it('should calculate values_sample data', () =>{
            expect(calculatePackets('C200B40A82')).toEqual(3);
            expect(calculatePackets('04005AC33890')).toEqual(54);
            expect(calculatePackets('880086C3E88112')).toEqual(7);
            expect(calculatePackets('CE00C43D881120')).toEqual(9);
            expect(calculatePackets('D8005AC2A8F0')).toEqual(1);
            expect(calculatePackets('F600BC2D8F')).toEqual(0);
            expect(calculatePackets('9C005AC2F8F0')).toEqual(0);
            expect(calculatePackets('9C0141080250320F1802104A08')).toEqual(1);
        });

        it('should calculate value_puzzle input', () => {
            expect(calculatePackets(puzzleInput)).toEqual(739303923668);
        });
    });

    let puzzleInput = "4054460802532B12FEE8B180213B19FA5AA77601C010E4EC2571A9EDFE356C7008E7B141898C1F4E50DA7438C011D005E4F6E727B738FC40180CB3ED802323A8C3FED8C4E8844297D88C578C26008E004373BCA6B1C1C99945423798025800D0CFF7DC199C9094E35980253FB50A00D4C401B87104A0C8002171CE31C41201062C01393AE2F5BCF7B6E969F3C553F2F0A10091F2D719C00CD0401A8FB1C6340803308A0947B30056803361006615C468E4200E47E8411D26697FC3F91740094E164DFA0453F46899015002A6E39F3B9802B800D04A24CC763EDBB4AFF923A96ED4BDC01F87329FA491E08180253A4DE0084C5B7F5B978CC410012F9CFA84C93900A5135BD739835F00540010F8BF1D22A0803706E0A47B3009A587E7D5E4D3A59B4C00E9567300AE791E0DCA3C4A32CDBDC4830056639D57C00D4C401C8791162380021108E26C6D991D10082549218CDC671479A97233D43993D70056663FAC630CB44D2E380592FB93C4F40CA7D1A60FE64348039CE0069E5F565697D59424B92AF246AC065DB01812805AD901552004FDB801E200738016403CC000DD2E0053801E600700091A801ED20065E60071801A800AEB00151316450014388010B86105E13980350423F447200436164688A4001E0488AC90FCDF31074929452E7612B151803A200EC398670E8401B82D04E31880390463446520040A44AA71C25653B6F2FE80124C9FF18EDFCA109275A140289CDF7B3AEEB0C954F4B5FC7CD2623E859726FB6E57DA499EA77B6B68E0401D996D9C4292A881803926FB26232A133598A118023400FA4ADADD5A97CEEC0D37696FC0E6009D002A937B459BDA3CC7FFD65200F2E531581AD80230326E11F52DFAEAAA11DCC01091D8BE0039B296AB9CE5B576130053001529BE38CDF1D22C100509298B9950020B309B3098C002F419100226DC";

});