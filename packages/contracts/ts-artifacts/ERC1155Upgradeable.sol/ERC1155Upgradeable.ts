export const ERC1155Upgradeable = {
  "abi": [
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
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
      "name": "balanceOfBatch",
      "inputs": [
        {
          "name": "accounts",
          "type": "address[]",
          "internalType": "address[]"
        },
        {
          "name": "ids",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        {
          "name": "account",
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
      "name": "safeBatchTransferFrom",
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
          "name": "ids",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "values",
          "type": "uint256[]",
          "internalType": "uint256[]"
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
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "value",
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
      "name": "uri",
      "inputs": [
        {
          "name": "",
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
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "name": "account",
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
      "name": "TransferBatch",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
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
          "name": "ids",
          "type": "uint256[]",
          "indexed": false,
          "internalType": "uint256[]"
        },
        {
          "name": "values",
          "type": "uint256[]",
          "indexed": false,
          "internalType": "uint256[]"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TransferSingle",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
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
          "name": "id",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
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
      "name": "URI",
      "inputs": [
        {
          "name": "value",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "ERC1155InsufficientBalance",
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
      "name": "ERC1155InvalidApprover",
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
      "name": "ERC1155InvalidArrayLength",
      "inputs": [
        {
          "name": "idsLength",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "valuesLength",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC1155InvalidOperator",
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
      "name": "ERC1155InvalidReceiver",
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
      "name": "ERC1155InvalidSender",
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
      "name": "ERC1155MissingApprovalForAll",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
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
    "balanceOf(address,uint256)": "00fdd58e",
    "balanceOfBatch(address[],uint256[])": "4e1273f4",
    "isApprovedForAll(address,address)": "e985e9c5",
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": "2eb2c2d6",
    "safeTransferFrom(address,address,uint256,uint256,bytes)": "f242432a",
    "setApprovalForAll(address,bool)": "a22cb465",
    "supportsInterface(bytes4)": "01ffc9a7",
    "uri(uint256)": "0e89341c"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC1155InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"idsLength\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"valuesLength\",\"type\":\"uint256\"}],\"name\":\"ERC1155InvalidArrayLength\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC1155InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC1155MissingApprovalForAll\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of the basic standard multi-token. See https://eips.ethereum.org/EIPS/eip-1155 Originally based on code by Enjin: https://github.com/enjin/erc-1155\",\"errors\":{\"ERC1155InsufficientBalance(address,uint256,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC1155InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC1155InvalidArrayLength(uint256,uint256)\":[{\"details\":\"Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation. Used in batch transfers.\",\"params\":{\"idsLength\":\"Length of the array of token identifiers\",\"valuesLength\":\"Length of the array of token amounts\"}}],\"ERC1155InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC1155InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC1155InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC1155MissingApprovalForAll(address,address)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"owner\":\"Address of the current owner of a token.\"}}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to `approved`.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"TransferBatch(address,address,address,uint256[],uint256[])\":{\"details\":\"Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all transfers.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"details\":\"Emitted when `value` amount of tokens of type `id` are transferred from `from` to `to` by `operator`.\"},\"URI(string,uint256)\":{\"details\":\"Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI. If an {URI} event was emitted for `id`, the standard https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value returned by {IERC1155MetadataURI-uri}.\"}},\"kind\":\"dev\",\"methods\":{\"balanceOf(address,uint256)\":{\"details\":\"See {IERC1155-balanceOf}.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC1155-isApprovedForAll}.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"See {IERC1155-safeBatchTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"See {IERC1155-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC1155-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"uri(uint256)\":{\"details\":\"See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the ERC]. Clients calling this function must replace the `\\\\{id\\\\}` substring with the actual token type ID.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol\":\"ERC1155Upgradeable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol\":{\"keccak256\":\"0x3a0d63838dff3fd8b77c8c44ecf37cc39b15f26fd5269da3b690879478fa3cf3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://502cec8d2ef132cce69840b1c2aef2209092554292a50d628b27477ef7a441ca\",\"dweb:/ipfs/QmaSxcHDndhVuWm4E6LcSMRkhFYsMXxrgLWMLCQnyG3qHr\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol\":{\"keccak256\":\"0xc8ed8d2056934b7675b695dec032f2920c2f5c6cf33a17ca85650940675323ab\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3c8ccc75d1cd792d192aa09e54dd49ea35fe85baa9fcd17486f29227d9f29b89\",\"dweb:/ipfs/QmbboSbFUEiM9tdEgBwuTRb7bykFoJXZ7dsSr1PSREJXMr\"]},\"node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b\",\"dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x68d6fdbeb467192c3627a46aa7bf5cbb73267363b740abc511f521a5a41a446e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7ce608c19d5e917c60f9c8aa3e5f0eb05b326280ac0a235e8bb9a848a3a64a91\",\"dweb:/ipfs/QmdLPsWQJj7JvRae8MM13GEo4PBXaEFmD4b4heqcyMJNPG\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0x61a23d601c2ab69dd726ac55058604cbda98e1d728ba31a51c379a3f9eeea715\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d8cbb06152d82ebdd5ba1d33454e5759492040f309a82637c7e99c948a04fa20\",\"dweb:/ipfs/QmQQuLr6WSfLu97pMEh6XLefk99TSj9k5Qu1zXGPepwGiK\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"keccak256\":\"0x35d120c427299af1525aaf07955314d9e36a62f14408eb93dec71a2e001f74d3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://743e38acf441eece428c008be399c40a3ca5b2d595d58faf656cbdbac1a45374\",\"dweb:/ipfs/QmcWDuWkndox3dxa5P7ZgpKy3iuQKkxBq1cR9hPV1ZzAfa\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Utils.sol\":{\"keccak256\":\"0x30afe9013aaeb3ba735284a9310792776f57a3b2db6fc1d99628f2c47287f5cf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1c675b740746031092efcedb2e18179f05fce8ba482de64e982715e4aa16bc90\",\"dweb:/ipfs/QmVdUD89qYudLc88k5AsuQ6VWyz9SE1c6UXrVK32Yqh1YS\"]},\"node_modules/@openzeppelin/contracts/utils/Arrays.sol\":{\"keccak256\":\"0xaf9586854de33dc9d3a7160cad8170fdfb4119d02a44bad90ba16d71d701cc92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c15a02762b0a51d66e36be135c27de656093fc09292fa743df8484b87d4486ea\",\"dweb:/ipfs/QmbEozFrt5XwC9nzDFuXvN1RF3hQVwKYNi8c2R4bFvYJ2X\"]},\"node_modules/@openzeppelin/contracts/utils/Comparators.sol\":{\"keccak256\":\"0x302eecd8cf323b4690e3494a7d960b3cbce077032ab8ef655b323cdd136cec58\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://49ba706f1bc476d68fe6c1fad75517acea4e9e275be0989b548e292eb3a3eacd\",\"dweb:/ipfs/QmeBpvcdGWzWMKTQESUCEhHgnEQYYATVwPxLMxa6vMT7jC\"]},\"node_modules/@openzeppelin/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"node_modules/@openzeppelin/contracts/utils/SlotDerivation.sol\":{\"keccak256\":\"0x8447b57b63810fe2e367c09496a966f143ec0e825d71ddb9fce2506cff84b618\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://996cb48f793bf151555045b37138e36b3cdb31d6bc6552d3149285260be00cfb\",\"dweb:/ipfs/QmcLaTTMNVbkMx58xhkp6GeFt4V3GtSyupZuaKG3vYW2Zc\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b\",\"dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa00be322d7db5786750ce0ac7e2f5b633ac30a5ed5fa1ced1e74acfc19acecea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c84e822f87cbdc4082533b626667b6928715bb2b1e8e7eb96954cebb9e38c8d\",\"dweb:/ipfs/QmZmy9dgxLTerBAQDuuHqbL6EpgRxddqgv5KmwpXYVbKz1\"]},\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]}},\"version\":1}",
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
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC1155InsufficientBalance"
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
          "name": "ERC1155InvalidApprover"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "idsLength",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "valuesLength",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC1155InvalidArrayLength"
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
          "name": "ERC1155InvalidOperator"
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
          "name": "ERC1155InvalidReceiver"
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
          "name": "ERC1155InvalidSender"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC1155MissingApprovalForAll"
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
              "name": "account",
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
              "name": "operator",
              "type": "address",
              "indexed": true
            },
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
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]",
              "indexed": false
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "TransferBatch",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
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
              "name": "id",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "TransferSingle",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "value",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "URI",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
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
              "internalType": "address[]",
              "name": "accounts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOfBatch",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
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
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeBatchTransferFrom"
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
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "value",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "uri",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "balanceOf(address,uint256)": {
            "details": "See {IERC1155-balanceOf}."
          },
          "balanceOfBatch(address[],uint256[])": {
            "details": "See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length."
          },
          "isApprovedForAll(address,address)": {
            "details": "See {IERC1155-isApprovedForAll}."
          },
          "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
            "details": "See {IERC1155-safeBatchTransferFrom}."
          },
          "safeTransferFrom(address,address,uint256,uint256,bytes)": {
            "details": "See {IERC1155-safeTransferFrom}."
          },
          "setApprovalForAll(address,bool)": {
            "details": "See {IERC1155-setApprovalForAll}."
          },
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
          },
          "uri(uint256)": {
            "details": "See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the ERC]. Clients calling this function must replace the `\\{id\\}` substring with the actual token type ID."
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
        "node_modules/@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol": "ERC1155Upgradeable"
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
      "node_modules/@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol": {
        "keccak256": "0x3a0d63838dff3fd8b77c8c44ecf37cc39b15f26fd5269da3b690879478fa3cf3",
        "urls": [
          "bzz-raw://502cec8d2ef132cce69840b1c2aef2209092554292a50d628b27477ef7a441ca",
          "dweb:/ipfs/QmaSxcHDndhVuWm4E6LcSMRkhFYsMXxrgLWMLCQnyG3qHr"
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
      "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol": {
        "keccak256": "0x68d6fdbeb467192c3627a46aa7bf5cbb73267363b740abc511f521a5a41a446e",
        "urls": [
          "bzz-raw://7ce608c19d5e917c60f9c8aa3e5f0eb05b326280ac0a235e8bb9a848a3a64a91",
          "dweb:/ipfs/QmdLPsWQJj7JvRae8MM13GEo4PBXaEFmD4b4heqcyMJNPG"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol": {
        "keccak256": "0x61a23d601c2ab69dd726ac55058604cbda98e1d728ba31a51c379a3f9eeea715",
        "urls": [
          "bzz-raw://d8cbb06152d82ebdd5ba1d33454e5759492040f309a82637c7e99c948a04fa20",
          "dweb:/ipfs/QmQQuLr6WSfLu97pMEh6XLefk99TSj9k5Qu1zXGPepwGiK"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol": {
        "keccak256": "0x35d120c427299af1525aaf07955314d9e36a62f14408eb93dec71a2e001f74d3",
        "urls": [
          "bzz-raw://743e38acf441eece428c008be399c40a3ca5b2d595d58faf656cbdbac1a45374",
          "dweb:/ipfs/QmcWDuWkndox3dxa5P7ZgpKy3iuQKkxBq1cR9hPV1ZzAfa"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Utils.sol": {
        "keccak256": "0x30afe9013aaeb3ba735284a9310792776f57a3b2db6fc1d99628f2c47287f5cf",
        "urls": [
          "bzz-raw://1c675b740746031092efcedb2e18179f05fce8ba482de64e982715e4aa16bc90",
          "dweb:/ipfs/QmVdUD89qYudLc88k5AsuQ6VWyz9SE1c6UXrVK32Yqh1YS"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Arrays.sol": {
        "keccak256": "0xaf9586854de33dc9d3a7160cad8170fdfb4119d02a44bad90ba16d71d701cc92",
        "urls": [
          "bzz-raw://c15a02762b0a51d66e36be135c27de656093fc09292fa743df8484b87d4486ea",
          "dweb:/ipfs/QmbEozFrt5XwC9nzDFuXvN1RF3hQVwKYNi8c2R4bFvYJ2X"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Comparators.sol": {
        "keccak256": "0x302eecd8cf323b4690e3494a7d960b3cbce077032ab8ef655b323cdd136cec58",
        "urls": [
          "bzz-raw://49ba706f1bc476d68fe6c1fad75517acea4e9e275be0989b548e292eb3a3eacd",
          "dweb:/ipfs/QmeBpvcdGWzWMKTQESUCEhHgnEQYYATVwPxLMxa6vMT7jC"
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
      "node_modules/@openzeppelin/contracts/utils/SlotDerivation.sol": {
        "keccak256": "0x8447b57b63810fe2e367c09496a966f143ec0e825d71ddb9fce2506cff84b618",
        "urls": [
          "bzz-raw://996cb48f793bf151555045b37138e36b3cdb31d6bc6552d3149285260be00cfb",
          "dweb:/ipfs/QmcLaTTMNVbkMx58xhkp6GeFt4V3GtSyupZuaKG3vYW2Zc"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol": {
        "keccak256": "0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97",
        "urls": [
          "bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b",
          "dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol",
    "id": 37739,
    "exportedSymbols": {
      "Arrays": [
        40959
      ],
      "ContextUpgradeable": [
        38864
      ],
      "ERC1155Upgradeable": [
        37738
      ],
      "ERC1155Utils": [
        39763
      ],
      "ERC165Upgradeable": [
        39248
      ],
      "IERC1155": [
        39551
      ],
      "IERC1155Errors": [
        39428
      ],
      "IERC1155MetadataURI": [
        39609
      ],
      "IERC165": [
        42159
      ],
      "Initializable": [
        36741
      ]
    },
    "nodeType": "SourceUnit",
    "src": "109:15833:21",
    "nodes": [
      {
        "id": 36743,
        "nodeType": "PragmaDirective",
        "src": "109:24:21",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 36745,
        "nodeType": "ImportDirective",
        "src": "135:76:21",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/IERC1155.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 37739,
        "sourceUnit": 39552,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36744,
              "name": "IERC1155",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 39551,
              "src": "143:8:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 36747,
        "nodeType": "ImportDirective",
        "src": "212:109:21",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 37739,
        "sourceUnit": 39610,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36746,
              "name": "IERC1155MetadataURI",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 39609,
              "src": "220:19:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 36749,
        "nodeType": "ImportDirective",
        "src": "322:90:21",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Utils.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Utils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 37739,
        "sourceUnit": 39764,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36748,
              "name": "ERC1155Utils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 39763,
              "src": "330:12:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 36751,
        "nodeType": "ImportDirective",
        "src": "413:70:21",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol",
        "file": "../../utils/ContextUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 37739,
        "sourceUnit": 38865,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36750,
              "name": "ContextUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 38864,
              "src": "421:18:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 36753,
        "nodeType": "ImportDirective",
        "src": "484:80:21",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 37739,
        "sourceUnit": 42160,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36752,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 42159,
              "src": "492:7:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 36755,
        "nodeType": "ImportDirective",
        "src": "565:82:21",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol",
        "file": "../../utils/introspection/ERC165Upgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 37739,
        "sourceUnit": 39249,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36754,
              "name": "ERC165Upgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 39248,
              "src": "573:17:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 36757,
        "nodeType": "ImportDirective",
        "src": "648:64:21",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/Arrays.sol",
        "file": "@openzeppelin/contracts/utils/Arrays.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 37739,
        "sourceUnit": 40960,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36756,
              "name": "Arrays",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 40959,
              "src": "656:6:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 36759,
        "nodeType": "ImportDirective",
        "src": "713:85:21",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "file": "@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 37739,
        "sourceUnit": 39429,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36758,
              "name": "IERC1155Errors",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 39428,
              "src": "721:14:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 36761,
        "nodeType": "ImportDirective",
        "src": "799:66:21",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 37739,
        "sourceUnit": 36742,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36760,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 36741,
              "src": "807:13:21",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 37738,
        "nodeType": "ContractDefinition",
        "src": "1052:14889:21",
        "nodes": [
          {
            "id": 36778,
            "nodeType": "UsingForDirective",
            "src": "1198:27:21",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 36775,
              "name": "Arrays",
              "nameLocations": [
                "1204:6:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 40959,
              "src": "1204:6:21"
            },
            "typeName": {
              "baseType": {
                "id": 36776,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1215:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 36777,
              "nodeType": "ArrayTypeName",
              "src": "1215:9:21",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            }
          },
          {
            "id": 36782,
            "nodeType": "UsingForDirective",
            "src": "1230:27:21",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 36779,
              "name": "Arrays",
              "nameLocations": [
                "1236:6:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 40959,
              "src": "1236:6:21"
            },
            "typeName": {
              "baseType": {
                "id": 36780,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1247:7:21",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 36781,
              "nodeType": "ArrayTypeName",
              "src": "1247:9:21",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            }
          },
          {
            "id": 36798,
            "nodeType": "StructDefinition",
            "src": "1333:338:21",
            "nodes": [],
            "canonicalName": "ERC1155Upgradeable.ERC1155Storage",
            "documentation": {
              "id": 36783,
              "nodeType": "StructuredDocumentation",
              "src": "1263:65:21",
              "text": "@custom:storage-location erc7201:openzeppelin.storage.ERC1155"
            },
            "members": [
              {
                "constant": false,
                "id": 36789,
                "mutability": "mutable",
                "name": "_balances",
                "nameLocation": "1424:9:21",
                "nodeType": "VariableDeclaration",
                "scope": 36798,
                "src": "1365:68:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                },
                "typeName": {
                  "id": 36788,
                  "keyName": "id",
                  "keyNameLocation": "1381:2:21",
                  "keyType": {
                    "id": 36784,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1373:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1365:58:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 36787,
                    "keyName": "account",
                    "keyNameLocation": "1403:7:21",
                    "keyType": {
                      "id": 36785,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1395:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1387:35:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "id": 36786,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1414:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 36795,
                "mutability": "mutable",
                "name": "_operatorApprovals",
                "nameLocation": "1506:18:21",
                "nodeType": "VariableDeclaration",
                "scope": 36798,
                "src": "1444:80:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                  "typeString": "mapping(address => mapping(address => bool))"
                },
                "typeName": {
                  "id": 36794,
                  "keyName": "account",
                  "keyNameLocation": "1460:7:21",
                  "keyType": {
                    "id": 36790,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1452:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1444:61:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                    "typeString": "mapping(address => mapping(address => bool))"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 36793,
                    "keyName": "operator",
                    "keyNameLocation": "1487:8:21",
                    "keyType": {
                      "id": 36791,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1479:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1471:33:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                      "typeString": "mapping(address => bool)"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "id": 36792,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1499:4:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 36797,
                "mutability": "mutable",
                "name": "_uri",
                "nameLocation": "1660:4:21",
                "nodeType": "VariableDeclaration",
                "scope": 36798,
                "src": "1653:11:21",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 36796,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1653:6:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ERC1155Storage",
            "nameLocation": "1340:14:21",
            "scope": 37738,
            "visibility": "public"
          },
          {
            "id": 36801,
            "nodeType": "VariableDeclaration",
            "src": "1788:116:21",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC1155StorageLocation",
            "nameLocation": "1813:22:21",
            "scope": 37738,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 36799,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1788:7:21",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307838386265353336643532343063323734613362316433613162653534343832666439636161323934663038633632613763646535363966343961336334353030",
              "id": 36800,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1838:66:21",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_61850824141875340645484003952679861077730695310785076753205161524670616061184_by_1",
                "typeString": "int_const 6185...(69 digits omitted)...1184"
              },
              "value": "0x88be536d5240c274a3b1d3a1be54482fd9caa294f08c62a7cde569f49a3c4500"
            },
            "visibility": "private"
          },
          {
            "id": 36809,
            "nodeType": "FunctionDefinition",
            "src": "1911:159:21",
            "nodes": [],
            "body": {
              "id": 36808,
              "nodeType": "Block",
              "src": "1989:81:21",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2008:56:21",
                    "nodeType": "YulBlock",
                    "src": "2008:56:21",
                    "statements": [
                      {
                        "nativeSrc": "2022:32:21",
                        "nodeType": "YulAssignment",
                        "src": "2022:32:21",
                        "value": {
                          "name": "ERC1155StorageLocation",
                          "nativeSrc": "2032:22:21",
                          "nodeType": "YulIdentifier",
                          "src": "2032:22:21"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "2022:6:21",
                            "nodeType": "YulIdentifier",
                            "src": "2022:6:21"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 36805,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2022:6:21",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 36801,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2032:22:21",
                      "valueSize": 1
                    }
                  ],
                  "id": 36807,
                  "nodeType": "InlineAssembly",
                  "src": "1999:65:21"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getERC1155Storage",
            "nameLocation": "1920:18:21",
            "parameters": {
              "id": 36802,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1938:2:21"
            },
            "returnParameters": {
              "id": 36806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36805,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "1986:1:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 36809,
                  "src": "1963:24:21",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                    "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                  },
                  "typeName": {
                    "id": 36804,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 36803,
                      "name": "ERC1155Storage",
                      "nameLocations": [
                        "1963:14:21"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 36798,
                      "src": "1963:14:21"
                    },
                    "referencedDeclaration": 36798,
                    "src": "1963:14:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1962:26:21"
            },
            "scope": 37738,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 36822,
            "nodeType": "FunctionDefinition",
            "src": "2119:117:21",
            "nodes": [],
            "body": {
              "id": 36821,
              "nodeType": "Block",
              "src": "2189:47:21",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 36818,
                        "name": "uri_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36812,
                        "src": "2224:4:21",
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
                      "id": 36817,
                      "name": "__ERC1155_init_unchained",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36834,
                      "src": "2199:24:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 36819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2199:30:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36820,
                  "nodeType": "ExpressionStatement",
                  "src": "2199:30:21"
                }
              ]
            },
            "documentation": {
              "id": 36810,
              "nodeType": "StructuredDocumentation",
              "src": "2076:38:21",
              "text": " @dev See {_setURI}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 36815,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 36814,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "2172:16:21"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "2172:16:21"
                },
                "nodeType": "ModifierInvocation",
                "src": "2172:16:21"
              }
            ],
            "name": "__ERC1155_init",
            "nameLocation": "2128:14:21",
            "parameters": {
              "id": 36813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36812,
                  "mutability": "mutable",
                  "name": "uri_",
                  "nameLocation": "2157:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 36822,
                  "src": "2143:18:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36811,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2143:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2142:20:21"
            },
            "returnParameters": {
              "id": 36816,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2189:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 36834,
            "nodeType": "FunctionDefinition",
            "src": "2242:110:21",
            "nodes": [],
            "body": {
              "id": 36833,
              "nodeType": "Block",
              "src": "2322:30:21",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 36830,
                        "name": "uri_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36824,
                        "src": "2340:4:21",
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
                      "id": 36829,
                      "name": "_setURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37491,
                      "src": "2332:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 36831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2332:13:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36832,
                  "nodeType": "ExpressionStatement",
                  "src": "2332:13:21"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 36827,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 36826,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "2305:16:21"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "2305:16:21"
                },
                "nodeType": "ModifierInvocation",
                "src": "2305:16:21"
              }
            ],
            "name": "__ERC1155_init_unchained",
            "nameLocation": "2251:24:21",
            "parameters": {
              "id": 36825,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36824,
                  "mutability": "mutable",
                  "name": "uri_",
                  "nameLocation": "2290:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 36834,
                  "src": "2276:18:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36823,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2276:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2275:20:21"
            },
            "returnParameters": {
              "id": 36828,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2322:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 36865,
            "nodeType": "FunctionDefinition",
            "src": "2419:316:21",
            "nodes": [],
            "body": {
              "id": 36864,
              "nodeType": "Block",
              "src": "2538:197:21",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 36862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 36857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 36850,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 36845,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36837,
                          "src": "2567:11:21",
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
                                "id": 36847,
                                "name": "IERC1155",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 39551,
                                "src": "2587:8:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155_$39551_$",
                                  "typeString": "type(contract IERC1155)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155_$39551_$",
                                  "typeString": "type(contract IERC1155)"
                                }
                              ],
                              "id": 36846,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "2582:4:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 36848,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2582:14:21",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC1155_$39551",
                              "typeString": "type(contract IERC1155)"
                            }
                          },
                          "id": 36849,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2597:11:21",
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "2582:26:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "2567:41:21",
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
                        "id": 36856,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 36851,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36837,
                          "src": "2624:11:21",
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
                                "id": 36853,
                                "name": "IERC1155MetadataURI",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 39609,
                                "src": "2644:19:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155MetadataURI_$39609_$",
                                  "typeString": "type(contract IERC1155MetadataURI)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155MetadataURI_$39609_$",
                                  "typeString": "type(contract IERC1155MetadataURI)"
                                }
                              ],
                              "id": 36852,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "2639:4:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 36854,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2639:25:21",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC1155MetadataURI_$39609",
                              "typeString": "type(contract IERC1155MetadataURI)"
                            }
                          },
                          "id": 36855,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2665:11:21",
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "2639:37:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "2624:52:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "2567:109:21",
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
                          "id": 36860,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36837,
                          "src": "2716:11:21",
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
                          "id": 36858,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -25,
                          "src": "2692:5:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_ERC1155Upgradeable_$37738_$",
                            "typeString": "type(contract super ERC1155Upgradeable)"
                          }
                        },
                        "id": 36859,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2698:17:21",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 39247,
                        "src": "2692:23:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 36861,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2692:36:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2567:161:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 36844,
                  "id": 36863,
                  "nodeType": "Return",
                  "src": "2548:180:21"
                }
              ]
            },
            "baseFunctions": [
              39247,
              42158
            ],
            "documentation": {
              "id": 36835,
              "nodeType": "StructuredDocumentation",
              "src": "2358:56:21",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "2428:17:21",
            "overrides": {
              "id": 36841,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 36839,
                  "name": "ERC165Upgradeable",
                  "nameLocations": [
                    "2495:17:21"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 39248,
                  "src": "2495:17:21"
                },
                {
                  "id": 36840,
                  "name": "IERC165",
                  "nameLocations": [
                    "2514:7:21"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 42159,
                  "src": "2514:7:21"
                }
              ],
              "src": "2486:36:21"
            },
            "parameters": {
              "id": 36838,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36837,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "2453:11:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 36865,
                  "src": "2446:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 36836,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2446:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2445:20:21"
            },
            "returnParameters": {
              "id": 36844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36843,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 36865,
                  "src": "2532:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 36842,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2532:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2531:6:21"
            },
            "scope": 37738,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 36883,
            "nodeType": "FunctionDefinition",
            "src": "3134:162:21",
            "nodes": [],
            "body": {
              "id": 36882,
              "nodeType": "Block",
              "src": "3209:87:21",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    36875
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36875,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3242:1:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 36882,
                      "src": "3219:24:21",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 36874,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 36873,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "3219:14:21"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36798,
                          "src": "3219:14:21"
                        },
                        "referencedDeclaration": 36798,
                        "src": "3219:14:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36878,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 36876,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36809,
                      "src": "3246:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$36798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 36877,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3246:20:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3219:47:21"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 36879,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36875,
                      "src": "3283:1:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                      }
                    },
                    "id": 36880,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3285:4:21",
                    "memberName": "_uri",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 36797,
                    "src": "3283:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 36872,
                  "id": 36881,
                  "nodeType": "Return",
                  "src": "3276:13:21"
                }
              ]
            },
            "baseFunctions": [
              39608
            ],
            "documentation": {
              "id": 36866,
              "nodeType": "StructuredDocumentation",
              "src": "2741:388:21",
              "text": " @dev See {IERC1155MetadataURI-uri}.\n This implementation returns the same URI for *all* token types. It relies\n on the token type ID substitution mechanism\n https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the ERC].\n Clients calling this function must replace the `\\{id\\}` substring with the\n actual token type ID."
            },
            "functionSelector": "0e89341c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "uri",
            "nameLocation": "3143:3:21",
            "parameters": {
              "id": 36869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36868,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 36883,
                  "src": "3147:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3147:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3146:18:21"
            },
            "returnParameters": {
              "id": 36872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36871,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 36883,
                  "src": "3194:13:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36870,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3194:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3193:15:21"
            },
            "scope": 37738,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 36907,
            "nodeType": "FunctionDefinition",
            "src": "3356:191:21",
            "nodes": [],
            "body": {
              "id": 36906,
              "nodeType": "Block",
              "src": "3442:105:21",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    36895
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36895,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3475:1:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 36906,
                      "src": "3452:24:21",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 36894,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 36893,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "3452:14:21"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36798,
                          "src": "3452:14:21"
                        },
                        "referencedDeclaration": 36798,
                        "src": "3452:14:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36898,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 36896,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36809,
                      "src": "3479:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$36798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 36897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3479:20:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3452:47:21"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 36899,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36895,
                          "src": "3516:1:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                            "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                          }
                        },
                        "id": 36900,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3518:9:21",
                        "memberName": "_balances",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 36789,
                        "src": "3516:11:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(uint256 => mapping(address => uint256))"
                        }
                      },
                      "id": 36902,
                      "indexExpression": {
                        "id": 36901,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36888,
                        "src": "3528:2:21",
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
                      "src": "3516:15:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 36904,
                    "indexExpression": {
                      "id": 36903,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36886,
                      "src": "3532:7:21",
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
                    "src": "3516:24:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 36892,
                  "id": 36905,
                  "nodeType": "Return",
                  "src": "3509:31:21"
                }
              ]
            },
            "baseFunctions": [
              39489
            ],
            "documentation": {
              "id": 36884,
              "nodeType": "StructuredDocumentation",
              "src": "3302:49:21",
              "text": " @dev See {IERC1155-balanceOf}."
            },
            "functionSelector": "00fdd58e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "3365:9:21",
            "parameters": {
              "id": 36889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36886,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3383:7:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 36907,
                  "src": "3375:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3375:7:21",
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
                  "id": 36888,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "3400:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 36907,
                  "src": "3392:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36887,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3392:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3374:29:21"
            },
            "returnParameters": {
              "id": 36892,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36891,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 36907,
                  "src": "3433:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36890,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3433:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3432:9:21"
            },
            "scope": 37738,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 36977,
            "nodeType": "FunctionDefinition",
            "src": "3704:552:21",
            "nodes": [],
            "body": {
              "id": 36976,
              "nodeType": "Block",
              "src": "3846:410:21",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 36924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 36920,
                        "name": "accounts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36911,
                        "src": "3860:8:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 36921,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3869:6:21",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3860:15:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 36922,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36914,
                        "src": "3879:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 36923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3883:6:21",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3879:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3860:29:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36933,
                  "nodeType": "IfStatement",
                  "src": "3856:121:21",
                  "trueBody": {
                    "id": 36932,
                    "nodeType": "Block",
                    "src": "3891:86:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 36926,
                                "name": "ids",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 36914,
                                "src": "3938:3:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 36927,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3942:6:21",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "3938:10:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 36928,
                                "name": "accounts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 36911,
                                "src": "3950:8:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 36929,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3959:6:21",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "3950:15:21",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 36925,
                            "name": "ERC1155InvalidArrayLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39427,
                            "src": "3912:25:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256,uint256) pure returns (error)"
                            }
                          },
                          "id": 36930,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3912:54:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 36931,
                        "nodeType": "RevertStatement",
                        "src": "3905:61:21"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    36938
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36938,
                      "mutability": "mutable",
                      "name": "batchBalances",
                      "nameLocation": "4004:13:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 36976,
                      "src": "3987:30:21",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 36936,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3987:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 36937,
                        "nodeType": "ArrayTypeName",
                        "src": "3987:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36945,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 36942,
                          "name": "accounts",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36911,
                          "src": "4034:8:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "id": 36943,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4043:6:21",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "4034:15:21",
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
                      "id": 36941,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4020:13:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (uint256[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 36939,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4024:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 36940,
                        "nodeType": "ArrayTypeName",
                        "src": "4024:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      }
                    },
                    "id": 36944,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4020:30:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3987:63:21"
                },
                {
                  "body": {
                    "id": 36972,
                    "nodeType": "Block",
                    "src": "4107:112:21",
                    "statements": [
                      {
                        "expression": {
                          "id": 36970,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 36957,
                              "name": "batchBalances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 36938,
                              "src": "4121:13:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 36959,
                            "indexExpression": {
                              "id": 36958,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 36947,
                              "src": "4135:1:21",
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
                            "src": "4121:16:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 36963,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 36947,
                                    "src": "4178:1:21",
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
                                  "expression": {
                                    "id": 36961,
                                    "name": "accounts",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 36911,
                                    "src": "4150:8:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 36962,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4159:18:21",
                                  "memberName": "unsafeMemoryAccess",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 40899,
                                  "src": "4150:27:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_uint256_$returns$_t_address_$attached_to$_t_array$_t_address_$dyn_memory_ptr_$",
                                    "typeString": "function (address[] memory,uint256) pure returns (address)"
                                  }
                                },
                                "id": 36964,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4150:30:21",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 36967,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 36947,
                                    "src": "4205:1:21",
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
                                  "expression": {
                                    "id": 36965,
                                    "name": "ids",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 36914,
                                    "src": "4182:3:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 36966,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4186:18:21",
                                  "memberName": "unsafeMemoryAccess",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 40925,
                                  "src": "4182:22:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                    "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 36968,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4182:25:21",
                                "tryCall": false,
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
                              "id": 36960,
                              "name": "balanceOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 36907,
                              "src": "4140:9:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (address,uint256) view returns (uint256)"
                              }
                            },
                            "id": 36969,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4140:68:21",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4121:87:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 36971,
                        "nodeType": "ExpressionStatement",
                        "src": "4121:87:21"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 36953,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 36950,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36947,
                      "src": "4081:1:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 36951,
                        "name": "accounts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36911,
                        "src": "4085:8:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 36952,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4094:6:21",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "4085:15:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4081:19:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36973,
                  "initializationExpression": {
                    "assignments": [
                      36947
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 36947,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "4074:1:21",
                        "nodeType": "VariableDeclaration",
                        "scope": 36973,
                        "src": "4066:9:21",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 36946,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4066:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 36949,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 36948,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4078:1:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4066:13:21"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 36955,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "4102:3:21",
                      "subExpression": {
                        "id": 36954,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36947,
                        "src": "4104:1:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 36956,
                    "nodeType": "ExpressionStatement",
                    "src": "4102:3:21"
                  },
                  "nodeType": "ForStatement",
                  "src": "4061:158:21"
                },
                {
                  "expression": {
                    "id": 36974,
                    "name": "batchBalances",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 36938,
                    "src": "4236:13:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 36919,
                  "id": 36975,
                  "nodeType": "Return",
                  "src": "4229:20:21"
                }
              ]
            },
            "baseFunctions": [
              39502
            ],
            "documentation": {
              "id": 36908,
              "nodeType": "StructuredDocumentation",
              "src": "3553:146:21",
              "text": " @dev See {IERC1155-balanceOfBatch}.\n Requirements:\n - `accounts` and `ids` must have the same length."
            },
            "functionSelector": "4e1273f4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOfBatch",
            "nameLocation": "3713:14:21",
            "parameters": {
              "id": 36915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36911,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "3754:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 36977,
                  "src": "3737:25:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 36909,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3737:7:21",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 36910,
                    "nodeType": "ArrayTypeName",
                    "src": "3737:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36914,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "3789:3:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 36977,
                  "src": "3772:20:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 36912,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3772:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 36913,
                    "nodeType": "ArrayTypeName",
                    "src": "3772:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3727:71:21"
            },
            "returnParameters": {
              "id": 36919,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36918,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 36977,
                  "src": "3828:16:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 36916,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3828:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 36917,
                    "nodeType": "ArrayTypeName",
                    "src": "3828:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3827:18:21"
            },
            "scope": 37738,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 36993,
            "nodeType": "FunctionDefinition",
            "src": "4324:144:21",
            "nodes": [],
            "body": {
              "id": 36992,
              "nodeType": "Block",
              "src": "4399:69:21",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 36986,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38846,
                          "src": "4428:10:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 36987,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4428:12:21",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 36988,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36980,
                        "src": "4442:8:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 36989,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36982,
                        "src": "4452:8:21",
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
                      "id": 36985,
                      "name": "_setApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37721,
                      "src": "4409:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 36990,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4409:52:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36991,
                  "nodeType": "ExpressionStatement",
                  "src": "4409:52:21"
                }
              ]
            },
            "baseFunctions": [
              39510
            ],
            "documentation": {
              "id": 36978,
              "nodeType": "StructuredDocumentation",
              "src": "4262:57:21",
              "text": " @dev See {IERC1155-setApprovalForAll}."
            },
            "functionSelector": "a22cb465",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "4333:17:21",
            "parameters": {
              "id": 36983,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36980,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4359:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 36993,
                  "src": "4351:16:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36979,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4351:7:21",
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
                  "id": 36982,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "4374:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 36993,
                  "src": "4369:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 36981,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4369:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4350:33:21"
            },
            "returnParameters": {
              "id": 36984,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4399:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 37017,
            "nodeType": "FunctionDefinition",
            "src": "4535:216:21",
            "nodes": [],
            "body": {
              "id": 37016,
              "nodeType": "Block",
              "src": "4631:120:21",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    37005
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37005,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "4664:1:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37016,
                      "src": "4641:24:21",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 37004,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 37003,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "4641:14:21"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36798,
                          "src": "4641:14:21"
                        },
                        "referencedDeclaration": 36798,
                        "src": "4641:14:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37008,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37006,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36809,
                      "src": "4668:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$36798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 37007,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4668:20:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4641:47:21"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 37009,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37005,
                          "src": "4705:1:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                            "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                          }
                        },
                        "id": 37010,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4707:18:21",
                        "memberName": "_operatorApprovals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 36795,
                        "src": "4705:20:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                          "typeString": "mapping(address => mapping(address => bool))"
                        }
                      },
                      "id": 37012,
                      "indexExpression": {
                        "id": 37011,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36996,
                        "src": "4726:7:21",
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
                      "src": "4705:29:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 37014,
                    "indexExpression": {
                      "id": 37013,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36998,
                      "src": "4735:8:21",
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
                    "src": "4705:39:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 37002,
                  "id": 37015,
                  "nodeType": "Return",
                  "src": "4698:46:21"
                }
              ]
            },
            "baseFunctions": [
              39520
            ],
            "documentation": {
              "id": 36994,
              "nodeType": "StructuredDocumentation",
              "src": "4474:56:21",
              "text": " @dev See {IERC1155-isApprovedForAll}."
            },
            "functionSelector": "e985e9c5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "4544:16:21",
            "parameters": {
              "id": 36999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36996,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "4569:7:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37017,
                  "src": "4561:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36995,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4561:7:21",
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
                  "id": 36998,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4586:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37017,
                  "src": "4578:16:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36997,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4578:7:21",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4560:35:21"
            },
            "returnParameters": {
              "id": 37002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37001,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 37017,
                  "src": "4625:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 37000,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4625:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4624:6:21"
            },
            "scope": 37738,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 37061,
            "nodeType": "FunctionDefinition",
            "src": "4818:351:21",
            "nodes": [],
            "body": {
              "id": 37060,
              "nodeType": "Block",
              "src": "4931:238:21",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    37032
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37032,
                      "mutability": "mutable",
                      "name": "sender",
                      "nameLocation": "4949:6:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37060,
                      "src": "4941:14:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 37031,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4941:7:21",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37035,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37033,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38846,
                      "src": "4958:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 37034,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4958:12:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4941:29:21"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 37044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 37038,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 37036,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37020,
                        "src": "4984:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 37037,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37032,
                        "src": "4992:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "4984:14:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 37043,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "5002:31:21",
                      "subExpression": {
                        "arguments": [
                          {
                            "id": 37040,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37020,
                            "src": "5020:4:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 37041,
                            "name": "sender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37032,
                            "src": "5026:6:21",
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
                          "id": 37039,
                          "name": "isApprovedForAll",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37017,
                          "src": "5003:16:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address,address) view returns (bool)"
                          }
                        },
                        "id": 37042,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5003:30:21",
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
                    "src": "4984:49:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37051,
                  "nodeType": "IfStatement",
                  "src": "4980:129:21",
                  "trueBody": {
                    "id": 37050,
                    "nodeType": "Block",
                    "src": "5035:74:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 37046,
                              "name": "sender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37032,
                              "src": "5085:6:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 37047,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37020,
                              "src": "5093:4:21",
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
                            "id": 37045,
                            "name": "ERC1155MissingApprovalForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39410,
                            "src": "5056:28:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$_t_address_$returns$_t_error_$",
                              "typeString": "function (address,address) pure returns (error)"
                            }
                          },
                          "id": 37048,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5056:42:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37049,
                        "nodeType": "RevertStatement",
                        "src": "5049:49:21"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 37053,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37020,
                        "src": "5136:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37054,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37022,
                        "src": "5142:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37055,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37024,
                        "src": "5146:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 37056,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37026,
                        "src": "5150:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 37057,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37028,
                        "src": "5157:4:21",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                      "id": 37052,
                      "name": "_safeTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37417,
                      "src": "5118:17:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256,bytes memory)"
                      }
                    },
                    "id": 37058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5118:44:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37059,
                  "nodeType": "ExpressionStatement",
                  "src": "5118:44:21"
                }
              ]
            },
            "baseFunctions": [
              39534
            ],
            "documentation": {
              "id": 37018,
              "nodeType": "StructuredDocumentation",
              "src": "4757:56:21",
              "text": " @dev See {IERC1155-safeTransferFrom}."
            },
            "functionSelector": "f242432a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "4827:16:21",
            "parameters": {
              "id": 37029,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37020,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "4852:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37061,
                  "src": "4844:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37019,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4844:7:21",
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
                  "id": 37022,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4866:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37061,
                  "src": "4858:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37021,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4858:7:21",
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
                  "id": 37024,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "4878:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37061,
                  "src": "4870:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37023,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4870:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37026,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4890:5:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37061,
                  "src": "4882:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37025,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4882:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37028,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "4910:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37061,
                  "src": "4897:17:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 37027,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4897:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4843:72:21"
            },
            "returnParameters": {
              "id": 37030,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4931:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 37107,
            "nodeType": "FunctionDefinition",
            "src": "5241:429:21",
            "nodes": [],
            "body": {
              "id": 37106,
              "nodeType": "Block",
              "src": "5425:245:21",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    37078
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37078,
                      "mutability": "mutable",
                      "name": "sender",
                      "nameLocation": "5443:6:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37106,
                      "src": "5435:14:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 37077,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5435:7:21",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37081,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37079,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38846,
                      "src": "5452:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 37080,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5452:12:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5435:29:21"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 37090,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 37084,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 37082,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37064,
                        "src": "5478:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 37083,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37078,
                        "src": "5486:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "5478:14:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 37089,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "5496:31:21",
                      "subExpression": {
                        "arguments": [
                          {
                            "id": 37086,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37064,
                            "src": "5514:4:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 37087,
                            "name": "sender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37078,
                            "src": "5520:6:21",
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
                          "id": 37085,
                          "name": "isApprovedForAll",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37017,
                          "src": "5497:16:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address,address) view returns (bool)"
                          }
                        },
                        "id": 37088,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5497:30:21",
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
                    "src": "5478:49:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37097,
                  "nodeType": "IfStatement",
                  "src": "5474:129:21",
                  "trueBody": {
                    "id": 37096,
                    "nodeType": "Block",
                    "src": "5529:74:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 37092,
                              "name": "sender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37078,
                              "src": "5579:6:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 37093,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37064,
                              "src": "5587:4:21",
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
                            "id": 37091,
                            "name": "ERC1155MissingApprovalForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39410,
                            "src": "5550:28:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$_t_address_$returns$_t_error_$",
                              "typeString": "function (address,address) pure returns (error)"
                            }
                          },
                          "id": 37094,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5550:42:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37095,
                        "nodeType": "RevertStatement",
                        "src": "5543:49:21"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 37099,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37064,
                        "src": "5635:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37100,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37066,
                        "src": "5641:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37101,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37069,
                        "src": "5645:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37102,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37072,
                        "src": "5650:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37103,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37074,
                        "src": "5658:4:21",
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
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 37098,
                      "name": "_safeBatchTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37472,
                      "src": "5612:22:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 37104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5612:51:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37105,
                  "nodeType": "ExpressionStatement",
                  "src": "5612:51:21"
                }
              ]
            },
            "baseFunctions": [
              39550
            ],
            "documentation": {
              "id": 37062,
              "nodeType": "StructuredDocumentation",
              "src": "5175:61:21",
              "text": " @dev See {IERC1155-safeBatchTransferFrom}."
            },
            "functionSelector": "2eb2c2d6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeBatchTransferFrom",
            "nameLocation": "5250:21:21",
            "parameters": {
              "id": 37075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37064,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "5289:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37107,
                  "src": "5281:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37063,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5281:7:21",
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
                  "id": 37066,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "5311:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37107,
                  "src": "5303:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37065,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5303:7:21",
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
                  "id": 37069,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "5340:3:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37107,
                  "src": "5323:20:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37067,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5323:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37068,
                    "nodeType": "ArrayTypeName",
                    "src": "5323:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37072,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "5370:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37107,
                  "src": "5353:23:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37070,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5353:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37071,
                    "nodeType": "ArrayTypeName",
                    "src": "5353:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37074,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "5399:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37107,
                  "src": "5386:17:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 37073,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5386:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5271:138:21"
            },
            "returnParameters": {
              "id": 37076,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5425:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 37271,
            "nodeType": "FunctionDefinition",
            "src": "6371:1344:21",
            "nodes": [],
            "body": {
              "id": 37270,
              "nodeType": "Block",
              "src": "6478:1237:21",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    37123
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37123,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "6511:1:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37270,
                      "src": "6488:24:21",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 37122,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 37121,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "6488:14:21"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36798,
                          "src": "6488:14:21"
                        },
                        "referencedDeclaration": 36798,
                        "src": "6488:14:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37126,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37124,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36809,
                      "src": "6515:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$36798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 37125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6515:20:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6488:47:21"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 37131,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 37127,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37115,
                        "src": "6549:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 37128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6553:6:21",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6549:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 37129,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37118,
                        "src": "6563:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 37130,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6570:6:21",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6563:13:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6549:27:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37140,
                  "nodeType": "IfStatement",
                  "src": "6545:117:21",
                  "trueBody": {
                    "id": 37139,
                    "nodeType": "Block",
                    "src": "6578:84:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 37133,
                                "name": "ids",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 37115,
                                "src": "6625:3:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 37134,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6629:6:21",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "6625:10:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 37135,
                                "name": "values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 37118,
                                "src": "6637:6:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 37136,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6644:6:21",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "6637:13:21",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 37132,
                            "name": "ERC1155InvalidArrayLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39427,
                            "src": "6599:25:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256,uint256) pure returns (error)"
                            }
                          },
                          "id": 37137,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6599:52:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37138,
                        "nodeType": "RevertStatement",
                        "src": "6592:59:21"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    37142
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37142,
                      "mutability": "mutable",
                      "name": "operator",
                      "nameLocation": "6680:8:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37270,
                      "src": "6672:16:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 37141,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6672:7:21",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37145,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37143,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38846,
                      "src": "6691:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 37144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6691:12:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6672:31:21"
                },
                {
                  "body": {
                    "id": 37231,
                    "nodeType": "Block",
                    "src": "6755:656:21",
                    "statements": [
                      {
                        "assignments": [
                          37158
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 37158,
                            "mutability": "mutable",
                            "name": "id",
                            "nameLocation": "6777:2:21",
                            "nodeType": "VariableDeclaration",
                            "scope": 37231,
                            "src": "6769:10:21",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 37157,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6769:7:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 37163,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 37161,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37147,
                              "src": "6805:1:21",
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
                            "expression": {
                              "id": 37159,
                              "name": "ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37115,
                              "src": "6782:3:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 37160,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6786:18:21",
                            "memberName": "unsafeMemoryAccess",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 40925,
                            "src": "6782:22:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 37162,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6782:25:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6769:38:21"
                      },
                      {
                        "assignments": [
                          37165
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 37165,
                            "mutability": "mutable",
                            "name": "value",
                            "nameLocation": "6829:5:21",
                            "nodeType": "VariableDeclaration",
                            "scope": 37231,
                            "src": "6821:13:21",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 37164,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6821:7:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 37170,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 37168,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37147,
                              "src": "6863:1:21",
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
                            "expression": {
                              "id": 37166,
                              "name": "values",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37118,
                              "src": "6837:6:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 37167,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6844:18:21",
                            "memberName": "unsafeMemoryAccess",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 40925,
                            "src": "6837:25:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 37169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6837:28:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6821:44:21"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 37176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 37171,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37110,
                            "src": "6884:4:21",
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
                                "id": 37174,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6900:1:21",
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
                              "id": 37173,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "6892:7:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 37172,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "6892:7:21",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 37175,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6892:10:21",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "6884:18:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 37212,
                        "nodeType": "IfStatement",
                        "src": "6880:424:21",
                        "trueBody": {
                          "id": 37211,
                          "nodeType": "Block",
                          "src": "6904:400:21",
                          "statements": [
                            {
                              "assignments": [
                                37178
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 37178,
                                  "mutability": "mutable",
                                  "name": "fromBalance",
                                  "nameLocation": "6930:11:21",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 37211,
                                  "src": "6922:19:21",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "typeName": {
                                    "id": 37177,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6922:7:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 37185,
                              "initialValue": {
                                "baseExpression": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 37179,
                                      "name": "$",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 37123,
                                      "src": "6944:1:21",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                                      }
                                    },
                                    "id": 37180,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "6946:9:21",
                                    "memberName": "_balances",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 36789,
                                    "src": "6944:11:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                      "typeString": "mapping(uint256 => mapping(address => uint256))"
                                    }
                                  },
                                  "id": 37182,
                                  "indexExpression": {
                                    "id": 37181,
                                    "name": "id",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37158,
                                    "src": "6956:2:21",
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
                                  "src": "6944:15:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 37184,
                                "indexExpression": {
                                  "id": 37183,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 37110,
                                  "src": "6960:4:21",
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
                                "src": "6944:21:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "6922:43:21"
                            },
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 37188,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 37186,
                                  "name": "fromBalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 37178,
                                  "src": "6987:11:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "id": 37187,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 37165,
                                  "src": "7001:5:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "6987:19:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 37197,
                              "nodeType": "IfStatement",
                              "src": "6983:129:21",
                              "trueBody": {
                                "id": 37196,
                                "nodeType": "Block",
                                "src": "7008:104:21",
                                "statements": [
                                  {
                                    "errorCall": {
                                      "arguments": [
                                        {
                                          "id": 37190,
                                          "name": "from",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 37110,
                                          "src": "7064:4:21",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        {
                                          "id": 37191,
                                          "name": "fromBalance",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 37178,
                                          "src": "7070:11:21",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        {
                                          "id": 37192,
                                          "name": "value",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 37165,
                                          "src": "7083:5:21",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        {
                                          "id": 37193,
                                          "name": "id",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 37158,
                                          "src": "7090:2:21",
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
                                          },
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "id": 37189,
                                        "name": "ERC1155InsufficientBalance",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 39393,
                                        "src": "7037:26:21",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_error_$",
                                          "typeString": "function (address,uint256,uint256,uint256) pure returns (error)"
                                        }
                                      },
                                      "id": 37194,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "7037:56:21",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_error",
                                        "typeString": "error"
                                      }
                                    },
                                    "id": 37195,
                                    "nodeType": "RevertStatement",
                                    "src": "7030:63:21"
                                  }
                                ]
                              }
                            },
                            {
                              "id": 37210,
                              "nodeType": "UncheckedBlock",
                              "src": "7129:161:21",
                              "statements": [
                                {
                                  "expression": {
                                    "id": 37208,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftHandSide": {
                                      "baseExpression": {
                                        "baseExpression": {
                                          "expression": {
                                            "id": 37198,
                                            "name": "$",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37123,
                                            "src": "7228:1:21",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                                              "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                                            }
                                          },
                                          "id": 37202,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "7230:9:21",
                                          "memberName": "_balances",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 36789,
                                          "src": "7228:11:21",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                                          }
                                        },
                                        "id": 37203,
                                        "indexExpression": {
                                          "id": 37200,
                                          "name": "id",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 37158,
                                          "src": "7240:2:21",
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
                                        "src": "7228:15:21",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                          "typeString": "mapping(address => uint256)"
                                        }
                                      },
                                      "id": 37204,
                                      "indexExpression": {
                                        "id": 37201,
                                        "name": "from",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 37110,
                                        "src": "7244:4:21",
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
                                      "src": "7228:21:21",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "Assignment",
                                    "operator": "=",
                                    "rightHandSide": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 37207,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 37205,
                                        "name": "fromBalance",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 37178,
                                        "src": "7252:11:21",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 37206,
                                        "name": "value",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 37165,
                                        "src": "7266:5:21",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "7252:19:21",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "7228:43:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 37209,
                                  "nodeType": "ExpressionStatement",
                                  "src": "7228:43:21"
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
                          "id": 37218,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 37213,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37112,
                            "src": "7322:2:21",
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
                                "id": 37216,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7336:1:21",
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
                              "id": 37215,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "7328:7:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 37214,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "7328:7:21",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 37217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7328:10:21",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "7322:16:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 37230,
                        "nodeType": "IfStatement",
                        "src": "7318:83:21",
                        "trueBody": {
                          "id": 37229,
                          "nodeType": "Block",
                          "src": "7340:61:21",
                          "statements": [
                            {
                              "expression": {
                                "id": 37227,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "baseExpression": {
                                      "expression": {
                                        "id": 37219,
                                        "name": "$",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 37123,
                                        "src": "7358:1:21",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                                        }
                                      },
                                      "id": 37223,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "7360:9:21",
                                      "memberName": "_balances",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 36789,
                                      "src": "7358:11:21",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(uint256 => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 37224,
                                    "indexExpression": {
                                      "id": 37221,
                                      "name": "id",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 37158,
                                      "src": "7370:2:21",
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
                                    "src": "7358:15:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 37225,
                                  "indexExpression": {
                                    "id": 37222,
                                    "name": "to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37112,
                                    "src": "7374:2:21",
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
                                  "src": "7358:19:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "id": 37226,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 37165,
                                  "src": "7381:5:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7358:28:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 37228,
                              "nodeType": "ExpressionStatement",
                              "src": "7358:28:21"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 37153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37150,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37147,
                      "src": "6734:1:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 37151,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37115,
                        "src": "6738:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 37152,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6742:6:21",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6738:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6734:14:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37232,
                  "initializationExpression": {
                    "assignments": [
                      37147
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 37147,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6727:1:21",
                        "nodeType": "VariableDeclaration",
                        "scope": 37232,
                        "src": "6719:9:21",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 37146,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6719:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 37149,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 37148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6731:1:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6719:13:21"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 37155,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "6750:3:21",
                      "subExpression": {
                        "id": 37154,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37147,
                        "src": "6752:1:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37156,
                    "nodeType": "ExpressionStatement",
                    "src": "6750:3:21"
                  },
                  "nodeType": "ForStatement",
                  "src": "6714:697:21"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 37236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 37233,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37115,
                        "src": "7425:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 37234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7429:6:21",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "7425:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 37235,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7439:1:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "7425:15:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 37268,
                    "nodeType": "Block",
                    "src": "7633:76:21",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 37261,
                              "name": "operator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37142,
                              "src": "7666:8:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 37262,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37110,
                              "src": "7676:4:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 37263,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37112,
                              "src": "7682:2:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 37264,
                              "name": "ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37115,
                              "src": "7686:3:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            {
                              "id": 37265,
                              "name": "values",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37118,
                              "src": "7691:6:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
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
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              },
                              {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            ],
                            "id": 37260,
                            "name": "TransferBatch",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39463,
                            "src": "7652:13:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (address,address,address,uint256[] memory,uint256[] memory)"
                            }
                          },
                          "id": 37266,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7652:46:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 37267,
                        "nodeType": "EmitStatement",
                        "src": "7647:51:21"
                      }
                    ]
                  },
                  "id": 37269,
                  "nodeType": "IfStatement",
                  "src": "7421:288:21",
                  "trueBody": {
                    "id": 37259,
                    "nodeType": "Block",
                    "src": "7442:185:21",
                    "statements": [
                      {
                        "assignments": [
                          37238
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 37238,
                            "mutability": "mutable",
                            "name": "id",
                            "nameLocation": "7464:2:21",
                            "nodeType": "VariableDeclaration",
                            "scope": 37259,
                            "src": "7456:10:21",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 37237,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "7456:7:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 37243,
                        "initialValue": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 37241,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7492:1:21",
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
                            "expression": {
                              "id": 37239,
                              "name": "ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37115,
                              "src": "7469:3:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 37240,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7473:18:21",
                            "memberName": "unsafeMemoryAccess",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 40925,
                            "src": "7469:22:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 37242,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7469:25:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7456:38:21"
                      },
                      {
                        "assignments": [
                          37245
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 37245,
                            "mutability": "mutable",
                            "name": "value",
                            "nameLocation": "7516:5:21",
                            "nodeType": "VariableDeclaration",
                            "scope": 37259,
                            "src": "7508:13:21",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 37244,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "7508:7:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 37250,
                        "initialValue": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 37248,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7550:1:21",
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
                            "expression": {
                              "id": 37246,
                              "name": "values",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37118,
                              "src": "7524:6:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 37247,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7531:18:21",
                            "memberName": "unsafeMemoryAccess",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 40925,
                            "src": "7524:25:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 37249,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7524:28:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7508:44:21"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 37252,
                              "name": "operator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37142,
                              "src": "7586:8:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 37253,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37110,
                              "src": "7596:4:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 37254,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37112,
                              "src": "7602:2:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 37255,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37238,
                              "src": "7606:2:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 37256,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37245,
                              "src": "7610:5:21",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 37251,
                            "name": "TransferSingle",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39448,
                            "src": "7571:14:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,address,uint256,uint256)"
                            }
                          },
                          "id": 37257,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7571:45:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 37258,
                        "nodeType": "EmitStatement",
                        "src": "7566:50:21"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 37108,
              "nodeType": "StructuredDocumentation",
              "src": "5676:690:21",
              "text": " @dev Transfers a `value` amount of tokens of type `id` from `from` to `to`. Will mint (or burn) if `from`\n (or `to`) is the zero address.\n Emits a {TransferSingle} event if the arrays contain one element, and {TransferBatch} otherwise.\n Requirements:\n - If `to` refers to a smart contract, it must implement either {IERC1155Receiver-onERC1155Received}\n   or {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.\n - `ids` and `values` must have the same length.\n NOTE: The ERC-1155 acceptance check is not performed in this function. See {_updateWithAcceptanceCheck} instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_update",
            "nameLocation": "6380:7:21",
            "parameters": {
              "id": 37119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37110,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6396:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37271,
                  "src": "6388:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37109,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6388:7:21",
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
                  "id": 37112,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6410:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37271,
                  "src": "6402:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37111,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6402:7:21",
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
                  "id": 37115,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "6431:3:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37271,
                  "src": "6414:20:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37113,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6414:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37114,
                    "nodeType": "ArrayTypeName",
                    "src": "6414:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37118,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "6453:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37271,
                  "src": "6436:23:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37116,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6436:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37117,
                    "nodeType": "ArrayTypeName",
                    "src": "6436:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6387:73:21"
            },
            "returnParameters": {
              "id": 37120,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6478:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 37351,
            "nodeType": "FunctionDefinition",
            "src": "8294:700:21",
            "nodes": [],
            "body": {
              "id": 37350,
              "nodeType": "Block",
              "src": "8485:509:21",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 37288,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37274,
                        "src": "8503:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37289,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37276,
                        "src": "8509:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37290,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37279,
                        "src": "8513:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37291,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37282,
                        "src": "8518:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
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
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      ],
                      "id": 37287,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37271,
                      "src": "8495:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory)"
                      }
                    },
                    "id": 37292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8495:30:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37293,
                  "nodeType": "ExpressionStatement",
                  "src": "8495:30:21"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 37299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37294,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37276,
                      "src": "8539:2:21",
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
                          "id": 37297,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8553:1:21",
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
                        "id": 37296,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8545:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37295,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "8545:7:21",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37298,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8545:10:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8539:16:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37349,
                  "nodeType": "IfStatement",
                  "src": "8535:453:21",
                  "trueBody": {
                    "id": 37348,
                    "nodeType": "Block",
                    "src": "8557:431:21",
                    "statements": [
                      {
                        "assignments": [
                          37301
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 37301,
                            "mutability": "mutable",
                            "name": "operator",
                            "nameLocation": "8579:8:21",
                            "nodeType": "VariableDeclaration",
                            "scope": 37348,
                            "src": "8571:16:21",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 37300,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8571:7:21",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 37304,
                        "initialValue": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 37302,
                            "name": "_msgSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38846,
                            "src": "8590:10:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                              "typeString": "function () view returns (address)"
                            }
                          },
                          "id": 37303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8590:12:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "8571:31:21"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 37308,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 37305,
                              "name": "ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 37279,
                              "src": "8620:3:21",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 37306,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8624:6:21",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "8620:10:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 37307,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8634:1:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "8620:15:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 37346,
                          "nodeType": "Block",
                          "src": "8866:112:21",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 37338,
                                    "name": "operator",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37301,
                                    "src": "8925:8:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 37339,
                                    "name": "from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37274,
                                    "src": "8935:4:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 37340,
                                    "name": "to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37276,
                                    "src": "8941:2:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 37341,
                                    "name": "ids",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37279,
                                    "src": "8945:3:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  {
                                    "id": 37342,
                                    "name": "values",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37282,
                                    "src": "8950:6:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  {
                                    "id": 37343,
                                    "name": "data",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37284,
                                    "src": "8958:4:21",
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
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "expression": {
                                    "id": 37335,
                                    "name": "ERC1155Utils",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 39763,
                                    "src": "8884:12:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_ERC1155Utils_$39763_$",
                                      "typeString": "type(library ERC1155Utils)"
                                    }
                                  },
                                  "id": 37337,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8897:27:21",
                                  "memberName": "checkOnERC1155BatchReceived",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 39762,
                                  "src": "8884:40:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                                    "typeString": "function (address,address,address,uint256[] memory,uint256[] memory,bytes memory)"
                                  }
                                },
                                "id": 37344,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8884:79:21",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 37345,
                              "nodeType": "ExpressionStatement",
                              "src": "8884:79:21"
                            }
                          ]
                        },
                        "id": 37347,
                        "nodeType": "IfStatement",
                        "src": "8616:362:21",
                        "trueBody": {
                          "id": 37334,
                          "nodeType": "Block",
                          "src": "8637:223:21",
                          "statements": [
                            {
                              "assignments": [
                                37310
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 37310,
                                  "mutability": "mutable",
                                  "name": "id",
                                  "nameLocation": "8663:2:21",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 37334,
                                  "src": "8655:10:21",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "typeName": {
                                    "id": 37309,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8655:7:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 37315,
                              "initialValue": {
                                "arguments": [
                                  {
                                    "hexValue": "30",
                                    "id": 37313,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "8691:1:21",
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
                                  "expression": {
                                    "id": 37311,
                                    "name": "ids",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37279,
                                    "src": "8668:3:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 37312,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8672:18:21",
                                  "memberName": "unsafeMemoryAccess",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 40925,
                                  "src": "8668:22:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                    "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 37314,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8668:25:21",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "8655:38:21"
                            },
                            {
                              "assignments": [
                                37317
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 37317,
                                  "mutability": "mutable",
                                  "name": "value",
                                  "nameLocation": "8719:5:21",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 37334,
                                  "src": "8711:13:21",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "typeName": {
                                    "id": 37316,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8711:7:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 37322,
                              "initialValue": {
                                "arguments": [
                                  {
                                    "hexValue": "30",
                                    "id": 37320,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "8753:1:21",
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
                                  "expression": {
                                    "id": 37318,
                                    "name": "values",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37282,
                                    "src": "8727:6:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 37319,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8734:18:21",
                                  "memberName": "unsafeMemoryAccess",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 40925,
                                  "src": "8727:25:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                    "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 37321,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8727:28:21",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "8711:44:21"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 37326,
                                    "name": "operator",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37301,
                                    "src": "8809:8:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 37327,
                                    "name": "from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37274,
                                    "src": "8819:4:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 37328,
                                    "name": "to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37276,
                                    "src": "8825:2:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 37329,
                                    "name": "id",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37310,
                                    "src": "8829:2:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 37330,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37317,
                                    "src": "8833:5:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 37331,
                                    "name": "data",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37284,
                                    "src": "8840:4:21",
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
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "expression": {
                                    "id": 37323,
                                    "name": "ERC1155Utils",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 39763,
                                    "src": "8773:12:21",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_ERC1155Utils_$39763_$",
                                      "typeString": "type(library ERC1155Utils)"
                                    }
                                  },
                                  "id": 37325,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8786:22:21",
                                  "memberName": "checkOnERC1155Received",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 39688,
                                  "src": "8773:35:21",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                                    "typeString": "function (address,address,address,uint256,uint256,bytes memory)"
                                  }
                                },
                                "id": 37332,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8773:72:21",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 37333,
                              "nodeType": "ExpressionStatement",
                              "src": "8773:72:21"
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
              "id": 37272,
              "nodeType": "StructuredDocumentation",
              "src": "7721:568:21",
              "text": " @dev Version of {_update} that performs the token acceptance check by calling\n {IERC1155Receiver-onERC1155Received} or {IERC1155Receiver-onERC1155BatchReceived} on the receiver address if it\n contains code (eg. is a smart contract at the moment of execution).\n IMPORTANT: Overriding this function is discouraged because it poses a reentrancy risk from the receiver. So any\n update to the contract state after this function would break the check-effect-interaction pattern. Consider\n overriding {_update} instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_updateWithAcceptanceCheck",
            "nameLocation": "8303:26:21",
            "parameters": {
              "id": 37285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37274,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "8347:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37351,
                  "src": "8339:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37273,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8339:7:21",
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
                  "id": 37276,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "8369:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37351,
                  "src": "8361:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37275,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8361:7:21",
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
                  "id": 37279,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "8398:3:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37351,
                  "src": "8381:20:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37277,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8381:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37278,
                    "nodeType": "ArrayTypeName",
                    "src": "8381:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37282,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "8428:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37351,
                  "src": "8411:23:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37280,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8411:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37281,
                    "nodeType": "ArrayTypeName",
                    "src": "8411:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37284,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8457:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37351,
                  "src": "8444:17:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 37283,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8444:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8329:138:21"
            },
            "returnParameters": {
              "id": 37286,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8485:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 37417,
            "nodeType": "FunctionDefinition",
            "src": "9451:463:21",
            "nodes": [],
            "body": {
              "id": 37416,
              "nodeType": "Block",
              "src": "9559:355:21",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 37370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37365,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37356,
                      "src": "9573:2:21",
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
                          "id": 37368,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9587:1:21",
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
                        "id": 37367,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9579:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37366,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9579:7:21",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37369,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9579:10:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9573:16:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37379,
                  "nodeType": "IfStatement",
                  "src": "9569:88:21",
                  "trueBody": {
                    "id": 37378,
                    "nodeType": "Block",
                    "src": "9591:66:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 37374,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "9643:1:21",
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
                                "id": 37373,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9635:7:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 37372,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9635:7:21",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 37375,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9635:10:21",
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
                            "id": 37371,
                            "name": "ERC1155InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39403,
                            "src": "9612:22:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 37376,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9612:34:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37377,
                        "nodeType": "RevertStatement",
                        "src": "9605:41:21"
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
                    "id": 37385,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37380,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37354,
                      "src": "9670:4:21",
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
                          "id": 37383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9686:1:21",
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
                        "id": 37382,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9678:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37381,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9678:7:21",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9678:10:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9670:18:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37394,
                  "nodeType": "IfStatement",
                  "src": "9666:88:21",
                  "trueBody": {
                    "id": 37393,
                    "nodeType": "Block",
                    "src": "9690:64:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 37389,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "9740:1:21",
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
                                "id": 37388,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9732:7:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 37387,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9732:7:21",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 37390,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9732:10:21",
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
                            "id": 37386,
                            "name": "ERC1155InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39398,
                            "src": "9711:20:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 37391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9711:32:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37392,
                        "nodeType": "RevertStatement",
                        "src": "9704:39:21"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    37399,
                    37402
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37399,
                      "mutability": "mutable",
                      "name": "ids",
                      "nameLocation": "9781:3:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37416,
                      "src": "9764:20:21",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 37397,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "9764:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 37398,
                        "nodeType": "ArrayTypeName",
                        "src": "9764:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 37402,
                      "mutability": "mutable",
                      "name": "values",
                      "nameLocation": "9803:6:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37416,
                      "src": "9786:23:21",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 37400,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "9786:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 37401,
                        "nodeType": "ArrayTypeName",
                        "src": "9786:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37407,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 37404,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37358,
                        "src": "9832:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 37405,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37360,
                        "src": "9836:5:21",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 37403,
                      "name": "_asSingletonArrays",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37737,
                      "src": "9813:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256[] memory,uint256[] memory)"
                      }
                    },
                    "id": 37406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9813:29:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(uint256[] memory,uint256[] memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9763:79:21"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 37409,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37354,
                        "src": "9879:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37410,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37356,
                        "src": "9885:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37411,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37399,
                        "src": "9889:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37412,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37402,
                        "src": "9894:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37413,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37362,
                        "src": "9902:4:21",
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
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 37408,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37351,
                      "src": "9852:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 37414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9852:55:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37415,
                  "nodeType": "ExpressionStatement",
                  "src": "9852:55:21"
                }
              ]
            },
            "documentation": {
              "id": 37352,
              "nodeType": "StructuredDocumentation",
              "src": "9000:446:21",
              "text": " @dev Transfers a `value` tokens of token type `id` from `from` to `to`.\n Emits a {TransferSingle} event.\n Requirements:\n - `to` cannot be the zero address.\n - `from` must have a balance of tokens of type `id` of at least `value` amount.\n - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n acceptance magic value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeTransferFrom",
            "nameLocation": "9460:17:21",
            "parameters": {
              "id": 37363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37354,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "9486:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37417,
                  "src": "9478:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37353,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9478:7:21",
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
                  "id": 37356,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "9500:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37417,
                  "src": "9492:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37355,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9492:7:21",
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
                  "id": 37358,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "9512:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37417,
                  "src": "9504:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37357,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9504:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37360,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9524:5:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37417,
                  "src": "9516:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37359,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9516:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37362,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "9544:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37417,
                  "src": "9531:17:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 37361,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "9531:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9477:72:21"
            },
            "returnParameters": {
              "id": 37364,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9559:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 37472,
            "nodeType": "FunctionDefinition",
            "src": "10315:445:21",
            "nodes": [],
            "body": {
              "id": 37471,
              "nodeType": "Block",
              "src": "10494:266:21",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 37438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37433,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37422,
                      "src": "10508:2:21",
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
                          "id": 37436,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10522:1:21",
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
                        "id": 37435,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10514:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37434,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10514:7:21",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37437,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10514:10:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10508:16:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37447,
                  "nodeType": "IfStatement",
                  "src": "10504:88:21",
                  "trueBody": {
                    "id": 37446,
                    "nodeType": "Block",
                    "src": "10526:66:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 37442,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10578:1:21",
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
                                "id": 37441,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10570:7:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 37440,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10570:7:21",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 37443,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10570:10:21",
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
                            "id": 37439,
                            "name": "ERC1155InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39403,
                            "src": "10547:22:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 37444,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10547:34:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37445,
                        "nodeType": "RevertStatement",
                        "src": "10540:41:21"
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
                    "id": 37453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37448,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37420,
                      "src": "10605:4:21",
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
                          "id": 37451,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10621:1:21",
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
                        "id": 37450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10613:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37449,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10613:7:21",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37452,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10613:10:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10605:18:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37462,
                  "nodeType": "IfStatement",
                  "src": "10601:88:21",
                  "trueBody": {
                    "id": 37461,
                    "nodeType": "Block",
                    "src": "10625:64:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 37457,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10675:1:21",
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
                                "id": 37456,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10667:7:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 37455,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10667:7:21",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 37458,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10667:10:21",
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
                            "id": 37454,
                            "name": "ERC1155InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39398,
                            "src": "10646:20:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 37459,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10646:32:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37460,
                        "nodeType": "RevertStatement",
                        "src": "10639:39:21"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 37464,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37420,
                        "src": "10725:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37465,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37422,
                        "src": "10731:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37466,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37425,
                        "src": "10735:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37467,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37428,
                        "src": "10740:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37468,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37430,
                        "src": "10748:4:21",
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
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 37463,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37351,
                      "src": "10698:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 37469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10698:55:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37470,
                  "nodeType": "ExpressionStatement",
                  "src": "10698:55:21"
                }
              ]
            },
            "documentation": {
              "id": 37418,
              "nodeType": "StructuredDocumentation",
              "src": "9920:390:21",
              "text": " @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.\n Emits a {TransferBatch} event.\n Requirements:\n - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n acceptance magic value.\n - `ids` and `values` must have the same length."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeBatchTransferFrom",
            "nameLocation": "10324:22:21",
            "parameters": {
              "id": 37431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37420,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "10364:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37472,
                  "src": "10356:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37419,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10356:7:21",
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
                  "id": 37422,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "10386:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37472,
                  "src": "10378:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37421,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10378:7:21",
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
                  "id": 37425,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "10415:3:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37472,
                  "src": "10398:20:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37423,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10398:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37424,
                    "nodeType": "ArrayTypeName",
                    "src": "10398:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37428,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "10445:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37472,
                  "src": "10428:23:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37426,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10428:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37427,
                    "nodeType": "ArrayTypeName",
                    "src": "10428:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37430,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "10474:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37472,
                  "src": "10461:17:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 37429,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "10461:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10346:138:21"
            },
            "returnParameters": {
              "id": 37432,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10494:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 37491,
            "nodeType": "FunctionDefinition",
            "src": "11582:145:21",
            "nodes": [],
            "body": {
              "id": 37490,
              "nodeType": "Block",
              "src": "11638:89:21",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    37480
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37480,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "11671:1:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37490,
                      "src": "11648:24:21",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 37479,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 37478,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "11648:14:21"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36798,
                          "src": "11648:14:21"
                        },
                        "referencedDeclaration": 36798,
                        "src": "11648:14:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37483,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37481,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36809,
                      "src": "11675:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$36798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 37482,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11675:20:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11648:47:21"
                },
                {
                  "expression": {
                    "id": 37488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 37484,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37480,
                        "src": "11705:1:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                        }
                      },
                      "id": 37486,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "11707:4:21",
                      "memberName": "_uri",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36797,
                      "src": "11705:6:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 37487,
                      "name": "newuri",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37475,
                      "src": "11714:6:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "11705:15:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 37489,
                  "nodeType": "ExpressionStatement",
                  "src": "11705:15:21"
                }
              ]
            },
            "documentation": {
              "id": 37473,
              "nodeType": "StructuredDocumentation",
              "src": "10766:811:21",
              "text": " @dev Sets a new URI for all token types, by relying on the token type ID\n substitution mechanism\n https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the ERC].\n By this mechanism, any occurrence of the `\\{id\\}` substring in either the\n URI or any of the values in the JSON file at said URI will be replaced by\n clients with the token type ID.\n For example, the `https://token-cdn-domain/\\{id\\}.json` URI would be\n interpreted by clients as\n `https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`\n for token type ID 0x4cce0.\n See {uri}.\n Because these URIs cannot be meaningfully represented by the {URI} event,\n this function emits no events."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setURI",
            "nameLocation": "11591:7:21",
            "parameters": {
              "id": 37476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37475,
                  "mutability": "mutable",
                  "name": "newuri",
                  "nameLocation": "11613:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37491,
                  "src": "11599:20:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37474,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11599:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11598:22:21"
            },
            "returnParameters": {
              "id": 37477,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11638:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 37543,
            "nodeType": "FunctionDefinition",
            "src": "12105:346:21",
            "nodes": [],
            "body": {
              "id": 37542,
              "nodeType": "Block",
              "src": "12187:264:21",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 37508,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37503,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37494,
                      "src": "12201:2:21",
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
                          "id": 37506,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12215:1:21",
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
                        "id": 37505,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "12207:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37504,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "12207:7:21",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37507,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12207:10:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "12201:16:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37517,
                  "nodeType": "IfStatement",
                  "src": "12197:88:21",
                  "trueBody": {
                    "id": 37516,
                    "nodeType": "Block",
                    "src": "12219:66:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 37512,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12271:1:21",
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
                                "id": 37511,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "12263:7:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 37510,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "12263:7:21",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 37513,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "12263:10:21",
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
                            "id": 37509,
                            "name": "ERC1155InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39403,
                            "src": "12240:22:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 37514,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12240:34:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37515,
                        "nodeType": "RevertStatement",
                        "src": "12233:41:21"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    37522,
                    37525
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37522,
                      "mutability": "mutable",
                      "name": "ids",
                      "nameLocation": "12312:3:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37542,
                      "src": "12295:20:21",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 37520,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12295:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 37521,
                        "nodeType": "ArrayTypeName",
                        "src": "12295:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 37525,
                      "mutability": "mutable",
                      "name": "values",
                      "nameLocation": "12334:6:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37542,
                      "src": "12317:23:21",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 37523,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12317:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 37524,
                        "nodeType": "ArrayTypeName",
                        "src": "12317:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37530,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 37527,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37496,
                        "src": "12363:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 37528,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37498,
                        "src": "12367:5:21",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 37526,
                      "name": "_asSingletonArrays",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37737,
                      "src": "12344:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256[] memory,uint256[] memory)"
                      }
                    },
                    "id": 37529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12344:29:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(uint256[] memory,uint256[] memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12294:79:21"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 37534,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12418:1:21",
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
                          "id": 37533,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12410:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 37532,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12410:7:21",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 37535,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12410:10:21",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37536,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37494,
                        "src": "12422:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37537,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37522,
                        "src": "12426:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37538,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37525,
                        "src": "12431:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37539,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37500,
                        "src": "12439:4:21",
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
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 37531,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37351,
                      "src": "12383:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 37540,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12383:61:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37541,
                  "nodeType": "ExpressionStatement",
                  "src": "12383:61:21"
                }
              ]
            },
            "documentation": {
              "id": 37492,
              "nodeType": "StructuredDocumentation",
              "src": "11733:367:21",
              "text": " @dev Creates a `value` amount of tokens of type `id`, and assigns them to `to`.\n Emits a {TransferSingle} event.\n Requirements:\n - `to` cannot be the zero address.\n - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n acceptance magic value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mint",
            "nameLocation": "12114:5:21",
            "parameters": {
              "id": 37501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37494,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "12128:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37543,
                  "src": "12120:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37493,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12120:7:21",
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
                  "id": 37496,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "12140:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37543,
                  "src": "12132:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37495,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12132:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37498,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12152:5:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37543,
                  "src": "12144:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37497,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12144:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37500,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "12172:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37543,
                  "src": "12159:17:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 37499,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12159:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12119:58:21"
            },
            "returnParameters": {
              "id": 37502,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12187:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 37584,
            "nodeType": "FunctionDefinition",
            "src": "12882:282:21",
            "nodes": [],
            "body": {
              "id": 37583,
              "nodeType": "Block",
              "src": "12989:175:21",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 37562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37557,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37546,
                      "src": "13003:2:21",
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
                          "id": 37560,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13017:1:21",
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
                        "id": 37559,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13009:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37558,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13009:7:21",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13009:10:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13003:16:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37571,
                  "nodeType": "IfStatement",
                  "src": "12999:88:21",
                  "trueBody": {
                    "id": 37570,
                    "nodeType": "Block",
                    "src": "13021:66:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 37566,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "13073:1:21",
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
                                "id": 37565,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "13065:7:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 37564,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "13065:7:21",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 37567,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13065:10:21",
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
                            "id": 37563,
                            "name": "ERC1155InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39403,
                            "src": "13042:22:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 37568,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13042:34:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37569,
                        "nodeType": "RevertStatement",
                        "src": "13035:41:21"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 37575,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13131:1:21",
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
                          "id": 37574,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13123:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 37573,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13123:7:21",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 37576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13123:10:21",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37577,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37546,
                        "src": "13135:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37578,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37549,
                        "src": "13139:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37579,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37552,
                        "src": "13144:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37580,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37554,
                        "src": "13152:4:21",
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
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 37572,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37351,
                      "src": "13096:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 37581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13096:61:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37582,
                  "nodeType": "ExpressionStatement",
                  "src": "13096:61:21"
                }
              ]
            },
            "documentation": {
              "id": 37544,
              "nodeType": "StructuredDocumentation",
              "src": "12457:420:21",
              "text": " @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.\n Emits a {TransferBatch} event.\n Requirements:\n - `ids` and `values` must have the same length.\n - `to` cannot be the zero address.\n - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n acceptance magic value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mintBatch",
            "nameLocation": "12891:10:21",
            "parameters": {
              "id": 37555,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37546,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "12910:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37584,
                  "src": "12902:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37545,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12902:7:21",
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
                  "id": 37549,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "12931:3:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37584,
                  "src": "12914:20:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37547,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "12914:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37548,
                    "nodeType": "ArrayTypeName",
                    "src": "12914:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37552,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "12953:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37584,
                  "src": "12936:23:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37550,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "12936:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37551,
                    "nodeType": "ArrayTypeName",
                    "src": "12936:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37554,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "12974:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37584,
                  "src": "12961:17:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 37553,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12961:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12901:78:21"
            },
            "returnParameters": {
              "id": 37556,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12989:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 37634,
            "nodeType": "FunctionDefinition",
            "src": "13458:329:21",
            "nodes": [],
            "body": {
              "id": 37633,
              "nodeType": "Block",
              "src": "13523:264:21",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 37599,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37594,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37587,
                      "src": "13537:4:21",
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
                          "id": 37597,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13553:1:21",
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
                        "id": 37596,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13545:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37595,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13545:7:21",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37598,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13545:10:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13537:18:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37608,
                  "nodeType": "IfStatement",
                  "src": "13533:88:21",
                  "trueBody": {
                    "id": 37607,
                    "nodeType": "Block",
                    "src": "13557:64:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 37603,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "13607:1:21",
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
                                "id": 37602,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "13599:7:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 37601,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "13599:7:21",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 37604,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13599:10:21",
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
                            "id": 37600,
                            "name": "ERC1155InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39398,
                            "src": "13578:20:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 37605,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13578:32:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37606,
                        "nodeType": "RevertStatement",
                        "src": "13571:39:21"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    37613,
                    37616
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37613,
                      "mutability": "mutable",
                      "name": "ids",
                      "nameLocation": "13648:3:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37633,
                      "src": "13631:20:21",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 37611,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "13631:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 37612,
                        "nodeType": "ArrayTypeName",
                        "src": "13631:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 37616,
                      "mutability": "mutable",
                      "name": "values",
                      "nameLocation": "13670:6:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37633,
                      "src": "13653:23:21",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 37614,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "13653:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 37615,
                        "nodeType": "ArrayTypeName",
                        "src": "13653:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37621,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 37618,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37589,
                        "src": "13699:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 37619,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37591,
                        "src": "13703:5:21",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 37617,
                      "name": "_asSingletonArrays",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37737,
                      "src": "13680:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256[] memory,uint256[] memory)"
                      }
                    },
                    "id": 37620,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13680:29:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(uint256[] memory,uint256[] memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13630:79:21"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 37623,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37587,
                        "src": "13746:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 37626,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13760:1:21",
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
                          "id": 37625,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13752:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 37624,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13752:7:21",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 37627,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13752:10:21",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37628,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37613,
                        "src": "13764:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37629,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37616,
                        "src": "13769:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 37630,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13777:2:21",
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
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 37622,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37351,
                      "src": "13719:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 37631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13719:61:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37632,
                  "nodeType": "ExpressionStatement",
                  "src": "13719:61:21"
                }
              ]
            },
            "documentation": {
              "id": 37585,
              "nodeType": "StructuredDocumentation",
              "src": "13170:283:21",
              "text": " @dev Destroys a `value` amount of tokens of type `id` from `from`\n Emits a {TransferSingle} event.\n Requirements:\n - `from` cannot be the zero address.\n - `from` must have at least `value` amount of tokens of type `id`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "13467:5:21",
            "parameters": {
              "id": 37592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37587,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "13481:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37634,
                  "src": "13473:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37586,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13473:7:21",
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
                  "id": 37589,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "13495:2:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37634,
                  "src": "13487:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37588,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13487:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37591,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "13507:5:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37634,
                  "src": "13499:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37590,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13499:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13472:41:21"
            },
            "returnParameters": {
              "id": 37593,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13523:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 37673,
            "nodeType": "FunctionDefinition",
            "src": "14143:265:21",
            "nodes": [],
            "body": {
              "id": 37672,
              "nodeType": "Block",
              "src": "14233:175:21",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 37651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37646,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37637,
                      "src": "14247:4:21",
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
                          "id": 37649,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "14263:1:21",
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
                        "id": 37648,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "14255:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37647,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "14255:7:21",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37650,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14255:10:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "14247:18:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37660,
                  "nodeType": "IfStatement",
                  "src": "14243:88:21",
                  "trueBody": {
                    "id": 37659,
                    "nodeType": "Block",
                    "src": "14267:64:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 37655,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "14317:1:21",
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
                                "id": 37654,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "14309:7:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 37653,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "14309:7:21",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 37656,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "14309:10:21",
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
                            "id": 37652,
                            "name": "ERC1155InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39398,
                            "src": "14288:20:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 37657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14288:32:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37658,
                        "nodeType": "RevertStatement",
                        "src": "14281:39:21"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 37662,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37637,
                        "src": "14367:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 37665,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14381:1:21",
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
                          "id": 37664,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "14373:7:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 37663,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "14373:7:21",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 37666,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14373:10:21",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37667,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37640,
                        "src": "14385:3:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 37668,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37643,
                        "src": "14390:6:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 37669,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "14398:2:21",
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
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 37661,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37351,
                      "src": "14340:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 37670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14340:61:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37671,
                  "nodeType": "ExpressionStatement",
                  "src": "14340:61:21"
                }
              ]
            },
            "documentation": {
              "id": 37635,
              "nodeType": "StructuredDocumentation",
              "src": "13793:345:21",
              "text": " @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.\n Emits a {TransferBatch} event.\n Requirements:\n - `from` cannot be the zero address.\n - `from` must have at least `value` amount of tokens of type `id`.\n - `ids` and `values` must have the same length."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burnBatch",
            "nameLocation": "14152:10:21",
            "parameters": {
              "id": 37644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37637,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "14171:4:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37673,
                  "src": "14163:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37636,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14163:7:21",
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
                  "id": 37640,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "14194:3:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37673,
                  "src": "14177:20:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37638,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "14177:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37639,
                    "nodeType": "ArrayTypeName",
                    "src": "14177:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37643,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "14216:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37673,
                  "src": "14199:23:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37641,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "14199:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37642,
                    "nodeType": "ArrayTypeName",
                    "src": "14199:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14162:61:21"
            },
            "returnParameters": {
              "id": 37645,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14233:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 37721,
            "nodeType": "FunctionDefinition",
            "src": "14627:374:21",
            "nodes": [],
            "body": {
              "id": 37720,
              "nodeType": "Block",
              "src": "14720:281:21",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    37685
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 37685,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "14753:1:21",
                      "nodeType": "VariableDeclaration",
                      "scope": 37720,
                      "src": "14730:24:21",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 37684,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 37683,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "14730:14:21"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36798,
                          "src": "14730:14:21"
                        },
                        "referencedDeclaration": 36798,
                        "src": "14730:14:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37688,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 37686,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36809,
                      "src": "14757:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$36798_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 37687,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14757:20:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14730:47:21"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 37694,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 37689,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37678,
                      "src": "14791:8:21",
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
                          "id": 37692,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "14811:1:21",
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
                        "id": 37691,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "14803:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 37690,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "14803:7:21",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 37693,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14803:10:21",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "14791:22:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37703,
                  "nodeType": "IfStatement",
                  "src": "14787:94:21",
                  "trueBody": {
                    "id": 37702,
                    "nodeType": "Block",
                    "src": "14815:66:21",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 37698,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "14867:1:21",
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
                                "id": 37697,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "14859:7:21",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 37696,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "14859:7:21",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 37699,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "14859:10:21",
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
                            "id": 37695,
                            "name": "ERC1155InvalidOperator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39420,
                            "src": "14836:22:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 37700,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14836:34:21",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 37701,
                        "nodeType": "RevertStatement",
                        "src": "14829:41:21"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 37712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 37704,
                            "name": "$",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37685,
                            "src": "14890:1:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ERC1155Storage_$36798_storage_ptr",
                              "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                            }
                          },
                          "id": 37708,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14892:18:21",
                          "memberName": "_operatorApprovals",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 36795,
                          "src": "14890:20:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 37709,
                        "indexExpression": {
                          "id": 37706,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37676,
                          "src": "14911:5:21",
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
                        "src": "14890:27:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 37710,
                      "indexExpression": {
                        "id": 37707,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37678,
                        "src": "14918:8:21",
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
                      "src": "14890:37:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 37711,
                      "name": "approved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37680,
                      "src": "14930:8:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "14890:48:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 37713,
                  "nodeType": "ExpressionStatement",
                  "src": "14890:48:21"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 37715,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37676,
                        "src": "14968:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37716,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37678,
                        "src": "14975:8:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 37717,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37680,
                        "src": "14985:8:21",
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
                      "id": 37714,
                      "name": "ApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39472,
                      "src": "14953:14:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 37718,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14953:41:21",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 37719,
                  "nodeType": "EmitStatement",
                  "src": "14948:46:21"
                }
              ]
            },
            "documentation": {
              "id": 37674,
              "nodeType": "StructuredDocumentation",
              "src": "14414:208:21",
              "text": " @dev Approve `operator` to operate on all of `owner` tokens\n Emits an {ApprovalForAll} event.\n Requirements:\n - `operator` cannot be the zero address."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setApprovalForAll",
            "nameLocation": "14636:18:21",
            "parameters": {
              "id": 37681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37676,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "14663:5:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37721,
                  "src": "14655:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37675,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14655:7:21",
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
                  "id": 37678,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "14678:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37721,
                  "src": "14670:16:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37677,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14670:7:21",
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
                  "id": 37680,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "14693:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37721,
                  "src": "14688:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 37679,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "14688:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14654:48:21"
            },
            "returnParameters": {
              "id": 37682,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14720:0:21"
            },
            "scope": 37738,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 37737,
            "nodeType": "FunctionDefinition",
            "src": "15117:822:21",
            "nodes": [],
            "body": {
              "id": 37736,
              "nodeType": "Block",
              "src": "15275:664:21",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "15310:623:21",
                    "nodeType": "YulBlock",
                    "src": "15310:623:21",
                    "statements": [
                      {
                        "nativeSrc": "15368:21:21",
                        "nodeType": "YulAssignment",
                        "src": "15368:21:21",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15384:4:21",
                              "nodeType": "YulLiteral",
                              "src": "15384:4:21",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "15378:5:21",
                            "nodeType": "YulIdentifier",
                            "src": "15378:5:21"
                          },
                          "nativeSrc": "15378:11:21",
                          "nodeType": "YulFunctionCall",
                          "src": "15378:11:21"
                        },
                        "variableNames": [
                          {
                            "name": "array1",
                            "nativeSrc": "15368:6:21",
                            "nodeType": "YulIdentifier",
                            "src": "15368:6:21"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array1",
                              "nativeSrc": "15446:6:21",
                              "nodeType": "YulIdentifier",
                              "src": "15446:6:21"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15454:1:21",
                              "nodeType": "YulLiteral",
                              "src": "15454:1:21",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15439:6:21",
                            "nodeType": "YulIdentifier",
                            "src": "15439:6:21"
                          },
                          "nativeSrc": "15439:17:21",
                          "nodeType": "YulFunctionCall",
                          "src": "15439:17:21"
                        },
                        "nativeSrc": "15439:17:21",
                        "nodeType": "YulExpressionStatement",
                        "src": "15439:17:21"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "array1",
                                  "nativeSrc": "15577:6:21",
                                  "nodeType": "YulIdentifier",
                                  "src": "15577:6:21"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15585:4:21",
                                  "nodeType": "YulLiteral",
                                  "src": "15585:4:21",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15573:3:21",
                                "nodeType": "YulIdentifier",
                                "src": "15573:3:21"
                              },
                              "nativeSrc": "15573:17:21",
                              "nodeType": "YulFunctionCall",
                              "src": "15573:17:21"
                            },
                            {
                              "name": "element1",
                              "nativeSrc": "15592:8:21",
                              "nodeType": "YulIdentifier",
                              "src": "15592:8:21"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15566:6:21",
                            "nodeType": "YulIdentifier",
                            "src": "15566:6:21"
                          },
                          "nativeSrc": "15566:35:21",
                          "nodeType": "YulFunctionCall",
                          "src": "15566:35:21"
                        },
                        "nativeSrc": "15566:35:21",
                        "nodeType": "YulExpressionStatement",
                        "src": "15566:35:21"
                      },
                      {
                        "nativeSrc": "15692:27:21",
                        "nodeType": "YulAssignment",
                        "src": "15692:27:21",
                        "value": {
                          "arguments": [
                            {
                              "name": "array1",
                              "nativeSrc": "15706:6:21",
                              "nodeType": "YulIdentifier",
                              "src": "15706:6:21"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15714:4:21",
                              "nodeType": "YulLiteral",
                              "src": "15714:4:21",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "15702:3:21",
                            "nodeType": "YulIdentifier",
                            "src": "15702:3:21"
                          },
                          "nativeSrc": "15702:17:21",
                          "nodeType": "YulFunctionCall",
                          "src": "15702:17:21"
                        },
                        "variableNames": [
                          {
                            "name": "array2",
                            "nativeSrc": "15692:6:21",
                            "nodeType": "YulIdentifier",
                            "src": "15692:6:21"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array2",
                              "nativeSrc": "15739:6:21",
                              "nodeType": "YulIdentifier",
                              "src": "15739:6:21"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15747:1:21",
                              "nodeType": "YulLiteral",
                              "src": "15747:1:21",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15732:6:21",
                            "nodeType": "YulIdentifier",
                            "src": "15732:6:21"
                          },
                          "nativeSrc": "15732:17:21",
                          "nodeType": "YulFunctionCall",
                          "src": "15732:17:21"
                        },
                        "nativeSrc": "15732:17:21",
                        "nodeType": "YulExpressionStatement",
                        "src": "15732:17:21"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "array2",
                                  "nativeSrc": "15773:6:21",
                                  "nodeType": "YulIdentifier",
                                  "src": "15773:6:21"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15781:4:21",
                                  "nodeType": "YulLiteral",
                                  "src": "15781:4:21",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15769:3:21",
                                "nodeType": "YulIdentifier",
                                "src": "15769:3:21"
                              },
                              "nativeSrc": "15769:17:21",
                              "nodeType": "YulFunctionCall",
                              "src": "15769:17:21"
                            },
                            {
                              "name": "element2",
                              "nativeSrc": "15788:8:21",
                              "nodeType": "YulIdentifier",
                              "src": "15788:8:21"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15762:6:21",
                            "nodeType": "YulIdentifier",
                            "src": "15762:6:21"
                          },
                          "nativeSrc": "15762:35:21",
                          "nodeType": "YulFunctionCall",
                          "src": "15762:35:21"
                        },
                        "nativeSrc": "15762:35:21",
                        "nodeType": "YulExpressionStatement",
                        "src": "15762:35:21"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15899:4:21",
                              "nodeType": "YulLiteral",
                              "src": "15899:4:21",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "array2",
                                  "nativeSrc": "15909:6:21",
                                  "nodeType": "YulIdentifier",
                                  "src": "15909:6:21"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15917:4:21",
                                  "nodeType": "YulLiteral",
                                  "src": "15917:4:21",
                                  "type": "",
                                  "value": "0x40"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15905:3:21",
                                "nodeType": "YulIdentifier",
                                "src": "15905:3:21"
                              },
                              "nativeSrc": "15905:17:21",
                              "nodeType": "YulFunctionCall",
                              "src": "15905:17:21"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15892:6:21",
                            "nodeType": "YulIdentifier",
                            "src": "15892:6:21"
                          },
                          "nativeSrc": "15892:31:21",
                          "nodeType": "YulFunctionCall",
                          "src": "15892:31:21"
                        },
                        "nativeSrc": "15892:31:21",
                        "nodeType": "YulExpressionStatement",
                        "src": "15892:31:21"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 37730,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15368:6:21",
                      "valueSize": 1
                    },
                    {
                      "declaration": 37730,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15446:6:21",
                      "valueSize": 1
                    },
                    {
                      "declaration": 37730,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15577:6:21",
                      "valueSize": 1
                    },
                    {
                      "declaration": 37730,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15706:6:21",
                      "valueSize": 1
                    },
                    {
                      "declaration": 37733,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15692:6:21",
                      "valueSize": 1
                    },
                    {
                      "declaration": 37733,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15739:6:21",
                      "valueSize": 1
                    },
                    {
                      "declaration": 37733,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15773:6:21",
                      "valueSize": 1
                    },
                    {
                      "declaration": 37733,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15909:6:21",
                      "valueSize": 1
                    },
                    {
                      "declaration": 37724,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15592:8:21",
                      "valueSize": 1
                    },
                    {
                      "declaration": 37726,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15788:8:21",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 37735,
                  "nodeType": "InlineAssembly",
                  "src": "15285:648:21"
                }
              ]
            },
            "documentation": {
              "id": 37722,
              "nodeType": "StructuredDocumentation",
              "src": "15007:105:21",
              "text": " @dev Creates an array in memory with only one value for each of the elements provided."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_asSingletonArrays",
            "nameLocation": "15126:18:21",
            "parameters": {
              "id": 37727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37724,
                  "mutability": "mutable",
                  "name": "element1",
                  "nameLocation": "15162:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37737,
                  "src": "15154:16:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37723,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15154:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37726,
                  "mutability": "mutable",
                  "name": "element2",
                  "nameLocation": "15188:8:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37737,
                  "src": "15180:16:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 37725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15180:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15144:58:21"
            },
            "returnParameters": {
              "id": 37734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37730,
                  "mutability": "mutable",
                  "name": "array1",
                  "nameLocation": "15242:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37737,
                  "src": "15225:23:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37728,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15225:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37729,
                    "nodeType": "ArrayTypeName",
                    "src": "15225:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37733,
                  "mutability": "mutable",
                  "name": "array2",
                  "nameLocation": "15267:6:21",
                  "nodeType": "VariableDeclaration",
                  "scope": 37737,
                  "src": "15250:23:21",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 37731,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15250:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37732,
                    "nodeType": "ArrayTypeName",
                    "src": "15250:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15224:50:21"
            },
            "scope": 37738,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 36763,
              "name": "Initializable",
              "nameLocations": [
                "1092:13:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 36741,
              "src": "1092:13:21"
            },
            "id": 36764,
            "nodeType": "InheritanceSpecifier",
            "src": "1092:13:21"
          },
          {
            "baseName": {
              "id": 36765,
              "name": "ContextUpgradeable",
              "nameLocations": [
                "1107:18:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 38864,
              "src": "1107:18:21"
            },
            "id": 36766,
            "nodeType": "InheritanceSpecifier",
            "src": "1107:18:21"
          },
          {
            "baseName": {
              "id": 36767,
              "name": "ERC165Upgradeable",
              "nameLocations": [
                "1127:17:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 39248,
              "src": "1127:17:21"
            },
            "id": 36768,
            "nodeType": "InheritanceSpecifier",
            "src": "1127:17:21"
          },
          {
            "baseName": {
              "id": 36769,
              "name": "IERC1155",
              "nameLocations": [
                "1146:8:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 39551,
              "src": "1146:8:21"
            },
            "id": 36770,
            "nodeType": "InheritanceSpecifier",
            "src": "1146:8:21"
          },
          {
            "baseName": {
              "id": 36771,
              "name": "IERC1155MetadataURI",
              "nameLocations": [
                "1156:19:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 39609,
              "src": "1156:19:21"
            },
            "id": 36772,
            "nodeType": "InheritanceSpecifier",
            "src": "1156:19:21"
          },
          {
            "baseName": {
              "id": 36773,
              "name": "IERC1155Errors",
              "nameLocations": [
                "1177:14:21"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 39428,
              "src": "1177:14:21"
            },
            "id": 36774,
            "nodeType": "InheritanceSpecifier",
            "src": "1177:14:21"
          }
        ],
        "canonicalName": "ERC1155Upgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 36762,
          "nodeType": "StructuredDocumentation",
          "src": "867:184:21",
          "text": " @dev Implementation of the basic standard multi-token.\n See https://eips.ethereum.org/EIPS/eip-1155\n Originally based on code by Enjin: https://github.com/enjin/erc-1155"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          37738,
          39428,
          39609,
          39551,
          39248,
          42159,
          38864,
          36741
        ],
        "name": "ERC1155Upgradeable",
        "nameLocation": "1070:18:21",
        "scope": 37739,
        "usedErrors": [
          36504,
          36507,
          39393,
          39398,
          39403,
          39410,
          39415,
          39420,
          39427
        ],
        "usedEvents": [
          36512,
          39448,
          39463,
          39472,
          39479
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 21
} as const;