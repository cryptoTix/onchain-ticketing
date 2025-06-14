export const IERC1155MetadataURI = {
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
          "name": "id",
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
    "supportsInterface(bytes4)": "01ffc9a7",
    "uri(uint256)": "0e89341c"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the optional ERC1155MetadataExtension interface, as defined in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[ERC].\",\"events\":{\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to `approved`.\"},\"TransferBatch(address,address,address,uint256[],uint256[])\":{\"details\":\"Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all transfers.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"details\":\"Emitted when `value` amount of tokens of type `id` are transferred from `from` to `to` by `operator`.\"},\"URI(string,uint256)\":{\"details\":\"Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI. If an {URI} event was emitted for `id`, the standard https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value returned by {IERC1155MetadataURI-uri}.\"}},\"kind\":\"dev\",\"methods\":{\"balanceOf(address,uint256)\":{\"details\":\"Returns the value of tokens of token type `id` owned by `account`.\"},\"balanceOfBatch(address[],uint256[])\":{\"details\":\"xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns true if `operator` is approved to transfer ``account``'s tokens. See {setApprovalForAll}.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. WARNING: This function can potentially allow a reentrancy attack when transferring tokens to an untrusted contract, when invoking {onERC1155BatchReceived} on the receiver. Ensure to follow the checks-effects-interactions pattern and consider employing reentrancy guards when interacting with untrusted contracts. Emits either a {TransferSingle} or a {TransferBatch} event, depending on the length of the array arguments. Requirements: - `ids` and `values` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"Transfers a `value` amount of tokens of type `id` from `from` to `to`. WARNING: This function can potentially allow a reentrancy attack when transferring tokens to an untrusted contract, when invoking {onERC1155Received} on the receiver. Ensure to follow the checks-effects-interactions pattern and consider employing reentrancy guards when interacting with untrusted contracts. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `value` amount. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the zero address.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"uri(uint256)\":{\"details\":\"Returns the URI for token type `id`. If the `\\\\{id\\\\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":\"IERC1155MetadataURI\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x68d6fdbeb467192c3627a46aa7bf5cbb73267363b740abc511f521a5a41a446e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7ce608c19d5e917c60f9c8aa3e5f0eb05b326280ac0a235e8bb9a848a3a64a91\",\"dweb:/ipfs/QmdLPsWQJj7JvRae8MM13GEo4PBXaEFmD4b4heqcyMJNPG\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"keccak256\":\"0x35d120c427299af1525aaf07955314d9e36a62f14408eb93dec71a2e001f74d3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://743e38acf441eece428c008be399c40a3ca5b2d595d58faf656cbdbac1a45374\",\"dweb:/ipfs/QmcWDuWkndox3dxa5P7ZgpKy3iuQKkxBq1cR9hPV1ZzAfa\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]}},\"version\":1}",
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
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
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
          },
          "uri(uint256)": {
            "details": "Returns the URI for token type `id`. If the `\\{id\\}` substring is present in the URI, it must be replaced by clients with the actual token type ID."
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
        "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol": "IERC1155MetadataURI"
      },
      "evmVersion": "paris",
      "libraries": {}
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
      "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol": {
        "keccak256": "0x35d120c427299af1525aaf07955314d9e36a62f14408eb93dec71a2e001f74d3",
        "urls": [
          "bzz-raw://743e38acf441eece428c008be399c40a3ca5b2d595d58faf656cbdbac1a45374",
          "dweb:/ipfs/QmcWDuWkndox3dxa5P7ZgpKy3iuQKkxBq1cR9hPV1ZzAfa"
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
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol",
    "id": 43587,
    "exportedSymbols": {
      "IERC1155": [
        43528
      ],
      "IERC1155MetadataURI": [
        43586
      ]
    },
    "nodeType": "SourceUnit",
    "src": "132:545:37",
    "nodes": [
      {
        "id": 43572,
        "nodeType": "PragmaDirective",
        "src": "132:24:37",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 43574,
        "nodeType": "ImportDirective",
        "src": "158:41:37",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol",
        "file": "../IERC1155.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 43587,
        "sourceUnit": 43529,
        "symbolAliases": [
          {
            "foreign": {
              "id": 43573,
              "name": "IERC1155",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43528,
              "src": "166:8:37",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 43586,
        "nodeType": "ContractDefinition",
        "src": "366:310:37",
        "nodes": [
          {
            "id": 43585,
            "nodeType": "FunctionDefinition",
            "src": "611:63:37",
            "nodes": [],
            "documentation": {
              "id": 43578,
              "nodeType": "StructuredDocumentation",
              "src": "414:192:37",
              "text": " @dev Returns the URI for token type `id`.\n If the `\\{id\\}` substring is present in the URI, it must be replaced by\n clients with the actual token type ID."
            },
            "functionSelector": "0e89341c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "uri",
            "nameLocation": "620:3:37",
            "parameters": {
              "id": 43581,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43580,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "632:2:37",
                  "nodeType": "VariableDeclaration",
                  "scope": 43585,
                  "src": "624:10:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43579,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "623:12:37"
            },
            "returnParameters": {
              "id": 43584,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43583,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43585,
                  "src": "659:13:37",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 43582,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "659:6:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "658:15:37"
            },
            "scope": 43586,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 43576,
              "name": "IERC1155",
              "nameLocations": [
                "399:8:37"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 43528,
              "src": "399:8:37"
            },
            "id": 43577,
            "nodeType": "InheritanceSpecifier",
            "src": "399:8:37"
          }
        ],
        "canonicalName": "IERC1155MetadataURI",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 43575,
          "nodeType": "StructuredDocumentation",
          "src": "201:164:37",
          "text": " @dev Interface of the optional ERC1155MetadataExtension interface, as defined\n in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[ERC]."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          43586,
          43528,
          46707
        ],
        "name": "IERC1155MetadataURI",
        "nameLocation": "376:19:37",
        "scope": 43587,
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
  "id": 37
} as const;