export const Comparators = {
  "abi": [],
  "bytecode": {
    "object": "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea26469706673582212203e5005b3d6ce8d0463590e01a2879a80eab71b7456bbca849823dcd1f01eed8364736f6c634300081a0033",
    "sourceMap": "224:218:47:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x5f80fdfea26469706673582212203e5005b3d6ce8d0463590e01a2879a80eab71b7456bbca849823dcd1f01eed8364736f6c634300081a0033",
    "sourceMap": "224:218:47:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Provides a set of functions to compare values. _Available since v5.1._\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/Comparators.sol\":\"Comparators\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/Comparators.sol\":{\"keccak256\":\"0x302eecd8cf323b4690e3494a7d960b3cbce077032ab8ef655b323cdd136cec58\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://49ba706f1bc476d68fe6c1fad75517acea4e9e275be0989b548e292eb3a3eacd\",\"dweb:/ipfs/QmeBpvcdGWzWMKTQESUCEhHgnEQYYATVwPxLMxa6vMT7jC\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.26+commit.8a97fa7a"
    },
    "language": "Solidity",
    "output": {
      "abi": [],
      "devdoc": {
        "kind": "dev",
        "methods": {},
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
        "node_modules/@openzeppelin/contracts/utils/Comparators.sol": "Comparators"
      },
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/Comparators.sol": {
        "keccak256": "0x302eecd8cf323b4690e3494a7d960b3cbce077032ab8ef655b323cdd136cec58",
        "urls": [
          "bzz-raw://49ba706f1bc476d68fe6c1fad75517acea4e9e275be0989b548e292eb3a3eacd",
          "dweb:/ipfs/QmeBpvcdGWzWMKTQESUCEhHgnEQYYATVwPxLMxa6vMT7jC"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/Comparators.sol",
    "id": 45510,
    "exportedSymbols": {
      "Comparators": [
        45509
      ]
    },
    "nodeType": "SourceUnit",
    "src": "105:338:47",
    "nodes": [
      {
        "id": 45479,
        "nodeType": "PragmaDirective",
        "src": "105:24:47",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 45509,
        "nodeType": "ContractDefinition",
        "src": "224:218:47",
        "nodes": [
          {
            "id": 45494,
            "nodeType": "FunctionDefinition",
            "src": "250:92:47",
            "nodes": [],
            "body": {
              "id": 45493,
              "nodeType": "Block",
              "src": "313:29:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 45491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45489,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45482,
                      "src": "330:1:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 45490,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45484,
                      "src": "334:1:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "330:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 45488,
                  "id": 45492,
                  "nodeType": "Return",
                  "src": "323:12:47"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "lt",
            "nameLocation": "259:2:47",
            "parameters": {
              "id": 45485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45482,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "270:1:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 45494,
                  "src": "262:9:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45481,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "262:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45484,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "281:1:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 45494,
                  "src": "273:9:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45483,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "261:22:47"
            },
            "returnParameters": {
              "id": 45488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45487,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 45494,
                  "src": "307:4:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45486,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "306:6:47"
            },
            "scope": 45509,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45508,
            "nodeType": "FunctionDefinition",
            "src": "348:92:47",
            "nodes": [],
            "body": {
              "id": 45507,
              "nodeType": "Block",
              "src": "411:29:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 45505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45503,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45496,
                      "src": "428:1:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 45504,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45498,
                      "src": "432:1:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "428:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 45502,
                  "id": 45506,
                  "nodeType": "Return",
                  "src": "421:12:47"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "gt",
            "nameLocation": "357:2:47",
            "parameters": {
              "id": 45499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45496,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "368:1:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 45508,
                  "src": "360:9:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45495,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45498,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "379:1:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 45508,
                  "src": "371:9:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45497,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "371:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "359:22:47"
            },
            "returnParameters": {
              "id": 45502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45501,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 45508,
                  "src": "405:4:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45500,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "404:6:47"
            },
            "scope": 45509,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Comparators",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 45480,
          "nodeType": "StructuredDocumentation",
          "src": "131:92:47",
          "text": " @dev Provides a set of functions to compare values.\n _Available since v5.1._"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          45509
        ],
        "name": "Comparators",
        "nameLocation": "232:11:47",
        "scope": 45510,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 47
} as const;