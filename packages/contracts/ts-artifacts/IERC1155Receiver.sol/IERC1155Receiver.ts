export const IERC1155Receiver = {
  "abi": [
    {
      "type": "function",
      "name": "onERC1155BatchReceived",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "from",
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
      "outputs": [
        {
          "name": "",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onERC1155Received",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "from",
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
      "outputs": [
        {
          "name": "",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
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
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": "bc197c81",
    "onERC1155Received(address,address,uint256,uint256,bytes)": "f23a6e61",
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface that must be implemented by smart contracts in order to receive ERC-1155 token transfers.\",\"kind\":\"dev\",\"methods\":{\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\":{\"details\":\"Handles the receipt of a multiple ERC-1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` (i.e. 0xbc197c81, or its own function selector).\",\"params\":{\"data\":\"Additional data with no specified format\",\"from\":\"The address which previously owned the token\",\"ids\":\"An array containing ids of each token being transferred (order and length must match values array)\",\"operator\":\"The address which initiated the batch transfer (i.e. msg.sender)\",\"values\":\"An array containing amounts of each token being transferred (order and length must match ids array)\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` if transfer is allowed\"}},\"onERC1155Received(address,address,uint256,uint256,bytes)\":{\"details\":\"Handles the receipt of a single ERC-1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` (i.e. 0xf23a6e61, or its own function selector).\",\"params\":{\"data\":\"Additional data with no specified format\",\"from\":\"The address which previously owned the token\",\"id\":\"The ID of the token being transferred\",\"operator\":\"The address which initiated the transfer (i.e. msg.sender)\",\"value\":\"The amount of tokens being transferred\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` if transfer is allowed\"}},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":\"IERC1155Receiver\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0x61a23d601c2ab69dd726ac55058604cbda98e1d728ba31a51c379a3f9eeea715\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d8cbb06152d82ebdd5ba1d33454e5759492040f309a82637c7e99c948a04fa20\",\"dweb:/ipfs/QmQQuLr6WSfLu97pMEh6XLefk99TSj9k5Qu1zXGPepwGiK\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]}},\"version\":1}",
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
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "from",
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
          "name": "onERC1155BatchReceived",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ]
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
              "name": "from",
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
          "name": "onERC1155Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ]
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
          "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": {
            "details": "Handles the receipt of a multiple ERC-1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` (i.e. 0xbc197c81, or its own function selector).",
            "params": {
              "data": "Additional data with no specified format",
              "from": "The address which previously owned the token",
              "ids": "An array containing ids of each token being transferred (order and length must match values array)",
              "operator": "The address which initiated the batch transfer (i.e. msg.sender)",
              "values": "An array containing amounts of each token being transferred (order and length must match ids array)"
            },
            "returns": {
              "_0": "`bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` if transfer is allowed"
            }
          },
          "onERC1155Received(address,address,uint256,uint256,bytes)": {
            "details": "Handles the receipt of a single ERC-1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` (i.e. 0xf23a6e61, or its own function selector).",
            "params": {
              "data": "Additional data with no specified format",
              "from": "The address which previously owned the token",
              "id": "The ID of the token being transferred",
              "operator": "The address which initiated the transfer (i.e. msg.sender)",
              "value": "The amount of tokens being transferred"
            },
            "returns": {
              "_0": "`bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` if transfer is allowed"
            }
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
        "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol": "IERC1155Receiver"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol": {
        "keccak256": "0x61a23d601c2ab69dd726ac55058604cbda98e1d728ba31a51c379a3f9eeea715",
        "urls": [
          "bzz-raw://d8cbb06152d82ebdd5ba1d33454e5759492040f309a82637c7e99c948a04fa20",
          "dweb:/ipfs/QmQQuLr6WSfLu97pMEh6XLefk99TSj9k5Qu1zXGPepwGiK"
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
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
    "id": 43571,
    "exportedSymbols": {
      "IERC1155Receiver": [
        43570
      ],
      "IERC165": [
        46707
      ]
    },
    "nodeType": "SourceUnit",
    "src": "118:2481:36",
    "nodes": [
      {
        "id": 43530,
        "nodeType": "PragmaDirective",
        "src": "118:24:36",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 43532,
        "nodeType": "ImportDirective",
        "src": "144:62:36",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "../../utils/introspection/IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 43571,
        "sourceUnit": 46708,
        "symbolAliases": [
          {
            "foreign": {
              "id": 43531,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46707,
              "src": "152:7:36",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 43570,
        "nodeType": "ContractDefinition",
        "src": "327:2271:36",
        "nodes": [
          {
            "id": 43551,
            "nodeType": "FunctionDefinition",
            "src": "1203:179:36",
            "nodes": [],
            "documentation": {
              "id": 43536,
              "nodeType": "StructuredDocumentation",
              "src": "371:827:36",
              "text": " @dev Handles the receipt of a single ERC-1155 token type. This function is\n called at the end of a `safeTransferFrom` after the balance has been updated.\n NOTE: To accept the transfer, this must return\n `bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))`\n (i.e. 0xf23a6e61, or its own function selector).\n @param operator The address which initiated the transfer (i.e. msg.sender)\n @param from The address which previously owned the token\n @param id The ID of the token being transferred\n @param value The amount of tokens being transferred\n @param data Additional data with no specified format\n @return `bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` if transfer is allowed"
            },
            "functionSelector": "f23a6e61",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155Received",
            "nameLocation": "1212:17:36",
            "parameters": {
              "id": 43547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43538,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "1247:8:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 43551,
                  "src": "1239:16:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43537,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1239:7:36",
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
                  "id": 43540,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1273:4:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 43551,
                  "src": "1265:12:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43539,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1265:7:36",
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
                  "id": 43542,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1295:2:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 43551,
                  "src": "1287:10:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43541,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1287:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43544,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1315:5:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 43551,
                  "src": "1307:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43543,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1307:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43546,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1345:4:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 43551,
                  "src": "1330:19:36",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 43545,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1330:5:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1229:126:36"
            },
            "returnParameters": {
              "id": 43550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43549,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43551,
                  "src": "1374:6:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 43548,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1374:6:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1373:8:36"
            },
            "scope": 43570,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 43569,
            "nodeType": "FunctionDefinition",
            "src": "2388:208:36",
            "nodes": [],
            "documentation": {
              "id": 43552,
              "nodeType": "StructuredDocumentation",
              "src": "1388:995:36",
              "text": " @dev Handles the receipt of a multiple ERC-1155 token types. This function\n is called at the end of a `safeBatchTransferFrom` after the balances have\n been updated.\n NOTE: To accept the transfer(s), this must return\n `bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))`\n (i.e. 0xbc197c81, or its own function selector).\n @param operator The address which initiated the batch transfer (i.e. msg.sender)\n @param from The address which previously owned the token\n @param ids An array containing ids of each token being transferred (order and length must match values array)\n @param values An array containing amounts of each token being transferred (order and length must match ids array)\n @param data Additional data with no specified format\n @return `bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` if transfer is allowed"
            },
            "functionSelector": "bc197c81",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155BatchReceived",
            "nameLocation": "2397:22:36",
            "parameters": {
              "id": 43565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43554,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "2437:8:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 43569,
                  "src": "2429:16:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2429:7:36",
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
                  "id": 43556,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2463:4:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 43569,
                  "src": "2455:12:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43555,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2455:7:36",
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
                  "id": 43559,
                  "mutability": "mutable",
                  "name": "ids",
                  "nameLocation": "2496:3:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 43569,
                  "src": "2477:22:36",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 43557,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2477:7:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 43558,
                    "nodeType": "ArrayTypeName",
                    "src": "2477:9:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43562,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "2528:6:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 43569,
                  "src": "2509:25:36",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 43560,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2509:7:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 43561,
                    "nodeType": "ArrayTypeName",
                    "src": "2509:9:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43564,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "2559:4:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 43569,
                  "src": "2544:19:36",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 43563,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2544:5:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2419:150:36"
            },
            "returnParameters": {
              "id": 43568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43567,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43569,
                  "src": "2588:6:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 43566,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2588:6:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2587:8:36"
            },
            "scope": 43570,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 43534,
              "name": "IERC165",
              "nameLocations": [
                "357:7:36"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46707,
              "src": "357:7:36"
            },
            "id": 43535,
            "nodeType": "InheritanceSpecifier",
            "src": "357:7:36"
          }
        ],
        "canonicalName": "IERC1155Receiver",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 43533,
          "nodeType": "StructuredDocumentation",
          "src": "208:118:36",
          "text": " @dev Interface that must be implemented by smart contracts in order to receive\n ERC-1155 token transfers."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          43570,
          46707
        ],
        "name": "IERC1155Receiver",
        "nameLocation": "337:16:36",
        "scope": 43571,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 36
} as const;