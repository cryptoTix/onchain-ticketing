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
      "stateMutability": "pure"
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
    "object": "0x6080604052346102c4576100116102c8565b6100196102c8565b81516001600160401b0381116101d757600354600181811c911680156102ba575b60208210146101b957601f8111610257575b50602092601f82116001146101f657928192935f926101eb575b50508160011b915f199060031b1c1916176003555b80516001600160401b0381116101d757600454600181811c911680156101cd575b60208210146101b957601f8111610156575b50602091601f82116001146100f6579181925f926100eb575b50508160011b915f199060031b1c1916176004555b6040516106a290816102f98239f35b015190505f806100c7565b601f1982169260045f52805f20915f5b85811061013e57508360019510610126575b505050811b016004556100dc565b01515f1960f88460031b161c191690555f8080610118565b91926020600181928685015181550194019201610106565b60045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c810191602084106101af575b601f0160051c01905b8181106101a457506100ae565b5f8155600101610197565b909150819061018e565b634e487b7160e01b5f52602260045260245ffd5b90607f169061009c565b634e487b7160e01b5f52604160045260245ffd5b015190505f80610066565b601f1982169360035f52805f20915f5b86811061023f5750836001959610610227575b505050811b0160035561007b565b01515f1960f88460031b161c191690555f8080610219565b91926020600181928685015181550194019201610206565b60035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c810191602084106102b0575b601f0160051c01905b8181106102a5575061004c565b5f8155600101610298565b909150819061028f565b90607f169061003a565b5f80fd5b60408051919082016001600160401b038111838210176101d7576040526004825263074656d760e41b602083015256fe6080806040526004361015610012575f80fd5b5f3560e01c90816306fdde031461049d57508063095ea7b31461041b57806318160ddd146103fe57806323b872dd1461031e578063313ce5671461030357806340c10f191461026157806370a082311461022a57806395d89b411461010f578063a9059cbb146100de5763dd62ed3e1461008a575f80fd5b346100da5760403660031901126100da576100a3610596565b6100ab6105ac565b6001600160a01b039182165f908152600160209081526040808320949093168252928352819020549051908152f35b5f80fd5b346100da5760403660031901126100da576101046100fa610596565b60243590336105c2565b602060405160018152f35b346100da575f3660031901126100da576040515f6004548060011c90600181168015610220575b60208310811461020c578285529081156101f0575060011461019b575b50819003601f01601f191681019067ffffffffffffffff821181831017610187576101838291826040528261056c565b0390f35b634e487b7160e01b5f52604160045260245ffd5b905060045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5f905b8282106101da57506020915082010182610153565b60018160209254838588010152019101906101c5565b90506020925060ff191682840152151560051b82010182610153565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610136565b346100da5760203660031901126100da576001600160a01b0361024b610596565b165f525f602052602060405f2054604051908152f35b346100da5760403660031901126100da5761027a610596565b6001600160a01b031660243581156102f057600254908082018092116102dc5760207fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef915f9360025584845283825260408420818154019055604051908152a3005b634e487b7160e01b5f52601160045260245ffd5b63ec442f0560e01b5f525f60045260245ffd5b346100da575f3660031901126100da57602060405160068152f35b346100da5760603660031901126100da57610337610596565b61033f6105ac565b6001600160a01b0382165f81815260016020818152604080842033855290915290912054919360443593929091810161037e575b5061010493506105c2565b8381106103e35784156103d05733156103bd57610104945f52600160205260405f2060018060a01b0333165f526020528360405f209103905584610373565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b8390637dc7a0d960e11b5f523360045260245260445260645ffd5b346100da575f3660031901126100da576020600254604051908152f35b346100da5760403660031901126100da57610434610596565b6024359033156103d0576001600160a01b03169081156103bd57335f52600160205260405f20825f526020528060405f20556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b346100da575f3660031901126100da575f6003548060011c90600181168015610562575b60208310811461020c578285529081156101f0575060011461050d5750819003601f01601f191681019067ffffffffffffffff821181831017610187576101838291826040528261056c565b905060035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5f905b82821061054c57506020915082010182610153565b6001816020925483858801015201910190610537565b91607f16916104c1565b602060409281835280519182918282860152018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b03821682036100da57565b602435906001600160a01b03821682036100da57565b6001600160a01b0316908115610659576001600160a01b03169182156102f057815f525f60205260405f205481811061064057817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f525f825260405f20818154019055604051908152a3565b8263391434e360e21b5f5260045260245260445260645ffd5b634b637e8f60e11b5f525f60045260245ffdfea2646970667358221220e2fe4b845dea9cb7be46b73a0f945e0e8f4a1046f9a25322e93b94ac4e1e99d364736f6c634300081a0033",
    "sourceMap": "96:251:76:-:0;;;;;;;;:::i;:::-;;;:::i;:::-;;;-1:-1:-1;;;;;96:251:76;;;;1667:13:39;96:251:76;;;;;;;;;;;-1:-1:-1;96:251:76;;;;;;;;;;;-1:-1:-1;96:251:76;;;;;;;;;;;;;;-1:-1:-1;96:251:76;;;;;;;;;;;;;1667:13:39;96:251:76;;;;;1667:13:39;96:251:76;;;;-1:-1:-1;;;;;96:251:76;;;;1690:17:39;96:251:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;96:251:76;;;;;;;;;;;;;1667:13:39;96:251:76;;;;;1690:17:39;96:251:76;;;;;;;;;;;;;;;-1:-1:-1;96:251:76;;;;;;;;;;1690:17:39;-1:-1:-1;96:251:76;;-1:-1:-1;96:251:76;;-1:-1:-1;96:251:76;;;;;;;;;;;;;;;;;;;;1690:17:39;96:251:76;;;;;;;;;;1667:13:39;96:251:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1690:17:39;-1:-1:-1;96:251:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;96:251:76;;;;;;;;;-1:-1:-1;96:251:76;;;;;;;;-1:-1:-1;96:251:76;;1690:17:39;96:251:76;;-1:-1:-1;96:251:76;;;;;;;;;;;;-1:-1:-1;96:251:76;;1690:17:39;96:251:76;;-1:-1:-1;96:251:76;;;;;-1:-1:-1;96:251:76;;;;;;;;;;1667:13:39;-1:-1:-1;96:251:76;;-1:-1:-1;96:251:76;;-1:-1:-1;96:251:76;;;;;;;;;;;;;;;;;;;;;1667:13:39;96:251:76;;;;;;;;;;1667:13:39;96:251:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1667:13:39;-1:-1:-1;96:251:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;96:251:76;;;;;;;;;-1:-1:-1;96:251:76;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;96:251:76;;;;;;;;;;;;;-1:-1:-1;;;96:251:76;;;;:::o",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080806040526004361015610012575f80fd5b5f3560e01c90816306fdde031461049d57508063095ea7b31461041b57806318160ddd146103fe57806323b872dd1461031e578063313ce5671461030357806340c10f191461026157806370a082311461022a57806395d89b411461010f578063a9059cbb146100de5763dd62ed3e1461008a575f80fd5b346100da5760403660031901126100da576100a3610596565b6100ab6105ac565b6001600160a01b039182165f908152600160209081526040808320949093168252928352819020549051908152f35b5f80fd5b346100da5760403660031901126100da576101046100fa610596565b60243590336105c2565b602060405160018152f35b346100da575f3660031901126100da576040515f6004548060011c90600181168015610220575b60208310811461020c578285529081156101f0575060011461019b575b50819003601f01601f191681019067ffffffffffffffff821181831017610187576101838291826040528261056c565b0390f35b634e487b7160e01b5f52604160045260245ffd5b905060045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5f905b8282106101da57506020915082010182610153565b60018160209254838588010152019101906101c5565b90506020925060ff191682840152151560051b82010182610153565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610136565b346100da5760203660031901126100da576001600160a01b0361024b610596565b165f525f602052602060405f2054604051908152f35b346100da5760403660031901126100da5761027a610596565b6001600160a01b031660243581156102f057600254908082018092116102dc5760207fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef915f9360025584845283825260408420818154019055604051908152a3005b634e487b7160e01b5f52601160045260245ffd5b63ec442f0560e01b5f525f60045260245ffd5b346100da575f3660031901126100da57602060405160068152f35b346100da5760603660031901126100da57610337610596565b61033f6105ac565b6001600160a01b0382165f81815260016020818152604080842033855290915290912054919360443593929091810161037e575b5061010493506105c2565b8381106103e35784156103d05733156103bd57610104945f52600160205260405f2060018060a01b0333165f526020528360405f209103905584610373565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b8390637dc7a0d960e11b5f523360045260245260445260645ffd5b346100da575f3660031901126100da576020600254604051908152f35b346100da5760403660031901126100da57610434610596565b6024359033156103d0576001600160a01b03169081156103bd57335f52600160205260405f20825f526020528060405f20556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b346100da575f3660031901126100da575f6003548060011c90600181168015610562575b60208310811461020c578285529081156101f0575060011461050d5750819003601f01601f191681019067ffffffffffffffff821181831017610187576101838291826040528261056c565b905060035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5f905b82821061054c57506020915082010182610153565b6001816020925483858801015201910190610537565b91607f16916104c1565b602060409281835280519182918282860152018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b03821682036100da57565b602435906001600160a01b03821682036100da57565b6001600160a01b0316908115610659576001600160a01b03169182156102f057815f525f60205260405f205481811061064057817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f525f825260405f20818154019055604051908152a3565b8263391434e360e21b5f5260045260245260445260645ffd5b634b637e8f60e11b5f525f60045260245ffdfea2646970667358221220e2fe4b845dea9cb7be46b73a0f945e0e8f4a1046f9a25322e93b94ac4e1e99d364736f6c634300081a0033",
    "sourceMap": "96:251:76:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;96:251:76;;;;;;:::i;:::-;;;:::i;:::-;-1:-1:-1;;;;;96:251:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;96:251:76;;;;3459:5:39;96:251:76;;:::i;:::-;;;735:10:48;;3459:5:39;:::i;:::-;96:251:76;;;;;;;;;;;;;-1:-1:-1;;96:251:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;96:251:76;;;;;-1:-1:-1;;96:251:76;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;96:251:76;;;;-1:-1:-1;;;;;96:251:76;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;96:251:76;;;;;;:::i;:::-;-1:-1:-1;;;;;96:251:76;;;7528:21:39;;7524:91;;6233:21;96:251:76;;;;;;;;;;;7083:25:39;96:251:76;;;6233:21:39;96:251:76;;;;;;;;;;;;;;;;;;;;;7083:25:39;96:251:76;;;;;;;;;;;;;7524:91:39;7572:32;;;96:251:76;7572:32:39;96:251:76;;;;;7572:32:39;96:251:76;;;;;;-1:-1:-1;;96:251:76;;;;;;;337:1;96:251;;;;;;;;;-1:-1:-1;;96:251:76;;;;;;:::i;:::-;;;:::i;:::-;-1:-1:-1;;;;;96:251:76;;;;;;;;;;;;;;;735:10:48;96:251:76;;;;;;;;;;;;;;;;;10580:37:39;;10576:310;;96:251:76;4986:5:39;;;;;:::i;10576:310::-;10637:24;;;10633:130;;9813:19;;9809:89;;735:10:48;9911:21:39;9907:90;;4986:5;96:251:76;;;;;;;;;;;;;;735:10:48;96:251:76;-1:-1:-1;96:251:76;;;;;-1:-1:-1;96:251:76;;;;;10576:310:39;;;9907:90;9955:31;;;96:251:76;9955:31:39;96:251:76;;;;;9955:31:39;9809:89;9855:32;;;96:251:76;9855:32:39;96:251:76;;;;;9855:32:39;10633:130;10688:60;;;;;96:251:76;10688:60:39;735:10:48;96:251:76;;;;;;;;10688:60:39;96:251:76;;;;;;-1:-1:-1;;96:251:76;;;;;2927:12:39;96:251:76;;;;;;;;;;;;;-1:-1:-1;;96:251:76;;;;;;:::i;:::-;;;735:10:48;;9813:19:39;9809:89;;-1:-1:-1;;;;;96:251:76;;9911:21:39;;9907:90;;735:10:48;96:251:76;;;;;;;;;-1:-1:-1;96:251:76;;;;;-1:-1:-1;96:251:76;;;;;;;10085:31:39;96:251:76;735:10:48;10085:31:39;;96:251:76;;;;;;;;;;;;;-1:-1:-1;;96:251:76;;;;;1856:5:39;96:251:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;96:251:76;;;;;-1:-1:-1;;96:251:76;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1856:5:39;96:251:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;96:251:76;;;;:::o;:::-;;;;-1:-1:-1;;;;;96:251:76;;;;;;:::o;:::-;;;;-1:-1:-1;;;;;96:251:76;;;;;;:::o;5393:300:39:-;-1:-1:-1;;;;;96:251:76;;5476:18:39;;5472:86;;-1:-1:-1;;;;;96:251:76;;5571:16:39;;5567:86;;96:251:76;5492:1:39;96:251:76;5492:1:39;96:251:76;;;5492:1:39;96:251:76;;6340:19:39;;;6336:115;;96:251:76;7083:25:39;96:251:76;;;;5492:1:39;96:251:76;5492:1:39;96:251:76;;;;5492:1:39;96:251:76;;;5492:1:39;96:251:76;5492:1:39;96:251:76;;;5492:1:39;96:251:76;;;;;;;;;;;;7083:25:39;5393:300::o;6336:115::-;6386:50;;;;5492:1;6386:50;;96:251:76;;;;;;5492:1:39;6386:50;5472:86;5517:30;;;5492:1;5517:30;5492:1;5517:30;96:251:76;;5492:1:39;5517:30",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSpender\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC20InsufficientAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\",\"params\":{\"allowance\":\"Amount of tokens a `spender` is allowed to operate with.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC20InsufficientBalance(address,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC20InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC20InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidSpender(address)\":[{\"details\":\"Indicates a failure with the `spender` to be approved. Used in approvals.\",\"params\":{\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/TestERC20.sol\":\"ERC20Test\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b\",\"dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xbf61ab2ae1d575a17ea58fbb99ca232baddcc4e0eeea180e84cbc74b0c348b31\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4e0968705bad99747a8e5288aa008678c2be2f471f919dce3925a3cc4f1dee09\",\"dweb:/ipfs/QmbAFnCQfo4tw6ssfQSjhA5LzwHWNNryXN8bX7ty8jiqqn\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db\",\"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x70f2f713b13b7ce4610bcd0ac9fec0f3cc43693b043abcb8dc40a42a726eb330\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c13d13304ac79a83ab1c30168967d19e2203342ebbd6a9bbce4db7550522dcbf\",\"dweb:/ipfs/QmeN5jKMN2vw5bhacr6tkg78afbTTZUeaacNHqjWt4Ew1r\"]},\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"test/TestERC20.sol\":{\"keccak256\":\"0xdc7f9ec9100e50907f07221b84215b178a241c113202b43ed1fc6dc698860911\",\"urls\":[\"bzz-raw://c60c98be038a2d46c2b8e01ef6cb66f88356b5660cf0f6c8218fff937c94b353\",\"dweb:/ipfs/QmUfLSzjVv9yopps8M7ruFttyYieuNHXQGN5bzb2FCRVQV\"]}},\"version\":1}",
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
          "stateMutability": "pure",
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
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
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
        "keccak256": "0xdc7f9ec9100e50907f07221b84215b178a241c113202b43ed1fc6dc698860911",
        "urls": [
          "bzz-raw://c60c98be038a2d46c2b8e01ef6cb66f88356b5660cf0f6c8218fff937c94b353",
          "dweb:/ipfs/QmUfLSzjVv9yopps8M7ruFttyYieuNHXQGN5bzb2FCRVQV"
        ],
        "license": null
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/TestERC20.sol",
    "id": 57392,
    "exportedSymbols": {
      "ERC20": [
        44255
      ],
      "ERC20Test": [
        57391
      ]
    },
    "nodeType": "SourceUnit",
    "src": "0:348:76",
    "nodes": [
      {
        "id": 57356,
        "nodeType": "PragmaDirective",
        "src": "0:24:76",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".25"
        ]
      },
      {
        "id": 57358,
        "nodeType": "ImportDirective",
        "src": "26:68:76",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 57392,
        "sourceUnit": 44256,
        "symbolAliases": [
          {
            "foreign": {
              "id": 57357,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 44255,
              "src": "34:5:76",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 57391,
        "nodeType": "ContractDefinition",
        "src": "96:251:76",
        "nodes": [
          {
            "id": 57368,
            "nodeType": "FunctionDefinition",
            "src": "130:38:76",
            "nodes": [],
            "body": {
              "id": 57367,
              "nodeType": "Block",
              "src": "166:2:76",
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
                    "id": 57363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "150:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_b6e86caffcb88e63b04646fd34928cbb3b4a2e474ab536c8a563a01b52fccb62",
                      "typeString": "literal_string \"temp\""
                    },
                    "value": "temp"
                  },
                  {
                    "hexValue": "74656d70",
                    "id": 57364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "158:6:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_b6e86caffcb88e63b04646fd34928cbb3b4a2e474ab536c8a563a01b52fccb62",
                      "typeString": "literal_string \"temp\""
                    },
                    "value": "temp"
                  }
                ],
                "id": 57365,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 57362,
                  "name": "ERC20",
                  "nameLocations": [
                    "144:5:76"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 44255,
                  "src": "144:5:76"
                },
                "nodeType": "ModifierInvocation",
                "src": "144:21:76"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 57361,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "141:2:76"
            },
            "returnParameters": {
              "id": 57366,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "166:0:76"
            },
            "scope": 57391,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57381,
            "nodeType": "FunctionDefinition",
            "src": "174:83:76",
            "nodes": [],
            "body": {
              "id": 57380,
              "nodeType": "Block",
              "src": "223:34:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 57376,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57370,
                        "src": "239:2:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 57377,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57372,
                        "src": "243:6:76",
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
                      "id": 57375,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44095,
                      "src": "233:5:76",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 57378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "233:17:76",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57379,
                  "nodeType": "ExpressionStatement",
                  "src": "233:17:76"
                }
              ]
            },
            "functionSelector": "40c10f19",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "183:4:76",
            "parameters": {
              "id": 57373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57370,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "196:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 57381,
                  "src": "188:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57369,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "188:7:76",
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
                  "id": 57372,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "208:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 57381,
                  "src": "200:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 57371,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "200:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "187:28:76"
            },
            "returnParameters": {
              "id": 57374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "223:0:76"
            },
            "scope": 57391,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57390,
            "nodeType": "FunctionDefinition",
            "src": "263:82:76",
            "nodes": [],
            "body": {
              "id": 57389,
              "nodeType": "Block",
              "src": "320:25:76",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "36",
                    "id": 57387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "337:1:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_6_by_1",
                      "typeString": "int_const 6"
                    },
                    "value": "6"
                  },
                  "functionReturnParameters": 57386,
                  "id": 57388,
                  "nodeType": "Return",
                  "src": "330:8:76"
                }
              ]
            },
            "baseFunctions": [
              43819
            ],
            "functionSelector": "313ce567",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "272:8:76",
            "overrides": {
              "id": 57383,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "283:8:76"
            },
            "parameters": {
              "id": 57382,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "280:2:76"
            },
            "returnParameters": {
              "id": 57386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57385,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 57390,
                  "src": "313:5:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 57384,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "312:7:76"
            },
            "scope": 57391,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 57359,
              "name": "ERC20",
              "nameLocations": [
                "118:5:76"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 44255,
              "src": "118:5:76"
            },
            "id": 57360,
            "nodeType": "InheritanceSpecifier",
            "src": "118:5:76"
          }
        ],
        "canonicalName": "ERC20Test",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          57391,
          44255,
          43310,
          44359,
          44333,
          45539
        ],
        "name": "ERC20Test",
        "nameLocation": "105:9:76",
        "scope": 57392,
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
  "id": 76
} as const;