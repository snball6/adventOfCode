describe("day6", () => {

    describe("Part 1", () => {
        it("Sample - it should get the start of packet marker", () => {
            expect(getFirstMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 4)).toBe(7);
            expect(getFirstMarker('bvwbjplbgvbhsrlpgdmjqwftvncz', 4)).toBe(5);
            expect(getFirstMarker('nppdvjthqldpwncqszvftbrmjlhg', 4)).toBe(6);
            expect(getFirstMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 4)).toBe(10);
            expect(getFirstMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 4)).toBe(11);
        });

        it("Actual - it should get the start of packet marker", () => {
            expect(getFirstMarker(actual, 4)).toBe(1538);
        });
    });

    describe("Part 2", () => {
        it("Sample - it should get the start of message marker", () => {
            expect(getFirstMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14)).toBe(19);
            expect(getFirstMarker('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toBe(23);
            expect(getFirstMarker('nppdvjthqldpwncqszvftbrmjlhg', 14)).toBe(23);
            expect(getFirstMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toBe(29);
            expect(getFirstMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toBe(26);
        });

        it("Actual - it should get the start of message marker", () => {
            expect(getFirstMarker(actual, 14)).toBe(2315);
        });
    });

    let actual = 'zdrrgvvntvtzzssgcgqqbvqqzmqmrrprjjpmpwpvpqpwppfqqnvvjbjcbbrnnvwnvnqnncvvqnvqvmmdzdrzzjmmfzmztzczzjpjllgzgnzgznzpzhhvppmjjtbjbjgbjjpfphfhthpprbbzzhbzzvjjsttjwtjwjllzplzlhlqlfqfvflfvlvqvqsshccgffvzzqllpjllcqcpqcpqccbgcccvwvlldclcppcggjhhtbhbrbwbllldndhnnmnmcccvfvtftrfttlhttgltlflgflfrrftrtrgrmggbccnvccvssbmsmnsmszmmsbshbhpbhhtccnmngmnnntznttwnnmffdccrhrshhzhszslzlqqqsqhhrrvmrrhrmhrrdppshpssjhhhtzhzpzzzbrrqqhhtltgltgghlhpphmmbllczcgcrgcrcmmdjdvdssdbsshqqrprhrfrqrlldggpglplqlgqqvfqqwhqqclcwwbrbwbzzmcczqqpzpzhpzprrsbsfsgscsvsdsnntssgzsgzzdpdmmvnnnnfgngnqntnqnhqnhnrrdvrdvvhcvhcvvmffmccdndhhpghgwwdpwwsbwwwcpchcmmznnvtvfffzgffmfdmdsdrrsjjblbglgrrnllzrlrnnrzztnnnqlnlhnllnflllvjjdpdnngfnnlzlrzllrnlnznszzhhvggbqqcmqqvhqhhzfznnhthlhfllqwwghwgwnnnrcchffqnqjjmhjmjsjrjjrwjrrhbhfbhffprprhrddscddbbrzrvrcclttppvrvrlrplpffdwffwrwvvmssgjjbttpgpfplffgfwfnnmhhwghhpfptprtrzzwlwnwmwzzbmbrrdjrjzjpzpggftffglgzzdgzgbbzwzrrdzdhdbhhfppvrvrrrshrrzwwhjwwtjjhbhgbbhjhmmcvvchcfczfcffgttzbzssdqqjwjbbhthgthghthghmhlmmjwmwccfftnnddlffntnhtnhhnnldlhlthhqvhqvhhcgclcmmcnnwnqqzgzczccftfzfrrnhnjhhnlljdjhjghhchvchvchcphpnnnznhnjjlmjlmlbmmsbmbnnmqmvmhhcrcvvqffjpjzpjzjnnhsnhsslqlqvqzzmffdtfdffjrfjrjcjzjnjfjdfjfvjvddtntcttcwcqwqlqjqlqrrzccsgsgffwddrldrrhlllgppghphddqttdwtwnwlnlccmwwfnngvnvddwvwttjjsgghcchjjnvnccjljcljcljjjrttdstsmsggdbdbnddqpddbqqpbpdpgdpdnpnbnffcfrfrfhfcfgcfgcffvjvccgscshhvthvthtbhtbbmppjjrjqrjqjmjzjjjvffmbbfppndngnrnsnnmbbcmcddfzdfzdffqssfwsfwwpzpfpmpqpjqjwqqzwqwvvsddvrrdsrszrrrjqrjjqtqftthhmpmhpmhphggjsggjpppmhmzzdllcscpsswsqqjsqsvvlffmwgtmbthswfqqppsdflzhmdbcnzgdrlzccsdtptgmhfhwtbwqdhptvsvgdfdsmvsrtjjthchmbrjpmrwhgrdllphnfhrfdlgqmbrtdwcmcbphrzthflcswnhqmfhwprbgczbmsmjvbwjftgfqhbhqgzsvcpplzgctzggfljbmhsmwcwltllqgqtvhlbnpzpccbsbhpvhttdjvcnbqhlccdcclwfvcqnttlzzhqpltnnzzlnwtgppwfvmjhtmlzbzdrgbpbbmwlczdwmfhsvpnhpcqwzlnzslncdcqblvlpqfzhhszzrssvhglsllbbmjngfjlpjjvjbzbrlrmwfvzbgtzvcrshtsswhjrjvtwwbrqvtqnndndthfgfcnprpwwtffcvmllngsftrnwnjmwfljjtwnqqmphdlctvdpnsmbrhmljzmfvhcpblmwjjgqvslgslpbjzqzgzpwgssljztmztbwbqlfwrwgvwrjzvpvncqpdspgpzsjnvcrtzpnspvmnvssbgmsbpdsmcvjmtczczzsjcqcfhvcmsbsjfsssvzpvrtmmgptpcsrjslgvclflhjdpwtsmrgjjcftjmjrzrpwqlqvrqjpflbgrfhswbpcnvrrwpzqtzmqjspqqpwlcwgwgclpnwhhrrmzvvnjrjgjfqftlwjrggjgsdfvqhghmshczbbcvrmsgfdqhhmpfzqtbqwsmwfnwfwndjtlntzbbhlzlhrlzgljlmlbcwcdzbctlbqjmfpdwfcfnrbztvlwjhgmfvjcclcrwwwwvqshnfthtcccnswnfzlznlfcmcfrrsjqfvrwjvtbrwggzmdglcbzfdflrdqsjhzcjpghdmwhzrshnqqtsrccbhnlqcsclwmnvjpfqjszwrqnvbgmcdsvhntqmmnrdpbtpqwvhztmtjfvdplgzhhgsrnbwggnwzbtzwcsbrftzhvwtrwvcqrbcnqnrcmbmsvlcfbmzfcvqpwsmmfdgssnhghwjlsslmgnrqgpmbhpqzfnvztsjzjqgrzbbdpvtprwdzdszlhpcgwvdfvhtbtpfjnqnpzwplrwnfdpdclwgnrjlzzshhcchswtzrcmrfpgwjvttqfbbsdnctrtnmwqsmnfsgfgplphcrhglcrnrbzvcfrdfhdtsjmnvfwslcntttqzvhhbljzmpmlsrsblhvmvphppdmjfzwfmflcfwwtdfcndqzgsbrcppsngqfnnjtccnmfjqzhdpnnrqvhrmnrwntqrvmlzfrdszhctzjjdwqrrldtqgrztrvdfrpgprqhqrbnmpfzzlprrpqgtqmzshpcdbwgmrqhrvvgwvspqzmsrvprvsclffwhzlvgfgcsjtmnmthwfmdnfccvlbwbcrlsghhpzcvcnffvccsqjtnhhnbwgfjmqczbrfmjtmmbznspmvtcvdllbgrcvtdzpgzcjzqdjpglhbbnbvwztrdhcrcvrpbshwlmdbmpdgzzflglwgfhvngcgpwshfhzsbrmnhrftmcfqdhnmfmdzbzfgggrzchtzrhgtjpqhdglgdhdqzqpmqmtsbbjjgvtrngdvghwdmgnmdlwsvpmldlsjrtwhltfpbmqlngncwspcptphdppdmjfvtnmdrpbwzrdzcqjdnprpcddjqjhpllsrqzdpcpnplmnmwfqjtnfmnwljbsfgwlgjpwdbbqblvsqcvvgmbrhsqjcscsflcfdzbnrflmrpzhzdhzqhgvmtfjpwtfqnclplgwrjtfvrncjlqtqlrrnjsrvpwbrdcppvnjfzdrzhcltpdfgfndvqtqzvvztgzssdsvvvjwrtjmqcchbjmppqzmgwqdvmmdqbcpbmcnjsvjlwmmnvmnlzdsnsjpldgpjgsbqmpcdsvhdfhgpbggqmrdhbhvvpnzdpqtmldmfqdfchzdfgddzgvcdzgcwjlhnzjwhpwlfwhgjthjshqtzbblhflmsfvtwplfpmpndgjmhndqlhcvfhmjmmqgnjstrzqvshzbbsfqwszwccmrcjnmlsplqzwrgrcwqbmrfwljmlqtqztscrhgjdqzhvmhncvssfznpgrbrjvchsgnjjnnqqrqwsqsrgmltvgtjvpztwmsspjtqdwrbftzrbcmdthmztmnqtmmnffqjjzbvwghrsdmbbjsnnhbdcbqsbcdmwqqppcvsndzbfnsgtpptdftrfthdclqrqvmhnddmjzlnfgscfdwjljjgjnddcrzvclfqbdhprttwpmsnzvdgzwmnzznpqhlhhslwgzlczlgvbjbgqdczztzjnswphllncbsqdmbsbqqsltzmmhmhfnngbttvdsmfrpgthwpfdhsstrjssghlrrlhbmgdsvhzvlhhfvtcrrhlndgrjjcgmjwgnjtlmpmzgqgpnpsvlnthgrvsdfcnmzmthqzfpjdqjbhgmjqsqvvdldrgqwlghdlwqdbfmffgvzmptqhnvbrdbqtcjmsdnjljpbrtcvvnffvztbwfnmtvdbnshlbgvbnljntlrldbwqvqmblnvhwtw';
});