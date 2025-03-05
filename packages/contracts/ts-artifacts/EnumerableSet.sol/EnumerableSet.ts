export const EnumerableSet = {
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202441a72ca04df7ac98fc48f45140ac6f6165265a0086cdd61882f4a18d7bde1b64736f6c634300081a0033",
    "sourceMap": "1330:11559:53:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1330:11559:53;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202441a72ca04df7ac98fc48f45140ac6f6165265a0086cdd61882f4a18d7bde1b64736f6c634300081a0033",
    "sourceMap": "1330:11559:53:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Library for managing https://en.wikipedia.org/wiki/Set_(abstract_data_type)[sets] of primitive types. Sets have the following properties: - Elements are added, removed, and checked for existence in constant time (O(1)). - Elements are enumerated in O(n). No guarantees are made on the ordering. ```solidity contract Example {     // Add the library methods     using EnumerableSet for EnumerableSet.AddressSet;     // Declare a set state variable     EnumerableSet.AddressSet private mySet; } ``` As of v3.3.0, sets of type `bytes32` (`Bytes32Set`), `address` (`AddressSet`) and `uint256` (`UintSet`) are supported. [WARNING] ==== Trying to delete such a structure from storage will likely result in data corruption, rendering the structure unusable. See https://github.com/ethereum/solidity/pull/11843[ethereum/solidity#11843] for more info. In order to clean an EnumerableSet, you can either remove all elements one by one or create a fresh instance using an array of EnumerableSet. ====\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol\":\"EnumerableSet\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0x9b161e97b8967d4bc0c08d25741889a30692cdda4b71910bf1b0e315f1962212\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://821500c39d095eaa25b06f46e65f1d0e97c4c96b39227f79077dee7d9e84051f\",\"dweb:/ipfs/QmSTeGorKzSWF6HAmxo32uCZiEuKNvreQdUiX1AaYtUMTz\"]}},\"version\":1}",
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
      "evmVersion": "paris",
      "libraries": {}
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
    "id": 48321,
    "exportedSymbols": {
      "EnumerableSet": [
        48320
      ]
    },
    "nodeType": "SourceUnit",
    "src": "205:12685:53",
    "nodes": [
      {
        "id": 47709,
        "nodeType": "PragmaDirective",
        "src": "205:24:53",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 48320,
        "nodeType": "ContractDefinition",
        "src": "1330:11559:53",
        "nodes": [
          {
            "id": 47718,
            "nodeType": "StructDefinition",
            "src": "1798:273:53",
            "nodes": [],
            "canonicalName": "EnumerableSet.Set",
            "members": [
              {
                "constant": false,
                "id": 47713,
                "mutability": "mutable",
                "name": "_values",
                "nameLocation": "1862:7:53",
                "nodeType": "VariableDeclaration",
                "scope": 47718,
                "src": "1852:17:53",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 47711,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1852:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 47712,
                  "nodeType": "ArrayTypeName",
                  "src": "1852:9:53",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 47717,
                "mutability": "mutable",
                "name": "_positions",
                "nameLocation": "2054:10:53",
                "nodeType": "VariableDeclaration",
                "scope": 47718,
                "src": "2020:44:53",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                  "typeString": "mapping(bytes32 => uint256)"
                },
                "typeName": {
                  "id": 47716,
                  "keyName": "value",
                  "keyNameLocation": "2036:5:53",
                  "keyType": {
                    "id": 47714,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2028:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "2020:33:53",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                    "typeString": "mapping(bytes32 => uint256)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 47715,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2045:7:53",
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
            "nameLocation": "1805:3:53",
            "scope": 48320,
            "visibility": "public"
          },
          {
            "id": 47760,
            "nodeType": "FunctionDefinition",
            "src": "2241:406:53",
            "nodes": [],
            "body": {
              "id": 47759,
              "nodeType": "Block",
              "src": "2310:337:53",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 47733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2324:22:53",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 47730,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47722,
                          "src": "2335:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          }
                        },
                        {
                          "id": 47731,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47724,
                          "src": "2340:5:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 47729,
                        "name": "_contains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47863,
                        "src": "2325:9:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                        }
                      },
                      "id": 47732,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2325:21:53",
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
                    "id": 47757,
                    "nodeType": "Block",
                    "src": "2604:37:53",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 47755,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2625:5:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 47728,
                        "id": 47756,
                        "nodeType": "Return",
                        "src": "2618:12:53"
                      }
                    ]
                  },
                  "id": 47758,
                  "nodeType": "IfStatement",
                  "src": "2320:321:53",
                  "trueBody": {
                    "id": 47754,
                    "nodeType": "Block",
                    "src": "2348:250:53",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 47739,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47724,
                              "src": "2379:5:53",
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
                                "id": 47734,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47722,
                                "src": "2362:3:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 47737,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2366:7:53",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 47713,
                              "src": "2362:11:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 47738,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2374:4:53",
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "src": "2362:16:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$_t_bytes32_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                              "typeString": "function (bytes32[] storage pointer,bytes32)"
                            }
                          },
                          "id": 47740,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2362:23:53",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47741,
                        "nodeType": "ExpressionStatement",
                        "src": "2362:23:53"
                      },
                      {
                        "expression": {
                          "id": 47750,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "expression": {
                                "id": 47742,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47722,
                                "src": "2520:3:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 47745,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2524:10:53",
                              "memberName": "_positions",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 47717,
                              "src": "2520:14:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 47746,
                            "indexExpression": {
                              "id": 47744,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47724,
                              "src": "2535:5:53",
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
                            "src": "2520:21:53",
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
                                "id": 47747,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47722,
                                "src": "2544:3:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 47748,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2548:7:53",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 47713,
                              "src": "2544:11:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 47749,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2556:6:53",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "2544:18:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2520:42:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 47751,
                        "nodeType": "ExpressionStatement",
                        "src": "2520:42:53"
                      },
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 47752,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2583:4:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 47728,
                        "id": 47753,
                        "nodeType": "Return",
                        "src": "2576:11:53"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 47719,
              "nodeType": "StructuredDocumentation",
              "src": "2077:159:53",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_add",
            "nameLocation": "2250:4:53",
            "parameters": {
              "id": 47725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47722,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "2267:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47760,
                  "src": "2255:15:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 47721,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47720,
                      "name": "Set",
                      "nameLocations": [
                        "2255:3:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47718,
                      "src": "2255:3:53"
                    },
                    "referencedDeclaration": 47718,
                    "src": "2255:3:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47724,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2280:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47760,
                  "src": "2272:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47723,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2272:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2254:32:53"
            },
            "returnParameters": {
              "id": 47728,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47727,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47760,
                  "src": "2304:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47726,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2304:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2303:6:53"
            },
            "scope": 48320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 47844,
            "nodeType": "FunctionDefinition",
            "src": "2815:1368:53",
            "nodes": [],
            "body": {
              "id": 47843,
              "nodeType": "Block",
              "src": "2887:1296:53",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47772
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47772,
                      "mutability": "mutable",
                      "name": "position",
                      "nameLocation": "2999:8:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 47843,
                      "src": "2991:16:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 47771,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2991:7:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47777,
                  "initialValue": {
                    "baseExpression": {
                      "expression": {
                        "id": 47773,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47764,
                        "src": "3010:3:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 47774,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3014:10:53",
                      "memberName": "_positions",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47717,
                      "src": "3010:14:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                        "typeString": "mapping(bytes32 => uint256)"
                      }
                    },
                    "id": 47776,
                    "indexExpression": {
                      "id": 47775,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47766,
                      "src": "3025:5:53",
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
                    "src": "3010:21:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2991:40:53"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 47780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 47778,
                      "name": "position",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47772,
                      "src": "3046:8:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 47779,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3058:1:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3046:13:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 47841,
                    "nodeType": "Block",
                    "src": "4140:37:53",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 47839,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4161:5:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 47770,
                        "id": 47840,
                        "nodeType": "Return",
                        "src": "4154:12:53"
                      }
                    ]
                  },
                  "id": 47842,
                  "nodeType": "IfStatement",
                  "src": "3042:1135:53",
                  "trueBody": {
                    "id": 47838,
                    "nodeType": "Block",
                    "src": "3061:1073:53",
                    "statements": [
                      {
                        "assignments": [
                          47782
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 47782,
                            "mutability": "mutable",
                            "name": "valueIndex",
                            "nameLocation": "3421:10:53",
                            "nodeType": "VariableDeclaration",
                            "scope": 47838,
                            "src": "3413:18:53",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 47781,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3413:7:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 47786,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 47785,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 47783,
                            "name": "position",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47772,
                            "src": "3434:8:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 47784,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3445:1:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3434:12:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3413:33:53"
                      },
                      {
                        "assignments": [
                          47788
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 47788,
                            "mutability": "mutable",
                            "name": "lastIndex",
                            "nameLocation": "3468:9:53",
                            "nodeType": "VariableDeclaration",
                            "scope": 47838,
                            "src": "3460:17:53",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 47787,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3460:7:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 47794,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 47793,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "expression": {
                                "id": 47789,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47764,
                                "src": "3480:3:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 47790,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3484:7:53",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 47713,
                              "src": "3480:11:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 47791,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3492:6:53",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "3480:18:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 47792,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3501:1:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3480:22:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3460:42:53"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 47797,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 47795,
                            "name": "valueIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47782,
                            "src": "3521:10:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "id": 47796,
                            "name": "lastIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47788,
                            "src": "3535:9:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3521:23:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 47822,
                        "nodeType": "IfStatement",
                        "src": "3517:378:53",
                        "trueBody": {
                          "id": 47821,
                          "nodeType": "Block",
                          "src": "3546:349:53",
                          "statements": [
                            {
                              "assignments": [
                                47799
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 47799,
                                  "mutability": "mutable",
                                  "name": "lastValue",
                                  "nameLocation": "3572:9:53",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 47821,
                                  "src": "3564:17:53",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  "typeName": {
                                    "id": 47798,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3564:7:53",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 47804,
                              "initialValue": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 47800,
                                    "name": "set",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 47764,
                                    "src": "3584:3:53",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                                      "typeString": "struct EnumerableSet.Set storage pointer"
                                    }
                                  },
                                  "id": 47801,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3588:7:53",
                                  "memberName": "_values",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 47713,
                                  "src": "3584:11:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                    "typeString": "bytes32[] storage ref"
                                  }
                                },
                                "id": 47803,
                                "indexExpression": {
                                  "id": 47802,
                                  "name": "lastIndex",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 47788,
                                  "src": "3596:9:53",
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
                                "src": "3584:22:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "3564:42:53"
                            },
                            {
                              "expression": {
                                "id": 47811,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 47805,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 47764,
                                      "src": "3705:3:53",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                                        "typeString": "struct EnumerableSet.Set storage pointer"
                                      }
                                    },
                                    "id": 47808,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3709:7:53",
                                    "memberName": "_values",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 47713,
                                    "src": "3705:11:53",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                      "typeString": "bytes32[] storage ref"
                                    }
                                  },
                                  "id": 47809,
                                  "indexExpression": {
                                    "id": 47807,
                                    "name": "valueIndex",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 47782,
                                    "src": "3717:10:53",
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
                                  "src": "3705:23:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 47810,
                                  "name": "lastValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 47799,
                                  "src": "3731:9:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "src": "3705:35:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "id": 47812,
                              "nodeType": "ExpressionStatement",
                              "src": "3705:35:53"
                            },
                            {
                              "expression": {
                                "id": 47819,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 47813,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 47764,
                                      "src": "3844:3:53",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                                        "typeString": "struct EnumerableSet.Set storage pointer"
                                      }
                                    },
                                    "id": 47816,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3848:10:53",
                                    "memberName": "_positions",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 47717,
                                    "src": "3844:14:53",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                      "typeString": "mapping(bytes32 => uint256)"
                                    }
                                  },
                                  "id": 47817,
                                  "indexExpression": {
                                    "id": 47815,
                                    "name": "lastValue",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 47799,
                                    "src": "3859:9:53",
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
                                  "src": "3844:25:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 47818,
                                  "name": "position",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 47772,
                                  "src": "3872:8:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3844:36:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 47820,
                              "nodeType": "ExpressionStatement",
                              "src": "3844:36:53"
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
                                "id": 47823,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47764,
                                "src": "3973:3:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 47826,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3977:7:53",
                              "memberName": "_values",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 47713,
                              "src": "3973:11:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                "typeString": "bytes32[] storage ref"
                              }
                            },
                            "id": 47827,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3985:3:53",
                            "memberName": "pop",
                            "nodeType": "MemberAccess",
                            "src": "3973:15:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypop_nonpayable$_t_array$_t_bytes32_$dyn_storage_ptr_$returns$__$attached_to$_t_array$_t_bytes32_$dyn_storage_ptr_$",
                              "typeString": "function (bytes32[] storage pointer)"
                            }
                          },
                          "id": 47828,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3973:17:53",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47829,
                        "nodeType": "ExpressionStatement",
                        "src": "3973:17:53"
                      },
                      {
                        "expression": {
                          "id": 47834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "4069:28:53",
                          "subExpression": {
                            "baseExpression": {
                              "expression": {
                                "id": 47830,
                                "name": "set",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47764,
                                "src": "4076:3:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                                  "typeString": "struct EnumerableSet.Set storage pointer"
                                }
                              },
                              "id": 47831,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4080:10:53",
                              "memberName": "_positions",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 47717,
                              "src": "4076:14:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 47833,
                            "indexExpression": {
                              "id": 47832,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47766,
                              "src": "4091:5:53",
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
                            "src": "4076:21:53",
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
                        "id": 47835,
                        "nodeType": "ExpressionStatement",
                        "src": "4069:28:53"
                      },
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 47836,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4119:4:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 47770,
                        "id": 47837,
                        "nodeType": "Return",
                        "src": "4112:11:53"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 47761,
              "nodeType": "StructuredDocumentation",
              "src": "2653:157:53",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_remove",
            "nameLocation": "2824:7:53",
            "parameters": {
              "id": 47767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47764,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "2844:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47844,
                  "src": "2832:15:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 47763,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47762,
                      "name": "Set",
                      "nameLocations": [
                        "2832:3:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47718,
                      "src": "2832:3:53"
                    },
                    "referencedDeclaration": 47718,
                    "src": "2832:3:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47766,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2857:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47844,
                  "src": "2849:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47765,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2849:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2831:32:53"
            },
            "returnParameters": {
              "id": 47770,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47769,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47844,
                  "src": "2881:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47768,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2881:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2880:6:53"
            },
            "scope": 48320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 47863,
            "nodeType": "FunctionDefinition",
            "src": "4264:129:53",
            "nodes": [],
            "body": {
              "id": 47862,
              "nodeType": "Block",
              "src": "4343:50:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 47860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 47855,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47848,
                          "src": "4360:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                            "typeString": "struct EnumerableSet.Set storage pointer"
                          }
                        },
                        "id": 47856,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4364:10:53",
                        "memberName": "_positions",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47717,
                        "src": "4360:14:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 47858,
                      "indexExpression": {
                        "id": 47857,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47850,
                        "src": "4375:5:53",
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
                      "src": "4360:21:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 47859,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4385:1:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4360:26:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 47854,
                  "id": 47861,
                  "nodeType": "Return",
                  "src": "4353:33:53"
                }
              ]
            },
            "documentation": {
              "id": 47845,
              "nodeType": "StructuredDocumentation",
              "src": "4189:70:53",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_contains",
            "nameLocation": "4273:9:53",
            "parameters": {
              "id": 47851,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47848,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4295:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47863,
                  "src": "4283:15:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 47847,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47846,
                      "name": "Set",
                      "nameLocations": [
                        "4283:3:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47718,
                      "src": "4283:3:53"
                    },
                    "referencedDeclaration": 47718,
                    "src": "4283:3:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47850,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4308:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47863,
                  "src": "4300:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47849,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4300:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4282:32:53"
            },
            "returnParameters": {
              "id": 47854,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47853,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47863,
                  "src": "4337:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47852,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4337:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4336:6:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 47877,
            "nodeType": "FunctionDefinition",
            "src": "4474:107:53",
            "nodes": [],
            "body": {
              "id": 47876,
              "nodeType": "Block",
              "src": "4539:42:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 47872,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47867,
                        "src": "4556:3:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 47873,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4560:7:53",
                      "memberName": "_values",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47713,
                      "src": "4556:11:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "id": 47874,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4568:6:53",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "4556:18:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 47871,
                  "id": 47875,
                  "nodeType": "Return",
                  "src": "4549:25:53"
                }
              ]
            },
            "documentation": {
              "id": 47864,
              "nodeType": "StructuredDocumentation",
              "src": "4399:70:53",
              "text": " @dev Returns the number of values on the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_length",
            "nameLocation": "4483:7:53",
            "parameters": {
              "id": 47868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47867,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4503:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47877,
                  "src": "4491:15:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 47866,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47865,
                      "name": "Set",
                      "nameLocations": [
                        "4491:3:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47718,
                      "src": "4491:3:53"
                    },
                    "referencedDeclaration": 47718,
                    "src": "4491:3:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4490:17:53"
            },
            "returnParameters": {
              "id": 47871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47870,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47877,
                  "src": "4530:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 47869,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4530:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4529:9:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 47894,
            "nodeType": "FunctionDefinition",
            "src": "4923:118:53",
            "nodes": [],
            "body": {
              "id": 47893,
              "nodeType": "Block",
              "src": "4999:42:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "id": 47888,
                        "name": "set",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47881,
                        "src": "5016:3:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                          "typeString": "struct EnumerableSet.Set storage pointer"
                        }
                      },
                      "id": 47889,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5020:7:53",
                      "memberName": "_values",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47713,
                      "src": "5016:11:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                        "typeString": "bytes32[] storage ref"
                      }
                    },
                    "id": 47891,
                    "indexExpression": {
                      "id": 47890,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47883,
                      "src": "5028:5:53",
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
                    "src": "5016:18:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 47887,
                  "id": 47892,
                  "nodeType": "Return",
                  "src": "5009:25:53"
                }
              ]
            },
            "documentation": {
              "id": 47878,
              "nodeType": "StructuredDocumentation",
              "src": "4587:331:53",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_at",
            "nameLocation": "4932:3:53",
            "parameters": {
              "id": 47884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47881,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "4948:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47894,
                  "src": "4936:15:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 47880,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47879,
                      "name": "Set",
                      "nameLocations": [
                        "4936:3:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47718,
                      "src": "4936:3:53"
                    },
                    "referencedDeclaration": 47718,
                    "src": "4936:3:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47883,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "4961:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47894,
                  "src": "4953:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 47882,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4953:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4935:32:53"
            },
            "returnParameters": {
              "id": 47887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47886,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47894,
                  "src": "4990:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47885,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4990:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4989:9:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 47908,
            "nodeType": "FunctionDefinition",
            "src": "5581:109:53",
            "nodes": [],
            "body": {
              "id": 47907,
              "nodeType": "Block",
              "src": "5655:35:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 47904,
                      "name": "set",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47898,
                      "src": "5672:3:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                        "typeString": "struct EnumerableSet.Set storage pointer"
                      }
                    },
                    "id": 47905,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5676:7:53",
                    "memberName": "_values",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 47713,
                    "src": "5672:11:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                      "typeString": "bytes32[] storage ref"
                    }
                  },
                  "functionReturnParameters": 47903,
                  "id": 47906,
                  "nodeType": "Return",
                  "src": "5665:18:53"
                }
              ]
            },
            "documentation": {
              "id": 47895,
              "nodeType": "StructuredDocumentation",
              "src": "5047:529:53",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_values",
            "nameLocation": "5590:7:53",
            "parameters": {
              "id": 47899,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47898,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "5610:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47908,
                  "src": "5598:15:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  },
                  "typeName": {
                    "id": 47897,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47896,
                      "name": "Set",
                      "nameLocations": [
                        "5598:3:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47718,
                      "src": "5598:3:53"
                    },
                    "referencedDeclaration": 47718,
                    "src": "5598:3:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                      "typeString": "struct EnumerableSet.Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5597:17:53"
            },
            "returnParameters": {
              "id": 47903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47902,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47908,
                  "src": "5637:16:53",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 47900,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5637:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 47901,
                    "nodeType": "ArrayTypeName",
                    "src": "5637:9:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5636:18:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 47912,
            "nodeType": "StructDefinition",
            "src": "5715:45:53",
            "nodes": [],
            "canonicalName": "EnumerableSet.Bytes32Set",
            "members": [
              {
                "constant": false,
                "id": 47911,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "5747:6:53",
                "nodeType": "VariableDeclaration",
                "scope": 47912,
                "src": "5743:10:53",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 47910,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 47909,
                    "name": "Set",
                    "nameLocations": [
                      "5743:3:53"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 47718,
                    "src": "5743:3:53"
                  },
                  "referencedDeclaration": 47718,
                  "src": "5743:3:53",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Bytes32Set",
            "nameLocation": "5722:10:53",
            "scope": 48320,
            "visibility": "public"
          },
          {
            "id": 47930,
            "nodeType": "FunctionDefinition",
            "src": "5930:123:53",
            "nodes": [],
            "body": {
              "id": 47929,
              "nodeType": "Block",
              "src": "6006:47:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 47924,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47916,
                          "src": "6028:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 47925,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6032:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47911,
                        "src": "6028:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 47926,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47918,
                        "src": "6040:5:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 47923,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47760,
                      "src": "6023:4:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$47718_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 47927,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6023:23:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 47922,
                  "id": 47928,
                  "nodeType": "Return",
                  "src": "6016:30:53"
                }
              ]
            },
            "documentation": {
              "id": 47913,
              "nodeType": "StructuredDocumentation",
              "src": "5766:159:53",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "5939:3:53",
            "parameters": {
              "id": 47919,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47916,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "5962:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47930,
                  "src": "5943:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 47915,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47914,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "5943:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47912,
                      "src": "5943:10:53"
                    },
                    "referencedDeclaration": 47912,
                    "src": "5943:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47918,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5975:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47930,
                  "src": "5967:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47917,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5967:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5942:39:53"
            },
            "returnParameters": {
              "id": 47922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47921,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47930,
                  "src": "6000:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47920,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6000:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5999:6:53"
            },
            "scope": 48320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47948,
            "nodeType": "FunctionDefinition",
            "src": "6221:129:53",
            "nodes": [],
            "body": {
              "id": 47947,
              "nodeType": "Block",
              "src": "6300:50:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 47942,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47934,
                          "src": "6325:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 47943,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6329:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47911,
                        "src": "6325:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 47944,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47936,
                        "src": "6337:5:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 47941,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47844,
                      "src": "6317:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$47718_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 47945,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6317:26:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 47940,
                  "id": 47946,
                  "nodeType": "Return",
                  "src": "6310:33:53"
                }
              ]
            },
            "documentation": {
              "id": 47931,
              "nodeType": "StructuredDocumentation",
              "src": "6059:157:53",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "6230:6:53",
            "parameters": {
              "id": 47937,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47934,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6256:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47948,
                  "src": "6237:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 47933,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47932,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6237:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47912,
                      "src": "6237:10:53"
                    },
                    "referencedDeclaration": 47912,
                    "src": "6237:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47936,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6269:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47948,
                  "src": "6261:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47935,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6261:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6236:39:53"
            },
            "returnParameters": {
              "id": 47940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47939,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47948,
                  "src": "6294:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47938,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6294:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6293:6:53"
            },
            "scope": 48320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47966,
            "nodeType": "FunctionDefinition",
            "src": "6431:138:53",
            "nodes": [],
            "body": {
              "id": 47965,
              "nodeType": "Block",
              "src": "6517:52:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 47960,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47952,
                          "src": "6544:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 47961,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6548:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47911,
                        "src": "6544:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 47962,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47954,
                        "src": "6556:5:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 47959,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47863,
                      "src": "6534:9:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 47963,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6534:28:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 47958,
                  "id": 47964,
                  "nodeType": "Return",
                  "src": "6527:35:53"
                }
              ]
            },
            "documentation": {
              "id": 47949,
              "nodeType": "StructuredDocumentation",
              "src": "6356:70:53",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "6440:8:53",
            "parameters": {
              "id": 47955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47952,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6468:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47966,
                  "src": "6449:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 47951,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47950,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6449:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47912,
                      "src": "6449:10:53"
                    },
                    "referencedDeclaration": 47912,
                    "src": "6449:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47954,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6481:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47966,
                  "src": "6473:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47953,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6473:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6448:39:53"
            },
            "returnParameters": {
              "id": 47958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47957,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47966,
                  "src": "6511:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47956,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6511:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6510:6:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47981,
            "nodeType": "FunctionDefinition",
            "src": "6650:115:53",
            "nodes": [],
            "body": {
              "id": 47980,
              "nodeType": "Block",
              "src": "6722:43:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 47976,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47970,
                          "src": "6747:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 47977,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6751:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47911,
                        "src": "6747:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 47975,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47877,
                      "src": "6739:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 47978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6739:19:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 47974,
                  "id": 47979,
                  "nodeType": "Return",
                  "src": "6732:26:53"
                }
              ]
            },
            "documentation": {
              "id": 47967,
              "nodeType": "StructuredDocumentation",
              "src": "6575:70:53",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "6659:6:53",
            "parameters": {
              "id": 47971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47970,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "6685:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47981,
                  "src": "6666:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 47969,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47968,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "6666:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47912,
                      "src": "6666:10:53"
                    },
                    "referencedDeclaration": 47912,
                    "src": "6666:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6665:24:53"
            },
            "returnParameters": {
              "id": 47974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47973,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47981,
                  "src": "6713:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 47972,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6713:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6712:9:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47999,
            "nodeType": "FunctionDefinition",
            "src": "7107:129:53",
            "nodes": [],
            "body": {
              "id": 47998,
              "nodeType": "Block",
              "src": "7190:46:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 47993,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47985,
                          "src": "7211:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 47994,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7215:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47911,
                        "src": "7211:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "id": 47995,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47987,
                        "src": "7223:5:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 47992,
                      "name": "_at",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47894,
                      "src": "7207:3:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                      }
                    },
                    "id": 47996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7207:22:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 47991,
                  "id": 47997,
                  "nodeType": "Return",
                  "src": "7200:29:53"
                }
              ]
            },
            "documentation": {
              "id": 47982,
              "nodeType": "StructuredDocumentation",
              "src": "6771:331:53",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "7116:2:53",
            "parameters": {
              "id": 47988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47985,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "7138:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47999,
                  "src": "7119:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 47984,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47983,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "7119:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47912,
                      "src": "7119:10:53"
                    },
                    "referencedDeclaration": 47912,
                    "src": "7119:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47987,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "7151:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 47999,
                  "src": "7143:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 47986,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7143:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7118:39:53"
            },
            "returnParameters": {
              "id": 47991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47990,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47999,
                  "src": "7181:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47989,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7181:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7180:9:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48029,
            "nodeType": "FunctionDefinition",
            "src": "7776:273:53",
            "nodes": [],
            "body": {
              "id": 48028,
              "nodeType": "Block",
              "src": "7857:192:53",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    48013
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48013,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "7884:5:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 48028,
                      "src": "7867:22:53",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 48011,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "7867:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 48012,
                        "nodeType": "ArrayTypeName",
                        "src": "7867:9:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48018,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48015,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48003,
                          "src": "7900:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                            "typeString": "struct EnumerableSet.Bytes32Set storage pointer"
                          }
                        },
                        "id": 48016,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7904:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 47911,
                        "src": "7900:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 48014,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47908,
                      "src": "7892:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 48017,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7892:19:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7867:44:53"
                },
                {
                  "assignments": [
                    48023
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48023,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7938:6:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 48028,
                      "src": "7921:23:53",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 48021,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "7921:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 48022,
                        "nodeType": "ArrayTypeName",
                        "src": "7921:9:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48024,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7921:23:53"
                },
                {
                  "AST": {
                    "nativeSrc": "7980:39:53",
                    "nodeType": "YulBlock",
                    "src": "7980:39:53",
                    "statements": [
                      {
                        "nativeSrc": "7994:15:53",
                        "nodeType": "YulAssignment",
                        "src": "7994:15:53",
                        "value": {
                          "name": "store",
                          "nativeSrc": "8004:5:53",
                          "nodeType": "YulIdentifier",
                          "src": "8004:5:53"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "7994:6:53",
                            "nodeType": "YulIdentifier",
                            "src": "7994:6:53"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 48023,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7994:6:53",
                      "valueSize": 1
                    },
                    {
                      "declaration": 48013,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8004:5:53",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 48025,
                  "nodeType": "InlineAssembly",
                  "src": "7955:64:53"
                },
                {
                  "expression": {
                    "id": 48026,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 48023,
                    "src": "8036:6:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "functionReturnParameters": 48008,
                  "id": 48027,
                  "nodeType": "Return",
                  "src": "8029:13:53"
                }
              ]
            },
            "documentation": {
              "id": 48000,
              "nodeType": "StructuredDocumentation",
              "src": "7242:529:53",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "7785:6:53",
            "parameters": {
              "id": 48004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48003,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "7811:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48029,
                  "src": "7792:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                    "typeString": "struct EnumerableSet.Bytes32Set"
                  },
                  "typeName": {
                    "id": 48002,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48001,
                      "name": "Bytes32Set",
                      "nameLocations": [
                        "7792:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47912,
                      "src": "7792:10:53"
                    },
                    "referencedDeclaration": 47912,
                    "src": "7792:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Set_$47912_storage_ptr",
                      "typeString": "struct EnumerableSet.Bytes32Set"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7791:24:53"
            },
            "returnParameters": {
              "id": 48008,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48007,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48029,
                  "src": "7839:16:53",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48005,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "7839:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 48006,
                    "nodeType": "ArrayTypeName",
                    "src": "7839:9:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7838:18:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48033,
            "nodeType": "StructDefinition",
            "src": "8074:45:53",
            "nodes": [],
            "canonicalName": "EnumerableSet.AddressSet",
            "members": [
              {
                "constant": false,
                "id": 48032,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "8106:6:53",
                "nodeType": "VariableDeclaration",
                "scope": 48033,
                "src": "8102:10:53",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 48031,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 48030,
                    "name": "Set",
                    "nameLocations": [
                      "8102:3:53"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 47718,
                    "src": "8102:3:53"
                  },
                  "referencedDeclaration": 47718,
                  "src": "8102:3:53",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "AddressSet",
            "nameLocation": "8081:10:53",
            "scope": 48320,
            "visibility": "public"
          },
          {
            "id": 48060,
            "nodeType": "FunctionDefinition",
            "src": "8289:150:53",
            "nodes": [],
            "body": {
              "id": 48059,
              "nodeType": "Block",
              "src": "8365:74:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48045,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48037,
                          "src": "8387:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 48046,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8391:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48032,
                        "src": "8387:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
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
                                    "id": 48053,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 48039,
                                    "src": "8423:5:53",
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
                                  "id": 48052,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8415:7:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 48051,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8415:7:53",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 48054,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8415:14:53",
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
                              "id": 48050,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8407:7:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 48049,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8407:7:53",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 48055,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8407:23:53",
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
                          "id": 48048,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8399:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 48047,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8399:7:53",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 48056,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8399:32:53",
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
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 48044,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47760,
                      "src": "8382:4:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$47718_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 48057,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8382:50:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48043,
                  "id": 48058,
                  "nodeType": "Return",
                  "src": "8375:57:53"
                }
              ]
            },
            "documentation": {
              "id": 48034,
              "nodeType": "StructuredDocumentation",
              "src": "8125:159:53",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "8298:3:53",
            "parameters": {
              "id": 48040,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48037,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8321:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48060,
                  "src": "8302:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 48036,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48035,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8302:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48033,
                      "src": "8302:10:53"
                    },
                    "referencedDeclaration": 48033,
                    "src": "8302:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48039,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8334:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48060,
                  "src": "8326:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48038,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8326:7:53",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8301:39:53"
            },
            "returnParameters": {
              "id": 48043,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48042,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48060,
                  "src": "8359:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48041,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8359:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8358:6:53"
            },
            "scope": 48320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48087,
            "nodeType": "FunctionDefinition",
            "src": "8607:156:53",
            "nodes": [],
            "body": {
              "id": 48086,
              "nodeType": "Block",
              "src": "8686:77:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48072,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48064,
                          "src": "8711:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 48073,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8715:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48032,
                        "src": "8711:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
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
                                    "id": 48080,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 48066,
                                    "src": "8747:5:53",
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
                                  "id": 48079,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8739:7:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 48078,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8739:7:53",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 48081,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8739:14:53",
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
                              "id": 48077,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8731:7:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 48076,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8731:7:53",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 48082,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8731:23:53",
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
                          "id": 48075,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8723:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 48074,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8723:7:53",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 48083,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8723:32:53",
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
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 48071,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47844,
                      "src": "8703:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$47718_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 48084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8703:53:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48070,
                  "id": 48085,
                  "nodeType": "Return",
                  "src": "8696:60:53"
                }
              ]
            },
            "documentation": {
              "id": 48061,
              "nodeType": "StructuredDocumentation",
              "src": "8445:157:53",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "8616:6:53",
            "parameters": {
              "id": 48067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48064,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8642:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48087,
                  "src": "8623:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 48063,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48062,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8623:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48033,
                      "src": "8623:10:53"
                    },
                    "referencedDeclaration": 48033,
                    "src": "8623:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48066,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8655:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48087,
                  "src": "8647:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48065,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8647:7:53",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8622:39:53"
            },
            "returnParameters": {
              "id": 48070,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48069,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48087,
                  "src": "8680:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48068,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8680:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8679:6:53"
            },
            "scope": 48320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48114,
            "nodeType": "FunctionDefinition",
            "src": "8844:165:53",
            "nodes": [],
            "body": {
              "id": 48113,
              "nodeType": "Block",
              "src": "8930:79:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48099,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48091,
                          "src": "8957:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 48100,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8961:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48032,
                        "src": "8957:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
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
                                    "id": 48107,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 48093,
                                    "src": "8993:5:53",
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
                                  "id": 48106,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8985:7:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint160_$",
                                    "typeString": "type(uint160)"
                                  },
                                  "typeName": {
                                    "id": 48105,
                                    "name": "uint160",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8985:7:53",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 48108,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8985:14:53",
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
                              "id": 48104,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8977:7:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 48103,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8977:7:53",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 48109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8977:23:53",
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
                          "id": 48102,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8969:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 48101,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "8969:7:53",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 48110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8969:32:53",
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
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 48098,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47863,
                      "src": "8947:9:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 48111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8947:55:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48097,
                  "id": 48112,
                  "nodeType": "Return",
                  "src": "8940:62:53"
                }
              ]
            },
            "documentation": {
              "id": 48088,
              "nodeType": "StructuredDocumentation",
              "src": "8769:70:53",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "8853:8:53",
            "parameters": {
              "id": 48094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48091,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "8881:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48114,
                  "src": "8862:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 48090,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48089,
                      "name": "AddressSet",
                      "nameLocations": [
                        "8862:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48033,
                      "src": "8862:10:53"
                    },
                    "referencedDeclaration": 48033,
                    "src": "8862:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48093,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8894:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48114,
                  "src": "8886:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48092,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8886:7:53",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8861:39:53"
            },
            "returnParameters": {
              "id": 48097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48096,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48114,
                  "src": "8924:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48095,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8924:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8923:6:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48129,
            "nodeType": "FunctionDefinition",
            "src": "9090:115:53",
            "nodes": [],
            "body": {
              "id": 48128,
              "nodeType": "Block",
              "src": "9162:43:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48124,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48118,
                          "src": "9187:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 48125,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9191:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48032,
                        "src": "9187:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 48123,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47877,
                      "src": "9179:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 48126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9179:19:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 48122,
                  "id": 48127,
                  "nodeType": "Return",
                  "src": "9172:26:53"
                }
              ]
            },
            "documentation": {
              "id": 48115,
              "nodeType": "StructuredDocumentation",
              "src": "9015:70:53",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "9099:6:53",
            "parameters": {
              "id": 48119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48118,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9125:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48129,
                  "src": "9106:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 48117,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48116,
                      "name": "AddressSet",
                      "nameLocations": [
                        "9106:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48033,
                      "src": "9106:10:53"
                    },
                    "referencedDeclaration": 48033,
                    "src": "9106:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9105:24:53"
            },
            "returnParameters": {
              "id": 48122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48121,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48129,
                  "src": "9153:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48120,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9153:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9152:9:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48156,
            "nodeType": "FunctionDefinition",
            "src": "9547:156:53",
            "nodes": [],
            "body": {
              "id": 48155,
              "nodeType": "Block",
              "src": "9630:73:53",
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
                                      "id": 48147,
                                      "name": "set",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 48133,
                                      "src": "9675:3:53",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                                        "typeString": "struct EnumerableSet.AddressSet storage pointer"
                                      }
                                    },
                                    "id": 48148,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "9679:6:53",
                                    "memberName": "_inner",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 48032,
                                    "src": "9675:10:53",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Set_$47718_storage",
                                      "typeString": "struct EnumerableSet.Set storage ref"
                                    }
                                  },
                                  {
                                    "id": 48149,
                                    "name": "index",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 48135,
                                    "src": "9687:5:53",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Set_$47718_storage",
                                      "typeString": "struct EnumerableSet.Set storage ref"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 48146,
                                  "name": "_at",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 47894,
                                  "src": "9671:3:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                                    "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                                  }
                                },
                                "id": 48150,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9671:22:53",
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
                              "id": 48145,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9663:7:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 48144,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "9663:7:53",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 48151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9663:31:53",
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
                          "id": 48143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9655:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint160_$",
                            "typeString": "type(uint160)"
                          },
                          "typeName": {
                            "id": 48142,
                            "name": "uint160",
                            "nodeType": "ElementaryTypeName",
                            "src": "9655:7:53",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 48152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9655:40:53",
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
                      "id": 48141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9647:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 48140,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9647:7:53",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9647:49:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 48139,
                  "id": 48154,
                  "nodeType": "Return",
                  "src": "9640:56:53"
                }
              ]
            },
            "documentation": {
              "id": 48130,
              "nodeType": "StructuredDocumentation",
              "src": "9211:331:53",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "9556:2:53",
            "parameters": {
              "id": 48136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48133,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "9578:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48156,
                  "src": "9559:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 48132,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48131,
                      "name": "AddressSet",
                      "nameLocations": [
                        "9559:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48033,
                      "src": "9559:10:53"
                    },
                    "referencedDeclaration": 48033,
                    "src": "9559:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48135,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "9591:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48156,
                  "src": "9583:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9583:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9558:39:53"
            },
            "returnParameters": {
              "id": 48139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48138,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48156,
                  "src": "9621:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48137,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9621:7:53",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9620:9:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48186,
            "nodeType": "FunctionDefinition",
            "src": "10243:273:53",
            "nodes": [],
            "body": {
              "id": 48185,
              "nodeType": "Block",
              "src": "10324:192:53",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    48170
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48170,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "10351:5:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 48185,
                      "src": "10334:22:53",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 48168,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "10334:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 48169,
                        "nodeType": "ArrayTypeName",
                        "src": "10334:9:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48175,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48172,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48160,
                          "src": "10367:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                            "typeString": "struct EnumerableSet.AddressSet storage pointer"
                          }
                        },
                        "id": 48173,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10371:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48032,
                        "src": "10367:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 48171,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47908,
                      "src": "10359:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 48174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10359:19:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10334:44:53"
                },
                {
                  "assignments": [
                    48180
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48180,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "10405:6:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 48185,
                      "src": "10388:23:53",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 48178,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10388:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 48179,
                        "nodeType": "ArrayTypeName",
                        "src": "10388:9:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48181,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10388:23:53"
                },
                {
                  "AST": {
                    "nativeSrc": "10447:39:53",
                    "nodeType": "YulBlock",
                    "src": "10447:39:53",
                    "statements": [
                      {
                        "nativeSrc": "10461:15:53",
                        "nodeType": "YulAssignment",
                        "src": "10461:15:53",
                        "value": {
                          "name": "store",
                          "nativeSrc": "10471:5:53",
                          "nodeType": "YulIdentifier",
                          "src": "10471:5:53"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "10461:6:53",
                            "nodeType": "YulIdentifier",
                            "src": "10461:6:53"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 48180,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10461:6:53",
                      "valueSize": 1
                    },
                    {
                      "declaration": 48170,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10471:5:53",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 48182,
                  "nodeType": "InlineAssembly",
                  "src": "10422:64:53"
                },
                {
                  "expression": {
                    "id": 48183,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 48180,
                    "src": "10503:6:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 48165,
                  "id": 48184,
                  "nodeType": "Return",
                  "src": "10496:13:53"
                }
              ]
            },
            "documentation": {
              "id": 48157,
              "nodeType": "StructuredDocumentation",
              "src": "9709:529:53",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "10252:6:53",
            "parameters": {
              "id": 48161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48160,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "10278:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48186,
                  "src": "10259:22:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                    "typeString": "struct EnumerableSet.AddressSet"
                  },
                  "typeName": {
                    "id": 48159,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48158,
                      "name": "AddressSet",
                      "nameLocations": [
                        "10259:10:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48033,
                      "src": "10259:10:53"
                    },
                    "referencedDeclaration": 48033,
                    "src": "10259:10:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSet_$48033_storage_ptr",
                      "typeString": "struct EnumerableSet.AddressSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10258:24:53"
            },
            "returnParameters": {
              "id": 48165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48164,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48186,
                  "src": "10306:16:53",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48162,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10306:7:53",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 48163,
                    "nodeType": "ArrayTypeName",
                    "src": "10306:9:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10305:18:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48190,
            "nodeType": "StructDefinition",
            "src": "10538:42:53",
            "nodes": [],
            "canonicalName": "EnumerableSet.UintSet",
            "members": [
              {
                "constant": false,
                "id": 48189,
                "mutability": "mutable",
                "name": "_inner",
                "nameLocation": "10567:6:53",
                "nodeType": "VariableDeclaration",
                "scope": 48190,
                "src": "10563:10:53",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                  "typeString": "struct EnumerableSet.Set"
                },
                "typeName": {
                  "id": 48188,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 48187,
                    "name": "Set",
                    "nameLocations": [
                      "10563:3:53"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 47718,
                    "src": "10563:3:53"
                  },
                  "referencedDeclaration": 47718,
                  "src": "10563:3:53",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Set_$47718_storage_ptr",
                    "typeString": "struct EnumerableSet.Set"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "UintSet",
            "nameLocation": "10545:7:53",
            "scope": 48320,
            "visibility": "public"
          },
          {
            "id": 48211,
            "nodeType": "FunctionDefinition",
            "src": "10750:129:53",
            "nodes": [],
            "body": {
              "id": 48210,
              "nodeType": "Block",
              "src": "10823:56:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48202,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48194,
                          "src": "10845:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 48203,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10849:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48189,
                        "src": "10845:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 48206,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48196,
                            "src": "10865:5:53",
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
                          "id": 48205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "10857:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 48204,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "10857:7:53",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 48207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10857:14:53",
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
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 48201,
                      "name": "_add",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47760,
                      "src": "10840:4:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$47718_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 48208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10840:32:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48200,
                  "id": 48209,
                  "nodeType": "Return",
                  "src": "10833:39:53"
                }
              ]
            },
            "documentation": {
              "id": 48191,
              "nodeType": "StructuredDocumentation",
              "src": "10586:159:53",
              "text": " @dev Add a value to a set. O(1).\n Returns true if the value was added to the set, that is if it was not\n already present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "10759:3:53",
            "parameters": {
              "id": 48197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48194,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "10779:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48211,
                  "src": "10763:19:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 48193,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48192,
                      "name": "UintSet",
                      "nameLocations": [
                        "10763:7:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48190,
                      "src": "10763:7:53"
                    },
                    "referencedDeclaration": 48190,
                    "src": "10763:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48196,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10792:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48211,
                  "src": "10784:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48195,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10784:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10762:36:53"
            },
            "returnParameters": {
              "id": 48200,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48199,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48211,
                  "src": "10817:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48198,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10817:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10816:6:53"
            },
            "scope": 48320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48232,
            "nodeType": "FunctionDefinition",
            "src": "11047:135:53",
            "nodes": [],
            "body": {
              "id": 48231,
              "nodeType": "Block",
              "src": "11123:59:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48223,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48215,
                          "src": "11148:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 48224,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11152:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48189,
                        "src": "11148:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 48227,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48217,
                            "src": "11168:5:53",
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
                          "id": 48226,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11160:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 48225,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "11160:7:53",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 48228,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11160:14:53",
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
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 48222,
                      "name": "_remove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47844,
                      "src": "11140:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Set_$47718_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) returns (bool)"
                      }
                    },
                    "id": 48229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11140:35:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48221,
                  "id": 48230,
                  "nodeType": "Return",
                  "src": "11133:42:53"
                }
              ]
            },
            "documentation": {
              "id": 48212,
              "nodeType": "StructuredDocumentation",
              "src": "10885:157:53",
              "text": " @dev Removes a value from a set. O(1).\n Returns true if the value was removed from the set, that is if it was\n present."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nameLocation": "11056:6:53",
            "parameters": {
              "id": 48218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48215,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11079:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48232,
                  "src": "11063:19:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 48214,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48213,
                      "name": "UintSet",
                      "nameLocations": [
                        "11063:7:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48190,
                      "src": "11063:7:53"
                    },
                    "referencedDeclaration": 48190,
                    "src": "11063:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48217,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11092:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48232,
                  "src": "11084:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48216,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11084:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11062:36:53"
            },
            "returnParameters": {
              "id": 48221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48220,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48232,
                  "src": "11117:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48219,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11117:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11116:6:53"
            },
            "scope": 48320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48253,
            "nodeType": "FunctionDefinition",
            "src": "11263:144:53",
            "nodes": [],
            "body": {
              "id": 48252,
              "nodeType": "Block",
              "src": "11346:61:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48244,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48236,
                          "src": "11373:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 48245,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11377:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48189,
                        "src": "11373:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 48248,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48238,
                            "src": "11393:5:53",
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
                          "id": 48247,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11385:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 48246,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "11385:7:53",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 48249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11385:14:53",
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
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 48243,
                      "name": "_contains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47863,
                      "src": "11363:9:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer,bytes32) view returns (bool)"
                      }
                    },
                    "id": 48250,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11363:37:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48242,
                  "id": 48251,
                  "nodeType": "Return",
                  "src": "11356:44:53"
                }
              ]
            },
            "documentation": {
              "id": 48233,
              "nodeType": "StructuredDocumentation",
              "src": "11188:70:53",
              "text": " @dev Returns true if the value is in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nameLocation": "11272:8:53",
            "parameters": {
              "id": 48239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48236,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11297:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48253,
                  "src": "11281:19:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 48235,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48234,
                      "name": "UintSet",
                      "nameLocations": [
                        "11281:7:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48190,
                      "src": "11281:7:53"
                    },
                    "referencedDeclaration": 48190,
                    "src": "11281:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48238,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11310:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48253,
                  "src": "11302:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48237,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11302:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11280:36:53"
            },
            "returnParameters": {
              "id": 48242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48241,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48253,
                  "src": "11340:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48240,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11340:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11339:6:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48268,
            "nodeType": "FunctionDefinition",
            "src": "11488:112:53",
            "nodes": [],
            "body": {
              "id": 48267,
              "nodeType": "Block",
              "src": "11557:43:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48263,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48257,
                          "src": "11582:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 48264,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11586:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48189,
                        "src": "11582:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 48262,
                      "name": "_length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47877,
                      "src": "11574:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 48265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11574:19:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 48261,
                  "id": 48266,
                  "nodeType": "Return",
                  "src": "11567:26:53"
                }
              ]
            },
            "documentation": {
              "id": 48254,
              "nodeType": "StructuredDocumentation",
              "src": "11413:70:53",
              "text": " @dev Returns the number of values in the set. O(1)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "length",
            "nameLocation": "11497:6:53",
            "parameters": {
              "id": 48258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48257,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11520:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48268,
                  "src": "11504:19:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 48256,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48255,
                      "name": "UintSet",
                      "nameLocations": [
                        "11504:7:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48190,
                      "src": "11504:7:53"
                    },
                    "referencedDeclaration": 48190,
                    "src": "11504:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11503:21:53"
            },
            "returnParameters": {
              "id": 48261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48260,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48268,
                  "src": "11548:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48259,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11548:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11547:9:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48289,
            "nodeType": "FunctionDefinition",
            "src": "11942:135:53",
            "nodes": [],
            "body": {
              "id": 48288,
              "nodeType": "Block",
              "src": "12022:55:53",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 48282,
                              "name": "set",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48272,
                              "src": "12051:3:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                                "typeString": "struct EnumerableSet.UintSet storage pointer"
                              }
                            },
                            "id": 48283,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12055:6:53",
                            "memberName": "_inner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 48189,
                            "src": "12051:10:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Set_$47718_storage",
                              "typeString": "struct EnumerableSet.Set storage ref"
                            }
                          },
                          {
                            "id": 48284,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48274,
                            "src": "12063:5:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Set_$47718_storage",
                              "typeString": "struct EnumerableSet.Set storage ref"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 48281,
                          "name": "_at",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47894,
                          "src": "12047:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$_t_uint256_$returns$_t_bytes32_$",
                            "typeString": "function (struct EnumerableSet.Set storage pointer,uint256) view returns (bytes32)"
                          }
                        },
                        "id": 48285,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12047:22:53",
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
                      "id": 48280,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "12039:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 48279,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12039:7:53",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48286,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12039:31:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 48278,
                  "id": 48287,
                  "nodeType": "Return",
                  "src": "12032:38:53"
                }
              ]
            },
            "documentation": {
              "id": 48269,
              "nodeType": "StructuredDocumentation",
              "src": "11606:331:53",
              "text": " @dev Returns the value stored at position `index` in the set. O(1).\n Note that there are no guarantees on the ordering of values inside the\n array, and it may change when more values are added or removed.\n Requirements:\n - `index` must be strictly less than {length}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "at",
            "nameLocation": "11951:2:53",
            "parameters": {
              "id": 48275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48272,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "11970:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48289,
                  "src": "11954:19:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 48271,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48270,
                      "name": "UintSet",
                      "nameLocations": [
                        "11954:7:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48190,
                      "src": "11954:7:53"
                    },
                    "referencedDeclaration": 48190,
                    "src": "11954:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48274,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "11983:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48289,
                  "src": "11975:13:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48273,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11975:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11953:36:53"
            },
            "returnParameters": {
              "id": 48278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48277,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48289,
                  "src": "12013:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48276,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12013:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12012:9:53"
            },
            "scope": 48320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48319,
            "nodeType": "FunctionDefinition",
            "src": "12617:270:53",
            "nodes": [],
            "body": {
              "id": 48318,
              "nodeType": "Block",
              "src": "12695:192:53",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    48303
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48303,
                      "mutability": "mutable",
                      "name": "store",
                      "nameLocation": "12722:5:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 48318,
                      "src": "12705:22:53",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 48301,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "12705:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 48302,
                        "nodeType": "ArrayTypeName",
                        "src": "12705:9:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48308,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 48305,
                          "name": "set",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48293,
                          "src": "12738:3:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                            "typeString": "struct EnumerableSet.UintSet storage pointer"
                          }
                        },
                        "id": 48306,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12742:6:53",
                        "memberName": "_inner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48189,
                        "src": "12738:10:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Set_$47718_storage",
                          "typeString": "struct EnumerableSet.Set storage ref"
                        }
                      ],
                      "id": 48304,
                      "name": "_values",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47908,
                      "src": "12730:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Set_$47718_storage_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (struct EnumerableSet.Set storage pointer) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 48307,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12730:19:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12705:44:53"
                },
                {
                  "assignments": [
                    48313
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48313,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "12776:6:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 48318,
                      "src": "12759:23:53",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 48311,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12759:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 48312,
                        "nodeType": "ArrayTypeName",
                        "src": "12759:9:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48314,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12759:23:53"
                },
                {
                  "AST": {
                    "nativeSrc": "12818:39:53",
                    "nodeType": "YulBlock",
                    "src": "12818:39:53",
                    "statements": [
                      {
                        "nativeSrc": "12832:15:53",
                        "nodeType": "YulAssignment",
                        "src": "12832:15:53",
                        "value": {
                          "name": "store",
                          "nativeSrc": "12842:5:53",
                          "nodeType": "YulIdentifier",
                          "src": "12842:5:53"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "12832:6:53",
                            "nodeType": "YulIdentifier",
                            "src": "12832:6:53"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 48313,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12832:6:53",
                      "valueSize": 1
                    },
                    {
                      "declaration": 48303,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12842:5:53",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 48315,
                  "nodeType": "InlineAssembly",
                  "src": "12793:64:53"
                },
                {
                  "expression": {
                    "id": 48316,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 48313,
                    "src": "12874:6:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 48298,
                  "id": 48317,
                  "nodeType": "Return",
                  "src": "12867:13:53"
                }
              ]
            },
            "documentation": {
              "id": 48290,
              "nodeType": "StructuredDocumentation",
              "src": "12083:529:53",
              "text": " @dev Return the entire set in an array\n WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\n to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\n this function has an unbounded cost, and using it as part of a state-changing function may render the function\n uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "values",
            "nameLocation": "12626:6:53",
            "parameters": {
              "id": 48294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48293,
                  "mutability": "mutable",
                  "name": "set",
                  "nameLocation": "12649:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 48319,
                  "src": "12633:19:53",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                    "typeString": "struct EnumerableSet.UintSet"
                  },
                  "typeName": {
                    "id": 48292,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48291,
                      "name": "UintSet",
                      "nameLocations": [
                        "12633:7:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48190,
                      "src": "12633:7:53"
                    },
                    "referencedDeclaration": 48190,
                    "src": "12633:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UintSet_$48190_storage_ptr",
                      "typeString": "struct EnumerableSet.UintSet"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12632:21:53"
            },
            "returnParameters": {
              "id": 48298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48297,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48319,
                  "src": "12677:16:53",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48295,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "12677:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 48296,
                    "nodeType": "ArrayTypeName",
                    "src": "12677:9:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12676:18:53"
            },
            "scope": 48320,
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
          "id": 47710,
          "nodeType": "StructuredDocumentation",
          "src": "231:1098:53",
          "text": " @dev Library for managing\n https://en.wikipedia.org/wiki/Set_(abstract_data_type)[sets] of primitive\n types.\n Sets have the following properties:\n - Elements are added, removed, and checked for existence in constant time\n (O(1)).\n - Elements are enumerated in O(n). No guarantees are made on the ordering.\n ```solidity\n contract Example {\n     // Add the library methods\n     using EnumerableSet for EnumerableSet.AddressSet;\n     // Declare a set state variable\n     EnumerableSet.AddressSet private mySet;\n }\n ```\n As of v3.3.0, sets of type `bytes32` (`Bytes32Set`), `address` (`AddressSet`)\n and `uint256` (`UintSet`) are supported.\n [WARNING]\n ====\n Trying to delete such a structure from storage will likely result in data corruption, rendering the structure\n unusable.\n See https://github.com/ethereum/solidity/pull/11843[ethereum/solidity#11843] for more info.\n In order to clean an EnumerableSet, you can either remove all elements one by one or create a fresh instance using an\n array of EnumerableSet.\n ===="
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          48320
        ],
        "name": "EnumerableSet",
        "nameLocation": "1338:13:53",
        "scope": 48321,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 53
} as const;