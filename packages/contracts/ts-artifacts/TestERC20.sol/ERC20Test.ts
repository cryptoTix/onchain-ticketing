export const ERC20Test = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "allowance",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "ERC20InsufficientAllowance",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "allowance",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "needed",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InsufficientBalance",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "balance",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "needed",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidApprover",
      "inputs": [
        {
          "name": "approver",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidReceiver",
      "inputs": [
        {
          "name": "receiver",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidSender",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidSpender",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b50604080518082018252600480825263074656d760e41b602080840182905284518086019095529184529083015290600361004b83826100ff565b50600461005882826100ff565b5050506101bd565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061008a57607f821691505b6020821081036100aa57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156100fa57806000526020600020601f840160051c810160208510156100d75750805b601f840160051c820191505b818110156100f757600081556001016100e3565b50505b505050565b81516001600160401b0381111561011857610118610060565b61012c816101268454610076565b846100b0565b6020601f82116001811461016057600083156101485750848201515b600019600385901b1c1916600184901b1784556100f7565b600084815260208120601f198516915b828110156101905787850151825560209485019460019092019101610170565b50848210156101ae5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b610785806101cc6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806340c10f191161006657806340c10f191461011857806370a082311461012d57806395d89b4114610156578063a9059cbb1461015e578063dd62ed3e1461017157600080fd5b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100e457806323b872dd146100f6578063313ce56714610109575b600080fd5b6100ab6101aa565b6040516100b891906105ce565b60405180910390f35b6100d46100cf366004610638565b61023c565b60405190151581526020016100b8565b6002545b6040519081526020016100b8565b6100d4610104366004610662565b610256565b604051601281526020016100b8565b61012b610126366004610638565b61027a565b005b6100e861013b36600461069f565b6001600160a01b031660009081526020819052604090205490565b6100ab610288565b6100d461016c366004610638565b610297565b6100e861017f3660046106c1565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101b9906106f4565b80601f01602080910402602001604051908101604052809291908181526020018280546101e5906106f4565b80156102325780601f1061020757610100808354040283529160200191610232565b820191906000526020600020905b81548152906001019060200180831161021557829003601f168201915b5050505050905090565b60003361024a8185856102a5565b60019150505b92915050565b6000336102648582856102b7565b61026f85858561033a565b506001949350505050565b6102848282610399565b5050565b6060600480546101b9906106f4565b60003361024a81858561033a565b6102b283838360016103cf565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610334578181101561032557604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b610334848484840360006103cf565b50505050565b6001600160a01b03831661036457604051634b637e8f60e11b81526000600482015260240161031c565b6001600160a01b03821661038e5760405163ec442f0560e01b81526000600482015260240161031c565b6102b28383836104a4565b6001600160a01b0382166103c35760405163ec442f0560e01b81526000600482015260240161031c565b610284600083836104a4565b6001600160a01b0384166103f95760405163e602df0560e01b81526000600482015260240161031c565b6001600160a01b03831661042357604051634a1406b160e11b81526000600482015260240161031c565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561033457826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161049691815260200190565b60405180910390a350505050565b6001600160a01b0383166104cf5780600260008282546104c4919061072e565b909155506105419050565b6001600160a01b038316600090815260208190526040902054818110156105225760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161031c565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661055d5760028054829003905561057c565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105c191815260200190565b60405180910390a3505050565b602081526000825180602084015260005b818110156105fc57602081860181015160408684010152016105df565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b038116811461063357600080fd5b919050565b6000806040838503121561064b57600080fd5b6106548361061c565b946020939093013593505050565b60008060006060848603121561067757600080fd5b6106808461061c565b925061068e6020850161061c565b929592945050506040919091013590565b6000602082840312156106b157600080fd5b6106ba8261061c565b9392505050565b600080604083850312156106d457600080fd5b6106dd8361061c565b91506106eb6020840161061c565b90509250929050565b600181811c9082168061070857607f821691505b60208210810361072857634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561025057634e487b7160e01b600052601160045260246000fdfea2646970667358221220de29d6d4ea35fff6074e73e46180f4878117a1c3c771f0d5a4842eefd8022e4964736f6c634300081a0033",
    "sourceMap": "95:163:75:-:0;;;129:38;;;;;;;;;-1:-1:-1;1601:113:39;;;;;;;;;;;;-1:-1:-1;;;1601:113:39;;;;;;;;;;;;;;;;;;;;;;;1667:5;:13;1601:113;1667:5;:13;:::i;:::-;-1:-1:-1;1690:7:39;:17;1700:7;1690;:17;:::i;:::-;;1601:113;;95:163:75;;14:127:76;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:380;225:1;221:12;;;;268;;;289:61;;343:4;335:6;331:17;321:27;;289:61;396:2;388:6;385:14;365:18;362:38;359:161;;442:10;437:3;433:20;430:1;423:31;477:4;474:1;467:15;505:4;502:1;495:15;359:161;;146:380;;;:::o;657:518::-;759:2;754:3;751:11;748:421;;;795:5;792:1;785:16;839:4;836:1;826:18;909:2;897:10;893:19;890:1;886:27;880:4;876:38;945:4;933:10;930:20;927:47;;;-1:-1:-1;968:4:76;927:47;1023:2;1018:3;1014:12;1011:1;1007:20;1001:4;997:31;987:41;;1078:81;1096:2;1089:5;1086:13;1078:81;;;1155:1;1141:16;;1122:1;1111:13;1078:81;;;1082:3;;748:421;657:518;;;:::o;1351:1299::-;1471:10;;-1:-1:-1;;;;;1493:30:76;;1490:56;;;1526:18;;:::i;:::-;1555:97;1645:6;1605:38;1637:4;1631:11;1605:38;:::i;:::-;1599:4;1555:97;:::i;:::-;1701:4;1732:2;1721:14;;1749:1;1744:649;;;;2437:1;2454:6;2451:89;;;-1:-1:-1;2506:19:76;;;2500:26;2451:89;-1:-1:-1;;1308:1:76;1304:11;;;1300:24;1296:29;1286:40;1332:1;1328:11;;;1283:57;2553:81;;1714:930;;1744:649;604:1;597:14;;;641:4;628:18;;-1:-1:-1;;1780:20:76;;;1898:222;1912:7;1909:1;1906:14;1898:222;;;1994:19;;;1988:26;1973:42;;2101:4;2086:20;;;;2054:1;2042:14;;;;1928:12;1898:222;;;1902:3;2148:6;2139:7;2136:19;2133:201;;;2209:19;;;2203:26;-1:-1:-1;;2292:1:76;2288:14;;;2304:3;2284:24;2280:37;2276:42;2261:58;2246:74;;2133:201;-1:-1:-1;;;;2380:1:76;2364:14;;;2360:22;2347:36;;-1:-1:-1;1351:1299:76:o;:::-;95:163:75;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061009e5760003560e01c806340c10f191161006657806340c10f191461011857806370a082311461012d57806395d89b4114610156578063a9059cbb1461015e578063dd62ed3e1461017157600080fd5b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100e457806323b872dd146100f6578063313ce56714610109575b600080fd5b6100ab6101aa565b6040516100b891906105ce565b60405180910390f35b6100d46100cf366004610638565b61023c565b60405190151581526020016100b8565b6002545b6040519081526020016100b8565b6100d4610104366004610662565b610256565b604051601281526020016100b8565b61012b610126366004610638565b61027a565b005b6100e861013b36600461069f565b6001600160a01b031660009081526020819052604090205490565b6100ab610288565b6100d461016c366004610638565b610297565b6100e861017f3660046106c1565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101b9906106f4565b80601f01602080910402602001604051908101604052809291908181526020018280546101e5906106f4565b80156102325780601f1061020757610100808354040283529160200191610232565b820191906000526020600020905b81548152906001019060200180831161021557829003601f168201915b5050505050905090565b60003361024a8185856102a5565b60019150505b92915050565b6000336102648582856102b7565b61026f85858561033a565b506001949350505050565b6102848282610399565b5050565b6060600480546101b9906106f4565b60003361024a81858561033a565b6102b283838360016103cf565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610334578181101561032557604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b610334848484840360006103cf565b50505050565b6001600160a01b03831661036457604051634b637e8f60e11b81526000600482015260240161031c565b6001600160a01b03821661038e5760405163ec442f0560e01b81526000600482015260240161031c565b6102b28383836104a4565b6001600160a01b0382166103c35760405163ec442f0560e01b81526000600482015260240161031c565b610284600083836104a4565b6001600160a01b0384166103f95760405163e602df0560e01b81526000600482015260240161031c565b6001600160a01b03831661042357604051634a1406b160e11b81526000600482015260240161031c565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561033457826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161049691815260200190565b60405180910390a350505050565b6001600160a01b0383166104cf5780600260008282546104c4919061072e565b909155506105419050565b6001600160a01b038316600090815260208190526040902054818110156105225760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161031c565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661055d5760028054829003905561057c565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105c191815260200190565b60405180910390a3505050565b602081526000825180602084015260005b818110156105fc57602081860181015160408684010152016105df565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b038116811461063357600080fd5b919050565b6000806040838503121561064b57600080fd5b6106548361061c565b946020939093013593505050565b60008060006060848603121561067757600080fd5b6106808461061c565b925061068e6020850161061c565b929592945050506040919091013590565b6000602082840312156106b157600080fd5b6106ba8261061c565b9392505050565b600080604083850312156106d457600080fd5b6106dd8361061c565b91506106eb6020840161061c565b90509250929050565b600181811c9082168061070857607f821691505b60208210810361072857634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561025057634e487b7160e01b600052601160045260246000fdfea2646970667358221220de29d6d4ea35fff6074e73e46180f4878117a1c3c771f0d5a4842eefd8022e4964736f6c634300081a0033",
    "sourceMap": "95:163:75:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1779:89:39;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3998:186;;;;;;:::i;:::-;;:::i;:::-;;;1194:14:76;;1187:22;1169:41;;1157:2;1142:18;3998:186:39;1029:187:76;2849:97:39;2927:12;;2849:97;;;1367:25:76;;;1355:2;1340:18;2849:97:39;1221:177:76;4776:244:39;;;;;;:::i;:::-;;:::i;2707:82::-;;;2780:2;1924:36:76;;1912:2;1897:18;2707:82:39;1782:184:76;173:83:75;;;;;;:::i;:::-;;:::i;:::-;;3004:116:39;;;;;;:::i;:::-;-1:-1:-1;;;;;3095:18:39;3069:7;3095:18;;;;;;;;;;;;3004:116;1981:93;;;:::i;3315:178::-;;;;;;:::i;:::-;;:::i;3551:140::-;;;;;;:::i;:::-;-1:-1:-1;;;;;3657:18:39;;;3631:7;3657:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3551:140;1779:89;1824:13;1856:5;1849:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1779:89;:::o;3998:186::-;4071:4;735:10:48;4125:31:39;735:10:48;4141:7:39;4150:5;4125:8;:31::i;:::-;4173:4;4166:11;;;3998:186;;;;;:::o;4776:244::-;4863:4;735:10:48;4919:37:39;4935:4;735:10:48;4950:5:39;4919:15;:37::i;:::-;4966:26;4976:4;4982:2;4986:5;4966:9;:26::i;:::-;-1:-1:-1;5009:4:39;;4776:244;-1:-1:-1;;;;4776:244:39:o;173:83:75:-;232:17;238:2;242:6;232:5;:17::i;:::-;173:83;;:::o;1981:93:39:-;2028:13;2060:7;2053:14;;;;;:::i;3315:178::-;3384:4;735:10:48;3438:27:39;735:10:48;3455:2:39;3459:5;3438:9;:27::i;8726:128::-;8810:37;8819:5;8826:7;8835:5;8842:4;8810:8;:37::i;:::-;8726:128;;;:::o;10415:477::-;-1:-1:-1;;;;;3657:18:39;;;10514:24;3657:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;-1:-1:-1;;10580:37:39;;10576:310;;10656:5;10637:16;:24;10633:130;;;10688:60;;-1:-1:-1;;;10688:60:39;;-1:-1:-1;;;;;3032:32:76;;10688:60:39;;;3014:51:76;3081:18;;;3074:34;;;3124:18;;;3117:34;;;2987:18;;10688:60:39;;;;;;;;10633:130;10804:57;10813:5;10820:7;10848:5;10829:16;:24;10855:5;10804:8;:57::i;:::-;10504:388;10415:477;;;:::o;5393:300::-;-1:-1:-1;;;;;5476:18:39;;5472:86;;5517:30;;-1:-1:-1;;;5517:30:39;;5544:1;5517:30;;;3308:51:76;3281:18;;5517:30:39;3162:203:76;5472:86:39;-1:-1:-1;;;;;5571:16:39;;5567:86;;5610:32;;-1:-1:-1;;;5610:32:39;;5639:1;5610:32;;;3308:51:76;3281:18;;5610:32:39;3162:203:76;5567:86:39;5662:24;5670:4;5676:2;5680:5;5662:7;:24::i;7458:208::-;-1:-1:-1;;;;;7528:21:39;;7524:91;;7572:32;;-1:-1:-1;;;7572:32:39;;7601:1;7572:32;;;3308:51:76;3281:18;;7572:32:39;3162:203:76;7524:91:39;7624:35;7640:1;7644:7;7653:5;7624:7;:35::i;9701:432::-;-1:-1:-1;;;;;9813:19:39;;9809:89;;9855:32;;-1:-1:-1;;;9855:32:39;;9884:1;9855:32;;;3308:51:76;3281:18;;9855:32:39;3162:203:76;9809:89:39;-1:-1:-1;;;;;9911:21:39;;9907:90;;9955:31;;-1:-1:-1;;;9955:31:39;;9983:1;9955:31;;;3308:51:76;3281:18;;9955:31:39;3162:203:76;9907:90:39;-1:-1:-1;;;;;10006:18:39;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;:35;;;10051:76;;;;10101:7;-1:-1:-1;;;;;10085:31:39;10094:5;-1:-1:-1;;;;;10085:31:39;;10110:5;10085:31;;;;1367:25:76;;1355:2;1340:18;;1221:177;10085:31:39;;;;;;;;9701:432;;;;:::o;6008:1107::-;-1:-1:-1;;;;;6097:18:39;;6093:540;;6249:5;6233:12;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;6093:540:39;;-1:-1:-1;6093:540:39;;-1:-1:-1;;;;;6307:15:39;;6285:19;6307:15;;;;;;;;;;;6340:19;;;6336:115;;;6386:50;;-1:-1:-1;;;6386:50:39;;-1:-1:-1;;;;;3032:32:76;;6386:50:39;;;3014:51:76;3081:18;;;3074:34;;;3124:18;;;3117:34;;;2987:18;;6386:50:39;2812:345:76;6336:115:39;-1:-1:-1;;;;;6571:15:39;;:9;:15;;;;;;;;;;6589:19;;;;6571:37;;6093:540;-1:-1:-1;;;;;6647:16:39;;6643:425;;6810:12;:21;;;;;;;6643:425;;;-1:-1:-1;;;;;7021:13:39;;:9;:13;;;;;;;;;;:22;;;;;;6643:425;7098:2;-1:-1:-1;;;;;7083:25:39;7092:4;-1:-1:-1;;;;;7083:25:39;;7102:5;7083:25;;;;1367::76;;1355:2;1340:18;;1221:177;7083:25:39;;;;;;;;6008:1107;;;:::o;14:527:76:-;163:2;152:9;145:21;126:4;195:6;189:13;238:6;233:2;222:9;218:18;211:34;263:1;273:140;287:6;284:1;281:13;273:140;;;398:2;382:14;;;378:23;;372:30;367:2;348:17;;;344:26;337:66;302:10;273:140;;;277:3;462:1;457:2;448:6;437:9;433:22;429:31;422:42;532:2;525;521:7;516:2;508:6;504:15;500:29;489:9;485:45;481:54;473:62;;;14:527;;;;:::o;546:173::-;614:20;;-1:-1:-1;;;;;663:31:76;;653:42;;643:70;;709:1;706;699:12;643:70;546:173;;;:::o;724:300::-;792:6;800;853:2;841:9;832:7;828:23;824:32;821:52;;;869:1;866;859:12;821:52;892:29;911:9;892:29;:::i;:::-;882:39;990:2;975:18;;;;962:32;;-1:-1:-1;;;724:300:76:o;1403:374::-;1480:6;1488;1496;1549:2;1537:9;1528:7;1524:23;1520:32;1517:52;;;1565:1;1562;1555:12;1517:52;1588:29;1607:9;1588:29;:::i;:::-;1578:39;;1636:38;1670:2;1659:9;1655:18;1636:38;:::i;:::-;1403:374;;1626:48;;-1:-1:-1;;;1743:2:76;1728:18;;;;1715:32;;1403:374::o;1971:186::-;2030:6;2083:2;2071:9;2062:7;2058:23;2054:32;2051:52;;;2099:1;2096;2089:12;2051:52;2122:29;2141:9;2122:29;:::i;:::-;2112:39;1971:186;-1:-1:-1;;;1971:186:76:o;2162:260::-;2230:6;2238;2291:2;2279:9;2270:7;2266:23;2262:32;2259:52;;;2307:1;2304;2297:12;2259:52;2330:29;2349:9;2330:29;:::i;:::-;2320:39;;2378:38;2412:2;2401:9;2397:18;2378:38;:::i;:::-;2368:48;;2162:260;;;;;:::o;2427:380::-;2506:1;2502:12;;;;2549;;;2570:61;;2624:4;2616:6;2612:17;2602:27;;2570:61;2677:2;2669:6;2666:14;2646:18;2643:38;2640:161;;2723:10;2718:3;2714:20;2711:1;2704:31;2758:4;2755:1;2748:15;2786:4;2783:1;2776:15;2640:161;;2427:380;;;:::o;3370:222::-;3435:9;;;3456:10;;;3453:133;;;3508:10;3503:3;3499:20;3496:1;3489:31;3543:4;3540:1;3533:15;3571:4;3568:1;3561:15",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "decimals()": "313ce567",
    "mint(address,uint256)": "40c10f19",
    "name()": "06fdde03",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSpender\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC20InsufficientAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\",\"params\":{\"allowance\":\"Amount of tokens a `spender` is allowed to operate with.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC20InsufficientBalance(address,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC20InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC20InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidSpender(address)\":[{\"details\":\"Indicates a failure with the `spender` to be approved. Used in approvals.\",\"params\":{\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/TestERC20.sol\":\"ERC20Test\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b\",\"dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xbf61ab2ae1d575a17ea58fbb99ca232baddcc4e0eeea180e84cbc74b0c348b31\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4e0968705bad99747a8e5288aa008678c2be2f471f919dce3925a3cc4f1dee09\",\"dweb:/ipfs/QmbAFnCQfo4tw6ssfQSjhA5LzwHWNNryXN8bX7ty8jiqqn\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db\",\"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x70f2f713b13b7ce4610bcd0ac9fec0f3cc43693b043abcb8dc40a42a726eb330\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c13d13304ac79a83ab1c30168967d19e2203342ebbd6a9bbce4db7550522dcbf\",\"dweb:/ipfs/QmeN5jKMN2vw5bhacr6tkg78afbTTZUeaacNHqjWt4Ew1r\"]},\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"test/TestERC20.sol\":{\"keccak256\":\"0xb054f162dbfda3459dab90589b2d1c2ec02995ed4180c64a91e67c85ba15e2ba\",\"urls\":[\"bzz-raw://40ad420807f0c69c3db4819f9d3e69eeec596f50fe4671cf8ba03a9d4670dcf5\",\"dweb:/ipfs/QmaCZgH2zxrJG7mzCzyzW9kcQduQDnWSd6byB6RmmCzPY7\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.26+commit.8a97fa7a"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "allowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC20InsufficientAllowance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC20InsufficientBalance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC20InvalidApprover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC20InvalidReceiver"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC20InvalidSender"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC20InvalidSpender"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mint"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "allowance(address,address)": {
            "details": "See {IERC20-allowance}."
          },
          "approve(address,uint256)": {
            "details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
          },
          "balanceOf(address)": {
            "details": "See {IERC20-balanceOf}."
          },
          "decimals()": {
            "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
          },
          "name()": {
            "details": "Returns the name of the token."
          },
          "symbol()": {
            "details": "Returns the symbol of the token, usually a shorter version of the name."
          },
          "totalSupply()": {
            "details": "See {IERC20-totalSupply}."
          },
          "transfer(address,uint256)": {
            "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`."
          },
          "transferFrom(address,address,uint256)": {
            "details": "See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/",
        "@openzeppelin/=node_modules/@openzeppelin/",
        "forge-std/=lib/forge-std/src/",
        "solady/=node_modules/solady/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "test/TestERC20.sol": "ERC20Test"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol": {
        "keccak256": "0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b",
        "urls": [
          "bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b",
          "dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0xbf61ab2ae1d575a17ea58fbb99ca232baddcc4e0eeea180e84cbc74b0c348b31",
        "urls": [
          "bzz-raw://4e0968705bad99747a8e5288aa008678c2be2f471f919dce3925a3cc4f1dee09",
          "dweb:/ipfs/QmbAFnCQfo4tw6ssfQSjhA5LzwHWNNryXN8bX7ty8jiqqn"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7",
        "urls": [
          "bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db",
          "dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0x70f2f713b13b7ce4610bcd0ac9fec0f3cc43693b043abcb8dc40a42a726eb330",
        "urls": [
          "bzz-raw://c13d13304ac79a83ab1c30168967d19e2203342ebbd6a9bbce4db7550522dcbf",
          "dweb:/ipfs/QmeN5jKMN2vw5bhacr6tkg78afbTTZUeaacNHqjWt4Ew1r"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
      },
      "test/TestERC20.sol": {
        "keccak256": "0xb054f162dbfda3459dab90589b2d1c2ec02995ed4180c64a91e67c85ba15e2ba",
        "urls": [
          "bzz-raw://40ad420807f0c69c3db4819f9d3e69eeec596f50fe4671cf8ba03a9d4670dcf5",
          "dweb:/ipfs/QmaCZgH2zxrJG7mzCzyzW9kcQduQDnWSd6byB6RmmCzPY7"
        ],
        "license": null
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/TestERC20.sol",
    "id": 56798,
    "exportedSymbols": {
      "ERC20": [
        44255
      ],
      "ERC20Test": [
        56797
      ]
    },
    "nodeType": "SourceUnit",
    "src": "0:258:75",
    "nodes": [
      {
        "id": 56771,
        "nodeType": "PragmaDirective",
        "src": "0:24:75",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".25"
        ]
      },
      {
        "id": 56773,
        "nodeType": "ImportDirective",
        "src": "25:68:75",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56798,
        "sourceUnit": 44256,
        "symbolAliases": [
          {
            "foreign": {
              "id": 56772,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 44255,
              "src": "33:5:75",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 56797,
        "nodeType": "ContractDefinition",
        "src": "95:163:75",
        "nodes": [
          {
            "id": 56783,
            "nodeType": "FunctionDefinition",
            "src": "129:38:75",
            "nodes": [],
            "body": {
              "id": 56782,
              "nodeType": "Block",
              "src": "165:2:75",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "74656d70",
                    "id": 56778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "149:6:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_b6e86caffcb88e63b04646fd34928cbb3b4a2e474ab536c8a563a01b52fccb62",
                      "typeString": "literal_string \"temp\""
                    },
                    "value": "temp"
                  },
                  {
                    "hexValue": "74656d70",
                    "id": 56779,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "157:6:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_b6e86caffcb88e63b04646fd34928cbb3b4a2e474ab536c8a563a01b52fccb62",
                      "typeString": "literal_string \"temp\""
                    },
                    "value": "temp"
                  }
                ],
                "id": 56780,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 56777,
                  "name": "ERC20",
                  "nameLocations": [
                    "143:5:75"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 44255,
                  "src": "143:5:75"
                },
                "nodeType": "ModifierInvocation",
                "src": "143:21:75"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 56776,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "140:2:75"
            },
            "returnParameters": {
              "id": 56781,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "165:0:75"
            },
            "scope": 56797,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 56796,
            "nodeType": "FunctionDefinition",
            "src": "173:83:75",
            "nodes": [],
            "body": {
              "id": 56795,
              "nodeType": "Block",
              "src": "222:34:75",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56791,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56785,
                        "src": "238:2:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56792,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56787,
                        "src": "242:6:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56790,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44095,
                      "src": "232:5:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 56793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "232:17:75",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56794,
                  "nodeType": "ExpressionStatement",
                  "src": "232:17:75"
                }
              ]
            },
            "functionSelector": "40c10f19",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "182:4:75",
            "parameters": {
              "id": 56788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56785,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "195:2:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 56796,
                  "src": "187:10:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56784,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:75",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56787,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "207:6:75",
                  "nodeType": "VariableDeclaration",
                  "scope": 56796,
                  "src": "199:14:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56786,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "199:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "186:28:75"
            },
            "returnParameters": {
              "id": 56789,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "222:0:75"
            },
            "scope": 56797,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 56774,
              "name": "ERC20",
              "nameLocations": [
                "117:5:75"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 44255,
              "src": "117:5:75"
            },
            "id": 56775,
            "nodeType": "InheritanceSpecifier",
            "src": "117:5:75"
          }
        ],
        "canonicalName": "ERC20Test",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          56797,
          44255,
          43310,
          44359,
          44333,
          45539
        ],
        "name": "ERC20Test",
        "nameLocation": "104:9:75",
        "scope": 56798,
        "usedErrors": [
          43280,
          43285,
          43290,
          43299,
          43304,
          43309
        ],
        "usedEvents": [
          44267,
          44276
        ]
      }
    ]
  },
  "id": 75
} as const;