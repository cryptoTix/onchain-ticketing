export const IERC1155 = {
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
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Required interface of an ERC-1155 compliant contract, as defined in the https://eips.ethereum.org/EIPS/eip-1155[ERC].\",\"events\":{\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to `approved`.\"},\"TransferBatch(address,address,address,uint256[],uint256[])\":{\"details\":\"Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all transfers.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"details\":\"Emitted when `value` amount of tokens of type `id` are transferred from `from` to `to` by `operator`.\"},\"URI(string,uint256)\":{\"details\":\"Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI. If an {URI} event was emitted for `id`, the standard https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value returned by {IERC1155MetadataURI-uri}.\"}},\"kind\":\"dev\",\"methods\":{\"balanceOf(address,uint256)\":{\"details\":\"Returns the value of tokens of token type `id` owned by `account`.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns true if `operator` is approved to transfer ``account``'s tokens. See {setApprovalForAll}.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. WARNING: This function can potentially allow a reentrancy attack when transferring tokens to an untrusted contract, when invoking {onERC1155BatchReceived} on the receiver. Ensure to follow the checks-effects-interactions pattern and consider employing reentrancy guards when interacting with untrusted contracts. Emits either a {TransferSingle} or a {TransferBatch} event, depending on the length of the array arguments. Requirements: - `ids` and `values` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"Transfers a `value` amount of tokens of type `id` from `from` to `to`. WARNING: This function can potentially allow a reentrancy attack when transferring tokens to an untrusted contract, when invoking {onERC1155Received} on the receiver. Ensure to follow the checks-effects-interactions pattern and consider employing reentrancy guards when interacting with untrusted contracts. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `value` amount. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the zero address.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":\"IERC1155\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x68d6fdbeb467192c3627a46aa7bf5cbb73267363b740abc511f521a5a41a446e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7ce608c19d5e917c60f9c8aa3e5f0eb05b326280ac0a235e8bb9a848a3a64a91\",\"dweb:/ipfs/QmdLPsWQJj7JvRae8MM13GEo4PBXaEFmD4b4heqcyMJNPG\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]}},\"version\":1}",
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
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "balanceOf(address,uint256)": {
            "details": "Returns the value of tokens of token type `id` owned by `account`."
          },
          "balanceOfBatch(address[],uint256[])": {
            "details": "xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length."
          },
          "isApprovedForAll(address,address)": {
            "details": "Returns true if `operator` is approved to transfer ``account``'s tokens. See {setApprovalForAll}."
          },
          "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
            "details": "xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. WARNING: This function can potentially allow a reentrancy attack when transferring tokens to an untrusted contract, when invoking {onERC1155BatchReceived} on the receiver. Ensure to follow the checks-effects-interactions pattern and consider employing reentrancy guards when interacting with untrusted contracts. Emits either a {TransferSingle} or a {TransferBatch} event, depending on the length of the array arguments. Requirements: - `ids` and `values` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value."
          },
          "safeTransferFrom(address,address,uint256,uint256,bytes)": {
            "details": "Transfers a `value` amount of tokens of type `id` from `from` to `to`. WARNING: This function can potentially allow a reentrancy attack when transferring tokens to an untrusted contract, when invoking {onERC1155Received} on the receiver. Ensure to follow the checks-effects-interactions pattern and consider employing reentrancy guards when interacting with untrusted contracts. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `value` amount. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value."
          },
          "setApprovalForAll(address,bool)": {
            "details": "Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the zero address."
          },
          "supportsInterface(bytes4)": {
            "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
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
        "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol": "IERC1155"
      },
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol": {
        "keccak256": "0x68d6fdbeb467192c3627a46aa7bf5cbb73267363b740abc511f521a5a41a446e",
        "urls": [
          "bzz-raw://7ce608c19d5e917c60f9c8aa3e5f0eb05b326280ac0a235e8bb9a848a3a64a91",
          "dweb:/ipfs/QmdLPsWQJj7JvRae8MM13GEo4PBXaEFmD4b4heqcyMJNPG"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol",
    "id": 43529,
    "exportedSymbols": {
      "IERC1155": [
        43528
      ],
      "IERC165": [
        46707
      ]
    },
    "nodeType": "SourceUnit",
    "src": "110:4606:35",
    "nodes": [
      {
        "id": 43407,
        "nodeType": "PragmaDirective",
        "src": "110:24:35",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 43409,
        "nodeType": "ImportDirective",
        "src": "136:62:35",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "../../utils/introspection/IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 43529,
        "sourceUnit": 46708,
        "symbolAliases": [
          {
            "foreign": {
              "id": 43408,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46707,
              "src": "144:7:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 43528,
        "nodeType": "ContractDefinition",
        "src": "337:4378:35",
        "nodes": [
          {
            "id": 43425,
            "nodeType": "EventDefinition",
            "src": "503:116:35",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 43413,
              "nodeType": "StructuredDocumentation",
              "src": "373:125:35",
              "text": " @dev Emitted when `value` amount of tokens of type `id` are transferred from `from` to `to` by `operator`."
            },
            "eventSelector": "c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
            "name": "TransferSingle",
            "nameLocation": "509:14:35",
            "parameters": {
              "id": 43424,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43415,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "540:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43425,
                  "src": "524:24:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43414,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:35",
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
                  "id": 43417,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "566:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43425,
                  "src": "550:20:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43416,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "550:7:35",
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
                  "id": 43419,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "588:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43425,
                  "src": "572:18:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43418,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "572:7:35",
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
                  "id": 43421,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "600:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43425,
                  "src": "592:10:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43420,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "592:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43423,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "612:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43425,
                  "src": "604:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43422,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "604:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "523:95:35"
            }
          },
          {
            "id": 43440,
            "nodeType": "EventDefinition",
            "src": "774:167:35",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 43426,
              "nodeType": "StructuredDocumentation",
              "src": "625:144:35",
              "text": " @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\n transfers."
            },
            "eventSelector": "4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb",
            "name": "TransferBatch",
            "nameLocation": "780:13:35",
            "parameters": {
              "id": 43439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43428,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "819:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43440,
                  "src": "803:24:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43427,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "803:7:35",
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
                  "id": 43430,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "853:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43440,
                  "src": "837:20:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43429,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "837:7:35",
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
                  "id": 43432,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "883:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43440,
                  "src": "867:18:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43431,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "867:7:35",
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
                  "id": 43435,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "905:3:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43440,
                  "src": "895:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 43433,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "895:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 43434,
                    "nodeType": "ArrayTypeName",
                    "src": "895:9:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43438,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "928:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43440,
                  "src": "918:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 43436,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "918:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 43437,
                    "nodeType": "ArrayTypeName",
                    "src": "918:9:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "793:147:35"
            }
          },
          {
            "id": 43449,
            "nodeType": "EventDefinition",
            "src": "1099:87:35",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 43441,
              "nodeType": "StructuredDocumentation",
              "src": "947:147:35",
              "text": " @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\n `approved`."
            },
            "eventSelector": "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
            "name": "ApprovalForAll",
            "nameLocation": "1105:14:35",
            "parameters": {
              "id": 43448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43443,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1136:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43449,
                  "src": "1120:23:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43442,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:7:35",
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
                  "id": 43445,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "1161:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43449,
                  "src": "1145:24:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43444,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1145:7:35",
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
                  "id": 43447,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "1176:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43449,
                  "src": "1171:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 43446,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1171:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1119:66:35"
            }
          },
          {
            "id": 43456,
            "nodeType": "EventDefinition",
            "src": "1540:44:35",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 43450,
              "nodeType": "StructuredDocumentation",
              "src": "1192:343:35",
              "text": " @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\n If an {URI} event was emitted for `id`, the standard\n https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\n returned by {IERC1155MetadataURI-uri}."
            },
            "eventSelector": "6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b",
            "name": "URI",
            "nameLocation": "1546:3:35",
            "parameters": {
              "id": 43455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43452,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1557:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43456,
                  "src": "1550:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 43451,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1550:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43454,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1580:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43456,
                  "src": "1564:18:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43453,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1564:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1549:34:35"
            }
          },
          {
            "id": 43466,
            "nodeType": "FunctionDefinition",
            "src": "1685:80:35",
            "nodes": [],
            "documentation": {
              "id": 43457,
              "nodeType": "StructuredDocumentation",
              "src": "1590:90:35",
              "text": " @dev Returns the value of tokens of token type `id` owned by `account`."
            },
            "functionSelector": "00fdd58e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "1694:9:35",
            "parameters": {
              "id": 43462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43459,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1712:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43466,
                  "src": "1704:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43458,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1704:7:35",
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
                  "id": 43461,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1729:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43466,
                  "src": "1721:10:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43460,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1721:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1703:29:35"
            },
            "returnParameters": {
              "id": 43465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43464,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43466,
                  "src": "1756:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43463,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1756:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1755:9:35"
            },
            "scope": 43528,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 43479,
            "nodeType": "FunctionDefinition",
            "src": "1964:140:35",
            "nodes": [],
            "documentation": {
              "id": 43467,
              "nodeType": "StructuredDocumentation",
              "src": "1771:188:35",
              "text": " @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\n Requirements:\n - `accounts` and `ids` must have the same length."
            },
            "functionSelector": "4e1273f4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOfBatch",
            "nameLocation": "1973:14:35",
            "parameters": {
              "id": 43474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43470,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "2016:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43479,
                  "src": "1997:27:35",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 43468,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1997:7:35",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 43469,
                    "nodeType": "ArrayTypeName",
                    "src": "1997:9:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43473,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "2053:3:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43479,
                  "src": "2034:22:35",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 43471,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2034:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 43472,
                    "nodeType": "ArrayTypeName",
                    "src": "2034:9:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1987:75:35"
            },
            "returnParameters": {
              "id": 43478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43477,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43479,
                  "src": "2086:16:35",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 43475,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2086:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 43476,
                    "nodeType": "ArrayTypeName",
                    "src": "2086:9:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2085:18:35"
            },
            "scope": 43528,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 43487,
            "nodeType": "FunctionDefinition",
            "src": "2369:69:35",
            "nodes": [],
            "documentation": {
              "id": 43480,
              "nodeType": "StructuredDocumentation",
              "src": "2110:254:35",
              "text": " @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,\n Emits an {ApprovalForAll} event.\n Requirements:\n - `operator` cannot be the zero address."
            },
            "functionSelector": "a22cb465",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "2378:17:35",
            "parameters": {
              "id": 43485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43482,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "2404:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43487,
                  "src": "2396:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43481,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2396:7:35",
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
                  "id": 43484,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "2419:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43487,
                  "src": "2414:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 43483,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2414:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2395:33:35"
            },
            "returnParameters": {
              "id": 43486,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2437:0:35"
            },
            "scope": 43528,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 43497,
            "nodeType": "FunctionDefinition",
            "src": "2584:90:35",
            "nodes": [],
            "documentation": {
              "id": 43488,
              "nodeType": "StructuredDocumentation",
              "src": "2444:135:35",
              "text": " @dev Returns true if `operator` is approved to transfer ``account``'s tokens.\n See {setApprovalForAll}."
            },
            "functionSelector": "e985e9c5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "2593:16:35",
            "parameters": {
              "id": 43493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43490,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2618:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43497,
                  "src": "2610:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43489,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2610:7:35",
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
                  "id": 43492,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "2635:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43497,
                  "src": "2627:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43491,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2627:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2609:35:35"
            },
            "returnParameters": {
              "id": 43496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43495,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43497,
                  "src": "2668:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 43494,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2668:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2667:6:35"
            },
            "scope": 43528,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 43511,
            "nodeType": "FunctionDefinition",
            "src": "3595:109:35",
            "nodes": [],
            "documentation": {
              "id": 43498,
              "nodeType": "StructuredDocumentation",
              "src": "2680:910:35",
              "text": " @dev Transfers a `value` amount of tokens of type `id` from `from` to `to`.\n WARNING: This function can potentially allow a reentrancy attack when transferring tokens\n to an untrusted contract, when invoking {onERC1155Received} on the receiver.\n Ensure to follow the checks-effects-interactions pattern and consider employing\n reentrancy guards when interacting with untrusted contracts.\n Emits a {TransferSingle} event.\n Requirements:\n - `to` cannot be the zero address.\n - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.\n - `from` must have a balance of tokens of type `id` of at least `value` amount.\n - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\n acceptance magic value."
            },
            "functionSelector": "f242432a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "3604:16:35",
            "parameters": {
              "id": 43509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43500,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "3629:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43511,
                  "src": "3621:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43499,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3621:7:35",
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
                  "id": 43502,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3643:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43511,
                  "src": "3635:10:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43501,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3635:7:35",
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
                  "id": 43504,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "3655:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43511,
                  "src": "3647:10:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43503,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3647:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43506,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3667:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43511,
                  "src": "3659:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43505,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3659:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43508,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "3689:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43511,
                  "src": "3674:19:35",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 43507,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3674:5:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3620:74:35"
            },
            "returnParameters": {
              "id": 43510,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3703:0:35"
            },
            "scope": 43528,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 43527,
            "nodeType": "FunctionDefinition",
            "src": "4529:184:35",
            "nodes": [],
            "documentation": {
              "id": 43512,
              "nodeType": "StructuredDocumentation",
              "src": "3710:814:35",
              "text": " @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\n WARNING: This function can potentially allow a reentrancy attack when transferring tokens\n to an untrusted contract, when invoking {onERC1155BatchReceived} on the receiver.\n Ensure to follow the checks-effects-interactions pattern and consider employing\n reentrancy guards when interacting with untrusted contracts.\n Emits either a {TransferSingle} or a {TransferBatch} event, depending on the length of the array arguments.\n Requirements:\n - `ids` and `values` must have the same length.\n - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\n acceptance magic value."
            },
            "functionSelector": "2eb2c2d6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "safeBatchTransferFrom",
            "nameLocation": "4538:21:35",
            "parameters": {
              "id": 43525,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43514,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "4577:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43527,
                  "src": "4569:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43513,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4569:7:35",
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
                  "id": 43516,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4599:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43527,
                  "src": "4591:10:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43515,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4591:7:35",
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
                  "id": 43519,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "4630:3:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43527,
                  "src": "4611:22:35",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 43517,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4611:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 43518,
                    "nodeType": "ArrayTypeName",
                    "src": "4611:9:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43522,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "4662:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43527,
                  "src": "4643:25:35",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 43520,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4643:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 43521,
                    "nodeType": "ArrayTypeName",
                    "src": "4643:9:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43524,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "4693:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 43527,
                  "src": "4678:19:35",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 43523,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4678:5:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4559:144:35"
            },
            "returnParameters": {
              "id": 43526,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4712:0:35"
            },
            "scope": 43528,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 43411,
              "name": "IERC165",
              "nameLocations": [
                "359:7:35"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46707,
              "src": "359:7:35"
            },
            "id": 43412,
            "nodeType": "InheritanceSpecifier",
            "src": "359:7:35"
          }
        ],
        "canonicalName": "IERC1155",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 43410,
          "nodeType": "StructuredDocumentation",
          "src": "200:136:35",
          "text": " @dev Required interface of an ERC-1155 compliant contract, as defined in the\n https://eips.ethereum.org/EIPS/eip-1155[ERC]."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          43528,
          46707
        ],
        "name": "IERC1155",
        "nameLocation": "347:8:35",
        "scope": 43529,
        "usedErrors": [],
        "usedEvents": [
          43425,
          43440,
          43449,
          43456
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 35
} as const;