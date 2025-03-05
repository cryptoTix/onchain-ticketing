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
    "id": 50348,
    "exportedSymbols": {
      "ReentrancyGuard": [
        50347
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2301:55",
    "nodes": [
      {
        "id": 50325,
        "nodeType": "PragmaDirective",
        "src": "32:23:55",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 50347,
        "nodeType": "ContractDefinition",
        "src": "191:2141:55",
        "nodes": [
          {
            "id": 50329,
            "nodeType": "ErrorDefinition",
            "src": "556:19:55",
            "nodes": [],
            "documentation": {
              "id": 50327,
              "nodeType": "StructuredDocumentation",
              "src": "514:37:55",
              "text": "@dev Unauthorized reentrant call."
            },
            "errorSelector": "ab143c06",
            "name": "Reentrancy",
            "nameLocation": "562:10:55",
            "parameters": {
              "id": 50328,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "572:2:55"
            }
          },
          {
            "id": 50333,
            "nodeType": "VariableDeclaration",
            "src": "1082:70:55",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 50330,
              "nodeType": "StructuredDocumentation",
              "src": "864:213:55",
              "text": "@dev Equivalent to: `uint72(bytes9(keccak256(\"_REENTRANCY_GUARD_SLOT\")))`.\n 9 bytes is large enough to avoid collisions with lower slots,\n but not too large to result in excessive bytecode bloat."
            },
            "mutability": "constant",
            "name": "_REENTRANCY_GUARD_SLOT",
            "nameLocation": "1107:22:55",
            "scope": 50347,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 50331,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1082:7:55",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "3078393239656565313439623462643231323638",
              "id": 50332,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1132:20:55",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2704676748321268830824_by_1",
                "typeString": "int_const 2704676748321268830824"
              },
              "value": "0x929eee149b4bd21268"
            },
            "visibility": "private"
          },
          {
            "id": 50340,
            "nodeType": "ModifierDefinition",
            "src": "1490:474:55",
            "nodes": [],
            "body": {
              "id": 50339,
              "nodeType": "Block",
              "src": "1522:442:55",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1584:236:55",
                    "nodeType": "YulBlock",
                    "src": "1584:236:55",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "1646:110:55",
                          "nodeType": "YulBlock",
                          "src": "1646:110:55",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1671:4:55",
                                    "nodeType": "YulLiteral",
                                    "src": "1671:4:55",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1677:10:55",
                                    "nodeType": "YulLiteral",
                                    "src": "1677:10:55",
                                    "type": "",
                                    "value": "0xab143c06"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "1664:6:55",
                                  "nodeType": "YulIdentifier",
                                  "src": "1664:6:55"
                                },
                                "nativeSrc": "1664:24:55",
                                "nodeType": "YulFunctionCall",
                                "src": "1664:24:55"
                              },
                              "nativeSrc": "1664:24:55",
                              "nodeType": "YulExpressionStatement",
                              "src": "1664:24:55"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1731:4:55",
                                    "nodeType": "YulLiteral",
                                    "src": "1731:4:55",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "1737:4:55",
                                    "nodeType": "YulLiteral",
                                    "src": "1737:4:55",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "1724:6:55",
                                  "nodeType": "YulIdentifier",
                                  "src": "1724:6:55"
                                },
                                "nativeSrc": "1724:18:55",
                                "nodeType": "YulFunctionCall",
                                "src": "1724:18:55"
                              },
                              "nativeSrc": "1724:18:55",
                              "nodeType": "YulExpressionStatement",
                              "src": "1724:18:55"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_REENTRANCY_GUARD_SLOT",
                                  "nativeSrc": "1610:22:55",
                                  "nodeType": "YulIdentifier",
                                  "src": "1610:22:55"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nativeSrc": "1604:5:55",
                                "nodeType": "YulIdentifier",
                                "src": "1604:5:55"
                              },
                              "nativeSrc": "1604:29:55",
                              "nodeType": "YulFunctionCall",
                              "src": "1604:29:55"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "1635:7:55",
                                "nodeType": "YulIdentifier",
                                "src": "1635:7:55"
                              },
                              "nativeSrc": "1635:9:55",
                              "nodeType": "YulFunctionCall",
                              "src": "1635:9:55"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "1601:2:55",
                            "nodeType": "YulIdentifier",
                            "src": "1601:2:55"
                          },
                          "nativeSrc": "1601:44:55",
                          "nodeType": "YulFunctionCall",
                          "src": "1601:44:55"
                        },
                        "nativeSrc": "1598:158:55",
                        "nodeType": "YulIf",
                        "src": "1598:158:55"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_REENTRANCY_GUARD_SLOT",
                              "nativeSrc": "1776:22:55",
                              "nodeType": "YulIdentifier",
                              "src": "1776:22:55"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "1800:7:55",
                                "nodeType": "YulIdentifier",
                                "src": "1800:7:55"
                              },
                              "nativeSrc": "1800:9:55",
                              "nodeType": "YulFunctionCall",
                              "src": "1800:9:55"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "1769:6:55",
                            "nodeType": "YulIdentifier",
                            "src": "1769:6:55"
                          },
                          "nativeSrc": "1769:41:55",
                          "nodeType": "YulFunctionCall",
                          "src": "1769:41:55"
                        },
                        "nativeSrc": "1769:41:55",
                        "nodeType": "YulExpressionStatement",
                        "src": "1769:41:55"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 50333,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1610:22:55",
                      "valueSize": 1
                    },
                    {
                      "declaration": 50333,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1776:22:55",
                      "valueSize": 1
                    }
                  ],
                  "id": 50336,
                  "nodeType": "InlineAssembly",
                  "src": "1575:245:55"
                },
                {
                  "id": 50337,
                  "nodeType": "PlaceholderStatement",
                  "src": "1829:1:55"
                },
                {
                  "AST": {
                    "nativeSrc": "1892:66:55",
                    "nodeType": "YulBlock",
                    "src": "1892:66:55",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_REENTRANCY_GUARD_SLOT",
                              "nativeSrc": "1913:22:55",
                              "nodeType": "YulIdentifier",
                              "src": "1913:22:55"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "1937:8:55",
                                "nodeType": "YulIdentifier",
                                "src": "1937:8:55"
                              },
                              "nativeSrc": "1937:10:55",
                              "nodeType": "YulFunctionCall",
                              "src": "1937:10:55"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "1906:6:55",
                            "nodeType": "YulIdentifier",
                            "src": "1906:6:55"
                          },
                          "nativeSrc": "1906:42:55",
                          "nodeType": "YulFunctionCall",
                          "src": "1906:42:55"
                        },
                        "nativeSrc": "1906:42:55",
                        "nodeType": "YulExpressionStatement",
                        "src": "1906:42:55"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 50333,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1913:22:55",
                      "valueSize": 1
                    }
                  ],
                  "id": 50338,
                  "nodeType": "InlineAssembly",
                  "src": "1883:75:55"
                }
              ]
            },
            "documentation": {
              "id": 50334,
              "nodeType": "StructuredDocumentation",
              "src": "1442:43:55",
              "text": "@dev Guards a function from reentrancy."
            },
            "name": "nonReentrant",
            "nameLocation": "1499:12:55",
            "parameters": {
              "id": 50335,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1511:2:55"
            },
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 50346,
            "nodeType": "ModifierDefinition",
            "src": "2033:297:55",
            "nodes": [],
            "body": {
              "id": 50345,
              "nodeType": "Block",
              "src": "2069:261:55",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2131:182:55",
                    "nodeType": "YulBlock",
                    "src": "2131:182:55",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "2193:110:55",
                          "nodeType": "YulBlock",
                          "src": "2193:110:55",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2218:4:55",
                                    "nodeType": "YulLiteral",
                                    "src": "2218:4:55",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2224:10:55",
                                    "nodeType": "YulLiteral",
                                    "src": "2224:10:55",
                                    "type": "",
                                    "value": "0xab143c06"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "2211:6:55",
                                  "nodeType": "YulIdentifier",
                                  "src": "2211:6:55"
                                },
                                "nativeSrc": "2211:24:55",
                                "nodeType": "YulFunctionCall",
                                "src": "2211:24:55"
                              },
                              "nativeSrc": "2211:24:55",
                              "nodeType": "YulExpressionStatement",
                              "src": "2211:24:55"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2278:4:55",
                                    "nodeType": "YulLiteral",
                                    "src": "2278:4:55",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2284:4:55",
                                    "nodeType": "YulLiteral",
                                    "src": "2284:4:55",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "2271:6:55",
                                  "nodeType": "YulIdentifier",
                                  "src": "2271:6:55"
                                },
                                "nativeSrc": "2271:18:55",
                                "nodeType": "YulFunctionCall",
                                "src": "2271:18:55"
                              },
                              "nativeSrc": "2271:18:55",
                              "nodeType": "YulExpressionStatement",
                              "src": "2271:18:55"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_REENTRANCY_GUARD_SLOT",
                                  "nativeSrc": "2157:22:55",
                                  "nodeType": "YulIdentifier",
                                  "src": "2157:22:55"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nativeSrc": "2151:5:55",
                                "nodeType": "YulIdentifier",
                                "src": "2151:5:55"
                              },
                              "nativeSrc": "2151:29:55",
                              "nodeType": "YulFunctionCall",
                              "src": "2151:29:55"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "2182:7:55",
                                "nodeType": "YulIdentifier",
                                "src": "2182:7:55"
                              },
                              "nativeSrc": "2182:9:55",
                              "nodeType": "YulFunctionCall",
                              "src": "2182:9:55"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "2148:2:55",
                            "nodeType": "YulIdentifier",
                            "src": "2148:2:55"
                          },
                          "nativeSrc": "2148:44:55",
                          "nodeType": "YulFunctionCall",
                          "src": "2148:44:55"
                        },
                        "nativeSrc": "2145:158:55",
                        "nodeType": "YulIf",
                        "src": "2145:158:55"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 50333,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2157:22:55",
                      "valueSize": 1
                    }
                  ],
                  "id": 50343,
                  "nodeType": "InlineAssembly",
                  "src": "2122:191:55"
                },
                {
                  "id": 50344,
                  "nodeType": "PlaceholderStatement",
                  "src": "2322:1:55"
                }
              ]
            },
            "documentation": {
              "id": 50341,
              "nodeType": "StructuredDocumentation",
              "src": "1970:58:55",
              "text": "@dev Guards a view function from read-only reentrancy."
            },
            "name": "nonReadReentrant",
            "nameLocation": "2042:16:55",
            "parameters": {
              "id": 50342,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2058:2:55"
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
          "id": 50326,
          "nodeType": "StructuredDocumentation",
          "src": "57:134:55",
          "text": "@notice Reentrancy guard mixin.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/utils/ReentrancyGuard.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          50347
        ],
        "name": "ReentrancyGuard",
        "nameLocation": "209:15:55",
        "scope": 50348,
        "usedErrors": [
          50329
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 55
} as const;