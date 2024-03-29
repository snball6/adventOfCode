describe("day3", () => {

    describe("Part 1", () => {
        it("Helper - should find the common item", () => {
            expect(findDuplicate(sample[0])).toBe('p');
            expect(findDuplicate(sample[1])).toBe('L');
            expect(findDuplicate(sample[2])).toBe('P');
            expect(findDuplicate(sample[3])).toBe('v');
            expect(findDuplicate(sample[4])).toBe('t');
            expect(findDuplicate(sample[5])).toBe('s');
        });

        it("Helper - should find the item value", () => {
            expect(getItemValue('p')).toBe(16);
            expect(getItemValue('L')).toBe(38);
            expect(getItemValue('P')).toBe(42);
            expect(getItemValue('v')).toBe(22);
            expect(getItemValue('t')).toBe(20);
            expect(getItemValue('s')).toBe(19);
        });

        it("Sample - should sum priorities", () => {
            let actual = sumPrioritiesPart1(sample);
            expect(actual).toBe(157);
        });

        it("Actual - should sum priorities", () => {
            let actual = sumPrioritiesPart1(input);
            expect(actual).toBe(7811);
        });
    });

    describe("Part 2", () => {
        it("Helper - should find the common item", () => {
            expect(findDuplicateAcrossBags(sample[0], sample[1], sample[2])).toBe('r');
            expect(findDuplicateAcrossBags(sample[3], sample[4], sample[5])).toBe('Z');
        });

        it("Sample - should sum priorities of badges", () => {
            let actual = sumPrioritiesOfBadges(sample);
            expect(actual).toBe(70);
        });

        it("Actual - should sum priorities of badges", () => {
            let actual = sumPrioritiesOfBadges(input);
            expect(actual).toBe(2639);
        });
    });

    //alterations outside code - column select to make arrays of strings:
    let sample = [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg',
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDw',
    ]

    let input = [
        'DMwrszrfMzSSCpLpfCCn',
        'RMvhZhQqlvhMvRtbvbcPclPlncddppLTdppd',
        'tVMQhFtjjWmsFJsmsW',
        'trRtvNhfJhSzzSTFVhQQZQhHGphP',
        'CnLMBWLwDMgMcwwdngdHGPVTQGpTHZdGPGpd',
        'LLDqcDgwqCMnLWqtvzrzbbtJqPjJ',
        'wQQwHNQLmbWQbQRHwHNFBbwqPfjqlzRMGRqzpSfvPlzplM',
        'nCtGCZZtsGsrtDMZpfMpSlMlvlZq',
        'cJctJCgVJsCJnDTsCthGhGLwBWBbbQmLbgQLQQdWbbbQ',
        'ZWnNlTNTnhhQQlDNdmmpwrrrqBwjwjZd',
        'GzvlVRSfvMVMvGlSpdCCdjmfpmBCdsqB',
        'bzlFlLzJWLHHttLL',
        'SmzFhVDzrmSrszVDVhSVbhZcCZdfZNcnMfMbZnNN',
        'PTTRGqwqTqWRwLgTLTZGnCbZbNddZCCtMcNs',
        'sgPqPqgJgWWqjjwgwLLVFBFSVmvmBBrmJJDSvp',
        'CBccfSBhcSBddfgtlJmmmwmPRwmh',
        'FpTzzGWHWprgDtJlDZDPFR',
        'HbbTzWnTrnWtCbQBbQqQbSjf',
        'fPHspCjgwZggSvZQ',
        'RrNhzFZFcNzFLNLNwQlSlLnv',
        'TRFrcDVrrRmrhFRZzVrczqhRpjqjsssCpfHjsCdpsPfpjCMC',
        'ZBnBTMVTSbGbTVTGbCPgqsgPtHtgCcPtBB',
        'ldDrmnnNrzhdhfgcsHqcsfCcsCHg',
        'zFdrzNdzQNDDhFdWldDrJTbZTbLZJVVVpMVWVnLS',
        'pLnpQNhBbnWvbsWm',
        'FrFwjlTPTdTqqrDZWbvmZbpSgmJWvbgS',
        'RqDqRrdGFpGRFrFFdTNzCcHcHLHBzQCcNNGN',
        'bvRCtbtCPfSGtCcvCbPNlglqgqlGZMzTgnlZnq',
        'hrmWWFspsHWrzNwTnFlTMTwFFn',
        'HpjJDWBQmmQdRffbPtSzdJ',
        'GpHjFsjMFpCpMWjMGCqWmmqrWQtmthdbDbbD',
        'fzgLTJwJPSgJgzSzPfhmqmQhQHzQtbQDrrmq',
        'RNlBRwHfRJHLLfHTwLSBppNGvjNMFFCVpVFcvcFC',
        'SfQnfSFHfnvMtQQSnHJtMffsdTlZtdZmtllmTlmlRRbBRLDb',
        'hrwhWWwqzPrcCzwwzmPlRbdmlQDTPPBLDl',
        'CpwCzrwGzNCWrJnMvpMvfJVFvQ',
        'rCRPpgSggcpqrhPrCDDTLsMLDSDGLTMGVs',
        'HdvzmRWmlHzwvWHvRHRvHJbDFsdMssQQVGMDTMDLVLLFLT',
        'JBlBnnWBJlCqZRRqRBpr',
        'GtZllZDlfDpGHZtZBGBZpDmzQzzCSVVFHmmmsPCQWWSS',
        'JvFJJrwvNNcJTnbrTRNRSCzqwSsVPCPQqmCQszVm',
        'JLMnTbLnMgBhDFDf',
        'lffDhtgDJzCJNGGTzWTRRnRvBv',
        'qpbpdwqZwqZSwMPSqdQcQmTRnWvnBnRBQBtVnTvWmB',
        'SccbbwSbZbFPswpSZtgFlClLhgChhhNfJlFj',
        'ClmCjCJBjwBVwJGjlGNFJlVMHSrfpDpTfrHMcHTppQVrHp',
        'dRLZWLvWSHmTccWW',
        'ggtqzmRZnmhghZhZghntdqsvBbjlbNFFBPwNNJNNCBlwPGBz',
        'HZmsFZQpvZsWCZQvWrghGrhtgNzdHddHGh',
        'fWSbqWDJVwcSccNzrNhcBtGcgG',
        'VqVfTJnbWjqTSqbwDRfRvQvFpFLRpZsssQsCQZ',
        'FpFZNfplSTJmbZzddGzhDrWh',
        'LqLPPQjLLRMPqvjLLHQrLqrRWdzHnGhdthttGGbbDWhDDdWz',
        'sMLMgvRLgscrLrRQvwmTNNfpNplglplfmp',
        'MPVBmCmWGWRPPqRhLcnjcvjjcpjMvp',
        'tzwrwsJlrldJsrsrTtrzrTtSNnLJSShnjcncvnvqnSFnqN',
        'rswrzsbdwDHHbWZqVfWV',
        'dVmmMTmBPTrCBRMCqFHSWFFHWzCvCz',
        'jNqfGsDqtsjGjQjDlcJFFFznFtzznvtFpFFp',
        'fNNhgsDcfNflqchVRdgVrRPRdVTRRb',
        'HJPLwgLvjttmgHJFjwHgtlsBbNbbNsPpblspTllThT',
        'MzmcRRrdDMVTzbhNNSszhl',
        'mCDDVqdVcdDrqfcCnrFwtGwvngwvtWJtFjWW',
        'dFDpmttBlvNNgWlglNDBFttmTGHTcSSJJHHnMsJsGGSdqcJj',
        'zLbwMLVQbQRwVsJsSHSsHcJqbj',
        'wfVZLPzfZZmpMZZMBl',
        'PZHZMJSTBWHNWSHzVnhhfnhThhpnpC',
        'jFdBBtrFjpfnjfnf',
        'ccGrbblbGRDQMlvmQBvmBl',
        'PCCTsnbPbHDnlDfDNB',
        'rMjQltgSqtvMjScQggjfVVzBzFHzGfVGDLGBqB',
        'vdtrMSttcdwcpSQSdglMrtWRRPJZCpsRZJmWRRWChWPh',
        'pWzbsPCCPPpbptSMCJJwBQQGQt',
        'cDDmcTTRRqzFRddVTSJwMShMtBwhwQMDwv',
        'HldqVmVlZdLTcmRFdrngNNzrffjWpPLggP',
        'JPqvjJmmqvSLmPtpZdcftdmtfdCC',
        'swwhDRwBBHjFFBtBfZ',
        'RRzNQDwznDsDwWJjLNlrSPLSTr',
        'VQmdRLvDlmqZdFrBBJdW',
        'CMstGsnHnHGGMrMZwMpwBSbW',
        'GnsshssNfjtsnggnHCGhjtmfLQQczllvDRVTTQllQWlQ',
        'dhbNbswbwVdNtVdstBtgbNQTBCCSFTmfmMFmfRqQmmQM',
        'HFljLrvZfMQQQPvm',
        'WrpznLZZrnplpWbgdFcFsNzszgst',
        'LjddfTlMccnBfDQBtBQb',
        'ZRSNchHwhNNCHNSWPQFFFHDBBtnQDH',
        'CNpZshSZgpwJmpdLMlplMc',
        'bTmTFmqzgbBntRVsFvVwcv',
        'CZfMrlZLLLMlfPZRLRHGstnjGwtvGcsSVwtcSGvn',
        'ClZpMLCRMZMrHMLmWpqQBpzpgQzmbg',
        'jDmSSGWDDdWdSqqDDqCqpJzqRRqpJnRsMRcMzM',
        'lPgNPvPrrgNrPhNszFggnRzccbMJgz',
        'ZQTHQvQTZPrrQlBBrNvQZZGtTtGdsVCGsCTLLGDmLsjt',
        'rbCfBrbsvQqRFZRNZC',
        'HLSTcwqwZSQFFgRZ',
        'wdDwjpMHqJDTMTdqjlfBvGBhsbfhbsnb',
        'ZhZcHHHlhgchHhlCZZhLCCbGdrsBBGPNBjGbsjNNjnJnPn',
        'wtJqqwDqQQMQFqSqTzwzVTBnGdsjBdnMdPGBBsBdnrjr',
        'RVzJzmSVZmLLWpCc',
        'gdqjQQrlhhQlQrhsnjjhLgmmvmHBBmTmZRsHJzTBHRJv',
        'NwNnGNbGPbmTGpJzppBG',
        'nDnVDfMDrQqQStgM',
        'MLbgbppMMgLmHgQttGQJgJrBShwNShWBBSNNrwNqNN',
        'GnTFlzCVVwPRrVWhSw',
        'GnDDdvdnZDTdnGMsHbbttZgttLbc',
        'mdmPmjClrTzqttfm',
        'cpFnSbcQQsqNNtqWJzHS',
        'QFpcMMBcZtLpQBjVjZhlPjjVlwvw',
        'spVsPjTZZMpZMVLDjmdSQJCLJSmLzdJQdl',
        'HhRnNrqwMhNhnqnHwGNRFBNBrzSCSdQmQCdddbrQSSclSSbQ',
        'nFNqGRvqBfjMvTssfZ',
        'FjjzjnpFqqzFFqgFSZjBhHfHhnHRDDwfdTdLfD',
        'MmCMGCsMWbtJrtCWCbmsmWWhdLGGwRBwdfdLhdTLhHHTBd',
        'bJmtrRvRjgzFFvVq',
        'RWwWmVQGMFGmMGVCVWRRZSBgDdSdJGlSJpcBGGSlpJ',
        'HHhQThnjBDHfSBlS',
        'bPhNjbsssQzFNQqWmz',
        'FTDtrjqwwqGtDbGnfBlcnLcWBZwlWn',
        'mMhRMvJsJvJnMHCvHmhLZLQlhWQBBfPfLPBZ',
        'HRCCsdNdvNmCvggFStbzjbGSSjjn',
        'sLGddsvvcZmLvrLMGcMsVnTTlqlHCsTHHVVgVt',
        'wRbfJPbpNRffRJMBhpDntTCHFNVgqllFlqggHC',
        'DpfbPhRDJPMJppJwzfpbbDGSjrGZvdccQdjGvQZdvrLz',
        'wTwLNLVTqnLMsBwfMsJmCj',
        'JhlGvcdJhSFvFvvvMfgBpCzjzdCfsMMs',
        'DSlPPJSGWrDcFPhtFhWJZHQZLTQVnRWRbHbZHQQT',
        'TmTgTrPDNLNVlDrmlbgNmrSSGbzjZGMvjpZjvvphWMzW',
        'QtBfdfQcdfHtZcnZnGZzchnp',
        'HQHwRBGfBCGBtsrCNPDTmTlNLr',
        'bfNhjhNJDWhlWhlRRR',
        'SsscnHgnSnZnltqqfWRWrzZv',
        'cnfTMfmMnTnmFGsnTVLLLpQJbpbbjpdTdN',
        'BqwZzqRQQRRPSlFRQDDwdfWwhJphnfgfnpMdJfdM',
        'rcTLrcrvDDChWJhfpTgTJh',
        'DHGbGNVCZStGqSqS',
        'dlfdRNNfVdLwrRnwdwRmhLFsbsJJgLqbgCBWBCsW',
        'PHDppMPMHHDPzmBBCmWJqCmbJD',
        'HzzZHmZzQcNdRRdZwddr',
        'wrlshslPsSRfvrQvwbrslCDghtDgCVhDhBVJCFHddt',
        'mZnGpWpWzGTMqnFqDqJNDNFJVJqH',
        'LjpzGcjMGcTzcmmznWSRsfRPfcrbFQcfrwcv',
        'rWBmmmtNmmtBbtlwnhJJVZbw',
        'FsRcjGdLdvFslZbQJZwQps',
        'GHFGvMccFPjgDNbmWWBTTHNz',
        'GhHzmhmwlpbltGBmBmsZsBZsfCWC',
        'rgrcCCPdsWBgNVBD',
        'RnRMdQPMCqndSdQdcQhblpLLwhJbbpzGzwpS',
        'NNQtStFPpJwhRbRzRbqpZZ',
        'jLnmdJrrdDTdbgWbTbRW',
        'JHvnMCmDnMnMljLCDmMLjHNFGGNBPVtQQFtSNFQtPQBv',
        'BFbBRllFZJnPVJbV',
        'GpGHwgzcLhDcwttwthzzhHcPTjZjMgMVZjgZTMmTnMZWJVJm',
        'GccwhqcDtlrPqQrRNQ',
        'gWHWLgHBHQdFhjGGThTQhR',
        'pZsSMpZMJJSzMszzzqclpfjvrvvcRGGTcTVhbVvRbTGTRG',
        'lnMwsqZqsslpjlSMSsffZqqJBgHNNPNDWdLLgdDgdLHPWwCw',
        'qfNvBCBfBqfNMBqCZZfcnmnvtwScpwFSpSsSwt',
        'HzdVzLWPPGGDdnsswnztsRsnmn',
        'QddWVQgJPPHJTJbjBtNTTq',
        'DdRDDPRGGPGccfcbJwsbJWzsnznlLLWzWTLWhVVVVS',
        'CvCrNCqgFqvmqNZFZqqZvpWlVrlVhlhnTLShlDWnzVBD',
        'jvqpvpvpQNCQQCZZmmNgZfdGddRjJDPRMHcHJDHPJf',
        'ttdtBtPPMqWMdgPPBbVGWfTGTTzSVLfVrzCS',
        'ZpDpvRpZDDcmmjmZfLSrwzRnSVSnwTTR',
        'ZvQmjFVHJFDcQjDlZcDVHdqMNtqNBPtPJtbhhbdbts',
        'dGdwwLLpgwgssJpgssNhpJlnbfjnzFfcbfttGjzjlntf',
        'VQvDvHVVQHrQHDCZVBChrHFtzffnfltFFtncnvFtllMl',
        'VBShSqDVRVSTmppPwwsP',
        'fTFDTLNNzlcNrmDcrMDTFPwCSsbCbPPsnCPwLSPvbs',
        'ttQqhJtBRRGnvgHGnlSnbl',
        'hZBJlQBRjVRBRjhtRRMNFVmFmfDNrfWcFVmD',
        'mcTZFBFmqBjmBgPtCtPprmssStCP',
        'LWDQNqDJfQNJddnWfzhfsPRVppVVsSptftpVMS',
        'NDGnJDDDbzddWdNbGNQQLQbqqFBBFcjlZBlHjlZHGBTvZB',
        'PwDzvphPwVwWBqLLwnJWTq',
        'jdCGCgjmllCrmmlmjrbgmRdgJSSJJFLSSqJfLnqLLLbWffLB',
        'mRdjcMHgDpZhDqMZ',
        'cqLjhhrwZwJbBqZhMwbZZdGWdGSllWFvLFGQdnGFQG',
        'gHHVzzppRVggcgpcGWRQRSvdSvvGWvll',
        'HmNNHtVggHsHPtrhJsbjbwCrCqJc',
        'zqPvzLVvzFFQZzWpRLlmHRDHmRCHDH',
        'dNjnJGGrGdqqMprRlpqB',
        'GsgtjhSsSvvSFqvP',
        'pVrfzzjrjWVWTWjrNZvnJSJZqnnqnpSZZS',
        'bdQVQPRPDdcbRGPFddRVMVlZlMlBqSBBZSvSZwnwvJBS',
        'bFbcFbCPPCbbVHCCdVgWfrzjmWfrWrNWgHfT',
        'JgJqLjjjVGgdqGDZGzlGRStStT',
        'PHrHccmrMrTSMVStRtRR',
        'HWPWffNsrppfPWNsVFsmPNCJwwjdJdvdvnJwghBLJLpdLJ',
        'HtHvcnDSDgDcDHtpLrvwjwjfZMjffw',
        'CPWzdJdqVdWZpnLdwnrfdn',
        'GNCNmTQnPVRRglSlHsSG',
        'FJdhjTPbdPJjTPjTjPtSLsSBWWRcCvCvsBWztc',
        'MfGgrHMDDpMnZGDLCRLScCsBlgWvzB',
        'HnmpmNNHGZZpZZrnMPFFbNCNbFdTPVFFFN',
        'TJrrrJQTqJqmTltfRrgfgtgFFg',
        'jLRzBvBjjcnFBNwWlgBZFt',
        'RMjMCGpGzGznzhRmmPPDPsmMmPQmJs',
        'BZqwQCQZGZcVBczqBHtfbbbWfTqNWfMfPNqW',
        'LLpmFjpvpHrvRFSRDRMWbdbtfPWPbjtMgMtW',
        'SDnrpDprDFnQhZCVnhcH',
        'WTsBBQTfQQTTbJBbZbnfTsRFwFrjwjFlrRqvrrlqvWRV',
        'pGcShcGSLNJNHCLttlpllRFgpRFlRpgRrg',
        'GzcMLScSGJGtCbsbQfbZbMBnBn',
        'NGCLGjVjZjQwTGJRQdWM',
        'cFTcvSrFmnnpSmndMswsRMJWRwMHps',
        'rrrhhcTznqvzmcccvvmhgzqDgbgttlDtjjjlfVCfZCjZZV',
        'ccDMHddWNDnnNWMMzdHJJmSQhfQZfvQZflrZQfdVfLLZ',
        'bgBFRTwFtgqCgpRGFpvpVllZlhjrrlVlvj',
        'wtbBGPTPtRTgbCTBqFgGRwFnsWJnmDMsWMJJMzHPhDmJzP',
        'zsbsMtMMdnffBbzNsBtCCWLpLrCrcNLVDWVVcD',
        'TmPhJRvwmjmhFJwjjRPFPTvJGVCcCGBrDpccpDrCrWCVDVFZ',
        'QvSTvBhqwjPmwddHgtqMnllzMl',
        'gftDtqnpqzGZsFcthbtZ',
        'VlNPrBrRNrLBmdRVFCcGCZTFCsTCsbLL',
        'VdldlljlSNHBsSlqfgqMDDvzpHJHWg',
        'tQDLvFLcDrWrcnsHffCGgGHG',
        'ZRPTPJqhMZJZVllRZJPVZPRHnhCnfdssnCznzGhdgfwCHn',
        'qPqlPVlTlSqbZZVJplqlPDmrjWFtmLtFWgQvtmtFvp',
        'zlZzdNRPgGGzsLGCDBBtCDCtSncScP',
        'vWvHWbqjrFMbvrTWcVnQBBBSjLDcQJcL',
        'wfLHwfFqLFbhHvWhMWqwbwwRspssmzgpzGgmmNfmzmRGRz',
        'rPvLrQBvBLsLLdtrgssgZjwFwlnCFMtMFnlllnnb',
        'mNmmzpWHlzjlJMJb',
        'TVSVTWpqRWpSTqNbTVRBPDfLLPrSLrsfQrrvsf',
        'nRjpQWnQnRQzMjRdrtvvPCfmvGtPfMcCtG',
        'TDbrbhNZVbbbbwhDZDhbTTGfcftqcGVvmmcqcJCcCPmJ',
        'NLhrSwgwgnsLsQWljW',
        'JWqVSpGNPdNNzdZJJpMzHzwLgsMwzwQwMBgL',
        'clrlcvrRfccCtFbHrBWLgwLHmMHsHg',
        'DbfDFjcvRcvchWZVWdNpGZNqdh',
        'sdfvFLfmtszQwLfddRpmtDDBjVNWGMNQVQNMJGWJMj',
        'lccrncTZhqqcqhWggvrjMNMGrJMG',
        'SblShnZCqSbPhhbcbTTSZFdFsFpmdRwPwzvmswLtmm',
        'PGwwHpfnFSvVpWqWCQNNjCbbnW',
        'lmddlhcDRBlLRchdmzbNjqqWTcbNPNWTzz',
        'RBMrRdRhlDtPrJtfwFHpsvrHpFSrFw',
        'hhwlglFFSQndLRFbmCbTTz',
        'NczHMMqzpzPcpfBffcmTrdfGbbRbGrdGrLCL',
        'qNzNPqMjcqNBWWccBHsZPDhJnllwnwvJvQnJhQsgvD',
        'mbmvmvbbprZmlFmZbFgLffgQtFNHNhfqQtNQ',
        'SJcdzjSJBzdBdJDzQhhLQfqzNQQHggRL',
        'jwDwcTTDThvTZPPW',
        'FSVBBBvHvCpVVDDGcGwNNhhctwMvMc',
        'fLLZsZVQmjfTfqQRmQhhtgbbJbGJRghtcGct',
        'qTsTQdqjVfqdVdZZqVLpCpzSpdppBlSpCFdHSC',
        'sQQhWsMmQshlhmMQZFDHDJFjgjzHZgcHdH',
        'LnwnpNRrnrbCqqLpwnqfnLcvFHJFzNcHzJcgJJHgdDgN',
        'wCbnpCfPCVqwwnrrbbPRGMMlSllmlTTmsThVMlsd',
        'pzrprfwgbwtwqzrCWbqCwqSMvddHdDSvtHRlDnRRDddD',
        'zQLzQQjPBPFcLcQFTFsmNQzcMNdDdvnldHHvdvnDnRnlvRnJ',
        'cTZGzzscLcPrqrfrZqqbVV',
        'DcSdcTwDLmcwDwvWssGfJfcJQZPGnfcs',
        'FlHFMgtgNggpsztMHMqpjgBBnCfPflfQnZCQBBCnRPZC',
        'gpVjqNVrHFtjqqzSLDTSmTDwwrmhbs',
        'MLMzJTsZzZMgMLgHMmVmdCVhCBlQwDwwhChD',
        'vtPRQpbqCldwdtBC',
        'bQqFbnQbcFfjPRFPQnTrMMgcJgJrssrzgrgS',
        'mtdGJmQRFmdtQvdvtRtdHzHzqZqpHFzZnCzhZjjH',
        'fPwVlllswMVNPfBDDlNVsMsfcBjchHncqzjZbpzjcqCnpHHn',
        'rlsNPWNlhWTPMMNPfwNWTLQRvQLLmgvSJvRJgTRG',
        'TwnqhqqgvQnGBGmBDp',
        'SMjclJSjjVJgCzCzNgpmdBpmBGspRBmpDDVB',
        'JjMCgMMHMMZNStllZSNHhPqFhFWfqPPqTqhLFqtL',
        'lRQPtjPRlDdStDSlPmvllvLsCphFfCHLHggspgFmsFLH',
        'qwpTNprcbNWVHLrfFssBgFCM',
        'NTWTnzTTWGZZZVRSRRQGpdDtSQRp',
        'gpwTPNPBPTdLLLLVGl',
        'jSHdjzZHMcDVtDvFjtCF',
        'HqfZMHzbcqRRRWgdqPmBBBNmwW',
        'PvSBtdFgvSmBPngFBTBjbSjwwpGjsppMjNpMjj',
        'VZLfVQLzQQQhllpcNcwbssvwwwZj',
        'vHWLVVqWTmTgttgq',
        'CNRmNRFNRCWbWNCrlmfGlWqFLsDZQZBZzgwQZsBsDZZCzczB',
        'MSjdVHvHnDDhHvdwBwssZVzwcgLcQg',
        'HnMMTdttHSHSpHvDddpSHTjWlNWFlmRtRmRbqGfqGGNNfR',
        'fBLTDppznrfTndfnfTzTLPvZvvHVbRbggjvzVbzvbV',
        'mwmDGGlqDhMqthGqhJMWmlNVRZPHjgwjjRZbbHRgRHvv',
        'DmhsJsshWGhSGlmlmrdcLLsTBBfcfnBppc',
        'mbCGFFmGmcdTrCTQdh',
        'MJHfJNLllJffPLRTdBqTRQNcqQGB',
        'fPJHfSSSWfSLDMLWGHDMLDFmznmsjmvZwzvjZjbvbZ',
        'pPvpJSfZTTvCzNZczzQZchcj',
        'svbHWsqsvbsMFtVHgVtcRQcDlQRRRQLjlqjczj',
        'tBsgvHVMFggbgFrgWnwSndfBmmBJfPSfpn',
        'jwbwfjSbwjVSjvZPzWSvhvhQlCsBFgLRLLgBLRClLLFQQw',
        'GdNJHpmHTDnTNJqnFCgBLFLFzFtsQRCd',
        'NpMJHpnMrDpJGTHqTTmJHTPjfcvbWfrffVzvZfVWSbjz',
        'wFwpqWwwpqwtqqrbCFtptDmCcfNhNRzRBZRRJRChVNBZBJ',
        'svlvjHsQlvdlvMLdlvPSSLtzzczcNhJthfNtRcNMJNMc',
        'HvvPLSHjgltjsvqwbbnmWmDpgwTT',
        'zhCmPVwwChdCBtsWnNWswBWr',
        'GJJSfSgFpjJjGgpfpgrcNNstvnBHNnHLtFHr',
        'jgDTfjpMgZMGMGJTMMJRhzZPCzbhVlPqdNCbhd',
        'bDbQQmVDRpDNbRQlfQQZnfwTlllfsT',
        'FChzzBWhVzrgMwffJwlnngnTlJ',
        'MCvqvhFzcHCChjtpNNVLppGmbq',
        'bZZzJnccqdzcLhrcQDLrDs',
        'FfCfWVfjWTFClClfwjWCfGGwhZSDhSLsSSRpZprLph',
        'mFmTMmFjMMWFfZtttflWjmWTngNHJHggJJHtzgnJvBtBgHdv'
    ]

});