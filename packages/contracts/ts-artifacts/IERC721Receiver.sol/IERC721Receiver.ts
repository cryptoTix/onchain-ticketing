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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface for any contract that wants to support safeTransfers from ERC-721 asset contracts.\",\"kind\":\"dev\",\"methods\":{\"onERC721Received(address,address,uint256,bytes)\":{\"details\":\"Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom} by `operator` from `from`, this function is called. It must return its Solidity selector to confirm the token transfer. If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted. The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`.\"}},\"title\":\"ERC-721 token receiver interface\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":\"IERC721Receiver\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34\",\"dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p\"]}},\"version\":1}",
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
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
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
    "id": 44495,
    "exportedSymbols": {
      "IERC721Receiver": [
        44494
      ]
    },
    "nodeType": "SourceUnit",
    "src": "116:881:43",
    "nodes": [
      {
        "id": 44478,
        "nodeType": "PragmaDirective",
        "src": "116:24:43",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 44494,
        "nodeType": "ContractDefinition",
        "src": "297:699:43",
        "nodes": [
          {
            "id": 44493,
            "nodeType": "FunctionDefinition",
            "src": "834:160:43",
            "nodes": [],
            "documentation": {
              "id": 44480,
              "nodeType": "StructuredDocumentation",
              "src": "329:500:43",
              "text": " @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n by `operator` from `from`, this function is called.\n It must return its Solidity selector to confirm the token transfer.\n If any other value is returned or the interface is not implemented by the recipient, the transfer will be\n reverted.\n The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`."
            },
            "functionSelector": "150b7a02",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "onERC721Received",
            "nameLocation": "843:16:43",
            "parameters": {
              "id": 44489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44482,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "877:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 44493,
                  "src": "869:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44481,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "869:7:43",
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
                  "id": 44484,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "903:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 44493,
                  "src": "895:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44483,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:43",
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
                  "id": 44486,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "925:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 44493,
                  "src": "917:15:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44485,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44488,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "957:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 44493,
                  "src": "942:19:43",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 44487,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "942:5:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "859:108:43"
            },
            "returnParameters": {
              "id": 44492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44491,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44493,
                  "src": "986:6:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 44490,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "986:6:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "985:8:43"
            },
            "scope": 44494,
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
          "id": 44479,
          "nodeType": "StructuredDocumentation",
          "src": "142:154:43",
          "text": " @title ERC-721 token receiver interface\n @dev Interface for any contract that wants to support safeTransfers\n from ERC-721 asset contracts."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          44494
        ],
        "name": "IERC721Receiver",
        "nameLocation": "307:15:43",
        "scope": 44495,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 43
} as const;