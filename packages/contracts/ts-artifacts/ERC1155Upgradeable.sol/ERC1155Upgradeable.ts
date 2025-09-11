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
    "id": 41716,
    "exportedSymbols": {
      "Arrays": [
        45477
      ],
      "ContextUpgradeable": [
        42841
      ],
      "ERC1155Upgradeable": [
        41715
      ],
      "ERC1155Utils": [
        43740
      ],
      "ERC165Upgradeable": [
        43225
      ],
      "IERC1155": [
        43528
      ],
      "IERC1155Errors": [
        43405
      ],
      "IERC1155MetadataURI": [
        43586
      ],
      "IERC165": [
        46707
      ],
      "Initializable": [
        40718
      ]
    },
    "nodeType": "SourceUnit",
    "src": "109:15833:26",
    "nodes": [
      {
        "id": 40720,
        "nodeType": "PragmaDirective",
        "src": "109:24:26",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 40722,
        "nodeType": "ImportDirective",
        "src": "135:76:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/IERC1155.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41716,
        "sourceUnit": 43529,
        "symbolAliases": [
          {
            "foreign": {
              "id": 40721,
              "name": "IERC1155",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43528,
              "src": "143:8:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 40724,
        "nodeType": "ImportDirective",
        "src": "212:109:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41716,
        "sourceUnit": 43587,
        "symbolAliases": [
          {
            "foreign": {
              "id": 40723,
              "name": "IERC1155MetadataURI",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43586,
              "src": "220:19:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 40726,
        "nodeType": "ImportDirective",
        "src": "322:90:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Utils.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Utils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41716,
        "sourceUnit": 43741,
        "symbolAliases": [
          {
            "foreign": {
              "id": 40725,
              "name": "ERC1155Utils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43740,
              "src": "330:12:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 40728,
        "nodeType": "ImportDirective",
        "src": "413:70:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol",
        "file": "../../utils/ContextUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41716,
        "sourceUnit": 42842,
        "symbolAliases": [
          {
            "foreign": {
              "id": 40727,
              "name": "ContextUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 42841,
              "src": "421:18:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 40730,
        "nodeType": "ImportDirective",
        "src": "484:80:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41716,
        "sourceUnit": 46708,
        "symbolAliases": [
          {
            "foreign": {
              "id": 40729,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46707,
              "src": "492:7:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 40732,
        "nodeType": "ImportDirective",
        "src": "565:82:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol",
        "file": "../../utils/introspection/ERC165Upgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41716,
        "sourceUnit": 43226,
        "symbolAliases": [
          {
            "foreign": {
              "id": 40731,
              "name": "ERC165Upgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43225,
              "src": "573:17:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 40734,
        "nodeType": "ImportDirective",
        "src": "648:64:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/Arrays.sol",
        "file": "@openzeppelin/contracts/utils/Arrays.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41716,
        "sourceUnit": 45478,
        "symbolAliases": [
          {
            "foreign": {
              "id": 40733,
              "name": "Arrays",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 45477,
              "src": "656:6:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 40736,
        "nodeType": "ImportDirective",
        "src": "713:85:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "file": "@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41716,
        "sourceUnit": 43406,
        "symbolAliases": [
          {
            "foreign": {
              "id": 40735,
              "name": "IERC1155Errors",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43405,
              "src": "721:14:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 40738,
        "nodeType": "ImportDirective",
        "src": "799:66:26",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41716,
        "sourceUnit": 40719,
        "symbolAliases": [
          {
            "foreign": {
              "id": 40737,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 40718,
              "src": "807:13:26",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41715,
        "nodeType": "ContractDefinition",
        "src": "1052:14889:26",
        "nodes": [
          {
            "id": 40755,
            "nodeType": "UsingForDirective",
            "src": "1198:27:26",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 40752,
              "name": "Arrays",
              "nameLocations": [
                "1204:6:26"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 45477,
              "src": "1204:6:26"
            },
            "typeName": {
              "baseType": {
                "id": 40753,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1215:7:26",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 40754,
              "nodeType": "ArrayTypeName",
              "src": "1215:9:26",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            }
          },
          {
            "id": 40759,
            "nodeType": "UsingForDirective",
            "src": "1230:27:26",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 40756,
              "name": "Arrays",
              "nameLocations": [
                "1236:6:26"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 45477,
              "src": "1236:6:26"
            },
            "typeName": {
              "baseType": {
                "id": 40757,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1247:7:26",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 40758,
              "nodeType": "ArrayTypeName",
              "src": "1247:9:26",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            }
          },
          {
            "id": 40775,
            "nodeType": "StructDefinition",
            "src": "1333:338:26",
            "nodes": [],
            "canonicalName": "ERC1155Upgradeable.ERC1155Storage",
            "documentation": {
              "id": 40760,
              "nodeType": "StructuredDocumentation",
              "src": "1263:65:26",
              "text": "@custom:storage-location erc7201:openzeppelin.storage.ERC1155"
            },
            "members": [
              {
                "constant": false,
                "id": 40766,
                "mutability": "mutable",
                "name": "_balances",
                "nameLocation": "1424:9:26",
                "nodeType": "VariableDeclaration",
                "scope": 40775,
                "src": "1365:68:26",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                },
                "typeName": {
                  "id": 40765,
                  "keyName": "id",
                  "keyNameLocation": "1381:2:26",
                  "keyType": {
                    "id": 40761,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1373:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1365:58:26",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 40764,
                    "keyName": "account",
                    "keyNameLocation": "1403:7:26",
                    "keyType": {
                      "id": 40762,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1395:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1387:35:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "id": 40763,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1414:7:26",
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
                "id": 40772,
                "mutability": "mutable",
                "name": "_operatorApprovals",
                "nameLocation": "1506:18:26",
                "nodeType": "VariableDeclaration",
                "scope": 40775,
                "src": "1444:80:26",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                  "typeString": "mapping(address => mapping(address => bool))"
                },
                "typeName": {
                  "id": 40771,
                  "keyName": "account",
                  "keyNameLocation": "1460:7:26",
                  "keyType": {
                    "id": 40767,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1452:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1444:61:26",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                    "typeString": "mapping(address => mapping(address => bool))"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 40770,
                    "keyName": "operator",
                    "keyNameLocation": "1487:8:26",
                    "keyType": {
                      "id": 40768,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1479:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1471:33:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                      "typeString": "mapping(address => bool)"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "id": 40769,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1499:4:26",
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
                "id": 40774,
                "mutability": "mutable",
                "name": "_uri",
                "nameLocation": "1660:4:26",
                "nodeType": "VariableDeclaration",
                "scope": 40775,
                "src": "1653:11:26",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 40773,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1653:6:26",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ERC1155Storage",
            "nameLocation": "1340:14:26",
            "scope": 41715,
            "visibility": "public"
          },
          {
            "id": 40778,
            "nodeType": "VariableDeclaration",
            "src": "1788:116:26",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC1155StorageLocation",
            "nameLocation": "1813:22:26",
            "scope": 41715,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 40776,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1788:7:26",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307838386265353336643532343063323734613362316433613162653534343832666439636161323934663038633632613763646535363966343961336334353030",
              "id": 40777,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1838:66:26",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_61850824141875340645484003952679861077730695310785076753205161524670616061184_by_1",
                "typeString": "int_const 6185...(69 digits omitted)...1184"
              },
              "value": "0x88be536d5240c274a3b1d3a1be54482fd9caa294f08c62a7cde569f49a3c4500"
            },
            "visibility": "private"
          },
          {
            "id": 40786,
            "nodeType": "FunctionDefinition",
            "src": "1911:159:26",
            "nodes": [],
            "body": {
              "id": 40785,
              "nodeType": "Block",
              "src": "1989:81:26",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2008:56:26",
                    "nodeType": "YulBlock",
                    "src": "2008:56:26",
                    "statements": [
                      {
                        "nativeSrc": "2022:32:26",
                        "nodeType": "YulAssignment",
                        "src": "2022:32:26",
                        "value": {
                          "name": "ERC1155StorageLocation",
                          "nativeSrc": "2032:22:26",
                          "nodeType": "YulIdentifier",
                          "src": "2032:22:26"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "2022:6:26",
                            "nodeType": "YulIdentifier",
                            "src": "2022:6:26"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 40782,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2022:6:26",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 40778,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2032:22:26",
                      "valueSize": 1
                    }
                  ],
                  "id": 40784,
                  "nodeType": "InlineAssembly",
                  "src": "1999:65:26"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getERC1155Storage",
            "nameLocation": "1920:18:26",
            "parameters": {
              "id": 40779,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1938:2:26"
            },
            "returnParameters": {
              "id": 40783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40782,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "1986:1:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40786,
                  "src": "1963:24:26",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                    "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                  },
                  "typeName": {
                    "id": 40781,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 40780,
                      "name": "ERC1155Storage",
                      "nameLocations": [
                        "1963:14:26"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 40775,
                      "src": "1963:14:26"
                    },
                    "referencedDeclaration": 40775,
                    "src": "1963:14:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1962:26:26"
            },
            "scope": 41715,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 40799,
            "nodeType": "FunctionDefinition",
            "src": "2119:117:26",
            "nodes": [],
            "body": {
              "id": 40798,
              "nodeType": "Block",
              "src": "2189:47:26",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 40795,
                        "name": "uri_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40789,
                        "src": "2224:4:26",
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
                      "id": 40794,
                      "name": "__ERC1155_init_unchained",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40811,
                      "src": "2199:24:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 40796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2199:30:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 40797,
                  "nodeType": "ExpressionStatement",
                  "src": "2199:30:26"
                }
              ]
            },
            "documentation": {
              "id": 40787,
              "nodeType": "StructuredDocumentation",
              "src": "2076:38:26",
              "text": " @dev See {_setURI}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 40792,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 40791,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "2172:16:26"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40627,
                  "src": "2172:16:26"
                },
                "nodeType": "ModifierInvocation",
                "src": "2172:16:26"
              }
            ],
            "name": "__ERC1155_init",
            "nameLocation": "2128:14:26",
            "parameters": {
              "id": 40790,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40789,
                  "mutability": "mutable",
                  "name": "uri_",
                  "nameLocation": "2157:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40799,
                  "src": "2143:18:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 40788,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2143:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2142:20:26"
            },
            "returnParameters": {
              "id": 40793,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2189:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 40811,
            "nodeType": "FunctionDefinition",
            "src": "2242:110:26",
            "nodes": [],
            "body": {
              "id": 40810,
              "nodeType": "Block",
              "src": "2322:30:26",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 40807,
                        "name": "uri_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40801,
                        "src": "2340:4:26",
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
                      "id": 40806,
                      "name": "_setURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41468,
                      "src": "2332:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 40808,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2332:13:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 40809,
                  "nodeType": "ExpressionStatement",
                  "src": "2332:13:26"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 40804,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 40803,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "2305:16:26"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40627,
                  "src": "2305:16:26"
                },
                "nodeType": "ModifierInvocation",
                "src": "2305:16:26"
              }
            ],
            "name": "__ERC1155_init_unchained",
            "nameLocation": "2251:24:26",
            "parameters": {
              "id": 40802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40801,
                  "mutability": "mutable",
                  "name": "uri_",
                  "nameLocation": "2290:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40811,
                  "src": "2276:18:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 40800,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2276:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2275:20:26"
            },
            "returnParameters": {
              "id": 40805,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2322:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 40842,
            "nodeType": "FunctionDefinition",
            "src": "2419:316:26",
            "nodes": [],
            "body": {
              "id": 40841,
              "nodeType": "Block",
              "src": "2538:197:26",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 40839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 40834,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 40827,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 40822,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40814,
                          "src": "2567:11:26",
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
                                "id": 40824,
                                "name": "IERC1155",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 43528,
                                "src": "2587:8:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155_$43528_$",
                                  "typeString": "type(contract IERC1155)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155_$43528_$",
                                  "typeString": "type(contract IERC1155)"
                                }
                              ],
                              "id": 40823,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "2582:4:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 40825,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2582:14:26",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC1155_$43528",
                              "typeString": "type(contract IERC1155)"
                            }
                          },
                          "id": 40826,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2597:11:26",
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "2582:26:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "2567:41:26",
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
                        "id": 40833,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 40828,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40814,
                          "src": "2624:11:26",
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
                                "id": 40830,
                                "name": "IERC1155MetadataURI",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 43586,
                                "src": "2644:19:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155MetadataURI_$43586_$",
                                  "typeString": "type(contract IERC1155MetadataURI)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155MetadataURI_$43586_$",
                                  "typeString": "type(contract IERC1155MetadataURI)"
                                }
                              ],
                              "id": 40829,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "2639:4:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 40831,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2639:25:26",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC1155MetadataURI_$43586",
                              "typeString": "type(contract IERC1155MetadataURI)"
                            }
                          },
                          "id": 40832,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2665:11:26",
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "2639:37:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "2624:52:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "2567:109:26",
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
                          "id": 40837,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40814,
                          "src": "2716:11:26",
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
                          "id": 40835,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -25,
                          "src": "2692:5:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_ERC1155Upgradeable_$41715_$",
                            "typeString": "type(contract super ERC1155Upgradeable)"
                          }
                        },
                        "id": 40836,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2698:17:26",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 43224,
                        "src": "2692:23:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 40838,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2692:36:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2567:161:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 40821,
                  "id": 40840,
                  "nodeType": "Return",
                  "src": "2548:180:26"
                }
              ]
            },
            "baseFunctions": [
              43224,
              46706
            ],
            "documentation": {
              "id": 40812,
              "nodeType": "StructuredDocumentation",
              "src": "2358:56:26",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "2428:17:26",
            "overrides": {
              "id": 40818,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 40816,
                  "name": "ERC165Upgradeable",
                  "nameLocations": [
                    "2495:17:26"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 43225,
                  "src": "2495:17:26"
                },
                {
                  "id": 40817,
                  "name": "IERC165",
                  "nameLocations": [
                    "2514:7:26"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46707,
                  "src": "2514:7:26"
                }
              ],
              "src": "2486:36:26"
            },
            "parameters": {
              "id": 40815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40814,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "2453:11:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40842,
                  "src": "2446:18:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 40813,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2446:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2445:20:26"
            },
            "returnParameters": {
              "id": 40821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40820,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 40842,
                  "src": "2532:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 40819,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2532:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2531:6:26"
            },
            "scope": 41715,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 40860,
            "nodeType": "FunctionDefinition",
            "src": "3134:162:26",
            "nodes": [],
            "body": {
              "id": 40859,
              "nodeType": "Block",
              "src": "3209:87:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    40852
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 40852,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3242:1:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 40859,
                      "src": "3219:24:26",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 40851,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 40850,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "3219:14:26"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 40775,
                          "src": "3219:14:26"
                        },
                        "referencedDeclaration": 40775,
                        "src": "3219:14:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 40855,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 40853,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40786,
                      "src": "3246:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$40775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 40854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3246:20:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3219:47:26"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 40856,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40852,
                      "src": "3283:1:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                      }
                    },
                    "id": 40857,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3285:4:26",
                    "memberName": "_uri",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 40774,
                    "src": "3283:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 40849,
                  "id": 40858,
                  "nodeType": "Return",
                  "src": "3276:13:26"
                }
              ]
            },
            "baseFunctions": [
              43585
            ],
            "documentation": {
              "id": 40843,
              "nodeType": "StructuredDocumentation",
              "src": "2741:388:26",
              "text": " @dev See {IERC1155MetadataURI-uri}.\n This implementation returns the same URI for *all* token types. It relies\n on the token type ID substitution mechanism\n https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the ERC].\n Clients calling this function must replace the `\\{id\\}` substring with the\n actual token type ID."
            },
            "functionSelector": "0e89341c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "uri",
            "nameLocation": "3143:3:26",
            "parameters": {
              "id": 40846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40845,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 40860,
                  "src": "3147:7:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40844,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3147:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3146:18:26"
            },
            "returnParameters": {
              "id": 40849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40848,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 40860,
                  "src": "3194:13:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 40847,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3194:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3193:15:26"
            },
            "scope": 41715,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 40884,
            "nodeType": "FunctionDefinition",
            "src": "3356:191:26",
            "nodes": [],
            "body": {
              "id": 40883,
              "nodeType": "Block",
              "src": "3442:105:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    40872
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 40872,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3475:1:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 40883,
                      "src": "3452:24:26",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 40871,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 40870,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "3452:14:26"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 40775,
                          "src": "3452:14:26"
                        },
                        "referencedDeclaration": 40775,
                        "src": "3452:14:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 40875,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 40873,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40786,
                      "src": "3479:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$40775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 40874,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3479:20:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3452:47:26"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 40876,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40872,
                          "src": "3516:1:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                            "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                          }
                        },
                        "id": 40877,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3518:9:26",
                        "memberName": "_balances",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 40766,
                        "src": "3516:11:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(uint256 => mapping(address => uint256))"
                        }
                      },
                      "id": 40879,
                      "indexExpression": {
                        "id": 40878,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40865,
                        "src": "3528:2:26",
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
                      "src": "3516:15:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 40881,
                    "indexExpression": {
                      "id": 40880,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40863,
                      "src": "3532:7:26",
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
                    "src": "3516:24:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 40869,
                  "id": 40882,
                  "nodeType": "Return",
                  "src": "3509:31:26"
                }
              ]
            },
            "baseFunctions": [
              43466
            ],
            "documentation": {
              "id": 40861,
              "nodeType": "StructuredDocumentation",
              "src": "3302:49:26",
              "text": " @dev See {IERC1155-balanceOf}."
            },
            "functionSelector": "00fdd58e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "3365:9:26",
            "parameters": {
              "id": 40866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40863,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3383:7:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40884,
                  "src": "3375:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 40862,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3375:7:26",
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
                  "id": 40865,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "3400:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40884,
                  "src": "3392:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40864,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3392:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3374:29:26"
            },
            "returnParameters": {
              "id": 40869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40868,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 40884,
                  "src": "3433:7:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3433:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3432:9:26"
            },
            "scope": 41715,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 40954,
            "nodeType": "FunctionDefinition",
            "src": "3704:552:26",
            "nodes": [],
            "body": {
              "id": 40953,
              "nodeType": "Block",
              "src": "3846:410:26",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 40901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 40897,
                        "name": "accounts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40888,
                        "src": "3860:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 40898,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3869:6:26",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3860:15:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 40899,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40891,
                        "src": "3879:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 40900,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3883:6:26",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3879:10:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3860:29:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 40910,
                  "nodeType": "IfStatement",
                  "src": "3856:121:26",
                  "trueBody": {
                    "id": 40909,
                    "nodeType": "Block",
                    "src": "3891:86:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 40903,
                                "name": "ids",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40891,
                                "src": "3938:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 40904,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3942:6:26",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "3938:10:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 40905,
                                "name": "accounts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40888,
                                "src": "3950:8:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 40906,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3959:6:26",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "3950:15:26",
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
                            "id": 40902,
                            "name": "ERC1155InvalidArrayLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43404,
                            "src": "3912:25:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256,uint256) pure returns (error)"
                            }
                          },
                          "id": 40907,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3912:54:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 40908,
                        "nodeType": "RevertStatement",
                        "src": "3905:61:26"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    40915
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 40915,
                      "mutability": "mutable",
                      "name": "batchBalances",
                      "nameLocation": "4004:13:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 40953,
                      "src": "3987:30:26",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 40913,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3987:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 40914,
                        "nodeType": "ArrayTypeName",
                        "src": "3987:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 40922,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 40919,
                          "name": "accounts",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40888,
                          "src": "4034:8:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "id": 40920,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4043:6:26",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "4034:15:26",
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
                      "id": 40918,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4020:13:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (uint256[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 40916,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4024:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 40917,
                        "nodeType": "ArrayTypeName",
                        "src": "4024:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      }
                    },
                    "id": 40921,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4020:30:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3987:63:26"
                },
                {
                  "body": {
                    "id": 40949,
                    "nodeType": "Block",
                    "src": "4107:112:26",
                    "statements": [
                      {
                        "expression": {
                          "id": 40947,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 40934,
                              "name": "batchBalances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 40915,
                              "src": "4121:13:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 40936,
                            "indexExpression": {
                              "id": 40935,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 40924,
                              "src": "4135:1:26",
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
                            "src": "4121:16:26",
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
                                    "id": 40940,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 40924,
                                    "src": "4178:1:26",
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
                                    "id": 40938,
                                    "name": "accounts",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 40888,
                                    "src": "4150:8:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 40939,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4159:18:26",
                                  "memberName": "unsafeMemoryAccess",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 45417,
                                  "src": "4150:27:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_uint256_$returns$_t_address_$attached_to$_t_array$_t_address_$dyn_memory_ptr_$",
                                    "typeString": "function (address[] memory,uint256) pure returns (address)"
                                  }
                                },
                                "id": 40941,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4150:30:26",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 40944,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 40924,
                                    "src": "4205:1:26",
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
                                    "id": 40942,
                                    "name": "ids",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 40891,
                                    "src": "4182:3:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 40943,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4186:18:26",
                                  "memberName": "unsafeMemoryAccess",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 45443,
                                  "src": "4182:22:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                    "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 40945,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4182:25:26",
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
                              "id": 40937,
                              "name": "balanceOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 40884,
                              "src": "4140:9:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (address,uint256) view returns (uint256)"
                              }
                            },
                            "id": 40946,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4140:68:26",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4121:87:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 40948,
                        "nodeType": "ExpressionStatement",
                        "src": "4121:87:26"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 40930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 40927,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40924,
                      "src": "4081:1:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 40928,
                        "name": "accounts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40888,
                        "src": "4085:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 40929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4094:6:26",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "4085:15:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4081:19:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 40950,
                  "initializationExpression": {
                    "assignments": [
                      40924
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 40924,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "4074:1:26",
                        "nodeType": "VariableDeclaration",
                        "scope": 40950,
                        "src": "4066:9:26",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 40923,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4066:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 40926,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 40925,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4078:1:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4066:13:26"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 40932,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "4102:3:26",
                      "subExpression": {
                        "id": 40931,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40924,
                        "src": "4104:1:26",
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
                    "id": 40933,
                    "nodeType": "ExpressionStatement",
                    "src": "4102:3:26"
                  },
                  "nodeType": "ForStatement",
                  "src": "4061:158:26"
                },
                {
                  "expression": {
                    "id": 40951,
                    "name": "batchBalances",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 40915,
                    "src": "4236:13:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 40896,
                  "id": 40952,
                  "nodeType": "Return",
                  "src": "4229:20:26"
                }
              ]
            },
            "baseFunctions": [
              43479
            ],
            "documentation": {
              "id": 40885,
              "nodeType": "StructuredDocumentation",
              "src": "3553:146:26",
              "text": " @dev See {IERC1155-balanceOfBatch}.\n Requirements:\n - `accounts` and `ids` must have the same length."
            },
            "functionSelector": "4e1273f4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOfBatch",
            "nameLocation": "3713:14:26",
            "parameters": {
              "id": 40892,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40888,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "3754:8:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40954,
                  "src": "3737:25:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 40886,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3737:7:26",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 40887,
                    "nodeType": "ArrayTypeName",
                    "src": "3737:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40891,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "3789:3:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40954,
                  "src": "3772:20:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 40889,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3772:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 40890,
                    "nodeType": "ArrayTypeName",
                    "src": "3772:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3727:71:26"
            },
            "returnParameters": {
              "id": 40896,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40895,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 40954,
                  "src": "3828:16:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 40893,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3828:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 40894,
                    "nodeType": "ArrayTypeName",
                    "src": "3828:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3827:18:26"
            },
            "scope": 41715,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 40970,
            "nodeType": "FunctionDefinition",
            "src": "4324:144:26",
            "nodes": [],
            "body": {
              "id": 40969,
              "nodeType": "Block",
              "src": "4399:69:26",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 40963,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42823,
                          "src": "4428:10:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 40964,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4428:12:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 40965,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40957,
                        "src": "4442:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 40966,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40959,
                        "src": "4452:8:26",
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
                      "id": 40962,
                      "name": "_setApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41698,
                      "src": "4409:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 40967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4409:52:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 40968,
                  "nodeType": "ExpressionStatement",
                  "src": "4409:52:26"
                }
              ]
            },
            "baseFunctions": [
              43487
            ],
            "documentation": {
              "id": 40955,
              "nodeType": "StructuredDocumentation",
              "src": "4262:57:26",
              "text": " @dev See {IERC1155-setApprovalForAll}."
            },
            "functionSelector": "a22cb465",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "4333:17:26",
            "parameters": {
              "id": 40960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40957,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4359:8:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40970,
                  "src": "4351:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 40956,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4351:7:26",
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
                  "id": 40959,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "4374:8:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40970,
                  "src": "4369:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 40958,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4369:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4350:33:26"
            },
            "returnParameters": {
              "id": 40961,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4399:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 40994,
            "nodeType": "FunctionDefinition",
            "src": "4535:216:26",
            "nodes": [],
            "body": {
              "id": 40993,
              "nodeType": "Block",
              "src": "4631:120:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    40982
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 40982,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "4664:1:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 40993,
                      "src": "4641:24:26",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 40981,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 40980,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "4641:14:26"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 40775,
                          "src": "4641:14:26"
                        },
                        "referencedDeclaration": 40775,
                        "src": "4641:14:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 40985,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 40983,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40786,
                      "src": "4668:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$40775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 40984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4668:20:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4641:47:26"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 40986,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40982,
                          "src": "4705:1:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                            "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                          }
                        },
                        "id": 40987,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4707:18:26",
                        "memberName": "_operatorApprovals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 40772,
                        "src": "4705:20:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                          "typeString": "mapping(address => mapping(address => bool))"
                        }
                      },
                      "id": 40989,
                      "indexExpression": {
                        "id": 40988,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40973,
                        "src": "4726:7:26",
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
                      "src": "4705:29:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 40991,
                    "indexExpression": {
                      "id": 40990,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40975,
                      "src": "4735:8:26",
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
                    "src": "4705:39:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 40979,
                  "id": 40992,
                  "nodeType": "Return",
                  "src": "4698:46:26"
                }
              ]
            },
            "baseFunctions": [
              43497
            ],
            "documentation": {
              "id": 40971,
              "nodeType": "StructuredDocumentation",
              "src": "4474:56:26",
              "text": " @dev See {IERC1155-isApprovedForAll}."
            },
            "functionSelector": "e985e9c5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "4544:16:26",
            "parameters": {
              "id": 40976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40973,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "4569:7:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40994,
                  "src": "4561:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 40972,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4561:7:26",
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
                  "id": 40975,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4586:8:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 40994,
                  "src": "4578:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 40974,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4578:7:26",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4560:35:26"
            },
            "returnParameters": {
              "id": 40979,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40978,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 40994,
                  "src": "4625:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 40977,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4625:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4624:6:26"
            },
            "scope": 41715,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 41038,
            "nodeType": "FunctionDefinition",
            "src": "4818:351:26",
            "nodes": [],
            "body": {
              "id": 41037,
              "nodeType": "Block",
              "src": "4931:238:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41009
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41009,
                      "mutability": "mutable",
                      "name": "sender",
                      "nameLocation": "4949:6:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41037,
                      "src": "4941:14:26",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 41008,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4941:7:26",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41012,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41010,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42823,
                      "src": "4958:10:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 41011,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4958:12:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4941:29:26"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 41021,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 41015,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 41013,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40997,
                        "src": "4984:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 41014,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41009,
                        "src": "4992:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "4984:14:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 41020,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "5002:31:26",
                      "subExpression": {
                        "arguments": [
                          {
                            "id": 41017,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40997,
                            "src": "5020:4:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 41018,
                            "name": "sender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41009,
                            "src": "5026:6:26",
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
                          "id": 41016,
                          "name": "isApprovedForAll",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40994,
                          "src": "5003:16:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address,address) view returns (bool)"
                          }
                        },
                        "id": 41019,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5003:30:26",
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
                    "src": "4984:49:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41028,
                  "nodeType": "IfStatement",
                  "src": "4980:129:26",
                  "trueBody": {
                    "id": 41027,
                    "nodeType": "Block",
                    "src": "5035:74:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 41023,
                              "name": "sender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41009,
                              "src": "5085:6:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 41024,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 40997,
                              "src": "5093:4:26",
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
                            "id": 41022,
                            "name": "ERC1155MissingApprovalForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43387,
                            "src": "5056:28:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$_t_address_$returns$_t_error_$",
                              "typeString": "function (address,address) pure returns (error)"
                            }
                          },
                          "id": 41025,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5056:42:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41026,
                        "nodeType": "RevertStatement",
                        "src": "5049:49:26"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41030,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40997,
                        "src": "5136:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41031,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40999,
                        "src": "5142:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41032,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41001,
                        "src": "5146:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 41033,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41003,
                        "src": "5150:5:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 41034,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41005,
                        "src": "5157:4:26",
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
                      "id": 41029,
                      "name": "_safeTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41394,
                      "src": "5118:17:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256,bytes memory)"
                      }
                    },
                    "id": 41035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5118:44:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41036,
                  "nodeType": "ExpressionStatement",
                  "src": "5118:44:26"
                }
              ]
            },
            "baseFunctions": [
              43511
            ],
            "documentation": {
              "id": 40995,
              "nodeType": "StructuredDocumentation",
              "src": "4757:56:26",
              "text": " @dev See {IERC1155-safeTransferFrom}."
            },
            "functionSelector": "f242432a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "4827:16:26",
            "parameters": {
              "id": 41006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40997,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "4852:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41038,
                  "src": "4844:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 40996,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4844:7:26",
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
                  "id": 40999,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4866:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41038,
                  "src": "4858:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 40998,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4858:7:26",
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
                  "id": 41001,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "4878:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41038,
                  "src": "4870:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41000,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4870:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41003,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4890:5:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41038,
                  "src": "4882:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41002,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4882:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41005,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "4910:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41038,
                  "src": "4897:17:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41004,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4897:5:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4843:72:26"
            },
            "returnParameters": {
              "id": 41007,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4931:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 41084,
            "nodeType": "FunctionDefinition",
            "src": "5241:429:26",
            "nodes": [],
            "body": {
              "id": 41083,
              "nodeType": "Block",
              "src": "5425:245:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41055
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41055,
                      "mutability": "mutable",
                      "name": "sender",
                      "nameLocation": "5443:6:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41083,
                      "src": "5435:14:26",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 41054,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5435:7:26",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41058,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41056,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42823,
                      "src": "5452:10:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 41057,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5452:12:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5435:29:26"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 41067,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 41061,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 41059,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41041,
                        "src": "5478:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 41060,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41055,
                        "src": "5486:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "5478:14:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 41066,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "5496:31:26",
                      "subExpression": {
                        "arguments": [
                          {
                            "id": 41063,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41041,
                            "src": "5514:4:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 41064,
                            "name": "sender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41055,
                            "src": "5520:6:26",
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
                          "id": 41062,
                          "name": "isApprovedForAll",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 40994,
                          "src": "5497:16:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address,address) view returns (bool)"
                          }
                        },
                        "id": 41065,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5497:30:26",
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
                    "src": "5478:49:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41074,
                  "nodeType": "IfStatement",
                  "src": "5474:129:26",
                  "trueBody": {
                    "id": 41073,
                    "nodeType": "Block",
                    "src": "5529:74:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 41069,
                              "name": "sender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41055,
                              "src": "5579:6:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 41070,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41041,
                              "src": "5587:4:26",
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
                            "id": 41068,
                            "name": "ERC1155MissingApprovalForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43387,
                            "src": "5550:28:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$_t_address_$returns$_t_error_$",
                              "typeString": "function (address,address) pure returns (error)"
                            }
                          },
                          "id": 41071,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5550:42:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41072,
                        "nodeType": "RevertStatement",
                        "src": "5543:49:26"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41076,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41041,
                        "src": "5635:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41077,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41043,
                        "src": "5641:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41078,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41046,
                        "src": "5645:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41079,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41049,
                        "src": "5650:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41080,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41051,
                        "src": "5658:4:26",
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
                      "id": 41075,
                      "name": "_safeBatchTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41449,
                      "src": "5612:22:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 41081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5612:51:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41082,
                  "nodeType": "ExpressionStatement",
                  "src": "5612:51:26"
                }
              ]
            },
            "baseFunctions": [
              43527
            ],
            "documentation": {
              "id": 41039,
              "nodeType": "StructuredDocumentation",
              "src": "5175:61:26",
              "text": " @dev See {IERC1155-safeBatchTransferFrom}."
            },
            "functionSelector": "2eb2c2d6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeBatchTransferFrom",
            "nameLocation": "5250:21:26",
            "parameters": {
              "id": 41052,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41041,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "5289:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41084,
                  "src": "5281:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41040,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5281:7:26",
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
                  "id": 41043,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "5311:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41084,
                  "src": "5303:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5303:7:26",
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
                  "id": 41046,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "5340:3:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41084,
                  "src": "5323:20:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41044,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5323:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41045,
                    "nodeType": "ArrayTypeName",
                    "src": "5323:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41049,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "5370:6:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41084,
                  "src": "5353:23:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41047,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5353:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41048,
                    "nodeType": "ArrayTypeName",
                    "src": "5353:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41051,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "5399:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41084,
                  "src": "5386:17:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41050,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5386:5:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5271:138:26"
            },
            "returnParameters": {
              "id": 41053,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5425:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 41248,
            "nodeType": "FunctionDefinition",
            "src": "6371:1344:26",
            "nodes": [],
            "body": {
              "id": 41247,
              "nodeType": "Block",
              "src": "6478:1237:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41100
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41100,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "6511:1:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41247,
                      "src": "6488:24:26",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 41099,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 41098,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "6488:14:26"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 40775,
                          "src": "6488:14:26"
                        },
                        "referencedDeclaration": 40775,
                        "src": "6488:14:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41103,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41101,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40786,
                      "src": "6515:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$40775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 41102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6515:20:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6488:47:26"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 41108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 41104,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41092,
                        "src": "6549:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 41105,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6553:6:26",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6549:10:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 41106,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41095,
                        "src": "6563:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 41107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6570:6:26",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6563:13:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6549:27:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41117,
                  "nodeType": "IfStatement",
                  "src": "6545:117:26",
                  "trueBody": {
                    "id": 41116,
                    "nodeType": "Block",
                    "src": "6578:84:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 41110,
                                "name": "ids",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41092,
                                "src": "6625:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 41111,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6629:6:26",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "6625:10:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 41112,
                                "name": "values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41095,
                                "src": "6637:6:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 41113,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6644:6:26",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "6637:13:26",
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
                            "id": 41109,
                            "name": "ERC1155InvalidArrayLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43404,
                            "src": "6599:25:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256,uint256) pure returns (error)"
                            }
                          },
                          "id": 41114,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6599:52:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41115,
                        "nodeType": "RevertStatement",
                        "src": "6592:59:26"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    41119
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41119,
                      "mutability": "mutable",
                      "name": "operator",
                      "nameLocation": "6680:8:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41247,
                      "src": "6672:16:26",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 41118,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6672:7:26",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41122,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41120,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42823,
                      "src": "6691:10:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 41121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6691:12:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6672:31:26"
                },
                {
                  "body": {
                    "id": 41208,
                    "nodeType": "Block",
                    "src": "6755:656:26",
                    "statements": [
                      {
                        "assignments": [
                          41135
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 41135,
                            "mutability": "mutable",
                            "name": "id",
                            "nameLocation": "6777:2:26",
                            "nodeType": "VariableDeclaration",
                            "scope": 41208,
                            "src": "6769:10:26",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 41134,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6769:7:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 41140,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 41138,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41124,
                              "src": "6805:1:26",
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
                              "id": 41136,
                              "name": "ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41092,
                              "src": "6782:3:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 41137,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6786:18:26",
                            "memberName": "unsafeMemoryAccess",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 45443,
                            "src": "6782:22:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 41139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6782:25:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6769:38:26"
                      },
                      {
                        "assignments": [
                          41142
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 41142,
                            "mutability": "mutable",
                            "name": "value",
                            "nameLocation": "6829:5:26",
                            "nodeType": "VariableDeclaration",
                            "scope": 41208,
                            "src": "6821:13:26",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 41141,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6821:7:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 41147,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 41145,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41124,
                              "src": "6863:1:26",
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
                              "id": 41143,
                              "name": "values",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41095,
                              "src": "6837:6:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 41144,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6844:18:26",
                            "memberName": "unsafeMemoryAccess",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 45443,
                            "src": "6837:25:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 41146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6837:28:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6821:44:26"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 41153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 41148,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41087,
                            "src": "6884:4:26",
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
                                "id": 41151,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6900:1:26",
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
                              "id": 41150,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "6892:7:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 41149,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "6892:7:26",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 41152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6892:10:26",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "6884:18:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 41189,
                        "nodeType": "IfStatement",
                        "src": "6880:424:26",
                        "trueBody": {
                          "id": 41188,
                          "nodeType": "Block",
                          "src": "6904:400:26",
                          "statements": [
                            {
                              "assignments": [
                                41155
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 41155,
                                  "mutability": "mutable",
                                  "name": "fromBalance",
                                  "nameLocation": "6930:11:26",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 41188,
                                  "src": "6922:19:26",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "typeName": {
                                    "id": 41154,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6922:7:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 41162,
                              "initialValue": {
                                "baseExpression": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 41156,
                                      "name": "$",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 41100,
                                      "src": "6944:1:26",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                                      }
                                    },
                                    "id": 41157,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "6946:9:26",
                                    "memberName": "_balances",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 40766,
                                    "src": "6944:11:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                      "typeString": "mapping(uint256 => mapping(address => uint256))"
                                    }
                                  },
                                  "id": 41159,
                                  "indexExpression": {
                                    "id": 41158,
                                    "name": "id",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41135,
                                    "src": "6956:2:26",
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
                                  "src": "6944:15:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 41161,
                                "indexExpression": {
                                  "id": 41160,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 41087,
                                  "src": "6960:4:26",
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
                                "src": "6944:21:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "6922:43:26"
                            },
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 41165,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 41163,
                                  "name": "fromBalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 41155,
                                  "src": "6987:11:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "id": 41164,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 41142,
                                  "src": "7001:5:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "6987:19:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 41174,
                              "nodeType": "IfStatement",
                              "src": "6983:129:26",
                              "trueBody": {
                                "id": 41173,
                                "nodeType": "Block",
                                "src": "7008:104:26",
                                "statements": [
                                  {
                                    "errorCall": {
                                      "arguments": [
                                        {
                                          "id": 41167,
                                          "name": "from",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 41087,
                                          "src": "7064:4:26",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        {
                                          "id": 41168,
                                          "name": "fromBalance",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 41155,
                                          "src": "7070:11:26",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        {
                                          "id": 41169,
                                          "name": "value",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 41142,
                                          "src": "7083:5:26",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        {
                                          "id": 41170,
                                          "name": "id",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 41135,
                                          "src": "7090:2:26",
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
                                        "id": 41166,
                                        "name": "ERC1155InsufficientBalance",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 43370,
                                        "src": "7037:26:26",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_error_$",
                                          "typeString": "function (address,uint256,uint256,uint256) pure returns (error)"
                                        }
                                      },
                                      "id": 41171,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "7037:56:26",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_error",
                                        "typeString": "error"
                                      }
                                    },
                                    "id": 41172,
                                    "nodeType": "RevertStatement",
                                    "src": "7030:63:26"
                                  }
                                ]
                              }
                            },
                            {
                              "id": 41187,
                              "nodeType": "UncheckedBlock",
                              "src": "7129:161:26",
                              "statements": [
                                {
                                  "expression": {
                                    "id": 41185,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftHandSide": {
                                      "baseExpression": {
                                        "baseExpression": {
                                          "expression": {
                                            "id": 41175,
                                            "name": "$",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 41100,
                                            "src": "7228:1:26",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                                              "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                                            }
                                          },
                                          "id": 41179,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "7230:9:26",
                                          "memberName": "_balances",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 40766,
                                          "src": "7228:11:26",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                                          }
                                        },
                                        "id": 41180,
                                        "indexExpression": {
                                          "id": 41177,
                                          "name": "id",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 41135,
                                          "src": "7240:2:26",
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
                                        "src": "7228:15:26",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                          "typeString": "mapping(address => uint256)"
                                        }
                                      },
                                      "id": 41181,
                                      "indexExpression": {
                                        "id": 41178,
                                        "name": "from",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 41087,
                                        "src": "7244:4:26",
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
                                      "src": "7228:21:26",
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
                                      "id": 41184,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 41182,
                                        "name": "fromBalance",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 41155,
                                        "src": "7252:11:26",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 41183,
                                        "name": "value",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 41142,
                                        "src": "7266:5:26",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "7252:19:26",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "7228:43:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 41186,
                                  "nodeType": "ExpressionStatement",
                                  "src": "7228:43:26"
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
                          "id": 41195,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 41190,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41089,
                            "src": "7322:2:26",
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
                                "id": 41193,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7336:1:26",
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
                              "id": 41192,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "7328:7:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 41191,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "7328:7:26",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 41194,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7328:10:26",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "7322:16:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 41207,
                        "nodeType": "IfStatement",
                        "src": "7318:83:26",
                        "trueBody": {
                          "id": 41206,
                          "nodeType": "Block",
                          "src": "7340:61:26",
                          "statements": [
                            {
                              "expression": {
                                "id": 41204,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "baseExpression": {
                                      "expression": {
                                        "id": 41196,
                                        "name": "$",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 41100,
                                        "src": "7358:1:26",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                                        }
                                      },
                                      "id": 41200,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "7360:9:26",
                                      "memberName": "_balances",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 40766,
                                      "src": "7358:11:26",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(uint256 => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 41201,
                                    "indexExpression": {
                                      "id": 41198,
                                      "name": "id",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 41135,
                                      "src": "7370:2:26",
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
                                    "src": "7358:15:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 41202,
                                  "indexExpression": {
                                    "id": 41199,
                                    "name": "to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41089,
                                    "src": "7374:2:26",
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
                                  "src": "7358:19:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "id": 41203,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 41142,
                                  "src": "7381:5:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7358:28:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 41205,
                              "nodeType": "ExpressionStatement",
                              "src": "7358:28:26"
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
                    "id": 41130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41127,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41124,
                      "src": "6734:1:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 41128,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41092,
                        "src": "6738:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 41129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6742:6:26",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6738:10:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6734:14:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41209,
                  "initializationExpression": {
                    "assignments": [
                      41124
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 41124,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6727:1:26",
                        "nodeType": "VariableDeclaration",
                        "scope": 41209,
                        "src": "6719:9:26",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 41123,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6719:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 41126,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 41125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6731:1:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6719:13:26"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 41132,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "6750:3:26",
                      "subExpression": {
                        "id": 41131,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41124,
                        "src": "6752:1:26",
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
                    "id": 41133,
                    "nodeType": "ExpressionStatement",
                    "src": "6750:3:26"
                  },
                  "nodeType": "ForStatement",
                  "src": "6714:697:26"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 41213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 41210,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41092,
                        "src": "7425:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 41211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7429:6:26",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "7425:10:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 41212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7439:1:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "7425:15:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 41245,
                    "nodeType": "Block",
                    "src": "7633:76:26",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 41238,
                              "name": "operator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41119,
                              "src": "7666:8:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 41239,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41087,
                              "src": "7676:4:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 41240,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41089,
                              "src": "7682:2:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 41241,
                              "name": "ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41092,
                              "src": "7686:3:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            {
                              "id": 41242,
                              "name": "values",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41095,
                              "src": "7691:6:26",
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
                            "id": 41237,
                            "name": "TransferBatch",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43440,
                            "src": "7652:13:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                              "typeString": "function (address,address,address,uint256[] memory,uint256[] memory)"
                            }
                          },
                          "id": 41243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7652:46:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 41244,
                        "nodeType": "EmitStatement",
                        "src": "7647:51:26"
                      }
                    ]
                  },
                  "id": 41246,
                  "nodeType": "IfStatement",
                  "src": "7421:288:26",
                  "trueBody": {
                    "id": 41236,
                    "nodeType": "Block",
                    "src": "7442:185:26",
                    "statements": [
                      {
                        "assignments": [
                          41215
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 41215,
                            "mutability": "mutable",
                            "name": "id",
                            "nameLocation": "7464:2:26",
                            "nodeType": "VariableDeclaration",
                            "scope": 41236,
                            "src": "7456:10:26",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 41214,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "7456:7:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 41220,
                        "initialValue": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 41218,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7492:1:26",
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
                              "id": 41216,
                              "name": "ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41092,
                              "src": "7469:3:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 41217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7473:18:26",
                            "memberName": "unsafeMemoryAccess",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 45443,
                            "src": "7469:22:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 41219,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7469:25:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7456:38:26"
                      },
                      {
                        "assignments": [
                          41222
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 41222,
                            "mutability": "mutable",
                            "name": "value",
                            "nameLocation": "7516:5:26",
                            "nodeType": "VariableDeclaration",
                            "scope": 41236,
                            "src": "7508:13:26",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 41221,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "7508:7:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 41227,
                        "initialValue": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 41225,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7550:1:26",
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
                              "id": 41223,
                              "name": "values",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41095,
                              "src": "7524:6:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 41224,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7531:18:26",
                            "memberName": "unsafeMemoryAccess",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 45443,
                            "src": "7524:25:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 41226,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7524:28:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7508:44:26"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 41229,
                              "name": "operator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41119,
                              "src": "7586:8:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 41230,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41087,
                              "src": "7596:4:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 41231,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41089,
                              "src": "7602:2:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 41232,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41215,
                              "src": "7606:2:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 41233,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41222,
                              "src": "7610:5:26",
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
                            "id": 41228,
                            "name": "TransferSingle",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43425,
                            "src": "7571:14:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,address,uint256,uint256)"
                            }
                          },
                          "id": 41234,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7571:45:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 41235,
                        "nodeType": "EmitStatement",
                        "src": "7566:50:26"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 41085,
              "nodeType": "StructuredDocumentation",
              "src": "5676:690:26",
              "text": " @dev Transfers a `value` amount of tokens of type `id` from `from` to `to`. Will mint (or burn) if `from`\n (or `to`) is the zero address.\n Emits a {TransferSingle} event if the arrays contain one element, and {TransferBatch} otherwise.\n Requirements:\n - If `to` refers to a smart contract, it must implement either {IERC1155Receiver-onERC1155Received}\n   or {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.\n - `ids` and `values` must have the same length.\n NOTE: The ERC-1155 acceptance check is not performed in this function. See {_updateWithAcceptanceCheck} instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_update",
            "nameLocation": "6380:7:26",
            "parameters": {
              "id": 41096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41087,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6396:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41248,
                  "src": "6388:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41086,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6388:7:26",
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
                  "id": 41089,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6410:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41248,
                  "src": "6402:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41088,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6402:7:26",
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
                  "id": 41092,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "6431:3:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41248,
                  "src": "6414:20:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41090,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6414:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41091,
                    "nodeType": "ArrayTypeName",
                    "src": "6414:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41095,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "6453:6:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41248,
                  "src": "6436:23:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41093,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6436:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41094,
                    "nodeType": "ArrayTypeName",
                    "src": "6436:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6387:73:26"
            },
            "returnParameters": {
              "id": 41097,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6478:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 41328,
            "nodeType": "FunctionDefinition",
            "src": "8294:700:26",
            "nodes": [],
            "body": {
              "id": 41327,
              "nodeType": "Block",
              "src": "8485:509:26",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41265,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41251,
                        "src": "8503:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41266,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41253,
                        "src": "8509:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41267,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41256,
                        "src": "8513:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41268,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41259,
                        "src": "8518:6:26",
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
                      "id": 41264,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41248,
                      "src": "8495:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory)"
                      }
                    },
                    "id": 41269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8495:30:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41270,
                  "nodeType": "ExpressionStatement",
                  "src": "8495:30:26"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 41276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41271,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41253,
                      "src": "8539:2:26",
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
                          "id": 41274,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8553:1:26",
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
                        "id": 41273,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8545:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41272,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "8545:7:26",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41275,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8545:10:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8539:16:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41326,
                  "nodeType": "IfStatement",
                  "src": "8535:453:26",
                  "trueBody": {
                    "id": 41325,
                    "nodeType": "Block",
                    "src": "8557:431:26",
                    "statements": [
                      {
                        "assignments": [
                          41278
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 41278,
                            "mutability": "mutable",
                            "name": "operator",
                            "nameLocation": "8579:8:26",
                            "nodeType": "VariableDeclaration",
                            "scope": 41325,
                            "src": "8571:16:26",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 41277,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8571:7:26",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 41281,
                        "initialValue": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 41279,
                            "name": "_msgSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42823,
                            "src": "8590:10:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                              "typeString": "function () view returns (address)"
                            }
                          },
                          "id": 41280,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8590:12:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "8571:31:26"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 41285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 41282,
                              "name": "ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41256,
                              "src": "8620:3:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 41283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8624:6:26",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "8620:10:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 41284,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8634:1:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "8620:15:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 41323,
                          "nodeType": "Block",
                          "src": "8866:112:26",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 41315,
                                    "name": "operator",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41278,
                                    "src": "8925:8:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 41316,
                                    "name": "from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41251,
                                    "src": "8935:4:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 41317,
                                    "name": "to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41253,
                                    "src": "8941:2:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 41318,
                                    "name": "ids",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41256,
                                    "src": "8945:3:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  {
                                    "id": 41319,
                                    "name": "values",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41259,
                                    "src": "8950:6:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  {
                                    "id": 41320,
                                    "name": "data",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41261,
                                    "src": "8958:4:26",
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
                                    "id": 41312,
                                    "name": "ERC1155Utils",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 43740,
                                    "src": "8884:12:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_ERC1155Utils_$43740_$",
                                      "typeString": "type(library ERC1155Utils)"
                                    }
                                  },
                                  "id": 41314,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8897:27:26",
                                  "memberName": "checkOnERC1155BatchReceived",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 43739,
                                  "src": "8884:40:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                                    "typeString": "function (address,address,address,uint256[] memory,uint256[] memory,bytes memory)"
                                  }
                                },
                                "id": 41321,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8884:79:26",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 41322,
                              "nodeType": "ExpressionStatement",
                              "src": "8884:79:26"
                            }
                          ]
                        },
                        "id": 41324,
                        "nodeType": "IfStatement",
                        "src": "8616:362:26",
                        "trueBody": {
                          "id": 41311,
                          "nodeType": "Block",
                          "src": "8637:223:26",
                          "statements": [
                            {
                              "assignments": [
                                41287
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 41287,
                                  "mutability": "mutable",
                                  "name": "id",
                                  "nameLocation": "8663:2:26",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 41311,
                                  "src": "8655:10:26",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "typeName": {
                                    "id": 41286,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8655:7:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 41292,
                              "initialValue": {
                                "arguments": [
                                  {
                                    "hexValue": "30",
                                    "id": 41290,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "8691:1:26",
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
                                    "id": 41288,
                                    "name": "ids",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41256,
                                    "src": "8668:3:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 41289,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8672:18:26",
                                  "memberName": "unsafeMemoryAccess",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 45443,
                                  "src": "8668:22:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                    "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 41291,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8668:25:26",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "8655:38:26"
                            },
                            {
                              "assignments": [
                                41294
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 41294,
                                  "mutability": "mutable",
                                  "name": "value",
                                  "nameLocation": "8719:5:26",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 41311,
                                  "src": "8711:13:26",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "typeName": {
                                    "id": 41293,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8711:7:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 41299,
                              "initialValue": {
                                "arguments": [
                                  {
                                    "hexValue": "30",
                                    "id": 41297,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "8753:1:26",
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
                                    "id": 41295,
                                    "name": "values",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41259,
                                    "src": "8727:6:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 41296,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8734:18:26",
                                  "memberName": "unsafeMemoryAccess",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 45443,
                                  "src": "8727:25:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$dyn_memory_ptr_$_t_uint256_$returns$_t_uint256_$attached_to$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                    "typeString": "function (uint256[] memory,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 41298,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8727:28:26",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "8711:44:26"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 41303,
                                    "name": "operator",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41278,
                                    "src": "8809:8:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 41304,
                                    "name": "from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41251,
                                    "src": "8819:4:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 41305,
                                    "name": "to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41253,
                                    "src": "8825:2:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 41306,
                                    "name": "id",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41287,
                                    "src": "8829:2:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 41307,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41294,
                                    "src": "8833:5:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 41308,
                                    "name": "data",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41261,
                                    "src": "8840:4:26",
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
                                    "id": 41300,
                                    "name": "ERC1155Utils",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 43740,
                                    "src": "8773:12:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_ERC1155Utils_$43740_$",
                                      "typeString": "type(library ERC1155Utils)"
                                    }
                                  },
                                  "id": 41302,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8786:22:26",
                                  "memberName": "checkOnERC1155Received",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 43665,
                                  "src": "8773:35:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                                    "typeString": "function (address,address,address,uint256,uint256,bytes memory)"
                                  }
                                },
                                "id": 41309,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8773:72:26",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 41310,
                              "nodeType": "ExpressionStatement",
                              "src": "8773:72:26"
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
              "id": 41249,
              "nodeType": "StructuredDocumentation",
              "src": "7721:568:26",
              "text": " @dev Version of {_update} that performs the token acceptance check by calling\n {IERC1155Receiver-onERC1155Received} or {IERC1155Receiver-onERC1155BatchReceived} on the receiver address if it\n contains code (eg. is a smart contract at the moment of execution).\n IMPORTANT: Overriding this function is discouraged because it poses a reentrancy risk from the receiver. So any\n update to the contract state after this function would break the check-effect-interaction pattern. Consider\n overriding {_update} instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_updateWithAcceptanceCheck",
            "nameLocation": "8303:26:26",
            "parameters": {
              "id": 41262,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41251,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "8347:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41328,
                  "src": "8339:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41250,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8339:7:26",
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
                  "id": 41253,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "8369:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41328,
                  "src": "8361:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41252,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8361:7:26",
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
                  "id": 41256,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "8398:3:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41328,
                  "src": "8381:20:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41254,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8381:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41255,
                    "nodeType": "ArrayTypeName",
                    "src": "8381:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41259,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "8428:6:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41328,
                  "src": "8411:23:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41257,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8411:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41258,
                    "nodeType": "ArrayTypeName",
                    "src": "8411:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41261,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8457:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41328,
                  "src": "8444:17:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41260,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8444:5:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8329:138:26"
            },
            "returnParameters": {
              "id": 41263,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8485:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 41394,
            "nodeType": "FunctionDefinition",
            "src": "9451:463:26",
            "nodes": [],
            "body": {
              "id": 41393,
              "nodeType": "Block",
              "src": "9559:355:26",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 41347,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41342,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41333,
                      "src": "9573:2:26",
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
                          "id": 41345,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9587:1:26",
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
                        "id": 41344,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9579:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41343,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9579:7:26",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9579:10:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9573:16:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41356,
                  "nodeType": "IfStatement",
                  "src": "9569:88:26",
                  "trueBody": {
                    "id": 41355,
                    "nodeType": "Block",
                    "src": "9591:66:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41351,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "9643:1:26",
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
                                "id": 41350,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9635:7:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41349,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9635:7:26",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41352,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9635:10:26",
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
                            "id": 41348,
                            "name": "ERC1155InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43380,
                            "src": "9612:22:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 41353,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9612:34:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41354,
                        "nodeType": "RevertStatement",
                        "src": "9605:41:26"
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
                    "id": 41362,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41357,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41331,
                      "src": "9670:4:26",
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
                          "id": 41360,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9686:1:26",
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
                        "id": 41359,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9678:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41358,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9678:7:26",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9678:10:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9670:18:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41371,
                  "nodeType": "IfStatement",
                  "src": "9666:88:26",
                  "trueBody": {
                    "id": 41370,
                    "nodeType": "Block",
                    "src": "9690:64:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41366,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "9740:1:26",
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
                                "id": 41365,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9732:7:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41364,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9732:7:26",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41367,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9732:10:26",
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
                            "id": 41363,
                            "name": "ERC1155InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43375,
                            "src": "9711:20:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 41368,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9711:32:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41369,
                        "nodeType": "RevertStatement",
                        "src": "9704:39:26"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    41376,
                    41379
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41376,
                      "mutability": "mutable",
                      "name": "ids",
                      "nameLocation": "9781:3:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41393,
                      "src": "9764:20:26",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 41374,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "9764:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 41375,
                        "nodeType": "ArrayTypeName",
                        "src": "9764:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 41379,
                      "mutability": "mutable",
                      "name": "values",
                      "nameLocation": "9803:6:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41393,
                      "src": "9786:23:26",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 41377,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "9786:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 41378,
                        "nodeType": "ArrayTypeName",
                        "src": "9786:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41384,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 41381,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41335,
                        "src": "9832:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 41382,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41337,
                        "src": "9836:5:26",
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
                      "id": 41380,
                      "name": "_asSingletonArrays",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41714,
                      "src": "9813:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256[] memory,uint256[] memory)"
                      }
                    },
                    "id": 41383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9813:29:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(uint256[] memory,uint256[] memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9763:79:26"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41386,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41331,
                        "src": "9879:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41387,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41333,
                        "src": "9885:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41388,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41376,
                        "src": "9889:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41389,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41379,
                        "src": "9894:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41390,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41339,
                        "src": "9902:4:26",
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
                      "id": 41385,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41328,
                      "src": "9852:26:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 41391,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9852:55:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41392,
                  "nodeType": "ExpressionStatement",
                  "src": "9852:55:26"
                }
              ]
            },
            "documentation": {
              "id": 41329,
              "nodeType": "StructuredDocumentation",
              "src": "9000:446:26",
              "text": " @dev Transfers a `value` tokens of token type `id` from `from` to `to`.\n Emits a {TransferSingle} event.\n Requirements:\n - `to` cannot be the zero address.\n - `from` must have a balance of tokens of type `id` of at least `value` amount.\n - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n acceptance magic value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeTransferFrom",
            "nameLocation": "9460:17:26",
            "parameters": {
              "id": 41340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41331,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "9486:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41394,
                  "src": "9478:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41330,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9478:7:26",
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
                  "id": 41333,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "9500:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41394,
                  "src": "9492:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41332,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9492:7:26",
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
                  "id": 41335,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "9512:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41394,
                  "src": "9504:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41334,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9504:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41337,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9524:5:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41394,
                  "src": "9516:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41336,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9516:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41339,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "9544:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41394,
                  "src": "9531:17:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41338,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "9531:5:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9477:72:26"
            },
            "returnParameters": {
              "id": 41341,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9559:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41449,
            "nodeType": "FunctionDefinition",
            "src": "10315:445:26",
            "nodes": [],
            "body": {
              "id": 41448,
              "nodeType": "Block",
              "src": "10494:266:26",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 41415,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41410,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41399,
                      "src": "10508:2:26",
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
                          "id": 41413,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10522:1:26",
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
                        "id": 41412,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10514:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41411,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10514:7:26",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41414,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10514:10:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10508:16:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41424,
                  "nodeType": "IfStatement",
                  "src": "10504:88:26",
                  "trueBody": {
                    "id": 41423,
                    "nodeType": "Block",
                    "src": "10526:66:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41419,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10578:1:26",
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
                                "id": 41418,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10570:7:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41417,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10570:7:26",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41420,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10570:10:26",
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
                            "id": 41416,
                            "name": "ERC1155InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43380,
                            "src": "10547:22:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 41421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10547:34:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41422,
                        "nodeType": "RevertStatement",
                        "src": "10540:41:26"
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
                    "id": 41430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41425,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41397,
                      "src": "10605:4:26",
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
                          "id": 41428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10621:1:26",
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
                        "id": 41427,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10613:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41426,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10613:7:26",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41429,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10613:10:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10605:18:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41439,
                  "nodeType": "IfStatement",
                  "src": "10601:88:26",
                  "trueBody": {
                    "id": 41438,
                    "nodeType": "Block",
                    "src": "10625:64:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41434,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10675:1:26",
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
                                "id": 41433,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10667:7:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41432,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10667:7:26",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41435,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10667:10:26",
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
                            "id": 41431,
                            "name": "ERC1155InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43375,
                            "src": "10646:20:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 41436,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10646:32:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41437,
                        "nodeType": "RevertStatement",
                        "src": "10639:39:26"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41441,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41397,
                        "src": "10725:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41442,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41399,
                        "src": "10731:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41443,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41402,
                        "src": "10735:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41444,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41405,
                        "src": "10740:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41445,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41407,
                        "src": "10748:4:26",
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
                      "id": 41440,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41328,
                      "src": "10698:26:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 41446,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10698:55:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41447,
                  "nodeType": "ExpressionStatement",
                  "src": "10698:55:26"
                }
              ]
            },
            "documentation": {
              "id": 41395,
              "nodeType": "StructuredDocumentation",
              "src": "9920:390:26",
              "text": " @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.\n Emits a {TransferBatch} event.\n Requirements:\n - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n acceptance magic value.\n - `ids` and `values` must have the same length."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_safeBatchTransferFrom",
            "nameLocation": "10324:22:26",
            "parameters": {
              "id": 41408,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41397,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "10364:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41449,
                  "src": "10356:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10356:7:26",
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
                  "id": 41399,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "10386:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41449,
                  "src": "10378:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10378:7:26",
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
                  "id": 41402,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "10415:3:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41449,
                  "src": "10398:20:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41400,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10398:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41401,
                    "nodeType": "ArrayTypeName",
                    "src": "10398:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41405,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "10445:6:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41449,
                  "src": "10428:23:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41403,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10428:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41404,
                    "nodeType": "ArrayTypeName",
                    "src": "10428:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41407,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "10474:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41449,
                  "src": "10461:17:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41406,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "10461:5:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10346:138:26"
            },
            "returnParameters": {
              "id": 41409,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10494:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41468,
            "nodeType": "FunctionDefinition",
            "src": "11582:145:26",
            "nodes": [],
            "body": {
              "id": 41467,
              "nodeType": "Block",
              "src": "11638:89:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41457
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41457,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "11671:1:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41467,
                      "src": "11648:24:26",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 41456,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 41455,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "11648:14:26"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 40775,
                          "src": "11648:14:26"
                        },
                        "referencedDeclaration": 40775,
                        "src": "11648:14:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41460,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41458,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40786,
                      "src": "11675:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$40775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 41459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11675:20:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11648:47:26"
                },
                {
                  "expression": {
                    "id": 41465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 41461,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41457,
                        "src": "11705:1:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                        }
                      },
                      "id": 41463,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "11707:4:26",
                      "memberName": "_uri",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 40774,
                      "src": "11705:6:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 41464,
                      "name": "newuri",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41452,
                      "src": "11714:6:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "11705:15:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 41466,
                  "nodeType": "ExpressionStatement",
                  "src": "11705:15:26"
                }
              ]
            },
            "documentation": {
              "id": 41450,
              "nodeType": "StructuredDocumentation",
              "src": "10766:811:26",
              "text": " @dev Sets a new URI for all token types, by relying on the token type ID\n substitution mechanism\n https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the ERC].\n By this mechanism, any occurrence of the `\\{id\\}` substring in either the\n URI or any of the values in the JSON file at said URI will be replaced by\n clients with the token type ID.\n For example, the `https://token-cdn-domain/\\{id\\}.json` URI would be\n interpreted by clients as\n `https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`\n for token type ID 0x4cce0.\n See {uri}.\n Because these URIs cannot be meaningfully represented by the {URI} event,\n this function emits no events."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setURI",
            "nameLocation": "11591:7:26",
            "parameters": {
              "id": 41453,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41452,
                  "mutability": "mutable",
                  "name": "newuri",
                  "nameLocation": "11613:6:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41468,
                  "src": "11599:20:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41451,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11599:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11598:22:26"
            },
            "returnParameters": {
              "id": 41454,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11638:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 41520,
            "nodeType": "FunctionDefinition",
            "src": "12105:346:26",
            "nodes": [],
            "body": {
              "id": 41519,
              "nodeType": "Block",
              "src": "12187:264:26",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 41485,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41480,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41471,
                      "src": "12201:2:26",
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
                          "id": 41483,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12215:1:26",
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
                        "id": 41482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "12207:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41481,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "12207:7:26",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12207:10:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "12201:16:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41494,
                  "nodeType": "IfStatement",
                  "src": "12197:88:26",
                  "trueBody": {
                    "id": 41493,
                    "nodeType": "Block",
                    "src": "12219:66:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41489,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12271:1:26",
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
                                "id": 41488,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "12263:7:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41487,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "12263:7:26",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41490,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "12263:10:26",
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
                            "id": 41486,
                            "name": "ERC1155InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43380,
                            "src": "12240:22:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 41491,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12240:34:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41492,
                        "nodeType": "RevertStatement",
                        "src": "12233:41:26"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    41499,
                    41502
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41499,
                      "mutability": "mutable",
                      "name": "ids",
                      "nameLocation": "12312:3:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41519,
                      "src": "12295:20:26",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 41497,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12295:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 41498,
                        "nodeType": "ArrayTypeName",
                        "src": "12295:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 41502,
                      "mutability": "mutable",
                      "name": "values",
                      "nameLocation": "12334:6:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41519,
                      "src": "12317:23:26",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 41500,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12317:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 41501,
                        "nodeType": "ArrayTypeName",
                        "src": "12317:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41507,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 41504,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41473,
                        "src": "12363:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 41505,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41475,
                        "src": "12367:5:26",
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
                      "id": 41503,
                      "name": "_asSingletonArrays",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41714,
                      "src": "12344:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256[] memory,uint256[] memory)"
                      }
                    },
                    "id": 41506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12344:29:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(uint256[] memory,uint256[] memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12294:79:26"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 41511,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12418:1:26",
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
                          "id": 41510,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12410:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 41509,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12410:7:26",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 41512,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12410:10:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41513,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41471,
                        "src": "12422:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41514,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41499,
                        "src": "12426:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41515,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41502,
                        "src": "12431:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41516,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41477,
                        "src": "12439:4:26",
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
                      "id": 41508,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41328,
                      "src": "12383:26:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 41517,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12383:61:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41518,
                  "nodeType": "ExpressionStatement",
                  "src": "12383:61:26"
                }
              ]
            },
            "documentation": {
              "id": 41469,
              "nodeType": "StructuredDocumentation",
              "src": "11733:367:26",
              "text": " @dev Creates a `value` amount of tokens of type `id`, and assigns them to `to`.\n Emits a {TransferSingle} event.\n Requirements:\n - `to` cannot be the zero address.\n - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n acceptance magic value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mint",
            "nameLocation": "12114:5:26",
            "parameters": {
              "id": 41478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41471,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "12128:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41520,
                  "src": "12120:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41470,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12120:7:26",
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
                  "id": 41473,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "12140:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41520,
                  "src": "12132:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41472,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12132:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41475,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12152:5:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41520,
                  "src": "12144:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41474,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12144:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41477,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "12172:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41520,
                  "src": "12159:17:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41476,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12159:5:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12119:58:26"
            },
            "returnParameters": {
              "id": 41479,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12187:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41561,
            "nodeType": "FunctionDefinition",
            "src": "12882:282:26",
            "nodes": [],
            "body": {
              "id": 41560,
              "nodeType": "Block",
              "src": "12989:175:26",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 41539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41534,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41523,
                      "src": "13003:2:26",
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
                          "id": 41537,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13017:1:26",
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
                        "id": 41536,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13009:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41535,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13009:7:26",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41538,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13009:10:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13003:16:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41548,
                  "nodeType": "IfStatement",
                  "src": "12999:88:26",
                  "trueBody": {
                    "id": 41547,
                    "nodeType": "Block",
                    "src": "13021:66:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41543,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "13073:1:26",
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
                                "id": 41542,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "13065:7:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41541,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "13065:7:26",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41544,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13065:10:26",
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
                            "id": 41540,
                            "name": "ERC1155InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43380,
                            "src": "13042:22:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 41545,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13042:34:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41546,
                        "nodeType": "RevertStatement",
                        "src": "13035:41:26"
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
                            "id": 41552,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13131:1:26",
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
                          "id": 41551,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13123:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 41550,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13123:7:26",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 41553,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13123:10:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41554,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41523,
                        "src": "13135:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41555,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41526,
                        "src": "13139:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41556,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41529,
                        "src": "13144:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41557,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41531,
                        "src": "13152:4:26",
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
                      "id": 41549,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41328,
                      "src": "13096:26:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 41558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13096:61:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41559,
                  "nodeType": "ExpressionStatement",
                  "src": "13096:61:26"
                }
              ]
            },
            "documentation": {
              "id": 41521,
              "nodeType": "StructuredDocumentation",
              "src": "12457:420:26",
              "text": " @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.\n Emits a {TransferBatch} event.\n Requirements:\n - `ids` and `values` must have the same length.\n - `to` cannot be the zero address.\n - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n acceptance magic value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mintBatch",
            "nameLocation": "12891:10:26",
            "parameters": {
              "id": 41532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41523,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "12910:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41561,
                  "src": "12902:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41522,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12902:7:26",
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
                  "id": 41526,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "12931:3:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41561,
                  "src": "12914:20:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41524,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "12914:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41525,
                    "nodeType": "ArrayTypeName",
                    "src": "12914:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41529,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "12953:6:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41561,
                  "src": "12936:23:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41527,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "12936:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41528,
                    "nodeType": "ArrayTypeName",
                    "src": "12936:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41531,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "12974:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41561,
                  "src": "12961:17:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41530,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12961:5:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12901:78:26"
            },
            "returnParameters": {
              "id": 41533,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12989:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41611,
            "nodeType": "FunctionDefinition",
            "src": "13458:329:26",
            "nodes": [],
            "body": {
              "id": 41610,
              "nodeType": "Block",
              "src": "13523:264:26",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 41576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41571,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41564,
                      "src": "13537:4:26",
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
                          "id": 41574,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13553:1:26",
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
                        "id": 41573,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13545:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41572,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "13545:7:26",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41575,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13545:10:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "13537:18:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41585,
                  "nodeType": "IfStatement",
                  "src": "13533:88:26",
                  "trueBody": {
                    "id": 41584,
                    "nodeType": "Block",
                    "src": "13557:64:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41580,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "13607:1:26",
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
                                "id": 41579,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "13599:7:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41578,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "13599:7:26",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41581,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13599:10:26",
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
                            "id": 41577,
                            "name": "ERC1155InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43375,
                            "src": "13578:20:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 41582,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13578:32:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41583,
                        "nodeType": "RevertStatement",
                        "src": "13571:39:26"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    41590,
                    41593
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41590,
                      "mutability": "mutable",
                      "name": "ids",
                      "nameLocation": "13648:3:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41610,
                      "src": "13631:20:26",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 41588,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "13631:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 41589,
                        "nodeType": "ArrayTypeName",
                        "src": "13631:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 41593,
                      "mutability": "mutable",
                      "name": "values",
                      "nameLocation": "13670:6:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41610,
                      "src": "13653:23:26",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 41591,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "13653:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 41592,
                        "nodeType": "ArrayTypeName",
                        "src": "13653:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41598,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 41595,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41566,
                        "src": "13699:2:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 41596,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41568,
                        "src": "13703:5:26",
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
                      "id": 41594,
                      "name": "_asSingletonArrays",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41714,
                      "src": "13680:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256[] memory,uint256[] memory)"
                      }
                    },
                    "id": 41597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13680:29:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(uint256[] memory,uint256[] memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13630:79:26"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41600,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41564,
                        "src": "13746:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 41603,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13760:1:26",
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
                          "id": 41602,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13752:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 41601,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "13752:7:26",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 41604,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13752:10:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41605,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41590,
                        "src": "13764:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41606,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41593,
                        "src": "13769:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 41607,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13777:2:26",
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
                      "id": 41599,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41328,
                      "src": "13719:26:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 41608,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13719:61:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41609,
                  "nodeType": "ExpressionStatement",
                  "src": "13719:61:26"
                }
              ]
            },
            "documentation": {
              "id": 41562,
              "nodeType": "StructuredDocumentation",
              "src": "13170:283:26",
              "text": " @dev Destroys a `value` amount of tokens of type `id` from `from`\n Emits a {TransferSingle} event.\n Requirements:\n - `from` cannot be the zero address.\n - `from` must have at least `value` amount of tokens of type `id`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "13467:5:26",
            "parameters": {
              "id": 41569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41564,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "13481:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41611,
                  "src": "13473:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41563,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13473:7:26",
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
                  "id": 41566,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "13495:2:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41611,
                  "src": "13487:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41565,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13487:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41568,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "13507:5:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41611,
                  "src": "13499:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41567,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13499:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13472:41:26"
            },
            "returnParameters": {
              "id": 41570,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13523:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41650,
            "nodeType": "FunctionDefinition",
            "src": "14143:265:26",
            "nodes": [],
            "body": {
              "id": 41649,
              "nodeType": "Block",
              "src": "14233:175:26",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 41628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41623,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41614,
                      "src": "14247:4:26",
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
                          "id": 41626,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "14263:1:26",
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
                        "id": 41625,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "14255:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41624,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "14255:7:26",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41627,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14255:10:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "14247:18:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41637,
                  "nodeType": "IfStatement",
                  "src": "14243:88:26",
                  "trueBody": {
                    "id": 41636,
                    "nodeType": "Block",
                    "src": "14267:64:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41632,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "14317:1:26",
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
                                "id": 41631,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "14309:7:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41630,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "14309:7:26",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41633,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "14309:10:26",
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
                            "id": 41629,
                            "name": "ERC1155InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43375,
                            "src": "14288:20:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 41634,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14288:32:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41635,
                        "nodeType": "RevertStatement",
                        "src": "14281:39:26"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41639,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41614,
                        "src": "14367:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 41642,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14381:1:26",
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
                          "id": 41641,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "14373:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 41640,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "14373:7:26",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 41643,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14373:10:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41644,
                        "name": "ids",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41617,
                        "src": "14385:3:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "id": 41645,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41620,
                        "src": "14390:6:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 41646,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "14398:2:26",
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
                      "id": 41638,
                      "name": "_updateWithAcceptanceCheck",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41328,
                      "src": "14340:26:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory)"
                      }
                    },
                    "id": 41647,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14340:61:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41648,
                  "nodeType": "ExpressionStatement",
                  "src": "14340:61:26"
                }
              ]
            },
            "documentation": {
              "id": 41612,
              "nodeType": "StructuredDocumentation",
              "src": "13793:345:26",
              "text": " @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.\n Emits a {TransferBatch} event.\n Requirements:\n - `from` cannot be the zero address.\n - `from` must have at least `value` amount of tokens of type `id`.\n - `ids` and `values` must have the same length."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burnBatch",
            "nameLocation": "14152:10:26",
            "parameters": {
              "id": 41621,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41614,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "14171:4:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41650,
                  "src": "14163:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41613,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14163:7:26",
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
                  "id": 41617,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "14194:3:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41650,
                  "src": "14177:20:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41615,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "14177:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41616,
                    "nodeType": "ArrayTypeName",
                    "src": "14177:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41620,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "14216:6:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41650,
                  "src": "14199:23:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41618,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "14199:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41619,
                    "nodeType": "ArrayTypeName",
                    "src": "14199:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14162:61:26"
            },
            "returnParameters": {
              "id": 41622,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14233:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41698,
            "nodeType": "FunctionDefinition",
            "src": "14627:374:26",
            "nodes": [],
            "body": {
              "id": 41697,
              "nodeType": "Block",
              "src": "14720:281:26",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41662
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41662,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "14753:1:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 41697,
                      "src": "14730:24:26",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                        "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                      },
                      "typeName": {
                        "id": 41661,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 41660,
                          "name": "ERC1155Storage",
                          "nameLocations": [
                            "14730:14:26"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 40775,
                          "src": "14730:14:26"
                        },
                        "referencedDeclaration": 40775,
                        "src": "14730:14:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                          "typeString": "struct ERC1155Upgradeable.ERC1155Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41665,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 41663,
                      "name": "_getERC1155Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40786,
                      "src": "14757:18:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_ERC1155Storage_$40775_storage_ptr_$",
                        "typeString": "function () pure returns (struct ERC1155Upgradeable.ERC1155Storage storage pointer)"
                      }
                    },
                    "id": 41664,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14757:20:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                      "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14730:47:26"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 41671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41666,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41655,
                      "src": "14791:8:26",
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
                          "id": 41669,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "14811:1:26",
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
                        "id": 41668,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "14803:7:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41667,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "14803:7:26",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41670,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14803:10:26",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "14791:22:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41680,
                  "nodeType": "IfStatement",
                  "src": "14787:94:26",
                  "trueBody": {
                    "id": 41679,
                    "nodeType": "Block",
                    "src": "14815:66:26",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41675,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "14867:1:26",
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
                                "id": 41674,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "14859:7:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41673,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "14859:7:26",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41676,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "14859:10:26",
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
                            "id": 41672,
                            "name": "ERC1155InvalidOperator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43397,
                            "src": "14836:22:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 41677,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14836:34:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41678,
                        "nodeType": "RevertStatement",
                        "src": "14829:41:26"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 41689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "expression": {
                            "id": 41681,
                            "name": "$",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41662,
                            "src": "14890:1:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ERC1155Storage_$40775_storage_ptr",
                              "typeString": "struct ERC1155Upgradeable.ERC1155Storage storage pointer"
                            }
                          },
                          "id": 41685,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14892:18:26",
                          "memberName": "_operatorApprovals",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 40772,
                          "src": "14890:20:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 41686,
                        "indexExpression": {
                          "id": 41683,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41653,
                          "src": "14911:5:26",
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
                        "src": "14890:27:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 41687,
                      "indexExpression": {
                        "id": 41684,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41655,
                        "src": "14918:8:26",
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
                      "src": "14890:37:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 41688,
                      "name": "approved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41657,
                      "src": "14930:8:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "14890:48:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41690,
                  "nodeType": "ExpressionStatement",
                  "src": "14890:48:26"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 41692,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41653,
                        "src": "14968:5:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41693,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41655,
                        "src": "14975:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 41694,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41657,
                        "src": "14985:8:26",
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
                      "id": 41691,
                      "name": "ApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43449,
                      "src": "14953:14:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 41695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14953:41:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41696,
                  "nodeType": "EmitStatement",
                  "src": "14948:46:26"
                }
              ]
            },
            "documentation": {
              "id": 41651,
              "nodeType": "StructuredDocumentation",
              "src": "14414:208:26",
              "text": " @dev Approve `operator` to operate on all of `owner` tokens\n Emits an {ApprovalForAll} event.\n Requirements:\n - `operator` cannot be the zero address."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setApprovalForAll",
            "nameLocation": "14636:18:26",
            "parameters": {
              "id": 41658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41653,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "14663:5:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41698,
                  "src": "14655:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41652,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14655:7:26",
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
                  "id": 41655,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "14678:8:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41698,
                  "src": "14670:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41654,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14670:7:26",
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
                  "id": 41657,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "14693:8:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41698,
                  "src": "14688:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 41656,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "14688:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14654:48:26"
            },
            "returnParameters": {
              "id": 41659,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14720:0:26"
            },
            "scope": 41715,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 41714,
            "nodeType": "FunctionDefinition",
            "src": "15117:822:26",
            "nodes": [],
            "body": {
              "id": 41713,
              "nodeType": "Block",
              "src": "15275:664:26",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "15310:623:26",
                    "nodeType": "YulBlock",
                    "src": "15310:623:26",
                    "statements": [
                      {
                        "nativeSrc": "15368:21:26",
                        "nodeType": "YulAssignment",
                        "src": "15368:21:26",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15384:4:26",
                              "nodeType": "YulLiteral",
                              "src": "15384:4:26",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "15378:5:26",
                            "nodeType": "YulIdentifier",
                            "src": "15378:5:26"
                          },
                          "nativeSrc": "15378:11:26",
                          "nodeType": "YulFunctionCall",
                          "src": "15378:11:26"
                        },
                        "variableNames": [
                          {
                            "name": "array1",
                            "nativeSrc": "15368:6:26",
                            "nodeType": "YulIdentifier",
                            "src": "15368:6:26"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array1",
                              "nativeSrc": "15446:6:26",
                              "nodeType": "YulIdentifier",
                              "src": "15446:6:26"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15454:1:26",
                              "nodeType": "YulLiteral",
                              "src": "15454:1:26",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15439:6:26",
                            "nodeType": "YulIdentifier",
                            "src": "15439:6:26"
                          },
                          "nativeSrc": "15439:17:26",
                          "nodeType": "YulFunctionCall",
                          "src": "15439:17:26"
                        },
                        "nativeSrc": "15439:17:26",
                        "nodeType": "YulExpressionStatement",
                        "src": "15439:17:26"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "array1",
                                  "nativeSrc": "15577:6:26",
                                  "nodeType": "YulIdentifier",
                                  "src": "15577:6:26"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15585:4:26",
                                  "nodeType": "YulLiteral",
                                  "src": "15585:4:26",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15573:3:26",
                                "nodeType": "YulIdentifier",
                                "src": "15573:3:26"
                              },
                              "nativeSrc": "15573:17:26",
                              "nodeType": "YulFunctionCall",
                              "src": "15573:17:26"
                            },
                            {
                              "name": "element1",
                              "nativeSrc": "15592:8:26",
                              "nodeType": "YulIdentifier",
                              "src": "15592:8:26"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15566:6:26",
                            "nodeType": "YulIdentifier",
                            "src": "15566:6:26"
                          },
                          "nativeSrc": "15566:35:26",
                          "nodeType": "YulFunctionCall",
                          "src": "15566:35:26"
                        },
                        "nativeSrc": "15566:35:26",
                        "nodeType": "YulExpressionStatement",
                        "src": "15566:35:26"
                      },
                      {
                        "nativeSrc": "15692:27:26",
                        "nodeType": "YulAssignment",
                        "src": "15692:27:26",
                        "value": {
                          "arguments": [
                            {
                              "name": "array1",
                              "nativeSrc": "15706:6:26",
                              "nodeType": "YulIdentifier",
                              "src": "15706:6:26"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15714:4:26",
                              "nodeType": "YulLiteral",
                              "src": "15714:4:26",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "15702:3:26",
                            "nodeType": "YulIdentifier",
                            "src": "15702:3:26"
                          },
                          "nativeSrc": "15702:17:26",
                          "nodeType": "YulFunctionCall",
                          "src": "15702:17:26"
                        },
                        "variableNames": [
                          {
                            "name": "array2",
                            "nativeSrc": "15692:6:26",
                            "nodeType": "YulIdentifier",
                            "src": "15692:6:26"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array2",
                              "nativeSrc": "15739:6:26",
                              "nodeType": "YulIdentifier",
                              "src": "15739:6:26"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15747:1:26",
                              "nodeType": "YulLiteral",
                              "src": "15747:1:26",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15732:6:26",
                            "nodeType": "YulIdentifier",
                            "src": "15732:6:26"
                          },
                          "nativeSrc": "15732:17:26",
                          "nodeType": "YulFunctionCall",
                          "src": "15732:17:26"
                        },
                        "nativeSrc": "15732:17:26",
                        "nodeType": "YulExpressionStatement",
                        "src": "15732:17:26"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "array2",
                                  "nativeSrc": "15773:6:26",
                                  "nodeType": "YulIdentifier",
                                  "src": "15773:6:26"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15781:4:26",
                                  "nodeType": "YulLiteral",
                                  "src": "15781:4:26",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15769:3:26",
                                "nodeType": "YulIdentifier",
                                "src": "15769:3:26"
                              },
                              "nativeSrc": "15769:17:26",
                              "nodeType": "YulFunctionCall",
                              "src": "15769:17:26"
                            },
                            {
                              "name": "element2",
                              "nativeSrc": "15788:8:26",
                              "nodeType": "YulIdentifier",
                              "src": "15788:8:26"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15762:6:26",
                            "nodeType": "YulIdentifier",
                            "src": "15762:6:26"
                          },
                          "nativeSrc": "15762:35:26",
                          "nodeType": "YulFunctionCall",
                          "src": "15762:35:26"
                        },
                        "nativeSrc": "15762:35:26",
                        "nodeType": "YulExpressionStatement",
                        "src": "15762:35:26"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15899:4:26",
                              "nodeType": "YulLiteral",
                              "src": "15899:4:26",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "array2",
                                  "nativeSrc": "15909:6:26",
                                  "nodeType": "YulIdentifier",
                                  "src": "15909:6:26"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15917:4:26",
                                  "nodeType": "YulLiteral",
                                  "src": "15917:4:26",
                                  "type": "",
                                  "value": "0x40"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15905:3:26",
                                "nodeType": "YulIdentifier",
                                "src": "15905:3:26"
                              },
                              "nativeSrc": "15905:17:26",
                              "nodeType": "YulFunctionCall",
                              "src": "15905:17:26"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15892:6:26",
                            "nodeType": "YulIdentifier",
                            "src": "15892:6:26"
                          },
                          "nativeSrc": "15892:31:26",
                          "nodeType": "YulFunctionCall",
                          "src": "15892:31:26"
                        },
                        "nativeSrc": "15892:31:26",
                        "nodeType": "YulExpressionStatement",
                        "src": "15892:31:26"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41707,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15368:6:26",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41707,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15446:6:26",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41707,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15577:6:26",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41707,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15706:6:26",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41710,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15692:6:26",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41710,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15739:6:26",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41710,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15773:6:26",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41710,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15909:6:26",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41701,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15592:8:26",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41703,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15788:8:26",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41712,
                  "nodeType": "InlineAssembly",
                  "src": "15285:648:26"
                }
              ]
            },
            "documentation": {
              "id": 41699,
              "nodeType": "StructuredDocumentation",
              "src": "15007:105:26",
              "text": " @dev Creates an array in memory with only one value for each of the elements provided."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_asSingletonArrays",
            "nameLocation": "15126:18:26",
            "parameters": {
              "id": 41704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41701,
                  "mutability": "mutable",
                  "name": "element1",
                  "nameLocation": "15162:8:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41714,
                  "src": "15154:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41700,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15154:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41703,
                  "mutability": "mutable",
                  "name": "element2",
                  "nameLocation": "15188:8:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41714,
                  "src": "15180:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41702,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15180:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15144:58:26"
            },
            "returnParameters": {
              "id": 41711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41707,
                  "mutability": "mutable",
                  "name": "array1",
                  "nameLocation": "15242:6:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41714,
                  "src": "15225:23:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41705,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15225:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41706,
                    "nodeType": "ArrayTypeName",
                    "src": "15225:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41710,
                  "mutability": "mutable",
                  "name": "array2",
                  "nameLocation": "15267:6:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 41714,
                  "src": "15250:23:26",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 41708,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15250:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 41709,
                    "nodeType": "ArrayTypeName",
                    "src": "15250:9:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15224:50:26"
            },
            "scope": 41715,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 40740,
              "name": "Initializable",
              "nameLocations": [
                "1092:13:26"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 40718,
              "src": "1092:13:26"
            },
            "id": 40741,
            "nodeType": "InheritanceSpecifier",
            "src": "1092:13:26"
          },
          {
            "baseName": {
              "id": 40742,
              "name": "ContextUpgradeable",
              "nameLocations": [
                "1107:18:26"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 42841,
              "src": "1107:18:26"
            },
            "id": 40743,
            "nodeType": "InheritanceSpecifier",
            "src": "1107:18:26"
          },
          {
            "baseName": {
              "id": 40744,
              "name": "ERC165Upgradeable",
              "nameLocations": [
                "1127:17:26"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 43225,
              "src": "1127:17:26"
            },
            "id": 40745,
            "nodeType": "InheritanceSpecifier",
            "src": "1127:17:26"
          },
          {
            "baseName": {
              "id": 40746,
              "name": "IERC1155",
              "nameLocations": [
                "1146:8:26"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 43528,
              "src": "1146:8:26"
            },
            "id": 40747,
            "nodeType": "InheritanceSpecifier",
            "src": "1146:8:26"
          },
          {
            "baseName": {
              "id": 40748,
              "name": "IERC1155MetadataURI",
              "nameLocations": [
                "1156:19:26"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 43586,
              "src": "1156:19:26"
            },
            "id": 40749,
            "nodeType": "InheritanceSpecifier",
            "src": "1156:19:26"
          },
          {
            "baseName": {
              "id": 40750,
              "name": "IERC1155Errors",
              "nameLocations": [
                "1177:14:26"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 43405,
              "src": "1177:14:26"
            },
            "id": 40751,
            "nodeType": "InheritanceSpecifier",
            "src": "1177:14:26"
          }
        ],
        "canonicalName": "ERC1155Upgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 40739,
          "nodeType": "StructuredDocumentation",
          "src": "867:184:26",
          "text": " @dev Implementation of the basic standard multi-token.\n See https://eips.ethereum.org/EIPS/eip-1155\n Originally based on code by Enjin: https://github.com/enjin/erc-1155"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          41715,
          43405,
          43586,
          43528,
          43225,
          46707,
          42841,
          40718
        ],
        "name": "ERC1155Upgradeable",
        "nameLocation": "1070:18:26",
        "scope": 41716,
        "usedErrors": [
          40481,
          40484,
          43370,
          43375,
          43380,
          43387,
          43392,
          43397,
          43404
        ],
        "usedEvents": [
          40489,
          43425,
          43440,
          43449,
          43456
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 26
} as const;