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
    "id": 38819,
    "exportedSymbols": {
      "ContextUpgradeable": [
        38864
      ],
      "ERC165Upgradeable": [
        39248
      ],
      "ERC721Upgradeable": [
        38818
      ],
      "ERC721Utils": [
        40081
      ],
      "IERC165": [
        42159
      ],
      "IERC721": [
        39958
      ],
      "IERC721Errors": [
        39381
      ],
      "IERC721Metadata": [
        40004
      ],
      "Initializable": [
        36741
      ],
      "Strings": [
        41617
      ]
    },
    "nodeType": "SourceUnit",
    "src": "107:18047:22",
    "nodes": [
      {
        "id": 37740,
        "nodeType": "PragmaDirective",
        "src": "107:24:22",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 37742,
        "nodeType": "ImportDirective",
        "src": "133:73:22",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 38819,
        "sourceUnit": 39959,
        "symbolAliases": [
          {
            "foreign": {
              "id": 37741,
              "name": "IERC721",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 39958,
              "src": "141:7:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 37744,
        "nodeType": "ImportDirective",
        "src": "207:100:22",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol",
        "file": "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 38819,
        "sourceUnit": 40005,
        "symbolAliases": [
          {
            "foreign": {
              "id": 37743,
              "name": "IERC721Metadata",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 40004,
              "src": "215:15:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 37746,
        "nodeType": "ImportDirective",
        "src": "308:87:22",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol",
        "file": "@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 38819,
        "sourceUnit": 40082,
        "symbolAliases": [
          {
            "foreign": {
              "id": 37745,
              "name": "ERC721Utils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 40081,
              "src": "316:11:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 37748,
        "nodeType": "ImportDirective",
        "src": "396:70:22",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol",
        "file": "../../utils/ContextUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 38819,
        "sourceUnit": 38865,
        "symbolAliases": [
          {
            "foreign": {
              "id": 37747,
              "name": "ContextUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 38864,
              "src": "404:18:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 37750,
        "nodeType": "ImportDirective",
        "src": "467:66:22",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/Strings.sol",
        "file": "@openzeppelin/contracts/utils/Strings.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 38819,
        "sourceUnit": 41618,
        "symbolAliases": [
          {
            "foreign": {
              "id": 37749,
              "name": "Strings",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 41617,
              "src": "475:7:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 37752,
        "nodeType": "ImportDirective",
        "src": "534:80:22",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 38819,
        "sourceUnit": 42160,
        "symbolAliases": [
          {
            "foreign": {
              "id": 37751,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 42159,
              "src": "542:7:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 37754,
        "nodeType": "ImportDirective",
        "src": "615:82:22",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol",
        "file": "../../utils/introspection/ERC165Upgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 38819,
        "sourceUnit": 39249,
        "symbolAliases": [
          {
            "foreign": {
              "id": 37753,
              "name": "ERC165Upgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 39248,
              "src": "623:17:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 37756,
        "nodeType": "ImportDirective",
        "src": "698:84:22",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "file": "@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 38819,
        "sourceUnit": 39429,
        "symbolAliases": [
          {
            "foreign": {
              "id": 37755,
              "name": "IERC721Errors",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 39381,
              "src": "706:13:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 37758,
        "nodeType": "ImportDirective",
        "src": "783:66:22",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 38819,
        "sourceUnit": 36742,
        "symbolAliases": [
          {
            "foreign": {
              "id": 37757,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 36741,
              "src": "791:13:22",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 38818,
        "nodeType": "ContractDefinition",
        "src": "1099:17054:22",
        "nodes": [
          {
            "id": 37774,
            "nodeType": "UsingForDirective",
            "src": "1238:26:22",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 37772,
              "name": "Strings",
              "nameLocations": [
                "1244:7:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 41617,
              "src": "1244:7:22"
            },
            "typeName": {
              "id": 37773,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1256:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 37798,
            "nodeType": "StructDefinition",
            "src": "1339:380:22",
            "nodes": [],
            "canonicalName": "ERC721Upgradeable.ERC721Storage",
            "documentation": {
              "id": 37775,
              "nodeType": "StructuredDocumentation",
              "src": "1270:64:22",
              "text": "@custom:storage-location erc7201:openzeppelin.storage.ERC721"
            },
            "members": [
              {
                "constant": false,
                "id": 37777,
                "mutability": "mutable",
                "name": "_name",
                "nameLocation": "1399:5:22",
                "nodeType": "VariableDeclaration",
                "scope": 37798,
                "src": "1392:12:22",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 37776,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1392:6:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 37779,
                "mutability": "mutable",
                "name": "_symbol",
                "nameLocation": "1446:7:22",
                "nodeType": "VariableDeclaration",
                "scope": 37798,
                "src": "1439:14:22",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 37778,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1439:6:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 37783,
                "mutability": "mutable",
                "name": "_owners",
                "nameLocation": "1500:7:22",
                "nodeType": "VariableDeclaration",
                "scope": 37798,
                "src": "1464:43:22",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "typeName": {
                  "id": 37782,
                  "keyName": "tokenId",
                  "keyNameLocation": "1480:7:22",
                  "keyType": {
                    "id": 37780,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1472:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1464:35:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                    "typeString": "mapping(uint256 => address)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 37781,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1491:7:22",
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
                "id": 37787,
                "mutability": "mutable",
                "name": "_balances",
                "nameLocation": "1552:9:22",
                "nodeType": "VariableDeclaration",
                "scope": 37798,
                "src": "1518:43:22",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "typeName": {
                  "id": 37786,
                  "keyName": "owner",
                  "keyNameLocation": "1534:5:22",
                  "keyType": {
                    "id": 37784,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1526:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1518:33:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 37785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1543:7:22",
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
                "id": 37791,
                "mutability": "mutable",
                "name": "_tokenApprovals",
                "nameLocation": "1608:15:22",
                "nodeType": "VariableDeclaration",
                "scope": 37798,
                "src": "1572:51:22",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "typeName": {
                  "id": 37790,
                  "keyName": "tokenId",
                  "keyNameLocation": "1588:7:22",
                  "keyType": {
                    "id": 37788,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1580:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1572:35:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                    "typeString": "mapping(uint256 => address)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 37789,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:7:22",
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
                "id": 37797,
                "mutability": "mutable",
                "name": "_operatorApprovals",
                "nameLocation": "1694:18:22",
                "nodeType": "VariableDeclaration",
                "scope": 37798,
                "src": "1634:78:22",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                  "typeString": "mapping(address => mapping(address => bool))"
                },
                "typeName": {
                  "id": 37796,
                  "keyName": "owner",
                  "keyNameLocation": "1650:5:22",
                  "keyType": {
                    "id": 37792,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1642:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1634:59:22",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                    "typeString": "mapping(address => mapping(address => bool))"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 37795,
                    "keyName": "operator",
                    "keyNameLocation": "1675:8:22",
                    "keyType": {
                      "id": 37793,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1667:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1659:33:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                      "typeString": "mapping(address => bool)"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "id": 37794,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1687:4:22",
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
            "nameLocation": "1346:13:22",
            "scope": 38818,
            "visibility": "public"
          },
          {
            "id": 37801,
            "nodeType": "VariableDeclaration",
            "src": "1835:115:22",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC721StorageLocation",
            "nameLocation": "1860:21:22",
            "scope": 38818,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 37799,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1835:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307838306262326236333863633230626334643061363064363639343066336162346130306331643762333133343937636138326662306234616230303739333030",
              "id": 37800,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1884:66:22",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_58226744478722834339948329933988999792353370511964151963072532422914231210752_by_1",
                "typeString": "int_const 5822...(69 digits omitted)...0752"
              },
              "value": "0x80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079300"
            },
            "visibility": "private"
          },
          {
            "id": 37809,
            "nodeType": "FunctionDefinition",
            "src": "1957:156:22",
            "nodes": [],
            "body": {
              "id": 37808,
              "nodeType": "Block",
              "src": "2033:80:22",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2052:55:22",
                    "nodeType": "YulBlock",
                    "src": "2052:55:22",
                    "statements": [
                      {
                        "nativeSrc": "2066:31:22",
                        "nodeType": "YulAssignment",
                        "src": "2066:31:22",
                        "value": {
                          "name": "ERC721StorageLocation",
                          "nativeSrc": "2076:21:22",
                          "nodeType": "YulIdentifier",
                          "src": "2076:21:22"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "2066:6:22",
                            "nodeType": "YulIdentifier",
                            "src": "2066:6:22"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 37805,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2066:6:22",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 37801,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2076:21:22",
                      "valueSize": 1
                    }
                  ],
                  "id": 37807,
                  "nodeType": "InlineAssembly",
                  "src": "2043:64:22"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getERC721Storage",
            "nameLocation": "1966:17:22",
            "parameters": {
              "id": 37802,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1983:2:22"
            },
            "returnParameters": {
              "id": 37806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37805,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "2030:1:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 37809,
                  "src": "2008:23:22",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                    "typeString": "struct ERC721Upgradeable.ERC721Storage"
                  },
                  "typeName": {
                    "id": 37804,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 37803,
                      "name": "ERC721Storage",
                      "nameLocations": [
                        "2008:13:22"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 37798,
                      "src": "2008:13:22"
                    },
                    "referencedDeclaration": 37798,
                    "src": "2008:13:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2007:25:22"
            },
            "scope": 38818,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 37825,
            "nodeType": "FunctionDefinition",
            "src": "2232:149:22",
            "nodes": [],
            "body": {
              "id": 37824,
              "nodeType": "Block",
              "src": "2325:56:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 37820,
                        "name": "name_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37812,
                        "src": "2359:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 37821,
                        "name": "symbol_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37814,
                        "src": "2366:7:22",
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
                      "id": 37819,
                      "name": "__ERC721_init_unchained",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37853,
                      "src": "2335:23:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 37822,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2335:39:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37823,
                  "nodeType": "ExpressionStatement",
                  "src": "2335:39:22"
                }
              ]
            },
            "documentation": {
              "id": 37810,
              "nodeType": "StructuredDocumentation",
              "src": "2119:108:22",
              "text": " @dev Initializes the contract by setting a `name` and a `symbol` to the token collection."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 37817,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 37816,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "2308:16:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "2308:16:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "2308:16:22"
              }
            ],
            "name": "__ERC721_init",
            "nameLocation": "2241:13:22",
            "parameters": {
              "id": 37815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37812,
                  "mutability": "mutable",
                  "name": "name_",
                  "nameLocation": "2269:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 37825,
                  "src": "2255:19:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37811,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2255:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37814,
                  "mutability": "mutable",
                  "name": "symbol_",
                  "nameLocation": "2290:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 37825,
                  "src": "2276:21:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37813,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2276:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2254:44:22"
            },
            "returnParameters": {
              "id": 37818,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2325:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 37853,
            "nodeType": "FunctionDefinition",
            "src": "2387:219:22",
            "nodes": [],
            "body": {
              "id": 37852,
              "nodeType": "Block",
              "src": "2490:116:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    37836
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37836,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "2522:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 37852,
                      "src": "2500:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 37835,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 37834,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "2500:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "2500:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "2500:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37839,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37837,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "2526:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 37838,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2526:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2500:45:22"
                },
                {
                  "expression": {
                    "id": 37844,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 37840,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37836,
                        "src": "2555:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                        }
                      },
                      "id": 37842,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "2557:5:22",
                      "memberName": "_name",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 37777,
                      "src": "2555:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 37843,
                      "name": "name_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37827,
                      "src": "2565:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2555:15:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 37845,
                  "nodeType": "ExpressionStatement",
                  "src": "2555:15:22"
                },
                {
                  "expression": {
                    "id": 37850,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 37846,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37836,
                        "src": "2580:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                        }
                      },
                      "id": 37848,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "2582:7:22",
                      "memberName": "_symbol",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 37779,
                      "src": "2580:9:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 37849,
                      "name": "symbol_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37829,
                      "src": "2592:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2580:19:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 37851,
                  "nodeType": "ExpressionStatement",
                  "src": "2580:19:22"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 37832,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 37831,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "2473:16:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "2473:16:22"
                },
                "nodeType": "ModifierInvocation",
                "src": "2473:16:22"
              }
            ],
            "name": "__ERC721_init_unchained",
            "nameLocation": "2396:23:22",
            "parameters": {
              "id": 37830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37827,
                  "mutability": "mutable",
                  "name": "name_",
                  "nameLocation": "2434:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 37853,
                  "src": "2420:19:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37826,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2420:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37829,
                  "mutability": "mutable",
                  "name": "symbol_",
                  "nameLocation": "2455:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 37853,
                  "src": "2441:21:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37828,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2441:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2419:44:22"
            },
            "returnParameters": {
              "id": 37833,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2490:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 37884,
            "nodeType": "FunctionDefinition",
            "src": "2673:311:22",
            "nodes": [],
            "body": {
              "id": 37883,
              "nodeType": "Block",
              "src": "2792:192:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 37881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 37876,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 37869,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 37864,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37856,
                          "src": "2821:11:22",
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
                                "id": 37866,
                                "name": "IERC721",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 39958,
                                "src": "2841:7:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC721_$39958_$",
                                  "typeString": "type(contract IERC721)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC721_$39958_$",
                                  "typeString": "type(contract IERC721)"
                                }
                              ],
                              "id": 37865,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "2836:4:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 37867,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2836:13:22",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC721_$39958",
                              "typeString": "type(contract IERC721)"
                            }
                          },
                          "id": 37868,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2850:11:22",
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "2836:25:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "2821:40:22",
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
                        "id": 37875,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 37870,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37856,
                          "src": "2877:11:22",
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
                                "id": 37872,
                                "name": "IERC721Metadata",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40004,
                                "src": "2897:15:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC721Metadata_$40004_$",
                                  "typeString": "type(contract IERC721Metadata)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC721Metadata_$40004_$",
                                  "typeString": "type(contract IERC721Metadata)"
                                }
                              ],
                              "id": 37871,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "2892:4:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 37873,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2892:21:22",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC721Metadata_$40004",
                              "typeString": "type(contract IERC721Metadata)"
                            }
                          },
                          "id": 37874,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2914:11:22",
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "2892:33:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "2877:48:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "2821:104:22",
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
                          "id": 37879,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37856,
                          "src": "2965:11:22",
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
                          "id": 37877,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -25,
                          "src": "2941:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_ERC721Upgradeable_$38818_$",
                            "typeString": "type(contract super ERC721Upgradeable)"
                          }
                        },
                        "id": 37878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2947:17:22",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 39247,
                        "src": "2941:23:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 37880,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2941:36:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2821:156:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 37863,
                  "id": 37882,
                  "nodeType": "Return",
                  "src": "2802:175:22"
                }
              ]
            },
            "baseFunctions": [
              39247,
              42158
            ],
            "documentation": {
              "id": 37854,
              "nodeType": "StructuredDocumentation",
              "src": "2612:56:22",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "2682:17:22",
            "overrides": {
              "id": 37860,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 37858,
                  "name": "ERC165Upgradeable",
                  "nameLocations": [
                    "2749:17:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 39248,
                  "src": "2749:17:22"
                },
                {
                  "id": 37859,
                  "name": "IERC165",
                  "nameLocations": [
                    "2768:7:22"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 42159,
                  "src": "2768:7:22"
                }
              ],
              "src": "2740:36:22"
            },
            "parameters": {
              "id": 37857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37856,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "2707:11:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 37884,
                  "src": "2700:18:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 37855,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2700:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2699:20:22"
            },
            "returnParameters": {
              "id": 37863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37862,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 37884,
                  "src": "2786:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 37861,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2786:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2785:6:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 37919,
            "nodeType": "FunctionDefinition",
            "src": "3043:265:22",
            "nodes": [],
            "body": {
              "id": 37918,
              "nodeType": "Block",
              "src": "3115:193:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    37894
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37894,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3147:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 37918,
                      "src": "3125:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 37893,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 37892,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "3125:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "3125:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "3125:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37897,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37895,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "3151:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 37896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3151:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3125:45:22"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 37903,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37898,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37887,
                      "src": "3184:5:22",
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
                          "id": 37901,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3201:1:22",
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
                        "id": 37900,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3193:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37899,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3193:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37902,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3193:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3184:19:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37912,
                  "nodeType": "IfStatement",
                  "src": "3180:87:22",
                  "trueBody": {
                    "id": 37911,
                    "nodeType": "Block",
                    "src": "3205:62:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 37907,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3253:1:22",
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
                                "id": 37906,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3245:7:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 37905,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3245:7:22",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 37908,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3245:10:22",
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
                            "id": 37904,
                            "name": "ERC721InvalidOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39339,
                            "src": "3226:18:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 37909,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3226:30:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37910,
                        "nodeType": "RevertStatement",
                        "src": "3219:37:22"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 37913,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37894,
                        "src": "3283:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                        }
                      },
                      "id": 37914,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3285:9:22",
                      "memberName": "_balances",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 37787,
                      "src": "3283:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 37916,
                    "indexExpression": {
                      "id": 37915,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37887,
                      "src": "3295:5:22",
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
                    "src": "3283:18:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 37891,
                  "id": 37917,
                  "nodeType": "Return",
                  "src": "3276:25:22"
                }
              ]
            },
            "baseFunctions": [
              39883
            ],
            "documentation": {
              "id": 37885,
              "nodeType": "StructuredDocumentation",
              "src": "2990:48:22",
              "text": " @dev See {IERC721-balanceOf}."
            },
            "functionSelector": "70a08231",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "3052:9:22",
            "parameters": {
              "id": 37888,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37887,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3070:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 37919,
                  "src": "3062:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37886,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3062:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3061:15:22"
            },
            "returnParameters": {
              "id": 37891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37890,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 37919,
                  "src": "3106:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37889,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3106:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3105:9:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 37932,
            "nodeType": "FunctionDefinition",
            "src": "3365:118:22",
            "nodes": [],
            "body": {
              "id": 37931,
              "nodeType": "Block",
              "src": "3437:46:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 37928,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37922,
                        "src": "3468:7:22",
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
                      "id": 37927,
                      "name": "_requireOwned",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38817,
                      "src": "3454:13:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 37929,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3454:22:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 37926,
                  "id": 37930,
                  "nodeType": "Return",
                  "src": "3447:29:22"
                }
              ]
            },
            "baseFunctions": [
              39891
            ],
            "documentation": {
              "id": 37920,
              "nodeType": "StructuredDocumentation",
              "src": "3314:46:22",
              "text": " @dev See {IERC721-ownerOf}."
            },
            "functionSelector": "6352211e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ownerOf",
            "nameLocation": "3374:7:22",
            "parameters": {
              "id": 37923,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37922,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3390:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 37932,
                  "src": "3382:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37921,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3382:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3381:17:22"
            },
            "returnParameters": {
              "id": 37926,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37925,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 37932,
                  "src": "3428:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37924,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3428:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3427:9:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 37948,
            "nodeType": "FunctionDefinition",
            "src": "3545:146:22",
            "nodes": [],
            "body": {
              "id": 37947,
              "nodeType": "Block",
              "src": "3605:86:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    37940
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37940,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3637:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 37947,
                      "src": "3615:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 37939,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 37938,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "3615:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "3615:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "3615:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37943,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37941,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "3641:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 37942,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3641:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3615:45:22"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 37944,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37940,
                      "src": "3677:1:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                      }
                    },
                    "id": 37945,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3679:5:22",
                    "memberName": "_name",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 37777,
                    "src": "3677:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 37937,
                  "id": 37946,
                  "nodeType": "Return",
                  "src": "3670:14:22"
                }
              ]
            },
            "baseFunctions": [
              39989
            ],
            "documentation": {
              "id": 37933,
              "nodeType": "StructuredDocumentation",
              "src": "3489:51:22",
              "text": " @dev See {IERC721Metadata-name}."
            },
            "functionSelector": "06fdde03",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "3554:4:22",
            "parameters": {
              "id": 37934,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3558:2:22"
            },
            "returnParameters": {
              "id": 37937,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37936,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 37948,
                  "src": "3590:13:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37935,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3590:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3589:15:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 37964,
            "nodeType": "FunctionDefinition",
            "src": "3755:150:22",
            "nodes": [],
            "body": {
              "id": 37963,
              "nodeType": "Block",
              "src": "3817:88:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    37956
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37956,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3849:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 37963,
                      "src": "3827:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 37955,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 37954,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "3827:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "3827:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "3827:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37959,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37957,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "3853:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 37958,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3853:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3827:45:22"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 37960,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37956,
                      "src": "3889:1:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                      }
                    },
                    "id": 37961,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3891:7:22",
                    "memberName": "_symbol",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 37779,
                    "src": "3889:9:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 37953,
                  "id": 37962,
                  "nodeType": "Return",
                  "src": "3882:16:22"
                }
              ]
            },
            "baseFunctions": [
              39995
            ],
            "documentation": {
              "id": 37949,
              "nodeType": "StructuredDocumentation",
              "src": "3697:53:22",
              "text": " @dev See {IERC721Metadata-symbol}."
            },
            "functionSelector": "95d89b41",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "3764:6:22",
            "parameters": {
              "id": 37950,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3770:2:22"
            },
            "returnParameters": {
              "id": 37953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37952,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 37964,
                  "src": "3802:13:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37951,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3802:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3801:15:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 38000,
            "nodeType": "FunctionDefinition",
            "src": "3971:255:22",
            "nodes": [],
            "body": {
              "id": 37999,
              "nodeType": "Block",
              "src": "4050:176:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 37973,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37967,
                        "src": "4074:7:22",
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
                      "id": 37972,
                      "name": "_requireOwned",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38817,
                      "src": "4060:13:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 37974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4060:22:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 37975,
                  "nodeType": "ExpressionStatement",
                  "src": "4060:22:22"
                },
                {
                  "assignments": [
                    37977
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37977,
                      "mutability": "mutable",
                      "name": "baseURI",
                      "nameLocation": "4107:7:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 37999,
                      "src": "4093:21:22",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 37976,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "4093:6:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37980,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37978,
                      "name": "_baseURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38009,
                      "src": "4117:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view returns (string memory)"
                      }
                    },
                    "id": 37979,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4117:10:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4093:34:22"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 37987,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 37983,
                              "name": "baseURI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37977,
                              "src": "4150:7:22",
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
                            "id": 37982,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4144:5:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 37981,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "4144:5:22",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 37984,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4144:14:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 37985,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4159:6:22",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "4144:21:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 37986,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4168:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4144:25:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "hexValue": "",
                      "id": 37996,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4217:2:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                        "typeString": "literal_string \"\""
                      },
                      "value": ""
                    },
                    "id": 37997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "4144:75:22",
                    "trueExpression": {
                      "arguments": [
                        {
                          "id": 37991,
                          "name": "baseURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37977,
                          "src": "4186:7:22",
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
                              "id": 37992,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37967,
                              "src": "4195:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 37993,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4203:8:22",
                            "memberName": "toString",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 41365,
                            "src": "4195:16:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256) pure returns (string memory)"
                            }
                          },
                          "id": 37994,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4195:18:22",
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
                          "id": 37989,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4172:6:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 37988,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "4172:6:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 37990,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4179:6:22",
                        "memberName": "concat",
                        "nodeType": "MemberAccess",
                        "src": "4172:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_stringconcat_pure$__$returns$_t_string_memory_ptr_$",
                          "typeString": "function () pure returns (string memory)"
                        }
                      },
                      "id": 37995,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4172:42:22",
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
                  "functionReturnParameters": 37971,
                  "id": 37998,
                  "nodeType": "Return",
                  "src": "4137:82:22"
                }
              ]
            },
            "baseFunctions": [
              40003
            ],
            "documentation": {
              "id": 37965,
              "nodeType": "StructuredDocumentation",
              "src": "3911:55:22",
              "text": " @dev See {IERC721Metadata-tokenURI}."
            },
            "functionSelector": "c87b56dd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokenURI",
            "nameLocation": "3980:8:22",
            "parameters": {
              "id": 37968,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37967,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3997:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38000,
                  "src": "3989:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37966,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3989:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3988:17:22"
            },
            "returnParameters": {
              "id": 37971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37970,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38000,
                  "src": "4035:13:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37969,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4035:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4034:15:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 38009,
            "nodeType": "FunctionDefinition",
            "src": "4468:92:22",
            "nodes": [],
            "body": {
              "id": 38008,
              "nodeType": "Block",
              "src": "4534:26:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "",
                    "id": 38006,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4551:2:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                      "typeString": "literal_string \"\""
                    },
                    "value": ""
                  },
                  "functionReturnParameters": 38005,
                  "id": 38007,
                  "nodeType": "Return",
                  "src": "4544:9:22"
                }
              ]
            },
            "documentation": {
              "id": 38001,
              "nodeType": "StructuredDocumentation",
              "src": "4232:231:22",
              "text": " @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\n token will be the concatenation of the `baseURI` and the `tokenId`. Empty\n by default, can be overridden in child contracts."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_baseURI",
            "nameLocation": "4477:8:22",
            "parameters": {
              "id": 38002,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4485:2:22"
            },
            "returnParameters": {
              "id": 38005,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38004,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38009,
                  "src": "4519:13:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 38003,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4519:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4518:15:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38025,
            "nodeType": "FunctionDefinition",
            "src": "4617:113:22",
            "nodes": [],
            "body": {
              "id": 38024,
              "nodeType": "Block",
              "src": "4678:52:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38018,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38012,
                        "src": "4697:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38019,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38014,
                        "src": "4701:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 38020,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38846,
                          "src": "4710:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 38021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4710:12:22",
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
                      "id": 38017,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        38669,
                        38743
                      ],
                      "referencedDeclaration": 38669,
                      "src": "4688:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (address,uint256,address)"
                      }
                    },
                    "id": 38022,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4688:35:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38023,
                  "nodeType": "ExpressionStatement",
                  "src": "4688:35:22"
                }
              ]
            },
            "baseFunctions": [
              39931
            ],
            "documentation": {
              "id": 38010,
              "nodeType": "StructuredDocumentation",
              "src": "4566:46:22",
              "text": " @dev See {IERC721-approve}."
            },
            "functionSelector": "095ea7b3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "4626:7:22",
            "parameters": {
              "id": 38015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38012,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4642:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38025,
                  "src": "4634:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38011,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4634:7:22",
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
                  "id": 38014,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "4654:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38025,
                  "src": "4646:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38013,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4646:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4633:29:22"
            },
            "returnParameters": {
              "id": 38016,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4678:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 38042,
            "nodeType": "FunctionDefinition",
            "src": "4791:154:22",
            "nodes": [],
            "body": {
              "id": 38041,
              "nodeType": "Block",
              "src": "4867:78:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38034,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38028,
                        "src": "4891:7:22",
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
                      "id": 38033,
                      "name": "_requireOwned",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38817,
                      "src": "4877:13:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 38035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4877:22:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 38036,
                  "nodeType": "ExpressionStatement",
                  "src": "4877:22:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38038,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38028,
                        "src": "4930:7:22",
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
                      "id": 38037,
                      "name": "_getApproved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38216,
                      "src": "4917:12:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 38039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4917:21:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 38032,
                  "id": 38040,
                  "nodeType": "Return",
                  "src": "4910:28:22"
                }
              ]
            },
            "baseFunctions": [
              39947
            ],
            "documentation": {
              "id": 38026,
              "nodeType": "StructuredDocumentation",
              "src": "4736:50:22",
              "text": " @dev See {IERC721-getApproved}."
            },
            "functionSelector": "081812fc",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getApproved",
            "nameLocation": "4800:11:22",
            "parameters": {
              "id": 38029,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38028,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "4820:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38042,
                  "src": "4812:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38027,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4812:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4811:17:22"
            },
            "returnParameters": {
              "id": 38032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38031,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38042,
                  "src": "4858:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38030,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4858:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4857:9:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 38058,
            "nodeType": "FunctionDefinition",
            "src": "5012:144:22",
            "nodes": [],
            "body": {
              "id": 38057,
              "nodeType": "Block",
              "src": "5087:69:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 38051,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38846,
                          "src": "5116:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 38052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5116:12:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38053,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38045,
                        "src": "5130:8:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38054,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38047,
                        "src": "5140:8:22",
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
                      "id": 38050,
                      "name": "_setApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38788,
                      "src": "5097:18:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 38055,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5097:52:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38056,
                  "nodeType": "ExpressionStatement",
                  "src": "5097:52:22"
                }
              ]
            },
            "baseFunctions": [
              39939
            ],
            "documentation": {
              "id": 38043,
              "nodeType": "StructuredDocumentation",
              "src": "4951:56:22",
              "text": " @dev See {IERC721-setApprovalForAll}."
            },
            "functionSelector": "a22cb465",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "5021:17:22",
            "parameters": {
              "id": 38048,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38045,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "5047:8:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38058,
                  "src": "5039:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38044,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5039:7:22",
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
                  "id": 38047,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "5062:8:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38058,
                  "src": "5057:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 38046,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5057:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5038:33:22"
            },
            "returnParameters": {
              "id": 38049,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5087:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 38082,
            "nodeType": "FunctionDefinition",
            "src": "5222:210:22",
            "nodes": [],
            "body": {
              "id": 38081,
              "nodeType": "Block",
              "src": "5316:116:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    38070
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38070,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "5348:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38081,
                      "src": "5326:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 38069,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 38068,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "5326:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "5326:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "5326:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38073,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 38071,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "5352:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 38072,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5352:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5326:45:22"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 38074,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38070,
                          "src": "5388:1:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                            "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                          }
                        },
                        "id": 38075,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5390:18:22",
                        "memberName": "_operatorApprovals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 37797,
                        "src": "5388:20:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                          "typeString": "mapping(address => mapping(address => bool))"
                        }
                      },
                      "id": 38077,
                      "indexExpression": {
                        "id": 38076,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38061,
                        "src": "5409:5:22",
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
                      "src": "5388:27:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 38079,
                    "indexExpression": {
                      "id": 38078,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38063,
                      "src": "5416:8:22",
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
                    "src": "5388:37:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 38067,
                  "id": 38080,
                  "nodeType": "Return",
                  "src": "5381:44:22"
                }
              ]
            },
            "baseFunctions": [
              39957
            ],
            "documentation": {
              "id": 38059,
              "nodeType": "StructuredDocumentation",
              "src": "5162:55:22",
              "text": " @dev See {IERC721-isApprovedForAll}."
            },
            "functionSelector": "e985e9c5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "5231:16:22",
            "parameters": {
              "id": 38064,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38061,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "5256:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38082,
                  "src": "5248:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38060,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5248:7:22",
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
                  "id": 38063,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "5271:8:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38082,
                  "src": "5263:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38062,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5263:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5247:33:22"
            },
            "returnParameters": {
              "id": 38067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38066,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38082,
                  "src": "5310:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 38065,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5310:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5309:6:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 38128,
            "nodeType": "FunctionDefinition",
            "src": "5494:578:22",
            "nodes": [],
            "body": {
              "id": 38127,
              "nodeType": "Block",
              "src": "5574:498:22",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 38097,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38092,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38087,
                      "src": "5588:2:22",
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
                          "id": 38095,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5602:1:22",
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
                        "id": 38094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5594:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38093,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5594:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38096,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5594:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5588:16:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38106,
                  "nodeType": "IfStatement",
                  "src": "5584:87:22",
                  "trueBody": {
                    "id": 38105,
                    "nodeType": "Block",
                    "src": "5606:65:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 38101,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5657:1:22",
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
                                "id": 38100,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5649:7:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 38099,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5649:7:22",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 38102,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5649:10:22",
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
                            "id": 38098,
                            "name": "ERC721InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39363,
                            "src": "5627:21:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 38103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5627:33:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 38104,
                        "nodeType": "RevertStatement",
                        "src": "5620:40:22"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    38108
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38108,
                      "mutability": "mutable",
                      "name": "previousOwner",
                      "nameLocation": "5897:13:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38127,
                      "src": "5889:21:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 38107,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5889:7:22",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38115,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 38110,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38087,
                        "src": "5921:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38111,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38089,
                        "src": "5925:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 38112,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38846,
                          "src": "5934:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 38113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5934:12:22",
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
                      "id": 38109,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38415,
                      "src": "5913:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$_t_address_$",
                        "typeString": "function (address,uint256,address) returns (address)"
                      }
                    },
                    "id": 38114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5913:34:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5889:58:22"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 38118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38116,
                      "name": "previousOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38108,
                      "src": "5961:13:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 38117,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38085,
                      "src": "5978:4:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5961:21:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38126,
                  "nodeType": "IfStatement",
                  "src": "5957:109:22",
                  "trueBody": {
                    "id": 38125,
                    "nodeType": "Block",
                    "src": "5984:82:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 38120,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38085,
                              "src": "6026:4:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 38121,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38089,
                              "src": "6032:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 38122,
                              "name": "previousOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38108,
                              "src": "6041:13:22",
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
                            "id": 38119,
                            "name": "ERC721IncorrectOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39353,
                            "src": "6005:20:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_address_$returns$_t_error_$",
                              "typeString": "function (address,uint256,address) pure returns (error)"
                            }
                          },
                          "id": 38123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6005:50:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 38124,
                        "nodeType": "RevertStatement",
                        "src": "5998:57:22"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              39923
            ],
            "documentation": {
              "id": 38083,
              "nodeType": "StructuredDocumentation",
              "src": "5438:51:22",
              "text": " @dev See {IERC721-transferFrom}."
            },
            "functionSelector": "23b872dd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "5503:12:22",
            "parameters": {
              "id": 38090,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38085,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "5524:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38128,
                  "src": "5516:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38084,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5516:7:22",
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
                  "id": 38087,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "5538:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38128,
                  "src": "5530:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38086,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5530:7:22",
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
                  "id": 38089,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "5550:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38128,
                  "src": "5542:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38088,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5542:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5515:43:22"
            },
            "returnParameters": {
              "id": 38091,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5574:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 38146,
            "nodeType": "FunctionDefinition",
            "src": "6138:132:22",
            "nodes": [],
            "body": {
              "id": 38145,
              "nodeType": "Block",
              "src": "6214:56:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38139,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38131,
                        "src": "6241:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38140,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38133,
                        "src": "6247:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38141,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38135,
                        "src": "6251:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 38142,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6260:2:22",
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
                      "id": 38138,
                      "name": "safeTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        38146,
                        38176
                      ],
                      "referencedDeclaration": 38176,
                      "src": "6224:16:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 38143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6224:39:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38144,
                  "nodeType": "ExpressionStatement",
                  "src": "6224:39:22"
                }
              ]
            },
            "baseFunctions": [
              39913
            ],
            "documentation": {
              "id": 38129,
              "nodeType": "StructuredDocumentation",
              "src": "6078:55:22",
              "text": " @dev See {IERC721-safeTransferFrom}."
            },
            "functionSelector": "42842e0e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "6147:16:22",
            "parameters": {
              "id": 38136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38131,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6172:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38146,
                  "src": "6164:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38130,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6164:7:22",
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
                  "id": 38133,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6186:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38146,
                  "src": "6178:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38132,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6178:7:22",
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
                  "id": 38135,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "6198:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38146,
                  "src": "6190:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6190:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6163:43:22"
            },
            "returnParameters": {
              "id": 38137,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6214:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 38176,
            "nodeType": "FunctionDefinition",
            "src": "6336:233:22",
            "nodes": [],
            "body": {
              "id": 38175,
              "nodeType": "Block",
              "src": "6439:130:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38159,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38149,
                        "src": "6462:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38160,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38151,
                        "src": "6468:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38161,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38153,
                        "src": "6472:7:22",
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
                      "id": 38158,
                      "name": "transferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38128,
                      "src": "6449:12:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 38162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6449:31:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38163,
                  "nodeType": "ExpressionStatement",
                  "src": "6449:31:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 38167,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38846,
                          "src": "6524:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 38168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6524:12:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38169,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38149,
                        "src": "6538:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38170,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38151,
                        "src": "6544:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38171,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38153,
                        "src": "6548:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 38172,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38155,
                        "src": "6557:4:22",
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
                        "id": 38164,
                        "name": "ERC721Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40081,
                        "src": "6490:11:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC721Utils_$40081_$",
                          "typeString": "type(library ERC721Utils)"
                        }
                      },
                      "id": 38166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6502:21:22",
                      "memberName": "checkOnERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 40080,
                      "src": "6490:33:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 38173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6490:72:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38174,
                  "nodeType": "ExpressionStatement",
                  "src": "6490:72:22"
                }
              ]
            },
            "baseFunctions": [
              39903
            ],
            "documentation": {
              "id": 38147,
              "nodeType": "StructuredDocumentation",
              "src": "6276:55:22",
              "text": " @dev See {IERC721-safeTransferFrom}."
            },
            "functionSelector": "b88d4fde",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "6345:16:22",
            "parameters": {
              "id": 38156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38149,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6370:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38176,
                  "src": "6362:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38148,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6362:7:22",
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
                  "id": 38151,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6384:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38176,
                  "src": "6376:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38150,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6376:7:22",
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
                  "id": 38153,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "6396:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38176,
                  "src": "6388:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38152,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6388:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38155,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "6418:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38176,
                  "src": "6405:17:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 38154,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6405:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6361:62:22"
            },
            "returnParameters": {
              "id": 38157,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6439:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 38196,
            "nodeType": "FunctionDefinition",
            "src": "7084:172:22",
            "nodes": [],
            "body": {
              "id": 38195,
              "nodeType": "Block",
              "src": "7159:97:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    38186
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38186,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "7191:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38195,
                      "src": "7169:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 38185,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 38184,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "7169:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "7169:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "7169:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38189,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 38187,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "7195:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 38188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7195:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7169:45:22"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 38190,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38186,
                        "src": "7231:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                        }
                      },
                      "id": 38191,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7233:7:22",
                      "memberName": "_owners",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 37783,
                      "src": "7231:9:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 38193,
                    "indexExpression": {
                      "id": 38192,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38179,
                      "src": "7241:7:22",
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
                    "src": "7231:18:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 38183,
                  "id": 38194,
                  "nodeType": "Return",
                  "src": "7224:25:22"
                }
              ]
            },
            "documentation": {
              "id": 38177,
              "nodeType": "StructuredDocumentation",
              "src": "6575:504:22",
              "text": " @dev Returns the owner of the `tokenId`. Does NOT revert if token doesn't exist\n IMPORTANT: Any overrides to this function that add ownership of tokens not tracked by the\n core ERC-721 logic MUST be matched with the use of {_increaseBalance} to keep balances\n consistent with ownership. The invariant to preserve is that for any address `a` the value returned by\n `balanceOf(a)` must be equal to the number of tokens such that `_ownerOf(tokenId)` is `a`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ownerOf",
            "nameLocation": "7093:8:22",
            "parameters": {
              "id": 38180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38179,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "7110:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38196,
                  "src": "7102:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38178,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7102:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7101:17:22"
            },
            "returnParameters": {
              "id": 38183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38182,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38196,
                  "src": "7150:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38181,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7150:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7149:9:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38216,
            "nodeType": "FunctionDefinition",
            "src": "7372:184:22",
            "nodes": [],
            "body": {
              "id": 38215,
              "nodeType": "Block",
              "src": "7451:105:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    38206
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38206,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "7483:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38215,
                      "src": "7461:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 38205,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 38204,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "7461:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "7461:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "7461:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38209,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 38207,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "7487:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 38208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7487:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7461:45:22"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 38210,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38206,
                        "src": "7523:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                        }
                      },
                      "id": 38211,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7525:15:22",
                      "memberName": "_tokenApprovals",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 37791,
                      "src": "7523:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 38213,
                    "indexExpression": {
                      "id": 38212,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38199,
                      "src": "7541:7:22",
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
                    "src": "7523:26:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 38203,
                  "id": 38214,
                  "nodeType": "Return",
                  "src": "7516:33:22"
                }
              ]
            },
            "documentation": {
              "id": 38197,
              "nodeType": "StructuredDocumentation",
              "src": "7262:105:22",
              "text": " @dev Returns the approved address for `tokenId`. Returns 0 if `tokenId` is not minted."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getApproved",
            "nameLocation": "7381:12:22",
            "parameters": {
              "id": 38200,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38199,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "7402:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38216,
                  "src": "7394:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38198,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7394:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7393:17:22"
            },
            "returnParameters": {
              "id": 38203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38202,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38216,
                  "src": "7442:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38201,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7442:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7441:9:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38252,
            "nodeType": "FunctionDefinition",
            "src": "7867:272:22",
            "nodes": [],
            "body": {
              "id": 38251,
              "nodeType": "Block",
              "src": "7976:163:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 38249,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 38233,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 38228,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38221,
                        "src": "8005:7:22",
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
                            "id": 38231,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8024:1:22",
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
                          "id": 38230,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8016:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 38229,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "8016:7:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 38232,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8016:10:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "8005:21:22",
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
                          "id": 38247,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 38241,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 38236,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 38234,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38219,
                                "src": "8043:5:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "id": 38235,
                                "name": "spender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38221,
                                "src": "8052:7:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "8043:16:22",
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
                                  "id": 38238,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 38219,
                                  "src": "8080:5:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 38239,
                                  "name": "spender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 38221,
                                  "src": "8087:7:22",
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
                                "id": 38237,
                                "name": "isApprovedForAll",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38082,
                                "src": "8063:16:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address,address) view returns (bool)"
                                }
                              },
                              "id": 38240,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8063:32:22",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "8043:52:22",
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
                            "id": 38246,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 38243,
                                  "name": "tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 38223,
                                  "src": "8112:7:22",
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
                                "id": 38242,
                                "name": "_getApproved",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38216,
                                "src": "8099:12:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                  "typeString": "function (uint256) view returns (address)"
                                }
                              },
                              "id": 38244,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8099:21:22",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 38245,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38221,
                              "src": "8124:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "8099:32:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "8043:88:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 38248,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "8042:90:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "8005:127:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 38227,
                  "id": 38250,
                  "nodeType": "Return",
                  "src": "7986:146:22"
                }
              ]
            },
            "documentation": {
              "id": 38217,
              "nodeType": "StructuredDocumentation",
              "src": "7562:300:22",
              "text": " @dev Returns whether `spender` is allowed to manage `owner`'s tokens, or `tokenId` in\n particular (ignoring whether it is owned by `owner`).\n WARNING: This function assumes that `owner` is the actual owner of `tokenId` and does not verify this\n assumption."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isAuthorized",
            "nameLocation": "7876:13:22",
            "parameters": {
              "id": 38224,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38219,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "7898:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38252,
                  "src": "7890:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38218,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7890:7:22",
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
                  "id": 38221,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "7913:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38252,
                  "src": "7905:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38220,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7905:7:22",
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
                  "id": 38223,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "7930:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38252,
                  "src": "7922:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38222,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7922:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7889:49:22"
            },
            "returnParameters": {
              "id": 38227,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38226,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38252,
                  "src": "7970:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 38225,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7970:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7969:6:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38289,
            "nodeType": "FunctionDefinition",
            "src": "8571:368:22",
            "nodes": [],
            "body": {
              "id": 38288,
              "nodeType": "Block",
              "src": "8668:271:22",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 38267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "8682:39:22",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 38263,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38255,
                          "src": "8697:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 38264,
                          "name": "spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38257,
                          "src": "8704:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 38265,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38259,
                          "src": "8713:7:22",
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
                        "id": 38262,
                        "name": "_isAuthorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38252,
                        "src": "8683:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) view returns (bool)"
                        }
                      },
                      "id": 38266,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8683:38:22",
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
                  "id": 38287,
                  "nodeType": "IfStatement",
                  "src": "8678:255:22",
                  "trueBody": {
                    "id": 38286,
                    "nodeType": "Block",
                    "src": "8723:210:22",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 38273,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 38268,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38255,
                            "src": "8741:5:22",
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
                                "id": 38271,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8758:1:22",
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
                              "id": 38270,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8750:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 38269,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "8750:7:22",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 38272,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8750:10:22",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "8741:19:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 38284,
                          "nodeType": "Block",
                          "src": "8839:84:22",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 38280,
                                    "name": "spender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 38257,
                                    "src": "8891:7:22",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 38281,
                                    "name": "tokenId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 38259,
                                    "src": "8900:7:22",
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
                                  "id": 38279,
                                  "name": "ERC721InsufficientApproval",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 39370,
                                  "src": "8864:26:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$returns$_t_error_$",
                                    "typeString": "function (address,uint256) pure returns (error)"
                                  }
                                },
                                "id": 38282,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8864:44:22",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_error",
                                  "typeString": "error"
                                }
                              },
                              "id": 38283,
                              "nodeType": "RevertStatement",
                              "src": "8857:51:22"
                            }
                          ]
                        },
                        "id": 38285,
                        "nodeType": "IfStatement",
                        "src": "8737:186:22",
                        "trueBody": {
                          "id": 38278,
                          "nodeType": "Block",
                          "src": "8762:71:22",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 38275,
                                    "name": "tokenId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 38259,
                                    "src": "8810:7:22",
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
                                  "id": 38274,
                                  "name": "ERC721NonexistentToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 39344,
                                  "src": "8787:22:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                                    "typeString": "function (uint256) pure returns (error)"
                                  }
                                },
                                "id": 38276,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8787:31:22",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_error",
                                  "typeString": "error"
                                }
                              },
                              "id": 38277,
                              "nodeType": "RevertStatement",
                              "src": "8780:38:22"
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
              "id": 38253,
              "nodeType": "StructuredDocumentation",
              "src": "8145:421:22",
              "text": " @dev Checks if `spender` can operate on `tokenId`, assuming the provided `owner` is the actual owner.\n Reverts if:\n - `spender` does not have approval from `owner` for `tokenId`.\n - `spender` does not have approval to manage all of `owner`'s assets.\n WARNING: This function assumes that `owner` is the actual owner of `tokenId` and does not verify this\n assumption."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkAuthorized",
            "nameLocation": "8580:16:22",
            "parameters": {
              "id": 38260,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38255,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "8605:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38289,
                  "src": "8597:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38254,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8597:7:22",
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
                  "id": 38257,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "8620:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38289,
                  "src": "8612:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38256,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8612:7:22",
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
                  "id": 38259,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "8637:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38289,
                  "src": "8629:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38258,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8629:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8596:49:22"
            },
            "returnParameters": {
              "id": 38261,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8668:0:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38313,
            "nodeType": "FunctionDefinition",
            "src": "9581:210:22",
            "nodes": [],
            "body": {
              "id": 38312,
              "nodeType": "Block",
              "src": "9656:135:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    38299
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38299,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "9688:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38312,
                      "src": "9666:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 38298,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 38297,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "9666:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "9666:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "9666:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38302,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 38300,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "9692:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 38301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9692:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9666:45:22"
                },
                {
                  "id": 38311,
                  "nodeType": "UncheckedBlock",
                  "src": "9721:64:22",
                  "statements": [
                    {
                      "expression": {
                        "id": 38309,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "baseExpression": {
                            "expression": {
                              "id": 38303,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38299,
                              "src": "9745:1:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                                "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                              }
                            },
                            "id": 38306,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9747:9:22",
                            "memberName": "_balances",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 37787,
                            "src": "9745:11:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 38307,
                          "indexExpression": {
                            "id": 38305,
                            "name": "account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38292,
                            "src": "9757:7:22",
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
                          "src": "9745:20:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "id": 38308,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38294,
                          "src": "9769:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "src": "9745:29:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 38310,
                      "nodeType": "ExpressionStatement",
                      "src": "9745:29:22"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 38290,
              "nodeType": "StructuredDocumentation",
              "src": "8945:631:22",
              "text": " @dev Unsafe write access to the balances, used by extensions that \"mint\" tokens using an {ownerOf} override.\n NOTE: the value is limited to type(uint128).max. This protect against _balance overflow. It is unrealistic that\n a uint256 would ever overflow from increments when these increments are bounded to uint128 values.\n WARNING: Increasing an account's balance using this function tends to be paired with an override of the\n {_ownerOf} function to resolve the ownership of the corresponding tokens so that balances and ownership\n remain consistent with one another."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_increaseBalance",
            "nameLocation": "9590:16:22",
            "parameters": {
              "id": 38295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38292,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "9615:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38313,
                  "src": "9607:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38291,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9607:7:22",
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
                  "id": 38294,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9632:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38313,
                  "src": "9624:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 38293,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "9624:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9606:32:22"
            },
            "returnParameters": {
              "id": 38296,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9656:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38415,
            "nodeType": "FunctionDefinition",
            "src": "10384:856:22",
            "nodes": [],
            "body": {
              "id": 38414,
              "nodeType": "Block",
              "src": "10479:761:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    38327
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38327,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "10511:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38414,
                      "src": "10489:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 38326,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 38325,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "10489:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "10489:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "10489:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38330,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 38328,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "10515:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 38329,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10515:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10489:45:22"
                },
                {
                  "assignments": [
                    38332
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38332,
                      "mutability": "mutable",
                      "name": "from",
                      "nameLocation": "10552:4:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38414,
                      "src": "10544:12:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 38331,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "10544:7:22",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38336,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 38334,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38318,
                        "src": "10568:7:22",
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
                      "id": 38333,
                      "name": "_ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38196,
                      "src": "10559:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 38335,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10559:17:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10544:32:22"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 38342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38337,
                      "name": "auth",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38320,
                      "src": "10636:4:22",
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
                          "id": 38340,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10652:1:22",
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
                        "id": 38339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10644:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38338,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10644:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38341,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10644:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10636:18:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38350,
                  "nodeType": "IfStatement",
                  "src": "10632:86:22",
                  "trueBody": {
                    "id": 38349,
                    "nodeType": "Block",
                    "src": "10656:62:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 38344,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38332,
                              "src": "10687:4:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 38345,
                              "name": "auth",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38320,
                              "src": "10693:4:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 38346,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38318,
                              "src": "10699:7:22",
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
                            "id": 38343,
                            "name": "_checkAuthorized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38289,
                            "src": "10670:16:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256) view"
                            }
                          },
                          "id": 38347,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10670:37:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 38348,
                        "nodeType": "ExpressionStatement",
                        "src": "10670:37:22"
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
                    "id": 38356,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38351,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38332,
                      "src": "10762:4:22",
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
                          "id": 38354,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10778:1:22",
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
                        "id": 38353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10770:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38352,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10770:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10770:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10762:18:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38380,
                  "nodeType": "IfStatement",
                  "src": "10758:258:22",
                  "trueBody": {
                    "id": 38379,
                    "nodeType": "Block",
                    "src": "10782:234:22",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 38360,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10895:1:22",
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
                                "id": 38359,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10887:7:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 38358,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10887:7:22",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 38361,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10887:10:22",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 38362,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38318,
                              "src": "10899:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 38365,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10916:1:22",
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
                                "id": 38364,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10908:7:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 38363,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10908:7:22",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 38366,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10908:10:22",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "hexValue": "66616c7365",
                              "id": 38367,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10920:5:22",
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
                            "id": 38357,
                            "name": "_approve",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              38669,
                              38743
                            ],
                            "referencedDeclaration": 38743,
                            "src": "10878:8:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bool_$returns$__$",
                              "typeString": "function (address,uint256,address,bool)"
                            }
                          },
                          "id": 38368,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10878:48:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 38369,
                        "nodeType": "ExpressionStatement",
                        "src": "10878:48:22"
                      },
                      {
                        "id": 38378,
                        "nodeType": "UncheckedBlock",
                        "src": "10941:65:22",
                        "statements": [
                          {
                            "expression": {
                              "id": 38376,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 38370,
                                    "name": "$",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 38327,
                                    "src": "10969:1:22",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                                    }
                                  },
                                  "id": 38373,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "10971:9:22",
                                  "memberName": "_balances",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 37787,
                                  "src": "10969:11:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 38374,
                                "indexExpression": {
                                  "id": 38372,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 38332,
                                  "src": "10981:4:22",
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
                                "src": "10969:17:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "-=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 38375,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10990:1:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "10969:22:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 38377,
                            "nodeType": "ExpressionStatement",
                            "src": "10969:22:22"
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
                    "id": 38386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38381,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38316,
                      "src": "11030:2:22",
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
                          "id": 38384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11044:1:22",
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
                        "id": 38383,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "11036:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38382,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11036:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38385,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11036:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11030:16:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38397,
                  "nodeType": "IfStatement",
                  "src": "11026:109:22",
                  "trueBody": {
                    "id": 38396,
                    "nodeType": "Block",
                    "src": "11048:87:22",
                    "statements": [
                      {
                        "id": 38395,
                        "nodeType": "UncheckedBlock",
                        "src": "11062:63:22",
                        "statements": [
                          {
                            "expression": {
                              "id": 38393,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 38387,
                                    "name": "$",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 38327,
                                    "src": "11090:1:22",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                                    }
                                  },
                                  "id": 38390,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "11092:9:22",
                                  "memberName": "_balances",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 37787,
                                  "src": "11090:11:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 38391,
                                "indexExpression": {
                                  "id": 38389,
                                  "name": "to",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 38316,
                                  "src": "11102:2:22",
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
                                "src": "11090:15:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 38392,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11109:1:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "11090:20:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 38394,
                            "nodeType": "ExpressionStatement",
                            "src": "11090:20:22"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 38404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "expression": {
                          "id": 38398,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38327,
                          "src": "11145:1:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                            "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                          }
                        },
                        "id": 38401,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11147:7:22",
                        "memberName": "_owners",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 37783,
                        "src": "11145:9:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 38402,
                      "indexExpression": {
                        "id": 38400,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38318,
                        "src": "11155:7:22",
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
                      "src": "11145:18:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 38403,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38316,
                      "src": "11166:2:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11145:23:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 38405,
                  "nodeType": "ExpressionStatement",
                  "src": "11145:23:22"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 38407,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38332,
                        "src": "11193:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38408,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38316,
                        "src": "11199:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38409,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38318,
                        "src": "11203:7:22",
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
                      "id": 38406,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39857,
                      "src": "11184:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 38410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11184:27:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38411,
                  "nodeType": "EmitStatement",
                  "src": "11179:32:22"
                },
                {
                  "expression": {
                    "id": 38412,
                    "name": "from",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 38332,
                    "src": "11229:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 38324,
                  "id": 38413,
                  "nodeType": "Return",
                  "src": "11222:11:22"
                }
              ]
            },
            "documentation": {
              "id": 38314,
              "nodeType": "StructuredDocumentation",
              "src": "9797:582:22",
              "text": " @dev Transfers `tokenId` from its current owner to `to`, or alternatively mints (or burns) if the current owner\n (or `to`) is the zero address. Returns the owner of the `tokenId` before the update.\n The `auth` argument is optional. If the value passed is non 0, then this function will check that\n `auth` is either the owner of the token, or approved to operate on the token (by the owner).\n Emits a {Transfer} event.\n NOTE: If overriding this function in a way that tracks balances, see also {_increaseBalance}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_update",
            "nameLocation": "10393:7:22",
            "parameters": {
              "id": 38321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38316,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "10409:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38415,
                  "src": "10401:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38315,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10401:7:22",
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
                  "id": 38318,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "10421:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38415,
                  "src": "10413:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38317,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10413:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38320,
                  "mutability": "mutable",
                  "name": "auth",
                  "nameLocation": "10438:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38415,
                  "src": "10430:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38319,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10430:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10400:43:22"
            },
            "returnParameters": {
              "id": 38324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38323,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38415,
                  "src": "10470:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38322,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10470:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10469:9:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38465,
            "nodeType": "FunctionDefinition",
            "src": "11562:327:22",
            "nodes": [],
            "body": {
              "id": 38464,
              "nodeType": "Block",
              "src": "11615:274:22",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 38428,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38423,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38418,
                      "src": "11629:2:22",
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
                          "id": 38426,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11643:1:22",
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
                        "id": 38425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "11635:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38424,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11635:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38427,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11635:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11629:16:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38437,
                  "nodeType": "IfStatement",
                  "src": "11625:87:22",
                  "trueBody": {
                    "id": 38436,
                    "nodeType": "Block",
                    "src": "11647:65:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 38432,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11698:1:22",
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
                                "id": 38431,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "11690:7:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 38430,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "11690:7:22",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 38433,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11690:10:22",
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
                            "id": 38429,
                            "name": "ERC721InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39363,
                            "src": "11668:21:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 38434,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11668:33:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 38435,
                        "nodeType": "RevertStatement",
                        "src": "11661:40:22"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    38439
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38439,
                      "mutability": "mutable",
                      "name": "previousOwner",
                      "nameLocation": "11729:13:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38464,
                      "src": "11721:21:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 38438,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "11721:7:22",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38448,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 38441,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38418,
                        "src": "11753:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38442,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38420,
                        "src": "11757:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 38445,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11774:1:22",
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
                          "id": 38444,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11766:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 38443,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "11766:7:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 38446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11766:10:22",
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
                      "id": 38440,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38415,
                      "src": "11745:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$_t_address_$",
                        "typeString": "function (address,uint256,address) returns (address)"
                      }
                    },
                    "id": 38447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11745:32:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11721:56:22"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 38454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38449,
                      "name": "previousOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38439,
                      "src": "11791:13:22",
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
                          "id": 38452,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11816:1:22",
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
                        "id": 38451,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "11808:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38450,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11808:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38453,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11808:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11791:27:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38463,
                  "nodeType": "IfStatement",
                  "src": "11787:96:22",
                  "trueBody": {
                    "id": 38462,
                    "nodeType": "Block",
                    "src": "11820:63:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 38458,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11869:1:22",
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
                                "id": 38457,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "11861:7:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 38456,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "11861:7:22",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 38459,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11861:10:22",
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
                            "id": 38455,
                            "name": "ERC721InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39358,
                            "src": "11841:19:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 38460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11841:31:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 38461,
                        "nodeType": "RevertStatement",
                        "src": "11834:38:22"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 38416,
              "nodeType": "StructuredDocumentation",
              "src": "11246:311:22",
              "text": " @dev Mints `tokenId` and transfers it to `to`.\n WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\n Requirements:\n - `tokenId` must not exist.\n - `to` cannot be the zero address.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mint",
            "nameLocation": "11571:5:22",
            "parameters": {
              "id": 38421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38418,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "11585:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38465,
                  "src": "11577:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38417,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11577:7:22",
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
                  "id": 38420,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "11597:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38465,
                  "src": "11589:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38419,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11589:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11576:29:22"
            },
            "returnParameters": {
              "id": 38422,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11615:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38480,
            "nodeType": "FunctionDefinition",
            "src": "12240:100:22",
            "nodes": [],
            "body": {
              "id": 38479,
              "nodeType": "Block",
              "src": "12297:43:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38474,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38468,
                        "src": "12317:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38475,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38470,
                        "src": "12321:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 38476,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12330:2:22",
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
                      "id": 38473,
                      "name": "_safeMint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        38480,
                        38510
                      ],
                      "referencedDeclaration": 38510,
                      "src": "12307:9:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory)"
                      }
                    },
                    "id": 38477,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12307:26:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38478,
                  "nodeType": "ExpressionStatement",
                  "src": "12307:26:22"
                }
              ]
            },
            "documentation": {
              "id": 38466,
              "nodeType": "StructuredDocumentation",
              "src": "11895:340:22",
              "text": " @dev Mints `tokenId`, transfers it to `to` and checks for `to` acceptance.\n Requirements:\n - `tokenId` must not exist.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeMint",
            "nameLocation": "12249:9:22",
            "parameters": {
              "id": 38471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38468,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "12267:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38480,
                  "src": "12259:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38467,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12259:7:22",
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
                  "id": 38470,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "12279:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38480,
                  "src": "12271:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38469,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12271:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12258:29:22"
            },
            "returnParameters": {
              "id": 38472,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12297:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38510,
            "nodeType": "FunctionDefinition",
            "src": "12561:207:22",
            "nodes": [],
            "body": {
              "id": 38509,
              "nodeType": "Block",
              "src": "12645:123:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38491,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38483,
                        "src": "12661:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38492,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38485,
                        "src": "12665:7:22",
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
                      "id": 38490,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38465,
                      "src": "12655:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 38493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12655:18:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38494,
                  "nodeType": "ExpressionStatement",
                  "src": "12655:18:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 38498,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38846,
                          "src": "12717:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 38499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12717:12:22",
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
                            "id": 38502,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12739:1:22",
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
                          "id": 38501,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12731:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 38500,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12731:7:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 38503,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12731:10:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38504,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38483,
                        "src": "12743:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38505,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38485,
                        "src": "12747:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 38506,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38487,
                        "src": "12756:4:22",
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
                        "id": 38495,
                        "name": "ERC721Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40081,
                        "src": "12683:11:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC721Utils_$40081_$",
                          "typeString": "type(library ERC721Utils)"
                        }
                      },
                      "id": 38497,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12695:21:22",
                      "memberName": "checkOnERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 40080,
                      "src": "12683:33:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 38507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12683:78:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38508,
                  "nodeType": "ExpressionStatement",
                  "src": "12683:78:22"
                }
              ]
            },
            "documentation": {
              "id": 38481,
              "nodeType": "StructuredDocumentation",
              "src": "12346:210:22",
              "text": " @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\n forwarded in {IERC721Receiver-onERC721Received} to contract recipients."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeMint",
            "nameLocation": "12570:9:22",
            "parameters": {
              "id": 38488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38483,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "12588:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38510,
                  "src": "12580:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38482,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12580:7:22",
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
                  "id": 38485,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "12600:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38510,
                  "src": "12592:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38484,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12592:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38487,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "12622:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38510,
                  "src": "12609:17:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 38486,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12609:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12579:48:22"
            },
            "returnParameters": {
              "id": 38489,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12645:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38543,
            "nodeType": "FunctionDefinition",
            "src": "13094:227:22",
            "nodes": [],
            "body": {
              "id": 38542,
              "nodeType": "Block",
              "src": "13135:186:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    38517
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38517,
                      "mutability": "mutable",
                      "name": "previousOwner",
                      "nameLocation": "13153:13:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38542,
                      "src": "13145:21:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 38516,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "13145:7:22",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38529,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 38521,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13185:1:22",
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
                          "id": 38520,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13177:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 38519,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13177:7:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 38522,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13177:10:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38523,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38513,
                        "src": "13189:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 38526,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13206:1:22",
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
                          "id": 38525,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13198:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 38524,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13198:7:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 38527,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13198:10:22",
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
                      "id": 38518,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38415,
                      "src": "13169:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$_t_address_$",
                        "typeString": "function (address,uint256,address) returns (address)"
                      }
                    },
                    "id": 38528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13169:40:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13145:64:22"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 38535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38530,
                      "name": "previousOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38517,
                      "src": "13223:13:22",
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
                          "id": 38533,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13248:1:22",
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
                        "id": 38532,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13240:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38531,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13240:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13240:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13223:27:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38541,
                  "nodeType": "IfStatement",
                  "src": "13219:96:22",
                  "trueBody": {
                    "id": 38540,
                    "nodeType": "Block",
                    "src": "13252:63:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 38537,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38513,
                              "src": "13296:7:22",
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
                            "id": 38536,
                            "name": "ERC721NonexistentToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39344,
                            "src": "13273:22:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256) pure returns (error)"
                            }
                          },
                          "id": 38538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13273:31:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 38539,
                        "nodeType": "RevertStatement",
                        "src": "13266:38:22"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 38511,
              "nodeType": "StructuredDocumentation",
              "src": "12774:315:22",
              "text": " @dev Destroys `tokenId`.\n The approval is cleared when the token is burned.\n This is an internal function that does not check if the sender is authorized to operate on the token.\n Requirements:\n - `tokenId` must exist.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "13103:5:22",
            "parameters": {
              "id": 38514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38513,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "13117:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38543,
                  "src": "13109:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38512,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13109:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13108:17:22"
            },
            "returnParameters": {
              "id": 38515,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13135:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38603,
            "nodeType": "FunctionDefinition",
            "src": "13645:460:22",
            "nodes": [],
            "body": {
              "id": 38602,
              "nodeType": "Block",
              "src": "13716:389:22",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 38558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38553,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38548,
                      "src": "13730:2:22",
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
                          "id": 38556,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13744:1:22",
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
                        "id": 38555,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13736:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38554,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13736:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38557,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13736:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13730:16:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38567,
                  "nodeType": "IfStatement",
                  "src": "13726:87:22",
                  "trueBody": {
                    "id": 38566,
                    "nodeType": "Block",
                    "src": "13748:65:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 38562,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "13799:1:22",
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
                                "id": 38561,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "13791:7:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 38560,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "13791:7:22",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 38563,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13791:10:22",
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
                            "id": 38559,
                            "name": "ERC721InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39363,
                            "src": "13769:21:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 38564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13769:33:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 38565,
                        "nodeType": "RevertStatement",
                        "src": "13762:40:22"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    38569
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38569,
                      "mutability": "mutable",
                      "name": "previousOwner",
                      "nameLocation": "13830:13:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38602,
                      "src": "13822:21:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 38568,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "13822:7:22",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38578,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 38571,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38548,
                        "src": "13854:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38572,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38550,
                        "src": "13858:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 38575,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13875:1:22",
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
                          "id": 38574,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13867:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 38573,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13867:7:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 38576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13867:10:22",
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
                      "id": 38570,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38415,
                      "src": "13846:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$_t_address_$",
                        "typeString": "function (address,uint256,address) returns (address)"
                      }
                    },
                    "id": 38577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13846:32:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13822:56:22"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 38584,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38579,
                      "name": "previousOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38569,
                      "src": "13892:13:22",
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
                          "id": 38582,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13917:1:22",
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
                        "id": 38581,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13909:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38580,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13909:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38583,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13909:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13892:27:22",
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
                      "id": 38592,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 38590,
                        "name": "previousOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38569,
                        "src": "13994:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 38591,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38546,
                        "src": "14011:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "13994:21:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 38600,
                    "nodeType": "IfStatement",
                    "src": "13990:109:22",
                    "trueBody": {
                      "id": 38599,
                      "nodeType": "Block",
                      "src": "14017:82:22",
                      "statements": [
                        {
                          "errorCall": {
                            "arguments": [
                              {
                                "id": 38594,
                                "name": "from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38546,
                                "src": "14059:4:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 38595,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38550,
                                "src": "14065:7:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 38596,
                                "name": "previousOwner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38569,
                                "src": "14074:13:22",
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
                              "id": 38593,
                              "name": "ERC721IncorrectOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 39353,
                              "src": "14038:20:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_address_$returns$_t_error_$",
                                "typeString": "function (address,uint256,address) pure returns (error)"
                              }
                            },
                            "id": 38597,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14038:50:22",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_error",
                              "typeString": "error"
                            }
                          },
                          "id": 38598,
                          "nodeType": "RevertStatement",
                          "src": "14031:57:22"
                        }
                      ]
                    }
                  },
                  "id": 38601,
                  "nodeType": "IfStatement",
                  "src": "13888:211:22",
                  "trueBody": {
                    "id": 38589,
                    "nodeType": "Block",
                    "src": "13921:63:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 38586,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38550,
                              "src": "13965:7:22",
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
                            "id": 38585,
                            "name": "ERC721NonexistentToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39344,
                            "src": "13942:22:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256) pure returns (error)"
                            }
                          },
                          "id": 38587,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13942:31:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 38588,
                        "nodeType": "RevertStatement",
                        "src": "13935:38:22"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 38544,
              "nodeType": "StructuredDocumentation",
              "src": "13327:313:22",
              "text": " @dev Transfers `tokenId` from `from` to `to`.\n  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\n Requirements:\n - `to` cannot be the zero address.\n - `tokenId` token must be owned by `from`.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_transfer",
            "nameLocation": "13654:9:22",
            "parameters": {
              "id": 38551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38546,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "13672:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38603,
                  "src": "13664:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38545,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13664:7:22",
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
                  "id": 38548,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "13686:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38603,
                  "src": "13678:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38547,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13678:7:22",
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
                  "id": 38550,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "13698:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38603,
                  "src": "13690:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13690:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13663:43:22"
            },
            "returnParameters": {
              "id": 38552,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13716:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38621,
            "nodeType": "FunctionDefinition",
            "src": "15039:128:22",
            "nodes": [],
            "body": {
              "id": 38620,
              "nodeType": "Block",
              "src": "15114:53:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38614,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38606,
                        "src": "15138:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38615,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38608,
                        "src": "15144:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38616,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38610,
                        "src": "15148:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 38617,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "15157:2:22",
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
                      "id": 38613,
                      "name": "_safeTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        38621,
                        38651
                      ],
                      "referencedDeclaration": 38651,
                      "src": "15124:13:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 38618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15124:36:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38619,
                  "nodeType": "ExpressionStatement",
                  "src": "15124:36:22"
                }
              ]
            },
            "documentation": {
              "id": 38604,
              "nodeType": "StructuredDocumentation",
              "src": "14111:923:22",
              "text": " @dev Safely transfers `tokenId` token from `from` to `to`, checking that contract recipients\n are aware of the ERC-721 standard to prevent tokens from being forever locked.\n `data` is additional data, it has no specified format and it is sent in call to `to`.\n This internal function is like {safeTransferFrom} in the sense that it invokes\n {IERC721Receiver-onERC721Received} on the receiver, and can be used to e.g.\n implement alternative mechanisms to perform token transfer, such as signature-based.\n Requirements:\n - `tokenId` token must exist and be owned by `from`.\n - `to` cannot be the zero address.\n - `from` cannot be the zero address.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeTransfer",
            "nameLocation": "15048:13:22",
            "parameters": {
              "id": 38611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38606,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "15070:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38621,
                  "src": "15062:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38605,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15062:7:22",
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
                  "id": 38608,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "15084:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38621,
                  "src": "15076:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38607,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15076:7:22",
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
                  "id": 38610,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "15096:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38621,
                  "src": "15088:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38609,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15088:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15061:43:22"
            },
            "returnParameters": {
              "id": 38612,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "15114:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38651,
            "nodeType": "FunctionDefinition",
            "src": "15404:229:22",
            "nodes": [],
            "body": {
              "id": 38650,
              "nodeType": "Block",
              "src": "15506:127:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38634,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38624,
                        "src": "15526:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38635,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38626,
                        "src": "15532:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38636,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38628,
                        "src": "15536:7:22",
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
                      "id": 38633,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38603,
                      "src": "15516:9:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 38637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15516:28:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38638,
                  "nodeType": "ExpressionStatement",
                  "src": "15516:28:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 38642,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38846,
                          "src": "15588:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 38643,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15588:12:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38644,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38624,
                        "src": "15602:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38645,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38626,
                        "src": "15608:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38646,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38628,
                        "src": "15612:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 38647,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38630,
                        "src": "15621:4:22",
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
                        "id": 38639,
                        "name": "ERC721Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40081,
                        "src": "15554:11:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC721Utils_$40081_$",
                          "typeString": "type(library ERC721Utils)"
                        }
                      },
                      "id": 38641,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "15566:21:22",
                      "memberName": "checkOnERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 40080,
                      "src": "15554:33:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 38648,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15554:72:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38649,
                  "nodeType": "ExpressionStatement",
                  "src": "15554:72:22"
                }
              ]
            },
            "documentation": {
              "id": 38622,
              "nodeType": "StructuredDocumentation",
              "src": "15173:226:22",
              "text": " @dev Same as {xref-ERC721-_safeTransfer-address-address-uint256-}[`_safeTransfer`], with an additional `data` parameter which is\n forwarded in {IERC721Receiver-onERC721Received} to contract recipients."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeTransfer",
            "nameLocation": "15413:13:22",
            "parameters": {
              "id": 38631,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38624,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "15435:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38651,
                  "src": "15427:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38623,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15427:7:22",
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
                  "id": 38626,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "15449:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38651,
                  "src": "15441:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38625,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15441:7:22",
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
                  "id": 38628,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "15461:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38651,
                  "src": "15453:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38627,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15453:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38630,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "15483:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38651,
                  "src": "15470:17:22",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 38629,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15470:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15426:62:22"
            },
            "returnParameters": {
              "id": 38632,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "15506:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38669,
            "nodeType": "FunctionDefinition",
            "src": "16076:120:22",
            "nodes": [],
            "body": {
              "id": 38668,
              "nodeType": "Block",
              "src": "16146:50:22",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38662,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38654,
                        "src": "16165:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38663,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38656,
                        "src": "16169:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 38664,
                        "name": "auth",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38658,
                        "src": "16178:4:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 38665,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "16184:4:22",
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
                      "id": 38661,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        38669,
                        38743
                      ],
                      "referencedDeclaration": 38743,
                      "src": "16156:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,uint256,address,bool)"
                      }
                    },
                    "id": 38666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16156:33:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38667,
                  "nodeType": "ExpressionStatement",
                  "src": "16156:33:22"
                }
              ]
            },
            "documentation": {
              "id": 38652,
              "nodeType": "StructuredDocumentation",
              "src": "15639:432:22",
              "text": " @dev Approve `to` to operate on `tokenId`\n The `auth` argument is optional. If the value passed is non 0, then this function will check that `auth` is\n either the owner of the token, or approved to operate on all tokens held by this owner.\n Emits an {Approval} event.\n Overrides to this logic should be done to the variant with an additional `bool emitEvent` argument."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "16085:8:22",
            "parameters": {
              "id": 38659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38654,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "16102:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38669,
                  "src": "16094:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38653,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16094:7:22",
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
                  "id": 38656,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "16114:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38669,
                  "src": "16106:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38655,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16106:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38658,
                  "mutability": "mutable",
                  "name": "auth",
                  "nameLocation": "16131:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38669,
                  "src": "16123:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16123:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16093:43:22"
            },
            "returnParameters": {
              "id": 38660,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "16146:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38743,
            "nodeType": "FunctionDefinition",
            "src": "16378:719:22",
            "nodes": [],
            "body": {
              "id": 38742,
              "nodeType": "Block",
              "src": "16472:625:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    38683
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38683,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "16504:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38742,
                      "src": "16482:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 38682,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 38681,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "16482:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "16482:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "16482:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38686,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 38684,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "16508:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 38685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16508:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16482:45:22"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 38694,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38687,
                      "name": "emitEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38678,
                      "src": "16593:9:22",
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
                      "id": 38693,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 38688,
                        "name": "auth",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38676,
                        "src": "16606:4:22",
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
                            "id": 38691,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "16622:1:22",
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
                          "id": 38690,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "16614:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 38689,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "16614:7:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 38692,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16614:10:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "16606:18:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "16593:31:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38733,
                  "nodeType": "IfStatement",
                  "src": "16589:460:22",
                  "trueBody": {
                    "id": 38732,
                    "nodeType": "Block",
                    "src": "16626:423:22",
                    "statements": [
                      {
                        "assignments": [
                          38696
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 38696,
                            "mutability": "mutable",
                            "name": "owner",
                            "nameLocation": "16648:5:22",
                            "nodeType": "VariableDeclaration",
                            "scope": 38732,
                            "src": "16640:13:22",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 38695,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "16640:7:22",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 38700,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 38698,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38674,
                              "src": "16670:7:22",
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
                            "id": 38697,
                            "name": "_requireOwned",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38817,
                            "src": "16656:13:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 38699,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16656:22:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "16640:38:22"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 38716,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 38710,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 38706,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 38701,
                                "name": "auth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38676,
                                "src": "16806:4:22",
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
                                    "id": 38704,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "16822:1:22",
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
                                  "id": 38703,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "16814:7:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 38702,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "16814:7:22",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 38705,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "16814:10:22",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "16806:18:22",
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
                              "id": 38709,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 38707,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38696,
                                "src": "16828:5:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "!=",
                              "rightExpression": {
                                "id": 38708,
                                "name": "auth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38676,
                                "src": "16837:4:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "16828:13:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "16806:35:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "id": 38715,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "!",
                            "prefix": true,
                            "src": "16845:30:22",
                            "subExpression": {
                              "arguments": [
                                {
                                  "id": 38712,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 38696,
                                  "src": "16863:5:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 38713,
                                  "name": "auth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 38676,
                                  "src": "16870:4:22",
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
                                "id": 38711,
                                "name": "isApprovedForAll",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38082,
                                "src": "16846:16:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address,address) view returns (bool)"
                                }
                              },
                              "id": 38714,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "16846:29:22",
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
                          "src": "16806:69:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 38722,
                        "nodeType": "IfStatement",
                        "src": "16802:142:22",
                        "trueBody": {
                          "id": 38721,
                          "nodeType": "Block",
                          "src": "16877:67:22",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 38718,
                                    "name": "auth",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 38676,
                                    "src": "16924:4:22",
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
                                  "id": 38717,
                                  "name": "ERC721InvalidApprover",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 39375,
                                  "src": "16902:21:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                                    "typeString": "function (address) pure returns (error)"
                                  }
                                },
                                "id": 38719,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "16902:27:22",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_error",
                                  "typeString": "error"
                                }
                              },
                              "id": 38720,
                              "nodeType": "RevertStatement",
                              "src": "16895:34:22"
                            }
                          ]
                        }
                      },
                      {
                        "condition": {
                          "id": 38723,
                          "name": "emitEvent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38678,
                          "src": "16962:9:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 38731,
                        "nodeType": "IfStatement",
                        "src": "16958:81:22",
                        "trueBody": {
                          "id": 38730,
                          "nodeType": "Block",
                          "src": "16973:66:22",
                          "statements": [
                            {
                              "eventCall": {
                                "arguments": [
                                  {
                                    "id": 38725,
                                    "name": "owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 38696,
                                    "src": "17005:5:22",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 38726,
                                    "name": "to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 38672,
                                    "src": "17012:2:22",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 38727,
                                    "name": "tokenId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 38674,
                                    "src": "17016:7:22",
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
                                  "id": 38724,
                                  "name": "Approval",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 39866,
                                  "src": "16996:8:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,address,uint256)"
                                  }
                                },
                                "id": 38728,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "16996:28:22",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 38729,
                              "nodeType": "EmitStatement",
                              "src": "16991:33:22"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 38740,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "expression": {
                          "id": 38734,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38683,
                          "src": "17059:1:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                            "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                          }
                        },
                        "id": 38737,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17061:15:22",
                        "memberName": "_tokenApprovals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 37791,
                        "src": "17059:17:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 38738,
                      "indexExpression": {
                        "id": 38736,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38674,
                        "src": "17077:7:22",
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
                      "src": "17059:26:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 38739,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38672,
                      "src": "17088:2:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "17059:31:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 38741,
                  "nodeType": "ExpressionStatement",
                  "src": "17059:31:22"
                }
              ]
            },
            "documentation": {
              "id": 38670,
              "nodeType": "StructuredDocumentation",
              "src": "16202:171:22",
              "text": " @dev Variant of `_approve` with an optional flag to enable or disable the {Approval} event. The event is not\n emitted in the context of transfers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "16387:8:22",
            "parameters": {
              "id": 38679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38672,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "16404:2:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38743,
                  "src": "16396:10:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38671,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16396:7:22",
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
                  "id": 38674,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "16416:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38743,
                  "src": "16408:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16408:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38676,
                  "mutability": "mutable",
                  "name": "auth",
                  "nameLocation": "16433:4:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38743,
                  "src": "16425:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38675,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16425:7:22",
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
                  "id": 38678,
                  "mutability": "mutable",
                  "name": "emitEvent",
                  "nameLocation": "16444:9:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38743,
                  "src": "16439:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 38677,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "16439:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16395:59:22"
            },
            "returnParameters": {
              "id": 38680,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "16472:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38788,
            "nodeType": "FunctionDefinition",
            "src": "17306:369:22",
            "nodes": [],
            "body": {
              "id": 38787,
              "nodeType": "Block",
              "src": "17399:276:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    38755
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38755,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "17431:1:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38787,
                      "src": "17409:23:22",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                        "typeString": "struct ERC721Upgradeable.ERC721Storage"
                      },
                      "typeName": {
                        "id": 38754,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 38753,
                          "name": "ERC721Storage",
                          "nameLocations": [
                            "17409:13:22"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 37798,
                          "src": "17409:13:22"
                        },
                        "referencedDeclaration": 37798,
                        "src": "17409:13:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                          "typeString": "struct ERC721Upgradeable.ERC721Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38758,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 38756,
                      "name": "_getERC721Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37809,
                      "src": "17435:17:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC721Storage_$37798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC721Upgradeable.ERC721Storage storage pointer)"
                      }
                    },
                    "id": 38757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17435:19:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                      "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "17409:45:22"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 38764,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38759,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38748,
                      "src": "17468:8:22",
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
                          "id": 38762,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17488:1:22",
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
                        "id": 38761,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "17480:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38760,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "17480:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38763,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17480:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "17468:22:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38770,
                  "nodeType": "IfStatement",
                  "src": "17464:91:22",
                  "trueBody": {
                    "id": 38769,
                    "nodeType": "Block",
                    "src": "17492:63:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 38766,
                              "name": "operator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38748,
                              "src": "17535:8:22",
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
                            "id": 38765,
                            "name": "ERC721InvalidOperator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39380,
                            "src": "17513:21:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 38767,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17513:31:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 38768,
                        "nodeType": "RevertStatement",
                        "src": "17506:38:22"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 38779,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 38771,
                            "name": "$",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38755,
                            "src": "17564:1:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ERC721Storage_$37798_storage_ptr",
                              "typeString": "struct ERC721Upgradeable.ERC721Storage storage pointer"
                            }
                          },
                          "id": 38775,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "17566:18:22",
                          "memberName": "_operatorApprovals",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 37797,
                          "src": "17564:20:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 38776,
                        "indexExpression": {
                          "id": 38773,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38746,
                          "src": "17585:5:22",
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
                        "src": "17564:27:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 38777,
                      "indexExpression": {
                        "id": 38774,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38748,
                        "src": "17592:8:22",
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
                      "src": "17564:37:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 38778,
                      "name": "approved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38750,
                      "src": "17604:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "17564:48:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38780,
                  "nodeType": "ExpressionStatement",
                  "src": "17564:48:22"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 38782,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38746,
                        "src": "17642:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38783,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38748,
                        "src": "17649:8:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 38784,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38750,
                        "src": "17659:8:22",
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
                      "id": 38781,
                      "name": "ApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39875,
                      "src": "17627:14:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 38785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17627:41:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38786,
                  "nodeType": "EmitStatement",
                  "src": "17622:46:22"
                }
              ]
            },
            "documentation": {
              "id": 38744,
              "nodeType": "StructuredDocumentation",
              "src": "17103:198:22",
              "text": " @dev Approve `operator` to operate on all of `owner` tokens\n Requirements:\n - operator can't be the address zero.\n Emits an {ApprovalForAll} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setApprovalForAll",
            "nameLocation": "17315:18:22",
            "parameters": {
              "id": 38751,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38746,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "17342:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38788,
                  "src": "17334:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38745,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17334:7:22",
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
                  "id": 38748,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "17357:8:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38788,
                  "src": "17349:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38747,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17349:7:22",
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
                  "id": 38750,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "17372:8:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38788,
                  "src": "17367:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 38749,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17367:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17333:48:22"
            },
            "returnParameters": {
              "id": 38752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "17399:0:22"
            },
            "scope": 38818,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38817,
            "nodeType": "FunctionDefinition",
            "src": "17910:241:22",
            "nodes": [],
            "body": {
              "id": 38816,
              "nodeType": "Block",
              "src": "17982:169:22",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    38797
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38797,
                      "mutability": "mutable",
                      "name": "owner",
                      "nameLocation": "18000:5:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 38816,
                      "src": "17992:13:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 38796,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "17992:7:22",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38801,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 38799,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38791,
                        "src": "18017:7:22",
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
                      "id": 38798,
                      "name": "_ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38196,
                      "src": "18008:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 38800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "18008:17:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "17992:33:22"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 38807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 38802,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38797,
                      "src": "18039:5:22",
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
                          "id": 38805,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18056:1:22",
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
                        "id": 38804,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "18048:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 38803,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "18048:7:22",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 38806,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18048:10:22",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "18039:19:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 38813,
                  "nodeType": "IfStatement",
                  "src": "18035:88:22",
                  "trueBody": {
                    "id": 38812,
                    "nodeType": "Block",
                    "src": "18060:63:22",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 38809,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38791,
                              "src": "18104:7:22",
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
                            "id": 38808,
                            "name": "ERC721NonexistentToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39344,
                            "src": "18081:22:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256) pure returns (error)"
                            }
                          },
                          "id": 38810,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "18081:31:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 38811,
                        "nodeType": "RevertStatement",
                        "src": "18074:38:22"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 38814,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 38797,
                    "src": "18139:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 38795,
                  "id": 38815,
                  "nodeType": "Return",
                  "src": "18132:12:22"
                }
              ]
            },
            "documentation": {
              "id": 38789,
              "nodeType": "StructuredDocumentation",
              "src": "17681:224:22",
              "text": " @dev Reverts if the `tokenId` doesn't have a current owner (it hasn't been minted, or it has been burned).\n Returns the owner.\n Overrides to ownership logic should be done to {_ownerOf}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_requireOwned",
            "nameLocation": "17919:13:22",
            "parameters": {
              "id": 38792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38791,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "17941:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 38817,
                  "src": "17933:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38790,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17933:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17932:17:22"
            },
            "returnParameters": {
              "id": 38795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38794,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38817,
                  "src": "17973:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38793,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17973:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17972:9:22"
            },
            "scope": 38818,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 37760,
              "name": "Initializable",
              "nameLocations": [
                "1138:13:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 36741,
              "src": "1138:13:22"
            },
            "id": 37761,
            "nodeType": "InheritanceSpecifier",
            "src": "1138:13:22"
          },
          {
            "baseName": {
              "id": 37762,
              "name": "ContextUpgradeable",
              "nameLocations": [
                "1153:18:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 38864,
              "src": "1153:18:22"
            },
            "id": 37763,
            "nodeType": "InheritanceSpecifier",
            "src": "1153:18:22"
          },
          {
            "baseName": {
              "id": 37764,
              "name": "ERC165Upgradeable",
              "nameLocations": [
                "1173:17:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 39248,
              "src": "1173:17:22"
            },
            "id": 37765,
            "nodeType": "InheritanceSpecifier",
            "src": "1173:17:22"
          },
          {
            "baseName": {
              "id": 37766,
              "name": "IERC721",
              "nameLocations": [
                "1192:7:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 39958,
              "src": "1192:7:22"
            },
            "id": 37767,
            "nodeType": "InheritanceSpecifier",
            "src": "1192:7:22"
          },
          {
            "baseName": {
              "id": 37768,
              "name": "IERC721Metadata",
              "nameLocations": [
                "1201:15:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 40004,
              "src": "1201:15:22"
            },
            "id": 37769,
            "nodeType": "InheritanceSpecifier",
            "src": "1201:15:22"
          },
          {
            "baseName": {
              "id": 37770,
              "name": "IERC721Errors",
              "nameLocations": [
                "1218:13:22"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 39381,
              "src": "1218:13:22"
            },
            "id": 37771,
            "nodeType": "InheritanceSpecifier",
            "src": "1218:13:22"
          }
        ],
        "canonicalName": "ERC721Upgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 37759,
          "nodeType": "StructuredDocumentation",
          "src": "851:247:22",
          "text": " @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC-721] Non-Fungible Token Standard, including\n the Metadata extension, but not including the Enumerable extension, which is available separately as\n {ERC721Enumerable}."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          38818,
          39381,
          40004,
          39958,
          39248,
          42159,
          38864,
          36741
        ],
        "name": "ERC721Upgradeable",
        "nameLocation": "1117:17:22",
        "scope": 38819,
        "usedErrors": [
          36504,
          36507,
          39339,
          39344,
          39353,
          39358,
          39363,
          39370,
          39375,
          39380
        ],
        "usedEvents": [
          36512,
          39857,
          39866,
          39875
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 22
} as const;