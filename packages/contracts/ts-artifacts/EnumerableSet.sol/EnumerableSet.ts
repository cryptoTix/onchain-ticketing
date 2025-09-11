export const EnumerableSet = {
  "abi": [],
  "bytecode": {
    "object": "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220985cd807cc45506c8e395bfba3d83a0f30d081b39786bb876f9c7cb09d7adeba64736f6c634300081a0033",
    "sourceMap": "1330:11559:61:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x5f80fdfea2646970667358221220985cd807cc45506c8e395bfba3d83a0f30d081b39786bb876f9c7cb09d7adeba64736f6c634300081a0033",
    "sourceMap": "1330:11559:61:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Library for managing https://en.wikipedia.org/wiki/Set_(abstract_data_type)[sets] of primitive types. Sets have the following properties: - Elements are added, removed, and checked for existence in constant time (O(1)). - Elements are enumerated in O(n). No guarantees are made on the ordering. ```solidity contract Example {     // Add the library methods     using EnumerableSet for EnumerableSet.AddressSet;     // Declare a set state variable     EnumerableSet.AddressSet private mySet; } ``` As of v3.3.0, sets of type `bytes32` (`Bytes32Set`), `address` (`AddressSet`) and `uint256` (`UintSet`) are supported. [WARNING] ==== Trying to delete such a structure from storage will likely result in data corruption, rendering the structure unusable. See https://github.com/ethereum/solidity/pull/11843[ethereum/solidity#11843] for more info. In order to clean an EnumerableSet, you can either remove all elements one by one or create a fresh instance using an array of EnumerableSet. ====\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol\":\"EnumerableSet\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0x9b161e97b8967d4bc0c08d25741889a30692cdda4b71910bf1b0e315f1962212\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://821500c39d095eaa25b06f46e65f1d0e97c4c96b39227f79077dee7d9e84051f\",\"dweb:/ipfs/QmSTeGorKzSWF6HAmxo32uCZiEuKNvreQdUiX1AaYtUMTz\"]}},\"version\":1}",
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
        "node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol": "EnumerableSet"
      },
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol": {
        "keccak256": "0x9b161e97b8967d4bc0c08d25741889a30692cdda4b71910bf1b0e315f1962212",
        "urls": [
          "bzz-raw://821500c39d095eaa25b06f46e65f1d0e97c4c96b39227f79077dee7d9e84051f",
          "dweb:/ipfs/QmSTeGorKzSWF6HAmxo32uCZiEuKNvreQdUiX1AaYtUMTz"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol",
    "id": 52869,
    "exportedSymbols": {
      "EnumerableSet": [
        52868
      ]
    },
    "nodeType": "SourceUnit",
    "src": "205:12685:61",
    "nodes": [
      {
        "id": 52257,
        "nodeType": "PragmaDirective",
        "src": "205:24:61",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 52868,
        "nodeType": "ContractDefinition",
        "src": "1330:11559:61",
        "nodes": [
          {
            "id": 52266,
            "nodeType": "StructDefinition",
            "src": "1798:273:61",
            "nodes": [],
            "canonicalName": "EnumerableSet.Set",
            "members": [
              {
                "constant": false,
                "id": 52261,
                "mutability": "mutable",
                "name": "_values",
                "nameLocation": "1862:7:61",
                "nodeType": "VariableDeclaration",
                "scope": 52266,
                "src": "1852:17:61",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 52259,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1852:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 52260,
                  "nodeType": "ArrayTypeName",
                  "src": "1852:9:61",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 52265,
                "mutability": "mutable",
                "name": "_positions",
                "nameLocation": "2054:10:61",
                "nodeType": "VariableDeclaration",
                "scope": 52266,
                "src": "2020:44:61",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                  "typeString": "mapping(bytes32 => uint256)"
                },
                "typeName": {
                  "id": 52264,
                  "keyName": "value",
                  "keyNameLocation": "2036:5:61",
                  "keyType": {
                    "id": 52262,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2028:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "2020:33:61",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                    "typeString": "mapping(bytes32 => uint256)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 52263,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2045:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Set",
            "nameLocation": "1805:3:61",
            "scope": 52868,
            "visibility": "public"
          },
          {
            "id": 52308,
            "nodeType": "FunctionDefinition",
            "src": "2241:406:61",
            "nodes": [],
            "body": {
              "id": 52307,
              "nodeType": "Block",
              "src": "2310:337:61",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 52281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2324:22:61",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 52278,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52270,
                          "src": "2335:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          }
                        },
                        {
                          "id": 52279,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52272,
                          "src": "2340:5:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 52277,
                        "name": "_contains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52411,
                        "src": "2325:9:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                        }
                      },
                      "id": 52280,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2325:21:61",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 52305,
                    "nodeType": "Block",
                    "src": "2604:37:61",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 52303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2625:5:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 52276,
                        "id": 52304,
                        "nodeType": "Return",
                        "src": "2618:12:61"
                      }
                    ]
                  },
                  "id": 52306,
                  "nodeType": "IfStatement",
                  "src": "2320:321:61",
                  "trueBody": {
                    "id": 52302,
                    "nodeType": "Block",
                    "src": "2348:250:61",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 52287,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52272,
                              "src": "2379:5:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "expression": {
                                "id": 52282,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52270,
                                "src": "2362:3:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 52285,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2366:7:61",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 52261,
                              "src": "2362:11:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 52286,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2374:4:61",
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "src": "2362:16:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                              "typeString": "function (bytes32[] storage pointer,bytes32)"
                            }
                          },
                          "id": 52288,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2362:23:61",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 52289,
                        "nodeType": "ExpressionStatement",
                        "src": "2362:23:61"
                      },
                      {
                        "expression": {
                          "id": 52298,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "expression": {
                                "id": 52290,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52270,
                                "src": "2520:3:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 52293,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2524:10:61",
                              "memberName": "_positions",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 52265,
                              "src": "2520:14:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 52294,
                            "indexExpression": {
                              "id": 52292,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52272,
                              "src": "2535:5:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2520:21:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "expression": {
                                "id": 52295,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52270,
                                "src": "2544:3:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 52296,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2548:7:61",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 52261,
                              "src": "2544:11:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 52297,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2556:6:61",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "2544:18:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2520:42:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 52299,
                        "nodeType": "ExpressionStatement",
                        "src": "2520:42:61"
                      },
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 52300,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2583:4:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 52276,
                        "id": 52301,
                        "nodeType": "Return",
                        "src": "2576:11:61"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 52267,
              "nodeType": "StructuredDocumentation",
              "src": "2077:159:61",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_add",
            "nameLocation": "2250:4:61",
            "parameters": {
              "id": 52273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52270,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "2267:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52308,
                  "src": "2255:15:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 52269,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52268,
                      "name": "Set",
                      "nameLocations": [
                        "2255:3:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52266,
                      "src": "2255:3:61"
                    },
                    "referencedDeclaration": 52266,
                    "src": "2255:3:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52272,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2280:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52308,
                  "src": "2272:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52271,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2272:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2254:32:61"
            },
            "returnParameters": {
              "id": 52276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52275,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52308,
                  "src": "2304:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52274,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2304:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2303:6:61"
            },
            "scope": 52868,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 52392,
            "nodeType": "FunctionDefinition",
            "src": "2815:1368:61",
            "nodes": [],
            "body": {
              "id": 52391,
              "nodeType": "Block",
              "src": "2887:1296:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    52320
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52320,
                      "mutability": "mutable",
                      "name": "position",
                      "nameLocation": "2999:8:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52391,
                      "src": "2991:16:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 52319,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2991:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52325,
                  "initialValue": {
                    "baseExpression": {
                      "expression": {
                        "id": 52321,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52312,
                        "src": "3010:3:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 52322,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3014:10:61",
                      "memberName": "_positions",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 52265,
                      "src": "3010:14:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                        "typeString": "mapping(bytes32 => uint256)"
                      }
                    },
                    "id": 52324,
                    "indexExpression": {
                      "id": 52323,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52314,
                      "src": "3025:5:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3010:21:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2991:40:61"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 52328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 52326,
                      "name": "position",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52320,
                      "src": "3046:8:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 52327,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3058:1:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3046:13:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 52389,
                    "nodeType": "Block",
                    "src": "4140:37:61",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 52387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4161:5:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 52318,
                        "id": 52388,
                        "nodeType": "Return",
                        "src": "4154:12:61"
                      }
                    ]
                  },
                  "id": 52390,
                  "nodeType": "IfStatement",
                  "src": "3042:1135:61",
                  "trueBody": {
                    "id": 52386,
                    "nodeType": "Block",
                    "src": "3061:1073:61",
                    "statements": [
                      {
                        "assignments": [
                          52330
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 52330,
                            "mutability": "mutable",
                            "name": "valueIndex",
                            "nameLocation": "3421:10:61",
                            "nodeType": "VariableDeclaration",
                            "scope": 52386,
                            "src": "3413:18:61",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 52329,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3413:7:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 52334,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 52333,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 52331,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52320,
                            "src": "3434:8:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 52332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3445:1:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3434:12:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3413:33:61"
                      },
                      {
                        "assignments": [
                          52336
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 52336,
                            "mutability": "mutable",
                            "name": "lastIndex",
                            "nameLocation": "3468:9:61",
                            "nodeType": "VariableDeclaration",
                            "scope": 52386,
                            "src": "3460:17:61",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 52335,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3460:7:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 52342,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 52341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "expression": {
                                "id": 52337,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52312,
                                "src": "3480:3:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 52338,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3484:7:61",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 52261,
                              "src": "3480:11:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 52339,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3492:6:61",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "3480:18:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 52340,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3501:1:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3480:22:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3460:42:61"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 52345,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 52343,
                            "name": "valueIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52330,
                            "src": "3521:10:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "id": 52344,
                            "name": "lastIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52336,
                            "src": "3535:9:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3521:23:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 52370,
                        "nodeType": "IfStatement",
                        "src": "3517:378:61",
                        "trueBody": {
                          "id": 52369,
                          "nodeType": "Block",
                          "src": "3546:349:61",
                          "statements": [
                            {
                              "assignments": [
                                52347
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 52347,
                                  "mutability": "mutable",
                                  "name": "lastValue",
                                  "nameLocation": "3572:9:61",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 52369,
                                  "src": "3564:17:61",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  "typeName": {
                                    "id": 52346,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3564:7:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 52352,
                              "initialValue": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 52348,
                                    "name": "set",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52312,
                                    "src": "3584:3:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                                      "typeString": "struct EnumerableSet.Set storage pointer"
                                    }
                                  },
                                  "id": 52349,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3588:7:61",
                                  "memberName": "_values",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 52261,
                                  "src": "3584:11:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                    "typeString": "bytes32[] storage ref"
                                  }
                                },
                                "id": 52351,
                                "indexExpression": {
                                  "id": 52350,
                                  "name": "lastIndex",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 52336,
                                  "src": "3596:9:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3584:22:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "3564:42:61"
                            },
                            {
                              "expression": {
                                "id": 52359,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 52353,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 52312,
                                      "src": "3705:3:61",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                                        "typeString": "struct EnumerableSet.Set storage pointer"
                                      }
                                    },
                                    "id": 52356,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3709:7:61",
                                    "memberName": "_values",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 52261,
                                    "src": "3705:11:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                      "typeString": "bytes32[] storage ref"
                                    }
                                  },
                                  "id": 52357,
                                  "indexExpression": {
                                    "id": 52355,
                                    "name": "valueIndex",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52330,
                                    "src": "3717:10:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "3705:23:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 52358,
                                  "name": "lastValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 52347,
                                  "src": "3731:9:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "src": "3705:35:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "id": 52360,
                              "nodeType": "ExpressionStatement",
                              "src": "3705:35:61"
                            },
                            {
                              "expression": {
                                "id": 52367,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 52361,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 52312,
                                      "src": "3844:3:61",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                                        "typeString": "struct EnumerableSet.Set storage pointer"
                                      }
                                    },
                                    "id": 52364,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3848:10:61",
                                    "memberName": "_positions",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 52265,
                                    "src": "3844:14:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                      "typeString": "mapping(bytes32 => uint256)"
                                    }
                                  },
                                  "id": 52365,
                                  "indexExpression": {
                                    "id": 52363,
                                    "name": "lastValue",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52347,
                                    "src": "3859:9:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "3844:25:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 52366,
                                  "name": "position",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 52320,
                                  "src": "3872:8:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3844:36:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 52368,
                              "nodeType": "ExpressionStatement",
                              "src": "3844:36:61"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "expression": {
                                "id": 52371,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52312,
                                "src": "3973:3:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 52374,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3977:7:61",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 52261,
                              "src": "3973:11:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 52375,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3985:3:61",
                            "memberName": "pop",
                            "nodeType": "MemberAccess",
                            "src": "3973:15:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypop_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                              "typeString": "function (bytes32[] storage pointer)"
                            }
                          },
                          "id": 52376,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3973:17:61",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 52377,
                        "nodeType": "ExpressionStatement",
                        "src": "3973:17:61"
                      },
                      {
                        "expression": {
                          "id": 52382,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "4069:28:61",
                          "subExpression": {
                            "baseExpression": {
                              "expression": {
                                "id": 52378,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 52312,
                                "src": "4076:3:61",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 52379,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4080:10:61",
                              "memberName": "_positions",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 52265,
                              "src": "4076:14:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 52381,
                            "indexExpression": {
                              "id": 52380,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52314,
                              "src": "4091:5:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4076:21:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 52383,
                        "nodeType": "ExpressionStatement",
                        "src": "4069:28:61"
                      },
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 52384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4119:4:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 52318,
                        "id": 52385,
                        "nodeType": "Return",
                        "src": "4112:11:61"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 52309,
              "nodeType": "StructuredDocumentation",
              "src": "2653:157:61",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_remove",
            "nameLocation": "2824:7:61",
            "parameters": {
              "id": 52315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52312,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "2844:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52392,
                  "src": "2832:15:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 52311,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52310,
                      "name": "Set",
                      "nameLocations": [
                        "2832:3:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52266,
                      "src": "2832:3:61"
                    },
                    "referencedDeclaration": 52266,
                    "src": "2832:3:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52314,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2857:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52392,
                  "src": "2849:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52313,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2849:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2831:32:61"
            },
            "returnParameters": {
              "id": 52318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52317,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52392,
                  "src": "2881:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52316,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2881:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2880:6:61"
            },
            "scope": 52868,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 52411,
            "nodeType": "FunctionDefinition",
            "src": "4264:129:61",
            "nodes": [],
            "body": {
              "id": 52410,
              "nodeType": "Block",
              "src": "4343:50:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 52408,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 52403,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52396,
                          "src": "4360:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          }
                        },
                        "id": 52404,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4364:10:61",
                        "memberName": "_positions",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52265,
                        "src": "4360:14:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 52406,
                      "indexExpression": {
                        "id": 52405,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52398,
                        "src": "4375:5:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4360:21:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 52407,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4385:1:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4360:26:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52402,
                  "id": 52409,
                  "nodeType": "Return",
                  "src": "4353:33:61"
                }
              ]
            },
            "documentation": {
              "id": 52393,
              "nodeType": "StructuredDocumentation",
              "src": "4189:70:61",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_contains",
            "nameLocation": "4273:9:61",
            "parameters": {
              "id": 52399,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52396,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4295:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52411,
                  "src": "4283:15:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 52395,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52394,
                      "name": "Set",
                      "nameLocations": [
                        "4283:3:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52266,
                      "src": "4283:3:61"
                    },
                    "referencedDeclaration": 52266,
                    "src": "4283:3:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52398,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4308:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52411,
                  "src": "4300:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52397,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4300:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4282:32:61"
            },
            "returnParameters": {
              "id": 52402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52401,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52411,
                  "src": "4337:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52400,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4337:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4336:6:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 52425,
            "nodeType": "FunctionDefinition",
            "src": "4474:107:61",
            "nodes": [],
            "body": {
              "id": 52424,
              "nodeType": "Block",
              "src": "4539:42:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 52420,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52415,
                        "src": "4556:3:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 52421,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4560:7:61",
                      "memberName": "_values",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 52261,
                      "src": "4556:11:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "id": 52422,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4568:6:61",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "4556:18:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 52419,
                  "id": 52423,
                  "nodeType": "Return",
                  "src": "4549:25:61"
                }
              ]
            },
            "documentation": {
              "id": 52412,
              "nodeType": "StructuredDocumentation",
              "src": "4399:70:61",
              "text": " @dev Returns the number of values on the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_length",
            "nameLocation": "4483:7:61",
            "parameters": {
              "id": 52416,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52415,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4503:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52425,
                  "src": "4491:15:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 52414,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52413,
                      "name": "Set",
                      "nameLocations": [
                        "4491:3:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52266,
                      "src": "4491:3:61"
                    },
                    "referencedDeclaration": 52266,
                    "src": "4491:3:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4490:17:61"
            },
            "returnParameters": {
              "id": 52419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52418,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52425,
                  "src": "4530:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52417,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4530:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4529:9:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 52442,
            "nodeType": "FunctionDefinition",
            "src": "4923:118:61",
            "nodes": [],
            "body": {
              "id": 52441,
              "nodeType": "Block",
              "src": "4999:42:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 52436,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52429,
                        "src": "5016:3:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 52437,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5020:7:61",
                      "memberName": "_values",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 52261,
                      "src": "5016:11:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "id": 52439,
                    "indexExpression": {
                      "id": 52438,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52431,
                      "src": "5028:5:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5016:18:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 52435,
                  "id": 52440,
                  "nodeType": "Return",
                  "src": "5009:25:61"
                }
              ]
            },
            "documentation": {
              "id": 52426,
              "nodeType": "StructuredDocumentation",
              "src": "4587:331:61",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_at",
            "nameLocation": "4932:3:61",
            "parameters": {
              "id": 52432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52429,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4948:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52442,
                  "src": "4936:15:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 52428,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52427,
                      "name": "Set",
                      "nameLocations": [
                        "4936:3:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52266,
                      "src": "4936:3:61"
                    },
                    "referencedDeclaration": 52266,
                    "src": "4936:3:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52431,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "4961:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52442,
                  "src": "4953:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52430,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4953:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4935:32:61"
            },
            "returnParameters": {
              "id": 52435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52434,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52442,
                  "src": "4990:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52433,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4990:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4989:9:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 52456,
            "nodeType": "FunctionDefinition",
            "src": "5581:109:61",
            "nodes": [],
            "body": {
              "id": 52455,
              "nodeType": "Block",
              "src": "5655:35:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 52452,
                      "name": "set",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52446,
                      "src": "5672:3:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                        "typeString": "struct EnumerableSet.Set storage pointer"
                      }
                    },
                    "id": 52453,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5676:7:61",
                    "memberName": "_values",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 52261,
                    "src": "5672:11:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "functionReturnParameters": 52451,
                  "id": 52454,
                  "nodeType": "Return",
                  "src": "5665:18:61"
                }
              ]
            },
            "documentation": {
              "id": 52443,
              "nodeType": "StructuredDocumentation",
              "src": "5047:529:61",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_values",
            "nameLocation": "5590:7:61",
            "parameters": {
              "id": 52447,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52446,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "5610:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52456,
                  "src": "5598:15:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 52445,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52444,
                      "name": "Set",
                      "nameLocations": [
                        "5598:3:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52266,
                      "src": "5598:3:61"
                    },
                    "referencedDeclaration": 52266,
                    "src": "5598:3:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5597:17:61"
            },
            "returnParameters": {
              "id": 52451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52450,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52456,
                  "src": "5637:16:61",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52448,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5637:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 52449,
                    "nodeType": "ArrayTypeName",
                    "src": "5637:9:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5636:18:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 52460,
            "nodeType": "StructDefinition",
            "src": "5715:45:61",
            "nodes": [],
            "canonicalName": "EnumerableSet.Bytes32Set",
            "members": [
              {
                "constant": false,
                "id": 52459,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "5747:6:61",
                "nodeType": "VariableDeclaration",
                "scope": 52460,
                "src": "5743:10:61",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 52458,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 52457,
                    "name": "Set",
                    "nameLocations": [
                      "5743:3:61"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 52266,
                    "src": "5743:3:61"
                  },
                  "referencedDeclaration": 52266,
                  "src": "5743:3:61",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Bytes32Set",
            "nameLocation": "5722:10:61",
            "scope": 52868,
            "visibility": "public"
          },
          {
            "id": 52478,
            "nodeType": "FunctionDefinition",
            "src": "5930:123:61",
            "nodes": [],
            "body": {
              "id": 52477,
              "nodeType": "Block",
              "src": "6006:47:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52472,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52464,
                          "src": "6028:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 52473,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6032:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52459,
                        "src": "6028:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 52474,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52466,
                        "src": "6040:5:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52471,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52308,
                      "src": "6023:4:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$52266_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 52475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6023:23:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52470,
                  "id": 52476,
                  "nodeType": "Return",
                  "src": "6016:30:61"
                }
              ]
            },
            "documentation": {
              "id": 52461,
              "nodeType": "StructuredDocumentation",
              "src": "5766:159:61",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "5939:3:61",
            "parameters": {
              "id": 52467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52464,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "5962:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52478,
                  "src": "5943:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 52463,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52462,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "5943:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52460,
                      "src": "5943:10:61"
                    },
                    "referencedDeclaration": 52460,
                    "src": "5943:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52466,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5975:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52478,
                  "src": "5967:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52465,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5967:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5942:39:61"
            },
            "returnParameters": {
              "id": 52470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52469,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52478,
                  "src": "6000:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52468,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6000:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5999:6:61"
            },
            "scope": 52868,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52496,
            "nodeType": "FunctionDefinition",
            "src": "6221:129:61",
            "nodes": [],
            "body": {
              "id": 52495,
              "nodeType": "Block",
              "src": "6300:50:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52490,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52482,
                          "src": "6325:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 52491,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6329:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52459,
                        "src": "6325:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 52492,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52484,
                        "src": "6337:5:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52489,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52392,
                      "src": "6317:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$52266_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 52493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6317:26:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52488,
                  "id": 52494,
                  "nodeType": "Return",
                  "src": "6310:33:61"
                }
              ]
            },
            "documentation": {
              "id": 52479,
              "nodeType": "StructuredDocumentation",
              "src": "6059:157:61",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "6230:6:61",
            "parameters": {
              "id": 52485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52482,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6256:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52496,
                  "src": "6237:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 52481,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52480,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6237:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52460,
                      "src": "6237:10:61"
                    },
                    "referencedDeclaration": 52460,
                    "src": "6237:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52484,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6269:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52496,
                  "src": "6261:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52483,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6261:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6236:39:61"
            },
            "returnParameters": {
              "id": 52488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52487,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52496,
                  "src": "6294:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52486,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6294:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6293:6:61"
            },
            "scope": 52868,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52514,
            "nodeType": "FunctionDefinition",
            "src": "6431:138:61",
            "nodes": [],
            "body": {
              "id": 52513,
              "nodeType": "Block",
              "src": "6517:52:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52508,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52500,
                          "src": "6544:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 52509,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6548:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52459,
                        "src": "6544:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 52510,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52502,
                        "src": "6556:5:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52507,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52411,
                      "src": "6534:9:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 52511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6534:28:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52506,
                  "id": 52512,
                  "nodeType": "Return",
                  "src": "6527:35:61"
                }
              ]
            },
            "documentation": {
              "id": 52497,
              "nodeType": "StructuredDocumentation",
              "src": "6356:70:61",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "6440:8:61",
            "parameters": {
              "id": 52503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52500,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6468:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52514,
                  "src": "6449:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 52499,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52498,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6449:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52460,
                      "src": "6449:10:61"
                    },
                    "referencedDeclaration": 52460,
                    "src": "6449:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52502,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6481:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52514,
                  "src": "6473:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52501,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6473:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6448:39:61"
            },
            "returnParameters": {
              "id": 52506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52505,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52514,
                  "src": "6511:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52504,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6511:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6510:6:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52529,
            "nodeType": "FunctionDefinition",
            "src": "6650:115:61",
            "nodes": [],
            "body": {
              "id": 52528,
              "nodeType": "Block",
              "src": "6722:43:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52524,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52518,
                          "src": "6747:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 52525,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6751:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52459,
                        "src": "6747:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 52523,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52425,
                      "src": "6739:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 52526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6739:19:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 52522,
                  "id": 52527,
                  "nodeType": "Return",
                  "src": "6732:26:61"
                }
              ]
            },
            "documentation": {
              "id": 52515,
              "nodeType": "StructuredDocumentation",
              "src": "6575:70:61",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "6659:6:61",
            "parameters": {
              "id": 52519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52518,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6685:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52529,
                  "src": "6666:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 52517,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52516,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6666:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52460,
                      "src": "6666:10:61"
                    },
                    "referencedDeclaration": 52460,
                    "src": "6666:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6665:24:61"
            },
            "returnParameters": {
              "id": 52522,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52521,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52529,
                  "src": "6713:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52520,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6713:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6712:9:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52547,
            "nodeType": "FunctionDefinition",
            "src": "7107:129:61",
            "nodes": [],
            "body": {
              "id": 52546,
              "nodeType": "Block",
              "src": "7190:46:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52541,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52533,
                          "src": "7211:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 52542,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7215:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52459,
                        "src": "7211:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 52543,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52535,
                        "src": "7223:5:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 52540,
                      "name": "_at",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52442,
                      "src": "7207:3:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                      }
                    },
                    "id": 52544,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7207:22:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 52539,
                  "id": 52545,
                  "nodeType": "Return",
                  "src": "7200:29:61"
                }
              ]
            },
            "documentation": {
              "id": 52530,
              "nodeType": "StructuredDocumentation",
              "src": "6771:331:61",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "7116:2:61",
            "parameters": {
              "id": 52536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52533,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "7138:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52547,
                  "src": "7119:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 52532,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52531,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "7119:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52460,
                      "src": "7119:10:61"
                    },
                    "referencedDeclaration": 52460,
                    "src": "7119:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52535,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "7151:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52547,
                  "src": "7143:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52534,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7143:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7118:39:61"
            },
            "returnParameters": {
              "id": 52539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52538,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52547,
                  "src": "7181:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52537,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7181:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7180:9:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52577,
            "nodeType": "FunctionDefinition",
            "src": "7776:273:61",
            "nodes": [],
            "body": {
              "id": 52576,
              "nodeType": "Block",
              "src": "7857:192:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    52561
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52561,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "7884:5:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52576,
                      "src": "7867:22:61",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 52559,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "7867:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 52560,
                        "nodeType": "ArrayTypeName",
                        "src": "7867:9:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52566,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52563,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52551,
                          "src": "7900:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 52564,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7904:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52459,
                        "src": "7900:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 52562,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52456,
                      "src": "7892:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 52565,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7892:19:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7867:44:61"
                },
                {
                  "assignments": [
                    52571
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52571,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7938:6:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52576,
                      "src": "7921:23:61",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 52569,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "7921:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 52570,
                        "nodeType": "ArrayTypeName",
                        "src": "7921:9:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52572,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7921:23:61"
                },
                {
                  "AST": {
                    "nativeSrc": "7980:39:61",
                    "nodeType": "YulBlock",
                    "src": "7980:39:61",
                    "statements": [
                      {
                        "nativeSrc": "7994:15:61",
                        "nodeType": "YulAssignment",
                        "src": "7994:15:61",
                        "value": {
                          "name": "store",
                          "nativeSrc": "8004:5:61",
                          "nodeType": "YulIdentifier",
                          "src": "8004:5:61"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "7994:6:61",
                            "nodeType": "YulIdentifier",
                            "src": "7994:6:61"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 52571,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7994:6:61",
                      "valueSize": 1
                    },
                    {
                      "declaration": 52561,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8004:5:61",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 52573,
                  "nodeType": "InlineAssembly",
                  "src": "7955:64:61"
                },
                {
                  "expression": {
                    "id": 52574,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 52571,
                    "src": "8036:6:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "functionReturnParameters": 52556,
                  "id": 52575,
                  "nodeType": "Return",
                  "src": "8029:13:61"
                }
              ]
            },
            "documentation": {
              "id": 52548,
              "nodeType": "StructuredDocumentation",
              "src": "7242:529:61",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "7785:6:61",
            "parameters": {
              "id": 52552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52551,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "7811:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52577,
                  "src": "7792:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 52550,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52549,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "7792:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52460,
                      "src": "7792:10:61"
                    },
                    "referencedDeclaration": 52460,
                    "src": "7792:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$52460_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7791:24:61"
            },
            "returnParameters": {
              "id": 52556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52555,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52577,
                  "src": "7839:16:61",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52553,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "7839:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 52554,
                    "nodeType": "ArrayTypeName",
                    "src": "7839:9:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7838:18:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52581,
            "nodeType": "StructDefinition",
            "src": "8074:45:61",
            "nodes": [],
            "canonicalName": "EnumerableSet.AddressSet",
            "members": [
              {
                "constant": false,
                "id": 52580,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "8106:6:61",
                "nodeType": "VariableDeclaration",
                "scope": 52581,
                "src": "8102:10:61",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 52579,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 52578,
                    "name": "Set",
                    "nameLocations": [
                      "8102:3:61"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 52266,
                    "src": "8102:3:61"
                  },
                  "referencedDeclaration": 52266,
                  "src": "8102:3:61",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "AddressSet",
            "nameLocation": "8081:10:61",
            "scope": 52868,
            "visibility": "public"
          },
          {
            "id": 52608,
            "nodeType": "FunctionDefinition",
            "src": "8289:150:61",
            "nodes": [],
            "body": {
              "id": 52607,
              "nodeType": "Block",
              "src": "8365:74:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52593,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52585,
                          "src": "8387:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 52594,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8391:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52580,
                        "src": "8387:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 52601,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52587,
                                    "src": "8423:5:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 52600,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8415:7:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 52599,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8415:7:61",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 52602,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8415:14:61",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              ],
                              "id": 52598,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8407:7:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 52597,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8407:7:61",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 52603,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8407:23:61",
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
                          "id": 52596,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8399:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 52595,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8399:7:61",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52604,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8399:32:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52592,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52308,
                      "src": "8382:4:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$52266_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 52605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8382:50:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52591,
                  "id": 52606,
                  "nodeType": "Return",
                  "src": "8375:57:61"
                }
              ]
            },
            "documentation": {
              "id": 52582,
              "nodeType": "StructuredDocumentation",
              "src": "8125:159:61",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "8298:3:61",
            "parameters": {
              "id": 52588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52585,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8321:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52608,
                  "src": "8302:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 52584,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52583,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8302:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52581,
                      "src": "8302:10:61"
                    },
                    "referencedDeclaration": 52581,
                    "src": "8302:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52587,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8334:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52608,
                  "src": "8326:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52586,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8326:7:61",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8301:39:61"
            },
            "returnParameters": {
              "id": 52591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52590,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52608,
                  "src": "8359:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52589,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8359:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8358:6:61"
            },
            "scope": 52868,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52635,
            "nodeType": "FunctionDefinition",
            "src": "8607:156:61",
            "nodes": [],
            "body": {
              "id": 52634,
              "nodeType": "Block",
              "src": "8686:77:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52620,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52612,
                          "src": "8711:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 52621,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8715:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52580,
                        "src": "8711:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 52628,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52614,
                                    "src": "8747:5:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 52627,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8739:7:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 52626,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8739:7:61",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 52629,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8739:14:61",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              ],
                              "id": 52625,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8731:7:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 52624,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8731:7:61",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 52630,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8731:23:61",
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
                          "id": 52623,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8723:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 52622,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8723:7:61",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52631,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8723:32:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52619,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52392,
                      "src": "8703:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$52266_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 52632,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8703:53:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52618,
                  "id": 52633,
                  "nodeType": "Return",
                  "src": "8696:60:61"
                }
              ]
            },
            "documentation": {
              "id": 52609,
              "nodeType": "StructuredDocumentation",
              "src": "8445:157:61",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "8616:6:61",
            "parameters": {
              "id": 52615,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52612,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8642:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52635,
                  "src": "8623:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 52611,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52610,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8623:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52581,
                      "src": "8623:10:61"
                    },
                    "referencedDeclaration": 52581,
                    "src": "8623:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52614,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8655:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52635,
                  "src": "8647:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52613,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8647:7:61",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8622:39:61"
            },
            "returnParameters": {
              "id": 52618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52617,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52635,
                  "src": "8680:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52616,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8680:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8679:6:61"
            },
            "scope": 52868,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52662,
            "nodeType": "FunctionDefinition",
            "src": "8844:165:61",
            "nodes": [],
            "body": {
              "id": 52661,
              "nodeType": "Block",
              "src": "8930:79:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52647,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52639,
                          "src": "8957:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 52648,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8961:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52580,
                        "src": "8957:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 52655,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52641,
                                    "src": "8993:5:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 52654,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8985:7:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 52653,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8985:7:61",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 52656,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8985:14:61",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint160",
                                  "typeString": "uint160"
                                }
                              ],
                              "id": 52652,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8977:7:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 52651,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8977:7:61",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 52657,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8977:23:61",
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
                          "id": 52650,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8969:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 52649,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8969:7:61",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52658,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8969:32:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52646,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52411,
                      "src": "8947:9:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 52659,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8947:55:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52645,
                  "id": 52660,
                  "nodeType": "Return",
                  "src": "8940:62:61"
                }
              ]
            },
            "documentation": {
              "id": 52636,
              "nodeType": "StructuredDocumentation",
              "src": "8769:70:61",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "8853:8:61",
            "parameters": {
              "id": 52642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52639,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8881:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52662,
                  "src": "8862:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 52638,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52637,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8862:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52581,
                      "src": "8862:10:61"
                    },
                    "referencedDeclaration": 52581,
                    "src": "8862:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52641,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8894:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52662,
                  "src": "8886:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52640,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8886:7:61",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8861:39:61"
            },
            "returnParameters": {
              "id": 52645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52644,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52662,
                  "src": "8924:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52643,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8924:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8923:6:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52677,
            "nodeType": "FunctionDefinition",
            "src": "9090:115:61",
            "nodes": [],
            "body": {
              "id": 52676,
              "nodeType": "Block",
              "src": "9162:43:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52672,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52666,
                          "src": "9187:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 52673,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9191:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52580,
                        "src": "9187:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 52671,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52425,
                      "src": "9179:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 52674,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9179:19:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 52670,
                  "id": 52675,
                  "nodeType": "Return",
                  "src": "9172:26:61"
                }
              ]
            },
            "documentation": {
              "id": 52663,
              "nodeType": "StructuredDocumentation",
              "src": "9015:70:61",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "9099:6:61",
            "parameters": {
              "id": 52667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52666,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9125:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52677,
                  "src": "9106:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 52665,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52664,
                      "name": "AddressSet",
                      "nameLocations": [
                        "9106:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52581,
                      "src": "9106:10:61"
                    },
                    "referencedDeclaration": 52581,
                    "src": "9106:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9105:24:61"
            },
            "returnParameters": {
              "id": 52670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52669,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52677,
                  "src": "9153:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52668,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9153:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9152:9:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52704,
            "nodeType": "FunctionDefinition",
            "src": "9547:156:61",
            "nodes": [],
            "body": {
              "id": 52703,
              "nodeType": "Block",
              "src": "9630:73:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "expression": {
                                      "id": 52695,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 52681,
                                      "src": "9675:3:61",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                                        "typeString": "struct EnumerableSet.AddressSet storage pointer"
                                      }
                                    },
                                    "id": 52696,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "9679:6:61",
                                    "memberName": "_inner",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 52580,
                                    "src": "9675:10:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Set_$52266_storage",
                                      "typeString": "struct EnumerableSet.Set storage ref"
                                    }
                                  },
                                  {
                                    "id": 52697,
                                    "name": "index",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52683,
                                    "src": "9687:5:61",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Set_$52266_storage",
                                      "typeString": "struct EnumerableSet.Set storage ref"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 52694,
                                  "name": "_at",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 52442,
                                  "src": "9671:3:61",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                                    "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                                  }
                                },
                                "id": 52698,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9671:22:61",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "id": 52693,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9663:7:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 52692,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "9663:7:61",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 52699,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9663:31:61",
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
                          "id": 52691,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9655:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint160_$",
                            "typeString": "type(uint160)"
                          },
                          "typeName": {
                            "id": 52690,
                            "name": "uint160",
                            "nodeType": "ElementaryTypeName",
                            "src": "9655:7:61",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52700,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9655:40:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint160",
                          "typeString": "uint160"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint160",
                          "typeString": "uint160"
                        }
                      ],
                      "id": 52689,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9647:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 52688,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9647:7:61",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 52701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9647:49:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 52687,
                  "id": 52702,
                  "nodeType": "Return",
                  "src": "9640:56:61"
                }
              ]
            },
            "documentation": {
              "id": 52678,
              "nodeType": "StructuredDocumentation",
              "src": "9211:331:61",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "9556:2:61",
            "parameters": {
              "id": 52684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52681,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9578:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52704,
                  "src": "9559:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 52680,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52679,
                      "name": "AddressSet",
                      "nameLocations": [
                        "9559:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52581,
                      "src": "9559:10:61"
                    },
                    "referencedDeclaration": 52581,
                    "src": "9559:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52683,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "9591:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52704,
                  "src": "9583:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52682,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9583:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9558:39:61"
            },
            "returnParameters": {
              "id": 52687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52686,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52704,
                  "src": "9621:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52685,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9621:7:61",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9620:9:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52734,
            "nodeType": "FunctionDefinition",
            "src": "10243:273:61",
            "nodes": [],
            "body": {
              "id": 52733,
              "nodeType": "Block",
              "src": "10324:192:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    52718
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52718,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "10351:5:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52733,
                      "src": "10334:22:61",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 52716,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "10334:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 52717,
                        "nodeType": "ArrayTypeName",
                        "src": "10334:9:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52723,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52720,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52708,
                          "src": "10367:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 52721,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10371:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52580,
                        "src": "10367:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 52719,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52456,
                      "src": "10359:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 52722,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10359:19:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10334:44:61"
                },
                {
                  "assignments": [
                    52728
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52728,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "10405:6:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52733,
                      "src": "10388:23:61",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 52726,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10388:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 52727,
                        "nodeType": "ArrayTypeName",
                        "src": "10388:9:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52729,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10388:23:61"
                },
                {
                  "AST": {
                    "nativeSrc": "10447:39:61",
                    "nodeType": "YulBlock",
                    "src": "10447:39:61",
                    "statements": [
                      {
                        "nativeSrc": "10461:15:61",
                        "nodeType": "YulAssignment",
                        "src": "10461:15:61",
                        "value": {
                          "name": "store",
                          "nativeSrc": "10471:5:61",
                          "nodeType": "YulIdentifier",
                          "src": "10471:5:61"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "10461:6:61",
                            "nodeType": "YulIdentifier",
                            "src": "10461:6:61"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 52728,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10461:6:61",
                      "valueSize": 1
                    },
                    {
                      "declaration": 52718,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10471:5:61",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 52730,
                  "nodeType": "InlineAssembly",
                  "src": "10422:64:61"
                },
                {
                  "expression": {
                    "id": 52731,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 52728,
                    "src": "10503:6:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 52713,
                  "id": 52732,
                  "nodeType": "Return",
                  "src": "10496:13:61"
                }
              ]
            },
            "documentation": {
              "id": 52705,
              "nodeType": "StructuredDocumentation",
              "src": "9709:529:61",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "10252:6:61",
            "parameters": {
              "id": 52709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52708,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "10278:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52734,
                  "src": "10259:22:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 52707,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52706,
                      "name": "AddressSet",
                      "nameLocations": [
                        "10259:10:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52581,
                      "src": "10259:10:61"
                    },
                    "referencedDeclaration": 52581,
                    "src": "10259:10:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$52581_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10258:24:61"
            },
            "returnParameters": {
              "id": 52713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52712,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52734,
                  "src": "10306:16:61",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52710,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10306:7:61",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 52711,
                    "nodeType": "ArrayTypeName",
                    "src": "10306:9:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10305:18:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52738,
            "nodeType": "StructDefinition",
            "src": "10538:42:61",
            "nodes": [],
            "canonicalName": "EnumerableSet.UintSet",
            "members": [
              {
                "constant": false,
                "id": 52737,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "10567:6:61",
                "nodeType": "VariableDeclaration",
                "scope": 52738,
                "src": "10563:10:61",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 52736,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 52735,
                    "name": "Set",
                    "nameLocations": [
                      "10563:3:61"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 52266,
                    "src": "10563:3:61"
                  },
                  "referencedDeclaration": 52266,
                  "src": "10563:3:61",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$52266_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "UintSet",
            "nameLocation": "10545:7:61",
            "scope": 52868,
            "visibility": "public"
          },
          {
            "id": 52759,
            "nodeType": "FunctionDefinition",
            "src": "10750:129:61",
            "nodes": [],
            "body": {
              "id": 52758,
              "nodeType": "Block",
              "src": "10823:56:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52750,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52742,
                          "src": "10845:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 52751,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10849:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52737,
                        "src": "10845:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 52754,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52744,
                            "src": "10865:5:61",
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
                          "id": 52753,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "10857:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 52752,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "10857:7:61",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52755,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10857:14:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52749,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52308,
                      "src": "10840:4:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$52266_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 52756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10840:32:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52748,
                  "id": 52757,
                  "nodeType": "Return",
                  "src": "10833:39:61"
                }
              ]
            },
            "documentation": {
              "id": 52739,
              "nodeType": "StructuredDocumentation",
              "src": "10586:159:61",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "10759:3:61",
            "parameters": {
              "id": 52745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52742,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "10779:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52759,
                  "src": "10763:19:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 52741,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52740,
                      "name": "UintSet",
                      "nameLocations": [
                        "10763:7:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52738,
                      "src": "10763:7:61"
                    },
                    "referencedDeclaration": 52738,
                    "src": "10763:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52744,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10792:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52759,
                  "src": "10784:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52743,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10784:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10762:36:61"
            },
            "returnParameters": {
              "id": 52748,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52747,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52759,
                  "src": "10817:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52746,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10817:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10816:6:61"
            },
            "scope": 52868,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52780,
            "nodeType": "FunctionDefinition",
            "src": "11047:135:61",
            "nodes": [],
            "body": {
              "id": 52779,
              "nodeType": "Block",
              "src": "11123:59:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52771,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52763,
                          "src": "11148:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 52772,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11152:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52737,
                        "src": "11148:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 52775,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52765,
                            "src": "11168:5:61",
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
                          "id": 52774,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11160:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 52773,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "11160:7:61",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52776,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11160:14:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52770,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52392,
                      "src": "11140:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$52266_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 52777,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11140:35:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52769,
                  "id": 52778,
                  "nodeType": "Return",
                  "src": "11133:42:61"
                }
              ]
            },
            "documentation": {
              "id": 52760,
              "nodeType": "StructuredDocumentation",
              "src": "10885:157:61",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "11056:6:61",
            "parameters": {
              "id": 52766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52763,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11079:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52780,
                  "src": "11063:19:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 52762,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52761,
                      "name": "UintSet",
                      "nameLocations": [
                        "11063:7:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52738,
                      "src": "11063:7:61"
                    },
                    "referencedDeclaration": 52738,
                    "src": "11063:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52765,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11092:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52780,
                  "src": "11084:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11084:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11062:36:61"
            },
            "returnParameters": {
              "id": 52769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52768,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52780,
                  "src": "11117:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52767,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11117:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11116:6:61"
            },
            "scope": 52868,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52801,
            "nodeType": "FunctionDefinition",
            "src": "11263:144:61",
            "nodes": [],
            "body": {
              "id": 52800,
              "nodeType": "Block",
              "src": "11346:61:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52792,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52784,
                          "src": "11373:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 52793,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11377:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52737,
                        "src": "11373:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 52796,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52786,
                            "src": "11393:5:61",
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
                          "id": 52795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11385:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 52794,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "11385:7:61",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52797,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11385:14:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52791,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52411,
                      "src": "11363:9:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 52798,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11363:37:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52790,
                  "id": 52799,
                  "nodeType": "Return",
                  "src": "11356:44:61"
                }
              ]
            },
            "documentation": {
              "id": 52781,
              "nodeType": "StructuredDocumentation",
              "src": "11188:70:61",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "11272:8:61",
            "parameters": {
              "id": 52787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52784,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11297:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52801,
                  "src": "11281:19:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 52783,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52782,
                      "name": "UintSet",
                      "nameLocations": [
                        "11281:7:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52738,
                      "src": "11281:7:61"
                    },
                    "referencedDeclaration": 52738,
                    "src": "11281:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52786,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11310:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52801,
                  "src": "11302:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11302:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11280:36:61"
            },
            "returnParameters": {
              "id": 52790,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52789,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52801,
                  "src": "11340:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52788,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11340:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11339:6:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52816,
            "nodeType": "FunctionDefinition",
            "src": "11488:112:61",
            "nodes": [],
            "body": {
              "id": 52815,
              "nodeType": "Block",
              "src": "11557:43:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52811,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52805,
                          "src": "11582:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 52812,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11586:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52737,
                        "src": "11582:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 52810,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52425,
                      "src": "11574:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 52813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11574:19:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 52809,
                  "id": 52814,
                  "nodeType": "Return",
                  "src": "11567:26:61"
                }
              ]
            },
            "documentation": {
              "id": 52802,
              "nodeType": "StructuredDocumentation",
              "src": "11413:70:61",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "11497:6:61",
            "parameters": {
              "id": 52806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52805,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11520:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52816,
                  "src": "11504:19:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 52804,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52803,
                      "name": "UintSet",
                      "nameLocations": [
                        "11504:7:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52738,
                      "src": "11504:7:61"
                    },
                    "referencedDeclaration": 52738,
                    "src": "11504:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11503:21:61"
            },
            "returnParameters": {
              "id": 52809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52808,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52816,
                  "src": "11548:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52807,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11548:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11547:9:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52837,
            "nodeType": "FunctionDefinition",
            "src": "11942:135:61",
            "nodes": [],
            "body": {
              "id": 52836,
              "nodeType": "Block",
              "src": "12022:55:61",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 52830,
                              "name": "set",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52820,
                              "src": "12051:3:61",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                                "typeString": "struct EnumerableSet.UintSet storage pointer"
                              }
                            },
                            "id": 52831,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12055:6:61",
                            "memberName": "_inner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 52737,
                            "src": "12051:10:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Set_$52266_storage",
                              "typeString": "struct EnumerableSet.Set storage ref"
                            }
                          },
                          {
                            "id": 52832,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52822,
                            "src": "12063:5:61",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Set_$52266_storage",
                              "typeString": "struct EnumerableSet.Set storage ref"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 52829,
                          "name": "_at",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52442,
                          "src": "12047:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                            "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                          }
                        },
                        "id": 52833,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12047:22:61",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 52828,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "12039:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 52827,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12039:7:61",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 52834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12039:31:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 52826,
                  "id": 52835,
                  "nodeType": "Return",
                  "src": "12032:38:61"
                }
              ]
            },
            "documentation": {
              "id": 52817,
              "nodeType": "StructuredDocumentation",
              "src": "11606:331:61",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "11951:2:61",
            "parameters": {
              "id": 52823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52820,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11970:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52837,
                  "src": "11954:19:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 52819,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52818,
                      "name": "UintSet",
                      "nameLocations": [
                        "11954:7:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52738,
                      "src": "11954:7:61"
                    },
                    "referencedDeclaration": 52738,
                    "src": "11954:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52822,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "11983:5:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52837,
                  "src": "11975:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52821,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11975:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11953:36:61"
            },
            "returnParameters": {
              "id": 52826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52825,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52837,
                  "src": "12013:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52824,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12013:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12012:9:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52867,
            "nodeType": "FunctionDefinition",
            "src": "12617:270:61",
            "nodes": [],
            "body": {
              "id": 52866,
              "nodeType": "Block",
              "src": "12695:192:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    52851
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52851,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "12722:5:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52866,
                      "src": "12705:22:61",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 52849,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "12705:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 52850,
                        "nodeType": "ArrayTypeName",
                        "src": "12705:9:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52856,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 52853,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52841,
                          "src": "12738:3:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 52854,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12742:6:61",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52737,
                        "src": "12738:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$52266_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 52852,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52456,
                      "src": "12730:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$52266_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 52855,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12730:19:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12705:44:61"
                },
                {
                  "assignments": [
                    52861
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52861,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "12776:6:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 52866,
                      "src": "12759:23:61",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 52859,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12759:7:61",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 52860,
                        "nodeType": "ArrayTypeName",
                        "src": "12759:9:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52862,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12759:23:61"
                },
                {
                  "AST": {
                    "nativeSrc": "12818:39:61",
                    "nodeType": "YulBlock",
                    "src": "12818:39:61",
                    "statements": [
                      {
                        "nativeSrc": "12832:15:61",
                        "nodeType": "YulAssignment",
                        "src": "12832:15:61",
                        "value": {
                          "name": "store",
                          "nativeSrc": "12842:5:61",
                          "nodeType": "YulIdentifier",
                          "src": "12842:5:61"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "12832:6:61",
                            "nodeType": "YulIdentifier",
                            "src": "12832:6:61"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 52861,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12832:6:61",
                      "valueSize": 1
                    },
                    {
                      "declaration": 52851,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12842:5:61",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 52863,
                  "nodeType": "InlineAssembly",
                  "src": "12793:64:61"
                },
                {
                  "expression": {
                    "id": 52864,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 52861,
                    "src": "12874:6:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 52846,
                  "id": 52865,
                  "nodeType": "Return",
                  "src": "12867:13:61"
                }
              ]
            },
            "documentation": {
              "id": 52838,
              "nodeType": "StructuredDocumentation",
              "src": "12083:529:61",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "12626:6:61",
            "parameters": {
              "id": 52842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52841,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "12649:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 52867,
                  "src": "12633:19:61",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 52840,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 52839,
                      "name": "UintSet",
                      "nameLocations": [
                        "12633:7:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 52738,
                      "src": "12633:7:61"
                    },
                    "referencedDeclaration": 52738,
                    "src": "12633:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$52738_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12632:21:61"
            },
            "returnParameters": {
              "id": 52846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52845,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52867,
                  "src": "12677:16:61",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52843,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "12677:7:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 52844,
                    "nodeType": "ArrayTypeName",
                    "src": "12677:9:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12676:18:61"
            },
            "scope": 52868,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "EnumerableSet",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 52258,
          "nodeType": "StructuredDocumentation",
          "src": "231:1098:61",
          "text": " @dev Library for managing\n https://en.wikipedia.org/wiki/Set_(abstract_data_type)[sets] of primitive\n types.\n Sets have the following properties:\n - Elements are added, removed, and checked for existence in constant time\n (O(1)).\n - Elements are enumerated in O(n). No guarantees are made on the ordering.\n ```solidity\n contract Example {\n     // Add the library methods\n     using EnumerableSet for EnumerableSet.AddressSet;\n     // Declare a set state variable\n     EnumerableSet.AddressSet private mySet;\n }\n ```\n As of v3.3.0, sets of type `bytes32` (`Bytes32Set`), `address` (`AddressSet`)\n and `uint256` (`UintSet`) are supported.\n [WARNING]\n ====\n Trying to delete such a structure from storage will likely result in data corruption, rendering the structure\n unusable.\n See https://github.com/ethereum/solidity/pull/11843[ethereum/solidity#11843] for more info.\n In order to clean an EnumerableSet, you can either remove all elements one by one or create a fresh instance using an\n array of EnumerableSet.\n ===="
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          52868
        ],
        "name": "EnumerableSet",
        "nameLocation": "1338:13:61",
        "scope": 52869,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 61
} as const;