export const IERC721Receiver = {
  "abi": [
    {
      "type": "function",
      "name": "onERC721Received",
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
      "outputs": [
        {
          "name": "",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "stateMutability": "nonpayable"
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
    "onERC721Received(address,address,uint256,bytes)": "150b7a02"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface for any contract that wants to support safeTransfers from ERC-721 asset contracts.\",\"kind\":\"dev\",\"methods\":{\"onERC721Received(address,address,uint256,bytes)\":{\"details\":\"Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom} by `operator` from `from`, this function is called. It must return its Solidity selector to confirm the token transfer. If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted. The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`.\"}},\"title\":\"ERC-721 token receiver interface\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":\"IERC721Receiver\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34\",\"dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p\"]}},\"version\":1}",
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
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "onERC721Received(address,address,uint256,bytes)": {
            "details": "Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom} by `operator` from `from`, this function is called. It must return its Solidity selector to confirm the token transfer. If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted. The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`."
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
        "node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol": "IERC721Receiver"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol": {
        "keccak256": "0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d",
        "urls": [
          "bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34",
          "dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol",
    "id": 39977,
    "exportedSymbols": {
      "IERC721Receiver": [
        39976
      ]
    },
    "nodeType": "SourceUnit",
    "src": "116:881:36",
    "nodes": [
      {
        "id": 39960,
        "nodeType": "PragmaDirective",
        "src": "116:24:36",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 39976,
        "nodeType": "ContractDefinition",
        "src": "297:699:36",
        "nodes": [
          {
            "id": 39975,
            "nodeType": "FunctionDefinition",
            "src": "834:160:36",
            "nodes": [],
            "documentation": {
              "id": 39962,
              "nodeType": "StructuredDocumentation",
              "src": "329:500:36",
              "text": " @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n by `operator` from `from`, this function is called.\n It must return its Solidity selector to confirm the token transfer.\n If any other value is returned or the interface is not implemented by the recipient, the transfer will be\n reverted.\n The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`."
            },
            "functionSelector": "150b7a02",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "onERC721Received",
            "nameLocation": "843:16:36",
            "parameters": {
              "id": 39971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39964,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "877:8:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 39975,
                  "src": "869:16:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39963,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "869:7:36",
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
                  "id": 39966,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "903:4:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 39975,
                  "src": "895:12:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39965,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:36",
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
                  "id": 39968,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "925:7:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 39975,
                  "src": "917:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39967,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39970,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "957:4:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 39975,
                  "src": "942:19:36",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 39969,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "942:5:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "859:108:36"
            },
            "returnParameters": {
              "id": 39974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39973,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 39975,
                  "src": "986:6:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 39972,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "986:6:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "985:8:36"
            },
            "scope": 39976,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC721Receiver",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 39961,
          "nodeType": "StructuredDocumentation",
          "src": "142:154:36",
          "text": " @title ERC-721 token receiver interface\n @dev Interface for any contract that wants to support safeTransfers\n from ERC-721 asset contracts."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          39976
        ],
        "name": "IERC721Receiver",
        "nameLocation": "307:15:36",
        "scope": 39977,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 36
} as const;