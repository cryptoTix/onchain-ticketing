export const Comparators = {
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b3150c1e4b3863b3362b9d7087ecd207d1701a6508b2b8f2dc63b1237048917e64736f6c634300081a0033",
    "sourceMap": "224:218:40:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;224:218:40;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b3150c1e4b3863b3362b9d7087ecd207d1701a6508b2b8f2dc63b1237048917e64736f6c634300081a0033",
    "sourceMap": "224:218:40:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Provides a set of functions to compare values. _Available since v5.1._\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/Comparators.sol\":\"Comparators\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/Comparators.sol\":{\"keccak256\":\"0x302eecd8cf323b4690e3494a7d960b3cbce077032ab8ef655b323cdd136cec58\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://49ba706f1bc476d68fe6c1fad75517acea4e9e275be0989b548e292eb3a3eacd\",\"dweb:/ipfs/QmeBpvcdGWzWMKTQESUCEhHgnEQYYATVwPxLMxa6vMT7jC\"]}},\"version\":1}",
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
      "evmVersion": "paris",
      "libraries": {}
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
    "id": 40992,
    "exportedSymbols": {
      "Comparators": [
        40991
      ]
    },
    "nodeType": "SourceUnit",
    "src": "105:338:40",
    "nodes": [
      {
        "id": 40961,
        "nodeType": "PragmaDirective",
        "src": "105:24:40",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 40991,
        "nodeType": "ContractDefinition",
        "src": "224:218:40",
        "nodes": [
          {
            "id": 40976,
            "nodeType": "FunctionDefinition",
            "src": "250:92:40",
            "nodes": [],
            "body": {
              "id": 40975,
              "nodeType": "Block",
              "src": "313:29:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 40973,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 40971,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40964,
                      "src": "330:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 40972,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40966,
                      "src": "334:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "330:5:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 40970,
                  "id": 40974,
                  "nodeType": "Return",
                  "src": "323:12:40"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "lt",
            "nameLocation": "259:2:40",
            "parameters": {
              "id": 40967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40964,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "270:1:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 40976,
                  "src": "262:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40963,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "262:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40966,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "281:1:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 40976,
                  "src": "273:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40965,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "261:22:40"
            },
            "returnParameters": {
              "id": 40970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40969,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 40976,
                  "src": "307:4:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 40968,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:4:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "306:6:40"
            },
            "scope": 40991,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 40990,
            "nodeType": "FunctionDefinition",
            "src": "348:92:40",
            "nodes": [],
            "body": {
              "id": 40989,
              "nodeType": "Block",
              "src": "411:29:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 40987,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 40985,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40978,
                      "src": "428:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 40986,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40980,
                      "src": "432:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "428:5:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 40984,
                  "id": 40988,
                  "nodeType": "Return",
                  "src": "421:12:40"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "gt",
            "nameLocation": "357:2:40",
            "parameters": {
              "id": 40981,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40978,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "368:1:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 40990,
                  "src": "360:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40977,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40980,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "379:1:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 40990,
                  "src": "371:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40979,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "371:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "359:22:40"
            },
            "returnParameters": {
              "id": 40984,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 40983,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 40990,
                  "src": "405:4:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 40982,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:4:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "404:6:40"
            },
            "scope": 40991,
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
          "id": 40962,
          "nodeType": "StructuredDocumentation",
          "src": "131:92:40",
          "text": " @dev Provides a set of functions to compare values.\n _Available since v5.1._"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          40991
        ],
        "name": "Comparators",
        "nameLocation": "232:11:40",
        "scope": 40992,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 40
} as const;