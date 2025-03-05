export const SafeCast = {
  "abi": [
    {
      "type": "error",
      "name": "SafeCastOverflowedIntDowncast",
      "inputs": [
        {
          "name": "bits",
          "type": "uint8",
          "internalType": "uint8"
        },
        {
          "name": "value",
          "type": "int256",
          "internalType": "int256"
        }
      ]
    },
    {
      "type": "error",
      "name": "SafeCastOverflowedIntToUint",
      "inputs": [
        {
          "name": "value",
          "type": "int256",
          "internalType": "int256"
        }
      ]
    },
    {
      "type": "error",
      "name": "SafeCastOverflowedUintDowncast",
      "inputs": [
        {
          "name": "bits",
          "type": "uint8",
          "internalType": "uint8"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "SafeCastOverflowedUintToInt",
      "inputs": [
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220efe89360a80ee4172cf91c02cd82f1b2e37ab342be70eb01b3e4f6a35a5d8f1464736f6c634300081a0033",
    "sourceMap": "769:34173:50:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;769:34173:50;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220efe89360a80ee4172cf91c02cd82f1b2e37ab342be70eb01b3e4f6a35a5d8f1464736f6c634300081a0033",
    "sourceMap": "769:34173:50:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"bits\",\"type\":\"uint8\"},{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"SafeCastOverflowedIntDowncast\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"SafeCastOverflowedIntToUint\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"bits\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"SafeCastOverflowedUintDowncast\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"SafeCastOverflowedUintToInt\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Wrappers over Solidity's uintXX/intXX/bool casting operators with added overflow checks. Downcasting from uint256/int256 in Solidity does not revert on overflow. This can easily result in undesired exploitation or bugs, since developers usually assume that overflows raise errors. `SafeCast` restores this intuition by reverting the transaction when such an operation overflows. Using this library instead of the unchecked operations eliminates an entire class of bugs, so it's recommended to use it always.\",\"errors\":{\"SafeCastOverflowedIntDowncast(uint8,int256)\":[{\"details\":\"Value doesn't fit in an int of `bits` size.\"}],\"SafeCastOverflowedIntToUint(int256)\":[{\"details\":\"An int value doesn't fit in an uint of `bits` size.\"}],\"SafeCastOverflowedUintDowncast(uint8,uint256)\":[{\"details\":\"Value doesn't fit in an uint of `bits` size.\"}],\"SafeCastOverflowedUintToInt(uint256)\":[{\"details\":\"An uint value doesn't fit in an int of `bits` size.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":\"SafeCast\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]}},\"version\":1}",
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
              "internalType": "uint8",
              "name": "bits",
              "type": "uint8"
            },
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            }
          ],
          "type": "error",
          "name": "SafeCastOverflowedIntDowncast"
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            }
          ],
          "type": "error",
          "name": "SafeCastOverflowedIntToUint"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "bits",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "SafeCastOverflowedUintDowncast"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "SafeCastOverflowedUintToInt"
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
        "node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol": "SafeCast"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol": {
        "keccak256": "0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54",
        "urls": [
          "bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8",
          "dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol",
    "id": 45531,
    "exportedSymbols": {
      "SafeCast": [
        45530
      ]
    },
    "nodeType": "SourceUnit",
    "src": "192:34751:50",
    "nodes": [
      {
        "id": 43767,
        "nodeType": "PragmaDirective",
        "src": "192:24:50",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 45530,
        "nodeType": "ContractDefinition",
        "src": "769:34173:50",
        "nodes": [
          {
            "id": 43775,
            "nodeType": "ErrorDefinition",
            "src": "865:64:50",
            "nodes": [],
            "documentation": {
              "id": 43769,
              "nodeType": "StructuredDocumentation",
              "src": "792:68:50",
              "text": " @dev Value doesn't fit in an uint of `bits` size."
            },
            "errorSelector": "6dfcc650",
            "name": "SafeCastOverflowedUintDowncast",
            "nameLocation": "871:30:50",
            "parameters": {
              "id": 43774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43771,
                  "mutability": "mutable",
                  "name": "bits",
                  "nameLocation": "908:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43775,
                  "src": "902:10:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 43770,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "902:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43773,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "922:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43775,
                  "src": "914:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43772,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "914:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "901:27:50"
            }
          },
          {
            "id": 43780,
            "nodeType": "ErrorDefinition",
            "src": "1015:48:50",
            "nodes": [],
            "documentation": {
              "id": 43776,
              "nodeType": "StructuredDocumentation",
              "src": "935:75:50",
              "text": " @dev An int value doesn't fit in an uint of `bits` size."
            },
            "errorSelector": "a8ce4432",
            "name": "SafeCastOverflowedIntToUint",
            "nameLocation": "1021:27:50",
            "parameters": {
              "id": 43779,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43778,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1056:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43780,
                  "src": "1049:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 43777,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1049:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1048:14:50"
            }
          },
          {
            "id": 43787,
            "nodeType": "ErrorDefinition",
            "src": "1141:62:50",
            "nodes": [],
            "documentation": {
              "id": 43781,
              "nodeType": "StructuredDocumentation",
              "src": "1069:67:50",
              "text": " @dev Value doesn't fit in an int of `bits` size."
            },
            "errorSelector": "327269a7",
            "name": "SafeCastOverflowedIntDowncast",
            "nameLocation": "1147:29:50",
            "parameters": {
              "id": 43786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43783,
                  "mutability": "mutable",
                  "name": "bits",
                  "nameLocation": "1183:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43787,
                  "src": "1177:10:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 43782,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1177:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43785,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1196:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43787,
                  "src": "1189:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 43784,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1189:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1176:26:50"
            }
          },
          {
            "id": 43792,
            "nodeType": "ErrorDefinition",
            "src": "1289:49:50",
            "nodes": [],
            "documentation": {
              "id": 43788,
              "nodeType": "StructuredDocumentation",
              "src": "1209:75:50",
              "text": " @dev An uint value doesn't fit in an int of `bits` size."
            },
            "errorSelector": "24775e06",
            "name": "SafeCastOverflowedUintToInt",
            "nameLocation": "1295:27:50",
            "parameters": {
              "id": 43791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43790,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1331:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43792,
                  "src": "1323:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43789,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1323:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1322:15:50"
            }
          },
          {
            "id": 43820,
            "nodeType": "FunctionDefinition",
            "src": "1629:218:50",
            "nodes": [],
            "body": {
              "id": 43819,
              "nodeType": "Block",
              "src": "1695:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 43806,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43800,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43795,
                      "src": "1709:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 43803,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1722:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint248_$",
                              "typeString": "type(uint248)"
                            },
                            "typeName": {
                              "id": 43802,
                              "name": "uint248",
                              "nodeType": "ElementaryTypeName",
                              "src": "1722:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint248_$",
                              "typeString": "type(uint248)"
                            }
                          ],
                          "id": 43801,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "1717:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 43804,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1717:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint248",
                          "typeString": "type(uint248)"
                        }
                      },
                      "id": 43805,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1731:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "1717:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint248",
                        "typeString": "uint248"
                      }
                    },
                    "src": "1709:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43813,
                  "nodeType": "IfStatement",
                  "src": "1705:105:50",
                  "trueBody": {
                    "id": 43812,
                    "nodeType": "Block",
                    "src": "1736:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323438",
                              "id": 43808,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1788:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_248_by_1",
                                "typeString": "int_const 248"
                              },
                              "value": "248"
                            },
                            {
                              "id": 43809,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43795,
                              "src": "1793:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_248_by_1",
                                "typeString": "int_const 248"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 43807,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "1757:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 43810,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1757:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 43811,
                        "nodeType": "RevertStatement",
                        "src": "1750:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43816,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43795,
                        "src": "1834:5:50",
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
                      "id": 43815,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1826:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint248_$",
                        "typeString": "type(uint248)"
                      },
                      "typeName": {
                        "id": 43814,
                        "name": "uint248",
                        "nodeType": "ElementaryTypeName",
                        "src": "1826:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 43817,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1826:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint248",
                      "typeString": "uint248"
                    }
                  },
                  "functionReturnParameters": 43799,
                  "id": 43818,
                  "nodeType": "Return",
                  "src": "1819:21:50"
                }
              ]
            },
            "documentation": {
              "id": 43793,
              "nodeType": "StructuredDocumentation",
              "src": "1344:280:50",
              "text": " @dev Returns the downcasted uint248 from uint256, reverting on\n overflow (when the input is greater than largest uint248).\n Counterpart to Solidity's `uint248` operator.\n Requirements:\n - input must fit into 248 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint248",
            "nameLocation": "1638:9:50",
            "parameters": {
              "id": 43796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43795,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1656:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43820,
                  "src": "1648:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43794,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1648:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1647:15:50"
            },
            "returnParameters": {
              "id": 43799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43798,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43820,
                  "src": "1686:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint248",
                    "typeString": "uint248"
                  },
                  "typeName": {
                    "id": 43797,
                    "name": "uint248",
                    "nodeType": "ElementaryTypeName",
                    "src": "1686:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint248",
                      "typeString": "uint248"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1685:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 43848,
            "nodeType": "FunctionDefinition",
            "src": "2138:218:50",
            "nodes": [],
            "body": {
              "id": 43847,
              "nodeType": "Block",
              "src": "2204:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 43834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43828,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43823,
                      "src": "2218:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 43831,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2231:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint240_$",
                              "typeString": "type(uint240)"
                            },
                            "typeName": {
                              "id": 43830,
                              "name": "uint240",
                              "nodeType": "ElementaryTypeName",
                              "src": "2231:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint240_$",
                              "typeString": "type(uint240)"
                            }
                          ],
                          "id": 43829,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "2226:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 43832,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2226:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint240",
                          "typeString": "type(uint240)"
                        }
                      },
                      "id": 43833,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "2240:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "2226:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint240",
                        "typeString": "uint240"
                      }
                    },
                    "src": "2218:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43841,
                  "nodeType": "IfStatement",
                  "src": "2214:105:50",
                  "trueBody": {
                    "id": 43840,
                    "nodeType": "Block",
                    "src": "2245:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323430",
                              "id": 43836,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2297:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_240_by_1",
                                "typeString": "int_const 240"
                              },
                              "value": "240"
                            },
                            {
                              "id": 43837,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43823,
                              "src": "2302:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_240_by_1",
                                "typeString": "int_const 240"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 43835,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "2266:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 43838,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2266:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 43839,
                        "nodeType": "RevertStatement",
                        "src": "2259:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43844,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43823,
                        "src": "2343:5:50",
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
                      "id": 43843,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2335:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint240_$",
                        "typeString": "type(uint240)"
                      },
                      "typeName": {
                        "id": 43842,
                        "name": "uint240",
                        "nodeType": "ElementaryTypeName",
                        "src": "2335:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 43845,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2335:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint240",
                      "typeString": "uint240"
                    }
                  },
                  "functionReturnParameters": 43827,
                  "id": 43846,
                  "nodeType": "Return",
                  "src": "2328:21:50"
                }
              ]
            },
            "documentation": {
              "id": 43821,
              "nodeType": "StructuredDocumentation",
              "src": "1853:280:50",
              "text": " @dev Returns the downcasted uint240 from uint256, reverting on\n overflow (when the input is greater than largest uint240).\n Counterpart to Solidity's `uint240` operator.\n Requirements:\n - input must fit into 240 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint240",
            "nameLocation": "2147:9:50",
            "parameters": {
              "id": 43824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43823,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2165:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43848,
                  "src": "2157:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43822,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2157:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2156:15:50"
            },
            "returnParameters": {
              "id": 43827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43826,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43848,
                  "src": "2195:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint240",
                    "typeString": "uint240"
                  },
                  "typeName": {
                    "id": 43825,
                    "name": "uint240",
                    "nodeType": "ElementaryTypeName",
                    "src": "2195:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint240",
                      "typeString": "uint240"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2194:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 43876,
            "nodeType": "FunctionDefinition",
            "src": "2647:218:50",
            "nodes": [],
            "body": {
              "id": 43875,
              "nodeType": "Block",
              "src": "2713:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 43862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43856,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43851,
                      "src": "2727:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 43859,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2740:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint232_$",
                              "typeString": "type(uint232)"
                            },
                            "typeName": {
                              "id": 43858,
                              "name": "uint232",
                              "nodeType": "ElementaryTypeName",
                              "src": "2740:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint232_$",
                              "typeString": "type(uint232)"
                            }
                          ],
                          "id": 43857,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "2735:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 43860,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2735:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint232",
                          "typeString": "type(uint232)"
                        }
                      },
                      "id": 43861,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "2749:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "2735:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint232",
                        "typeString": "uint232"
                      }
                    },
                    "src": "2727:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43869,
                  "nodeType": "IfStatement",
                  "src": "2723:105:50",
                  "trueBody": {
                    "id": 43868,
                    "nodeType": "Block",
                    "src": "2754:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323332",
                              "id": 43864,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2806:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_232_by_1",
                                "typeString": "int_const 232"
                              },
                              "value": "232"
                            },
                            {
                              "id": 43865,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43851,
                              "src": "2811:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_232_by_1",
                                "typeString": "int_const 232"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 43863,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "2775:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 43866,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2775:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 43867,
                        "nodeType": "RevertStatement",
                        "src": "2768:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43872,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43851,
                        "src": "2852:5:50",
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
                      "id": 43871,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2844:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint232_$",
                        "typeString": "type(uint232)"
                      },
                      "typeName": {
                        "id": 43870,
                        "name": "uint232",
                        "nodeType": "ElementaryTypeName",
                        "src": "2844:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 43873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2844:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint232",
                      "typeString": "uint232"
                    }
                  },
                  "functionReturnParameters": 43855,
                  "id": 43874,
                  "nodeType": "Return",
                  "src": "2837:21:50"
                }
              ]
            },
            "documentation": {
              "id": 43849,
              "nodeType": "StructuredDocumentation",
              "src": "2362:280:50",
              "text": " @dev Returns the downcasted uint232 from uint256, reverting on\n overflow (when the input is greater than largest uint232).\n Counterpart to Solidity's `uint232` operator.\n Requirements:\n - input must fit into 232 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint232",
            "nameLocation": "2656:9:50",
            "parameters": {
              "id": 43852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43851,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2674:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43876,
                  "src": "2666:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43850,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2666:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2665:15:50"
            },
            "returnParameters": {
              "id": 43855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43854,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43876,
                  "src": "2704:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint232",
                    "typeString": "uint232"
                  },
                  "typeName": {
                    "id": 43853,
                    "name": "uint232",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint232",
                      "typeString": "uint232"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2703:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 43904,
            "nodeType": "FunctionDefinition",
            "src": "3156:218:50",
            "nodes": [],
            "body": {
              "id": 43903,
              "nodeType": "Block",
              "src": "3222:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 43890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43884,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43879,
                      "src": "3236:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 43887,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3249:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint224_$",
                              "typeString": "type(uint224)"
                            },
                            "typeName": {
                              "id": 43886,
                              "name": "uint224",
                              "nodeType": "ElementaryTypeName",
                              "src": "3249:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint224_$",
                              "typeString": "type(uint224)"
                            }
                          ],
                          "id": 43885,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "3244:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 43888,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3244:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint224",
                          "typeString": "type(uint224)"
                        }
                      },
                      "id": 43889,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "3258:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "3244:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint224",
                        "typeString": "uint224"
                      }
                    },
                    "src": "3236:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43897,
                  "nodeType": "IfStatement",
                  "src": "3232:105:50",
                  "trueBody": {
                    "id": 43896,
                    "nodeType": "Block",
                    "src": "3263:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323234",
                              "id": 43892,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3315:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_224_by_1",
                                "typeString": "int_const 224"
                              },
                              "value": "224"
                            },
                            {
                              "id": 43893,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43879,
                              "src": "3320:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_224_by_1",
                                "typeString": "int_const 224"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 43891,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "3284:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 43894,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3284:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 43895,
                        "nodeType": "RevertStatement",
                        "src": "3277:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43900,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43879,
                        "src": "3361:5:50",
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
                      "id": 43899,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3353:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint224_$",
                        "typeString": "type(uint224)"
                      },
                      "typeName": {
                        "id": 43898,
                        "name": "uint224",
                        "nodeType": "ElementaryTypeName",
                        "src": "3353:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 43901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3353:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint224",
                      "typeString": "uint224"
                    }
                  },
                  "functionReturnParameters": 43883,
                  "id": 43902,
                  "nodeType": "Return",
                  "src": "3346:21:50"
                }
              ]
            },
            "documentation": {
              "id": 43877,
              "nodeType": "StructuredDocumentation",
              "src": "2871:280:50",
              "text": " @dev Returns the downcasted uint224 from uint256, reverting on\n overflow (when the input is greater than largest uint224).\n Counterpart to Solidity's `uint224` operator.\n Requirements:\n - input must fit into 224 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint224",
            "nameLocation": "3165:9:50",
            "parameters": {
              "id": 43880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43879,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3183:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43904,
                  "src": "3175:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43878,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3175:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3174:15:50"
            },
            "returnParameters": {
              "id": 43883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43882,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43904,
                  "src": "3213:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint224",
                    "typeString": "uint224"
                  },
                  "typeName": {
                    "id": 43881,
                    "name": "uint224",
                    "nodeType": "ElementaryTypeName",
                    "src": "3213:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint224",
                      "typeString": "uint224"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3212:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 43932,
            "nodeType": "FunctionDefinition",
            "src": "3665:218:50",
            "nodes": [],
            "body": {
              "id": 43931,
              "nodeType": "Block",
              "src": "3731:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 43918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43912,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43907,
                      "src": "3745:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 43915,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3758:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint216_$",
                              "typeString": "type(uint216)"
                            },
                            "typeName": {
                              "id": 43914,
                              "name": "uint216",
                              "nodeType": "ElementaryTypeName",
                              "src": "3758:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint216_$",
                              "typeString": "type(uint216)"
                            }
                          ],
                          "id": 43913,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "3753:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 43916,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3753:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint216",
                          "typeString": "type(uint216)"
                        }
                      },
                      "id": 43917,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "3767:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "3753:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint216",
                        "typeString": "uint216"
                      }
                    },
                    "src": "3745:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43925,
                  "nodeType": "IfStatement",
                  "src": "3741:105:50",
                  "trueBody": {
                    "id": 43924,
                    "nodeType": "Block",
                    "src": "3772:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323136",
                              "id": 43920,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3824:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_216_by_1",
                                "typeString": "int_const 216"
                              },
                              "value": "216"
                            },
                            {
                              "id": 43921,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43907,
                              "src": "3829:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_216_by_1",
                                "typeString": "int_const 216"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 43919,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "3793:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 43922,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3793:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 43923,
                        "nodeType": "RevertStatement",
                        "src": "3786:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43928,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43907,
                        "src": "3870:5:50",
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
                      "id": 43927,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3862:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint216_$",
                        "typeString": "type(uint216)"
                      },
                      "typeName": {
                        "id": 43926,
                        "name": "uint216",
                        "nodeType": "ElementaryTypeName",
                        "src": "3862:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 43929,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3862:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint216",
                      "typeString": "uint216"
                    }
                  },
                  "functionReturnParameters": 43911,
                  "id": 43930,
                  "nodeType": "Return",
                  "src": "3855:21:50"
                }
              ]
            },
            "documentation": {
              "id": 43905,
              "nodeType": "StructuredDocumentation",
              "src": "3380:280:50",
              "text": " @dev Returns the downcasted uint216 from uint256, reverting on\n overflow (when the input is greater than largest uint216).\n Counterpart to Solidity's `uint216` operator.\n Requirements:\n - input must fit into 216 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint216",
            "nameLocation": "3674:9:50",
            "parameters": {
              "id": 43908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43907,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3692:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43932,
                  "src": "3684:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43906,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3684:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3683:15:50"
            },
            "returnParameters": {
              "id": 43911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43910,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43932,
                  "src": "3722:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint216",
                    "typeString": "uint216"
                  },
                  "typeName": {
                    "id": 43909,
                    "name": "uint216",
                    "nodeType": "ElementaryTypeName",
                    "src": "3722:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint216",
                      "typeString": "uint216"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3721:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 43960,
            "nodeType": "FunctionDefinition",
            "src": "4174:218:50",
            "nodes": [],
            "body": {
              "id": 43959,
              "nodeType": "Block",
              "src": "4240:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 43946,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43940,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43935,
                      "src": "4254:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 43943,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4267:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint208_$",
                              "typeString": "type(uint208)"
                            },
                            "typeName": {
                              "id": 43942,
                              "name": "uint208",
                              "nodeType": "ElementaryTypeName",
                              "src": "4267:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint208_$",
                              "typeString": "type(uint208)"
                            }
                          ],
                          "id": 43941,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "4262:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 43944,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4262:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint208",
                          "typeString": "type(uint208)"
                        }
                      },
                      "id": 43945,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "4276:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "4262:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint208",
                        "typeString": "uint208"
                      }
                    },
                    "src": "4254:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43953,
                  "nodeType": "IfStatement",
                  "src": "4250:105:50",
                  "trueBody": {
                    "id": 43952,
                    "nodeType": "Block",
                    "src": "4281:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323038",
                              "id": 43948,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4333:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_208_by_1",
                                "typeString": "int_const 208"
                              },
                              "value": "208"
                            },
                            {
                              "id": 43949,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43935,
                              "src": "4338:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_208_by_1",
                                "typeString": "int_const 208"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 43947,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "4302:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 43950,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4302:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 43951,
                        "nodeType": "RevertStatement",
                        "src": "4295:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43956,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43935,
                        "src": "4379:5:50",
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
                      "id": 43955,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "4371:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint208_$",
                        "typeString": "type(uint208)"
                      },
                      "typeName": {
                        "id": 43954,
                        "name": "uint208",
                        "nodeType": "ElementaryTypeName",
                        "src": "4371:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 43957,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4371:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint208",
                      "typeString": "uint208"
                    }
                  },
                  "functionReturnParameters": 43939,
                  "id": 43958,
                  "nodeType": "Return",
                  "src": "4364:21:50"
                }
              ]
            },
            "documentation": {
              "id": 43933,
              "nodeType": "StructuredDocumentation",
              "src": "3889:280:50",
              "text": " @dev Returns the downcasted uint208 from uint256, reverting on\n overflow (when the input is greater than largest uint208).\n Counterpart to Solidity's `uint208` operator.\n Requirements:\n - input must fit into 208 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint208",
            "nameLocation": "4183:9:50",
            "parameters": {
              "id": 43936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43935,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4201:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43960,
                  "src": "4193:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43934,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4193:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4192:15:50"
            },
            "returnParameters": {
              "id": 43939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43938,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43960,
                  "src": "4231:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint208",
                    "typeString": "uint208"
                  },
                  "typeName": {
                    "id": 43937,
                    "name": "uint208",
                    "nodeType": "ElementaryTypeName",
                    "src": "4231:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint208",
                      "typeString": "uint208"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4230:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 43988,
            "nodeType": "FunctionDefinition",
            "src": "4683:218:50",
            "nodes": [],
            "body": {
              "id": 43987,
              "nodeType": "Block",
              "src": "4749:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 43974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43968,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43963,
                      "src": "4763:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 43971,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4776:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint200_$",
                              "typeString": "type(uint200)"
                            },
                            "typeName": {
                              "id": 43970,
                              "name": "uint200",
                              "nodeType": "ElementaryTypeName",
                              "src": "4776:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint200_$",
                              "typeString": "type(uint200)"
                            }
                          ],
                          "id": 43969,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "4771:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 43972,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4771:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint200",
                          "typeString": "type(uint200)"
                        }
                      },
                      "id": 43973,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "4785:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "4771:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint200",
                        "typeString": "uint200"
                      }
                    },
                    "src": "4763:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43981,
                  "nodeType": "IfStatement",
                  "src": "4759:105:50",
                  "trueBody": {
                    "id": 43980,
                    "nodeType": "Block",
                    "src": "4790:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323030",
                              "id": 43976,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4842:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_200_by_1",
                                "typeString": "int_const 200"
                              },
                              "value": "200"
                            },
                            {
                              "id": 43977,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43963,
                              "src": "4847:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_200_by_1",
                                "typeString": "int_const 200"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 43975,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "4811:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 43978,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4811:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 43979,
                        "nodeType": "RevertStatement",
                        "src": "4804:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43984,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43963,
                        "src": "4888:5:50",
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
                      "id": 43983,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "4880:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint200_$",
                        "typeString": "type(uint200)"
                      },
                      "typeName": {
                        "id": 43982,
                        "name": "uint200",
                        "nodeType": "ElementaryTypeName",
                        "src": "4880:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 43985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4880:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint200",
                      "typeString": "uint200"
                    }
                  },
                  "functionReturnParameters": 43967,
                  "id": 43986,
                  "nodeType": "Return",
                  "src": "4873:21:50"
                }
              ]
            },
            "documentation": {
              "id": 43961,
              "nodeType": "StructuredDocumentation",
              "src": "4398:280:50",
              "text": " @dev Returns the downcasted uint200 from uint256, reverting on\n overflow (when the input is greater than largest uint200).\n Counterpart to Solidity's `uint200` operator.\n Requirements:\n - input must fit into 200 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint200",
            "nameLocation": "4692:9:50",
            "parameters": {
              "id": 43964,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43963,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4710:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 43988,
                  "src": "4702:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43962,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4702:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4701:15:50"
            },
            "returnParameters": {
              "id": 43967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43966,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43988,
                  "src": "4740:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint200",
                    "typeString": "uint200"
                  },
                  "typeName": {
                    "id": 43965,
                    "name": "uint200",
                    "nodeType": "ElementaryTypeName",
                    "src": "4740:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint200",
                      "typeString": "uint200"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4739:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44016,
            "nodeType": "FunctionDefinition",
            "src": "5192:218:50",
            "nodes": [],
            "body": {
              "id": 44015,
              "nodeType": "Block",
              "src": "5258:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44002,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43996,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43991,
                      "src": "5272:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 43999,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5285:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint192_$",
                              "typeString": "type(uint192)"
                            },
                            "typeName": {
                              "id": 43998,
                              "name": "uint192",
                              "nodeType": "ElementaryTypeName",
                              "src": "5285:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint192_$",
                              "typeString": "type(uint192)"
                            }
                          ],
                          "id": 43997,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "5280:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44000,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5280:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint192",
                          "typeString": "type(uint192)"
                        }
                      },
                      "id": 44001,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5294:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "5280:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint192",
                        "typeString": "uint192"
                      }
                    },
                    "src": "5272:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44009,
                  "nodeType": "IfStatement",
                  "src": "5268:105:50",
                  "trueBody": {
                    "id": 44008,
                    "nodeType": "Block",
                    "src": "5299:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313932",
                              "id": 44004,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5351:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_192_by_1",
                                "typeString": "int_const 192"
                              },
                              "value": "192"
                            },
                            {
                              "id": 44005,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43991,
                              "src": "5356:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_192_by_1",
                                "typeString": "int_const 192"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44003,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "5320:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44006,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5320:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44007,
                        "nodeType": "RevertStatement",
                        "src": "5313:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44012,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43991,
                        "src": "5397:5:50",
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
                      "id": 44011,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5389:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint192_$",
                        "typeString": "type(uint192)"
                      },
                      "typeName": {
                        "id": 44010,
                        "name": "uint192",
                        "nodeType": "ElementaryTypeName",
                        "src": "5389:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5389:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint192",
                      "typeString": "uint192"
                    }
                  },
                  "functionReturnParameters": 43995,
                  "id": 44014,
                  "nodeType": "Return",
                  "src": "5382:21:50"
                }
              ]
            },
            "documentation": {
              "id": 43989,
              "nodeType": "StructuredDocumentation",
              "src": "4907:280:50",
              "text": " @dev Returns the downcasted uint192 from uint256, reverting on\n overflow (when the input is greater than largest uint192).\n Counterpart to Solidity's `uint192` operator.\n Requirements:\n - input must fit into 192 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint192",
            "nameLocation": "5201:9:50",
            "parameters": {
              "id": 43992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43991,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5219:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44016,
                  "src": "5211:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43990,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5211:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5210:15:50"
            },
            "returnParameters": {
              "id": 43995,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43994,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44016,
                  "src": "5249:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint192",
                    "typeString": "uint192"
                  },
                  "typeName": {
                    "id": 43993,
                    "name": "uint192",
                    "nodeType": "ElementaryTypeName",
                    "src": "5249:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint192",
                      "typeString": "uint192"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5248:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44044,
            "nodeType": "FunctionDefinition",
            "src": "5701:218:50",
            "nodes": [],
            "body": {
              "id": 44043,
              "nodeType": "Block",
              "src": "5767:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44030,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44024,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44019,
                      "src": "5781:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44027,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5794:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint184_$",
                              "typeString": "type(uint184)"
                            },
                            "typeName": {
                              "id": 44026,
                              "name": "uint184",
                              "nodeType": "ElementaryTypeName",
                              "src": "5794:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint184_$",
                              "typeString": "type(uint184)"
                            }
                          ],
                          "id": 44025,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "5789:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44028,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5789:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint184",
                          "typeString": "type(uint184)"
                        }
                      },
                      "id": 44029,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5803:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "5789:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint184",
                        "typeString": "uint184"
                      }
                    },
                    "src": "5781:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44037,
                  "nodeType": "IfStatement",
                  "src": "5777:105:50",
                  "trueBody": {
                    "id": 44036,
                    "nodeType": "Block",
                    "src": "5808:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313834",
                              "id": 44032,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5860:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_184_by_1",
                                "typeString": "int_const 184"
                              },
                              "value": "184"
                            },
                            {
                              "id": 44033,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44019,
                              "src": "5865:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_184_by_1",
                                "typeString": "int_const 184"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44031,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "5829:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44034,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5829:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44035,
                        "nodeType": "RevertStatement",
                        "src": "5822:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44040,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44019,
                        "src": "5906:5:50",
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
                      "id": 44039,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5898:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint184_$",
                        "typeString": "type(uint184)"
                      },
                      "typeName": {
                        "id": 44038,
                        "name": "uint184",
                        "nodeType": "ElementaryTypeName",
                        "src": "5898:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44041,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5898:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint184",
                      "typeString": "uint184"
                    }
                  },
                  "functionReturnParameters": 44023,
                  "id": 44042,
                  "nodeType": "Return",
                  "src": "5891:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44017,
              "nodeType": "StructuredDocumentation",
              "src": "5416:280:50",
              "text": " @dev Returns the downcasted uint184 from uint256, reverting on\n overflow (when the input is greater than largest uint184).\n Counterpart to Solidity's `uint184` operator.\n Requirements:\n - input must fit into 184 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint184",
            "nameLocation": "5710:9:50",
            "parameters": {
              "id": 44020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44019,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5728:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44044,
                  "src": "5720:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44018,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5720:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5719:15:50"
            },
            "returnParameters": {
              "id": 44023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44022,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44044,
                  "src": "5758:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint184",
                    "typeString": "uint184"
                  },
                  "typeName": {
                    "id": 44021,
                    "name": "uint184",
                    "nodeType": "ElementaryTypeName",
                    "src": "5758:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint184",
                      "typeString": "uint184"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5757:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44072,
            "nodeType": "FunctionDefinition",
            "src": "6210:218:50",
            "nodes": [],
            "body": {
              "id": 44071,
              "nodeType": "Block",
              "src": "6276:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44052,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44047,
                      "src": "6290:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44055,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6303:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint176_$",
                              "typeString": "type(uint176)"
                            },
                            "typeName": {
                              "id": 44054,
                              "name": "uint176",
                              "nodeType": "ElementaryTypeName",
                              "src": "6303:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint176_$",
                              "typeString": "type(uint176)"
                            }
                          ],
                          "id": 44053,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "6298:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44056,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6298:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint176",
                          "typeString": "type(uint176)"
                        }
                      },
                      "id": 44057,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6312:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "6298:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint176",
                        "typeString": "uint176"
                      }
                    },
                    "src": "6290:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44065,
                  "nodeType": "IfStatement",
                  "src": "6286:105:50",
                  "trueBody": {
                    "id": 44064,
                    "nodeType": "Block",
                    "src": "6317:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313736",
                              "id": 44060,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6369:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_176_by_1",
                                "typeString": "int_const 176"
                              },
                              "value": "176"
                            },
                            {
                              "id": 44061,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44047,
                              "src": "6374:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_176_by_1",
                                "typeString": "int_const 176"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44059,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "6338:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44062,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6338:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44063,
                        "nodeType": "RevertStatement",
                        "src": "6331:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44068,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44047,
                        "src": "6415:5:50",
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
                      "id": 44067,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6407:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint176_$",
                        "typeString": "type(uint176)"
                      },
                      "typeName": {
                        "id": 44066,
                        "name": "uint176",
                        "nodeType": "ElementaryTypeName",
                        "src": "6407:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44069,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6407:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint176",
                      "typeString": "uint176"
                    }
                  },
                  "functionReturnParameters": 44051,
                  "id": 44070,
                  "nodeType": "Return",
                  "src": "6400:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44045,
              "nodeType": "StructuredDocumentation",
              "src": "5925:280:50",
              "text": " @dev Returns the downcasted uint176 from uint256, reverting on\n overflow (when the input is greater than largest uint176).\n Counterpart to Solidity's `uint176` operator.\n Requirements:\n - input must fit into 176 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint176",
            "nameLocation": "6219:9:50",
            "parameters": {
              "id": 44048,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44047,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6237:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44072,
                  "src": "6229:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44046,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6229:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6228:15:50"
            },
            "returnParameters": {
              "id": 44051,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44050,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44072,
                  "src": "6267:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint176",
                    "typeString": "uint176"
                  },
                  "typeName": {
                    "id": 44049,
                    "name": "uint176",
                    "nodeType": "ElementaryTypeName",
                    "src": "6267:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint176",
                      "typeString": "uint176"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6266:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44100,
            "nodeType": "FunctionDefinition",
            "src": "6719:218:50",
            "nodes": [],
            "body": {
              "id": 44099,
              "nodeType": "Block",
              "src": "6785:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44086,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44080,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44075,
                      "src": "6799:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44083,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6812:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint168_$",
                              "typeString": "type(uint168)"
                            },
                            "typeName": {
                              "id": 44082,
                              "name": "uint168",
                              "nodeType": "ElementaryTypeName",
                              "src": "6812:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint168_$",
                              "typeString": "type(uint168)"
                            }
                          ],
                          "id": 44081,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "6807:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44084,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6807:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint168",
                          "typeString": "type(uint168)"
                        }
                      },
                      "id": 44085,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6821:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "6807:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint168",
                        "typeString": "uint168"
                      }
                    },
                    "src": "6799:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44093,
                  "nodeType": "IfStatement",
                  "src": "6795:105:50",
                  "trueBody": {
                    "id": 44092,
                    "nodeType": "Block",
                    "src": "6826:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313638",
                              "id": 44088,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6878:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_168_by_1",
                                "typeString": "int_const 168"
                              },
                              "value": "168"
                            },
                            {
                              "id": 44089,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44075,
                              "src": "6883:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_168_by_1",
                                "typeString": "int_const 168"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44087,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "6847:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44090,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6847:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44091,
                        "nodeType": "RevertStatement",
                        "src": "6840:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44096,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44075,
                        "src": "6924:5:50",
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
                      "id": 44095,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6916:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint168_$",
                        "typeString": "type(uint168)"
                      },
                      "typeName": {
                        "id": 44094,
                        "name": "uint168",
                        "nodeType": "ElementaryTypeName",
                        "src": "6916:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44097,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6916:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint168",
                      "typeString": "uint168"
                    }
                  },
                  "functionReturnParameters": 44079,
                  "id": 44098,
                  "nodeType": "Return",
                  "src": "6909:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44073,
              "nodeType": "StructuredDocumentation",
              "src": "6434:280:50",
              "text": " @dev Returns the downcasted uint168 from uint256, reverting on\n overflow (when the input is greater than largest uint168).\n Counterpart to Solidity's `uint168` operator.\n Requirements:\n - input must fit into 168 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint168",
            "nameLocation": "6728:9:50",
            "parameters": {
              "id": 44076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44075,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6746:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44100,
                  "src": "6738:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44074,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6738:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6737:15:50"
            },
            "returnParameters": {
              "id": 44079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44078,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44100,
                  "src": "6776:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint168",
                    "typeString": "uint168"
                  },
                  "typeName": {
                    "id": 44077,
                    "name": "uint168",
                    "nodeType": "ElementaryTypeName",
                    "src": "6776:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint168",
                      "typeString": "uint168"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6775:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44128,
            "nodeType": "FunctionDefinition",
            "src": "7228:218:50",
            "nodes": [],
            "body": {
              "id": 44127,
              "nodeType": "Block",
              "src": "7294:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44108,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44103,
                      "src": "7308:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44111,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7321:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint160_$",
                              "typeString": "type(uint160)"
                            },
                            "typeName": {
                              "id": 44110,
                              "name": "uint160",
                              "nodeType": "ElementaryTypeName",
                              "src": "7321:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint160_$",
                              "typeString": "type(uint160)"
                            }
                          ],
                          "id": 44109,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "7316:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7316:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint160",
                          "typeString": "type(uint160)"
                        }
                      },
                      "id": 44113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "7330:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "7316:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint160",
                        "typeString": "uint160"
                      }
                    },
                    "src": "7308:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44121,
                  "nodeType": "IfStatement",
                  "src": "7304:105:50",
                  "trueBody": {
                    "id": 44120,
                    "nodeType": "Block",
                    "src": "7335:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313630",
                              "id": 44116,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7387:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_160_by_1",
                                "typeString": "int_const 160"
                              },
                              "value": "160"
                            },
                            {
                              "id": 44117,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44103,
                              "src": "7392:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_160_by_1",
                                "typeString": "int_const 160"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44115,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "7356:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7356:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44119,
                        "nodeType": "RevertStatement",
                        "src": "7349:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44124,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44103,
                        "src": "7433:5:50",
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
                      "id": 44123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7425:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint160_$",
                        "typeString": "type(uint160)"
                      },
                      "typeName": {
                        "id": 44122,
                        "name": "uint160",
                        "nodeType": "ElementaryTypeName",
                        "src": "7425:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7425:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint160",
                      "typeString": "uint160"
                    }
                  },
                  "functionReturnParameters": 44107,
                  "id": 44126,
                  "nodeType": "Return",
                  "src": "7418:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44101,
              "nodeType": "StructuredDocumentation",
              "src": "6943:280:50",
              "text": " @dev Returns the downcasted uint160 from uint256, reverting on\n overflow (when the input is greater than largest uint160).\n Counterpart to Solidity's `uint160` operator.\n Requirements:\n - input must fit into 160 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint160",
            "nameLocation": "7237:9:50",
            "parameters": {
              "id": 44104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44103,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "7255:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44128,
                  "src": "7247:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44102,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7247:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7246:15:50"
            },
            "returnParameters": {
              "id": 44107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44106,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44128,
                  "src": "7285:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint160",
                    "typeString": "uint160"
                  },
                  "typeName": {
                    "id": 44105,
                    "name": "uint160",
                    "nodeType": "ElementaryTypeName",
                    "src": "7285:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint160",
                      "typeString": "uint160"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7284:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44156,
            "nodeType": "FunctionDefinition",
            "src": "7737:218:50",
            "nodes": [],
            "body": {
              "id": 44155,
              "nodeType": "Block",
              "src": "7803:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44136,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44131,
                      "src": "7817:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44139,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7830:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint152_$",
                              "typeString": "type(uint152)"
                            },
                            "typeName": {
                              "id": 44138,
                              "name": "uint152",
                              "nodeType": "ElementaryTypeName",
                              "src": "7830:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint152_$",
                              "typeString": "type(uint152)"
                            }
                          ],
                          "id": 44137,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "7825:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7825:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint152",
                          "typeString": "type(uint152)"
                        }
                      },
                      "id": 44141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "7839:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "7825:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint152",
                        "typeString": "uint152"
                      }
                    },
                    "src": "7817:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44149,
                  "nodeType": "IfStatement",
                  "src": "7813:105:50",
                  "trueBody": {
                    "id": 44148,
                    "nodeType": "Block",
                    "src": "7844:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313532",
                              "id": 44144,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7896:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_152_by_1",
                                "typeString": "int_const 152"
                              },
                              "value": "152"
                            },
                            {
                              "id": 44145,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44131,
                              "src": "7901:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_152_by_1",
                                "typeString": "int_const 152"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44143,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "7865:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7865:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44147,
                        "nodeType": "RevertStatement",
                        "src": "7858:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44152,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44131,
                        "src": "7942:5:50",
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
                      "id": 44151,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7934:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint152_$",
                        "typeString": "type(uint152)"
                      },
                      "typeName": {
                        "id": 44150,
                        "name": "uint152",
                        "nodeType": "ElementaryTypeName",
                        "src": "7934:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7934:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint152",
                      "typeString": "uint152"
                    }
                  },
                  "functionReturnParameters": 44135,
                  "id": 44154,
                  "nodeType": "Return",
                  "src": "7927:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44129,
              "nodeType": "StructuredDocumentation",
              "src": "7452:280:50",
              "text": " @dev Returns the downcasted uint152 from uint256, reverting on\n overflow (when the input is greater than largest uint152).\n Counterpart to Solidity's `uint152` operator.\n Requirements:\n - input must fit into 152 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint152",
            "nameLocation": "7746:9:50",
            "parameters": {
              "id": 44132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44131,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "7764:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44156,
                  "src": "7756:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7756:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7755:15:50"
            },
            "returnParameters": {
              "id": 44135,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44134,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44156,
                  "src": "7794:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint152",
                    "typeString": "uint152"
                  },
                  "typeName": {
                    "id": 44133,
                    "name": "uint152",
                    "nodeType": "ElementaryTypeName",
                    "src": "7794:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint152",
                      "typeString": "uint152"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7793:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44184,
            "nodeType": "FunctionDefinition",
            "src": "8246:218:50",
            "nodes": [],
            "body": {
              "id": 44183,
              "nodeType": "Block",
              "src": "8312:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44164,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44159,
                      "src": "8326:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44167,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8339:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint144_$",
                              "typeString": "type(uint144)"
                            },
                            "typeName": {
                              "id": 44166,
                              "name": "uint144",
                              "nodeType": "ElementaryTypeName",
                              "src": "8339:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint144_$",
                              "typeString": "type(uint144)"
                            }
                          ],
                          "id": 44165,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "8334:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8334:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint144",
                          "typeString": "type(uint144)"
                        }
                      },
                      "id": 44169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "8348:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "8334:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint144",
                        "typeString": "uint144"
                      }
                    },
                    "src": "8326:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44177,
                  "nodeType": "IfStatement",
                  "src": "8322:105:50",
                  "trueBody": {
                    "id": 44176,
                    "nodeType": "Block",
                    "src": "8353:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313434",
                              "id": 44172,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8405:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_144_by_1",
                                "typeString": "int_const 144"
                              },
                              "value": "144"
                            },
                            {
                              "id": 44173,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44159,
                              "src": "8410:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_144_by_1",
                                "typeString": "int_const 144"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44171,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "8374:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8374:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44175,
                        "nodeType": "RevertStatement",
                        "src": "8367:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44180,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44159,
                        "src": "8451:5:50",
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
                      "id": 44179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "8443:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint144_$",
                        "typeString": "type(uint144)"
                      },
                      "typeName": {
                        "id": 44178,
                        "name": "uint144",
                        "nodeType": "ElementaryTypeName",
                        "src": "8443:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8443:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint144",
                      "typeString": "uint144"
                    }
                  },
                  "functionReturnParameters": 44163,
                  "id": 44182,
                  "nodeType": "Return",
                  "src": "8436:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44157,
              "nodeType": "StructuredDocumentation",
              "src": "7961:280:50",
              "text": " @dev Returns the downcasted uint144 from uint256, reverting on\n overflow (when the input is greater than largest uint144).\n Counterpart to Solidity's `uint144` operator.\n Requirements:\n - input must fit into 144 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint144",
            "nameLocation": "8255:9:50",
            "parameters": {
              "id": 44160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44159,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8273:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44184,
                  "src": "8265:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44158,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8265:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8264:15:50"
            },
            "returnParameters": {
              "id": 44163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44162,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44184,
                  "src": "8303:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint144",
                    "typeString": "uint144"
                  },
                  "typeName": {
                    "id": 44161,
                    "name": "uint144",
                    "nodeType": "ElementaryTypeName",
                    "src": "8303:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint144",
                      "typeString": "uint144"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8302:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44212,
            "nodeType": "FunctionDefinition",
            "src": "8755:218:50",
            "nodes": [],
            "body": {
              "id": 44211,
              "nodeType": "Block",
              "src": "8821:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44198,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44192,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44187,
                      "src": "8835:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44195,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8848:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint136_$",
                              "typeString": "type(uint136)"
                            },
                            "typeName": {
                              "id": 44194,
                              "name": "uint136",
                              "nodeType": "ElementaryTypeName",
                              "src": "8848:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint136_$",
                              "typeString": "type(uint136)"
                            }
                          ],
                          "id": 44193,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "8843:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8843:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint136",
                          "typeString": "type(uint136)"
                        }
                      },
                      "id": 44197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "8857:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "8843:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint136",
                        "typeString": "uint136"
                      }
                    },
                    "src": "8835:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44205,
                  "nodeType": "IfStatement",
                  "src": "8831:105:50",
                  "trueBody": {
                    "id": 44204,
                    "nodeType": "Block",
                    "src": "8862:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313336",
                              "id": 44200,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8914:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_136_by_1",
                                "typeString": "int_const 136"
                              },
                              "value": "136"
                            },
                            {
                              "id": 44201,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44187,
                              "src": "8919:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_136_by_1",
                                "typeString": "int_const 136"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44199,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "8883:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8883:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44203,
                        "nodeType": "RevertStatement",
                        "src": "8876:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44208,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44187,
                        "src": "8960:5:50",
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
                      "id": 44207,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "8952:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint136_$",
                        "typeString": "type(uint136)"
                      },
                      "typeName": {
                        "id": 44206,
                        "name": "uint136",
                        "nodeType": "ElementaryTypeName",
                        "src": "8952:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44209,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8952:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint136",
                      "typeString": "uint136"
                    }
                  },
                  "functionReturnParameters": 44191,
                  "id": 44210,
                  "nodeType": "Return",
                  "src": "8945:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44185,
              "nodeType": "StructuredDocumentation",
              "src": "8470:280:50",
              "text": " @dev Returns the downcasted uint136 from uint256, reverting on\n overflow (when the input is greater than largest uint136).\n Counterpart to Solidity's `uint136` operator.\n Requirements:\n - input must fit into 136 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint136",
            "nameLocation": "8764:9:50",
            "parameters": {
              "id": 44188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44187,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8782:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44212,
                  "src": "8774:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44186,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8774:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8773:15:50"
            },
            "returnParameters": {
              "id": 44191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44190,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44212,
                  "src": "8812:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint136",
                    "typeString": "uint136"
                  },
                  "typeName": {
                    "id": 44189,
                    "name": "uint136",
                    "nodeType": "ElementaryTypeName",
                    "src": "8812:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint136",
                      "typeString": "uint136"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8811:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44240,
            "nodeType": "FunctionDefinition",
            "src": "9264:218:50",
            "nodes": [],
            "body": {
              "id": 44239,
              "nodeType": "Block",
              "src": "9330:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44220,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44215,
                      "src": "9344:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44223,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9357:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint128_$",
                              "typeString": "type(uint128)"
                            },
                            "typeName": {
                              "id": 44222,
                              "name": "uint128",
                              "nodeType": "ElementaryTypeName",
                              "src": "9357:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint128_$",
                              "typeString": "type(uint128)"
                            }
                          ],
                          "id": 44221,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "9352:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9352:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint128",
                          "typeString": "type(uint128)"
                        }
                      },
                      "id": 44225,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "9366:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "9352:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "9344:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44233,
                  "nodeType": "IfStatement",
                  "src": "9340:105:50",
                  "trueBody": {
                    "id": 44232,
                    "nodeType": "Block",
                    "src": "9371:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313238",
                              "id": 44228,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9423:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_128_by_1",
                                "typeString": "int_const 128"
                              },
                              "value": "128"
                            },
                            {
                              "id": 44229,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44215,
                              "src": "9428:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_128_by_1",
                                "typeString": "int_const 128"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44227,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "9392:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44230,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9392:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44231,
                        "nodeType": "RevertStatement",
                        "src": "9385:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44236,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44215,
                        "src": "9469:5:50",
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
                      "id": 44235,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9461:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint128_$",
                        "typeString": "type(uint128)"
                      },
                      "typeName": {
                        "id": 44234,
                        "name": "uint128",
                        "nodeType": "ElementaryTypeName",
                        "src": "9461:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9461:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "functionReturnParameters": 44219,
                  "id": 44238,
                  "nodeType": "Return",
                  "src": "9454:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44213,
              "nodeType": "StructuredDocumentation",
              "src": "8979:280:50",
              "text": " @dev Returns the downcasted uint128 from uint256, reverting on\n overflow (when the input is greater than largest uint128).\n Counterpart to Solidity's `uint128` operator.\n Requirements:\n - input must fit into 128 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint128",
            "nameLocation": "9273:9:50",
            "parameters": {
              "id": 44216,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44215,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9291:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44240,
                  "src": "9283:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44214,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9283:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9282:15:50"
            },
            "returnParameters": {
              "id": 44219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44218,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44240,
                  "src": "9321:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 44217,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "9321:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9320:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44268,
            "nodeType": "FunctionDefinition",
            "src": "9773:218:50",
            "nodes": [],
            "body": {
              "id": 44267,
              "nodeType": "Block",
              "src": "9839:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44248,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44243,
                      "src": "9853:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44251,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9866:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint120_$",
                              "typeString": "type(uint120)"
                            },
                            "typeName": {
                              "id": 44250,
                              "name": "uint120",
                              "nodeType": "ElementaryTypeName",
                              "src": "9866:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint120_$",
                              "typeString": "type(uint120)"
                            }
                          ],
                          "id": 44249,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "9861:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44252,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9861:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint120",
                          "typeString": "type(uint120)"
                        }
                      },
                      "id": 44253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "9875:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "9861:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint120",
                        "typeString": "uint120"
                      }
                    },
                    "src": "9853:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44261,
                  "nodeType": "IfStatement",
                  "src": "9849:105:50",
                  "trueBody": {
                    "id": 44260,
                    "nodeType": "Block",
                    "src": "9880:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313230",
                              "id": 44256,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9932:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_120_by_1",
                                "typeString": "int_const 120"
                              },
                              "value": "120"
                            },
                            {
                              "id": 44257,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44243,
                              "src": "9937:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_120_by_1",
                                "typeString": "int_const 120"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44255,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "9901:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9901:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44259,
                        "nodeType": "RevertStatement",
                        "src": "9894:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44264,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44243,
                        "src": "9978:5:50",
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
                      "id": 44263,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9970:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint120_$",
                        "typeString": "type(uint120)"
                      },
                      "typeName": {
                        "id": 44262,
                        "name": "uint120",
                        "nodeType": "ElementaryTypeName",
                        "src": "9970:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9970:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint120",
                      "typeString": "uint120"
                    }
                  },
                  "functionReturnParameters": 44247,
                  "id": 44266,
                  "nodeType": "Return",
                  "src": "9963:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44241,
              "nodeType": "StructuredDocumentation",
              "src": "9488:280:50",
              "text": " @dev Returns the downcasted uint120 from uint256, reverting on\n overflow (when the input is greater than largest uint120).\n Counterpart to Solidity's `uint120` operator.\n Requirements:\n - input must fit into 120 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint120",
            "nameLocation": "9782:9:50",
            "parameters": {
              "id": 44244,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44243,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9800:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44268,
                  "src": "9792:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44242,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9792:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9791:15:50"
            },
            "returnParameters": {
              "id": 44247,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44246,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44268,
                  "src": "9830:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint120",
                    "typeString": "uint120"
                  },
                  "typeName": {
                    "id": 44245,
                    "name": "uint120",
                    "nodeType": "ElementaryTypeName",
                    "src": "9830:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint120",
                      "typeString": "uint120"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9829:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44296,
            "nodeType": "FunctionDefinition",
            "src": "10282:218:50",
            "nodes": [],
            "body": {
              "id": 44295,
              "nodeType": "Block",
              "src": "10348:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44276,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44271,
                      "src": "10362:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44279,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10375:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint112_$",
                              "typeString": "type(uint112)"
                            },
                            "typeName": {
                              "id": 44278,
                              "name": "uint112",
                              "nodeType": "ElementaryTypeName",
                              "src": "10375:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint112_$",
                              "typeString": "type(uint112)"
                            }
                          ],
                          "id": 44277,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "10370:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10370:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint112",
                          "typeString": "type(uint112)"
                        }
                      },
                      "id": 44281,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "10384:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "10370:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint112",
                        "typeString": "uint112"
                      }
                    },
                    "src": "10362:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44289,
                  "nodeType": "IfStatement",
                  "src": "10358:105:50",
                  "trueBody": {
                    "id": 44288,
                    "nodeType": "Block",
                    "src": "10389:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313132",
                              "id": 44284,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10441:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_112_by_1",
                                "typeString": "int_const 112"
                              },
                              "value": "112"
                            },
                            {
                              "id": 44285,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44271,
                              "src": "10446:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_112_by_1",
                                "typeString": "int_const 112"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44283,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "10410:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44286,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10410:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44287,
                        "nodeType": "RevertStatement",
                        "src": "10403:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44292,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44271,
                        "src": "10487:5:50",
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
                      "id": 44291,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "10479:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint112_$",
                        "typeString": "type(uint112)"
                      },
                      "typeName": {
                        "id": 44290,
                        "name": "uint112",
                        "nodeType": "ElementaryTypeName",
                        "src": "10479:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44293,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10479:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint112",
                      "typeString": "uint112"
                    }
                  },
                  "functionReturnParameters": 44275,
                  "id": 44294,
                  "nodeType": "Return",
                  "src": "10472:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44269,
              "nodeType": "StructuredDocumentation",
              "src": "9997:280:50",
              "text": " @dev Returns the downcasted uint112 from uint256, reverting on\n overflow (when the input is greater than largest uint112).\n Counterpart to Solidity's `uint112` operator.\n Requirements:\n - input must fit into 112 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint112",
            "nameLocation": "10291:9:50",
            "parameters": {
              "id": 44272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44271,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10309:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44296,
                  "src": "10301:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44270,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10301:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10300:15:50"
            },
            "returnParameters": {
              "id": 44275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44274,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44296,
                  "src": "10339:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint112",
                    "typeString": "uint112"
                  },
                  "typeName": {
                    "id": 44273,
                    "name": "uint112",
                    "nodeType": "ElementaryTypeName",
                    "src": "10339:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint112",
                      "typeString": "uint112"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10338:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44324,
            "nodeType": "FunctionDefinition",
            "src": "10791:218:50",
            "nodes": [],
            "body": {
              "id": 44323,
              "nodeType": "Block",
              "src": "10857:152:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44304,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44299,
                      "src": "10871:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44307,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10884:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint104_$",
                              "typeString": "type(uint104)"
                            },
                            "typeName": {
                              "id": 44306,
                              "name": "uint104",
                              "nodeType": "ElementaryTypeName",
                              "src": "10884:7:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint104_$",
                              "typeString": "type(uint104)"
                            }
                          ],
                          "id": 44305,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "10879:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44308,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10879:13:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint104",
                          "typeString": "type(uint104)"
                        }
                      },
                      "id": 44309,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "10893:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "10879:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint104",
                        "typeString": "uint104"
                      }
                    },
                    "src": "10871:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44317,
                  "nodeType": "IfStatement",
                  "src": "10867:105:50",
                  "trueBody": {
                    "id": 44316,
                    "nodeType": "Block",
                    "src": "10898:74:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313034",
                              "id": 44312,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10950:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_104_by_1",
                                "typeString": "int_const 104"
                              },
                              "value": "104"
                            },
                            {
                              "id": 44313,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44299,
                              "src": "10955:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_104_by_1",
                                "typeString": "int_const 104"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44311,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "10919:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44314,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10919:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44315,
                        "nodeType": "RevertStatement",
                        "src": "10912:49:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44320,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44299,
                        "src": "10996:5:50",
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
                      "id": 44319,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "10988:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint104_$",
                        "typeString": "type(uint104)"
                      },
                      "typeName": {
                        "id": 44318,
                        "name": "uint104",
                        "nodeType": "ElementaryTypeName",
                        "src": "10988:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44321,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10988:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint104",
                      "typeString": "uint104"
                    }
                  },
                  "functionReturnParameters": 44303,
                  "id": 44322,
                  "nodeType": "Return",
                  "src": "10981:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44297,
              "nodeType": "StructuredDocumentation",
              "src": "10506:280:50",
              "text": " @dev Returns the downcasted uint104 from uint256, reverting on\n overflow (when the input is greater than largest uint104).\n Counterpart to Solidity's `uint104` operator.\n Requirements:\n - input must fit into 104 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint104",
            "nameLocation": "10800:9:50",
            "parameters": {
              "id": 44300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44299,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10818:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44324,
                  "src": "10810:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10810:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10809:15:50"
            },
            "returnParameters": {
              "id": 44303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44302,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44324,
                  "src": "10848:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint104",
                    "typeString": "uint104"
                  },
                  "typeName": {
                    "id": 44301,
                    "name": "uint104",
                    "nodeType": "ElementaryTypeName",
                    "src": "10848:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint104",
                      "typeString": "uint104"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10847:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44352,
            "nodeType": "FunctionDefinition",
            "src": "11296:213:50",
            "nodes": [],
            "body": {
              "id": 44351,
              "nodeType": "Block",
              "src": "11360:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44332,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44327,
                      "src": "11374:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "11387:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint96_$",
                              "typeString": "type(uint96)"
                            },
                            "typeName": {
                              "id": 44334,
                              "name": "uint96",
                              "nodeType": "ElementaryTypeName",
                              "src": "11387:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint96_$",
                              "typeString": "type(uint96)"
                            }
                          ],
                          "id": 44333,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "11382:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44336,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11382:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint96",
                          "typeString": "type(uint96)"
                        }
                      },
                      "id": 44337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "11395:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "11382:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint96",
                        "typeString": "uint96"
                      }
                    },
                    "src": "11374:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44345,
                  "nodeType": "IfStatement",
                  "src": "11370:103:50",
                  "trueBody": {
                    "id": 44344,
                    "nodeType": "Block",
                    "src": "11400:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3936",
                              "id": 44340,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11452:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_96_by_1",
                                "typeString": "int_const 96"
                              },
                              "value": "96"
                            },
                            {
                              "id": 44341,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44327,
                              "src": "11456:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_96_by_1",
                                "typeString": "int_const 96"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44339,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "11421:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44342,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11421:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44343,
                        "nodeType": "RevertStatement",
                        "src": "11414:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44348,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44327,
                        "src": "11496:5:50",
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
                      "id": 44347,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "11489:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint96_$",
                        "typeString": "type(uint96)"
                      },
                      "typeName": {
                        "id": 44346,
                        "name": "uint96",
                        "nodeType": "ElementaryTypeName",
                        "src": "11489:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11489:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint96",
                      "typeString": "uint96"
                    }
                  },
                  "functionReturnParameters": 44331,
                  "id": 44350,
                  "nodeType": "Return",
                  "src": "11482:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44325,
              "nodeType": "StructuredDocumentation",
              "src": "11015:276:50",
              "text": " @dev Returns the downcasted uint96 from uint256, reverting on\n overflow (when the input is greater than largest uint96).\n Counterpart to Solidity's `uint96` operator.\n Requirements:\n - input must fit into 96 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint96",
            "nameLocation": "11305:8:50",
            "parameters": {
              "id": 44328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44327,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11322:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44352,
                  "src": "11314:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44326,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11314:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11313:15:50"
            },
            "returnParameters": {
              "id": 44331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44330,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44352,
                  "src": "11352:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint96",
                    "typeString": "uint96"
                  },
                  "typeName": {
                    "id": 44329,
                    "name": "uint96",
                    "nodeType": "ElementaryTypeName",
                    "src": "11352:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint96",
                      "typeString": "uint96"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11351:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44380,
            "nodeType": "FunctionDefinition",
            "src": "11796:213:50",
            "nodes": [],
            "body": {
              "id": 44379,
              "nodeType": "Block",
              "src": "11860:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44366,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44360,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44355,
                      "src": "11874:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44363,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "11887:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint88_$",
                              "typeString": "type(uint88)"
                            },
                            "typeName": {
                              "id": 44362,
                              "name": "uint88",
                              "nodeType": "ElementaryTypeName",
                              "src": "11887:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint88_$",
                              "typeString": "type(uint88)"
                            }
                          ],
                          "id": 44361,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "11882:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11882:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint88",
                          "typeString": "type(uint88)"
                        }
                      },
                      "id": 44365,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "11895:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "11882:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint88",
                        "typeString": "uint88"
                      }
                    },
                    "src": "11874:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44373,
                  "nodeType": "IfStatement",
                  "src": "11870:103:50",
                  "trueBody": {
                    "id": 44372,
                    "nodeType": "Block",
                    "src": "11900:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3838",
                              "id": 44368,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11952:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_88_by_1",
                                "typeString": "int_const 88"
                              },
                              "value": "88"
                            },
                            {
                              "id": 44369,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44355,
                              "src": "11956:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_88_by_1",
                                "typeString": "int_const 88"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44367,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "11921:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44370,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11921:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44371,
                        "nodeType": "RevertStatement",
                        "src": "11914:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44376,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44355,
                        "src": "11996:5:50",
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
                      "id": 44375,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "11989:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint88_$",
                        "typeString": "type(uint88)"
                      },
                      "typeName": {
                        "id": 44374,
                        "name": "uint88",
                        "nodeType": "ElementaryTypeName",
                        "src": "11989:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44377,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11989:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint88",
                      "typeString": "uint88"
                    }
                  },
                  "functionReturnParameters": 44359,
                  "id": 44378,
                  "nodeType": "Return",
                  "src": "11982:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44353,
              "nodeType": "StructuredDocumentation",
              "src": "11515:276:50",
              "text": " @dev Returns the downcasted uint88 from uint256, reverting on\n overflow (when the input is greater than largest uint88).\n Counterpart to Solidity's `uint88` operator.\n Requirements:\n - input must fit into 88 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint88",
            "nameLocation": "11805:8:50",
            "parameters": {
              "id": 44356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44355,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11822:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44380,
                  "src": "11814:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44354,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11814:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11813:15:50"
            },
            "returnParameters": {
              "id": 44359,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44358,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44380,
                  "src": "11852:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint88",
                    "typeString": "uint88"
                  },
                  "typeName": {
                    "id": 44357,
                    "name": "uint88",
                    "nodeType": "ElementaryTypeName",
                    "src": "11852:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint88",
                      "typeString": "uint88"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11851:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44408,
            "nodeType": "FunctionDefinition",
            "src": "12296:213:50",
            "nodes": [],
            "body": {
              "id": 44407,
              "nodeType": "Block",
              "src": "12360:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44394,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44388,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44383,
                      "src": "12374:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44391,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "12387:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint80_$",
                              "typeString": "type(uint80)"
                            },
                            "typeName": {
                              "id": 44390,
                              "name": "uint80",
                              "nodeType": "ElementaryTypeName",
                              "src": "12387:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint80_$",
                              "typeString": "type(uint80)"
                            }
                          ],
                          "id": 44389,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "12382:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44392,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12382:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint80",
                          "typeString": "type(uint80)"
                        }
                      },
                      "id": 44393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "12395:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "12382:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint80",
                        "typeString": "uint80"
                      }
                    },
                    "src": "12374:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44401,
                  "nodeType": "IfStatement",
                  "src": "12370:103:50",
                  "trueBody": {
                    "id": 44400,
                    "nodeType": "Block",
                    "src": "12400:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3830",
                              "id": 44396,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12452:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_80_by_1",
                                "typeString": "int_const 80"
                              },
                              "value": "80"
                            },
                            {
                              "id": 44397,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44383,
                              "src": "12456:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_80_by_1",
                                "typeString": "int_const 80"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44395,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "12421:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44398,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12421:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44399,
                        "nodeType": "RevertStatement",
                        "src": "12414:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44404,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44383,
                        "src": "12496:5:50",
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
                      "id": 44403,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "12489:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint80_$",
                        "typeString": "type(uint80)"
                      },
                      "typeName": {
                        "id": 44402,
                        "name": "uint80",
                        "nodeType": "ElementaryTypeName",
                        "src": "12489:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44405,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12489:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "functionReturnParameters": 44387,
                  "id": 44406,
                  "nodeType": "Return",
                  "src": "12482:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44381,
              "nodeType": "StructuredDocumentation",
              "src": "12015:276:50",
              "text": " @dev Returns the downcasted uint80 from uint256, reverting on\n overflow (when the input is greater than largest uint80).\n Counterpart to Solidity's `uint80` operator.\n Requirements:\n - input must fit into 80 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint80",
            "nameLocation": "12305:8:50",
            "parameters": {
              "id": 44384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44383,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12322:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44408,
                  "src": "12314:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44382,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12314:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12313:15:50"
            },
            "returnParameters": {
              "id": 44387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44386,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44408,
                  "src": "12352:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 44385,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "12352:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12351:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44436,
            "nodeType": "FunctionDefinition",
            "src": "12796:213:50",
            "nodes": [],
            "body": {
              "id": 44435,
              "nodeType": "Block",
              "src": "12860:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44422,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44416,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44411,
                      "src": "12874:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44419,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "12887:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint72_$",
                              "typeString": "type(uint72)"
                            },
                            "typeName": {
                              "id": 44418,
                              "name": "uint72",
                              "nodeType": "ElementaryTypeName",
                              "src": "12887:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint72_$",
                              "typeString": "type(uint72)"
                            }
                          ],
                          "id": 44417,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "12882:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44420,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12882:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint72",
                          "typeString": "type(uint72)"
                        }
                      },
                      "id": 44421,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "12895:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "12882:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint72",
                        "typeString": "uint72"
                      }
                    },
                    "src": "12874:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44429,
                  "nodeType": "IfStatement",
                  "src": "12870:103:50",
                  "trueBody": {
                    "id": 44428,
                    "nodeType": "Block",
                    "src": "12900:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3732",
                              "id": 44424,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12952:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_72_by_1",
                                "typeString": "int_const 72"
                              },
                              "value": "72"
                            },
                            {
                              "id": 44425,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44411,
                              "src": "12956:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_72_by_1",
                                "typeString": "int_const 72"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44423,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "12921:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44426,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12921:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44427,
                        "nodeType": "RevertStatement",
                        "src": "12914:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44432,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44411,
                        "src": "12996:5:50",
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
                      "id": 44431,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "12989:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint72_$",
                        "typeString": "type(uint72)"
                      },
                      "typeName": {
                        "id": 44430,
                        "name": "uint72",
                        "nodeType": "ElementaryTypeName",
                        "src": "12989:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12989:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint72",
                      "typeString": "uint72"
                    }
                  },
                  "functionReturnParameters": 44415,
                  "id": 44434,
                  "nodeType": "Return",
                  "src": "12982:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44409,
              "nodeType": "StructuredDocumentation",
              "src": "12515:276:50",
              "text": " @dev Returns the downcasted uint72 from uint256, reverting on\n overflow (when the input is greater than largest uint72).\n Counterpart to Solidity's `uint72` operator.\n Requirements:\n - input must fit into 72 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint72",
            "nameLocation": "12805:8:50",
            "parameters": {
              "id": 44412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44411,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12822:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44436,
                  "src": "12814:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44410,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12814:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12813:15:50"
            },
            "returnParameters": {
              "id": 44415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44414,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44436,
                  "src": "12852:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint72",
                    "typeString": "uint72"
                  },
                  "typeName": {
                    "id": 44413,
                    "name": "uint72",
                    "nodeType": "ElementaryTypeName",
                    "src": "12852:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint72",
                      "typeString": "uint72"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12851:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44464,
            "nodeType": "FunctionDefinition",
            "src": "13296:213:50",
            "nodes": [],
            "body": {
              "id": 44463,
              "nodeType": "Block",
              "src": "13360:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44444,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44439,
                      "src": "13374:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44447,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "13387:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            },
                            "typeName": {
                              "id": 44446,
                              "name": "uint64",
                              "nodeType": "ElementaryTypeName",
                              "src": "13387:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            }
                          ],
                          "id": 44445,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "13382:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44448,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13382:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint64",
                          "typeString": "type(uint64)"
                        }
                      },
                      "id": 44449,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "13395:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "13382:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "13374:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44457,
                  "nodeType": "IfStatement",
                  "src": "13370:103:50",
                  "trueBody": {
                    "id": 44456,
                    "nodeType": "Block",
                    "src": "13400:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3634",
                              "id": 44452,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13452:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_64_by_1",
                                "typeString": "int_const 64"
                              },
                              "value": "64"
                            },
                            {
                              "id": 44453,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44439,
                              "src": "13456:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_64_by_1",
                                "typeString": "int_const 64"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44451,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "13421:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44454,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13421:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44455,
                        "nodeType": "RevertStatement",
                        "src": "13414:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44460,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44439,
                        "src": "13496:5:50",
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
                      "id": 44459,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "13489:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint64_$",
                        "typeString": "type(uint64)"
                      },
                      "typeName": {
                        "id": 44458,
                        "name": "uint64",
                        "nodeType": "ElementaryTypeName",
                        "src": "13489:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44461,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13489:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "functionReturnParameters": 44443,
                  "id": 44462,
                  "nodeType": "Return",
                  "src": "13482:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44437,
              "nodeType": "StructuredDocumentation",
              "src": "13015:276:50",
              "text": " @dev Returns the downcasted uint64 from uint256, reverting on\n overflow (when the input is greater than largest uint64).\n Counterpart to Solidity's `uint64` operator.\n Requirements:\n - input must fit into 64 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint64",
            "nameLocation": "13305:8:50",
            "parameters": {
              "id": 44440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44439,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "13322:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44464,
                  "src": "13314:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44438,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13314:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13313:15:50"
            },
            "returnParameters": {
              "id": 44443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44442,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44464,
                  "src": "13352:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 44441,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "13352:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13351:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44492,
            "nodeType": "FunctionDefinition",
            "src": "13796:213:50",
            "nodes": [],
            "body": {
              "id": 44491,
              "nodeType": "Block",
              "src": "13860:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44478,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44472,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44467,
                      "src": "13874:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44475,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "13887:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint56_$",
                              "typeString": "type(uint56)"
                            },
                            "typeName": {
                              "id": 44474,
                              "name": "uint56",
                              "nodeType": "ElementaryTypeName",
                              "src": "13887:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint56_$",
                              "typeString": "type(uint56)"
                            }
                          ],
                          "id": 44473,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "13882:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44476,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13882:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint56",
                          "typeString": "type(uint56)"
                        }
                      },
                      "id": 44477,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "13895:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "13882:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint56",
                        "typeString": "uint56"
                      }
                    },
                    "src": "13874:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44485,
                  "nodeType": "IfStatement",
                  "src": "13870:103:50",
                  "trueBody": {
                    "id": 44484,
                    "nodeType": "Block",
                    "src": "13900:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3536",
                              "id": 44480,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13952:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_56_by_1",
                                "typeString": "int_const 56"
                              },
                              "value": "56"
                            },
                            {
                              "id": 44481,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44467,
                              "src": "13956:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_56_by_1",
                                "typeString": "int_const 56"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44479,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "13921:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44482,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13921:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44483,
                        "nodeType": "RevertStatement",
                        "src": "13914:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44488,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44467,
                        "src": "13996:5:50",
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
                      "id": 44487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "13989:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint56_$",
                        "typeString": "type(uint56)"
                      },
                      "typeName": {
                        "id": 44486,
                        "name": "uint56",
                        "nodeType": "ElementaryTypeName",
                        "src": "13989:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13989:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint56",
                      "typeString": "uint56"
                    }
                  },
                  "functionReturnParameters": 44471,
                  "id": 44490,
                  "nodeType": "Return",
                  "src": "13982:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44465,
              "nodeType": "StructuredDocumentation",
              "src": "13515:276:50",
              "text": " @dev Returns the downcasted uint56 from uint256, reverting on\n overflow (when the input is greater than largest uint56).\n Counterpart to Solidity's `uint56` operator.\n Requirements:\n - input must fit into 56 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint56",
            "nameLocation": "13805:8:50",
            "parameters": {
              "id": 44468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44467,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "13822:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44492,
                  "src": "13814:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44466,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13814:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13813:15:50"
            },
            "returnParameters": {
              "id": 44471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44470,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44492,
                  "src": "13852:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint56",
                    "typeString": "uint56"
                  },
                  "typeName": {
                    "id": 44469,
                    "name": "uint56",
                    "nodeType": "ElementaryTypeName",
                    "src": "13852:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint56",
                      "typeString": "uint56"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13851:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44520,
            "nodeType": "FunctionDefinition",
            "src": "14296:213:50",
            "nodes": [],
            "body": {
              "id": 44519,
              "nodeType": "Block",
              "src": "14360:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44500,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44495,
                      "src": "14374:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44503,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "14387:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint48_$",
                              "typeString": "type(uint48)"
                            },
                            "typeName": {
                              "id": 44502,
                              "name": "uint48",
                              "nodeType": "ElementaryTypeName",
                              "src": "14387:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint48_$",
                              "typeString": "type(uint48)"
                            }
                          ],
                          "id": 44501,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "14382:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44504,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14382:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint48",
                          "typeString": "type(uint48)"
                        }
                      },
                      "id": 44505,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "14395:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "14382:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint48",
                        "typeString": "uint48"
                      }
                    },
                    "src": "14374:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44513,
                  "nodeType": "IfStatement",
                  "src": "14370:103:50",
                  "trueBody": {
                    "id": 44512,
                    "nodeType": "Block",
                    "src": "14400:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3438",
                              "id": 44508,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "14452:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_48_by_1",
                                "typeString": "int_const 48"
                              },
                              "value": "48"
                            },
                            {
                              "id": 44509,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44495,
                              "src": "14456:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_48_by_1",
                                "typeString": "int_const 48"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44507,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "14421:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44510,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14421:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44511,
                        "nodeType": "RevertStatement",
                        "src": "14414:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44516,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44495,
                        "src": "14496:5:50",
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
                      "id": 44515,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "14489:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint48_$",
                        "typeString": "type(uint48)"
                      },
                      "typeName": {
                        "id": 44514,
                        "name": "uint48",
                        "nodeType": "ElementaryTypeName",
                        "src": "14489:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44517,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14489:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint48",
                      "typeString": "uint48"
                    }
                  },
                  "functionReturnParameters": 44499,
                  "id": 44518,
                  "nodeType": "Return",
                  "src": "14482:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44493,
              "nodeType": "StructuredDocumentation",
              "src": "14015:276:50",
              "text": " @dev Returns the downcasted uint48 from uint256, reverting on\n overflow (when the input is greater than largest uint48).\n Counterpart to Solidity's `uint48` operator.\n Requirements:\n - input must fit into 48 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint48",
            "nameLocation": "14305:8:50",
            "parameters": {
              "id": 44496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44495,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "14322:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44520,
                  "src": "14314:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44494,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14314:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14313:15:50"
            },
            "returnParameters": {
              "id": 44499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44498,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44520,
                  "src": "14352:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint48",
                    "typeString": "uint48"
                  },
                  "typeName": {
                    "id": 44497,
                    "name": "uint48",
                    "nodeType": "ElementaryTypeName",
                    "src": "14352:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint48",
                      "typeString": "uint48"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14351:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44548,
            "nodeType": "FunctionDefinition",
            "src": "14796:213:50",
            "nodes": [],
            "body": {
              "id": 44547,
              "nodeType": "Block",
              "src": "14860:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44528,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44523,
                      "src": "14874:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44531,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "14887:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint40_$",
                              "typeString": "type(uint40)"
                            },
                            "typeName": {
                              "id": 44530,
                              "name": "uint40",
                              "nodeType": "ElementaryTypeName",
                              "src": "14887:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint40_$",
                              "typeString": "type(uint40)"
                            }
                          ],
                          "id": 44529,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "14882:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44532,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14882:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint40",
                          "typeString": "type(uint40)"
                        }
                      },
                      "id": 44533,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "14895:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "14882:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint40",
                        "typeString": "uint40"
                      }
                    },
                    "src": "14874:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44541,
                  "nodeType": "IfStatement",
                  "src": "14870:103:50",
                  "trueBody": {
                    "id": 44540,
                    "nodeType": "Block",
                    "src": "14900:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3430",
                              "id": 44536,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "14952:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_40_by_1",
                                "typeString": "int_const 40"
                              },
                              "value": "40"
                            },
                            {
                              "id": 44537,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44523,
                              "src": "14956:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_40_by_1",
                                "typeString": "int_const 40"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44535,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "14921:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14921:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44539,
                        "nodeType": "RevertStatement",
                        "src": "14914:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44544,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44523,
                        "src": "14996:5:50",
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
                      "id": 44543,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "14989:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint40_$",
                        "typeString": "type(uint40)"
                      },
                      "typeName": {
                        "id": 44542,
                        "name": "uint40",
                        "nodeType": "ElementaryTypeName",
                        "src": "14989:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14989:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint40",
                      "typeString": "uint40"
                    }
                  },
                  "functionReturnParameters": 44527,
                  "id": 44546,
                  "nodeType": "Return",
                  "src": "14982:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44521,
              "nodeType": "StructuredDocumentation",
              "src": "14515:276:50",
              "text": " @dev Returns the downcasted uint40 from uint256, reverting on\n overflow (when the input is greater than largest uint40).\n Counterpart to Solidity's `uint40` operator.\n Requirements:\n - input must fit into 40 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint40",
            "nameLocation": "14805:8:50",
            "parameters": {
              "id": 44524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44523,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "14822:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44548,
                  "src": "14814:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44522,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14814:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14813:15:50"
            },
            "returnParameters": {
              "id": 44527,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44526,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44548,
                  "src": "14852:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint40",
                    "typeString": "uint40"
                  },
                  "typeName": {
                    "id": 44525,
                    "name": "uint40",
                    "nodeType": "ElementaryTypeName",
                    "src": "14852:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint40",
                      "typeString": "uint40"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14851:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44576,
            "nodeType": "FunctionDefinition",
            "src": "15296:213:50",
            "nodes": [],
            "body": {
              "id": 44575,
              "nodeType": "Block",
              "src": "15360:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44556,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44551,
                      "src": "15374:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44559,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "15387:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint32_$",
                              "typeString": "type(uint32)"
                            },
                            "typeName": {
                              "id": 44558,
                              "name": "uint32",
                              "nodeType": "ElementaryTypeName",
                              "src": "15387:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint32_$",
                              "typeString": "type(uint32)"
                            }
                          ],
                          "id": 44557,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "15382:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44560,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15382:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint32",
                          "typeString": "type(uint32)"
                        }
                      },
                      "id": 44561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "15395:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "15382:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "src": "15374:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44569,
                  "nodeType": "IfStatement",
                  "src": "15370:103:50",
                  "trueBody": {
                    "id": 44568,
                    "nodeType": "Block",
                    "src": "15400:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3332",
                              "id": 44564,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "15452:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_32_by_1",
                                "typeString": "int_const 32"
                              },
                              "value": "32"
                            },
                            {
                              "id": 44565,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44551,
                              "src": "15456:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_32_by_1",
                                "typeString": "int_const 32"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44563,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "15421:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44566,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15421:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44567,
                        "nodeType": "RevertStatement",
                        "src": "15414:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44572,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44551,
                        "src": "15496:5:50",
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
                      "id": 44571,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "15489:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint32_$",
                        "typeString": "type(uint32)"
                      },
                      "typeName": {
                        "id": 44570,
                        "name": "uint32",
                        "nodeType": "ElementaryTypeName",
                        "src": "15489:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44573,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15489:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "functionReturnParameters": 44555,
                  "id": 44574,
                  "nodeType": "Return",
                  "src": "15482:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44549,
              "nodeType": "StructuredDocumentation",
              "src": "15015:276:50",
              "text": " @dev Returns the downcasted uint32 from uint256, reverting on\n overflow (when the input is greater than largest uint32).\n Counterpart to Solidity's `uint32` operator.\n Requirements:\n - input must fit into 32 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint32",
            "nameLocation": "15305:8:50",
            "parameters": {
              "id": 44552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44551,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "15322:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44576,
                  "src": "15314:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44550,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15314:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15313:15:50"
            },
            "returnParameters": {
              "id": 44555,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44554,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44576,
                  "src": "15352:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 44553,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "15352:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15351:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44604,
            "nodeType": "FunctionDefinition",
            "src": "15796:213:50",
            "nodes": [],
            "body": {
              "id": 44603,
              "nodeType": "Block",
              "src": "15860:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44584,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44579,
                      "src": "15874:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44587,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "15887:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint24_$",
                              "typeString": "type(uint24)"
                            },
                            "typeName": {
                              "id": 44586,
                              "name": "uint24",
                              "nodeType": "ElementaryTypeName",
                              "src": "15887:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint24_$",
                              "typeString": "type(uint24)"
                            }
                          ],
                          "id": 44585,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "15882:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44588,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15882:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint24",
                          "typeString": "type(uint24)"
                        }
                      },
                      "id": 44589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "15895:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "15882:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint24",
                        "typeString": "uint24"
                      }
                    },
                    "src": "15874:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44597,
                  "nodeType": "IfStatement",
                  "src": "15870:103:50",
                  "trueBody": {
                    "id": 44596,
                    "nodeType": "Block",
                    "src": "15900:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3234",
                              "id": 44592,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "15952:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_24_by_1",
                                "typeString": "int_const 24"
                              },
                              "value": "24"
                            },
                            {
                              "id": 44593,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44579,
                              "src": "15956:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_24_by_1",
                                "typeString": "int_const 24"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44591,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "15921:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44594,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15921:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44595,
                        "nodeType": "RevertStatement",
                        "src": "15914:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44600,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44579,
                        "src": "15996:5:50",
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
                      "id": 44599,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "15989:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint24_$",
                        "typeString": "type(uint24)"
                      },
                      "typeName": {
                        "id": 44598,
                        "name": "uint24",
                        "nodeType": "ElementaryTypeName",
                        "src": "15989:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15989:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint24",
                      "typeString": "uint24"
                    }
                  },
                  "functionReturnParameters": 44583,
                  "id": 44602,
                  "nodeType": "Return",
                  "src": "15982:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44577,
              "nodeType": "StructuredDocumentation",
              "src": "15515:276:50",
              "text": " @dev Returns the downcasted uint24 from uint256, reverting on\n overflow (when the input is greater than largest uint24).\n Counterpart to Solidity's `uint24` operator.\n Requirements:\n - input must fit into 24 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint24",
            "nameLocation": "15805:8:50",
            "parameters": {
              "id": 44580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44579,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "15822:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44604,
                  "src": "15814:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44578,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15814:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15813:15:50"
            },
            "returnParameters": {
              "id": 44583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44582,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44604,
                  "src": "15852:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint24",
                    "typeString": "uint24"
                  },
                  "typeName": {
                    "id": 44581,
                    "name": "uint24",
                    "nodeType": "ElementaryTypeName",
                    "src": "15852:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint24",
                      "typeString": "uint24"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15851:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44632,
            "nodeType": "FunctionDefinition",
            "src": "16296:213:50",
            "nodes": [],
            "body": {
              "id": 44631,
              "nodeType": "Block",
              "src": "16360:149:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44612,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44607,
                      "src": "16374:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44615,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "16387:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint16_$",
                              "typeString": "type(uint16)"
                            },
                            "typeName": {
                              "id": 44614,
                              "name": "uint16",
                              "nodeType": "ElementaryTypeName",
                              "src": "16387:6:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint16_$",
                              "typeString": "type(uint16)"
                            }
                          ],
                          "id": 44613,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "16382:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44616,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16382:12:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint16",
                          "typeString": "type(uint16)"
                        }
                      },
                      "id": 44617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "16395:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "16382:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "src": "16374:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44625,
                  "nodeType": "IfStatement",
                  "src": "16370:103:50",
                  "trueBody": {
                    "id": 44624,
                    "nodeType": "Block",
                    "src": "16400:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3136",
                              "id": 44620,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "16452:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_16_by_1",
                                "typeString": "int_const 16"
                              },
                              "value": "16"
                            },
                            {
                              "id": 44621,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44607,
                              "src": "16456:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_16_by_1",
                                "typeString": "int_const 16"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44619,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "16421:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44622,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16421:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44623,
                        "nodeType": "RevertStatement",
                        "src": "16414:48:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44628,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44607,
                        "src": "16496:5:50",
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
                      "id": 44627,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "16489:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint16_$",
                        "typeString": "type(uint16)"
                      },
                      "typeName": {
                        "id": 44626,
                        "name": "uint16",
                        "nodeType": "ElementaryTypeName",
                        "src": "16489:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44629,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16489:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "functionReturnParameters": 44611,
                  "id": 44630,
                  "nodeType": "Return",
                  "src": "16482:20:50"
                }
              ]
            },
            "documentation": {
              "id": 44605,
              "nodeType": "StructuredDocumentation",
              "src": "16015:276:50",
              "text": " @dev Returns the downcasted uint16 from uint256, reverting on\n overflow (when the input is greater than largest uint16).\n Counterpart to Solidity's `uint16` operator.\n Requirements:\n - input must fit into 16 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint16",
            "nameLocation": "16305:8:50",
            "parameters": {
              "id": 44608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44607,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "16322:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44632,
                  "src": "16314:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44606,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16314:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16313:15:50"
            },
            "returnParameters": {
              "id": 44611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44610,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44632,
                  "src": "16352:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 44609,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "16352:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16351:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44660,
            "nodeType": "FunctionDefinition",
            "src": "16792:208:50",
            "nodes": [],
            "body": {
              "id": 44659,
              "nodeType": "Block",
              "src": "16854:146:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44646,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44640,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44635,
                      "src": "16868:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44643,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "16881:5:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": {
                              "id": 44642,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "16881:5:50",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            }
                          ],
                          "id": 44641,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "16876:4:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44644,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16876:11:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint8",
                          "typeString": "type(uint8)"
                        }
                      },
                      "id": 44645,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "16888:3:50",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "16876:15:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "16868:23:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44653,
                  "nodeType": "IfStatement",
                  "src": "16864:101:50",
                  "trueBody": {
                    "id": 44652,
                    "nodeType": "Block",
                    "src": "16893:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "38",
                              "id": 44648,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "16945:1:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_8_by_1",
                                "typeString": "int_const 8"
                              },
                              "value": "8"
                            },
                            {
                              "id": 44649,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44635,
                              "src": "16948:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_8_by_1",
                                "typeString": "int_const 8"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 44647,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43775,
                            "src": "16914:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 44650,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16914:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44651,
                        "nodeType": "RevertStatement",
                        "src": "16907:47:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44656,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44635,
                        "src": "16987:5:50",
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
                      "id": 44655,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "16981:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 44654,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "16981:5:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44657,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16981:12:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 44639,
                  "id": 44658,
                  "nodeType": "Return",
                  "src": "16974:19:50"
                }
              ]
            },
            "documentation": {
              "id": 44633,
              "nodeType": "StructuredDocumentation",
              "src": "16515:272:50",
              "text": " @dev Returns the downcasted uint8 from uint256, reverting on\n overflow (when the input is greater than largest uint8).\n Counterpart to Solidity's `uint8` operator.\n Requirements:\n - input must fit into 8 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint8",
            "nameLocation": "16801:7:50",
            "parameters": {
              "id": 44636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44635,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "16817:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44660,
                  "src": "16809:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44634,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16809:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16808:15:50"
            },
            "returnParameters": {
              "id": 44639,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44638,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44660,
                  "src": "16847:5:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 44637,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "16847:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16846:7:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44683,
            "nodeType": "FunctionDefinition",
            "src": "17171:193:50",
            "nodes": [],
            "body": {
              "id": 44682,
              "nodeType": "Block",
              "src": "17236:128:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44668,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44663,
                      "src": "17250:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 44669,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "17258:1:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "17250:9:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44676,
                  "nodeType": "IfStatement",
                  "src": "17246:81:50",
                  "trueBody": {
                    "id": 44675,
                    "nodeType": "Block",
                    "src": "17261:66:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 44672,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44663,
                              "src": "17310:5:50",
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
                            "id": 44671,
                            "name": "SafeCastOverflowedIntToUint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43780,
                            "src": "17282:27:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_int256_$returns$_t_error_$",
                              "typeString": "function (int256) pure returns (error)"
                            }
                          },
                          "id": 44673,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17282:34:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44674,
                        "nodeType": "RevertStatement",
                        "src": "17275:41:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44679,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44663,
                        "src": "17351:5:50",
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
                      "id": 44678,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "17343:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 44677,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "17343:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 44680,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17343:14:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 44667,
                  "id": 44681,
                  "nodeType": "Return",
                  "src": "17336:21:50"
                }
              ]
            },
            "documentation": {
              "id": 44661,
              "nodeType": "StructuredDocumentation",
              "src": "17006:160:50",
              "text": " @dev Converts a signed int256 into an unsigned uint256.\n Requirements:\n - input must be greater than or equal to 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint256",
            "nameLocation": "17180:9:50",
            "parameters": {
              "id": 44664,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44663,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17197:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44683,
                  "src": "17190:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44662,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17190:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17189:14:50"
            },
            "returnParameters": {
              "id": 44667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44666,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44683,
                  "src": "17227:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44665,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17227:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17226:9:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44709,
            "nodeType": "FunctionDefinition",
            "src": "17687:224:50",
            "nodes": [],
            "body": {
              "id": 44708,
              "nodeType": "Block",
              "src": "17761:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44696,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44691,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44689,
                      "src": "17771:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int248",
                        "typeString": "int248"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44694,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44686,
                          "src": "17791:5:50",
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
                        "id": 44693,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "17784:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int248_$",
                          "typeString": "type(int248)"
                        },
                        "typeName": {
                          "id": 44692,
                          "name": "int248",
                          "nodeType": "ElementaryTypeName",
                          "src": "17784:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44695,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17784:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int248",
                        "typeString": "int248"
                      }
                    },
                    "src": "17771:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int248",
                      "typeString": "int248"
                    }
                  },
                  "id": 44697,
                  "nodeType": "ExpressionStatement",
                  "src": "17771:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44698,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44689,
                      "src": "17811:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int248",
                        "typeString": "int248"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44699,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44686,
                      "src": "17825:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17811:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44707,
                  "nodeType": "IfStatement",
                  "src": "17807:98:50",
                  "trueBody": {
                    "id": 44706,
                    "nodeType": "Block",
                    "src": "17832:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323438",
                              "id": 44702,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "17883:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_248_by_1",
                                "typeString": "int_const 248"
                              },
                              "value": "248"
                            },
                            {
                              "id": 44703,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44686,
                              "src": "17888:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_248_by_1",
                                "typeString": "int_const 248"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44701,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "17853:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44704,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17853:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44705,
                        "nodeType": "RevertStatement",
                        "src": "17846:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44684,
              "nodeType": "StructuredDocumentation",
              "src": "17370:312:50",
              "text": " @dev Returns the downcasted int248 from int256, reverting on\n overflow (when the input is less than smallest int248 or\n greater than largest int248).\n Counterpart to Solidity's `int248` operator.\n Requirements:\n - input must fit into 248 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt248",
            "nameLocation": "17696:8:50",
            "parameters": {
              "id": 44687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44686,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17712:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44709,
                  "src": "17705:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44685,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17705:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17704:14:50"
            },
            "returnParameters": {
              "id": 44690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44689,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "17749:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44709,
                  "src": "17742:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int248",
                    "typeString": "int248"
                  },
                  "typeName": {
                    "id": 44688,
                    "name": "int248",
                    "nodeType": "ElementaryTypeName",
                    "src": "17742:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int248",
                      "typeString": "int248"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17741:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44735,
            "nodeType": "FunctionDefinition",
            "src": "18234:224:50",
            "nodes": [],
            "body": {
              "id": 44734,
              "nodeType": "Block",
              "src": "18308:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44722,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44717,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44715,
                      "src": "18318:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int240",
                        "typeString": "int240"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44720,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44712,
                          "src": "18338:5:50",
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
                        "id": 44719,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "18331:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int240_$",
                          "typeString": "type(int240)"
                        },
                        "typeName": {
                          "id": 44718,
                          "name": "int240",
                          "nodeType": "ElementaryTypeName",
                          "src": "18331:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44721,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18331:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int240",
                        "typeString": "int240"
                      }
                    },
                    "src": "18318:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int240",
                      "typeString": "int240"
                    }
                  },
                  "id": 44723,
                  "nodeType": "ExpressionStatement",
                  "src": "18318:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44726,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44724,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44715,
                      "src": "18358:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int240",
                        "typeString": "int240"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44725,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44712,
                      "src": "18372:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18358:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44733,
                  "nodeType": "IfStatement",
                  "src": "18354:98:50",
                  "trueBody": {
                    "id": 44732,
                    "nodeType": "Block",
                    "src": "18379:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323430",
                              "id": 44728,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "18430:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_240_by_1",
                                "typeString": "int_const 240"
                              },
                              "value": "240"
                            },
                            {
                              "id": 44729,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44712,
                              "src": "18435:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_240_by_1",
                                "typeString": "int_const 240"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44727,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "18400:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "18400:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44731,
                        "nodeType": "RevertStatement",
                        "src": "18393:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44710,
              "nodeType": "StructuredDocumentation",
              "src": "17917:312:50",
              "text": " @dev Returns the downcasted int240 from int256, reverting on\n overflow (when the input is less than smallest int240 or\n greater than largest int240).\n Counterpart to Solidity's `int240` operator.\n Requirements:\n - input must fit into 240 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt240",
            "nameLocation": "18243:8:50",
            "parameters": {
              "id": 44713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44712,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "18259:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44735,
                  "src": "18252:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44711,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18252:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18251:14:50"
            },
            "returnParameters": {
              "id": 44716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44715,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "18296:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44735,
                  "src": "18289:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int240",
                    "typeString": "int240"
                  },
                  "typeName": {
                    "id": 44714,
                    "name": "int240",
                    "nodeType": "ElementaryTypeName",
                    "src": "18289:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int240",
                      "typeString": "int240"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18288:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44761,
            "nodeType": "FunctionDefinition",
            "src": "18781:224:50",
            "nodes": [],
            "body": {
              "id": 44760,
              "nodeType": "Block",
              "src": "18855:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44743,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44741,
                      "src": "18865:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int232",
                        "typeString": "int232"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44746,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44738,
                          "src": "18885:5:50",
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
                        "id": 44745,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "18878:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int232_$",
                          "typeString": "type(int232)"
                        },
                        "typeName": {
                          "id": 44744,
                          "name": "int232",
                          "nodeType": "ElementaryTypeName",
                          "src": "18878:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44747,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18878:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int232",
                        "typeString": "int232"
                      }
                    },
                    "src": "18865:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int232",
                      "typeString": "int232"
                    }
                  },
                  "id": 44749,
                  "nodeType": "ExpressionStatement",
                  "src": "18865:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44752,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44750,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44741,
                      "src": "18905:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int232",
                        "typeString": "int232"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44751,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44738,
                      "src": "18919:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18905:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44759,
                  "nodeType": "IfStatement",
                  "src": "18901:98:50",
                  "trueBody": {
                    "id": 44758,
                    "nodeType": "Block",
                    "src": "18926:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323332",
                              "id": 44754,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "18977:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_232_by_1",
                                "typeString": "int_const 232"
                              },
                              "value": "232"
                            },
                            {
                              "id": 44755,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44738,
                              "src": "18982:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_232_by_1",
                                "typeString": "int_const 232"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44753,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "18947:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44756,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "18947:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44757,
                        "nodeType": "RevertStatement",
                        "src": "18940:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44736,
              "nodeType": "StructuredDocumentation",
              "src": "18464:312:50",
              "text": " @dev Returns the downcasted int232 from int256, reverting on\n overflow (when the input is less than smallest int232 or\n greater than largest int232).\n Counterpart to Solidity's `int232` operator.\n Requirements:\n - input must fit into 232 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt232",
            "nameLocation": "18790:8:50",
            "parameters": {
              "id": 44739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44738,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "18806:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44761,
                  "src": "18799:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44737,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18799:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18798:14:50"
            },
            "returnParameters": {
              "id": 44742,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44741,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "18843:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44761,
                  "src": "18836:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int232",
                    "typeString": "int232"
                  },
                  "typeName": {
                    "id": 44740,
                    "name": "int232",
                    "nodeType": "ElementaryTypeName",
                    "src": "18836:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int232",
                      "typeString": "int232"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18835:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44787,
            "nodeType": "FunctionDefinition",
            "src": "19328:224:50",
            "nodes": [],
            "body": {
              "id": 44786,
              "nodeType": "Block",
              "src": "19402:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44769,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44767,
                      "src": "19412:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int224",
                        "typeString": "int224"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44772,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44764,
                          "src": "19432:5:50",
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
                        "id": 44771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "19425:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int224_$",
                          "typeString": "type(int224)"
                        },
                        "typeName": {
                          "id": 44770,
                          "name": "int224",
                          "nodeType": "ElementaryTypeName",
                          "src": "19425:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44773,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19425:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int224",
                        "typeString": "int224"
                      }
                    },
                    "src": "19412:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int224",
                      "typeString": "int224"
                    }
                  },
                  "id": 44775,
                  "nodeType": "ExpressionStatement",
                  "src": "19412:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44776,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44767,
                      "src": "19452:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int224",
                        "typeString": "int224"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44777,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44764,
                      "src": "19466:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "19452:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44785,
                  "nodeType": "IfStatement",
                  "src": "19448:98:50",
                  "trueBody": {
                    "id": 44784,
                    "nodeType": "Block",
                    "src": "19473:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323234",
                              "id": 44780,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "19524:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_224_by_1",
                                "typeString": "int_const 224"
                              },
                              "value": "224"
                            },
                            {
                              "id": 44781,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44764,
                              "src": "19529:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_224_by_1",
                                "typeString": "int_const 224"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44779,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "19494:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "19494:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44783,
                        "nodeType": "RevertStatement",
                        "src": "19487:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44762,
              "nodeType": "StructuredDocumentation",
              "src": "19011:312:50",
              "text": " @dev Returns the downcasted int224 from int256, reverting on\n overflow (when the input is less than smallest int224 or\n greater than largest int224).\n Counterpart to Solidity's `int224` operator.\n Requirements:\n - input must fit into 224 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt224",
            "nameLocation": "19337:8:50",
            "parameters": {
              "id": 44765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44764,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "19353:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44787,
                  "src": "19346:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44763,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19346:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19345:14:50"
            },
            "returnParameters": {
              "id": 44768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44767,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "19390:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44787,
                  "src": "19383:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int224",
                    "typeString": "int224"
                  },
                  "typeName": {
                    "id": 44766,
                    "name": "int224",
                    "nodeType": "ElementaryTypeName",
                    "src": "19383:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int224",
                      "typeString": "int224"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19382:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44813,
            "nodeType": "FunctionDefinition",
            "src": "19875:224:50",
            "nodes": [],
            "body": {
              "id": 44812,
              "nodeType": "Block",
              "src": "19949:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44795,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44793,
                      "src": "19959:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int216",
                        "typeString": "int216"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44798,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44790,
                          "src": "19979:5:50",
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
                        "id": 44797,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "19972:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int216_$",
                          "typeString": "type(int216)"
                        },
                        "typeName": {
                          "id": 44796,
                          "name": "int216",
                          "nodeType": "ElementaryTypeName",
                          "src": "19972:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44799,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19972:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int216",
                        "typeString": "int216"
                      }
                    },
                    "src": "19959:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int216",
                      "typeString": "int216"
                    }
                  },
                  "id": 44801,
                  "nodeType": "ExpressionStatement",
                  "src": "19959:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44802,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44793,
                      "src": "19999:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int216",
                        "typeString": "int216"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44803,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44790,
                      "src": "20013:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "19999:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44811,
                  "nodeType": "IfStatement",
                  "src": "19995:98:50",
                  "trueBody": {
                    "id": 44810,
                    "nodeType": "Block",
                    "src": "20020:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323136",
                              "id": 44806,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "20071:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_216_by_1",
                                "typeString": "int_const 216"
                              },
                              "value": "216"
                            },
                            {
                              "id": 44807,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44790,
                              "src": "20076:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_216_by_1",
                                "typeString": "int_const 216"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44805,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "20041:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44808,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20041:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44809,
                        "nodeType": "RevertStatement",
                        "src": "20034:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44788,
              "nodeType": "StructuredDocumentation",
              "src": "19558:312:50",
              "text": " @dev Returns the downcasted int216 from int256, reverting on\n overflow (when the input is less than smallest int216 or\n greater than largest int216).\n Counterpart to Solidity's `int216` operator.\n Requirements:\n - input must fit into 216 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt216",
            "nameLocation": "19884:8:50",
            "parameters": {
              "id": 44791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44790,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "19900:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44813,
                  "src": "19893:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44789,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19893:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19892:14:50"
            },
            "returnParameters": {
              "id": 44794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44793,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "19937:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44813,
                  "src": "19930:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int216",
                    "typeString": "int216"
                  },
                  "typeName": {
                    "id": 44792,
                    "name": "int216",
                    "nodeType": "ElementaryTypeName",
                    "src": "19930:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int216",
                      "typeString": "int216"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19929:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44839,
            "nodeType": "FunctionDefinition",
            "src": "20422:224:50",
            "nodes": [],
            "body": {
              "id": 44838,
              "nodeType": "Block",
              "src": "20496:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44821,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44819,
                      "src": "20506:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int208",
                        "typeString": "int208"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44824,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44816,
                          "src": "20526:5:50",
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
                        "id": 44823,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "20519:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int208_$",
                          "typeString": "type(int208)"
                        },
                        "typeName": {
                          "id": 44822,
                          "name": "int208",
                          "nodeType": "ElementaryTypeName",
                          "src": "20519:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44825,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20519:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int208",
                        "typeString": "int208"
                      }
                    },
                    "src": "20506:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int208",
                      "typeString": "int208"
                    }
                  },
                  "id": 44827,
                  "nodeType": "ExpressionStatement",
                  "src": "20506:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44828,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44819,
                      "src": "20546:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int208",
                        "typeString": "int208"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44829,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44816,
                      "src": "20560:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20546:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44837,
                  "nodeType": "IfStatement",
                  "src": "20542:98:50",
                  "trueBody": {
                    "id": 44836,
                    "nodeType": "Block",
                    "src": "20567:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323038",
                              "id": 44832,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "20618:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_208_by_1",
                                "typeString": "int_const 208"
                              },
                              "value": "208"
                            },
                            {
                              "id": 44833,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44816,
                              "src": "20623:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_208_by_1",
                                "typeString": "int_const 208"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44831,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "20588:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20588:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44835,
                        "nodeType": "RevertStatement",
                        "src": "20581:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44814,
              "nodeType": "StructuredDocumentation",
              "src": "20105:312:50",
              "text": " @dev Returns the downcasted int208 from int256, reverting on\n overflow (when the input is less than smallest int208 or\n greater than largest int208).\n Counterpart to Solidity's `int208` operator.\n Requirements:\n - input must fit into 208 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt208",
            "nameLocation": "20431:8:50",
            "parameters": {
              "id": 44817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44816,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "20447:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44839,
                  "src": "20440:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44815,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20440:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20439:14:50"
            },
            "returnParameters": {
              "id": 44820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44819,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "20484:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44839,
                  "src": "20477:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int208",
                    "typeString": "int208"
                  },
                  "typeName": {
                    "id": 44818,
                    "name": "int208",
                    "nodeType": "ElementaryTypeName",
                    "src": "20477:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int208",
                      "typeString": "int208"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20476:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44865,
            "nodeType": "FunctionDefinition",
            "src": "20969:224:50",
            "nodes": [],
            "body": {
              "id": 44864,
              "nodeType": "Block",
              "src": "21043:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44852,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44847,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44845,
                      "src": "21053:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int200",
                        "typeString": "int200"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44850,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44842,
                          "src": "21073:5:50",
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
                        "id": 44849,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "21066:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int200_$",
                          "typeString": "type(int200)"
                        },
                        "typeName": {
                          "id": 44848,
                          "name": "int200",
                          "nodeType": "ElementaryTypeName",
                          "src": "21066:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44851,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21066:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int200",
                        "typeString": "int200"
                      }
                    },
                    "src": "21053:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int200",
                      "typeString": "int200"
                    }
                  },
                  "id": 44853,
                  "nodeType": "ExpressionStatement",
                  "src": "21053:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44856,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44854,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44845,
                      "src": "21093:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int200",
                        "typeString": "int200"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44855,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44842,
                      "src": "21107:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "21093:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44863,
                  "nodeType": "IfStatement",
                  "src": "21089:98:50",
                  "trueBody": {
                    "id": 44862,
                    "nodeType": "Block",
                    "src": "21114:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323030",
                              "id": 44858,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "21165:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_200_by_1",
                                "typeString": "int_const 200"
                              },
                              "value": "200"
                            },
                            {
                              "id": 44859,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44842,
                              "src": "21170:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_200_by_1",
                                "typeString": "int_const 200"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44857,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "21135:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44860,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "21135:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44861,
                        "nodeType": "RevertStatement",
                        "src": "21128:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44840,
              "nodeType": "StructuredDocumentation",
              "src": "20652:312:50",
              "text": " @dev Returns the downcasted int200 from int256, reverting on\n overflow (when the input is less than smallest int200 or\n greater than largest int200).\n Counterpart to Solidity's `int200` operator.\n Requirements:\n - input must fit into 200 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt200",
            "nameLocation": "20978:8:50",
            "parameters": {
              "id": 44843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44842,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "20994:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44865,
                  "src": "20987:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44841,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20987:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20986:14:50"
            },
            "returnParameters": {
              "id": 44846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44845,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "21031:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44865,
                  "src": "21024:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int200",
                    "typeString": "int200"
                  },
                  "typeName": {
                    "id": 44844,
                    "name": "int200",
                    "nodeType": "ElementaryTypeName",
                    "src": "21024:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int200",
                      "typeString": "int200"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21023:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44891,
            "nodeType": "FunctionDefinition",
            "src": "21516:224:50",
            "nodes": [],
            "body": {
              "id": 44890,
              "nodeType": "Block",
              "src": "21590:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44873,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44871,
                      "src": "21600:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int192",
                        "typeString": "int192"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44876,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44868,
                          "src": "21620:5:50",
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
                        "id": 44875,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "21613:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int192_$",
                          "typeString": "type(int192)"
                        },
                        "typeName": {
                          "id": 44874,
                          "name": "int192",
                          "nodeType": "ElementaryTypeName",
                          "src": "21613:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44877,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21613:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int192",
                        "typeString": "int192"
                      }
                    },
                    "src": "21600:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int192",
                      "typeString": "int192"
                    }
                  },
                  "id": 44879,
                  "nodeType": "ExpressionStatement",
                  "src": "21600:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44882,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44880,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44871,
                      "src": "21640:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int192",
                        "typeString": "int192"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44881,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44868,
                      "src": "21654:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "21640:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44889,
                  "nodeType": "IfStatement",
                  "src": "21636:98:50",
                  "trueBody": {
                    "id": 44888,
                    "nodeType": "Block",
                    "src": "21661:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313932",
                              "id": 44884,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "21712:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_192_by_1",
                                "typeString": "int_const 192"
                              },
                              "value": "192"
                            },
                            {
                              "id": 44885,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44868,
                              "src": "21717:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_192_by_1",
                                "typeString": "int_const 192"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44883,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "21682:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44886,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "21682:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44887,
                        "nodeType": "RevertStatement",
                        "src": "21675:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44866,
              "nodeType": "StructuredDocumentation",
              "src": "21199:312:50",
              "text": " @dev Returns the downcasted int192 from int256, reverting on\n overflow (when the input is less than smallest int192 or\n greater than largest int192).\n Counterpart to Solidity's `int192` operator.\n Requirements:\n - input must fit into 192 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt192",
            "nameLocation": "21525:8:50",
            "parameters": {
              "id": 44869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44868,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "21541:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44891,
                  "src": "21534:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44867,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21534:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21533:14:50"
            },
            "returnParameters": {
              "id": 44872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44871,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "21578:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44891,
                  "src": "21571:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int192",
                    "typeString": "int192"
                  },
                  "typeName": {
                    "id": 44870,
                    "name": "int192",
                    "nodeType": "ElementaryTypeName",
                    "src": "21571:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int192",
                      "typeString": "int192"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21570:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44917,
            "nodeType": "FunctionDefinition",
            "src": "22063:224:50",
            "nodes": [],
            "body": {
              "id": 44916,
              "nodeType": "Block",
              "src": "22137:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44899,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44897,
                      "src": "22147:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int184",
                        "typeString": "int184"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44902,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44894,
                          "src": "22167:5:50",
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
                        "id": 44901,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "22160:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int184_$",
                          "typeString": "type(int184)"
                        },
                        "typeName": {
                          "id": 44900,
                          "name": "int184",
                          "nodeType": "ElementaryTypeName",
                          "src": "22160:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44903,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "22160:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int184",
                        "typeString": "int184"
                      }
                    },
                    "src": "22147:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int184",
                      "typeString": "int184"
                    }
                  },
                  "id": 44905,
                  "nodeType": "ExpressionStatement",
                  "src": "22147:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44906,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44897,
                      "src": "22187:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int184",
                        "typeString": "int184"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44907,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44894,
                      "src": "22201:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "22187:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44915,
                  "nodeType": "IfStatement",
                  "src": "22183:98:50",
                  "trueBody": {
                    "id": 44914,
                    "nodeType": "Block",
                    "src": "22208:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313834",
                              "id": 44910,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "22259:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_184_by_1",
                                "typeString": "int_const 184"
                              },
                              "value": "184"
                            },
                            {
                              "id": 44911,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44894,
                              "src": "22264:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_184_by_1",
                                "typeString": "int_const 184"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44909,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "22229:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44912,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "22229:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44913,
                        "nodeType": "RevertStatement",
                        "src": "22222:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44892,
              "nodeType": "StructuredDocumentation",
              "src": "21746:312:50",
              "text": " @dev Returns the downcasted int184 from int256, reverting on\n overflow (when the input is less than smallest int184 or\n greater than largest int184).\n Counterpart to Solidity's `int184` operator.\n Requirements:\n - input must fit into 184 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt184",
            "nameLocation": "22072:8:50",
            "parameters": {
              "id": 44895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44894,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "22088:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44917,
                  "src": "22081:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44893,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22081:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22080:14:50"
            },
            "returnParameters": {
              "id": 44898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44897,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "22125:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44917,
                  "src": "22118:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int184",
                    "typeString": "int184"
                  },
                  "typeName": {
                    "id": 44896,
                    "name": "int184",
                    "nodeType": "ElementaryTypeName",
                    "src": "22118:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int184",
                      "typeString": "int184"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22117:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44943,
            "nodeType": "FunctionDefinition",
            "src": "22610:224:50",
            "nodes": [],
            "body": {
              "id": 44942,
              "nodeType": "Block",
              "src": "22684:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44925,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44923,
                      "src": "22694:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int176",
                        "typeString": "int176"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44928,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44920,
                          "src": "22714:5:50",
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
                        "id": 44927,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "22707:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int176_$",
                          "typeString": "type(int176)"
                        },
                        "typeName": {
                          "id": 44926,
                          "name": "int176",
                          "nodeType": "ElementaryTypeName",
                          "src": "22707:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "22707:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int176",
                        "typeString": "int176"
                      }
                    },
                    "src": "22694:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int176",
                      "typeString": "int176"
                    }
                  },
                  "id": 44931,
                  "nodeType": "ExpressionStatement",
                  "src": "22694:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44934,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44932,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44923,
                      "src": "22734:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int176",
                        "typeString": "int176"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44933,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44920,
                      "src": "22748:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "22734:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44941,
                  "nodeType": "IfStatement",
                  "src": "22730:98:50",
                  "trueBody": {
                    "id": 44940,
                    "nodeType": "Block",
                    "src": "22755:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313736",
                              "id": 44936,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "22806:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_176_by_1",
                                "typeString": "int_const 176"
                              },
                              "value": "176"
                            },
                            {
                              "id": 44937,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44920,
                              "src": "22811:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_176_by_1",
                                "typeString": "int_const 176"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44935,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "22776:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44938,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "22776:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44939,
                        "nodeType": "RevertStatement",
                        "src": "22769:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44918,
              "nodeType": "StructuredDocumentation",
              "src": "22293:312:50",
              "text": " @dev Returns the downcasted int176 from int256, reverting on\n overflow (when the input is less than smallest int176 or\n greater than largest int176).\n Counterpart to Solidity's `int176` operator.\n Requirements:\n - input must fit into 176 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt176",
            "nameLocation": "22619:8:50",
            "parameters": {
              "id": 44921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44920,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "22635:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44943,
                  "src": "22628:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44919,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22628:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22627:14:50"
            },
            "returnParameters": {
              "id": 44924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44923,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "22672:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44943,
                  "src": "22665:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int176",
                    "typeString": "int176"
                  },
                  "typeName": {
                    "id": 44922,
                    "name": "int176",
                    "nodeType": "ElementaryTypeName",
                    "src": "22665:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int176",
                      "typeString": "int176"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22664:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44969,
            "nodeType": "FunctionDefinition",
            "src": "23157:224:50",
            "nodes": [],
            "body": {
              "id": 44968,
              "nodeType": "Block",
              "src": "23231:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44956,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44951,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44949,
                      "src": "23241:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int168",
                        "typeString": "int168"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44954,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44946,
                          "src": "23261:5:50",
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
                        "id": 44953,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "23254:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int168_$",
                          "typeString": "type(int168)"
                        },
                        "typeName": {
                          "id": 44952,
                          "name": "int168",
                          "nodeType": "ElementaryTypeName",
                          "src": "23254:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44955,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "23254:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int168",
                        "typeString": "int168"
                      }
                    },
                    "src": "23241:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int168",
                      "typeString": "int168"
                    }
                  },
                  "id": 44957,
                  "nodeType": "ExpressionStatement",
                  "src": "23241:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44960,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44958,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44949,
                      "src": "23281:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int168",
                        "typeString": "int168"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44959,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44946,
                      "src": "23295:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "23281:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44967,
                  "nodeType": "IfStatement",
                  "src": "23277:98:50",
                  "trueBody": {
                    "id": 44966,
                    "nodeType": "Block",
                    "src": "23302:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313638",
                              "id": 44962,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "23353:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_168_by_1",
                                "typeString": "int_const 168"
                              },
                              "value": "168"
                            },
                            {
                              "id": 44963,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44946,
                              "src": "23358:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_168_by_1",
                                "typeString": "int_const 168"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44961,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "23323:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44964,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23323:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44965,
                        "nodeType": "RevertStatement",
                        "src": "23316:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44944,
              "nodeType": "StructuredDocumentation",
              "src": "22840:312:50",
              "text": " @dev Returns the downcasted int168 from int256, reverting on\n overflow (when the input is less than smallest int168 or\n greater than largest int168).\n Counterpart to Solidity's `int168` operator.\n Requirements:\n - input must fit into 168 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt168",
            "nameLocation": "23166:8:50",
            "parameters": {
              "id": 44947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44946,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "23182:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44969,
                  "src": "23175:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44945,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23175:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23174:14:50"
            },
            "returnParameters": {
              "id": 44950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44949,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "23219:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44969,
                  "src": "23212:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int168",
                    "typeString": "int168"
                  },
                  "typeName": {
                    "id": 44948,
                    "name": "int168",
                    "nodeType": "ElementaryTypeName",
                    "src": "23212:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int168",
                      "typeString": "int168"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23211:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44995,
            "nodeType": "FunctionDefinition",
            "src": "23704:224:50",
            "nodes": [],
            "body": {
              "id": 44994,
              "nodeType": "Block",
              "src": "23778:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 44982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 44977,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44975,
                      "src": "23788:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int160",
                        "typeString": "int160"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 44980,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44972,
                          "src": "23808:5:50",
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
                        "id": 44979,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "23801:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int160_$",
                          "typeString": "type(int160)"
                        },
                        "typeName": {
                          "id": 44978,
                          "name": "int160",
                          "nodeType": "ElementaryTypeName",
                          "src": "23801:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44981,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "23801:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int160",
                        "typeString": "int160"
                      }
                    },
                    "src": "23788:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int160",
                      "typeString": "int160"
                    }
                  },
                  "id": 44983,
                  "nodeType": "ExpressionStatement",
                  "src": "23788:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 44986,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44984,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44975,
                      "src": "23828:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int160",
                        "typeString": "int160"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 44985,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44972,
                      "src": "23842:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "23828:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44993,
                  "nodeType": "IfStatement",
                  "src": "23824:98:50",
                  "trueBody": {
                    "id": 44992,
                    "nodeType": "Block",
                    "src": "23849:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313630",
                              "id": 44988,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "23900:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_160_by_1",
                                "typeString": "int_const 160"
                              },
                              "value": "160"
                            },
                            {
                              "id": 44989,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44972,
                              "src": "23905:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_160_by_1",
                                "typeString": "int_const 160"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 44987,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "23870:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 44990,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23870:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44991,
                        "nodeType": "RevertStatement",
                        "src": "23863:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44970,
              "nodeType": "StructuredDocumentation",
              "src": "23387:312:50",
              "text": " @dev Returns the downcasted int160 from int256, reverting on\n overflow (when the input is less than smallest int160 or\n greater than largest int160).\n Counterpart to Solidity's `int160` operator.\n Requirements:\n - input must fit into 160 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt160",
            "nameLocation": "23713:8:50",
            "parameters": {
              "id": 44973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44972,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "23729:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44995,
                  "src": "23722:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44971,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23722:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23721:14:50"
            },
            "returnParameters": {
              "id": 44976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44975,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "23766:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 44995,
                  "src": "23759:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int160",
                    "typeString": "int160"
                  },
                  "typeName": {
                    "id": 44974,
                    "name": "int160",
                    "nodeType": "ElementaryTypeName",
                    "src": "23759:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int160",
                      "typeString": "int160"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23758:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45021,
            "nodeType": "FunctionDefinition",
            "src": "24251:224:50",
            "nodes": [],
            "body": {
              "id": 45020,
              "nodeType": "Block",
              "src": "24325:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45008,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45003,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45001,
                      "src": "24335:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int152",
                        "typeString": "int152"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45006,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44998,
                          "src": "24355:5:50",
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
                        "id": 45005,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "24348:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int152_$",
                          "typeString": "type(int152)"
                        },
                        "typeName": {
                          "id": 45004,
                          "name": "int152",
                          "nodeType": "ElementaryTypeName",
                          "src": "24348:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45007,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24348:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int152",
                        "typeString": "int152"
                      }
                    },
                    "src": "24335:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int152",
                      "typeString": "int152"
                    }
                  },
                  "id": 45009,
                  "nodeType": "ExpressionStatement",
                  "src": "24335:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45010,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45001,
                      "src": "24375:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int152",
                        "typeString": "int152"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45011,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44998,
                      "src": "24389:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "24375:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45019,
                  "nodeType": "IfStatement",
                  "src": "24371:98:50",
                  "trueBody": {
                    "id": 45018,
                    "nodeType": "Block",
                    "src": "24396:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313532",
                              "id": 45014,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "24447:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_152_by_1",
                                "typeString": "int_const 152"
                              },
                              "value": "152"
                            },
                            {
                              "id": 45015,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44998,
                              "src": "24452:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_152_by_1",
                                "typeString": "int_const 152"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45013,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "24417:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "24417:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45017,
                        "nodeType": "RevertStatement",
                        "src": "24410:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44996,
              "nodeType": "StructuredDocumentation",
              "src": "23934:312:50",
              "text": " @dev Returns the downcasted int152 from int256, reverting on\n overflow (when the input is less than smallest int152 or\n greater than largest int152).\n Counterpart to Solidity's `int152` operator.\n Requirements:\n - input must fit into 152 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt152",
            "nameLocation": "24260:8:50",
            "parameters": {
              "id": 44999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44998,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "24276:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45021,
                  "src": "24269:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 44997,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24269:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24268:14:50"
            },
            "returnParameters": {
              "id": 45002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45001,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "24313:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45021,
                  "src": "24306:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int152",
                    "typeString": "int152"
                  },
                  "typeName": {
                    "id": 45000,
                    "name": "int152",
                    "nodeType": "ElementaryTypeName",
                    "src": "24306:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int152",
                      "typeString": "int152"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24305:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45047,
            "nodeType": "FunctionDefinition",
            "src": "24798:224:50",
            "nodes": [],
            "body": {
              "id": 45046,
              "nodeType": "Block",
              "src": "24872:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45034,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45029,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45027,
                      "src": "24882:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int144",
                        "typeString": "int144"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45032,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45024,
                          "src": "24902:5:50",
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
                        "id": 45031,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "24895:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int144_$",
                          "typeString": "type(int144)"
                        },
                        "typeName": {
                          "id": 45030,
                          "name": "int144",
                          "nodeType": "ElementaryTypeName",
                          "src": "24895:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45033,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24895:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int144",
                        "typeString": "int144"
                      }
                    },
                    "src": "24882:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int144",
                      "typeString": "int144"
                    }
                  },
                  "id": 45035,
                  "nodeType": "ExpressionStatement",
                  "src": "24882:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45038,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45036,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45027,
                      "src": "24922:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int144",
                        "typeString": "int144"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45037,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45024,
                      "src": "24936:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "24922:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45045,
                  "nodeType": "IfStatement",
                  "src": "24918:98:50",
                  "trueBody": {
                    "id": 45044,
                    "nodeType": "Block",
                    "src": "24943:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313434",
                              "id": 45040,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "24994:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_144_by_1",
                                "typeString": "int_const 144"
                              },
                              "value": "144"
                            },
                            {
                              "id": 45041,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45024,
                              "src": "24999:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_144_by_1",
                                "typeString": "int_const 144"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45039,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "24964:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45042,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "24964:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45043,
                        "nodeType": "RevertStatement",
                        "src": "24957:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45022,
              "nodeType": "StructuredDocumentation",
              "src": "24481:312:50",
              "text": " @dev Returns the downcasted int144 from int256, reverting on\n overflow (when the input is less than smallest int144 or\n greater than largest int144).\n Counterpart to Solidity's `int144` operator.\n Requirements:\n - input must fit into 144 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt144",
            "nameLocation": "24807:8:50",
            "parameters": {
              "id": 45025,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45024,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "24823:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45047,
                  "src": "24816:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45023,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24816:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24815:14:50"
            },
            "returnParameters": {
              "id": 45028,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45027,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "24860:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45047,
                  "src": "24853:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int144",
                    "typeString": "int144"
                  },
                  "typeName": {
                    "id": 45026,
                    "name": "int144",
                    "nodeType": "ElementaryTypeName",
                    "src": "24853:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int144",
                      "typeString": "int144"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24852:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45073,
            "nodeType": "FunctionDefinition",
            "src": "25345:224:50",
            "nodes": [],
            "body": {
              "id": 45072,
              "nodeType": "Block",
              "src": "25419:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45060,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45055,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45053,
                      "src": "25429:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int136",
                        "typeString": "int136"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45058,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45050,
                          "src": "25449:5:50",
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
                        "id": 45057,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "25442:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int136_$",
                          "typeString": "type(int136)"
                        },
                        "typeName": {
                          "id": 45056,
                          "name": "int136",
                          "nodeType": "ElementaryTypeName",
                          "src": "25442:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45059,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25442:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int136",
                        "typeString": "int136"
                      }
                    },
                    "src": "25429:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int136",
                      "typeString": "int136"
                    }
                  },
                  "id": 45061,
                  "nodeType": "ExpressionStatement",
                  "src": "25429:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45062,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45053,
                      "src": "25469:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int136",
                        "typeString": "int136"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45063,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45050,
                      "src": "25483:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "25469:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45071,
                  "nodeType": "IfStatement",
                  "src": "25465:98:50",
                  "trueBody": {
                    "id": 45070,
                    "nodeType": "Block",
                    "src": "25490:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313336",
                              "id": 45066,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "25541:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_136_by_1",
                                "typeString": "int_const 136"
                              },
                              "value": "136"
                            },
                            {
                              "id": 45067,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45050,
                              "src": "25546:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_136_by_1",
                                "typeString": "int_const 136"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45065,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "25511:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "25511:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45069,
                        "nodeType": "RevertStatement",
                        "src": "25504:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45048,
              "nodeType": "StructuredDocumentation",
              "src": "25028:312:50",
              "text": " @dev Returns the downcasted int136 from int256, reverting on\n overflow (when the input is less than smallest int136 or\n greater than largest int136).\n Counterpart to Solidity's `int136` operator.\n Requirements:\n - input must fit into 136 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt136",
            "nameLocation": "25354:8:50",
            "parameters": {
              "id": 45051,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45050,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "25370:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45073,
                  "src": "25363:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45049,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25363:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25362:14:50"
            },
            "returnParameters": {
              "id": 45054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45053,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "25407:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45073,
                  "src": "25400:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int136",
                    "typeString": "int136"
                  },
                  "typeName": {
                    "id": 45052,
                    "name": "int136",
                    "nodeType": "ElementaryTypeName",
                    "src": "25400:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int136",
                      "typeString": "int136"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25399:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45099,
            "nodeType": "FunctionDefinition",
            "src": "25892:224:50",
            "nodes": [],
            "body": {
              "id": 45098,
              "nodeType": "Block",
              "src": "25966:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45086,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45081,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45079,
                      "src": "25976:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45084,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45076,
                          "src": "25996:5:50",
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
                        "id": 45083,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "25989:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int128_$",
                          "typeString": "type(int128)"
                        },
                        "typeName": {
                          "id": 45082,
                          "name": "int128",
                          "nodeType": "ElementaryTypeName",
                          "src": "25989:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45085,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25989:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "src": "25976:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "id": 45087,
                  "nodeType": "ExpressionStatement",
                  "src": "25976:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45090,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45088,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45079,
                      "src": "26016:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45089,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45076,
                      "src": "26030:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "26016:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45097,
                  "nodeType": "IfStatement",
                  "src": "26012:98:50",
                  "trueBody": {
                    "id": 45096,
                    "nodeType": "Block",
                    "src": "26037:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313238",
                              "id": 45092,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "26088:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_128_by_1",
                                "typeString": "int_const 128"
                              },
                              "value": "128"
                            },
                            {
                              "id": 45093,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45076,
                              "src": "26093:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_128_by_1",
                                "typeString": "int_const 128"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45091,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "26058:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45094,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "26058:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45095,
                        "nodeType": "RevertStatement",
                        "src": "26051:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45074,
              "nodeType": "StructuredDocumentation",
              "src": "25575:312:50",
              "text": " @dev Returns the downcasted int128 from int256, reverting on\n overflow (when the input is less than smallest int128 or\n greater than largest int128).\n Counterpart to Solidity's `int128` operator.\n Requirements:\n - input must fit into 128 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt128",
            "nameLocation": "25901:8:50",
            "parameters": {
              "id": 45077,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45076,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "25917:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45099,
                  "src": "25910:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45075,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25910:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25909:14:50"
            },
            "returnParameters": {
              "id": 45080,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45079,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "25954:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45099,
                  "src": "25947:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int128",
                    "typeString": "int128"
                  },
                  "typeName": {
                    "id": 45078,
                    "name": "int128",
                    "nodeType": "ElementaryTypeName",
                    "src": "25947:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25946:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45125,
            "nodeType": "FunctionDefinition",
            "src": "26439:224:50",
            "nodes": [],
            "body": {
              "id": 45124,
              "nodeType": "Block",
              "src": "26513:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45107,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45105,
                      "src": "26523:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int120",
                        "typeString": "int120"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45110,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45102,
                          "src": "26543:5:50",
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
                        "id": 45109,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "26536:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int120_$",
                          "typeString": "type(int120)"
                        },
                        "typeName": {
                          "id": 45108,
                          "name": "int120",
                          "nodeType": "ElementaryTypeName",
                          "src": "26536:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "26536:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int120",
                        "typeString": "int120"
                      }
                    },
                    "src": "26523:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int120",
                      "typeString": "int120"
                    }
                  },
                  "id": 45113,
                  "nodeType": "ExpressionStatement",
                  "src": "26523:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45114,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45105,
                      "src": "26563:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int120",
                        "typeString": "int120"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45115,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45102,
                      "src": "26577:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "26563:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45123,
                  "nodeType": "IfStatement",
                  "src": "26559:98:50",
                  "trueBody": {
                    "id": 45122,
                    "nodeType": "Block",
                    "src": "26584:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313230",
                              "id": 45118,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "26635:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_120_by_1",
                                "typeString": "int_const 120"
                              },
                              "value": "120"
                            },
                            {
                              "id": 45119,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45102,
                              "src": "26640:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_120_by_1",
                                "typeString": "int_const 120"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45117,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "26605:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "26605:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45121,
                        "nodeType": "RevertStatement",
                        "src": "26598:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45100,
              "nodeType": "StructuredDocumentation",
              "src": "26122:312:50",
              "text": " @dev Returns the downcasted int120 from int256, reverting on\n overflow (when the input is less than smallest int120 or\n greater than largest int120).\n Counterpart to Solidity's `int120` operator.\n Requirements:\n - input must fit into 120 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt120",
            "nameLocation": "26448:8:50",
            "parameters": {
              "id": 45103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45102,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "26464:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45125,
                  "src": "26457:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45101,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26457:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26456:14:50"
            },
            "returnParameters": {
              "id": 45106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45105,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "26501:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45125,
                  "src": "26494:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int120",
                    "typeString": "int120"
                  },
                  "typeName": {
                    "id": 45104,
                    "name": "int120",
                    "nodeType": "ElementaryTypeName",
                    "src": "26494:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int120",
                      "typeString": "int120"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26493:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45151,
            "nodeType": "FunctionDefinition",
            "src": "26986:224:50",
            "nodes": [],
            "body": {
              "id": 45150,
              "nodeType": "Block",
              "src": "27060:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45138,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45133,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45131,
                      "src": "27070:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int112",
                        "typeString": "int112"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45136,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45128,
                          "src": "27090:5:50",
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
                        "id": 45135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "27083:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int112_$",
                          "typeString": "type(int112)"
                        },
                        "typeName": {
                          "id": 45134,
                          "name": "int112",
                          "nodeType": "ElementaryTypeName",
                          "src": "27083:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45137,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "27083:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int112",
                        "typeString": "int112"
                      }
                    },
                    "src": "27070:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int112",
                      "typeString": "int112"
                    }
                  },
                  "id": 45139,
                  "nodeType": "ExpressionStatement",
                  "src": "27070:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45140,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45131,
                      "src": "27110:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int112",
                        "typeString": "int112"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45141,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45128,
                      "src": "27124:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "27110:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45149,
                  "nodeType": "IfStatement",
                  "src": "27106:98:50",
                  "trueBody": {
                    "id": 45148,
                    "nodeType": "Block",
                    "src": "27131:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313132",
                              "id": 45144,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "27182:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_112_by_1",
                                "typeString": "int_const 112"
                              },
                              "value": "112"
                            },
                            {
                              "id": 45145,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45128,
                              "src": "27187:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_112_by_1",
                                "typeString": "int_const 112"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45143,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "27152:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "27152:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45147,
                        "nodeType": "RevertStatement",
                        "src": "27145:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45126,
              "nodeType": "StructuredDocumentation",
              "src": "26669:312:50",
              "text": " @dev Returns the downcasted int112 from int256, reverting on\n overflow (when the input is less than smallest int112 or\n greater than largest int112).\n Counterpart to Solidity's `int112` operator.\n Requirements:\n - input must fit into 112 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt112",
            "nameLocation": "26995:8:50",
            "parameters": {
              "id": 45129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45128,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "27011:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45151,
                  "src": "27004:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45127,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27004:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27003:14:50"
            },
            "returnParameters": {
              "id": 45132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45131,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "27048:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45151,
                  "src": "27041:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int112",
                    "typeString": "int112"
                  },
                  "typeName": {
                    "id": 45130,
                    "name": "int112",
                    "nodeType": "ElementaryTypeName",
                    "src": "27041:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int112",
                      "typeString": "int112"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27040:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45177,
            "nodeType": "FunctionDefinition",
            "src": "27533:224:50",
            "nodes": [],
            "body": {
              "id": 45176,
              "nodeType": "Block",
              "src": "27607:150:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45164,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45159,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45157,
                      "src": "27617:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int104",
                        "typeString": "int104"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45162,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45154,
                          "src": "27637:5:50",
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
                        "id": 45161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "27630:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int104_$",
                          "typeString": "type(int104)"
                        },
                        "typeName": {
                          "id": 45160,
                          "name": "int104",
                          "nodeType": "ElementaryTypeName",
                          "src": "27630:6:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45163,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "27630:13:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int104",
                        "typeString": "int104"
                      }
                    },
                    "src": "27617:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int104",
                      "typeString": "int104"
                    }
                  },
                  "id": 45165,
                  "nodeType": "ExpressionStatement",
                  "src": "27617:26:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45166,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45157,
                      "src": "27657:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int104",
                        "typeString": "int104"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45167,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45154,
                      "src": "27671:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "27657:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45175,
                  "nodeType": "IfStatement",
                  "src": "27653:98:50",
                  "trueBody": {
                    "id": 45174,
                    "nodeType": "Block",
                    "src": "27678:73:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313034",
                              "id": 45170,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "27729:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_104_by_1",
                                "typeString": "int_const 104"
                              },
                              "value": "104"
                            },
                            {
                              "id": 45171,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45154,
                              "src": "27734:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_104_by_1",
                                "typeString": "int_const 104"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45169,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "27699:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "27699:41:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45173,
                        "nodeType": "RevertStatement",
                        "src": "27692:48:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45152,
              "nodeType": "StructuredDocumentation",
              "src": "27216:312:50",
              "text": " @dev Returns the downcasted int104 from int256, reverting on\n overflow (when the input is less than smallest int104 or\n greater than largest int104).\n Counterpart to Solidity's `int104` operator.\n Requirements:\n - input must fit into 104 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt104",
            "nameLocation": "27542:8:50",
            "parameters": {
              "id": 45155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45154,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "27558:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45177,
                  "src": "27551:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45153,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27551:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27550:14:50"
            },
            "returnParameters": {
              "id": 45158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45157,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "27595:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45177,
                  "src": "27588:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int104",
                    "typeString": "int104"
                  },
                  "typeName": {
                    "id": 45156,
                    "name": "int104",
                    "nodeType": "ElementaryTypeName",
                    "src": "27588:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int104",
                      "typeString": "int104"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27587:19:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45203,
            "nodeType": "FunctionDefinition",
            "src": "28075:220:50",
            "nodes": [],
            "body": {
              "id": 45202,
              "nodeType": "Block",
              "src": "28147:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45185,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45183,
                      "src": "28157:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int96",
                        "typeString": "int96"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45188,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45180,
                          "src": "28176:5:50",
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
                        "id": 45187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "28170:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int96_$",
                          "typeString": "type(int96)"
                        },
                        "typeName": {
                          "id": 45186,
                          "name": "int96",
                          "nodeType": "ElementaryTypeName",
                          "src": "28170:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45189,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "28170:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int96",
                        "typeString": "int96"
                      }
                    },
                    "src": "28157:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int96",
                      "typeString": "int96"
                    }
                  },
                  "id": 45191,
                  "nodeType": "ExpressionStatement",
                  "src": "28157:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45192,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45183,
                      "src": "28196:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int96",
                        "typeString": "int96"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45193,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45180,
                      "src": "28210:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "28196:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45201,
                  "nodeType": "IfStatement",
                  "src": "28192:97:50",
                  "trueBody": {
                    "id": 45200,
                    "nodeType": "Block",
                    "src": "28217:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3936",
                              "id": 45196,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "28268:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_96_by_1",
                                "typeString": "int_const 96"
                              },
                              "value": "96"
                            },
                            {
                              "id": 45197,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45180,
                              "src": "28272:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_96_by_1",
                                "typeString": "int_const 96"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45195,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "28238:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45198,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "28238:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45199,
                        "nodeType": "RevertStatement",
                        "src": "28231:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45178,
              "nodeType": "StructuredDocumentation",
              "src": "27763:307:50",
              "text": " @dev Returns the downcasted int96 from int256, reverting on\n overflow (when the input is less than smallest int96 or\n greater than largest int96).\n Counterpart to Solidity's `int96` operator.\n Requirements:\n - input must fit into 96 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt96",
            "nameLocation": "28084:7:50",
            "parameters": {
              "id": 45181,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45180,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "28099:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45203,
                  "src": "28092:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45179,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28092:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28091:14:50"
            },
            "returnParameters": {
              "id": 45184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45183,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "28135:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45203,
                  "src": "28129:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int96",
                    "typeString": "int96"
                  },
                  "typeName": {
                    "id": 45182,
                    "name": "int96",
                    "nodeType": "ElementaryTypeName",
                    "src": "28129:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int96",
                      "typeString": "int96"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28128:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45229,
            "nodeType": "FunctionDefinition",
            "src": "28613:220:50",
            "nodes": [],
            "body": {
              "id": 45228,
              "nodeType": "Block",
              "src": "28685:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45211,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45209,
                      "src": "28695:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int88",
                        "typeString": "int88"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45214,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45206,
                          "src": "28714:5:50",
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
                        "id": 45213,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "28708:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int88_$",
                          "typeString": "type(int88)"
                        },
                        "typeName": {
                          "id": 45212,
                          "name": "int88",
                          "nodeType": "ElementaryTypeName",
                          "src": "28708:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45215,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "28708:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int88",
                        "typeString": "int88"
                      }
                    },
                    "src": "28695:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int88",
                      "typeString": "int88"
                    }
                  },
                  "id": 45217,
                  "nodeType": "ExpressionStatement",
                  "src": "28695:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45218,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45209,
                      "src": "28734:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int88",
                        "typeString": "int88"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45219,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45206,
                      "src": "28748:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "28734:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45227,
                  "nodeType": "IfStatement",
                  "src": "28730:97:50",
                  "trueBody": {
                    "id": 45226,
                    "nodeType": "Block",
                    "src": "28755:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3838",
                              "id": 45222,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "28806:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_88_by_1",
                                "typeString": "int_const 88"
                              },
                              "value": "88"
                            },
                            {
                              "id": 45223,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45206,
                              "src": "28810:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_88_by_1",
                                "typeString": "int_const 88"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45221,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "28776:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "28776:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45225,
                        "nodeType": "RevertStatement",
                        "src": "28769:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45204,
              "nodeType": "StructuredDocumentation",
              "src": "28301:307:50",
              "text": " @dev Returns the downcasted int88 from int256, reverting on\n overflow (when the input is less than smallest int88 or\n greater than largest int88).\n Counterpart to Solidity's `int88` operator.\n Requirements:\n - input must fit into 88 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt88",
            "nameLocation": "28622:7:50",
            "parameters": {
              "id": 45207,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45206,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "28637:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45229,
                  "src": "28630:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45205,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28630:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28629:14:50"
            },
            "returnParameters": {
              "id": 45210,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45209,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "28673:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45229,
                  "src": "28667:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int88",
                    "typeString": "int88"
                  },
                  "typeName": {
                    "id": 45208,
                    "name": "int88",
                    "nodeType": "ElementaryTypeName",
                    "src": "28667:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int88",
                      "typeString": "int88"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28666:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45255,
            "nodeType": "FunctionDefinition",
            "src": "29151:220:50",
            "nodes": [],
            "body": {
              "id": 45254,
              "nodeType": "Block",
              "src": "29223:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45237,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45235,
                      "src": "29233:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int80",
                        "typeString": "int80"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45240,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45232,
                          "src": "29252:5:50",
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
                        "id": 45239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "29246:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int80_$",
                          "typeString": "type(int80)"
                        },
                        "typeName": {
                          "id": 45238,
                          "name": "int80",
                          "nodeType": "ElementaryTypeName",
                          "src": "29246:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45241,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "29246:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int80",
                        "typeString": "int80"
                      }
                    },
                    "src": "29233:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int80",
                      "typeString": "int80"
                    }
                  },
                  "id": 45243,
                  "nodeType": "ExpressionStatement",
                  "src": "29233:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45244,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45235,
                      "src": "29272:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int80",
                        "typeString": "int80"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45245,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45232,
                      "src": "29286:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "29272:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45253,
                  "nodeType": "IfStatement",
                  "src": "29268:97:50",
                  "trueBody": {
                    "id": 45252,
                    "nodeType": "Block",
                    "src": "29293:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3830",
                              "id": 45248,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "29344:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_80_by_1",
                                "typeString": "int_const 80"
                              },
                              "value": "80"
                            },
                            {
                              "id": 45249,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45232,
                              "src": "29348:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_80_by_1",
                                "typeString": "int_const 80"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45247,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "29314:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45250,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "29314:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45251,
                        "nodeType": "RevertStatement",
                        "src": "29307:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45230,
              "nodeType": "StructuredDocumentation",
              "src": "28839:307:50",
              "text": " @dev Returns the downcasted int80 from int256, reverting on\n overflow (when the input is less than smallest int80 or\n greater than largest int80).\n Counterpart to Solidity's `int80` operator.\n Requirements:\n - input must fit into 80 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt80",
            "nameLocation": "29160:7:50",
            "parameters": {
              "id": 45233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45232,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "29175:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45255,
                  "src": "29168:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45231,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29168:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29167:14:50"
            },
            "returnParameters": {
              "id": 45236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45235,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "29211:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45255,
                  "src": "29205:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int80",
                    "typeString": "int80"
                  },
                  "typeName": {
                    "id": 45234,
                    "name": "int80",
                    "nodeType": "ElementaryTypeName",
                    "src": "29205:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int80",
                      "typeString": "int80"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29204:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45281,
            "nodeType": "FunctionDefinition",
            "src": "29689:220:50",
            "nodes": [],
            "body": {
              "id": 45280,
              "nodeType": "Block",
              "src": "29761:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45268,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45263,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45261,
                      "src": "29771:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int72",
                        "typeString": "int72"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45266,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45258,
                          "src": "29790:5:50",
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
                        "id": 45265,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "29784:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int72_$",
                          "typeString": "type(int72)"
                        },
                        "typeName": {
                          "id": 45264,
                          "name": "int72",
                          "nodeType": "ElementaryTypeName",
                          "src": "29784:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45267,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "29784:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int72",
                        "typeString": "int72"
                      }
                    },
                    "src": "29771:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int72",
                      "typeString": "int72"
                    }
                  },
                  "id": 45269,
                  "nodeType": "ExpressionStatement",
                  "src": "29771:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45270,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45261,
                      "src": "29810:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int72",
                        "typeString": "int72"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45271,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45258,
                      "src": "29824:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "29810:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45279,
                  "nodeType": "IfStatement",
                  "src": "29806:97:50",
                  "trueBody": {
                    "id": 45278,
                    "nodeType": "Block",
                    "src": "29831:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3732",
                              "id": 45274,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "29882:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_72_by_1",
                                "typeString": "int_const 72"
                              },
                              "value": "72"
                            },
                            {
                              "id": 45275,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45258,
                              "src": "29886:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_72_by_1",
                                "typeString": "int_const 72"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45273,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "29852:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45276,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "29852:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45277,
                        "nodeType": "RevertStatement",
                        "src": "29845:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45256,
              "nodeType": "StructuredDocumentation",
              "src": "29377:307:50",
              "text": " @dev Returns the downcasted int72 from int256, reverting on\n overflow (when the input is less than smallest int72 or\n greater than largest int72).\n Counterpart to Solidity's `int72` operator.\n Requirements:\n - input must fit into 72 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt72",
            "nameLocation": "29698:7:50",
            "parameters": {
              "id": 45259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45258,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "29713:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45281,
                  "src": "29706:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45257,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29706:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29705:14:50"
            },
            "returnParameters": {
              "id": 45262,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45261,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "29749:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45281,
                  "src": "29743:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int72",
                    "typeString": "int72"
                  },
                  "typeName": {
                    "id": 45260,
                    "name": "int72",
                    "nodeType": "ElementaryTypeName",
                    "src": "29743:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int72",
                      "typeString": "int72"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29742:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45307,
            "nodeType": "FunctionDefinition",
            "src": "30227:220:50",
            "nodes": [],
            "body": {
              "id": 45306,
              "nodeType": "Block",
              "src": "30299:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45294,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45289,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45287,
                      "src": "30309:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int64",
                        "typeString": "int64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45292,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45284,
                          "src": "30328:5:50",
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
                        "id": 45291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "30322:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int64_$",
                          "typeString": "type(int64)"
                        },
                        "typeName": {
                          "id": 45290,
                          "name": "int64",
                          "nodeType": "ElementaryTypeName",
                          "src": "30322:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45293,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "30322:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int64",
                        "typeString": "int64"
                      }
                    },
                    "src": "30309:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int64",
                      "typeString": "int64"
                    }
                  },
                  "id": 45295,
                  "nodeType": "ExpressionStatement",
                  "src": "30309:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45298,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45296,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45287,
                      "src": "30348:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int64",
                        "typeString": "int64"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45297,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45284,
                      "src": "30362:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "30348:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45305,
                  "nodeType": "IfStatement",
                  "src": "30344:97:50",
                  "trueBody": {
                    "id": 45304,
                    "nodeType": "Block",
                    "src": "30369:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3634",
                              "id": 45300,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "30420:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_64_by_1",
                                "typeString": "int_const 64"
                              },
                              "value": "64"
                            },
                            {
                              "id": 45301,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45284,
                              "src": "30424:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_64_by_1",
                                "typeString": "int_const 64"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45299,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "30390:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "30390:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45303,
                        "nodeType": "RevertStatement",
                        "src": "30383:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45282,
              "nodeType": "StructuredDocumentation",
              "src": "29915:307:50",
              "text": " @dev Returns the downcasted int64 from int256, reverting on\n overflow (when the input is less than smallest int64 or\n greater than largest int64).\n Counterpart to Solidity's `int64` operator.\n Requirements:\n - input must fit into 64 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt64",
            "nameLocation": "30236:7:50",
            "parameters": {
              "id": 45285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45284,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "30251:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45307,
                  "src": "30244:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45283,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30244:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30243:14:50"
            },
            "returnParameters": {
              "id": 45288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45287,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "30287:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45307,
                  "src": "30281:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int64",
                    "typeString": "int64"
                  },
                  "typeName": {
                    "id": 45286,
                    "name": "int64",
                    "nodeType": "ElementaryTypeName",
                    "src": "30281:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int64",
                      "typeString": "int64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30280:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45333,
            "nodeType": "FunctionDefinition",
            "src": "30765:220:50",
            "nodes": [],
            "body": {
              "id": 45332,
              "nodeType": "Block",
              "src": "30837:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45315,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45313,
                      "src": "30847:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int56",
                        "typeString": "int56"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45318,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45310,
                          "src": "30866:5:50",
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
                        "id": 45317,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "30860:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int56_$",
                          "typeString": "type(int56)"
                        },
                        "typeName": {
                          "id": 45316,
                          "name": "int56",
                          "nodeType": "ElementaryTypeName",
                          "src": "30860:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45319,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "30860:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int56",
                        "typeString": "int56"
                      }
                    },
                    "src": "30847:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int56",
                      "typeString": "int56"
                    }
                  },
                  "id": 45321,
                  "nodeType": "ExpressionStatement",
                  "src": "30847:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45322,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45313,
                      "src": "30886:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int56",
                        "typeString": "int56"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45323,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45310,
                      "src": "30900:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "30886:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45331,
                  "nodeType": "IfStatement",
                  "src": "30882:97:50",
                  "trueBody": {
                    "id": 45330,
                    "nodeType": "Block",
                    "src": "30907:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3536",
                              "id": 45326,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "30958:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_56_by_1",
                                "typeString": "int_const 56"
                              },
                              "value": "56"
                            },
                            {
                              "id": 45327,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45310,
                              "src": "30962:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_56_by_1",
                                "typeString": "int_const 56"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45325,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "30928:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "30928:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45329,
                        "nodeType": "RevertStatement",
                        "src": "30921:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45308,
              "nodeType": "StructuredDocumentation",
              "src": "30453:307:50",
              "text": " @dev Returns the downcasted int56 from int256, reverting on\n overflow (when the input is less than smallest int56 or\n greater than largest int56).\n Counterpart to Solidity's `int56` operator.\n Requirements:\n - input must fit into 56 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt56",
            "nameLocation": "30774:7:50",
            "parameters": {
              "id": 45311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45310,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "30789:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45333,
                  "src": "30782:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45309,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30782:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30781:14:50"
            },
            "returnParameters": {
              "id": 45314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45313,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "30825:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45333,
                  "src": "30819:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int56",
                    "typeString": "int56"
                  },
                  "typeName": {
                    "id": 45312,
                    "name": "int56",
                    "nodeType": "ElementaryTypeName",
                    "src": "30819:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int56",
                      "typeString": "int56"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30818:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45359,
            "nodeType": "FunctionDefinition",
            "src": "31303:220:50",
            "nodes": [],
            "body": {
              "id": 45358,
              "nodeType": "Block",
              "src": "31375:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45341,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45339,
                      "src": "31385:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int48",
                        "typeString": "int48"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45344,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45336,
                          "src": "31404:5:50",
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
                        "id": 45343,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "31398:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int48_$",
                          "typeString": "type(int48)"
                        },
                        "typeName": {
                          "id": 45342,
                          "name": "int48",
                          "nodeType": "ElementaryTypeName",
                          "src": "31398:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45345,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "31398:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int48",
                        "typeString": "int48"
                      }
                    },
                    "src": "31385:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int48",
                      "typeString": "int48"
                    }
                  },
                  "id": 45347,
                  "nodeType": "ExpressionStatement",
                  "src": "31385:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45348,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45339,
                      "src": "31424:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int48",
                        "typeString": "int48"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45349,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45336,
                      "src": "31438:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "31424:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45357,
                  "nodeType": "IfStatement",
                  "src": "31420:97:50",
                  "trueBody": {
                    "id": 45356,
                    "nodeType": "Block",
                    "src": "31445:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3438",
                              "id": 45352,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "31496:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_48_by_1",
                                "typeString": "int_const 48"
                              },
                              "value": "48"
                            },
                            {
                              "id": 45353,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45336,
                              "src": "31500:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_48_by_1",
                                "typeString": "int_const 48"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45351,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "31466:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45354,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "31466:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45355,
                        "nodeType": "RevertStatement",
                        "src": "31459:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45334,
              "nodeType": "StructuredDocumentation",
              "src": "30991:307:50",
              "text": " @dev Returns the downcasted int48 from int256, reverting on\n overflow (when the input is less than smallest int48 or\n greater than largest int48).\n Counterpart to Solidity's `int48` operator.\n Requirements:\n - input must fit into 48 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt48",
            "nameLocation": "31312:7:50",
            "parameters": {
              "id": 45337,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45336,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "31327:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45359,
                  "src": "31320:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45335,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31320:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31319:14:50"
            },
            "returnParameters": {
              "id": 45340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45339,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "31363:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45359,
                  "src": "31357:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int48",
                    "typeString": "int48"
                  },
                  "typeName": {
                    "id": 45338,
                    "name": "int48",
                    "nodeType": "ElementaryTypeName",
                    "src": "31357:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int48",
                      "typeString": "int48"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31356:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45385,
            "nodeType": "FunctionDefinition",
            "src": "31841:220:50",
            "nodes": [],
            "body": {
              "id": 45384,
              "nodeType": "Block",
              "src": "31913:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45372,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45367,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45365,
                      "src": "31923:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int40",
                        "typeString": "int40"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45370,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45362,
                          "src": "31942:5:50",
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
                        "id": 45369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "31936:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int40_$",
                          "typeString": "type(int40)"
                        },
                        "typeName": {
                          "id": 45368,
                          "name": "int40",
                          "nodeType": "ElementaryTypeName",
                          "src": "31936:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45371,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "31936:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int40",
                        "typeString": "int40"
                      }
                    },
                    "src": "31923:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int40",
                      "typeString": "int40"
                    }
                  },
                  "id": 45373,
                  "nodeType": "ExpressionStatement",
                  "src": "31923:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45374,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45365,
                      "src": "31962:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int40",
                        "typeString": "int40"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45375,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45362,
                      "src": "31976:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "31962:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45383,
                  "nodeType": "IfStatement",
                  "src": "31958:97:50",
                  "trueBody": {
                    "id": 45382,
                    "nodeType": "Block",
                    "src": "31983:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3430",
                              "id": 45378,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "32034:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_40_by_1",
                                "typeString": "int_const 40"
                              },
                              "value": "40"
                            },
                            {
                              "id": 45379,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45362,
                              "src": "32038:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_40_by_1",
                                "typeString": "int_const 40"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45377,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "32004:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45380,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "32004:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45381,
                        "nodeType": "RevertStatement",
                        "src": "31997:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45360,
              "nodeType": "StructuredDocumentation",
              "src": "31529:307:50",
              "text": " @dev Returns the downcasted int40 from int256, reverting on\n overflow (when the input is less than smallest int40 or\n greater than largest int40).\n Counterpart to Solidity's `int40` operator.\n Requirements:\n - input must fit into 40 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt40",
            "nameLocation": "31850:7:50",
            "parameters": {
              "id": 45363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45362,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "31865:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45385,
                  "src": "31858:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45361,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31858:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31857:14:50"
            },
            "returnParameters": {
              "id": 45366,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45365,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "31901:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45385,
                  "src": "31895:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int40",
                    "typeString": "int40"
                  },
                  "typeName": {
                    "id": 45364,
                    "name": "int40",
                    "nodeType": "ElementaryTypeName",
                    "src": "31895:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int40",
                      "typeString": "int40"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31894:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45411,
            "nodeType": "FunctionDefinition",
            "src": "32379:220:50",
            "nodes": [],
            "body": {
              "id": 45410,
              "nodeType": "Block",
              "src": "32451:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45393,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45391,
                      "src": "32461:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int32",
                        "typeString": "int32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45396,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45388,
                          "src": "32480:5:50",
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
                        "id": 45395,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "32474:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int32_$",
                          "typeString": "type(int32)"
                        },
                        "typeName": {
                          "id": 45394,
                          "name": "int32",
                          "nodeType": "ElementaryTypeName",
                          "src": "32474:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45397,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "32474:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int32",
                        "typeString": "int32"
                      }
                    },
                    "src": "32461:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int32",
                      "typeString": "int32"
                    }
                  },
                  "id": 45399,
                  "nodeType": "ExpressionStatement",
                  "src": "32461:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45402,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45400,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45391,
                      "src": "32500:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int32",
                        "typeString": "int32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45401,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45388,
                      "src": "32514:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "32500:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45409,
                  "nodeType": "IfStatement",
                  "src": "32496:97:50",
                  "trueBody": {
                    "id": 45408,
                    "nodeType": "Block",
                    "src": "32521:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3332",
                              "id": 45404,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "32572:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_32_by_1",
                                "typeString": "int_const 32"
                              },
                              "value": "32"
                            },
                            {
                              "id": 45405,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45388,
                              "src": "32576:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_32_by_1",
                                "typeString": "int_const 32"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45403,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "32542:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45406,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "32542:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45407,
                        "nodeType": "RevertStatement",
                        "src": "32535:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45386,
              "nodeType": "StructuredDocumentation",
              "src": "32067:307:50",
              "text": " @dev Returns the downcasted int32 from int256, reverting on\n overflow (when the input is less than smallest int32 or\n greater than largest int32).\n Counterpart to Solidity's `int32` operator.\n Requirements:\n - input must fit into 32 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt32",
            "nameLocation": "32388:7:50",
            "parameters": {
              "id": 45389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45388,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "32403:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45411,
                  "src": "32396:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45387,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "32396:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32395:14:50"
            },
            "returnParameters": {
              "id": 45392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45391,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "32439:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45411,
                  "src": "32433:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int32",
                    "typeString": "int32"
                  },
                  "typeName": {
                    "id": 45390,
                    "name": "int32",
                    "nodeType": "ElementaryTypeName",
                    "src": "32433:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int32",
                      "typeString": "int32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32432:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45437,
            "nodeType": "FunctionDefinition",
            "src": "32917:220:50",
            "nodes": [],
            "body": {
              "id": 45436,
              "nodeType": "Block",
              "src": "32989:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45419,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45417,
                      "src": "32999:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int24",
                        "typeString": "int24"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45422,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45414,
                          "src": "33018:5:50",
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
                        "id": 45421,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "33012:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int24_$",
                          "typeString": "type(int24)"
                        },
                        "typeName": {
                          "id": 45420,
                          "name": "int24",
                          "nodeType": "ElementaryTypeName",
                          "src": "33012:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45423,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "33012:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int24",
                        "typeString": "int24"
                      }
                    },
                    "src": "32999:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int24",
                      "typeString": "int24"
                    }
                  },
                  "id": 45425,
                  "nodeType": "ExpressionStatement",
                  "src": "32999:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45428,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45426,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45417,
                      "src": "33038:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int24",
                        "typeString": "int24"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45427,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45414,
                      "src": "33052:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "33038:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45435,
                  "nodeType": "IfStatement",
                  "src": "33034:97:50",
                  "trueBody": {
                    "id": 45434,
                    "nodeType": "Block",
                    "src": "33059:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3234",
                              "id": 45430,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "33110:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_24_by_1",
                                "typeString": "int_const 24"
                              },
                              "value": "24"
                            },
                            {
                              "id": 45431,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45414,
                              "src": "33114:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_24_by_1",
                                "typeString": "int_const 24"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45429,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "33080:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "33080:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45433,
                        "nodeType": "RevertStatement",
                        "src": "33073:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45412,
              "nodeType": "StructuredDocumentation",
              "src": "32605:307:50",
              "text": " @dev Returns the downcasted int24 from int256, reverting on\n overflow (when the input is less than smallest int24 or\n greater than largest int24).\n Counterpart to Solidity's `int24` operator.\n Requirements:\n - input must fit into 24 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt24",
            "nameLocation": "32926:7:50",
            "parameters": {
              "id": 45415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45414,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "32941:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45437,
                  "src": "32934:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45413,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "32934:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32933:14:50"
            },
            "returnParameters": {
              "id": 45418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45417,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "32977:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45437,
                  "src": "32971:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int24",
                    "typeString": "int24"
                  },
                  "typeName": {
                    "id": 45416,
                    "name": "int24",
                    "nodeType": "ElementaryTypeName",
                    "src": "32971:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int24",
                      "typeString": "int24"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32970:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45463,
            "nodeType": "FunctionDefinition",
            "src": "33455:220:50",
            "nodes": [],
            "body": {
              "id": 45462,
              "nodeType": "Block",
              "src": "33527:148:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45445,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45443,
                      "src": "33537:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45448,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45440,
                          "src": "33556:5:50",
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
                        "id": 45447,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "33550:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int16_$",
                          "typeString": "type(int16)"
                        },
                        "typeName": {
                          "id": 45446,
                          "name": "int16",
                          "nodeType": "ElementaryTypeName",
                          "src": "33550:5:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45449,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "33550:12:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "src": "33537:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int16",
                      "typeString": "int16"
                    }
                  },
                  "id": 45451,
                  "nodeType": "ExpressionStatement",
                  "src": "33537:25:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45452,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45443,
                      "src": "33576:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45453,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45440,
                      "src": "33590:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "33576:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45461,
                  "nodeType": "IfStatement",
                  "src": "33572:97:50",
                  "trueBody": {
                    "id": 45460,
                    "nodeType": "Block",
                    "src": "33597:72:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3136",
                              "id": 45456,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "33648:2:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_16_by_1",
                                "typeString": "int_const 16"
                              },
                              "value": "16"
                            },
                            {
                              "id": 45457,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45440,
                              "src": "33652:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_16_by_1",
                                "typeString": "int_const 16"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45455,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "33618:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45458,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "33618:40:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45459,
                        "nodeType": "RevertStatement",
                        "src": "33611:47:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45438,
              "nodeType": "StructuredDocumentation",
              "src": "33143:307:50",
              "text": " @dev Returns the downcasted int16 from int256, reverting on\n overflow (when the input is less than smallest int16 or\n greater than largest int16).\n Counterpart to Solidity's `int16` operator.\n Requirements:\n - input must fit into 16 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt16",
            "nameLocation": "33464:7:50",
            "parameters": {
              "id": 45441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45440,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "33479:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45463,
                  "src": "33472:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45439,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "33472:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33471:14:50"
            },
            "returnParameters": {
              "id": 45444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45443,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "33515:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45463,
                  "src": "33509:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int16",
                    "typeString": "int16"
                  },
                  "typeName": {
                    "id": 45442,
                    "name": "int16",
                    "nodeType": "ElementaryTypeName",
                    "src": "33509:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int16",
                      "typeString": "int16"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33508:18:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45489,
            "nodeType": "FunctionDefinition",
            "src": "33988:216:50",
            "nodes": [],
            "body": {
              "id": 45488,
              "nodeType": "Block",
              "src": "34058:146:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 45476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 45471,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45469,
                      "src": "34068:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int8",
                        "typeString": "int8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 45474,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45466,
                          "src": "34086:5:50",
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
                        "id": 45473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "34081:4:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int8_$",
                          "typeString": "type(int8)"
                        },
                        "typeName": {
                          "id": 45472,
                          "name": "int8",
                          "nodeType": "ElementaryTypeName",
                          "src": "34081:4:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45475,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "34081:11:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int8",
                        "typeString": "int8"
                      }
                    },
                    "src": "34068:24:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int8",
                      "typeString": "int8"
                    }
                  },
                  "id": 45477,
                  "nodeType": "ExpressionStatement",
                  "src": "34068:24:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 45480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45478,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45469,
                      "src": "34106:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int8",
                        "typeString": "int8"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 45479,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45466,
                      "src": "34120:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "34106:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45487,
                  "nodeType": "IfStatement",
                  "src": "34102:96:50",
                  "trueBody": {
                    "id": 45486,
                    "nodeType": "Block",
                    "src": "34127:71:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "38",
                              "id": 45482,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "34178:1:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_8_by_1",
                                "typeString": "int_const 8"
                              },
                              "value": "8"
                            },
                            {
                              "id": 45483,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45466,
                              "src": "34181:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_8_by_1",
                                "typeString": "int_const 8"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 45481,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43787,
                            "src": "34148:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 45484,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "34148:39:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45485,
                        "nodeType": "RevertStatement",
                        "src": "34141:46:50"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 45464,
              "nodeType": "StructuredDocumentation",
              "src": "33681:302:50",
              "text": " @dev Returns the downcasted int8 from int256, reverting on\n overflow (when the input is less than smallest int8 or\n greater than largest int8).\n Counterpart to Solidity's `int8` operator.\n Requirements:\n - input must fit into 8 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt8",
            "nameLocation": "33997:6:50",
            "parameters": {
              "id": 45467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45466,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "34011:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45489,
                  "src": "34004:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45465,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "34004:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34003:14:50"
            },
            "returnParameters": {
              "id": 45470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45469,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "34046:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45489,
                  "src": "34041:15:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int8",
                    "typeString": "int8"
                  },
                  "typeName": {
                    "id": 45468,
                    "name": "int8",
                    "nodeType": "ElementaryTypeName",
                    "src": "34041:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int8",
                      "typeString": "int8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34040:17:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45519,
            "nodeType": "FunctionDefinition",
            "src": "34380:314:50",
            "nodes": [],
            "body": {
              "id": 45518,
              "nodeType": "Block",
              "src": "34444:250:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 45506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 45497,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45492,
                      "src": "34557:5:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "id": 45502,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "34578:6:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 45501,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "34578:6:50",
                                  "typeDescriptions": {}
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                }
                              ],
                              "id": 45500,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "34573:4:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 45503,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "34573:12:50",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_int256",
                              "typeString": "type(int256)"
                            }
                          },
                          "id": 45504,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "34586:3:50",
                          "memberName": "max",
                          "nodeType": "MemberAccess",
                          "src": "34573:16:50",
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
                        "id": 45499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "34565:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 45498,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "34565:7:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45505,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "34565:25:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "34557:33:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45512,
                  "nodeType": "IfStatement",
                  "src": "34553:105:50",
                  "trueBody": {
                    "id": 45511,
                    "nodeType": "Block",
                    "src": "34592:66:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 45508,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45492,
                              "src": "34641:5:50",
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
                            "id": 45507,
                            "name": "SafeCastOverflowedUintToInt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43792,
                            "src": "34613:27:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256) pure returns (error)"
                            }
                          },
                          "id": 45509,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "34613:34:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 45510,
                        "nodeType": "RevertStatement",
                        "src": "34606:41:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 45515,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45492,
                        "src": "34681:5:50",
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
                      "id": 45514,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "34674:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 45513,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "34674:6:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 45516,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "34674:13:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 45496,
                  "id": 45517,
                  "nodeType": "Return",
                  "src": "34667:20:50"
                }
              ]
            },
            "documentation": {
              "id": 45490,
              "nodeType": "StructuredDocumentation",
              "src": "34210:165:50",
              "text": " @dev Converts an unsigned uint256 into a signed int256.\n Requirements:\n - input must be less than or equal to maxInt256."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt256",
            "nameLocation": "34389:8:50",
            "parameters": {
              "id": 45493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45492,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "34406:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45519,
                  "src": "34398:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45491,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "34398:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34397:15:50"
            },
            "returnParameters": {
              "id": 45496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45495,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 45519,
                  "src": "34436:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45494,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "34436:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34435:8:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45529,
            "nodeType": "FunctionDefinition",
            "src": "34795:145:50",
            "nodes": [],
            "body": {
              "id": 45528,
              "nodeType": "Block",
              "src": "34853:87:50",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "34888:46:50",
                    "nodeType": "YulBlock",
                    "src": "34888:46:50",
                    "statements": [
                      {
                        "nativeSrc": "34902:22:50",
                        "nodeType": "YulAssignment",
                        "src": "34902:22:50",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "b",
                                  "nativeSrc": "34921:1:50",
                                  "nodeType": "YulIdentifier",
                                  "src": "34921:1:50"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "34914:6:50",
                                "nodeType": "YulIdentifier",
                                "src": "34914:6:50"
                              },
                              "nativeSrc": "34914:9:50",
                              "nodeType": "YulFunctionCall",
                              "src": "34914:9:50"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "34907:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "34907:6:50"
                          },
                          "nativeSrc": "34907:17:50",
                          "nodeType": "YulFunctionCall",
                          "src": "34907:17:50"
                        },
                        "variableNames": [
                          {
                            "name": "u",
                            "nativeSrc": "34902:1:50",
                            "nodeType": "YulIdentifier",
                            "src": "34902:1:50"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45522,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "34921:1:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45525,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "34902:1:50",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45527,
                  "nodeType": "InlineAssembly",
                  "src": "34863:71:50"
                }
              ]
            },
            "documentation": {
              "id": 45520,
              "nodeType": "StructuredDocumentation",
              "src": "34700:90:50",
              "text": " @dev Cast a boolean (false or true) to a uint256 (0 or 1) with no jump."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint",
            "nameLocation": "34804:6:50",
            "parameters": {
              "id": 45523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45522,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "34816:1:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45529,
                  "src": "34811:6:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45521,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "34811:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34810:8:50"
            },
            "returnParameters": {
              "id": 45526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45525,
                  "mutability": "mutable",
                  "name": "u",
                  "nameLocation": "34850:1:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45529,
                  "src": "34842:9:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45524,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "34842:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34841:11:50"
            },
            "scope": 45530,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SafeCast",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 43768,
          "nodeType": "StructuredDocumentation",
          "src": "218:550:50",
          "text": " @dev Wrappers over Solidity's uintXX/intXX/bool casting operators with added overflow\n checks.\n Downcasting from uint256/int256 in Solidity does not revert on overflow. This can\n easily result in undesired exploitation or bugs, since developers usually\n assume that overflows raise errors. `SafeCast` restores this intuition by\n reverting the transaction when such an operation overflows.\n Using this library instead of the unchecked operations eliminates an entire\n class of bugs, so it's recommended to use it always."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          45530
        ],
        "name": "SafeCast",
        "nameLocation": "777:8:50",
        "scope": 45531,
        "usedErrors": [
          43775,
          43780,
          43787,
          43792
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 50
} as const;