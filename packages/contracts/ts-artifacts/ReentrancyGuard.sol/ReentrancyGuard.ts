export const ReentrancyGuard = {
  "abi": [
    {
      "type": "error",
      "name": "Reentrancy",
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
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"Reentrancy\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"Solady (https://github.com/vectorized/solady/blob/main/src/utils/ReentrancyGuard.sol)\",\"errors\":{\"Reentrancy()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"stateVariables\":{\"_REENTRANCY_GUARD_SLOT\":{\"details\":\"Equivalent to: `uint72(bytes9(keccak256(\\\"_REENTRANCY_GUARD_SLOT\\\")))`. 9 bytes is large enough to avoid collisions with lower slots, but not too large to result in excessive bytecode bloat.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Reentrancy guard mixin.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/solady/src/utils/ReentrancyGuard.sol\":\"ReentrancyGuard\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/solady/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98\",\"dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.26+commit.8a97fa7a"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "Reentrancy"
        }
      ],
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
        "node_modules/solady/src/utils/ReentrancyGuard.sol": "ReentrancyGuard"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/solady/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8",
        "urls": [
          "bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98",
          "dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/solady/src/utils/ReentrancyGuard.sol",
    "id": 54896,
    "exportedSymbols": {
      "ReentrancyGuard": [
        54895
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2301:63",
    "nodes": [
      {
        "id": 54873,
        "nodeType": "PragmaDirective",
        "src": "32:23:63",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 54895,
        "nodeType": "ContractDefinition",
        "src": "191:2141:63",
        "nodes": [
          {
            "id": 54877,
            "nodeType": "ErrorDefinition",
            "src": "556:19:63",
            "nodes": [],
            "documentation": {
              "id": 54875,
              "nodeType": "StructuredDocumentation",
              "src": "514:37:63",
              "text": "@dev Unauthorized reentrant call."
            },
            "errorSelector": "ab143c06",
            "name": "Reentrancy",
            "nameLocation": "562:10:63",
            "parameters": {
              "id": 54876,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "572:2:63"
            }
          },
          {
            "id": 54881,
            "nodeType": "VariableDeclaration",
            "src": "1082:70:63",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54878,
              "nodeType": "StructuredDocumentation",
              "src": "864:213:63",
              "text": "@dev Equivalent to: `uint72(bytes9(keccak256(\"_REENTRANCY_GUARD_SLOT\")))`.\n 9 bytes is large enough to avoid collisions with lower slots,\n but not too large to result in excessive bytecode bloat."
            },
            "mutability": "constant",
            "name": "_REENTRANCY_GUARD_SLOT",
            "nameLocation": "1107:22:63",
            "scope": 54895,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54879,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1082:7:63",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "3078393239656565313439623462643231323638",
              "id": 54880,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1132:20:63",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2704676748321268830824_by_1",
                "typeString": "int_const 2704676748321268830824"
              },
              "value": "0x929eee149b4bd21268"
            },
            "visibility": "private"
          },
          {
            "id": 54888,
            "nodeType": "ModifierDefinition",
            "src": "1490:474:63",
            "nodes": [],
            "body": {
              "id": 54887,
              "nodeType": "Block",
              "src": "1522:442:63",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1584:236:63",
                    "nodeType": "YulBlock",
                    "src": "1584:236:63",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "1646:110:63",
                          "nodeType": "YulBlock",
                          "src": "1646:110:63",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1671:4:63",
                                    "nodeType": "YulLiteral",
                                    "src": "1671:4:63",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1677:10:63",
                                    "nodeType": "YulLiteral",
                                    "src": "1677:10:63",
                                    "type": "",
                                    "value": "0xab143c06"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "1664:6:63",
                                  "nodeType": "YulIdentifier",
                                  "src": "1664:6:63"
                                },
                                "nativeSrc": "1664:24:63",
                                "nodeType": "YulFunctionCall",
                                "src": "1664:24:63"
                              },
                              "nativeSrc": "1664:24:63",
                              "nodeType": "YulExpressionStatement",
                              "src": "1664:24:63"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1731:4:63",
                                    "nodeType": "YulLiteral",
                                    "src": "1731:4:63",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1737:4:63",
                                    "nodeType": "YulLiteral",
                                    "src": "1737:4:63",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "1724:6:63",
                                  "nodeType": "YulIdentifier",
                                  "src": "1724:6:63"
                                },
                                "nativeSrc": "1724:18:63",
                                "nodeType": "YulFunctionCall",
                                "src": "1724:18:63"
                              },
                              "nativeSrc": "1724:18:63",
                              "nodeType": "YulExpressionStatement",
                              "src": "1724:18:63"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_REENTRANCY_GUARD_SLOT",
                                  "nativeSrc": "1610:22:63",
                                  "nodeType": "YulIdentifier",
                                  "src": "1610:22:63"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nativeSrc": "1604:5:63",
                                "nodeType": "YulIdentifier",
                                "src": "1604:5:63"
                              },
                              "nativeSrc": "1604:29:63",
                              "nodeType": "YulFunctionCall",
                              "src": "1604:29:63"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "1635:7:63",
                                "nodeType": "YulIdentifier",
                                "src": "1635:7:63"
                              },
                              "nativeSrc": "1635:9:63",
                              "nodeType": "YulFunctionCall",
                              "src": "1635:9:63"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "1601:2:63",
                            "nodeType": "YulIdentifier",
                            "src": "1601:2:63"
                          },
                          "nativeSrc": "1601:44:63",
                          "nodeType": "YulFunctionCall",
                          "src": "1601:44:63"
                        },
                        "nativeSrc": "1598:158:63",
                        "nodeType": "YulIf",
                        "src": "1598:158:63"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_REENTRANCY_GUARD_SLOT",
                              "nativeSrc": "1776:22:63",
                              "nodeType": "YulIdentifier",
                              "src": "1776:22:63"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "1800:7:63",
                                "nodeType": "YulIdentifier",
                                "src": "1800:7:63"
                              },
                              "nativeSrc": "1800:9:63",
                              "nodeType": "YulFunctionCall",
                              "src": "1800:9:63"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "1769:6:63",
                            "nodeType": "YulIdentifier",
                            "src": "1769:6:63"
                          },
                          "nativeSrc": "1769:41:63",
                          "nodeType": "YulFunctionCall",
                          "src": "1769:41:63"
                        },
                        "nativeSrc": "1769:41:63",
                        "nodeType": "YulExpressionStatement",
                        "src": "1769:41:63"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54881,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1610:22:63",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54881,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1776:22:63",
                      "valueSize": 1
                    }
                  ],
                  "id": 54884,
                  "nodeType": "InlineAssembly",
                  "src": "1575:245:63"
                },
                {
                  "id": 54885,
                  "nodeType": "PlaceholderStatement",
                  "src": "1829:1:63"
                },
                {
                  "AST": {
                    "nativeSrc": "1892:66:63",
                    "nodeType": "YulBlock",
                    "src": "1892:66:63",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_REENTRANCY_GUARD_SLOT",
                              "nativeSrc": "1913:22:63",
                              "nodeType": "YulIdentifier",
                              "src": "1913:22:63"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "1937:8:63",
                                "nodeType": "YulIdentifier",
                                "src": "1937:8:63"
                              },
                              "nativeSrc": "1937:10:63",
                              "nodeType": "YulFunctionCall",
                              "src": "1937:10:63"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "1906:6:63",
                            "nodeType": "YulIdentifier",
                            "src": "1906:6:63"
                          },
                          "nativeSrc": "1906:42:63",
                          "nodeType": "YulFunctionCall",
                          "src": "1906:42:63"
                        },
                        "nativeSrc": "1906:42:63",
                        "nodeType": "YulExpressionStatement",
                        "src": "1906:42:63"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54881,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1913:22:63",
                      "valueSize": 1
                    }
                  ],
                  "id": 54886,
                  "nodeType": "InlineAssembly",
                  "src": "1883:75:63"
                }
              ]
            },
            "documentation": {
              "id": 54882,
              "nodeType": "StructuredDocumentation",
              "src": "1442:43:63",
              "text": "@dev Guards a function from reentrancy."
            },
            "name": "nonReentrant",
            "nameLocation": "1499:12:63",
            "parameters": {
              "id": 54883,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1511:2:63"
            },
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 54894,
            "nodeType": "ModifierDefinition",
            "src": "2033:297:63",
            "nodes": [],
            "body": {
              "id": 54893,
              "nodeType": "Block",
              "src": "2069:261:63",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2131:182:63",
                    "nodeType": "YulBlock",
                    "src": "2131:182:63",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "2193:110:63",
                          "nodeType": "YulBlock",
                          "src": "2193:110:63",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2218:4:63",
                                    "nodeType": "YulLiteral",
                                    "src": "2218:4:63",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2224:10:63",
                                    "nodeType": "YulLiteral",
                                    "src": "2224:10:63",
                                    "type": "",
                                    "value": "0xab143c06"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "2211:6:63",
                                  "nodeType": "YulIdentifier",
                                  "src": "2211:6:63"
                                },
                                "nativeSrc": "2211:24:63",
                                "nodeType": "YulFunctionCall",
                                "src": "2211:24:63"
                              },
                              "nativeSrc": "2211:24:63",
                              "nodeType": "YulExpressionStatement",
                              "src": "2211:24:63"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2278:4:63",
                                    "nodeType": "YulLiteral",
                                    "src": "2278:4:63",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2284:4:63",
                                    "nodeType": "YulLiteral",
                                    "src": "2284:4:63",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "2271:6:63",
                                  "nodeType": "YulIdentifier",
                                  "src": "2271:6:63"
                                },
                                "nativeSrc": "2271:18:63",
                                "nodeType": "YulFunctionCall",
                                "src": "2271:18:63"
                              },
                              "nativeSrc": "2271:18:63",
                              "nodeType": "YulExpressionStatement",
                              "src": "2271:18:63"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_REENTRANCY_GUARD_SLOT",
                                  "nativeSrc": "2157:22:63",
                                  "nodeType": "YulIdentifier",
                                  "src": "2157:22:63"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nativeSrc": "2151:5:63",
                                "nodeType": "YulIdentifier",
                                "src": "2151:5:63"
                              },
                              "nativeSrc": "2151:29:63",
                              "nodeType": "YulFunctionCall",
                              "src": "2151:29:63"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "2182:7:63",
                                "nodeType": "YulIdentifier",
                                "src": "2182:7:63"
                              },
                              "nativeSrc": "2182:9:63",
                              "nodeType": "YulFunctionCall",
                              "src": "2182:9:63"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "2148:2:63",
                            "nodeType": "YulIdentifier",
                            "src": "2148:2:63"
                          },
                          "nativeSrc": "2148:44:63",
                          "nodeType": "YulFunctionCall",
                          "src": "2148:44:63"
                        },
                        "nativeSrc": "2145:158:63",
                        "nodeType": "YulIf",
                        "src": "2145:158:63"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 54881,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2157:22:63",
                      "valueSize": 1
                    }
                  ],
                  "id": 54891,
                  "nodeType": "InlineAssembly",
                  "src": "2122:191:63"
                },
                {
                  "id": 54892,
                  "nodeType": "PlaceholderStatement",
                  "src": "2322:1:63"
                }
              ]
            },
            "documentation": {
              "id": 54889,
              "nodeType": "StructuredDocumentation",
              "src": "1970:58:63",
              "text": "@dev Guards a view function from read-only reentrancy."
            },
            "name": "nonReadReentrant",
            "nameLocation": "2042:16:63",
            "parameters": {
              "id": 54890,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2058:2:63"
            },
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "ReentrancyGuard",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 54874,
          "nodeType": "StructuredDocumentation",
          "src": "57:134:63",
          "text": "@notice Reentrancy guard mixin.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/utils/ReentrancyGuard.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          54895
        ],
        "name": "ReentrancyGuard",
        "nameLocation": "209:15:63",
        "scope": 54896,
        "usedErrors": [
          54877
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 63
} as const;