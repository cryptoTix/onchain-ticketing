export const SignedMath = {
  "abi": [],
  "bytecode": {
    "object": "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220f8d86d6aa82dc5b878c6d4b4d128831e870288f192a95244d52f5556280f18c964736f6c634300081a0033",
    "sourceMap": "258:2354:59:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x5f80fdfea2646970667358221220f8d86d6aa82dc5b878c6d4b4d128831e870288f192a95244d52f5556280f18c964736f6c634300081a0033",
    "sourceMap": "258:2354:59:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Standard signed math utilities missing in the Solidity language.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":\"SignedMath\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03\",\"dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ\"]}},\"version\":1}",
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
        "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol": "SignedMath"
      },
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol": {
        "keccak256": "0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54",
        "urls": [
          "bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8",
          "dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3",
        "urls": [
          "bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03",
          "dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol",
    "id": 50223,
    "exportedSymbols": {
      "SafeCast": [
        50078
      ],
      "SignedMath": [
        50222
      ]
    },
    "nodeType": "SourceUnit",
    "src": "109:2504:59",
    "nodes": [
      {
        "id": 50080,
        "nodeType": "PragmaDirective",
        "src": "109:24:59",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 50082,
        "nodeType": "ImportDirective",
        "src": "135:40:59",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol",
        "file": "./SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50223,
        "sourceUnit": 50079,
        "symbolAliases": [
          {
            "foreign": {
              "id": 50081,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50078,
              "src": "143:8:59",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 50222,
        "nodeType": "ContractDefinition",
        "src": "258:2354:59",
        "nodes": [
          {
            "id": 50113,
            "nodeType": "FunctionDefinition",
            "src": "662:299:59",
            "nodes": [],
            "body": {
              "id": 50112,
              "nodeType": "Block",
              "src": "746:215:59",
              "nodes": [],
              "statements": [
                {
                  "id": 50111,
                  "nodeType": "UncheckedBlock",
                  "src": "756:199:59",
                  "statements": [
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 50109,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 50095,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50090,
                          "src": "894:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "^",
                        "rightExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 50107,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    "id": 50098,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 50096,
                                      "name": "a",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 50088,
                                      "src": "900:1:59",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "^",
                                    "rightExpression": {
                                      "id": 50097,
                                      "name": "b",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 50090,
                                      "src": "904:1:59",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "src": "900:5:59",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  }
                                ],
                                "id": 50099,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "899:7:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "id": 50104,
                                        "name": "condition",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 50086,
                                        "src": "932:9:59",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      ],
                                      "expression": {
                                        "id": 50102,
                                        "name": "SafeCast",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 50078,
                                        "src": "916:8:59",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_SafeCast_$50078_$",
                                          "typeString": "type(library SafeCast)"
                                        }
                                      },
                                      "id": 50103,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "925:6:59",
                                      "memberName": "toUint",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 50077,
                                      "src": "916:15:59",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_bool_$returns$_t_uint256_$",
                                        "typeString": "function (bool) pure returns (uint256)"
                                      }
                                    },
                                    "id": 50105,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "916:26:59",
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
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 50101,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "909:6:59",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_int256_$",
                                    "typeString": "type(int256)"
                                  },
                                  "typeName": {
                                    "id": 50100,
                                    "name": "int256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "909:6:59",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 50106,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "909:34:59",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "src": "899:44:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 50108,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "898:46:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "894:50:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "functionReturnParameters": 50094,
                      "id": 50110,
                      "nodeType": "Return",
                      "src": "887:57:59"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 50084,
              "nodeType": "StructuredDocumentation",
              "src": "283:374:59",
              "text": " @dev Branchless ternary evaluation for `a ? b : c`. Gas costs are constant.\n IMPORTANT: This function may reduce bytecode size and consume less gas when used standalone.\n However, the compiler may optimize Solidity ternary operations (i.e. `a ? b : c`) to only compute\n one branch when needed, making this function more expensive."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ternary",
            "nameLocation": "671:7:59",
            "parameters": {
              "id": 50091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50086,
                  "mutability": "mutable",
                  "name": "condition",
                  "nameLocation": "684:9:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 50113,
                  "src": "679:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 50085,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "679:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50088,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "702:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 50113,
                  "src": "695:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50087,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50090,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "712:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 50113,
                  "src": "705:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50089,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "705:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "678:36:59"
            },
            "returnParameters": {
              "id": 50094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50093,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50113,
                  "src": "738:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50092,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "738:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "737:8:59"
            },
            "scope": 50222,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50132,
            "nodeType": "FunctionDefinition",
            "src": "1038:108:59",
            "nodes": [],
            "body": {
              "id": 50131,
              "nodeType": "Block",
              "src": "1102:44:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 50126,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 50124,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50116,
                          "src": "1127:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 50125,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50118,
                          "src": "1131:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "1127:5:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 50127,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50116,
                        "src": "1134:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 50128,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50118,
                        "src": "1137:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 50123,
                      "name": "ternary",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50113,
                      "src": "1119:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_int256_$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (bool,int256,int256) pure returns (int256)"
                      }
                    },
                    "id": 50129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1119:20:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 50122,
                  "id": 50130,
                  "nodeType": "Return",
                  "src": "1112:27:59"
                }
              ]
            },
            "documentation": {
              "id": 50114,
              "nodeType": "StructuredDocumentation",
              "src": "967:66:59",
              "text": " @dev Returns the largest of two signed numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "1047:3:59",
            "parameters": {
              "id": 50119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50116,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1058:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 50132,
                  "src": "1051:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50115,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1051:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50118,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1068:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 50132,
                  "src": "1061:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50117,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1061:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1050:20:59"
            },
            "returnParameters": {
              "id": 50122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50121,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50132,
                  "src": "1094:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50120,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1094:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1093:8:59"
            },
            "scope": 50222,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50151,
            "nodeType": "FunctionDefinition",
            "src": "1224:108:59",
            "nodes": [],
            "body": {
              "id": 50150,
              "nodeType": "Block",
              "src": "1288:44:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 50145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 50143,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50135,
                          "src": "1313:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 50144,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50137,
                          "src": "1317:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "1313:5:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 50146,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50135,
                        "src": "1320:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 50147,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50137,
                        "src": "1323:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 50142,
                      "name": "ternary",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50113,
                      "src": "1305:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_int256_$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (bool,int256,int256) pure returns (int256)"
                      }
                    },
                    "id": 50148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1305:20:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 50141,
                  "id": 50149,
                  "nodeType": "Return",
                  "src": "1298:27:59"
                }
              ]
            },
            "documentation": {
              "id": 50133,
              "nodeType": "StructuredDocumentation",
              "src": "1152:67:59",
              "text": " @dev Returns the smallest of two signed numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "1233:3:59",
            "parameters": {
              "id": 50138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50135,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1244:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 50151,
                  "src": "1237:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50134,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1237:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50137,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1254:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 50151,
                  "src": "1247:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50136,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1247:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1236:20:59"
            },
            "returnParameters": {
              "id": 50141,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50140,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50151,
                  "src": "1280:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50139,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1280:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1279:8:59"
            },
            "scope": 50222,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50195,
            "nodeType": "FunctionDefinition",
            "src": "1469:230:59",
            "nodes": [],
            "body": {
              "id": 50194,
              "nodeType": "Block",
              "src": "1537:162:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    50162
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50162,
                      "mutability": "mutable",
                      "name": "x",
                      "nameLocation": "1606:1:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 50194,
                      "src": "1599:8:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 50161,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1599:6:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50175,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 50174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 50165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 50163,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50154,
                            "src": "1611:1:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "id": 50164,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50156,
                            "src": "1615:1:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "1611:5:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 50166,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1610:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 50172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 50169,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 50167,
                                  "name": "a",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50154,
                                  "src": "1622:1:59",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "^",
                                "rightExpression": {
                                  "id": 50168,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50156,
                                  "src": "1626:1:59",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "1622:5:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 50170,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1621:7:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 50171,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1632:1:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "1621:12:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 50173,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1620:14:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1610:24:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1599:35:59"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 50192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50176,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50162,
                      "src": "1651:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 50190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 50184,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "arguments": [
                                    {
                                      "id": 50181,
                                      "name": "x",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 50162,
                                      "src": "1671:1:59",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    ],
                                    "id": 50180,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "1663:7:59",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 50179,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1663:7:59",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 50182,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1663:10:59",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "323535",
                                  "id": 50183,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1677:3:59",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_255_by_1",
                                    "typeString": "int_const 255"
                                  },
                                  "value": "255"
                                },
                                "src": "1663:17:59",
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
                              "id": 50178,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1656:6:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_int256_$",
                                "typeString": "type(int256)"
                              },
                              "typeName": {
                                "id": 50177,
                                "name": "int256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1656:6:59",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 50185,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1656:25:59",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 50188,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 50186,
                                  "name": "a",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50154,
                                  "src": "1685:1:59",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "^",
                                "rightExpression": {
                                  "id": 50187,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50156,
                                  "src": "1689:1:59",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "1685:5:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 50189,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1684:7:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "1656:35:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 50191,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1655:37:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1651:41:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 50160,
                  "id": 50193,
                  "nodeType": "Return",
                  "src": "1644:48:59"
                }
              ]
            },
            "documentation": {
              "id": 50152,
              "nodeType": "StructuredDocumentation",
              "src": "1338:126:59",
              "text": " @dev Returns the average of two signed numbers without overflow.\n The result is rounded towards zero."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "average",
            "nameLocation": "1478:7:59",
            "parameters": {
              "id": 50157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50154,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1493:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 50195,
                  "src": "1486:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50153,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1486:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50156,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1503:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 50195,
                  "src": "1496:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50155,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1496:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1485:20:59"
            },
            "returnParameters": {
              "id": 50160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50159,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50195,
                  "src": "1529:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50158,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1529:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1528:8:59"
            },
            "scope": 50222,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50221,
            "nodeType": "FunctionDefinition",
            "src": "1788:822:59",
            "nodes": [],
            "body": {
              "id": 50220,
              "nodeType": "Block",
              "src": "1843:767:59",
              "nodes": [],
              "statements": [
                {
                  "id": 50219,
                  "nodeType": "UncheckedBlock",
                  "src": "1853:751:59",
                  "statements": [
                    {
                      "assignments": [
                        50204
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 50204,
                          "mutability": "mutable",
                          "name": "mask",
                          "nameLocation": "2424:4:59",
                          "nodeType": "VariableDeclaration",
                          "scope": 50219,
                          "src": "2417:11:59",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 50203,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2417:6:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 50208,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 50207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 50205,
                          "name": "n",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50198,
                          "src": "2431:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">>",
                        "rightExpression": {
                          "hexValue": "323535",
                          "id": 50206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2436:3:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "2431:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "2417:22:59"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 50216,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 50213,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 50211,
                                    "name": "n",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 50198,
                                    "src": "2576:1:59",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "+",
                                  "rightExpression": {
                                    "id": 50212,
                                    "name": "mask",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 50204,
                                    "src": "2580:4:59",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "2576:8:59",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "id": 50214,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "2575:10:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "^",
                            "rightExpression": {
                              "id": 50215,
                              "name": "mask",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50204,
                              "src": "2588:4:59",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "2575:17:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          ],
                          "id": 50210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2567:7:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 50209,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2567:7:59",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 50217,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2567:26:59",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 50202,
                      "id": 50218,
                      "nodeType": "Return",
                      "src": "2560:33:59"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 50196,
              "nodeType": "StructuredDocumentation",
              "src": "1705:78:59",
              "text": " @dev Returns the absolute unsigned value of a signed value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "abs",
            "nameLocation": "1797:3:59",
            "parameters": {
              "id": 50199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50198,
                  "mutability": "mutable",
                  "name": "n",
                  "nameLocation": "1808:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 50221,
                  "src": "1801:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50197,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1801:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1800:10:59"
            },
            "returnParameters": {
              "id": 50202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50201,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50221,
                  "src": "1834:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50200,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1834:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1833:9:59"
            },
            "scope": 50222,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SignedMath",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 50083,
          "nodeType": "StructuredDocumentation",
          "src": "177:80:59",
          "text": " @dev Standard signed math utilities missing in the Solidity language."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          50222
        ],
        "name": "SignedMath",
        "nameLocation": "266:10:59",
        "scope": 50223,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 59
} as const;