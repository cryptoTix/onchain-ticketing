export const ERC721Upgradeable = {
  "abi": [
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "owner",
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
      "name": "getApproved",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
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
      "name": "ownerOf",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
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
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
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
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
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
      "name": "tokenURI",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
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
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
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
          "name": "approved",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Initialized",
      "inputs": [
        {
          "name": "version",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
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
          "name": "tokenId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "ERC721IncorrectOwner",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InsufficientApproval",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidApprover",
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
      "name": "ERC721InvalidOperator",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidOwner",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidReceiver",
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
      "name": "ERC721InvalidSender",
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
      "name": "ERC721NonexistentToken",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "InvalidInitialization",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotInitializing",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "getApproved(uint256)": "081812fc",
    "isApprovedForAll(address,address)": "e985e9c5",
    "name()": "06fdde03",
    "ownerOf(uint256)": "6352211e",
    "safeTransferFrom(address,address,uint256)": "42842e0e",
    "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
    "setApprovalForAll(address,bool)": "a22cb465",
    "supportsInterface(bytes4)": "01ffc9a7",
    "symbol()": "95d89b41",
    "tokenURI(uint256)": "c87b56dd",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC-721] Non-Fungible Token Standard, including the Metadata extension, but not including the Enumerable extension, which is available separately as {ERC721Enumerable}.\",\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol\":\"ERC721Upgradeable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol\":{\"keccak256\":\"0xfd473ea8f70e13eaa6475c7e348885b8a32925252e3bc237e07c0e3fde0f10f5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea9d17ae8f18568ab1aedf555ebc79906ba3eaaccfa78efbaed05bd3a9e1b6f2\",\"dweb:/ipfs/QmUQDGwCVE72tExiyA9EuwBeaiu9a8DQin3DZxuX76umg4\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol\":{\"keccak256\":\"0xc8ed8d2056934b7675b695dec032f2920c2f5c6cf33a17ca85650940675323ab\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3c8ccc75d1cd792d192aa09e54dd49ea35fe85baa9fcd17486f29227d9f29b89\",\"dweb:/ipfs/QmbboSbFUEiM9tdEgBwuTRb7bykFoJXZ7dsSr1PSREJXMr\"]},\"node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b\",\"dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11\",\"dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34\",\"dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02\",\"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol\":{\"keccak256\":\"0x40399695922383778f9f540a620bec475a2f8e0f08d41f0005682842e28a9855\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://746d295e403931aeb9d6065fd5a0871f43ab5459814a60623611e4b6641a09fd\",\"dweb:/ipfs/QmWrgT8YJrQ9FfD1o3YYArwo57e7MGdpFKuM74qJ4qE34E\"]},\"node_modules/@openzeppelin/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x725209b582291bb83058e3078624b53d15a133f7401c30295e7f3704181d2aed\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0564ddb19c6d870e27b789d8f985283d815267ad7224883c2d5243c8bacc7dc0\",\"dweb:/ipfs/QmeC953H4sj88ZRFdJNFdmpf7J9SksP1wK4jyMHLo66z49\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa00be322d7db5786750ce0ac7e2f5b633ac30a5ed5fa1ced1e74acfc19acecea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c84e822f87cbdc4082533b626667b6928715bb2b1e8e7eb96954cebb9e38c8d\",\"dweb:/ipfs/QmZmy9dgxLTerBAQDuuHqbL6EpgRxddqgv5KmwpXYVbKz1\"]},\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03\",\"dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.26+commit.8a97fa7a"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721IncorrectOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC721InsufficientApproval"
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
          "name": "ERC721InvalidApprover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidOperator"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidOwner"
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
          "name": "ERC721InvalidReceiver"
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
          "name": "ERC721InvalidSender"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC721NonexistentToken"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidInitialization"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotInitializing"
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
              "name": "approved",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": true
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
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint64",
              "name": "version",
              "type": "uint64",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Initialized",
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
              "name": "tokenId",
              "type": "uint256",
              "indexed": true
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
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
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
              "name": "operator",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
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
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
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
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
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
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "approve(address,uint256)": {
            "details": "See {IERC721-approve}."
          },
          "balanceOf(address)": {
            "details": "See {IERC721-balanceOf}."
          },
          "getApproved(uint256)": {
            "details": "See {IERC721-getApproved}."
          },
          "isApprovedForAll(address,address)": {
            "details": "See {IERC721-isApprovedForAll}."
          },
          "name()": {
            "details": "See {IERC721Metadata-name}."
          },
          "ownerOf(uint256)": {
            "details": "See {IERC721-ownerOf}."
          },
          "safeTransferFrom(address,address,uint256)": {
            "details": "See {IERC721-safeTransferFrom}."
          },
          "safeTransferFrom(address,address,uint256,bytes)": {
            "details": "See {IERC721-safeTransferFrom}."
          },
          "setApprovalForAll(address,bool)": {
            "details": "See {IERC721-setApprovalForAll}."
          },
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
          },
          "symbol()": {
            "details": "See {IERC721Metadata-symbol}."
          },
          "tokenURI(uint256)": {
            "details": "See {IERC721Metadata-tokenURI}."
          },
          "transferFrom(address,address,uint256)": {
            "details": "See {IERC721-transferFrom}."
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
        "node_modules/@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol": "ERC721Upgradeable"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol": {
        "keccak256": "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
        "urls": [
          "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
          "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol": {
        "keccak256": "0xfd473ea8f70e13eaa6475c7e348885b8a32925252e3bc237e07c0e3fde0f10f5",
        "urls": [
          "bzz-raw://ea9d17ae8f18568ab1aedf555ebc79906ba3eaaccfa78efbaed05bd3a9e1b6f2",
          "dweb:/ipfs/QmUQDGwCVE72tExiyA9EuwBeaiu9a8DQin3DZxuX76umg4"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol": {
        "keccak256": "0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397",
        "urls": [
          "bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9",
          "dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol": {
        "keccak256": "0xc8ed8d2056934b7675b695dec032f2920c2f5c6cf33a17ca85650940675323ab",
        "urls": [
          "bzz-raw://3c8ccc75d1cd792d192aa09e54dd49ea35fe85baa9fcd17486f29227d9f29b89",
          "dweb:/ipfs/QmbboSbFUEiM9tdEgBwuTRb7bykFoJXZ7dsSr1PSREJXMr"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol": {
        "keccak256": "0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b",
        "urls": [
          "bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b",
          "dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol": {
        "keccak256": "0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261",
        "urls": [
          "bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11",
          "dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol": {
        "keccak256": "0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d",
        "urls": [
          "bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34",
          "dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
        "keccak256": "0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1",
        "urls": [
          "bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02",
          "dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol": {
        "keccak256": "0x40399695922383778f9f540a620bec475a2f8e0f08d41f0005682842e28a9855",
        "urls": [
          "bzz-raw://746d295e403931aeb9d6065fd5a0871f43ab5459814a60623611e4b6641a09fd",
          "dweb:/ipfs/QmWrgT8YJrQ9FfD1o3YYArwo57e7MGdpFKuM74qJ4qE34E"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Panic.sol": {
        "keccak256": "0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a",
        "urls": [
          "bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a",
          "dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Strings.sol": {
        "keccak256": "0x725209b582291bb83058e3078624b53d15a133f7401c30295e7f3704181d2aed",
        "urls": [
          "bzz-raw://0564ddb19c6d870e27b789d8f985283d815267ad7224883c2d5243c8bacc7dc0",
          "dweb:/ipfs/QmeC953H4sj88ZRFdJNFdmpf7J9SksP1wK4jyMHLo66z49"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8",
        "urls": [
          "bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621",
          "dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/Math.sol": {
        "keccak256": "0xa00be322d7db5786750ce0ac7e2f5b633ac30a5ed5fa1ced1e74acfc19acecea",
        "urls": [
          "bzz-raw://6c84e822f87cbdc4082533b626667b6928715bb2b1e8e7eb96954cebb9e38c8d",
          "dweb:/ipfs/QmZmy9dgxLTerBAQDuuHqbL6EpgRxddqgv5KmwpXYVbKz1"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol": {
        "keccak256": "0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54",
        "urls": [
          "bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8",
          "dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3",
        "urls": [
          "bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03",
          "dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol",
    "id": 42796,
    "exportedSymbols": {
      "ContextUpgradeable": [
        42841
      ],
      "ERC165Upgradeable": [
        43225
      ],
      "ERC721Upgradeable": [
        42795
      ],
      "ERC721Utils": [
        44599
      ],
      "IERC165": [
        46707
      ],
      "IERC721": [
        44476
      ],
      "IERC721Errors": [
        43358
      ],
      "IERC721Metadata": [
        44522
      ],
      "Initializable": [
        40718
      ],
      "Strings": [
        46165
      ]
    },
    "nodeType": "SourceUnit",
    "src": "107:18047:27",
    "nodes": [
      {
        "id": 41717,
        "nodeType": "PragmaDirective",
        "src": "107:24:27",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 41719,
        "nodeType": "ImportDirective",
        "src": "133:73:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42796,
        "sourceUnit": 44477,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41718,
              "name": "IERC721",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 44476,
              "src": "141:7:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41721,
        "nodeType": "ImportDirective",
        "src": "207:100:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol",
        "file": "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42796,
        "sourceUnit": 44523,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41720,
              "name": "IERC721Metadata",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 44522,
              "src": "215:15:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41723,
        "nodeType": "ImportDirective",
        "src": "308:87:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol",
        "file": "@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42796,
        "sourceUnit": 44600,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41722,
              "name": "ERC721Utils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 44599,
              "src": "316:11:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41725,
        "nodeType": "ImportDirective",
        "src": "396:70:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol",
        "file": "../../utils/ContextUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42796,
        "sourceUnit": 42842,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41724,
              "name": "ContextUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 42841,
              "src": "404:18:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41727,
        "nodeType": "ImportDirective",
        "src": "467:66:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/Strings.sol",
        "file": "@openzeppelin/contracts/utils/Strings.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42796,
        "sourceUnit": 46166,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41726,
              "name": "Strings",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46165,
              "src": "475:7:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41729,
        "nodeType": "ImportDirective",
        "src": "534:80:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42796,
        "sourceUnit": 46708,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41728,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46707,
              "src": "542:7:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41731,
        "nodeType": "ImportDirective",
        "src": "615:82:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol",
        "file": "../../utils/introspection/ERC165Upgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42796,
        "sourceUnit": 43226,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41730,
              "name": "ERC165Upgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43225,
              "src": "623:17:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41733,
        "nodeType": "ImportDirective",
        "src": "698:84:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "file": "@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42796,
        "sourceUnit": 43406,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41732,
              "name": "IERC721Errors",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43358,
              "src": "706:13:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41735,
        "nodeType": "ImportDirective",
        "src": "783:66:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42796,
        "sourceUnit": 40719,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41734,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 40718,
              "src": "791:13:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 42795,
        "nodeType": "ContractDefinition",
        "src": "1099:17054:27",
        "nodes": [
          {
            "id": 41751,
            "nodeType": "UsingForDirective",
            "src": "1238:26:27",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 41749,
              "name": "Strings",
              "nameLocations": [
                "1244:7:27"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46165,
              "src": "1244:7:27"
            },
            "typeName": {
              "id": 41750,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1256:7:27",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 41775,
            "nodeType": "StructDefinition",
            "src": "1339:380:27",
            "nodes": [],
            "canonicalName": "ERC721Upgradeable.ERC721Storage",
            "documentation": {
              "id": 41752,
              "nodeType": "StructuredDocumentation",
              "src": "1270:64:27",
              "text": "@custom:storage-location erc7201:openzeppelin.storage.ERC721"
            },
            "members": [
              {
                "constant": false,
                "id": 41754,
                "mutability": "mutable",
                "name": "_name",
                "nameLocation": "1399:5:27",
                "nodeType": "VariableDeclaration",
                "scope": 41775,
                "src": "1392:12:27",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 41753,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1392:6:27",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 41756,
                "mutability": "mutable",
                "name": "_symbol",
                "nameLocation": "1446:7:27",
                "nodeType": "VariableDeclaration",
                "scope": 41775,
                "src": "1439:14:27",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 41755,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1439:6:27",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 41760,
                "mutability": "mutable",
                "name": "_owners",
                "nameLocation": "1500:7:27",
                "nodeType": "VariableDeclaration",
                "scope": 41775,
                "src": "1464:43:27",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "typeName": {
                  "id": 41759,
                  "keyName": "tokenId",
                  "keyNameLocation": "1480:7:27",
                  "keyType": {
                    "id": 41757,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1472:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1464:35:27",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                    "typeString": "mapping(uint256 => address)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 41758,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1491:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 41764,
                "mutability": "mutable",
                "name": "_balances",
                "nameLocation": "1552:9:27",
                "nodeType": "VariableDeclaration",
                "scope": 41775,
                "src": "1518:43:27",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "typeName": {
                  "id": 41763,
                  "keyName": "owner",
                  "keyNameLocation": "1534:5:27",
                  "keyType": {
                    "id": 41761,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1526:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1518:33:27",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 41762,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1543:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 41768,
                "mutability": "mutable",
                "name": "_tokenApprovals",
                "nameLocation": "1608:15:27",
                "nodeType": "VariableDeclaration",
                "scope": 41775,
                "src": "1572:51:27",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "typeName": {
                  "id": 41767,
                  "keyName": "tokenId",
                  "keyNameLocation": "1588:7:27",
                  "keyType": {
                    "id": 41765,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1580:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1572:35:27",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                    "typeString": "mapping(uint256 => address)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 41766,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 41774,
                "mutability": "mutable",
                "name": "_operatorApprovals",
                "nameLocation": "1694:18:27",
                "nodeType": "VariableDeclaration",
                "scope": 41775,
                "src": "1634:78:27",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                  "typeString": "mapping(address => mapping(address => bool))"
                },
                "typeName": {
                  "id": 41773,
                  "keyName": "owner",
                  "keyNameLocation": "1650:5:27",
                  "keyType": {
                    "id": 41769,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1642:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1634:59:27",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                    "typeString": "mapping(address => mapping(address => bool))"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 41772,
                    "keyName": "operator",
                    "keyNameLocation": "1675:8:27",
                    "keyType": {
                      "id": 41770,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1667:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1659:33:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                      "typeString": "mapping(address => bool)"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "id": 41771,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1687:4:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ERC721Storage",
            "nameLocation": "1346:13:27",
            "scope": 42795,
            "visibility": "public"
          },
          {
            "id": 41778,
            "nodeType": "VariableDeclaration",
            "src": "1835:115:27",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC721StorageLocation",
            "nameLocation": "1860:21:27",
            "scope": 42795,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 41776,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1835:7:27",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307838306262326236333863633230626334643061363064363639343066336162346130306331643762333133343937636138326662306234616230303739333030",
              "id": 41777,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1884:66:27",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_58226744478722834339948329933988999792353370511964151963072532422914231210752_by_1",
                "typeString": "int_const 5822...(69 digits omitted)...0752"
              },
              "value": "0x80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079300"
            },
            "visibility": "private"
          },
          {
            "id": 41786,
            "nodeType": "FunctionDefinition",
            "src": "1957:156:27",
            "nodes": [],
            "body": {
              "id": 41785,
              "nodeType": "Block",
              "src": "2033:80:27",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2052:55:27",
                    "nodeType": "YulBlock",
                    "src": "2052:55:27",
                    "statements": [
                      {
                        "nativeSrc": "2066:31:27",
                        "nodeType": "YulAssignment",
                        "src": "2066:31:27",
                        "value": {
                          "name": "ERC721StorageLocation",
                          "nativeSrc": "2076:21:27",
                          "nodeType": "YulIdentifier",
                          "src": "2076:21:27"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "2066:6:27",
                            "nodeType": "YulIdentifier",
                            "src": "2066:6:27"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41782,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2066:6:27",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41778,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2076:21:27",
                      "valueSize": 1
                    }
                  ],
                  "id": 41784,
                  "nodeType": "InlineAssembly",
                  "src": "2043:64:27"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getERC721Storage",
            "nameLocation": "1966:17:27",
            "parameters": {
              "id": 41779,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1983:2:27"
            },
            "returnParameters": {
              "id": 41783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41782,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "2030:1:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 41786,
                  "src": "2008:23:27",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                    "typeString": "struct ERC721Upgradeable.ERC721Storage"
                  },
                  "typeName": {
                    "id": 41781,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41780,
                      "name": "ERC721Storage",
                      "nameLocations": [
                        "2008:13:27"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41775,
                      "src": "2008:13:27"
                    },
                    "referencedDeclaration": 41775,
                    "src": "2008:13:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2007:25:27"
            },
            "scope": 42795,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 41802,
            "nodeType": "FunctionDefinition",
            "src": "2232:149:27",
            "nodes": [],
            "body": {
              "id": 41801,
              "nodeType": "Block",
              "src": "2325:56:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41797,
                        "name": "name_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41789,
                        "src": "2359:5:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 41798,
                        "name": "symbol_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41791,
                        "src": "2366:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 41796,
                      "name": "__ERC721_init_unchained",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41830,
                      "src": "2335:23:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 41799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2335:39:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41800,
                  "nodeType": "ExpressionStatement",
                  "src": "2335:39:27"
                }
              ]
            },
            "documentation": {
              "id": 41787,
              "nodeType": "StructuredDocumentation",
              "src": "2119:108:27",
              "text": " @dev Initializes the contract by setting a `name` and a `symbol` to the token collection."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 41794,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 41793,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "2308:16:27"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40627,
                  "src": "2308:16:27"
                },
                "nodeType": "ModifierInvocation",
                "src": "2308:16:27"
              }
            ],
            "name": "__ERC721_init",
            "nameLocation": "2241:13:27",
            "parameters": {
              "id": 41792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41789,
                  "mutability": "mutable",
                  "name": "name_",
                  "nameLocation": "2269:5:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 41802,
                  "src": "2255:19:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41788,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2255:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41791,
                  "mutability": "mutable",
                  "name": "symbol_",
                  "nameLocation": "2290:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 41802,
                  "src": "2276:21:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41790,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2276:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2254:44:27"
            },
            "returnParameters": {
              "id": 41795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2325:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41830,
            "nodeType": "FunctionDefinition",
            "src": "2387:219:27",
            "nodes": [],
            "body": {
              "id": 41829,
              "nodeType": "Block",
              "src": "2490:116:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41813
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41813,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "2522:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 41829,
                      "src": "2500:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 41812,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 41811,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "2500:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "2500:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "2500:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41816,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41814,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "2526:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 41815,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2526:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2500:45:27"
                },
                {
                  "expression": {
                    "id": 41821,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 41817,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41813,
                        "src": "2555:1:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                        }
                      },
                      "id": 41819,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "2557:5:27",
                      "memberName": "_name",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 41754,
                      "src": "2555:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 41820,
                      "name": "name_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41804,
                      "src": "2565:5:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2555:15:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 41822,
                  "nodeType": "ExpressionStatement",
                  "src": "2555:15:27"
                },
                {
                  "expression": {
                    "id": 41827,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 41823,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41813,
                        "src": "2580:1:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                        }
                      },
                      "id": 41825,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "2582:7:27",
                      "memberName": "_symbol",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 41756,
                      "src": "2580:9:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 41826,
                      "name": "symbol_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41806,
                      "src": "2592:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2580:19:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 41828,
                  "nodeType": "ExpressionStatement",
                  "src": "2580:19:27"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 41809,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 41808,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "2473:16:27"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40627,
                  "src": "2473:16:27"
                },
                "nodeType": "ModifierInvocation",
                "src": "2473:16:27"
              }
            ],
            "name": "__ERC721_init_unchained",
            "nameLocation": "2396:23:27",
            "parameters": {
              "id": 41807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41804,
                  "mutability": "mutable",
                  "name": "name_",
                  "nameLocation": "2434:5:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 41830,
                  "src": "2420:19:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41803,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2420:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41806,
                  "mutability": "mutable",
                  "name": "symbol_",
                  "nameLocation": "2455:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 41830,
                  "src": "2441:21:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41805,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2441:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2419:44:27"
            },
            "returnParameters": {
              "id": 41810,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2490:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41861,
            "nodeType": "FunctionDefinition",
            "src": "2673:311:27",
            "nodes": [],
            "body": {
              "id": 41860,
              "nodeType": "Block",
              "src": "2792:192:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 41858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 41853,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 41846,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 41841,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41833,
                          "src": "2821:11:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 41843,
                                "name": "IERC721",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44476,
                                "src": "2841:7:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC721_$44476_$",
                                  "typeString": "type(contract IERC721)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC721_$44476_$",
                                  "typeString": "type(contract IERC721)"
                                }
                              ],
                              "id": 41842,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "2836:4:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 41844,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2836:13:27",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC721_$44476",
                              "typeString": "type(contract IERC721)"
                            }
                          },
                          "id": 41845,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2850:11:27",
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "2836:25:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "2821:40:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 41852,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 41847,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41833,
                          "src": "2877:11:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 41849,
                                "name": "IERC721Metadata",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44522,
                                "src": "2897:15:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC721Metadata_$44522_$",
                                  "typeString": "type(contract IERC721Metadata)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC721Metadata_$44522_$",
                                  "typeString": "type(contract IERC721Metadata)"
                                }
                              ],
                              "id": 41848,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "2892:4:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 41850,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2892:21:27",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC721Metadata_$44522",
                              "typeString": "type(contract IERC721Metadata)"
                            }
                          },
                          "id": 41851,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2914:11:27",
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "2892:33:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "2877:48:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "2821:104:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 41856,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41833,
                          "src": "2965:11:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "expression": {
                          "id": 41854,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -25,
                          "src": "2941:5:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_ERC721Upgradeable_$42795_$",
                            "typeString": "type(contract super ERC721Upgradeable)"
                          }
                        },
                        "id": 41855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2947:17:27",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 43224,
                        "src": "2941:23:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 41857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2941:36:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2821:156:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 41840,
                  "id": 41859,
                  "nodeType": "Return",
                  "src": "2802:175:27"
                }
              ]
            },
            "baseFunctions": [
              43224,
              46706
            ],
            "documentation": {
              "id": 41831,
              "nodeType": "StructuredDocumentation",
              "src": "2612:56:27",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "2682:17:27",
            "overrides": {
              "id": 41837,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 41835,
                  "name": "ERC165Upgradeable",
                  "nameLocations": [
                    "2749:17:27"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 43225,
                  "src": "2749:17:27"
                },
                {
                  "id": 41836,
                  "name": "IERC165",
                  "nameLocations": [
                    "2768:7:27"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46707,
                  "src": "2768:7:27"
                }
              ],
              "src": "2740:36:27"
            },
            "parameters": {
              "id": 41834,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41833,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "2707:11:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 41861,
                  "src": "2700:18:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 41832,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2700:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2699:20:27"
            },
            "returnParameters": {
              "id": 41840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41839,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41861,
                  "src": "2786:4:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 41838,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2786:4:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2785:6:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 41896,
            "nodeType": "FunctionDefinition",
            "src": "3043:265:27",
            "nodes": [],
            "body": {
              "id": 41895,
              "nodeType": "Block",
              "src": "3115:193:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41871
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41871,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3147:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 41895,
                      "src": "3125:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 41870,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 41869,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "3125:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "3125:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "3125:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41874,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41872,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "3151:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 41873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3151:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3125:45:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 41880,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41875,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41864,
                      "src": "3184:5:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 41878,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3201:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 41877,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3193:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41876,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3193:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41879,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3193:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3184:19:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41889,
                  "nodeType": "IfStatement",
                  "src": "3180:87:27",
                  "trueBody": {
                    "id": 41888,
                    "nodeType": "Block",
                    "src": "3205:62:27",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41884,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3253:1:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 41883,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3245:7:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41882,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3245:7:27",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41885,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3245:10:27",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 41881,
                            "name": "ERC721InvalidOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43316,
                            "src": "3226:18:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 41886,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3226:30:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41887,
                        "nodeType": "RevertStatement",
                        "src": "3219:37:27"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 41890,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41871,
                        "src": "3283:1:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                        }
                      },
                      "id": 41891,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3285:9:27",
                      "memberName": "_balances",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 41764,
                      "src": "3283:11:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 41893,
                    "indexExpression": {
                      "id": 41892,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41864,
                      "src": "3295:5:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3283:18:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 41868,
                  "id": 41894,
                  "nodeType": "Return",
                  "src": "3276:25:27"
                }
              ]
            },
            "baseFunctions": [
              44401
            ],
            "documentation": {
              "id": 41862,
              "nodeType": "StructuredDocumentation",
              "src": "2990:48:27",
              "text": " @dev See {IERC721-balanceOf}."
            },
            "functionSelector": "70a08231",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "3052:9:27",
            "parameters": {
              "id": 41865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41864,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3070:5:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 41896,
                  "src": "3062:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41863,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3062:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3061:15:27"
            },
            "returnParameters": {
              "id": 41868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41867,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41896,
                  "src": "3106:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41866,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3106:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3105:9:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 41909,
            "nodeType": "FunctionDefinition",
            "src": "3365:118:27",
            "nodes": [],
            "body": {
              "id": 41908,
              "nodeType": "Block",
              "src": "3437:46:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41905,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41899,
                        "src": "3468:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 41904,
                      "name": "_requireOwned",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42794,
                      "src": "3454:13:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 41906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3454:22:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 41903,
                  "id": 41907,
                  "nodeType": "Return",
                  "src": "3447:29:27"
                }
              ]
            },
            "baseFunctions": [
              44409
            ],
            "documentation": {
              "id": 41897,
              "nodeType": "StructuredDocumentation",
              "src": "3314:46:27",
              "text": " @dev See {IERC721-ownerOf}."
            },
            "functionSelector": "6352211e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ownerOf",
            "nameLocation": "3374:7:27",
            "parameters": {
              "id": 41900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41899,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3390:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 41909,
                  "src": "3382:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41898,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3382:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3381:17:27"
            },
            "returnParameters": {
              "id": 41903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41902,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41909,
                  "src": "3428:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41901,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3428:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3427:9:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 41925,
            "nodeType": "FunctionDefinition",
            "src": "3545:146:27",
            "nodes": [],
            "body": {
              "id": 41924,
              "nodeType": "Block",
              "src": "3605:86:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41917
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41917,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3637:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 41924,
                      "src": "3615:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 41916,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 41915,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "3615:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "3615:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "3615:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41920,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41918,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "3641:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 41919,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3641:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3615:45:27"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 41921,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41917,
                      "src": "3677:1:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                      }
                    },
                    "id": 41922,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3679:5:27",
                    "memberName": "_name",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 41754,
                    "src": "3677:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 41914,
                  "id": 41923,
                  "nodeType": "Return",
                  "src": "3670:14:27"
                }
              ]
            },
            "baseFunctions": [
              44507
            ],
            "documentation": {
              "id": 41910,
              "nodeType": "StructuredDocumentation",
              "src": "3489:51:27",
              "text": " @dev See {IERC721Metadata-name}."
            },
            "functionSelector": "06fdde03",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "3554:4:27",
            "parameters": {
              "id": 41911,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3558:2:27"
            },
            "returnParameters": {
              "id": 41914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41913,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41925,
                  "src": "3590:13:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41912,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3590:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3589:15:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 41941,
            "nodeType": "FunctionDefinition",
            "src": "3755:150:27",
            "nodes": [],
            "body": {
              "id": 41940,
              "nodeType": "Block",
              "src": "3817:88:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41933
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41933,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3849:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 41940,
                      "src": "3827:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 41932,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 41931,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "3827:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "3827:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "3827:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41936,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41934,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "3853:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 41935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3853:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3827:45:27"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 41937,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41933,
                      "src": "3889:1:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                      }
                    },
                    "id": 41938,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3891:7:27",
                    "memberName": "_symbol",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 41756,
                    "src": "3889:9:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 41930,
                  "id": 41939,
                  "nodeType": "Return",
                  "src": "3882:16:27"
                }
              ]
            },
            "baseFunctions": [
              44513
            ],
            "documentation": {
              "id": 41926,
              "nodeType": "StructuredDocumentation",
              "src": "3697:53:27",
              "text": " @dev See {IERC721Metadata-symbol}."
            },
            "functionSelector": "95d89b41",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "3764:6:27",
            "parameters": {
              "id": 41927,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3770:2:27"
            },
            "returnParameters": {
              "id": 41930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41929,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41941,
                  "src": "3802:13:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41928,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3802:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3801:15:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 41977,
            "nodeType": "FunctionDefinition",
            "src": "3971:255:27",
            "nodes": [],
            "body": {
              "id": 41976,
              "nodeType": "Block",
              "src": "4050:176:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41950,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41944,
                        "src": "4074:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 41949,
                      "name": "_requireOwned",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42794,
                      "src": "4060:13:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 41951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4060:22:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 41952,
                  "nodeType": "ExpressionStatement",
                  "src": "4060:22:27"
                },
                {
                  "assignments": [
                    41954
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41954,
                      "mutability": "mutable",
                      "name": "baseURI",
                      "nameLocation": "4107:7:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 41976,
                      "src": "4093:21:27",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 41953,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "4093:6:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41957,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41955,
                      "name": "_baseURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41986,
                      "src": "4117:8:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view returns (string memory)"
                      }
                    },
                    "id": 41956,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4117:10:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4093:34:27"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 41964,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 41960,
                              "name": "baseURI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41954,
                              "src": "4150:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 41959,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4144:5:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 41958,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "4144:5:27",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 41961,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4144:14:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 41962,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4159:6:27",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "4144:21:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 41963,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4168:1:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4144:25:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "hexValue": "",
                      "id": 41973,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4217:2:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                        "typeString": "literal_string \"\""
                      },
                      "value": ""
                    },
                    "id": 41974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "4144:75:27",
                    "trueExpression": {
                      "arguments": [
                        {
                          "id": 41968,
                          "name": "baseURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41954,
                          "src": "4186:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 41969,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41944,
                              "src": "4195:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 41970,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4203:8:27",
                            "memberName": "toString",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 45913,
                            "src": "4195:16:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256) pure returns (string memory)"
                            }
                          },
                          "id": 41971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4195:18:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "expression": {
                          "id": 41966,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4172:6:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 41965,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "4172:6:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 41967,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4179:6:27",
                        "memberName": "concat",
                        "nodeType": "MemberAccess",
                        "src": "4172:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_stringconcat_pure$__$returns$_t_string_memory_ptr_$",
                          "typeString": "function () pure returns (string memory)"
                        }
                      },
                      "id": 41972,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4172:42:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 41948,
                  "id": 41975,
                  "nodeType": "Return",
                  "src": "4137:82:27"
                }
              ]
            },
            "baseFunctions": [
              44521
            ],
            "documentation": {
              "id": 41942,
              "nodeType": "StructuredDocumentation",
              "src": "3911:55:27",
              "text": " @dev See {IERC721Metadata-tokenURI}."
            },
            "functionSelector": "c87b56dd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokenURI",
            "nameLocation": "3980:8:27",
            "parameters": {
              "id": 41945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41944,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3997:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 41977,
                  "src": "3989:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41943,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3989:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3988:17:27"
            },
            "returnParameters": {
              "id": 41948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41947,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41977,
                  "src": "4035:13:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41946,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4035:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4034:15:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 41986,
            "nodeType": "FunctionDefinition",
            "src": "4468:92:27",
            "nodes": [],
            "body": {
              "id": 41985,
              "nodeType": "Block",
              "src": "4534:26:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "",
                    "id": 41983,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4551:2:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                      "typeString": "literal_string \"\""
                    },
                    "value": ""
                  },
                  "functionReturnParameters": 41982,
                  "id": 41984,
                  "nodeType": "Return",
                  "src": "4544:9:27"
                }
              ]
            },
            "documentation": {
              "id": 41978,
              "nodeType": "StructuredDocumentation",
              "src": "4232:231:27",
              "text": " @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\n token will be the concatenation of the `baseURI` and the `tokenId`. Empty\n by default, can be overridden in child contracts."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_baseURI",
            "nameLocation": "4477:8:27",
            "parameters": {
              "id": 41979,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4485:2:27"
            },
            "returnParameters": {
              "id": 41982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41981,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41986,
                  "src": "4519:13:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41980,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4519:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4518:15:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42002,
            "nodeType": "FunctionDefinition",
            "src": "4617:113:27",
            "nodes": [],
            "body": {
              "id": 42001,
              "nodeType": "Block",
              "src": "4678:52:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41995,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41989,
                        "src": "4697:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41996,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41991,
                        "src": "4701:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 41997,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42823,
                          "src": "4710:10:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 41998,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4710:12:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 41994,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        42646,
                        42720
                      ],
                      "referencedDeclaration": 42646,
                      "src": "4688:8:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (address,uint256,address)"
                      }
                    },
                    "id": 41999,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4688:35:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42000,
                  "nodeType": "ExpressionStatement",
                  "src": "4688:35:27"
                }
              ]
            },
            "baseFunctions": [
              44449
            ],
            "documentation": {
              "id": 41987,
              "nodeType": "StructuredDocumentation",
              "src": "4566:46:27",
              "text": " @dev See {IERC721-approve}."
            },
            "functionSelector": "095ea7b3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "4626:7:27",
            "parameters": {
              "id": 41992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41989,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4642:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42002,
                  "src": "4634:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41988,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4634:7:27",
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
                  "id": 41991,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "4654:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42002,
                  "src": "4646:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41990,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4646:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4633:29:27"
            },
            "returnParameters": {
              "id": 41993,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4678:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 42019,
            "nodeType": "FunctionDefinition",
            "src": "4791:154:27",
            "nodes": [],
            "body": {
              "id": 42018,
              "nodeType": "Block",
              "src": "4867:78:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 42011,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42005,
                        "src": "4891:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 42010,
                      "name": "_requireOwned",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42794,
                      "src": "4877:13:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 42012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4877:22:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 42013,
                  "nodeType": "ExpressionStatement",
                  "src": "4877:22:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 42015,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42005,
                        "src": "4930:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 42014,
                      "name": "_getApproved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42193,
                      "src": "4917:12:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 42016,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4917:21:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 42009,
                  "id": 42017,
                  "nodeType": "Return",
                  "src": "4910:28:27"
                }
              ]
            },
            "baseFunctions": [
              44465
            ],
            "documentation": {
              "id": 42003,
              "nodeType": "StructuredDocumentation",
              "src": "4736:50:27",
              "text": " @dev See {IERC721-getApproved}."
            },
            "functionSelector": "081812fc",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getApproved",
            "nameLocation": "4800:11:27",
            "parameters": {
              "id": 42006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42005,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "4820:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42019,
                  "src": "4812:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42004,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4812:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4811:17:27"
            },
            "returnParameters": {
              "id": 42009,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42008,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42019,
                  "src": "4858:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42007,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4858:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4857:9:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 42035,
            "nodeType": "FunctionDefinition",
            "src": "5012:144:27",
            "nodes": [],
            "body": {
              "id": 42034,
              "nodeType": "Block",
              "src": "5087:69:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 42028,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42823,
                          "src": "5116:10:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 42029,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5116:12:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42030,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42022,
                        "src": "5130:8:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42031,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42024,
                        "src": "5140:8:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 42027,
                      "name": "_setApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42765,
                      "src": "5097:18:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 42032,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5097:52:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42033,
                  "nodeType": "ExpressionStatement",
                  "src": "5097:52:27"
                }
              ]
            },
            "baseFunctions": [
              44457
            ],
            "documentation": {
              "id": 42020,
              "nodeType": "StructuredDocumentation",
              "src": "4951:56:27",
              "text": " @dev See {IERC721-setApprovalForAll}."
            },
            "functionSelector": "a22cb465",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "5021:17:27",
            "parameters": {
              "id": 42025,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42022,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "5047:8:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42035,
                  "src": "5039:16:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42021,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5039:7:27",
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
                  "id": 42024,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "5062:8:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42035,
                  "src": "5057:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 42023,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5057:4:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5038:33:27"
            },
            "returnParameters": {
              "id": 42026,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5087:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 42059,
            "nodeType": "FunctionDefinition",
            "src": "5222:210:27",
            "nodes": [],
            "body": {
              "id": 42058,
              "nodeType": "Block",
              "src": "5316:116:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42047
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42047,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "5348:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42058,
                      "src": "5326:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 42046,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 42045,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "5326:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "5326:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "5326:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42050,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 42048,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "5352:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 42049,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5352:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5326:45:27"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 42051,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42047,
                          "src": "5388:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                            "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                          }
                        },
                        "id": 42052,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5390:18:27",
                        "memberName": "_operatorApprovals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 41774,
                        "src": "5388:20:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                          "typeString": "mapping(address => mapping(address => bool))"
                        }
                      },
                      "id": 42054,
                      "indexExpression": {
                        "id": 42053,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42038,
                        "src": "5409:5:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5388:27:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 42056,
                    "indexExpression": {
                      "id": 42055,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42040,
                      "src": "5416:8:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5388:37:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 42044,
                  "id": 42057,
                  "nodeType": "Return",
                  "src": "5381:44:27"
                }
              ]
            },
            "baseFunctions": [
              44475
            ],
            "documentation": {
              "id": 42036,
              "nodeType": "StructuredDocumentation",
              "src": "5162:55:27",
              "text": " @dev See {IERC721-isApprovedForAll}."
            },
            "functionSelector": "e985e9c5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "5231:16:27",
            "parameters": {
              "id": 42041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42038,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "5256:5:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42059,
                  "src": "5248:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42037,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5248:7:27",
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
                  "id": 42040,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "5271:8:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42059,
                  "src": "5263:16:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42039,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5263:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5247:33:27"
            },
            "returnParameters": {
              "id": 42044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42043,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42059,
                  "src": "5310:4:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 42042,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5310:4:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5309:6:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 42105,
            "nodeType": "FunctionDefinition",
            "src": "5494:578:27",
            "nodes": [],
            "body": {
              "id": 42104,
              "nodeType": "Block",
              "src": "5574:498:27",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42069,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42064,
                      "src": "5588:2:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42072,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5602:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42071,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5594:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42070,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5594:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42073,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5594:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5588:16:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42083,
                  "nodeType": "IfStatement",
                  "src": "5584:87:27",
                  "trueBody": {
                    "id": 42082,
                    "nodeType": "Block",
                    "src": "5606:65:27",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 42078,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5657:1:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 42077,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5649:7:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 42076,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5649:7:27",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 42079,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5649:10:27",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 42075,
                            "name": "ERC721InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43340,
                            "src": "5627:21:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 42080,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5627:33:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 42081,
                        "nodeType": "RevertStatement",
                        "src": "5620:40:27"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    42085
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42085,
                      "mutability": "mutable",
                      "name": "previousOwner",
                      "nameLocation": "5897:13:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42104,
                      "src": "5889:21:27",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 42084,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5889:7:27",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42092,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 42087,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42064,
                        "src": "5921:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42088,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42066,
                        "src": "5925:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 42089,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42823,
                          "src": "5934:10:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 42090,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5934:12:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 42086,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42392,
                      "src": "5913:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$_t_address_$",
                        "typeString": "function (address,uint256,address) returns (address)"
                      }
                    },
                    "id": 42091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5913:34:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5889:58:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42093,
                      "name": "previousOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42085,
                      "src": "5961:13:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 42094,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42062,
                      "src": "5978:4:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5961:21:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42103,
                  "nodeType": "IfStatement",
                  "src": "5957:109:27",
                  "trueBody": {
                    "id": 42102,
                    "nodeType": "Block",
                    "src": "5984:82:27",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 42097,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42062,
                              "src": "6026:4:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 42098,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42066,
                              "src": "6032:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 42099,
                              "name": "previousOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42085,
                              "src": "6041:13:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
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
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 42096,
                            "name": "ERC721IncorrectOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43330,
                            "src": "6005:20:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_address_$returns$_t_error_$",
                              "typeString": "function (address,uint256,address) pure returns (error)"
                            }
                          },
                          "id": 42100,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6005:50:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 42101,
                        "nodeType": "RevertStatement",
                        "src": "5998:57:27"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              44441
            ],
            "documentation": {
              "id": 42060,
              "nodeType": "StructuredDocumentation",
              "src": "5438:51:27",
              "text": " @dev See {IERC721-transferFrom}."
            },
            "functionSelector": "23b872dd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "5503:12:27",
            "parameters": {
              "id": 42067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42062,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "5524:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42105,
                  "src": "5516:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5516:7:27",
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
                  "id": 42064,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "5538:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42105,
                  "src": "5530:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42063,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5530:7:27",
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
                  "id": 42066,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "5550:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42105,
                  "src": "5542:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42065,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5542:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5515:43:27"
            },
            "returnParameters": {
              "id": 42068,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5574:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 42123,
            "nodeType": "FunctionDefinition",
            "src": "6138:132:27",
            "nodes": [],
            "body": {
              "id": 42122,
              "nodeType": "Block",
              "src": "6214:56:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 42116,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42108,
                        "src": "6241:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42117,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42110,
                        "src": "6247:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42118,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42112,
                        "src": "6251:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 42119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6260:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 42115,
                      "name": "safeTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        42123,
                        42153
                      ],
                      "referencedDeclaration": 42153,
                      "src": "6224:16:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 42120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6224:39:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42121,
                  "nodeType": "ExpressionStatement",
                  "src": "6224:39:27"
                }
              ]
            },
            "baseFunctions": [
              44431
            ],
            "documentation": {
              "id": 42106,
              "nodeType": "StructuredDocumentation",
              "src": "6078:55:27",
              "text": " @dev See {IERC721-safeTransferFrom}."
            },
            "functionSelector": "42842e0e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "6147:16:27",
            "parameters": {
              "id": 42113,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42108,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6172:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42123,
                  "src": "6164:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42107,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6164:7:27",
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
                  "id": 42110,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6186:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42123,
                  "src": "6178:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42109,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6178:7:27",
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
                  "id": 42112,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "6198:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42123,
                  "src": "6190:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42111,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6190:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6163:43:27"
            },
            "returnParameters": {
              "id": 42114,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6214:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 42153,
            "nodeType": "FunctionDefinition",
            "src": "6336:233:27",
            "nodes": [],
            "body": {
              "id": 42152,
              "nodeType": "Block",
              "src": "6439:130:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 42136,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42126,
                        "src": "6462:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42137,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42128,
                        "src": "6468:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42138,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42130,
                        "src": "6472:7:27",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 42135,
                      "name": "transferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42105,
                      "src": "6449:12:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 42139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6449:31:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42140,
                  "nodeType": "ExpressionStatement",
                  "src": "6449:31:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 42144,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42823,
                          "src": "6524:10:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 42145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6524:12:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42146,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42126,
                        "src": "6538:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42147,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42128,
                        "src": "6544:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42148,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42130,
                        "src": "6548:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 42149,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42132,
                        "src": "6557:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 42141,
                        "name": "ERC721Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44599,
                        "src": "6490:11:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC721Utils_$44599_$",
                          "typeString": "type(library ERC721Utils)"
                        }
                      },
                      "id": 42143,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6502:21:27",
                      "memberName": "checkOnERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 44598,
                      "src": "6490:33:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 42150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6490:72:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42151,
                  "nodeType": "ExpressionStatement",
                  "src": "6490:72:27"
                }
              ]
            },
            "baseFunctions": [
              44421
            ],
            "documentation": {
              "id": 42124,
              "nodeType": "StructuredDocumentation",
              "src": "6276:55:27",
              "text": " @dev See {IERC721-safeTransferFrom}."
            },
            "functionSelector": "b88d4fde",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "6345:16:27",
            "parameters": {
              "id": 42133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42126,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6370:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42153,
                  "src": "6362:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42125,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6362:7:27",
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
                  "id": 42128,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6384:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42153,
                  "src": "6376:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42127,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6376:7:27",
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
                  "id": 42130,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "6396:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42153,
                  "src": "6388:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42129,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6388:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42132,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "6418:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42153,
                  "src": "6405:17:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 42131,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6405:5:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6361:62:27"
            },
            "returnParameters": {
              "id": 42134,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6439:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 42173,
            "nodeType": "FunctionDefinition",
            "src": "7084:172:27",
            "nodes": [],
            "body": {
              "id": 42172,
              "nodeType": "Block",
              "src": "7159:97:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42163
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42163,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "7191:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42172,
                      "src": "7169:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 42162,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 42161,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "7169:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "7169:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "7169:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42166,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 42164,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "7195:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 42165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7195:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7169:45:27"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 42167,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42163,
                        "src": "7231:1:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                        }
                      },
                      "id": 42168,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7233:7:27",
                      "memberName": "_owners",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 41760,
                      "src": "7231:9:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 42170,
                    "indexExpression": {
                      "id": 42169,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42156,
                      "src": "7241:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7231:18:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 42160,
                  "id": 42171,
                  "nodeType": "Return",
                  "src": "7224:25:27"
                }
              ]
            },
            "documentation": {
              "id": 42154,
              "nodeType": "StructuredDocumentation",
              "src": "6575:504:27",
              "text": " @dev Returns the owner of the `tokenId`. Does NOT revert if token doesn't exist\n IMPORTANT: Any overrides to this function that add ownership of tokens not tracked by the\n core ERC-721 logic MUST be matched with the use of {_increaseBalance} to keep balances\n consistent with ownership. The invariant to preserve is that for any address `a` the value returned by\n `balanceOf(a)` must be equal to the number of tokens such that `_ownerOf(tokenId)` is `a`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ownerOf",
            "nameLocation": "7093:8:27",
            "parameters": {
              "id": 42157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42156,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "7110:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42173,
                  "src": "7102:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42155,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7102:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7101:17:27"
            },
            "returnParameters": {
              "id": 42160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42159,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42173,
                  "src": "7150:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42158,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7150:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7149:9:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42193,
            "nodeType": "FunctionDefinition",
            "src": "7372:184:27",
            "nodes": [],
            "body": {
              "id": 42192,
              "nodeType": "Block",
              "src": "7451:105:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42183
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42183,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "7483:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42192,
                      "src": "7461:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 42182,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 42181,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "7461:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "7461:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "7461:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42186,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 42184,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "7487:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 42185,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7487:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7461:45:27"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 42187,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42183,
                        "src": "7523:1:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                        }
                      },
                      "id": 42188,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7525:15:27",
                      "memberName": "_tokenApprovals",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 41768,
                      "src": "7523:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 42190,
                    "indexExpression": {
                      "id": 42189,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42176,
                      "src": "7541:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7523:26:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 42180,
                  "id": 42191,
                  "nodeType": "Return",
                  "src": "7516:33:27"
                }
              ]
            },
            "documentation": {
              "id": 42174,
              "nodeType": "StructuredDocumentation",
              "src": "7262:105:27",
              "text": " @dev Returns the approved address for `tokenId`. Returns 0 if `tokenId` is not minted."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getApproved",
            "nameLocation": "7381:12:27",
            "parameters": {
              "id": 42177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42176,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "7402:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42193,
                  "src": "7394:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42175,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7394:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7393:17:27"
            },
            "returnParameters": {
              "id": 42180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42179,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42193,
                  "src": "7442:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42178,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7442:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7441:9:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42229,
            "nodeType": "FunctionDefinition",
            "src": "7867:272:27",
            "nodes": [],
            "body": {
              "id": 42228,
              "nodeType": "Block",
              "src": "7976:163:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 42226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 42210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 42205,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42198,
                        "src": "8005:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 42208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8024:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 42207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8016:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 42206,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "8016:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 42209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8016:10:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "8005:21:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 42224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 42218,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 42213,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 42211,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42196,
                                "src": "8043:5:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "id": 42212,
                                "name": "spender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42198,
                                "src": "8052:7:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "8043:16:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "||",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "id": 42215,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 42196,
                                  "src": "8080:5:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 42216,
                                  "name": "spender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 42198,
                                  "src": "8087:7:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
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
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 42214,
                                "name": "isApprovedForAll",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42059,
                                "src": "8063:16:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address,address) view returns (bool)"
                                }
                              },
                              "id": 42217,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8063:32:27",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "8043:52:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 42223,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 42220,
                                  "name": "tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 42200,
                                  "src": "8112:7:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 42219,
                                "name": "_getApproved",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42193,
                                "src": "8099:12:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                  "typeString": "function (uint256) view returns (address)"
                                }
                              },
                              "id": 42221,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8099:21:27",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 42222,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42198,
                              "src": "8124:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "8099:32:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "8043:88:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 42225,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "8042:90:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "8005:127:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 42204,
                  "id": 42227,
                  "nodeType": "Return",
                  "src": "7986:146:27"
                }
              ]
            },
            "documentation": {
              "id": 42194,
              "nodeType": "StructuredDocumentation",
              "src": "7562:300:27",
              "text": " @dev Returns whether `spender` is allowed to manage `owner`'s tokens, or `tokenId` in\n particular (ignoring whether it is owned by `owner`).\n WARNING: This function assumes that `owner` is the actual owner of `tokenId` and does not verify this\n assumption."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isAuthorized",
            "nameLocation": "7876:13:27",
            "parameters": {
              "id": 42201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42196,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "7898:5:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42229,
                  "src": "7890:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42195,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7890:7:27",
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
                  "id": 42198,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "7913:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42229,
                  "src": "7905:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42197,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7905:7:27",
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
                  "id": 42200,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "7930:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42229,
                  "src": "7922:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42199,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7922:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7889:49:27"
            },
            "returnParameters": {
              "id": 42204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42203,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42229,
                  "src": "7970:4:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 42202,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7970:4:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7969:6:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42266,
            "nodeType": "FunctionDefinition",
            "src": "8571:368:27",
            "nodes": [],
            "body": {
              "id": 42265,
              "nodeType": "Block",
              "src": "8668:271:27",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 42244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "8682:39:27",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 42240,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42232,
                          "src": "8697:5:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 42241,
                          "name": "spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42234,
                          "src": "8704:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 42242,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42236,
                          "src": "8713:7:27",
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 42239,
                        "name": "_isAuthorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42229,
                        "src": "8683:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) view returns (bool)"
                        }
                      },
                      "id": 42243,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8683:38:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42264,
                  "nodeType": "IfStatement",
                  "src": "8678:255:27",
                  "trueBody": {
                    "id": 42263,
                    "nodeType": "Block",
                    "src": "8723:210:27",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 42250,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 42245,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42232,
                            "src": "8741:5:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "arguments": [
                              {
                                "hexValue": "30",
                                "id": 42248,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8758:1:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 42247,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8750:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 42246,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "8750:7:27",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 42249,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8750:10:27",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "8741:19:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 42261,
                          "nodeType": "Block",
                          "src": "8839:84:27",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 42257,
                                    "name": "spender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 42234,
                                    "src": "8891:7:27",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 42258,
                                    "name": "tokenId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 42236,
                                    "src": "8900:7:27",
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
                                  "id": 42256,
                                  "name": "ERC721InsufficientApproval",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43347,
                                  "src": "8864:26:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$returns$_t_error_$",
                                    "typeString": "function (address,uint256) pure returns (error)"
                                  }
                                },
                                "id": 42259,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8864:44:27",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_error",
                                  "typeString": "error"
                                }
                              },
                              "id": 42260,
                              "nodeType": "RevertStatement",
                              "src": "8857:51:27"
                            }
                          ]
                        },
                        "id": 42262,
                        "nodeType": "IfStatement",
                        "src": "8737:186:27",
                        "trueBody": {
                          "id": 42255,
                          "nodeType": "Block",
                          "src": "8762:71:27",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 42252,
                                    "name": "tokenId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 42236,
                                    "src": "8810:7:27",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 42251,
                                  "name": "ERC721NonexistentToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43321,
                                  "src": "8787:22:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                                    "typeString": "function (uint256) pure returns (error)"
                                  }
                                },
                                "id": 42253,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8787:31:27",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_error",
                                  "typeString": "error"
                                }
                              },
                              "id": 42254,
                              "nodeType": "RevertStatement",
                              "src": "8780:38:27"
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 42230,
              "nodeType": "StructuredDocumentation",
              "src": "8145:421:27",
              "text": " @dev Checks if `spender` can operate on `tokenId`, assuming the provided `owner` is the actual owner.\n Reverts if:\n - `spender` does not have approval from `owner` for `tokenId`.\n - `spender` does not have approval to manage all of `owner`'s assets.\n WARNING: This function assumes that `owner` is the actual owner of `tokenId` and does not verify this\n assumption."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkAuthorized",
            "nameLocation": "8580:16:27",
            "parameters": {
              "id": 42237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42232,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "8605:5:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42266,
                  "src": "8597:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42231,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8597:7:27",
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
                  "id": 42234,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "8620:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42266,
                  "src": "8612:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42233,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8612:7:27",
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
                  "id": 42236,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "8637:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42266,
                  "src": "8629:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42235,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8629:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8596:49:27"
            },
            "returnParameters": {
              "id": 42238,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8668:0:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42290,
            "nodeType": "FunctionDefinition",
            "src": "9581:210:27",
            "nodes": [],
            "body": {
              "id": 42289,
              "nodeType": "Block",
              "src": "9656:135:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42276
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42276,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "9688:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42289,
                      "src": "9666:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 42275,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 42274,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "9666:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "9666:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "9666:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42279,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 42277,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "9692:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 42278,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9692:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9666:45:27"
                },
                {
                  "id": 42288,
                  "nodeType": "UncheckedBlock",
                  "src": "9721:64:27",
                  "statements": [
                    {
                      "expression": {
                        "id": 42286,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "baseExpression": {
                            "expression": {
                              "id": 42280,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42276,
                              "src": "9745:1:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                                "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                              }
                            },
                            "id": 42283,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9747:9:27",
                            "memberName": "_balances",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 41764,
                            "src": "9745:11:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 42284,
                          "indexExpression": {
                            "id": 42282,
                            "name": "account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42269,
                            "src": "9757:7:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "9745:20:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "id": 42285,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42271,
                          "src": "9769:5:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "src": "9745:29:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 42287,
                      "nodeType": "ExpressionStatement",
                      "src": "9745:29:27"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 42267,
              "nodeType": "StructuredDocumentation",
              "src": "8945:631:27",
              "text": " @dev Unsafe write access to the balances, used by extensions that \"mint\" tokens using an {ownerOf} override.\n NOTE: the value is limited to type(uint128).max. This protect against _balance overflow. It is unrealistic that\n a uint256 would ever overflow from increments when these increments are bounded to uint128 values.\n WARNING: Increasing an account's balance using this function tends to be paired with an override of the\n {_ownerOf} function to resolve the ownership of the corresponding tokens so that balances and ownership\n remain consistent with one another."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_increaseBalance",
            "nameLocation": "9590:16:27",
            "parameters": {
              "id": 42272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42269,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "9615:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42290,
                  "src": "9607:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42268,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9607:7:27",
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
                  "id": 42271,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9632:5:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42290,
                  "src": "9624:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 42270,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "9624:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9606:32:27"
            },
            "returnParameters": {
              "id": 42273,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9656:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42392,
            "nodeType": "FunctionDefinition",
            "src": "10384:856:27",
            "nodes": [],
            "body": {
              "id": 42391,
              "nodeType": "Block",
              "src": "10479:761:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42304
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42304,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "10511:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42391,
                      "src": "10489:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 42303,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 42302,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "10489:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "10489:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "10489:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42307,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 42305,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "10515:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 42306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10515:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10489:45:27"
                },
                {
                  "assignments": [
                    42309
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42309,
                      "mutability": "mutable",
                      "name": "from",
                      "nameLocation": "10552:4:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42391,
                      "src": "10544:12:27",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 42308,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "10544:7:27",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42313,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 42311,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42295,
                        "src": "10568:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 42310,
                      "name": "_ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42173,
                      "src": "10559:8:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 42312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10559:17:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10544:32:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42314,
                      "name": "auth",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42297,
                      "src": "10636:4:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42317,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10652:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42316,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10644:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42315,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10644:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42318,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10644:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10636:18:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42327,
                  "nodeType": "IfStatement",
                  "src": "10632:86:27",
                  "trueBody": {
                    "id": 42326,
                    "nodeType": "Block",
                    "src": "10656:62:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 42321,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42309,
                              "src": "10687:4:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 42322,
                              "name": "auth",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42297,
                              "src": "10693:4:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 42323,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42295,
                              "src": "10699:7:27",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 42320,
                            "name": "_checkAuthorized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42266,
                            "src": "10670:16:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256) view"
                            }
                          },
                          "id": 42324,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10670:37:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 42325,
                        "nodeType": "ExpressionStatement",
                        "src": "10670:37:27"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42328,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42309,
                      "src": "10762:4:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10778:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10770:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42329,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10770:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42332,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10770:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10762:18:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42357,
                  "nodeType": "IfStatement",
                  "src": "10758:258:27",
                  "trueBody": {
                    "id": 42356,
                    "nodeType": "Block",
                    "src": "10782:234:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 42337,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10895:1:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 42336,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10887:7:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 42335,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10887:7:27",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 42338,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10887:10:27",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 42339,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42295,
                              "src": "10899:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 42342,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10916:1:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 42341,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10908:7:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 42340,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10908:7:27",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 42343,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10908:10:27",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "hexValue": "66616c7365",
                              "id": 42344,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10920:5:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
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
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 42334,
                            "name": "_approve",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              42646,
                              42720
                            ],
                            "referencedDeclaration": 42720,
                            "src": "10878:8:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bool_$returns$__$",
                              "typeString": "function (address,uint256,address,bool)"
                            }
                          },
                          "id": 42345,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10878:48:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 42346,
                        "nodeType": "ExpressionStatement",
                        "src": "10878:48:27"
                      },
                      {
                        "id": 42355,
                        "nodeType": "UncheckedBlock",
                        "src": "10941:65:27",
                        "statements": [
                          {
                            "expression": {
                              "id": 42353,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 42347,
                                    "name": "$",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 42304,
                                    "src": "10969:1:27",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                                    }
                                  },
                                  "id": 42350,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "10971:9:27",
                                  "memberName": "_balances",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 41764,
                                  "src": "10969:11:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 42351,
                                "indexExpression": {
                                  "id": 42349,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 42309,
                                  "src": "10981:4:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "10969:17:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "-=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 42352,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10990:1:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "10969:22:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 42354,
                            "nodeType": "ExpressionStatement",
                            "src": "10969:22:27"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42358,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42293,
                      "src": "11030:2:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42361,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11044:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42360,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "11036:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42359,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11036:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11036:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11030:16:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42374,
                  "nodeType": "IfStatement",
                  "src": "11026:109:27",
                  "trueBody": {
                    "id": 42373,
                    "nodeType": "Block",
                    "src": "11048:87:27",
                    "statements": [
                      {
                        "id": 42372,
                        "nodeType": "UncheckedBlock",
                        "src": "11062:63:27",
                        "statements": [
                          {
                            "expression": {
                              "id": 42370,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 42364,
                                    "name": "$",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 42304,
                                    "src": "11090:1:27",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                                    }
                                  },
                                  "id": 42367,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "11092:9:27",
                                  "memberName": "_balances",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 41764,
                                  "src": "11090:11:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 42368,
                                "indexExpression": {
                                  "id": 42366,
                                  "name": "to",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 42293,
                                  "src": "11102:2:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "11090:15:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 42369,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11109:1:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "11090:20:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 42371,
                            "nodeType": "ExpressionStatement",
                            "src": "11090:20:27"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 42381,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "expression": {
                          "id": 42375,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42304,
                          "src": "11145:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                            "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                          }
                        },
                        "id": 42378,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11147:7:27",
                        "memberName": "_owners",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 41760,
                        "src": "11145:9:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 42379,
                      "indexExpression": {
                        "id": 42377,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42295,
                        "src": "11155:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "11145:18:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 42380,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42293,
                      "src": "11166:2:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11145:23:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 42382,
                  "nodeType": "ExpressionStatement",
                  "src": "11145:23:27"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 42384,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42309,
                        "src": "11193:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42385,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42293,
                        "src": "11199:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42386,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42295,
                        "src": "11203:7:27",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 42383,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44375,
                      "src": "11184:8:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 42387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11184:27:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42388,
                  "nodeType": "EmitStatement",
                  "src": "11179:32:27"
                },
                {
                  "expression": {
                    "id": 42389,
                    "name": "from",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 42309,
                    "src": "11229:4:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 42301,
                  "id": 42390,
                  "nodeType": "Return",
                  "src": "11222:11:27"
                }
              ]
            },
            "documentation": {
              "id": 42291,
              "nodeType": "StructuredDocumentation",
              "src": "9797:582:27",
              "text": " @dev Transfers `tokenId` from its current owner to `to`, or alternatively mints (or burns) if the current owner\n (or `to`) is the zero address. Returns the owner of the `tokenId` before the update.\n The `auth` argument is optional. If the value passed is non 0, then this function will check that\n `auth` is either the owner of the token, or approved to operate on the token (by the owner).\n Emits a {Transfer} event.\n NOTE: If overriding this function in a way that tracks balances, see also {_increaseBalance}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_update",
            "nameLocation": "10393:7:27",
            "parameters": {
              "id": 42298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42293,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "10409:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42392,
                  "src": "10401:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42292,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10401:7:27",
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
                  "id": 42295,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "10421:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42392,
                  "src": "10413:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42294,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10413:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42297,
                  "mutability": "mutable",
                  "name": "auth",
                  "nameLocation": "10438:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42392,
                  "src": "10430:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42296,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10430:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10400:43:27"
            },
            "returnParameters": {
              "id": 42301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42300,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42392,
                  "src": "10470:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42299,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10470:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10469:9:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42442,
            "nodeType": "FunctionDefinition",
            "src": "11562:327:27",
            "nodes": [],
            "body": {
              "id": 42441,
              "nodeType": "Block",
              "src": "11615:274:27",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42405,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42400,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42395,
                      "src": "11629:2:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42403,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11643:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42402,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "11635:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42401,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11635:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42404,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11635:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11629:16:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42414,
                  "nodeType": "IfStatement",
                  "src": "11625:87:27",
                  "trueBody": {
                    "id": 42413,
                    "nodeType": "Block",
                    "src": "11647:65:27",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 42409,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11698:1:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 42408,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "11690:7:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 42407,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "11690:7:27",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 42410,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11690:10:27",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 42406,
                            "name": "ERC721InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43340,
                            "src": "11668:21:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 42411,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11668:33:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 42412,
                        "nodeType": "RevertStatement",
                        "src": "11661:40:27"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    42416
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42416,
                      "mutability": "mutable",
                      "name": "previousOwner",
                      "nameLocation": "11729:13:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42441,
                      "src": "11721:21:27",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 42415,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "11721:7:27",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42425,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 42418,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42395,
                        "src": "11753:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42419,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42397,
                        "src": "11757:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 42422,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11774:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 42421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11766:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 42420,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "11766:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 42423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11766:10:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 42417,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42392,
                      "src": "11745:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$_t_address_$",
                        "typeString": "function (address,uint256,address) returns (address)"
                      }
                    },
                    "id": 42424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11745:32:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11721:56:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42426,
                      "name": "previousOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42416,
                      "src": "11791:13:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42429,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11816:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42428,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "11808:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42427,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11808:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11808:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11791:27:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42440,
                  "nodeType": "IfStatement",
                  "src": "11787:96:27",
                  "trueBody": {
                    "id": 42439,
                    "nodeType": "Block",
                    "src": "11820:63:27",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 42435,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11869:1:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 42434,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "11861:7:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 42433,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "11861:7:27",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 42436,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11861:10:27",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 42432,
                            "name": "ERC721InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43335,
                            "src": "11841:19:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 42437,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11841:31:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 42438,
                        "nodeType": "RevertStatement",
                        "src": "11834:38:27"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 42393,
              "nodeType": "StructuredDocumentation",
              "src": "11246:311:27",
              "text": " @dev Mints `tokenId` and transfers it to `to`.\n WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\n Requirements:\n - `tokenId` must not exist.\n - `to` cannot be the zero address.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mint",
            "nameLocation": "11571:5:27",
            "parameters": {
              "id": 42398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42395,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "11585:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42442,
                  "src": "11577:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42394,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11577:7:27",
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
                  "id": 42397,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "11597:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42442,
                  "src": "11589:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42396,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11589:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11576:29:27"
            },
            "returnParameters": {
              "id": 42399,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11615:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42457,
            "nodeType": "FunctionDefinition",
            "src": "12240:100:27",
            "nodes": [],
            "body": {
              "id": 42456,
              "nodeType": "Block",
              "src": "12297:43:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 42451,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42445,
                        "src": "12317:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42452,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42447,
                        "src": "12321:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 42453,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12330:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
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
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 42450,
                      "name": "_safeMint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        42457,
                        42487
                      ],
                      "referencedDeclaration": 42487,
                      "src": "12307:9:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory)"
                      }
                    },
                    "id": 42454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12307:26:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42455,
                  "nodeType": "ExpressionStatement",
                  "src": "12307:26:27"
                }
              ]
            },
            "documentation": {
              "id": 42443,
              "nodeType": "StructuredDocumentation",
              "src": "11895:340:27",
              "text": " @dev Mints `tokenId`, transfers it to `to` and checks for `to` acceptance.\n Requirements:\n - `tokenId` must not exist.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeMint",
            "nameLocation": "12249:9:27",
            "parameters": {
              "id": 42448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42445,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "12267:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42457,
                  "src": "12259:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42444,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12259:7:27",
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
                  "id": 42447,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "12279:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42457,
                  "src": "12271:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42446,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12271:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12258:29:27"
            },
            "returnParameters": {
              "id": 42449,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12297:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42487,
            "nodeType": "FunctionDefinition",
            "src": "12561:207:27",
            "nodes": [],
            "body": {
              "id": 42486,
              "nodeType": "Block",
              "src": "12645:123:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 42468,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42460,
                        "src": "12661:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42469,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42462,
                        "src": "12665:7:27",
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
                      "id": 42467,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42442,
                      "src": "12655:5:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 42470,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12655:18:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42471,
                  "nodeType": "ExpressionStatement",
                  "src": "12655:18:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 42475,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42823,
                          "src": "12717:10:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 42476,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12717:12:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 42479,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12739:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 42478,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12731:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 42477,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12731:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 42480,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12731:10:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42481,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42460,
                        "src": "12743:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42482,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42462,
                        "src": "12747:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 42483,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42464,
                        "src": "12756:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 42472,
                        "name": "ERC721Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44599,
                        "src": "12683:11:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC721Utils_$44599_$",
                          "typeString": "type(library ERC721Utils)"
                        }
                      },
                      "id": 42474,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12695:21:27",
                      "memberName": "checkOnERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 44598,
                      "src": "12683:33:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 42484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12683:78:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42485,
                  "nodeType": "ExpressionStatement",
                  "src": "12683:78:27"
                }
              ]
            },
            "documentation": {
              "id": 42458,
              "nodeType": "StructuredDocumentation",
              "src": "12346:210:27",
              "text": " @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\n forwarded in {IERC721Receiver-onERC721Received} to contract recipients."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeMint",
            "nameLocation": "12570:9:27",
            "parameters": {
              "id": 42465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42460,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "12588:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42487,
                  "src": "12580:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42459,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12580:7:27",
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
                  "id": 42462,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "12600:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42487,
                  "src": "12592:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42461,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12592:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42464,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "12622:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42487,
                  "src": "12609:17:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 42463,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12609:5:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12579:48:27"
            },
            "returnParameters": {
              "id": 42466,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12645:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42520,
            "nodeType": "FunctionDefinition",
            "src": "13094:227:27",
            "nodes": [],
            "body": {
              "id": 42519,
              "nodeType": "Block",
              "src": "13135:186:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42494
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42494,
                      "mutability": "mutable",
                      "name": "previousOwner",
                      "nameLocation": "13153:13:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42519,
                      "src": "13145:21:27",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 42493,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "13145:7:27",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42506,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 42498,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13185:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 42497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13177:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 42496,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13177:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 42499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13177:10:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42500,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42490,
                        "src": "13189:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 42503,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13206:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 42502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13198:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 42501,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13198:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 42504,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13198:10:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 42495,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42392,
                      "src": "13169:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$_t_address_$",
                        "typeString": "function (address,uint256,address) returns (address)"
                      }
                    },
                    "id": 42505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13169:40:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13145:64:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42512,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42507,
                      "name": "previousOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42494,
                      "src": "13223:13:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42510,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13248:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42509,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13240:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42508,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13240:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13240:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13223:27:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42518,
                  "nodeType": "IfStatement",
                  "src": "13219:96:27",
                  "trueBody": {
                    "id": 42517,
                    "nodeType": "Block",
                    "src": "13252:63:27",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 42514,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42490,
                              "src": "13296:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 42513,
                            "name": "ERC721NonexistentToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43321,
                            "src": "13273:22:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256) pure returns (error)"
                            }
                          },
                          "id": 42515,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13273:31:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 42516,
                        "nodeType": "RevertStatement",
                        "src": "13266:38:27"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 42488,
              "nodeType": "StructuredDocumentation",
              "src": "12774:315:27",
              "text": " @dev Destroys `tokenId`.\n The approval is cleared when the token is burned.\n This is an internal function that does not check if the sender is authorized to operate on the token.\n Requirements:\n - `tokenId` must exist.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "13103:5:27",
            "parameters": {
              "id": 42491,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42490,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "13117:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42520,
                  "src": "13109:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42489,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13109:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13108:17:27"
            },
            "returnParameters": {
              "id": 42492,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13135:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42580,
            "nodeType": "FunctionDefinition",
            "src": "13645:460:27",
            "nodes": [],
            "body": {
              "id": 42579,
              "nodeType": "Block",
              "src": "13716:389:27",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42530,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42525,
                      "src": "13730:2:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42533,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13744:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42532,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13736:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42531,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13736:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13736:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13730:16:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42544,
                  "nodeType": "IfStatement",
                  "src": "13726:87:27",
                  "trueBody": {
                    "id": 42543,
                    "nodeType": "Block",
                    "src": "13748:65:27",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 42539,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "13799:1:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 42538,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "13791:7:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 42537,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "13791:7:27",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 42540,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13791:10:27",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 42536,
                            "name": "ERC721InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43340,
                            "src": "13769:21:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 42541,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13769:33:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 42542,
                        "nodeType": "RevertStatement",
                        "src": "13762:40:27"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    42546
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42546,
                      "mutability": "mutable",
                      "name": "previousOwner",
                      "nameLocation": "13830:13:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42579,
                      "src": "13822:21:27",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 42545,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "13822:7:27",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42555,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 42548,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42525,
                        "src": "13854:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42549,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42527,
                        "src": "13858:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 42552,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13875:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 42551,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13867:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 42550,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13867:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 42553,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13867:10:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 42547,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42392,
                      "src": "13846:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$_t_address_$",
                        "typeString": "function (address,uint256,address) returns (address)"
                      }
                    },
                    "id": 42554,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13846:32:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13822:56:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42561,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42556,
                      "name": "previousOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42546,
                      "src": "13892:13:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42559,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13917:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42558,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13909:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42557,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13909:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42560,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13909:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13892:27:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 42569,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 42567,
                        "name": "previousOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42546,
                        "src": "13994:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 42568,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42523,
                        "src": "14011:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "13994:21:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 42577,
                    "nodeType": "IfStatement",
                    "src": "13990:109:27",
                    "trueBody": {
                      "id": 42576,
                      "nodeType": "Block",
                      "src": "14017:82:27",
                      "statements": [
                        {
                          "errorCall": {
                            "arguments": [
                              {
                                "id": 42571,
                                "name": "from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42523,
                                "src": "14059:4:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 42572,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42527,
                                "src": "14065:7:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 42573,
                                "name": "previousOwner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42546,
                                "src": "14074:13:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
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
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 42570,
                              "name": "ERC721IncorrectOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43330,
                              "src": "14038:20:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_address_$returns$_t_error_$",
                                "typeString": "function (address,uint256,address) pure returns (error)"
                              }
                            },
                            "id": 42574,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14038:50:27",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_error",
                              "typeString": "error"
                            }
                          },
                          "id": 42575,
                          "nodeType": "RevertStatement",
                          "src": "14031:57:27"
                        }
                      ]
                    }
                  },
                  "id": 42578,
                  "nodeType": "IfStatement",
                  "src": "13888:211:27",
                  "trueBody": {
                    "id": 42566,
                    "nodeType": "Block",
                    "src": "13921:63:27",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 42563,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42527,
                              "src": "13965:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 42562,
                            "name": "ERC721NonexistentToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43321,
                            "src": "13942:22:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256) pure returns (error)"
                            }
                          },
                          "id": 42564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13942:31:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 42565,
                        "nodeType": "RevertStatement",
                        "src": "13935:38:27"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 42521,
              "nodeType": "StructuredDocumentation",
              "src": "13327:313:27",
              "text": " @dev Transfers `tokenId` from `from` to `to`.\n  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\n Requirements:\n - `to` cannot be the zero address.\n - `tokenId` token must be owned by `from`.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_transfer",
            "nameLocation": "13654:9:27",
            "parameters": {
              "id": 42528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42523,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "13672:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42580,
                  "src": "13664:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42522,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13664:7:27",
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
                  "id": 42525,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "13686:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42580,
                  "src": "13678:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42524,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13678:7:27",
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
                  "id": 42527,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "13698:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42580,
                  "src": "13690:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42526,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13690:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13663:43:27"
            },
            "returnParameters": {
              "id": 42529,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13716:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42598,
            "nodeType": "FunctionDefinition",
            "src": "15039:128:27",
            "nodes": [],
            "body": {
              "id": 42597,
              "nodeType": "Block",
              "src": "15114:53:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 42591,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42583,
                        "src": "15138:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42592,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42585,
                        "src": "15144:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42593,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42587,
                        "src": "15148:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 42594,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "15157:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 42590,
                      "name": "_safeTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        42598,
                        42628
                      ],
                      "referencedDeclaration": 42628,
                      "src": "15124:13:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 42595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15124:36:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42596,
                  "nodeType": "ExpressionStatement",
                  "src": "15124:36:27"
                }
              ]
            },
            "documentation": {
              "id": 42581,
              "nodeType": "StructuredDocumentation",
              "src": "14111:923:27",
              "text": " @dev Safely transfers `tokenId` token from `from` to `to`, checking that contract recipients\n are aware of the ERC-721 standard to prevent tokens from being forever locked.\n `data` is additional data, it has no specified format and it is sent in call to `to`.\n This internal function is like {safeTransferFrom} in the sense that it invokes\n {IERC721Receiver-onERC721Received} on the receiver, and can be used to e.g.\n implement alternative mechanisms to perform token transfer, such as signature-based.\n Requirements:\n - `tokenId` token must exist and be owned by `from`.\n - `to` cannot be the zero address.\n - `from` cannot be the zero address.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeTransfer",
            "nameLocation": "15048:13:27",
            "parameters": {
              "id": 42588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42583,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "15070:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42598,
                  "src": "15062:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42582,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15062:7:27",
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
                  "id": 42585,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "15084:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42598,
                  "src": "15076:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42584,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15076:7:27",
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
                  "id": 42587,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "15096:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42598,
                  "src": "15088:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42586,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15088:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15061:43:27"
            },
            "returnParameters": {
              "id": 42589,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "15114:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42628,
            "nodeType": "FunctionDefinition",
            "src": "15404:229:27",
            "nodes": [],
            "body": {
              "id": 42627,
              "nodeType": "Block",
              "src": "15506:127:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 42611,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42601,
                        "src": "15526:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42612,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42603,
                        "src": "15532:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42613,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42605,
                        "src": "15536:7:27",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 42610,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42580,
                      "src": "15516:9:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 42614,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15516:28:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42615,
                  "nodeType": "ExpressionStatement",
                  "src": "15516:28:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 42619,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42823,
                          "src": "15588:10:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 42620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15588:12:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42621,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42601,
                        "src": "15602:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42622,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42603,
                        "src": "15608:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42623,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42605,
                        "src": "15612:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 42624,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42607,
                        "src": "15621:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 42616,
                        "name": "ERC721Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44599,
                        "src": "15554:11:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC721Utils_$44599_$",
                          "typeString": "type(library ERC721Utils)"
                        }
                      },
                      "id": 42618,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "15566:21:27",
                      "memberName": "checkOnERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 44598,
                      "src": "15554:33:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 42625,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15554:72:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42626,
                  "nodeType": "ExpressionStatement",
                  "src": "15554:72:27"
                }
              ]
            },
            "documentation": {
              "id": 42599,
              "nodeType": "StructuredDocumentation",
              "src": "15173:226:27",
              "text": " @dev Same as {xref-ERC721-_safeTransfer-address-address-uint256-}[`_safeTransfer`], with an additional `data` parameter which is\n forwarded in {IERC721Receiver-onERC721Received} to contract recipients."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeTransfer",
            "nameLocation": "15413:13:27",
            "parameters": {
              "id": 42608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42601,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "15435:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42628,
                  "src": "15427:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42600,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15427:7:27",
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
                  "id": 42603,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "15449:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42628,
                  "src": "15441:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42602,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15441:7:27",
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
                  "id": 42605,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "15461:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42628,
                  "src": "15453:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42604,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15453:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42607,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "15483:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42628,
                  "src": "15470:17:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 42606,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15470:5:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15426:62:27"
            },
            "returnParameters": {
              "id": 42609,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "15506:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42646,
            "nodeType": "FunctionDefinition",
            "src": "16076:120:27",
            "nodes": [],
            "body": {
              "id": 42645,
              "nodeType": "Block",
              "src": "16146:50:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 42639,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42631,
                        "src": "16165:2:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42640,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42633,
                        "src": "16169:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 42641,
                        "name": "auth",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42635,
                        "src": "16178:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 42642,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "16184:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 42638,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        42646,
                        42720
                      ],
                      "referencedDeclaration": 42720,
                      "src": "16156:8:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,uint256,address,bool)"
                      }
                    },
                    "id": 42643,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16156:33:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42644,
                  "nodeType": "ExpressionStatement",
                  "src": "16156:33:27"
                }
              ]
            },
            "documentation": {
              "id": 42629,
              "nodeType": "StructuredDocumentation",
              "src": "15639:432:27",
              "text": " @dev Approve `to` to operate on `tokenId`\n The `auth` argument is optional. If the value passed is non 0, then this function will check that `auth` is\n either the owner of the token, or approved to operate on all tokens held by this owner.\n Emits an {Approval} event.\n Overrides to this logic should be done to the variant with an additional `bool emitEvent` argument."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "16085:8:27",
            "parameters": {
              "id": 42636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42631,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "16102:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42646,
                  "src": "16094:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42630,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16094:7:27",
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
                  "id": 42633,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "16114:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42646,
                  "src": "16106:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42632,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16106:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42635,
                  "mutability": "mutable",
                  "name": "auth",
                  "nameLocation": "16131:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42646,
                  "src": "16123:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42634,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16123:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16093:43:27"
            },
            "returnParameters": {
              "id": 42637,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "16146:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42720,
            "nodeType": "FunctionDefinition",
            "src": "16378:719:27",
            "nodes": [],
            "body": {
              "id": 42719,
              "nodeType": "Block",
              "src": "16472:625:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42660
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42660,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "16504:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42719,
                      "src": "16482:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 42659,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 42658,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "16482:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "16482:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "16482:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42663,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 42661,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "16508:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 42662,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16508:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16482:45:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 42671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42664,
                      "name": "emitEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42655,
                      "src": "16593:9:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 42670,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 42665,
                        "name": "auth",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42653,
                        "src": "16606:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 42668,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "16622:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 42667,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "16614:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 42666,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "16614:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 42669,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16614:10:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "16606:18:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "16593:31:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42710,
                  "nodeType": "IfStatement",
                  "src": "16589:460:27",
                  "trueBody": {
                    "id": 42709,
                    "nodeType": "Block",
                    "src": "16626:423:27",
                    "statements": [
                      {
                        "assignments": [
                          42673
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 42673,
                            "mutability": "mutable",
                            "name": "owner",
                            "nameLocation": "16648:5:27",
                            "nodeType": "VariableDeclaration",
                            "scope": 42709,
                            "src": "16640:13:27",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 42672,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "16640:7:27",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 42677,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 42675,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42651,
                              "src": "16670:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 42674,
                            "name": "_requireOwned",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42794,
                            "src": "16656:13:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 42676,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16656:22:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "16640:38:27"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 42693,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 42687,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 42683,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 42678,
                                "name": "auth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42653,
                                "src": "16806:4:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "!=",
                              "rightExpression": {
                                "arguments": [
                                  {
                                    "hexValue": "30",
                                    "id": 42681,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "16822:1:27",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    },
                                    "value": "0"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "id": 42680,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "16814:7:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 42679,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "16814:7:27",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 42682,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "16814:10:27",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "16806:18:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "&&",
                            "rightExpression": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 42686,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 42684,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42673,
                                "src": "16828:5:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "!=",
                              "rightExpression": {
                                "id": 42685,
                                "name": "auth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42653,
                                "src": "16837:4:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "16828:13:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "16806:35:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "id": 42692,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "!",
                            "prefix": true,
                            "src": "16845:30:27",
                            "subExpression": {
                              "arguments": [
                                {
                                  "id": 42689,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 42673,
                                  "src": "16863:5:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 42690,
                                  "name": "auth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 42653,
                                  "src": "16870:4:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
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
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 42688,
                                "name": "isApprovedForAll",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42059,
                                "src": "16846:16:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address,address) view returns (bool)"
                                }
                              },
                              "id": 42691,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "16846:29:27",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "16806:69:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 42699,
                        "nodeType": "IfStatement",
                        "src": "16802:142:27",
                        "trueBody": {
                          "id": 42698,
                          "nodeType": "Block",
                          "src": "16877:67:27",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 42695,
                                    "name": "auth",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 42653,
                                    "src": "16924:4:27",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 42694,
                                  "name": "ERC721InvalidApprover",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43352,
                                  "src": "16902:21:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                                    "typeString": "function (address) pure returns (error)"
                                  }
                                },
                                "id": 42696,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "16902:27:27",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_error",
                                  "typeString": "error"
                                }
                              },
                              "id": 42697,
                              "nodeType": "RevertStatement",
                              "src": "16895:34:27"
                            }
                          ]
                        }
                      },
                      {
                        "condition": {
                          "id": 42700,
                          "name": "emitEvent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42655,
                          "src": "16962:9:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 42708,
                        "nodeType": "IfStatement",
                        "src": "16958:81:27",
                        "trueBody": {
                          "id": 42707,
                          "nodeType": "Block",
                          "src": "16973:66:27",
                          "statements": [
                            {
                              "eventCall": {
                                "arguments": [
                                  {
                                    "id": 42702,
                                    "name": "owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 42673,
                                    "src": "17005:5:27",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 42703,
                                    "name": "to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 42649,
                                    "src": "17012:2:27",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 42704,
                                    "name": "tokenId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 42651,
                                    "src": "17016:7:27",
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
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 42701,
                                  "name": "Approval",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 44384,
                                  "src": "16996:8:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,address,uint256)"
                                  }
                                },
                                "id": 42705,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "16996:28:27",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 42706,
                              "nodeType": "EmitStatement",
                              "src": "16991:33:27"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 42717,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "expression": {
                          "id": 42711,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42660,
                          "src": "17059:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                            "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                          }
                        },
                        "id": 42714,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17061:15:27",
                        "memberName": "_tokenApprovals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 41768,
                        "src": "17059:17:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 42715,
                      "indexExpression": {
                        "id": 42713,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42651,
                        "src": "17077:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "17059:26:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 42716,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42649,
                      "src": "17088:2:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "17059:31:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 42718,
                  "nodeType": "ExpressionStatement",
                  "src": "17059:31:27"
                }
              ]
            },
            "documentation": {
              "id": 42647,
              "nodeType": "StructuredDocumentation",
              "src": "16202:171:27",
              "text": " @dev Variant of `_approve` with an optional flag to enable or disable the {Approval} event. The event is not\n emitted in the context of transfers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "16387:8:27",
            "parameters": {
              "id": 42656,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42649,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "16404:2:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42720,
                  "src": "16396:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42648,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16396:7:27",
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
                  "id": 42651,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "16416:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42720,
                  "src": "16408:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42650,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16408:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42653,
                  "mutability": "mutable",
                  "name": "auth",
                  "nameLocation": "16433:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42720,
                  "src": "16425:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42652,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16425:7:27",
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
                  "id": 42655,
                  "mutability": "mutable",
                  "name": "emitEvent",
                  "nameLocation": "16444:9:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42720,
                  "src": "16439:14:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 42654,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "16439:4:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16395:59:27"
            },
            "returnParameters": {
              "id": 42657,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "16472:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42765,
            "nodeType": "FunctionDefinition",
            "src": "17306:369:27",
            "nodes": [],
            "body": {
              "id": 42764,
              "nodeType": "Block",
              "src": "17399:276:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42732
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42732,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "17431:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42764,
                      "src": "17409:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 42731,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 42730,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "17409:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41775,
                          "src": "17409:13:27"
                        },
                        "referencedDeclaration": 41775,
                        "src": "17409:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42735,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 42733,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41786,
                      "src": "17435:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$41775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 42734,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17435:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "17409:45:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42741,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42736,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42725,
                      "src": "17468:8:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42739,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17488:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42738,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "17480:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42737,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "17480:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42740,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17480:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "17468:22:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42747,
                  "nodeType": "IfStatement",
                  "src": "17464:91:27",
                  "trueBody": {
                    "id": 42746,
                    "nodeType": "Block",
                    "src": "17492:63:27",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 42743,
                              "name": "operator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42725,
                              "src": "17535:8:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 42742,
                            "name": "ERC721InvalidOperator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43357,
                            "src": "17513:21:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 42744,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17513:31:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 42745,
                        "nodeType": "RevertStatement",
                        "src": "17506:38:27"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 42756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 42748,
                            "name": "$",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42732,
                            "src": "17564:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ERC721Storage_$41775_storage_ptr",
                              "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                            }
                          },
                          "id": 42752,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "17566:18:27",
                          "memberName": "_operatorApprovals",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 41774,
                          "src": "17564:20:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 42753,
                        "indexExpression": {
                          "id": 42750,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42723,
                          "src": "17585:5:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "17564:27:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 42754,
                      "indexExpression": {
                        "id": 42751,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42725,
                        "src": "17592:8:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "17564:37:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 42755,
                      "name": "approved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42727,
                      "src": "17604:8:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "17564:48:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42757,
                  "nodeType": "ExpressionStatement",
                  "src": "17564:48:27"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 42759,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42723,
                        "src": "17642:5:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42760,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42725,
                        "src": "17649:8:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 42761,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42727,
                        "src": "17659:8:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 42758,
                      "name": "ApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44393,
                      "src": "17627:14:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 42762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17627:41:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42763,
                  "nodeType": "EmitStatement",
                  "src": "17622:46:27"
                }
              ]
            },
            "documentation": {
              "id": 42721,
              "nodeType": "StructuredDocumentation",
              "src": "17103:198:27",
              "text": " @dev Approve `operator` to operate on all of `owner` tokens\n Requirements:\n - operator can't be the address zero.\n Emits an {ApprovalForAll} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setApprovalForAll",
            "nameLocation": "17315:18:27",
            "parameters": {
              "id": 42728,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42723,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "17342:5:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42765,
                  "src": "17334:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42722,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17334:7:27",
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
                  "id": 42725,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "17357:8:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42765,
                  "src": "17349:16:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42724,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17349:7:27",
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
                  "id": 42727,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "17372:8:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42765,
                  "src": "17367:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 42726,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17367:4:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17333:48:27"
            },
            "returnParameters": {
              "id": 42729,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "17399:0:27"
            },
            "scope": 42795,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42794,
            "nodeType": "FunctionDefinition",
            "src": "17910:241:27",
            "nodes": [],
            "body": {
              "id": 42793,
              "nodeType": "Block",
              "src": "17982:169:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42774
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42774,
                      "mutability": "mutable",
                      "name": "owner",
                      "nameLocation": "18000:5:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 42793,
                      "src": "17992:13:27",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 42773,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "17992:7:27",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42778,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 42776,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42768,
                        "src": "18017:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 42775,
                      "name": "_ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42173,
                      "src": "18008:8:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 42777,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "18008:17:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "17992:33:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 42784,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 42779,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42774,
                      "src": "18039:5:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 42782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18056:1:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 42781,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "18048:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 42780,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "18048:7:27",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 42783,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18048:10:27",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "18039:19:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 42790,
                  "nodeType": "IfStatement",
                  "src": "18035:88:27",
                  "trueBody": {
                    "id": 42789,
                    "nodeType": "Block",
                    "src": "18060:63:27",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 42786,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42768,
                              "src": "18104:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 42785,
                            "name": "ERC721NonexistentToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43321,
                            "src": "18081:22:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256) pure returns (error)"
                            }
                          },
                          "id": 42787,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "18081:31:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 42788,
                        "nodeType": "RevertStatement",
                        "src": "18074:38:27"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 42791,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 42774,
                    "src": "18139:5:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 42772,
                  "id": 42792,
                  "nodeType": "Return",
                  "src": "18132:12:27"
                }
              ]
            },
            "documentation": {
              "id": 42766,
              "nodeType": "StructuredDocumentation",
              "src": "17681:224:27",
              "text": " @dev Reverts if the `tokenId` doesn't have a current owner (it hasn't been minted, or it has been burned).\n Returns the owner.\n Overrides to ownership logic should be done to {_ownerOf}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_requireOwned",
            "nameLocation": "17919:13:27",
            "parameters": {
              "id": 42769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42768,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "17941:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 42794,
                  "src": "17933:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42767,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17933:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17932:17:27"
            },
            "returnParameters": {
              "id": 42772,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42771,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42794,
                  "src": "17973:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42770,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17973:7:27",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17972:9:27"
            },
            "scope": 42795,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 41737,
              "name": "Initializable",
              "nameLocations": [
                "1138:13:27"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 40718,
              "src": "1138:13:27"
            },
            "id": 41738,
            "nodeType": "InheritanceSpecifier",
            "src": "1138:13:27"
          },
          {
            "baseName": {
              "id": 41739,
              "name": "ContextUpgradeable",
              "nameLocations": [
                "1153:18:27"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 42841,
              "src": "1153:18:27"
            },
            "id": 41740,
            "nodeType": "InheritanceSpecifier",
            "src": "1153:18:27"
          },
          {
            "baseName": {
              "id": 41741,
              "name": "ERC165Upgradeable",
              "nameLocations": [
                "1173:17:27"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 43225,
              "src": "1173:17:27"
            },
            "id": 41742,
            "nodeType": "InheritanceSpecifier",
            "src": "1173:17:27"
          },
          {
            "baseName": {
              "id": 41743,
              "name": "IERC721",
              "nameLocations": [
                "1192:7:27"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 44476,
              "src": "1192:7:27"
            },
            "id": 41744,
            "nodeType": "InheritanceSpecifier",
            "src": "1192:7:27"
          },
          {
            "baseName": {
              "id": 41745,
              "name": "IERC721Metadata",
              "nameLocations": [
                "1201:15:27"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 44522,
              "src": "1201:15:27"
            },
            "id": 41746,
            "nodeType": "InheritanceSpecifier",
            "src": "1201:15:27"
          },
          {
            "baseName": {
              "id": 41747,
              "name": "IERC721Errors",
              "nameLocations": [
                "1218:13:27"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 43358,
              "src": "1218:13:27"
            },
            "id": 41748,
            "nodeType": "InheritanceSpecifier",
            "src": "1218:13:27"
          }
        ],
        "canonicalName": "ERC721Upgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 41736,
          "nodeType": "StructuredDocumentation",
          "src": "851:247:27",
          "text": " @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC-721] Non-Fungible Token Standard, including\n the Metadata extension, but not including the Enumerable extension, which is available separately as\n {ERC721Enumerable}."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          42795,
          43358,
          44522,
          44476,
          43225,
          46707,
          42841,
          40718
        ],
        "name": "ERC721Upgradeable",
        "nameLocation": "1117:17:27",
        "scope": 42796,
        "usedErrors": [
          40481,
          40484,
          43316,
          43321,
          43330,
          43335,
          43340,
          43347,
          43352,
          43357
        ],
        "usedEvents": [
          40489,
          44375,
          44384,
          44393
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 27
} as const;