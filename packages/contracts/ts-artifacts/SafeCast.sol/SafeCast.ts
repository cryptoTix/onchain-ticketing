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
    "object": "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea26469706673582212204138c320284d8176164e52d2c5665393da96ad9e832096a0b95b916532ea8e5864736f6c634300081a0033",
    "sourceMap": "769:34173:58:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x5f80fdfea26469706673582212204138c320284d8176164e52d2c5665393da96ad9e832096a0b95b916532ea8e5864736f6c634300081a0033",
    "sourceMap": "769:34173:58:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"bits\",\"type\":\"uint8\"},{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"SafeCastOverflowedIntDowncast\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"SafeCastOverflowedIntToUint\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"bits\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"SafeCastOverflowedUintDowncast\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"SafeCastOverflowedUintToInt\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Wrappers over Solidity's uintXX/intXX/bool casting operators with added overflow checks. Downcasting from uint256/int256 in Solidity does not revert on overflow. This can easily result in undesired exploitation or bugs, since developers usually assume that overflows raise errors. `SafeCast` restores this intuition by reverting the transaction when such an operation overflows. Using this library instead of the unchecked operations eliminates an entire class of bugs, so it's recommended to use it always.\",\"errors\":{\"SafeCastOverflowedIntDowncast(uint8,int256)\":[{\"details\":\"Value doesn't fit in an int of `bits` size.\"}],\"SafeCastOverflowedIntToUint(int256)\":[{\"details\":\"An int value doesn't fit in an uint of `bits` size.\"}],\"SafeCastOverflowedUintDowncast(uint8,uint256)\":[{\"details\":\"Value doesn't fit in an uint of `bits` size.\"}],\"SafeCastOverflowedUintToInt(uint256)\":[{\"details\":\"An uint value doesn't fit in an int of `bits` size.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":\"SafeCast\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]}},\"version\":1}",
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol",
    "id": 50079,
    "exportedSymbols": {
      "SafeCast": [
        50078
      ]
    },
    "nodeType": "SourceUnit",
    "src": "192:34751:58",
    "nodes": [
      {
        "id": 48315,
        "nodeType": "PragmaDirective",
        "src": "192:24:58",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 50078,
        "nodeType": "ContractDefinition",
        "src": "769:34173:58",
        "nodes": [
          {
            "id": 48323,
            "nodeType": "ErrorDefinition",
            "src": "865:64:58",
            "nodes": [],
            "documentation": {
              "id": 48317,
              "nodeType": "StructuredDocumentation",
              "src": "792:68:58",
              "text": " @dev Value doesn't fit in an uint of `bits` size."
            },
            "errorSelector": "6dfcc650",
            "name": "SafeCastOverflowedUintDowncast",
            "nameLocation": "871:30:58",
            "parameters": {
              "id": 48322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48319,
                  "mutability": "mutable",
                  "name": "bits",
                  "nameLocation": "908:4:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48323,
                  "src": "902:10:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 48318,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "902:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48321,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "922:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48323,
                  "src": "914:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48320,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "914:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "901:27:58"
            }
          },
          {
            "id": 48328,
            "nodeType": "ErrorDefinition",
            "src": "1015:48:58",
            "nodes": [],
            "documentation": {
              "id": 48324,
              "nodeType": "StructuredDocumentation",
              "src": "935:75:58",
              "text": " @dev An int value doesn't fit in an uint of `bits` size."
            },
            "errorSelector": "a8ce4432",
            "name": "SafeCastOverflowedIntToUint",
            "nameLocation": "1021:27:58",
            "parameters": {
              "id": 48327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48326,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1056:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48328,
                  "src": "1049:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 48325,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1049:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1048:14:58"
            }
          },
          {
            "id": 48335,
            "nodeType": "ErrorDefinition",
            "src": "1141:62:58",
            "nodes": [],
            "documentation": {
              "id": 48329,
              "nodeType": "StructuredDocumentation",
              "src": "1069:67:58",
              "text": " @dev Value doesn't fit in an int of `bits` size."
            },
            "errorSelector": "327269a7",
            "name": "SafeCastOverflowedIntDowncast",
            "nameLocation": "1147:29:58",
            "parameters": {
              "id": 48334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48331,
                  "mutability": "mutable",
                  "name": "bits",
                  "nameLocation": "1183:4:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48335,
                  "src": "1177:10:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 48330,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1177:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48333,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1196:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48335,
                  "src": "1189:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 48332,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1189:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1176:26:58"
            }
          },
          {
            "id": 48340,
            "nodeType": "ErrorDefinition",
            "src": "1289:49:58",
            "nodes": [],
            "documentation": {
              "id": 48336,
              "nodeType": "StructuredDocumentation",
              "src": "1209:75:58",
              "text": " @dev An uint value doesn't fit in an int of `bits` size."
            },
            "errorSelector": "24775e06",
            "name": "SafeCastOverflowedUintToInt",
            "nameLocation": "1295:27:58",
            "parameters": {
              "id": 48339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48338,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1331:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48340,
                  "src": "1323:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48337,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1323:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1322:15:58"
            }
          },
          {
            "id": 48368,
            "nodeType": "FunctionDefinition",
            "src": "1629:218:58",
            "nodes": [],
            "body": {
              "id": 48367,
              "nodeType": "Block",
              "src": "1695:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48354,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48348,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48343,
                      "src": "1709:5:58",
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
                            "id": 48351,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1722:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint248_$",
                              "typeString": "type(uint248)"
                            },
                            "typeName": {
                              "id": 48350,
                              "name": "uint248",
                              "nodeType": "ElementaryTypeName",
                              "src": "1722:7:58",
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
                          "id": 48349,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "1717:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48352,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1717:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint248",
                          "typeString": "type(uint248)"
                        }
                      },
                      "id": 48353,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1731:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "1717:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint248",
                        "typeString": "uint248"
                      }
                    },
                    "src": "1709:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48361,
                  "nodeType": "IfStatement",
                  "src": "1705:105:58",
                  "trueBody": {
                    "id": 48360,
                    "nodeType": "Block",
                    "src": "1736:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323438",
                              "id": 48356,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1788:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_248_by_1",
                                "typeString": "int_const 248"
                              },
                              "value": "248"
                            },
                            {
                              "id": 48357,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48343,
                              "src": "1793:5:58",
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
                            "id": 48355,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "1757:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48358,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1757:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48359,
                        "nodeType": "RevertStatement",
                        "src": "1750:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48364,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48343,
                        "src": "1834:5:58",
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
                      "id": 48363,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1826:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint248_$",
                        "typeString": "type(uint248)"
                      },
                      "typeName": {
                        "id": 48362,
                        "name": "uint248",
                        "nodeType": "ElementaryTypeName",
                        "src": "1826:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1826:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint248",
                      "typeString": "uint248"
                    }
                  },
                  "functionReturnParameters": 48347,
                  "id": 48366,
                  "nodeType": "Return",
                  "src": "1819:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48341,
              "nodeType": "StructuredDocumentation",
              "src": "1344:280:58",
              "text": " @dev Returns the downcasted uint248 from uint256, reverting on\n overflow (when the input is greater than largest uint248).\n Counterpart to Solidity's `uint248` operator.\n Requirements:\n - input must fit into 248 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint248",
            "nameLocation": "1638:9:58",
            "parameters": {
              "id": 48344,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48343,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1656:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48368,
                  "src": "1648:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48342,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1648:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1647:15:58"
            },
            "returnParameters": {
              "id": 48347,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48346,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48368,
                  "src": "1686:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint248",
                    "typeString": "uint248"
                  },
                  "typeName": {
                    "id": 48345,
                    "name": "uint248",
                    "nodeType": "ElementaryTypeName",
                    "src": "1686:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint248",
                      "typeString": "uint248"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1685:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48396,
            "nodeType": "FunctionDefinition",
            "src": "2138:218:58",
            "nodes": [],
            "body": {
              "id": 48395,
              "nodeType": "Block",
              "src": "2204:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48382,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48376,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48371,
                      "src": "2218:5:58",
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
                            "id": 48379,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2231:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint240_$",
                              "typeString": "type(uint240)"
                            },
                            "typeName": {
                              "id": 48378,
                              "name": "uint240",
                              "nodeType": "ElementaryTypeName",
                              "src": "2231:7:58",
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
                          "id": 48377,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "2226:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48380,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2226:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint240",
                          "typeString": "type(uint240)"
                        }
                      },
                      "id": 48381,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "2240:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "2226:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint240",
                        "typeString": "uint240"
                      }
                    },
                    "src": "2218:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48389,
                  "nodeType": "IfStatement",
                  "src": "2214:105:58",
                  "trueBody": {
                    "id": 48388,
                    "nodeType": "Block",
                    "src": "2245:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323430",
                              "id": 48384,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2297:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_240_by_1",
                                "typeString": "int_const 240"
                              },
                              "value": "240"
                            },
                            {
                              "id": 48385,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48371,
                              "src": "2302:5:58",
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
                            "id": 48383,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "2266:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48386,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2266:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48387,
                        "nodeType": "RevertStatement",
                        "src": "2259:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48392,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48371,
                        "src": "2343:5:58",
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
                      "id": 48391,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2335:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint240_$",
                        "typeString": "type(uint240)"
                      },
                      "typeName": {
                        "id": 48390,
                        "name": "uint240",
                        "nodeType": "ElementaryTypeName",
                        "src": "2335:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48393,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2335:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint240",
                      "typeString": "uint240"
                    }
                  },
                  "functionReturnParameters": 48375,
                  "id": 48394,
                  "nodeType": "Return",
                  "src": "2328:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48369,
              "nodeType": "StructuredDocumentation",
              "src": "1853:280:58",
              "text": " @dev Returns the downcasted uint240 from uint256, reverting on\n overflow (when the input is greater than largest uint240).\n Counterpart to Solidity's `uint240` operator.\n Requirements:\n - input must fit into 240 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint240",
            "nameLocation": "2147:9:58",
            "parameters": {
              "id": 48372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48371,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2165:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48396,
                  "src": "2157:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48370,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2157:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2156:15:58"
            },
            "returnParameters": {
              "id": 48375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48374,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48396,
                  "src": "2195:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint240",
                    "typeString": "uint240"
                  },
                  "typeName": {
                    "id": 48373,
                    "name": "uint240",
                    "nodeType": "ElementaryTypeName",
                    "src": "2195:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint240",
                      "typeString": "uint240"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2194:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48424,
            "nodeType": "FunctionDefinition",
            "src": "2647:218:58",
            "nodes": [],
            "body": {
              "id": 48423,
              "nodeType": "Block",
              "src": "2713:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48404,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48399,
                      "src": "2727:5:58",
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
                            "id": 48407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2740:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint232_$",
                              "typeString": "type(uint232)"
                            },
                            "typeName": {
                              "id": 48406,
                              "name": "uint232",
                              "nodeType": "ElementaryTypeName",
                              "src": "2740:7:58",
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
                          "id": 48405,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "2735:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2735:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint232",
                          "typeString": "type(uint232)"
                        }
                      },
                      "id": 48409,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "2749:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "2735:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint232",
                        "typeString": "uint232"
                      }
                    },
                    "src": "2727:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48417,
                  "nodeType": "IfStatement",
                  "src": "2723:105:58",
                  "trueBody": {
                    "id": 48416,
                    "nodeType": "Block",
                    "src": "2754:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323332",
                              "id": 48412,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2806:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_232_by_1",
                                "typeString": "int_const 232"
                              },
                              "value": "232"
                            },
                            {
                              "id": 48413,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48399,
                              "src": "2811:5:58",
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
                            "id": 48411,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "2775:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48414,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2775:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48415,
                        "nodeType": "RevertStatement",
                        "src": "2768:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48420,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48399,
                        "src": "2852:5:58",
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
                      "id": 48419,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2844:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint232_$",
                        "typeString": "type(uint232)"
                      },
                      "typeName": {
                        "id": 48418,
                        "name": "uint232",
                        "nodeType": "ElementaryTypeName",
                        "src": "2844:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2844:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint232",
                      "typeString": "uint232"
                    }
                  },
                  "functionReturnParameters": 48403,
                  "id": 48422,
                  "nodeType": "Return",
                  "src": "2837:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48397,
              "nodeType": "StructuredDocumentation",
              "src": "2362:280:58",
              "text": " @dev Returns the downcasted uint232 from uint256, reverting on\n overflow (when the input is greater than largest uint232).\n Counterpart to Solidity's `uint232` operator.\n Requirements:\n - input must fit into 232 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint232",
            "nameLocation": "2656:9:58",
            "parameters": {
              "id": 48400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48399,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2674:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48424,
                  "src": "2666:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48398,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2666:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2665:15:58"
            },
            "returnParameters": {
              "id": 48403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48402,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48424,
                  "src": "2704:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint232",
                    "typeString": "uint232"
                  },
                  "typeName": {
                    "id": 48401,
                    "name": "uint232",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint232",
                      "typeString": "uint232"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2703:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48452,
            "nodeType": "FunctionDefinition",
            "src": "3156:218:58",
            "nodes": [],
            "body": {
              "id": 48451,
              "nodeType": "Block",
              "src": "3222:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48432,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48427,
                      "src": "3236:5:58",
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
                            "id": 48435,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3249:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint224_$",
                              "typeString": "type(uint224)"
                            },
                            "typeName": {
                              "id": 48434,
                              "name": "uint224",
                              "nodeType": "ElementaryTypeName",
                              "src": "3249:7:58",
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
                          "id": 48433,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "3244:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48436,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3244:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint224",
                          "typeString": "type(uint224)"
                        }
                      },
                      "id": 48437,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "3258:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "3244:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint224",
                        "typeString": "uint224"
                      }
                    },
                    "src": "3236:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48445,
                  "nodeType": "IfStatement",
                  "src": "3232:105:58",
                  "trueBody": {
                    "id": 48444,
                    "nodeType": "Block",
                    "src": "3263:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323234",
                              "id": 48440,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3315:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_224_by_1",
                                "typeString": "int_const 224"
                              },
                              "value": "224"
                            },
                            {
                              "id": 48441,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48427,
                              "src": "3320:5:58",
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
                            "id": 48439,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "3284:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48442,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3284:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48443,
                        "nodeType": "RevertStatement",
                        "src": "3277:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48448,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48427,
                        "src": "3361:5:58",
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
                      "id": 48447,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3353:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint224_$",
                        "typeString": "type(uint224)"
                      },
                      "typeName": {
                        "id": 48446,
                        "name": "uint224",
                        "nodeType": "ElementaryTypeName",
                        "src": "3353:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48449,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3353:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint224",
                      "typeString": "uint224"
                    }
                  },
                  "functionReturnParameters": 48431,
                  "id": 48450,
                  "nodeType": "Return",
                  "src": "3346:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48425,
              "nodeType": "StructuredDocumentation",
              "src": "2871:280:58",
              "text": " @dev Returns the downcasted uint224 from uint256, reverting on\n overflow (when the input is greater than largest uint224).\n Counterpart to Solidity's `uint224` operator.\n Requirements:\n - input must fit into 224 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint224",
            "nameLocation": "3165:9:58",
            "parameters": {
              "id": 48428,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48427,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3183:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48452,
                  "src": "3175:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48426,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3175:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3174:15:58"
            },
            "returnParameters": {
              "id": 48431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48430,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48452,
                  "src": "3213:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint224",
                    "typeString": "uint224"
                  },
                  "typeName": {
                    "id": 48429,
                    "name": "uint224",
                    "nodeType": "ElementaryTypeName",
                    "src": "3213:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint224",
                      "typeString": "uint224"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3212:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48480,
            "nodeType": "FunctionDefinition",
            "src": "3665:218:58",
            "nodes": [],
            "body": {
              "id": 48479,
              "nodeType": "Block",
              "src": "3731:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48466,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48460,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48455,
                      "src": "3745:5:58",
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
                            "id": 48463,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3758:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint216_$",
                              "typeString": "type(uint216)"
                            },
                            "typeName": {
                              "id": 48462,
                              "name": "uint216",
                              "nodeType": "ElementaryTypeName",
                              "src": "3758:7:58",
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
                          "id": 48461,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "3753:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48464,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3753:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint216",
                          "typeString": "type(uint216)"
                        }
                      },
                      "id": 48465,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "3767:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "3753:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint216",
                        "typeString": "uint216"
                      }
                    },
                    "src": "3745:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48473,
                  "nodeType": "IfStatement",
                  "src": "3741:105:58",
                  "trueBody": {
                    "id": 48472,
                    "nodeType": "Block",
                    "src": "3772:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323136",
                              "id": 48468,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3824:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_216_by_1",
                                "typeString": "int_const 216"
                              },
                              "value": "216"
                            },
                            {
                              "id": 48469,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48455,
                              "src": "3829:5:58",
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
                            "id": 48467,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "3793:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48470,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3793:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48471,
                        "nodeType": "RevertStatement",
                        "src": "3786:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48476,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48455,
                        "src": "3870:5:58",
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
                      "id": 48475,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3862:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint216_$",
                        "typeString": "type(uint216)"
                      },
                      "typeName": {
                        "id": 48474,
                        "name": "uint216",
                        "nodeType": "ElementaryTypeName",
                        "src": "3862:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48477,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3862:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint216",
                      "typeString": "uint216"
                    }
                  },
                  "functionReturnParameters": 48459,
                  "id": 48478,
                  "nodeType": "Return",
                  "src": "3855:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48453,
              "nodeType": "StructuredDocumentation",
              "src": "3380:280:58",
              "text": " @dev Returns the downcasted uint216 from uint256, reverting on\n overflow (when the input is greater than largest uint216).\n Counterpart to Solidity's `uint216` operator.\n Requirements:\n - input must fit into 216 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint216",
            "nameLocation": "3674:9:58",
            "parameters": {
              "id": 48456,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48455,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3692:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48480,
                  "src": "3684:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48454,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3684:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3683:15:58"
            },
            "returnParameters": {
              "id": 48459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48458,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48480,
                  "src": "3722:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint216",
                    "typeString": "uint216"
                  },
                  "typeName": {
                    "id": 48457,
                    "name": "uint216",
                    "nodeType": "ElementaryTypeName",
                    "src": "3722:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint216",
                      "typeString": "uint216"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3721:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48508,
            "nodeType": "FunctionDefinition",
            "src": "4174:218:58",
            "nodes": [],
            "body": {
              "id": 48507,
              "nodeType": "Block",
              "src": "4240:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48488,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48483,
                      "src": "4254:5:58",
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
                            "id": 48491,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4267:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint208_$",
                              "typeString": "type(uint208)"
                            },
                            "typeName": {
                              "id": 48490,
                              "name": "uint208",
                              "nodeType": "ElementaryTypeName",
                              "src": "4267:7:58",
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
                          "id": 48489,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "4262:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48492,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4262:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint208",
                          "typeString": "type(uint208)"
                        }
                      },
                      "id": 48493,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "4276:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "4262:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint208",
                        "typeString": "uint208"
                      }
                    },
                    "src": "4254:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48501,
                  "nodeType": "IfStatement",
                  "src": "4250:105:58",
                  "trueBody": {
                    "id": 48500,
                    "nodeType": "Block",
                    "src": "4281:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323038",
                              "id": 48496,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4333:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_208_by_1",
                                "typeString": "int_const 208"
                              },
                              "value": "208"
                            },
                            {
                              "id": 48497,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48483,
                              "src": "4338:5:58",
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
                            "id": 48495,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "4302:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48498,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4302:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48499,
                        "nodeType": "RevertStatement",
                        "src": "4295:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48504,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48483,
                        "src": "4379:5:58",
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
                      "id": 48503,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "4371:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint208_$",
                        "typeString": "type(uint208)"
                      },
                      "typeName": {
                        "id": 48502,
                        "name": "uint208",
                        "nodeType": "ElementaryTypeName",
                        "src": "4371:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4371:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint208",
                      "typeString": "uint208"
                    }
                  },
                  "functionReturnParameters": 48487,
                  "id": 48506,
                  "nodeType": "Return",
                  "src": "4364:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48481,
              "nodeType": "StructuredDocumentation",
              "src": "3889:280:58",
              "text": " @dev Returns the downcasted uint208 from uint256, reverting on\n overflow (when the input is greater than largest uint208).\n Counterpart to Solidity's `uint208` operator.\n Requirements:\n - input must fit into 208 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint208",
            "nameLocation": "4183:9:58",
            "parameters": {
              "id": 48484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48483,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4201:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48508,
                  "src": "4193:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48482,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4193:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4192:15:58"
            },
            "returnParameters": {
              "id": 48487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48486,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48508,
                  "src": "4231:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint208",
                    "typeString": "uint208"
                  },
                  "typeName": {
                    "id": 48485,
                    "name": "uint208",
                    "nodeType": "ElementaryTypeName",
                    "src": "4231:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint208",
                      "typeString": "uint208"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4230:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48536,
            "nodeType": "FunctionDefinition",
            "src": "4683:218:58",
            "nodes": [],
            "body": {
              "id": 48535,
              "nodeType": "Block",
              "src": "4749:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48522,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48516,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48511,
                      "src": "4763:5:58",
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
                            "id": 48519,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4776:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint200_$",
                              "typeString": "type(uint200)"
                            },
                            "typeName": {
                              "id": 48518,
                              "name": "uint200",
                              "nodeType": "ElementaryTypeName",
                              "src": "4776:7:58",
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
                          "id": 48517,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "4771:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48520,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4771:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint200",
                          "typeString": "type(uint200)"
                        }
                      },
                      "id": 48521,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "4785:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "4771:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint200",
                        "typeString": "uint200"
                      }
                    },
                    "src": "4763:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48529,
                  "nodeType": "IfStatement",
                  "src": "4759:105:58",
                  "trueBody": {
                    "id": 48528,
                    "nodeType": "Block",
                    "src": "4790:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323030",
                              "id": 48524,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4842:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_200_by_1",
                                "typeString": "int_const 200"
                              },
                              "value": "200"
                            },
                            {
                              "id": 48525,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48511,
                              "src": "4847:5:58",
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
                            "id": 48523,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "4811:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48526,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4811:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48527,
                        "nodeType": "RevertStatement",
                        "src": "4804:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48532,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48511,
                        "src": "4888:5:58",
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
                      "id": 48531,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "4880:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint200_$",
                        "typeString": "type(uint200)"
                      },
                      "typeName": {
                        "id": 48530,
                        "name": "uint200",
                        "nodeType": "ElementaryTypeName",
                        "src": "4880:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48533,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4880:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint200",
                      "typeString": "uint200"
                    }
                  },
                  "functionReturnParameters": 48515,
                  "id": 48534,
                  "nodeType": "Return",
                  "src": "4873:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48509,
              "nodeType": "StructuredDocumentation",
              "src": "4398:280:58",
              "text": " @dev Returns the downcasted uint200 from uint256, reverting on\n overflow (when the input is greater than largest uint200).\n Counterpart to Solidity's `uint200` operator.\n Requirements:\n - input must fit into 200 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint200",
            "nameLocation": "4692:9:58",
            "parameters": {
              "id": 48512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48511,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4710:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48536,
                  "src": "4702:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4702:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4701:15:58"
            },
            "returnParameters": {
              "id": 48515,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48514,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48536,
                  "src": "4740:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint200",
                    "typeString": "uint200"
                  },
                  "typeName": {
                    "id": 48513,
                    "name": "uint200",
                    "nodeType": "ElementaryTypeName",
                    "src": "4740:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint200",
                      "typeString": "uint200"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4739:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48564,
            "nodeType": "FunctionDefinition",
            "src": "5192:218:58",
            "nodes": [],
            "body": {
              "id": 48563,
              "nodeType": "Block",
              "src": "5258:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48544,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48539,
                      "src": "5272:5:58",
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
                            "id": 48547,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5285:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint192_$",
                              "typeString": "type(uint192)"
                            },
                            "typeName": {
                              "id": 48546,
                              "name": "uint192",
                              "nodeType": "ElementaryTypeName",
                              "src": "5285:7:58",
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
                          "id": 48545,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "5280:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48548,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5280:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint192",
                          "typeString": "type(uint192)"
                        }
                      },
                      "id": 48549,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5294:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "5280:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint192",
                        "typeString": "uint192"
                      }
                    },
                    "src": "5272:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48557,
                  "nodeType": "IfStatement",
                  "src": "5268:105:58",
                  "trueBody": {
                    "id": 48556,
                    "nodeType": "Block",
                    "src": "5299:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313932",
                              "id": 48552,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5351:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_192_by_1",
                                "typeString": "int_const 192"
                              },
                              "value": "192"
                            },
                            {
                              "id": 48553,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48539,
                              "src": "5356:5:58",
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
                            "id": 48551,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "5320:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5320:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48555,
                        "nodeType": "RevertStatement",
                        "src": "5313:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48560,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48539,
                        "src": "5397:5:58",
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
                      "id": 48559,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5389:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint192_$",
                        "typeString": "type(uint192)"
                      },
                      "typeName": {
                        "id": 48558,
                        "name": "uint192",
                        "nodeType": "ElementaryTypeName",
                        "src": "5389:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48561,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5389:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint192",
                      "typeString": "uint192"
                    }
                  },
                  "functionReturnParameters": 48543,
                  "id": 48562,
                  "nodeType": "Return",
                  "src": "5382:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48537,
              "nodeType": "StructuredDocumentation",
              "src": "4907:280:58",
              "text": " @dev Returns the downcasted uint192 from uint256, reverting on\n overflow (when the input is greater than largest uint192).\n Counterpart to Solidity's `uint192` operator.\n Requirements:\n - input must fit into 192 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint192",
            "nameLocation": "5201:9:58",
            "parameters": {
              "id": 48540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48539,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5219:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48564,
                  "src": "5211:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48538,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5211:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5210:15:58"
            },
            "returnParameters": {
              "id": 48543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48542,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48564,
                  "src": "5249:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint192",
                    "typeString": "uint192"
                  },
                  "typeName": {
                    "id": 48541,
                    "name": "uint192",
                    "nodeType": "ElementaryTypeName",
                    "src": "5249:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint192",
                      "typeString": "uint192"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5248:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48592,
            "nodeType": "FunctionDefinition",
            "src": "5701:218:58",
            "nodes": [],
            "body": {
              "id": 48591,
              "nodeType": "Block",
              "src": "5767:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48578,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48572,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48567,
                      "src": "5781:5:58",
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
                            "id": 48575,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5794:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint184_$",
                              "typeString": "type(uint184)"
                            },
                            "typeName": {
                              "id": 48574,
                              "name": "uint184",
                              "nodeType": "ElementaryTypeName",
                              "src": "5794:7:58",
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
                          "id": 48573,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "5789:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5789:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint184",
                          "typeString": "type(uint184)"
                        }
                      },
                      "id": 48577,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5803:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "5789:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint184",
                        "typeString": "uint184"
                      }
                    },
                    "src": "5781:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48585,
                  "nodeType": "IfStatement",
                  "src": "5777:105:58",
                  "trueBody": {
                    "id": 48584,
                    "nodeType": "Block",
                    "src": "5808:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313834",
                              "id": 48580,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5860:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_184_by_1",
                                "typeString": "int_const 184"
                              },
                              "value": "184"
                            },
                            {
                              "id": 48581,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48567,
                              "src": "5865:5:58",
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
                            "id": 48579,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "5829:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48582,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5829:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48583,
                        "nodeType": "RevertStatement",
                        "src": "5822:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48588,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48567,
                        "src": "5906:5:58",
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
                      "id": 48587,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5898:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint184_$",
                        "typeString": "type(uint184)"
                      },
                      "typeName": {
                        "id": 48586,
                        "name": "uint184",
                        "nodeType": "ElementaryTypeName",
                        "src": "5898:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5898:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint184",
                      "typeString": "uint184"
                    }
                  },
                  "functionReturnParameters": 48571,
                  "id": 48590,
                  "nodeType": "Return",
                  "src": "5891:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48565,
              "nodeType": "StructuredDocumentation",
              "src": "5416:280:58",
              "text": " @dev Returns the downcasted uint184 from uint256, reverting on\n overflow (when the input is greater than largest uint184).\n Counterpart to Solidity's `uint184` operator.\n Requirements:\n - input must fit into 184 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint184",
            "nameLocation": "5710:9:58",
            "parameters": {
              "id": 48568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48567,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5728:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48592,
                  "src": "5720:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48566,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5720:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5719:15:58"
            },
            "returnParameters": {
              "id": 48571,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48570,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48592,
                  "src": "5758:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint184",
                    "typeString": "uint184"
                  },
                  "typeName": {
                    "id": 48569,
                    "name": "uint184",
                    "nodeType": "ElementaryTypeName",
                    "src": "5758:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint184",
                      "typeString": "uint184"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5757:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48620,
            "nodeType": "FunctionDefinition",
            "src": "6210:218:58",
            "nodes": [],
            "body": {
              "id": 48619,
              "nodeType": "Block",
              "src": "6276:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48606,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48600,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48595,
                      "src": "6290:5:58",
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
                            "id": 48603,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6303:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint176_$",
                              "typeString": "type(uint176)"
                            },
                            "typeName": {
                              "id": 48602,
                              "name": "uint176",
                              "nodeType": "ElementaryTypeName",
                              "src": "6303:7:58",
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
                          "id": 48601,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "6298:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48604,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6298:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint176",
                          "typeString": "type(uint176)"
                        }
                      },
                      "id": 48605,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6312:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "6298:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint176",
                        "typeString": "uint176"
                      }
                    },
                    "src": "6290:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48613,
                  "nodeType": "IfStatement",
                  "src": "6286:105:58",
                  "trueBody": {
                    "id": 48612,
                    "nodeType": "Block",
                    "src": "6317:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313736",
                              "id": 48608,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6369:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_176_by_1",
                                "typeString": "int_const 176"
                              },
                              "value": "176"
                            },
                            {
                              "id": 48609,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48595,
                              "src": "6374:5:58",
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
                            "id": 48607,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "6338:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48610,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6338:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48611,
                        "nodeType": "RevertStatement",
                        "src": "6331:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48616,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48595,
                        "src": "6415:5:58",
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
                      "id": 48615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6407:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint176_$",
                        "typeString": "type(uint176)"
                      },
                      "typeName": {
                        "id": 48614,
                        "name": "uint176",
                        "nodeType": "ElementaryTypeName",
                        "src": "6407:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48617,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6407:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint176",
                      "typeString": "uint176"
                    }
                  },
                  "functionReturnParameters": 48599,
                  "id": 48618,
                  "nodeType": "Return",
                  "src": "6400:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48593,
              "nodeType": "StructuredDocumentation",
              "src": "5925:280:58",
              "text": " @dev Returns the downcasted uint176 from uint256, reverting on\n overflow (when the input is greater than largest uint176).\n Counterpart to Solidity's `uint176` operator.\n Requirements:\n - input must fit into 176 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint176",
            "nameLocation": "6219:9:58",
            "parameters": {
              "id": 48596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48595,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6237:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48620,
                  "src": "6229:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6229:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6228:15:58"
            },
            "returnParameters": {
              "id": 48599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48598,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48620,
                  "src": "6267:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint176",
                    "typeString": "uint176"
                  },
                  "typeName": {
                    "id": 48597,
                    "name": "uint176",
                    "nodeType": "ElementaryTypeName",
                    "src": "6267:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint176",
                      "typeString": "uint176"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6266:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48648,
            "nodeType": "FunctionDefinition",
            "src": "6719:218:58",
            "nodes": [],
            "body": {
              "id": 48647,
              "nodeType": "Block",
              "src": "6785:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48634,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48628,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48623,
                      "src": "6799:5:58",
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
                            "id": 48631,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6812:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint168_$",
                              "typeString": "type(uint168)"
                            },
                            "typeName": {
                              "id": 48630,
                              "name": "uint168",
                              "nodeType": "ElementaryTypeName",
                              "src": "6812:7:58",
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
                          "id": 48629,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "6807:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48632,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6807:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint168",
                          "typeString": "type(uint168)"
                        }
                      },
                      "id": 48633,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6821:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "6807:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint168",
                        "typeString": "uint168"
                      }
                    },
                    "src": "6799:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48641,
                  "nodeType": "IfStatement",
                  "src": "6795:105:58",
                  "trueBody": {
                    "id": 48640,
                    "nodeType": "Block",
                    "src": "6826:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313638",
                              "id": 48636,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6878:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_168_by_1",
                                "typeString": "int_const 168"
                              },
                              "value": "168"
                            },
                            {
                              "id": 48637,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48623,
                              "src": "6883:5:58",
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
                            "id": 48635,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "6847:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48638,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6847:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48639,
                        "nodeType": "RevertStatement",
                        "src": "6840:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48644,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48623,
                        "src": "6924:5:58",
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
                      "id": 48643,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6916:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint168_$",
                        "typeString": "type(uint168)"
                      },
                      "typeName": {
                        "id": 48642,
                        "name": "uint168",
                        "nodeType": "ElementaryTypeName",
                        "src": "6916:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48645,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6916:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint168",
                      "typeString": "uint168"
                    }
                  },
                  "functionReturnParameters": 48627,
                  "id": 48646,
                  "nodeType": "Return",
                  "src": "6909:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48621,
              "nodeType": "StructuredDocumentation",
              "src": "6434:280:58",
              "text": " @dev Returns the downcasted uint168 from uint256, reverting on\n overflow (when the input is greater than largest uint168).\n Counterpart to Solidity's `uint168` operator.\n Requirements:\n - input must fit into 168 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint168",
            "nameLocation": "6728:9:58",
            "parameters": {
              "id": 48624,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48623,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6746:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48648,
                  "src": "6738:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48622,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6738:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6737:15:58"
            },
            "returnParameters": {
              "id": 48627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48626,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48648,
                  "src": "6776:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint168",
                    "typeString": "uint168"
                  },
                  "typeName": {
                    "id": 48625,
                    "name": "uint168",
                    "nodeType": "ElementaryTypeName",
                    "src": "6776:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint168",
                      "typeString": "uint168"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6775:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48676,
            "nodeType": "FunctionDefinition",
            "src": "7228:218:58",
            "nodes": [],
            "body": {
              "id": 48675,
              "nodeType": "Block",
              "src": "7294:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48662,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48656,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48651,
                      "src": "7308:5:58",
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
                            "id": 48659,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7321:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint160_$",
                              "typeString": "type(uint160)"
                            },
                            "typeName": {
                              "id": 48658,
                              "name": "uint160",
                              "nodeType": "ElementaryTypeName",
                              "src": "7321:7:58",
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
                          "id": 48657,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "7316:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48660,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7316:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint160",
                          "typeString": "type(uint160)"
                        }
                      },
                      "id": 48661,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "7330:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "7316:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint160",
                        "typeString": "uint160"
                      }
                    },
                    "src": "7308:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48669,
                  "nodeType": "IfStatement",
                  "src": "7304:105:58",
                  "trueBody": {
                    "id": 48668,
                    "nodeType": "Block",
                    "src": "7335:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313630",
                              "id": 48664,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7387:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_160_by_1",
                                "typeString": "int_const 160"
                              },
                              "value": "160"
                            },
                            {
                              "id": 48665,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48651,
                              "src": "7392:5:58",
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
                            "id": 48663,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "7356:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48666,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7356:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48667,
                        "nodeType": "RevertStatement",
                        "src": "7349:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48672,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48651,
                        "src": "7433:5:58",
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
                      "id": 48671,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7425:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint160_$",
                        "typeString": "type(uint160)"
                      },
                      "typeName": {
                        "id": 48670,
                        "name": "uint160",
                        "nodeType": "ElementaryTypeName",
                        "src": "7425:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48673,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7425:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint160",
                      "typeString": "uint160"
                    }
                  },
                  "functionReturnParameters": 48655,
                  "id": 48674,
                  "nodeType": "Return",
                  "src": "7418:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48649,
              "nodeType": "StructuredDocumentation",
              "src": "6943:280:58",
              "text": " @dev Returns the downcasted uint160 from uint256, reverting on\n overflow (when the input is greater than largest uint160).\n Counterpart to Solidity's `uint160` operator.\n Requirements:\n - input must fit into 160 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint160",
            "nameLocation": "7237:9:58",
            "parameters": {
              "id": 48652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48651,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "7255:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48676,
                  "src": "7247:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48650,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7247:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7246:15:58"
            },
            "returnParameters": {
              "id": 48655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48654,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48676,
                  "src": "7285:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint160",
                    "typeString": "uint160"
                  },
                  "typeName": {
                    "id": 48653,
                    "name": "uint160",
                    "nodeType": "ElementaryTypeName",
                    "src": "7285:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint160",
                      "typeString": "uint160"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7284:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48704,
            "nodeType": "FunctionDefinition",
            "src": "7737:218:58",
            "nodes": [],
            "body": {
              "id": 48703,
              "nodeType": "Block",
              "src": "7803:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48690,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48684,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48679,
                      "src": "7817:5:58",
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
                            "id": 48687,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7830:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint152_$",
                              "typeString": "type(uint152)"
                            },
                            "typeName": {
                              "id": 48686,
                              "name": "uint152",
                              "nodeType": "ElementaryTypeName",
                              "src": "7830:7:58",
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
                          "id": 48685,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "7825:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48688,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7825:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint152",
                          "typeString": "type(uint152)"
                        }
                      },
                      "id": 48689,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "7839:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "7825:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint152",
                        "typeString": "uint152"
                      }
                    },
                    "src": "7817:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48697,
                  "nodeType": "IfStatement",
                  "src": "7813:105:58",
                  "trueBody": {
                    "id": 48696,
                    "nodeType": "Block",
                    "src": "7844:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313532",
                              "id": 48692,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7896:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_152_by_1",
                                "typeString": "int_const 152"
                              },
                              "value": "152"
                            },
                            {
                              "id": 48693,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48679,
                              "src": "7901:5:58",
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
                            "id": 48691,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "7865:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7865:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48695,
                        "nodeType": "RevertStatement",
                        "src": "7858:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48700,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48679,
                        "src": "7942:5:58",
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
                      "id": 48699,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7934:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint152_$",
                        "typeString": "type(uint152)"
                      },
                      "typeName": {
                        "id": 48698,
                        "name": "uint152",
                        "nodeType": "ElementaryTypeName",
                        "src": "7934:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7934:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint152",
                      "typeString": "uint152"
                    }
                  },
                  "functionReturnParameters": 48683,
                  "id": 48702,
                  "nodeType": "Return",
                  "src": "7927:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48677,
              "nodeType": "StructuredDocumentation",
              "src": "7452:280:58",
              "text": " @dev Returns the downcasted uint152 from uint256, reverting on\n overflow (when the input is greater than largest uint152).\n Counterpart to Solidity's `uint152` operator.\n Requirements:\n - input must fit into 152 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint152",
            "nameLocation": "7746:9:58",
            "parameters": {
              "id": 48680,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48679,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "7764:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48704,
                  "src": "7756:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48678,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7756:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7755:15:58"
            },
            "returnParameters": {
              "id": 48683,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48682,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48704,
                  "src": "7794:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint152",
                    "typeString": "uint152"
                  },
                  "typeName": {
                    "id": 48681,
                    "name": "uint152",
                    "nodeType": "ElementaryTypeName",
                    "src": "7794:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint152",
                      "typeString": "uint152"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7793:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48732,
            "nodeType": "FunctionDefinition",
            "src": "8246:218:58",
            "nodes": [],
            "body": {
              "id": 48731,
              "nodeType": "Block",
              "src": "8312:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48718,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48712,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48707,
                      "src": "8326:5:58",
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
                            "id": 48715,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8339:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint144_$",
                              "typeString": "type(uint144)"
                            },
                            "typeName": {
                              "id": 48714,
                              "name": "uint144",
                              "nodeType": "ElementaryTypeName",
                              "src": "8339:7:58",
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
                          "id": 48713,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "8334:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48716,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8334:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint144",
                          "typeString": "type(uint144)"
                        }
                      },
                      "id": 48717,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "8348:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "8334:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint144",
                        "typeString": "uint144"
                      }
                    },
                    "src": "8326:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48725,
                  "nodeType": "IfStatement",
                  "src": "8322:105:58",
                  "trueBody": {
                    "id": 48724,
                    "nodeType": "Block",
                    "src": "8353:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313434",
                              "id": 48720,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8405:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_144_by_1",
                                "typeString": "int_const 144"
                              },
                              "value": "144"
                            },
                            {
                              "id": 48721,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48707,
                              "src": "8410:5:58",
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
                            "id": 48719,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "8374:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8374:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48723,
                        "nodeType": "RevertStatement",
                        "src": "8367:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48728,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48707,
                        "src": "8451:5:58",
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
                      "id": 48727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "8443:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint144_$",
                        "typeString": "type(uint144)"
                      },
                      "typeName": {
                        "id": 48726,
                        "name": "uint144",
                        "nodeType": "ElementaryTypeName",
                        "src": "8443:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8443:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint144",
                      "typeString": "uint144"
                    }
                  },
                  "functionReturnParameters": 48711,
                  "id": 48730,
                  "nodeType": "Return",
                  "src": "8436:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48705,
              "nodeType": "StructuredDocumentation",
              "src": "7961:280:58",
              "text": " @dev Returns the downcasted uint144 from uint256, reverting on\n overflow (when the input is greater than largest uint144).\n Counterpart to Solidity's `uint144` operator.\n Requirements:\n - input must fit into 144 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint144",
            "nameLocation": "8255:9:58",
            "parameters": {
              "id": 48708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48707,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8273:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48732,
                  "src": "8265:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48706,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8265:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8264:15:58"
            },
            "returnParameters": {
              "id": 48711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48710,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48732,
                  "src": "8303:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint144",
                    "typeString": "uint144"
                  },
                  "typeName": {
                    "id": 48709,
                    "name": "uint144",
                    "nodeType": "ElementaryTypeName",
                    "src": "8303:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint144",
                      "typeString": "uint144"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8302:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48760,
            "nodeType": "FunctionDefinition",
            "src": "8755:218:58",
            "nodes": [],
            "body": {
              "id": 48759,
              "nodeType": "Block",
              "src": "8821:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48740,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48735,
                      "src": "8835:5:58",
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
                            "id": 48743,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8848:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint136_$",
                              "typeString": "type(uint136)"
                            },
                            "typeName": {
                              "id": 48742,
                              "name": "uint136",
                              "nodeType": "ElementaryTypeName",
                              "src": "8848:7:58",
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
                          "id": 48741,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "8843:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48744,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8843:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint136",
                          "typeString": "type(uint136)"
                        }
                      },
                      "id": 48745,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "8857:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "8843:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint136",
                        "typeString": "uint136"
                      }
                    },
                    "src": "8835:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48753,
                  "nodeType": "IfStatement",
                  "src": "8831:105:58",
                  "trueBody": {
                    "id": 48752,
                    "nodeType": "Block",
                    "src": "8862:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313336",
                              "id": 48748,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8914:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_136_by_1",
                                "typeString": "int_const 136"
                              },
                              "value": "136"
                            },
                            {
                              "id": 48749,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48735,
                              "src": "8919:5:58",
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
                            "id": 48747,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "8883:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48750,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8883:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48751,
                        "nodeType": "RevertStatement",
                        "src": "8876:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48756,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48735,
                        "src": "8960:5:58",
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
                      "id": 48755,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "8952:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint136_$",
                        "typeString": "type(uint136)"
                      },
                      "typeName": {
                        "id": 48754,
                        "name": "uint136",
                        "nodeType": "ElementaryTypeName",
                        "src": "8952:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8952:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint136",
                      "typeString": "uint136"
                    }
                  },
                  "functionReturnParameters": 48739,
                  "id": 48758,
                  "nodeType": "Return",
                  "src": "8945:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48733,
              "nodeType": "StructuredDocumentation",
              "src": "8470:280:58",
              "text": " @dev Returns the downcasted uint136 from uint256, reverting on\n overflow (when the input is greater than largest uint136).\n Counterpart to Solidity's `uint136` operator.\n Requirements:\n - input must fit into 136 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint136",
            "nameLocation": "8764:9:58",
            "parameters": {
              "id": 48736,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48735,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8782:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48760,
                  "src": "8774:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48734,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8774:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8773:15:58"
            },
            "returnParameters": {
              "id": 48739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48738,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48760,
                  "src": "8812:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint136",
                    "typeString": "uint136"
                  },
                  "typeName": {
                    "id": 48737,
                    "name": "uint136",
                    "nodeType": "ElementaryTypeName",
                    "src": "8812:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint136",
                      "typeString": "uint136"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8811:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48788,
            "nodeType": "FunctionDefinition",
            "src": "9264:218:58",
            "nodes": [],
            "body": {
              "id": 48787,
              "nodeType": "Block",
              "src": "9330:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48768,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48763,
                      "src": "9344:5:58",
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
                            "id": 48771,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9357:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint128_$",
                              "typeString": "type(uint128)"
                            },
                            "typeName": {
                              "id": 48770,
                              "name": "uint128",
                              "nodeType": "ElementaryTypeName",
                              "src": "9357:7:58",
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
                          "id": 48769,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "9352:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48772,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9352:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint128",
                          "typeString": "type(uint128)"
                        }
                      },
                      "id": 48773,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "9366:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "9352:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "9344:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48781,
                  "nodeType": "IfStatement",
                  "src": "9340:105:58",
                  "trueBody": {
                    "id": 48780,
                    "nodeType": "Block",
                    "src": "9371:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313238",
                              "id": 48776,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9423:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_128_by_1",
                                "typeString": "int_const 128"
                              },
                              "value": "128"
                            },
                            {
                              "id": 48777,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48763,
                              "src": "9428:5:58",
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
                            "id": 48775,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "9392:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48778,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9392:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48779,
                        "nodeType": "RevertStatement",
                        "src": "9385:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48784,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48763,
                        "src": "9469:5:58",
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
                      "id": 48783,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9461:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint128_$",
                        "typeString": "type(uint128)"
                      },
                      "typeName": {
                        "id": 48782,
                        "name": "uint128",
                        "nodeType": "ElementaryTypeName",
                        "src": "9461:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9461:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "functionReturnParameters": 48767,
                  "id": 48786,
                  "nodeType": "Return",
                  "src": "9454:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48761,
              "nodeType": "StructuredDocumentation",
              "src": "8979:280:58",
              "text": " @dev Returns the downcasted uint128 from uint256, reverting on\n overflow (when the input is greater than largest uint128).\n Counterpart to Solidity's `uint128` operator.\n Requirements:\n - input must fit into 128 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint128",
            "nameLocation": "9273:9:58",
            "parameters": {
              "id": 48764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48763,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9291:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48788,
                  "src": "9283:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48762,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9283:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9282:15:58"
            },
            "returnParameters": {
              "id": 48767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48766,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48788,
                  "src": "9321:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 48765,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "9321:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9320:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48816,
            "nodeType": "FunctionDefinition",
            "src": "9773:218:58",
            "nodes": [],
            "body": {
              "id": 48815,
              "nodeType": "Block",
              "src": "9839:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48802,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48796,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48791,
                      "src": "9853:5:58",
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
                            "id": 48799,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9866:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint120_$",
                              "typeString": "type(uint120)"
                            },
                            "typeName": {
                              "id": 48798,
                              "name": "uint120",
                              "nodeType": "ElementaryTypeName",
                              "src": "9866:7:58",
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
                          "id": 48797,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "9861:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48800,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9861:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint120",
                          "typeString": "type(uint120)"
                        }
                      },
                      "id": 48801,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "9875:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "9861:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint120",
                        "typeString": "uint120"
                      }
                    },
                    "src": "9853:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48809,
                  "nodeType": "IfStatement",
                  "src": "9849:105:58",
                  "trueBody": {
                    "id": 48808,
                    "nodeType": "Block",
                    "src": "9880:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313230",
                              "id": 48804,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9932:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_120_by_1",
                                "typeString": "int_const 120"
                              },
                              "value": "120"
                            },
                            {
                              "id": 48805,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48791,
                              "src": "9937:5:58",
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
                            "id": 48803,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "9901:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48806,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9901:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48807,
                        "nodeType": "RevertStatement",
                        "src": "9894:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48812,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48791,
                        "src": "9978:5:58",
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
                      "id": 48811,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9970:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint120_$",
                        "typeString": "type(uint120)"
                      },
                      "typeName": {
                        "id": 48810,
                        "name": "uint120",
                        "nodeType": "ElementaryTypeName",
                        "src": "9970:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9970:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint120",
                      "typeString": "uint120"
                    }
                  },
                  "functionReturnParameters": 48795,
                  "id": 48814,
                  "nodeType": "Return",
                  "src": "9963:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48789,
              "nodeType": "StructuredDocumentation",
              "src": "9488:280:58",
              "text": " @dev Returns the downcasted uint120 from uint256, reverting on\n overflow (when the input is greater than largest uint120).\n Counterpart to Solidity's `uint120` operator.\n Requirements:\n - input must fit into 120 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint120",
            "nameLocation": "9782:9:58",
            "parameters": {
              "id": 48792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48791,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9800:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48816,
                  "src": "9792:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48790,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9792:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9791:15:58"
            },
            "returnParameters": {
              "id": 48795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48794,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48816,
                  "src": "9830:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint120",
                    "typeString": "uint120"
                  },
                  "typeName": {
                    "id": 48793,
                    "name": "uint120",
                    "nodeType": "ElementaryTypeName",
                    "src": "9830:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint120",
                      "typeString": "uint120"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9829:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48844,
            "nodeType": "FunctionDefinition",
            "src": "10282:218:58",
            "nodes": [],
            "body": {
              "id": 48843,
              "nodeType": "Block",
              "src": "10348:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48824,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48819,
                      "src": "10362:5:58",
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
                            "id": 48827,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10375:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint112_$",
                              "typeString": "type(uint112)"
                            },
                            "typeName": {
                              "id": 48826,
                              "name": "uint112",
                              "nodeType": "ElementaryTypeName",
                              "src": "10375:7:58",
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
                          "id": 48825,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "10370:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48828,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10370:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint112",
                          "typeString": "type(uint112)"
                        }
                      },
                      "id": 48829,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "10384:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "10370:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint112",
                        "typeString": "uint112"
                      }
                    },
                    "src": "10362:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48837,
                  "nodeType": "IfStatement",
                  "src": "10358:105:58",
                  "trueBody": {
                    "id": 48836,
                    "nodeType": "Block",
                    "src": "10389:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313132",
                              "id": 48832,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10441:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_112_by_1",
                                "typeString": "int_const 112"
                              },
                              "value": "112"
                            },
                            {
                              "id": 48833,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48819,
                              "src": "10446:5:58",
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
                            "id": 48831,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "10410:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10410:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48835,
                        "nodeType": "RevertStatement",
                        "src": "10403:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48840,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48819,
                        "src": "10487:5:58",
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
                      "id": 48839,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "10479:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint112_$",
                        "typeString": "type(uint112)"
                      },
                      "typeName": {
                        "id": 48838,
                        "name": "uint112",
                        "nodeType": "ElementaryTypeName",
                        "src": "10479:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48841,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10479:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint112",
                      "typeString": "uint112"
                    }
                  },
                  "functionReturnParameters": 48823,
                  "id": 48842,
                  "nodeType": "Return",
                  "src": "10472:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48817,
              "nodeType": "StructuredDocumentation",
              "src": "9997:280:58",
              "text": " @dev Returns the downcasted uint112 from uint256, reverting on\n overflow (when the input is greater than largest uint112).\n Counterpart to Solidity's `uint112` operator.\n Requirements:\n - input must fit into 112 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint112",
            "nameLocation": "10291:9:58",
            "parameters": {
              "id": 48820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48819,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10309:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48844,
                  "src": "10301:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48818,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10301:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10300:15:58"
            },
            "returnParameters": {
              "id": 48823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48822,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48844,
                  "src": "10339:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint112",
                    "typeString": "uint112"
                  },
                  "typeName": {
                    "id": 48821,
                    "name": "uint112",
                    "nodeType": "ElementaryTypeName",
                    "src": "10339:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint112",
                      "typeString": "uint112"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10338:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48872,
            "nodeType": "FunctionDefinition",
            "src": "10791:218:58",
            "nodes": [],
            "body": {
              "id": 48871,
              "nodeType": "Block",
              "src": "10857:152:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48852,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48847,
                      "src": "10871:5:58",
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
                            "id": 48855,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10884:7:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint104_$",
                              "typeString": "type(uint104)"
                            },
                            "typeName": {
                              "id": 48854,
                              "name": "uint104",
                              "nodeType": "ElementaryTypeName",
                              "src": "10884:7:58",
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
                          "id": 48853,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "10879:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48856,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10879:13:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint104",
                          "typeString": "type(uint104)"
                        }
                      },
                      "id": 48857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "10893:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "10879:17:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint104",
                        "typeString": "uint104"
                      }
                    },
                    "src": "10871:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48865,
                  "nodeType": "IfStatement",
                  "src": "10867:105:58",
                  "trueBody": {
                    "id": 48864,
                    "nodeType": "Block",
                    "src": "10898:74:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313034",
                              "id": 48860,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10950:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_104_by_1",
                                "typeString": "int_const 104"
                              },
                              "value": "104"
                            },
                            {
                              "id": 48861,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48847,
                              "src": "10955:5:58",
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
                            "id": 48859,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "10919:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48862,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10919:42:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48863,
                        "nodeType": "RevertStatement",
                        "src": "10912:49:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48868,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48847,
                        "src": "10996:5:58",
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
                      "id": 48867,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "10988:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint104_$",
                        "typeString": "type(uint104)"
                      },
                      "typeName": {
                        "id": 48866,
                        "name": "uint104",
                        "nodeType": "ElementaryTypeName",
                        "src": "10988:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48869,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10988:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint104",
                      "typeString": "uint104"
                    }
                  },
                  "functionReturnParameters": 48851,
                  "id": 48870,
                  "nodeType": "Return",
                  "src": "10981:21:58"
                }
              ]
            },
            "documentation": {
              "id": 48845,
              "nodeType": "StructuredDocumentation",
              "src": "10506:280:58",
              "text": " @dev Returns the downcasted uint104 from uint256, reverting on\n overflow (when the input is greater than largest uint104).\n Counterpart to Solidity's `uint104` operator.\n Requirements:\n - input must fit into 104 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint104",
            "nameLocation": "10800:9:58",
            "parameters": {
              "id": 48848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48847,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10818:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48872,
                  "src": "10810:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48846,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10810:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10809:15:58"
            },
            "returnParameters": {
              "id": 48851,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48850,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48872,
                  "src": "10848:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint104",
                    "typeString": "uint104"
                  },
                  "typeName": {
                    "id": 48849,
                    "name": "uint104",
                    "nodeType": "ElementaryTypeName",
                    "src": "10848:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint104",
                      "typeString": "uint104"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10847:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48900,
            "nodeType": "FunctionDefinition",
            "src": "11296:213:58",
            "nodes": [],
            "body": {
              "id": 48899,
              "nodeType": "Block",
              "src": "11360:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48886,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48880,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48875,
                      "src": "11374:5:58",
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
                            "id": 48883,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "11387:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint96_$",
                              "typeString": "type(uint96)"
                            },
                            "typeName": {
                              "id": 48882,
                              "name": "uint96",
                              "nodeType": "ElementaryTypeName",
                              "src": "11387:6:58",
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
                          "id": 48881,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "11382:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11382:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint96",
                          "typeString": "type(uint96)"
                        }
                      },
                      "id": 48885,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "11395:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "11382:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint96",
                        "typeString": "uint96"
                      }
                    },
                    "src": "11374:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48893,
                  "nodeType": "IfStatement",
                  "src": "11370:103:58",
                  "trueBody": {
                    "id": 48892,
                    "nodeType": "Block",
                    "src": "11400:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3936",
                              "id": 48888,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11452:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_96_by_1",
                                "typeString": "int_const 96"
                              },
                              "value": "96"
                            },
                            {
                              "id": 48889,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48875,
                              "src": "11456:5:58",
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
                            "id": 48887,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "11421:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48890,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11421:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48891,
                        "nodeType": "RevertStatement",
                        "src": "11414:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48896,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48875,
                        "src": "11496:5:58",
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
                      "id": 48895,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "11489:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint96_$",
                        "typeString": "type(uint96)"
                      },
                      "typeName": {
                        "id": 48894,
                        "name": "uint96",
                        "nodeType": "ElementaryTypeName",
                        "src": "11489:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11489:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint96",
                      "typeString": "uint96"
                    }
                  },
                  "functionReturnParameters": 48879,
                  "id": 48898,
                  "nodeType": "Return",
                  "src": "11482:20:58"
                }
              ]
            },
            "documentation": {
              "id": 48873,
              "nodeType": "StructuredDocumentation",
              "src": "11015:276:58",
              "text": " @dev Returns the downcasted uint96 from uint256, reverting on\n overflow (when the input is greater than largest uint96).\n Counterpart to Solidity's `uint96` operator.\n Requirements:\n - input must fit into 96 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint96",
            "nameLocation": "11305:8:58",
            "parameters": {
              "id": 48876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48875,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11322:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48900,
                  "src": "11314:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48874,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11314:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11313:15:58"
            },
            "returnParameters": {
              "id": 48879,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48878,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48900,
                  "src": "11352:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint96",
                    "typeString": "uint96"
                  },
                  "typeName": {
                    "id": 48877,
                    "name": "uint96",
                    "nodeType": "ElementaryTypeName",
                    "src": "11352:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint96",
                      "typeString": "uint96"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11351:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48928,
            "nodeType": "FunctionDefinition",
            "src": "11796:213:58",
            "nodes": [],
            "body": {
              "id": 48927,
              "nodeType": "Block",
              "src": "11860:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48914,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48908,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48903,
                      "src": "11874:5:58",
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
                            "id": 48911,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "11887:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint88_$",
                              "typeString": "type(uint88)"
                            },
                            "typeName": {
                              "id": 48910,
                              "name": "uint88",
                              "nodeType": "ElementaryTypeName",
                              "src": "11887:6:58",
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
                          "id": 48909,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "11882:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11882:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint88",
                          "typeString": "type(uint88)"
                        }
                      },
                      "id": 48913,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "11895:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "11882:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint88",
                        "typeString": "uint88"
                      }
                    },
                    "src": "11874:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48921,
                  "nodeType": "IfStatement",
                  "src": "11870:103:58",
                  "trueBody": {
                    "id": 48920,
                    "nodeType": "Block",
                    "src": "11900:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3838",
                              "id": 48916,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "11952:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_88_by_1",
                                "typeString": "int_const 88"
                              },
                              "value": "88"
                            },
                            {
                              "id": 48917,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48903,
                              "src": "11956:5:58",
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
                            "id": 48915,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "11921:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48918,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11921:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48919,
                        "nodeType": "RevertStatement",
                        "src": "11914:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48924,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48903,
                        "src": "11996:5:58",
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
                      "id": 48923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "11989:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint88_$",
                        "typeString": "type(uint88)"
                      },
                      "typeName": {
                        "id": 48922,
                        "name": "uint88",
                        "nodeType": "ElementaryTypeName",
                        "src": "11989:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48925,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11989:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint88",
                      "typeString": "uint88"
                    }
                  },
                  "functionReturnParameters": 48907,
                  "id": 48926,
                  "nodeType": "Return",
                  "src": "11982:20:58"
                }
              ]
            },
            "documentation": {
              "id": 48901,
              "nodeType": "StructuredDocumentation",
              "src": "11515:276:58",
              "text": " @dev Returns the downcasted uint88 from uint256, reverting on\n overflow (when the input is greater than largest uint88).\n Counterpart to Solidity's `uint88` operator.\n Requirements:\n - input must fit into 88 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint88",
            "nameLocation": "11805:8:58",
            "parameters": {
              "id": 48904,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48903,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11822:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48928,
                  "src": "11814:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48902,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11814:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11813:15:58"
            },
            "returnParameters": {
              "id": 48907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48906,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48928,
                  "src": "11852:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint88",
                    "typeString": "uint88"
                  },
                  "typeName": {
                    "id": 48905,
                    "name": "uint88",
                    "nodeType": "ElementaryTypeName",
                    "src": "11852:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint88",
                      "typeString": "uint88"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11851:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48956,
            "nodeType": "FunctionDefinition",
            "src": "12296:213:58",
            "nodes": [],
            "body": {
              "id": 48955,
              "nodeType": "Block",
              "src": "12360:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48942,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48936,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48931,
                      "src": "12374:5:58",
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
                            "id": 48939,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "12387:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint80_$",
                              "typeString": "type(uint80)"
                            },
                            "typeName": {
                              "id": 48938,
                              "name": "uint80",
                              "nodeType": "ElementaryTypeName",
                              "src": "12387:6:58",
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
                          "id": 48937,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "12382:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48940,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12382:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint80",
                          "typeString": "type(uint80)"
                        }
                      },
                      "id": 48941,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "12395:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "12382:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint80",
                        "typeString": "uint80"
                      }
                    },
                    "src": "12374:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48949,
                  "nodeType": "IfStatement",
                  "src": "12370:103:58",
                  "trueBody": {
                    "id": 48948,
                    "nodeType": "Block",
                    "src": "12400:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3830",
                              "id": 48944,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12452:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_80_by_1",
                                "typeString": "int_const 80"
                              },
                              "value": "80"
                            },
                            {
                              "id": 48945,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48931,
                              "src": "12456:5:58",
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
                            "id": 48943,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "12421:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48946,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12421:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48947,
                        "nodeType": "RevertStatement",
                        "src": "12414:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48952,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48931,
                        "src": "12496:5:58",
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
                      "id": 48951,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "12489:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint80_$",
                        "typeString": "type(uint80)"
                      },
                      "typeName": {
                        "id": 48950,
                        "name": "uint80",
                        "nodeType": "ElementaryTypeName",
                        "src": "12489:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48953,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12489:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "functionReturnParameters": 48935,
                  "id": 48954,
                  "nodeType": "Return",
                  "src": "12482:20:58"
                }
              ]
            },
            "documentation": {
              "id": 48929,
              "nodeType": "StructuredDocumentation",
              "src": "12015:276:58",
              "text": " @dev Returns the downcasted uint80 from uint256, reverting on\n overflow (when the input is greater than largest uint80).\n Counterpart to Solidity's `uint80` operator.\n Requirements:\n - input must fit into 80 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint80",
            "nameLocation": "12305:8:58",
            "parameters": {
              "id": 48932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48931,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12322:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48956,
                  "src": "12314:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48930,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12314:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12313:15:58"
            },
            "returnParameters": {
              "id": 48935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48934,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48956,
                  "src": "12352:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint80",
                    "typeString": "uint80"
                  },
                  "typeName": {
                    "id": 48933,
                    "name": "uint80",
                    "nodeType": "ElementaryTypeName",
                    "src": "12352:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint80",
                      "typeString": "uint80"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12351:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48984,
            "nodeType": "FunctionDefinition",
            "src": "12796:213:58",
            "nodes": [],
            "body": {
              "id": 48983,
              "nodeType": "Block",
              "src": "12860:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48964,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48959,
                      "src": "12874:5:58",
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
                            "id": 48967,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "12887:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint72_$",
                              "typeString": "type(uint72)"
                            },
                            "typeName": {
                              "id": 48966,
                              "name": "uint72",
                              "nodeType": "ElementaryTypeName",
                              "src": "12887:6:58",
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
                          "id": 48965,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "12882:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12882:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint72",
                          "typeString": "type(uint72)"
                        }
                      },
                      "id": 48969,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "12895:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "12882:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint72",
                        "typeString": "uint72"
                      }
                    },
                    "src": "12874:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48977,
                  "nodeType": "IfStatement",
                  "src": "12870:103:58",
                  "trueBody": {
                    "id": 48976,
                    "nodeType": "Block",
                    "src": "12900:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3732",
                              "id": 48972,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12952:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_72_by_1",
                                "typeString": "int_const 72"
                              },
                              "value": "72"
                            },
                            {
                              "id": 48973,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48959,
                              "src": "12956:5:58",
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
                            "id": 48971,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "12921:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 48974,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12921:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 48975,
                        "nodeType": "RevertStatement",
                        "src": "12914:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48980,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48959,
                        "src": "12996:5:58",
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
                      "id": 48979,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "12989:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint72_$",
                        "typeString": "type(uint72)"
                      },
                      "typeName": {
                        "id": 48978,
                        "name": "uint72",
                        "nodeType": "ElementaryTypeName",
                        "src": "12989:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48981,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12989:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint72",
                      "typeString": "uint72"
                    }
                  },
                  "functionReturnParameters": 48963,
                  "id": 48982,
                  "nodeType": "Return",
                  "src": "12982:20:58"
                }
              ]
            },
            "documentation": {
              "id": 48957,
              "nodeType": "StructuredDocumentation",
              "src": "12515:276:58",
              "text": " @dev Returns the downcasted uint72 from uint256, reverting on\n overflow (when the input is greater than largest uint72).\n Counterpart to Solidity's `uint72` operator.\n Requirements:\n - input must fit into 72 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint72",
            "nameLocation": "12805:8:58",
            "parameters": {
              "id": 48960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48959,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12822:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 48984,
                  "src": "12814:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48958,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12814:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12813:15:58"
            },
            "returnParameters": {
              "id": 48963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48962,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48984,
                  "src": "12852:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint72",
                    "typeString": "uint72"
                  },
                  "typeName": {
                    "id": 48961,
                    "name": "uint72",
                    "nodeType": "ElementaryTypeName",
                    "src": "12852:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint72",
                      "typeString": "uint72"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12851:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49012,
            "nodeType": "FunctionDefinition",
            "src": "13296:213:58",
            "nodes": [],
            "body": {
              "id": 49011,
              "nodeType": "Block",
              "src": "13360:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48998,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48992,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48987,
                      "src": "13374:5:58",
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
                            "id": 48995,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "13387:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            },
                            "typeName": {
                              "id": 48994,
                              "name": "uint64",
                              "nodeType": "ElementaryTypeName",
                              "src": "13387:6:58",
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
                          "id": 48993,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "13382:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 48996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13382:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint64",
                          "typeString": "type(uint64)"
                        }
                      },
                      "id": 48997,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "13395:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "13382:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "13374:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49005,
                  "nodeType": "IfStatement",
                  "src": "13370:103:58",
                  "trueBody": {
                    "id": 49004,
                    "nodeType": "Block",
                    "src": "13400:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3634",
                              "id": 49000,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13452:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_64_by_1",
                                "typeString": "int_const 64"
                              },
                              "value": "64"
                            },
                            {
                              "id": 49001,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48987,
                              "src": "13456:5:58",
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
                            "id": 48999,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "13421:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 49002,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13421:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49003,
                        "nodeType": "RevertStatement",
                        "src": "13414:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49008,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48987,
                        "src": "13496:5:58",
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
                      "id": 49007,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "13489:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint64_$",
                        "typeString": "type(uint64)"
                      },
                      "typeName": {
                        "id": 49006,
                        "name": "uint64",
                        "nodeType": "ElementaryTypeName",
                        "src": "13489:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 49009,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13489:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "functionReturnParameters": 48991,
                  "id": 49010,
                  "nodeType": "Return",
                  "src": "13482:20:58"
                }
              ]
            },
            "documentation": {
              "id": 48985,
              "nodeType": "StructuredDocumentation",
              "src": "13015:276:58",
              "text": " @dev Returns the downcasted uint64 from uint256, reverting on\n overflow (when the input is greater than largest uint64).\n Counterpart to Solidity's `uint64` operator.\n Requirements:\n - input must fit into 64 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint64",
            "nameLocation": "13305:8:58",
            "parameters": {
              "id": 48988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48987,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "13322:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49012,
                  "src": "13314:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48986,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13314:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13313:15:58"
            },
            "returnParameters": {
              "id": 48991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48990,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49012,
                  "src": "13352:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 48989,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "13352:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13351:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49040,
            "nodeType": "FunctionDefinition",
            "src": "13796:213:58",
            "nodes": [],
            "body": {
              "id": 49039,
              "nodeType": "Block",
              "src": "13860:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49026,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49020,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49015,
                      "src": "13874:5:58",
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
                            "id": 49023,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "13887:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint56_$",
                              "typeString": "type(uint56)"
                            },
                            "typeName": {
                              "id": 49022,
                              "name": "uint56",
                              "nodeType": "ElementaryTypeName",
                              "src": "13887:6:58",
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
                          "id": 49021,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "13882:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 49024,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13882:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint56",
                          "typeString": "type(uint56)"
                        }
                      },
                      "id": 49025,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "13895:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "13882:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint56",
                        "typeString": "uint56"
                      }
                    },
                    "src": "13874:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49033,
                  "nodeType": "IfStatement",
                  "src": "13870:103:58",
                  "trueBody": {
                    "id": 49032,
                    "nodeType": "Block",
                    "src": "13900:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3536",
                              "id": 49028,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13952:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_56_by_1",
                                "typeString": "int_const 56"
                              },
                              "value": "56"
                            },
                            {
                              "id": 49029,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49015,
                              "src": "13956:5:58",
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
                            "id": 49027,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "13921:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 49030,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13921:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49031,
                        "nodeType": "RevertStatement",
                        "src": "13914:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49036,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49015,
                        "src": "13996:5:58",
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
                      "id": 49035,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "13989:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint56_$",
                        "typeString": "type(uint56)"
                      },
                      "typeName": {
                        "id": 49034,
                        "name": "uint56",
                        "nodeType": "ElementaryTypeName",
                        "src": "13989:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 49037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13989:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint56",
                      "typeString": "uint56"
                    }
                  },
                  "functionReturnParameters": 49019,
                  "id": 49038,
                  "nodeType": "Return",
                  "src": "13982:20:58"
                }
              ]
            },
            "documentation": {
              "id": 49013,
              "nodeType": "StructuredDocumentation",
              "src": "13515:276:58",
              "text": " @dev Returns the downcasted uint56 from uint256, reverting on\n overflow (when the input is greater than largest uint56).\n Counterpart to Solidity's `uint56` operator.\n Requirements:\n - input must fit into 56 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint56",
            "nameLocation": "13805:8:58",
            "parameters": {
              "id": 49016,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49015,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "13822:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49040,
                  "src": "13814:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49014,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13814:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13813:15:58"
            },
            "returnParameters": {
              "id": 49019,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49018,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49040,
                  "src": "13852:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint56",
                    "typeString": "uint56"
                  },
                  "typeName": {
                    "id": 49017,
                    "name": "uint56",
                    "nodeType": "ElementaryTypeName",
                    "src": "13852:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint56",
                      "typeString": "uint56"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13851:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49068,
            "nodeType": "FunctionDefinition",
            "src": "14296:213:58",
            "nodes": [],
            "body": {
              "id": 49067,
              "nodeType": "Block",
              "src": "14360:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49054,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49048,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49043,
                      "src": "14374:5:58",
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
                            "id": 49051,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "14387:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint48_$",
                              "typeString": "type(uint48)"
                            },
                            "typeName": {
                              "id": 49050,
                              "name": "uint48",
                              "nodeType": "ElementaryTypeName",
                              "src": "14387:6:58",
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
                          "id": 49049,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "14382:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 49052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14382:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint48",
                          "typeString": "type(uint48)"
                        }
                      },
                      "id": 49053,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "14395:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "14382:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint48",
                        "typeString": "uint48"
                      }
                    },
                    "src": "14374:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49061,
                  "nodeType": "IfStatement",
                  "src": "14370:103:58",
                  "trueBody": {
                    "id": 49060,
                    "nodeType": "Block",
                    "src": "14400:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3438",
                              "id": 49056,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "14452:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_48_by_1",
                                "typeString": "int_const 48"
                              },
                              "value": "48"
                            },
                            {
                              "id": 49057,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49043,
                              "src": "14456:5:58",
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
                            "id": 49055,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "14421:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 49058,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14421:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49059,
                        "nodeType": "RevertStatement",
                        "src": "14414:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49064,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49043,
                        "src": "14496:5:58",
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
                      "id": 49063,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "14489:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint48_$",
                        "typeString": "type(uint48)"
                      },
                      "typeName": {
                        "id": 49062,
                        "name": "uint48",
                        "nodeType": "ElementaryTypeName",
                        "src": "14489:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 49065,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14489:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint48",
                      "typeString": "uint48"
                    }
                  },
                  "functionReturnParameters": 49047,
                  "id": 49066,
                  "nodeType": "Return",
                  "src": "14482:20:58"
                }
              ]
            },
            "documentation": {
              "id": 49041,
              "nodeType": "StructuredDocumentation",
              "src": "14015:276:58",
              "text": " @dev Returns the downcasted uint48 from uint256, reverting on\n overflow (when the input is greater than largest uint48).\n Counterpart to Solidity's `uint48` operator.\n Requirements:\n - input must fit into 48 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint48",
            "nameLocation": "14305:8:58",
            "parameters": {
              "id": 49044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49043,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "14322:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49068,
                  "src": "14314:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49042,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14314:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14313:15:58"
            },
            "returnParameters": {
              "id": 49047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49046,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49068,
                  "src": "14352:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint48",
                    "typeString": "uint48"
                  },
                  "typeName": {
                    "id": 49045,
                    "name": "uint48",
                    "nodeType": "ElementaryTypeName",
                    "src": "14352:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint48",
                      "typeString": "uint48"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14351:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49096,
            "nodeType": "FunctionDefinition",
            "src": "14796:213:58",
            "nodes": [],
            "body": {
              "id": 49095,
              "nodeType": "Block",
              "src": "14860:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49082,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49076,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49071,
                      "src": "14874:5:58",
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
                            "id": 49079,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "14887:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint40_$",
                              "typeString": "type(uint40)"
                            },
                            "typeName": {
                              "id": 49078,
                              "name": "uint40",
                              "nodeType": "ElementaryTypeName",
                              "src": "14887:6:58",
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
                          "id": 49077,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "14882:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 49080,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14882:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint40",
                          "typeString": "type(uint40)"
                        }
                      },
                      "id": 49081,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "14895:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "14882:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint40",
                        "typeString": "uint40"
                      }
                    },
                    "src": "14874:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49089,
                  "nodeType": "IfStatement",
                  "src": "14870:103:58",
                  "trueBody": {
                    "id": 49088,
                    "nodeType": "Block",
                    "src": "14900:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3430",
                              "id": 49084,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "14952:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_40_by_1",
                                "typeString": "int_const 40"
                              },
                              "value": "40"
                            },
                            {
                              "id": 49085,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49071,
                              "src": "14956:5:58",
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
                            "id": 49083,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "14921:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 49086,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14921:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49087,
                        "nodeType": "RevertStatement",
                        "src": "14914:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49092,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49071,
                        "src": "14996:5:58",
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
                      "id": 49091,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "14989:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint40_$",
                        "typeString": "type(uint40)"
                      },
                      "typeName": {
                        "id": 49090,
                        "name": "uint40",
                        "nodeType": "ElementaryTypeName",
                        "src": "14989:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 49093,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14989:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint40",
                      "typeString": "uint40"
                    }
                  },
                  "functionReturnParameters": 49075,
                  "id": 49094,
                  "nodeType": "Return",
                  "src": "14982:20:58"
                }
              ]
            },
            "documentation": {
              "id": 49069,
              "nodeType": "StructuredDocumentation",
              "src": "14515:276:58",
              "text": " @dev Returns the downcasted uint40 from uint256, reverting on\n overflow (when the input is greater than largest uint40).\n Counterpart to Solidity's `uint40` operator.\n Requirements:\n - input must fit into 40 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint40",
            "nameLocation": "14805:8:58",
            "parameters": {
              "id": 49072,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49071,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "14822:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49096,
                  "src": "14814:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49070,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14814:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14813:15:58"
            },
            "returnParameters": {
              "id": 49075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49074,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49096,
                  "src": "14852:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint40",
                    "typeString": "uint40"
                  },
                  "typeName": {
                    "id": 49073,
                    "name": "uint40",
                    "nodeType": "ElementaryTypeName",
                    "src": "14852:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint40",
                      "typeString": "uint40"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14851:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49124,
            "nodeType": "FunctionDefinition",
            "src": "15296:213:58",
            "nodes": [],
            "body": {
              "id": 49123,
              "nodeType": "Block",
              "src": "15360:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49104,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49099,
                      "src": "15374:5:58",
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
                            "id": 49107,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "15387:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint32_$",
                              "typeString": "type(uint32)"
                            },
                            "typeName": {
                              "id": 49106,
                              "name": "uint32",
                              "nodeType": "ElementaryTypeName",
                              "src": "15387:6:58",
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
                          "id": 49105,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "15382:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 49108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15382:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint32",
                          "typeString": "type(uint32)"
                        }
                      },
                      "id": 49109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "15395:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "15382:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "src": "15374:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49117,
                  "nodeType": "IfStatement",
                  "src": "15370:103:58",
                  "trueBody": {
                    "id": 49116,
                    "nodeType": "Block",
                    "src": "15400:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3332",
                              "id": 49112,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "15452:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_32_by_1",
                                "typeString": "int_const 32"
                              },
                              "value": "32"
                            },
                            {
                              "id": 49113,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49099,
                              "src": "15456:5:58",
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
                            "id": 49111,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "15421:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 49114,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15421:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49115,
                        "nodeType": "RevertStatement",
                        "src": "15414:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49120,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49099,
                        "src": "15496:5:58",
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
                      "id": 49119,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "15489:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint32_$",
                        "typeString": "type(uint32)"
                      },
                      "typeName": {
                        "id": 49118,
                        "name": "uint32",
                        "nodeType": "ElementaryTypeName",
                        "src": "15489:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 49121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15489:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "functionReturnParameters": 49103,
                  "id": 49122,
                  "nodeType": "Return",
                  "src": "15482:20:58"
                }
              ]
            },
            "documentation": {
              "id": 49097,
              "nodeType": "StructuredDocumentation",
              "src": "15015:276:58",
              "text": " @dev Returns the downcasted uint32 from uint256, reverting on\n overflow (when the input is greater than largest uint32).\n Counterpart to Solidity's `uint32` operator.\n Requirements:\n - input must fit into 32 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint32",
            "nameLocation": "15305:8:58",
            "parameters": {
              "id": 49100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49099,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "15322:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49124,
                  "src": "15314:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49098,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15314:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15313:15:58"
            },
            "returnParameters": {
              "id": 49103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49102,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49124,
                  "src": "15352:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 49101,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "15352:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15351:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49152,
            "nodeType": "FunctionDefinition",
            "src": "15796:213:58",
            "nodes": [],
            "body": {
              "id": 49151,
              "nodeType": "Block",
              "src": "15860:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49138,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49132,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49127,
                      "src": "15874:5:58",
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
                            "id": 49135,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "15887:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint24_$",
                              "typeString": "type(uint24)"
                            },
                            "typeName": {
                              "id": 49134,
                              "name": "uint24",
                              "nodeType": "ElementaryTypeName",
                              "src": "15887:6:58",
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
                          "id": 49133,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "15882:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 49136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15882:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint24",
                          "typeString": "type(uint24)"
                        }
                      },
                      "id": 49137,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "15895:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "15882:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint24",
                        "typeString": "uint24"
                      }
                    },
                    "src": "15874:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49145,
                  "nodeType": "IfStatement",
                  "src": "15870:103:58",
                  "trueBody": {
                    "id": 49144,
                    "nodeType": "Block",
                    "src": "15900:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3234",
                              "id": 49140,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "15952:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_24_by_1",
                                "typeString": "int_const 24"
                              },
                              "value": "24"
                            },
                            {
                              "id": 49141,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49127,
                              "src": "15956:5:58",
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
                            "id": 49139,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "15921:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 49142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15921:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49143,
                        "nodeType": "RevertStatement",
                        "src": "15914:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49148,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49127,
                        "src": "15996:5:58",
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
                      "id": 49147,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "15989:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint24_$",
                        "typeString": "type(uint24)"
                      },
                      "typeName": {
                        "id": 49146,
                        "name": "uint24",
                        "nodeType": "ElementaryTypeName",
                        "src": "15989:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 49149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15989:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint24",
                      "typeString": "uint24"
                    }
                  },
                  "functionReturnParameters": 49131,
                  "id": 49150,
                  "nodeType": "Return",
                  "src": "15982:20:58"
                }
              ]
            },
            "documentation": {
              "id": 49125,
              "nodeType": "StructuredDocumentation",
              "src": "15515:276:58",
              "text": " @dev Returns the downcasted uint24 from uint256, reverting on\n overflow (when the input is greater than largest uint24).\n Counterpart to Solidity's `uint24` operator.\n Requirements:\n - input must fit into 24 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint24",
            "nameLocation": "15805:8:58",
            "parameters": {
              "id": 49128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49127,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "15822:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49152,
                  "src": "15814:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49126,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15814:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15813:15:58"
            },
            "returnParameters": {
              "id": 49131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49130,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49152,
                  "src": "15852:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint24",
                    "typeString": "uint24"
                  },
                  "typeName": {
                    "id": 49129,
                    "name": "uint24",
                    "nodeType": "ElementaryTypeName",
                    "src": "15852:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint24",
                      "typeString": "uint24"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15851:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49180,
            "nodeType": "FunctionDefinition",
            "src": "16296:213:58",
            "nodes": [],
            "body": {
              "id": 49179,
              "nodeType": "Block",
              "src": "16360:149:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49160,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49155,
                      "src": "16374:5:58",
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
                            "id": 49163,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "16387:6:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint16_$",
                              "typeString": "type(uint16)"
                            },
                            "typeName": {
                              "id": 49162,
                              "name": "uint16",
                              "nodeType": "ElementaryTypeName",
                              "src": "16387:6:58",
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
                          "id": 49161,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "16382:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 49164,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16382:12:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint16",
                          "typeString": "type(uint16)"
                        }
                      },
                      "id": 49165,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "16395:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "16382:16:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint16",
                        "typeString": "uint16"
                      }
                    },
                    "src": "16374:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49173,
                  "nodeType": "IfStatement",
                  "src": "16370:103:58",
                  "trueBody": {
                    "id": 49172,
                    "nodeType": "Block",
                    "src": "16400:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3136",
                              "id": 49168,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "16452:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_16_by_1",
                                "typeString": "int_const 16"
                              },
                              "value": "16"
                            },
                            {
                              "id": 49169,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49155,
                              "src": "16456:5:58",
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
                            "id": 49167,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "16421:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 49170,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16421:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49171,
                        "nodeType": "RevertStatement",
                        "src": "16414:48:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49176,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49155,
                        "src": "16496:5:58",
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
                      "id": 49175,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "16489:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint16_$",
                        "typeString": "type(uint16)"
                      },
                      "typeName": {
                        "id": 49174,
                        "name": "uint16",
                        "nodeType": "ElementaryTypeName",
                        "src": "16489:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 49177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16489:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "functionReturnParameters": 49159,
                  "id": 49178,
                  "nodeType": "Return",
                  "src": "16482:20:58"
                }
              ]
            },
            "documentation": {
              "id": 49153,
              "nodeType": "StructuredDocumentation",
              "src": "16015:276:58",
              "text": " @dev Returns the downcasted uint16 from uint256, reverting on\n overflow (when the input is greater than largest uint16).\n Counterpart to Solidity's `uint16` operator.\n Requirements:\n - input must fit into 16 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint16",
            "nameLocation": "16305:8:58",
            "parameters": {
              "id": 49156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49155,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "16322:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49180,
                  "src": "16314:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49154,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16314:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16313:15:58"
            },
            "returnParameters": {
              "id": 49159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49158,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49180,
                  "src": "16352:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 49157,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "16352:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16351:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49208,
            "nodeType": "FunctionDefinition",
            "src": "16792:208:58",
            "nodes": [],
            "body": {
              "id": 49207,
              "nodeType": "Block",
              "src": "16854:146:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49188,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49183,
                      "src": "16868:5:58",
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
                            "id": 49191,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "16881:5:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": {
                              "id": 49190,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "16881:5:58",
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
                          "id": 49189,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "16876:4:58",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 49192,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16876:11:58",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint8",
                          "typeString": "type(uint8)"
                        }
                      },
                      "id": 49193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "16888:3:58",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "16876:15:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "16868:23:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49201,
                  "nodeType": "IfStatement",
                  "src": "16864:101:58",
                  "trueBody": {
                    "id": 49200,
                    "nodeType": "Block",
                    "src": "16893:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "38",
                              "id": 49196,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "16945:1:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_8_by_1",
                                "typeString": "int_const 8"
                              },
                              "value": "8"
                            },
                            {
                              "id": 49197,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49183,
                              "src": "16948:5:58",
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
                            "id": 49195,
                            "name": "SafeCastOverflowedUintDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48323,
                            "src": "16914:30:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint8,uint256) pure returns (error)"
                            }
                          },
                          "id": 49198,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16914:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49199,
                        "nodeType": "RevertStatement",
                        "src": "16907:47:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49204,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49183,
                        "src": "16987:5:58",
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
                      "id": 49203,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "16981:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 49202,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "16981:5:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 49205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16981:12:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 49187,
                  "id": 49206,
                  "nodeType": "Return",
                  "src": "16974:19:58"
                }
              ]
            },
            "documentation": {
              "id": 49181,
              "nodeType": "StructuredDocumentation",
              "src": "16515:272:58",
              "text": " @dev Returns the downcasted uint8 from uint256, reverting on\n overflow (when the input is greater than largest uint8).\n Counterpart to Solidity's `uint8` operator.\n Requirements:\n - input must fit into 8 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint8",
            "nameLocation": "16801:7:58",
            "parameters": {
              "id": 49184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49183,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "16817:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49208,
                  "src": "16809:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49182,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16809:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16808:15:58"
            },
            "returnParameters": {
              "id": 49187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49186,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49208,
                  "src": "16847:5:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 49185,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "16847:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16846:7:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49231,
            "nodeType": "FunctionDefinition",
            "src": "17171:193:58",
            "nodes": [],
            "body": {
              "id": 49230,
              "nodeType": "Block",
              "src": "17236:128:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49216,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49211,
                      "src": "17250:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 49217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "17258:1:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "17250:9:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49224,
                  "nodeType": "IfStatement",
                  "src": "17246:81:58",
                  "trueBody": {
                    "id": 49223,
                    "nodeType": "Block",
                    "src": "17261:66:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 49220,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49211,
                              "src": "17310:5:58",
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
                            "id": 49219,
                            "name": "SafeCastOverflowedIntToUint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48328,
                            "src": "17282:27:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_int256_$returns$_t_error_$",
                              "typeString": "function (int256) pure returns (error)"
                            }
                          },
                          "id": 49221,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17282:34:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49222,
                        "nodeType": "RevertStatement",
                        "src": "17275:41:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49227,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49211,
                        "src": "17351:5:58",
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
                      "id": 49226,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "17343:7:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 49225,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "17343:7:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 49228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17343:14:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 49215,
                  "id": 49229,
                  "nodeType": "Return",
                  "src": "17336:21:58"
                }
              ]
            },
            "documentation": {
              "id": 49209,
              "nodeType": "StructuredDocumentation",
              "src": "17006:160:58",
              "text": " @dev Converts a signed int256 into an unsigned uint256.\n Requirements:\n - input must be greater than or equal to 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint256",
            "nameLocation": "17180:9:58",
            "parameters": {
              "id": 49212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49211,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17197:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49231,
                  "src": "17190:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49210,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17190:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17189:14:58"
            },
            "returnParameters": {
              "id": 49215,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49214,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49231,
                  "src": "17227:7:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49213,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17227:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17226:9:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49257,
            "nodeType": "FunctionDefinition",
            "src": "17687:224:58",
            "nodes": [],
            "body": {
              "id": 49256,
              "nodeType": "Block",
              "src": "17761:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49239,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49237,
                      "src": "17771:10:58",
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
                          "id": 49242,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49234,
                          "src": "17791:5:58",
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
                        "id": 49241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "17784:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int248_$",
                          "typeString": "type(int248)"
                        },
                        "typeName": {
                          "id": 49240,
                          "name": "int248",
                          "nodeType": "ElementaryTypeName",
                          "src": "17784:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49243,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17784:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int248",
                        "typeString": "int248"
                      }
                    },
                    "src": "17771:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int248",
                      "typeString": "int248"
                    }
                  },
                  "id": 49245,
                  "nodeType": "ExpressionStatement",
                  "src": "17771:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49248,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49246,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49237,
                      "src": "17811:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int248",
                        "typeString": "int248"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49247,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49234,
                      "src": "17825:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "17811:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49255,
                  "nodeType": "IfStatement",
                  "src": "17807:98:58",
                  "trueBody": {
                    "id": 49254,
                    "nodeType": "Block",
                    "src": "17832:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323438",
                              "id": 49250,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "17883:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_248_by_1",
                                "typeString": "int_const 248"
                              },
                              "value": "248"
                            },
                            {
                              "id": 49251,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49234,
                              "src": "17888:5:58",
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
                            "id": 49249,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "17853:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "17853:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49253,
                        "nodeType": "RevertStatement",
                        "src": "17846:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49232,
              "nodeType": "StructuredDocumentation",
              "src": "17370:312:58",
              "text": " @dev Returns the downcasted int248 from int256, reverting on\n overflow (when the input is less than smallest int248 or\n greater than largest int248).\n Counterpart to Solidity's `int248` operator.\n Requirements:\n - input must fit into 248 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt248",
            "nameLocation": "17696:8:58",
            "parameters": {
              "id": 49235,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49234,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17712:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49257,
                  "src": "17705:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49233,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17705:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17704:14:58"
            },
            "returnParameters": {
              "id": 49238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49237,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "17749:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49257,
                  "src": "17742:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int248",
                    "typeString": "int248"
                  },
                  "typeName": {
                    "id": 49236,
                    "name": "int248",
                    "nodeType": "ElementaryTypeName",
                    "src": "17742:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int248",
                      "typeString": "int248"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17741:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49283,
            "nodeType": "FunctionDefinition",
            "src": "18234:224:58",
            "nodes": [],
            "body": {
              "id": 49282,
              "nodeType": "Block",
              "src": "18308:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49265,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49263,
                      "src": "18318:10:58",
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
                          "id": 49268,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49260,
                          "src": "18338:5:58",
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
                        "id": 49267,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "18331:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int240_$",
                          "typeString": "type(int240)"
                        },
                        "typeName": {
                          "id": 49266,
                          "name": "int240",
                          "nodeType": "ElementaryTypeName",
                          "src": "18331:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18331:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int240",
                        "typeString": "int240"
                      }
                    },
                    "src": "18318:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int240",
                      "typeString": "int240"
                    }
                  },
                  "id": 49271,
                  "nodeType": "ExpressionStatement",
                  "src": "18318:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49272,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49263,
                      "src": "18358:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int240",
                        "typeString": "int240"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49273,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49260,
                      "src": "18372:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18358:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49281,
                  "nodeType": "IfStatement",
                  "src": "18354:98:58",
                  "trueBody": {
                    "id": 49280,
                    "nodeType": "Block",
                    "src": "18379:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323430",
                              "id": 49276,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "18430:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_240_by_1",
                                "typeString": "int_const 240"
                              },
                              "value": "240"
                            },
                            {
                              "id": 49277,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49260,
                              "src": "18435:5:58",
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
                            "id": 49275,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "18400:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49278,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "18400:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49279,
                        "nodeType": "RevertStatement",
                        "src": "18393:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49258,
              "nodeType": "StructuredDocumentation",
              "src": "17917:312:58",
              "text": " @dev Returns the downcasted int240 from int256, reverting on\n overflow (when the input is less than smallest int240 or\n greater than largest int240).\n Counterpart to Solidity's `int240` operator.\n Requirements:\n - input must fit into 240 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt240",
            "nameLocation": "18243:8:58",
            "parameters": {
              "id": 49261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49260,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "18259:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49283,
                  "src": "18252:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49259,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18252:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18251:14:58"
            },
            "returnParameters": {
              "id": 49264,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49263,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "18296:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49283,
                  "src": "18289:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int240",
                    "typeString": "int240"
                  },
                  "typeName": {
                    "id": 49262,
                    "name": "int240",
                    "nodeType": "ElementaryTypeName",
                    "src": "18289:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int240",
                      "typeString": "int240"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18288:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49309,
            "nodeType": "FunctionDefinition",
            "src": "18781:224:58",
            "nodes": [],
            "body": {
              "id": 49308,
              "nodeType": "Block",
              "src": "18855:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49296,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49291,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49289,
                      "src": "18865:10:58",
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
                          "id": 49294,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49286,
                          "src": "18885:5:58",
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
                        "id": 49293,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "18878:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int232_$",
                          "typeString": "type(int232)"
                        },
                        "typeName": {
                          "id": 49292,
                          "name": "int232",
                          "nodeType": "ElementaryTypeName",
                          "src": "18878:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18878:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int232",
                        "typeString": "int232"
                      }
                    },
                    "src": "18865:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int232",
                      "typeString": "int232"
                    }
                  },
                  "id": 49297,
                  "nodeType": "ExpressionStatement",
                  "src": "18865:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49298,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49289,
                      "src": "18905:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int232",
                        "typeString": "int232"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49299,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49286,
                      "src": "18919:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "18905:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49307,
                  "nodeType": "IfStatement",
                  "src": "18901:98:58",
                  "trueBody": {
                    "id": 49306,
                    "nodeType": "Block",
                    "src": "18926:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323332",
                              "id": 49302,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "18977:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_232_by_1",
                                "typeString": "int_const 232"
                              },
                              "value": "232"
                            },
                            {
                              "id": 49303,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49286,
                              "src": "18982:5:58",
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
                            "id": 49301,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "18947:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49304,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "18947:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49305,
                        "nodeType": "RevertStatement",
                        "src": "18940:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49284,
              "nodeType": "StructuredDocumentation",
              "src": "18464:312:58",
              "text": " @dev Returns the downcasted int232 from int256, reverting on\n overflow (when the input is less than smallest int232 or\n greater than largest int232).\n Counterpart to Solidity's `int232` operator.\n Requirements:\n - input must fit into 232 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt232",
            "nameLocation": "18790:8:58",
            "parameters": {
              "id": 49287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49286,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "18806:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49309,
                  "src": "18799:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49285,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18799:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18798:14:58"
            },
            "returnParameters": {
              "id": 49290,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49289,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "18843:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49309,
                  "src": "18836:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int232",
                    "typeString": "int232"
                  },
                  "typeName": {
                    "id": 49288,
                    "name": "int232",
                    "nodeType": "ElementaryTypeName",
                    "src": "18836:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int232",
                      "typeString": "int232"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18835:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49335,
            "nodeType": "FunctionDefinition",
            "src": "19328:224:58",
            "nodes": [],
            "body": {
              "id": 49334,
              "nodeType": "Block",
              "src": "19402:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49317,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49315,
                      "src": "19412:10:58",
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
                          "id": 49320,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49312,
                          "src": "19432:5:58",
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
                        "id": 49319,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "19425:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int224_$",
                          "typeString": "type(int224)"
                        },
                        "typeName": {
                          "id": 49318,
                          "name": "int224",
                          "nodeType": "ElementaryTypeName",
                          "src": "19425:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49321,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19425:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int224",
                        "typeString": "int224"
                      }
                    },
                    "src": "19412:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int224",
                      "typeString": "int224"
                    }
                  },
                  "id": 49323,
                  "nodeType": "ExpressionStatement",
                  "src": "19412:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49324,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49315,
                      "src": "19452:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int224",
                        "typeString": "int224"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49325,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49312,
                      "src": "19466:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "19452:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49333,
                  "nodeType": "IfStatement",
                  "src": "19448:98:58",
                  "trueBody": {
                    "id": 49332,
                    "nodeType": "Block",
                    "src": "19473:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323234",
                              "id": 49328,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "19524:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_224_by_1",
                                "typeString": "int_const 224"
                              },
                              "value": "224"
                            },
                            {
                              "id": 49329,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49312,
                              "src": "19529:5:58",
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
                            "id": 49327,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "19494:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49330,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "19494:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49331,
                        "nodeType": "RevertStatement",
                        "src": "19487:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49310,
              "nodeType": "StructuredDocumentation",
              "src": "19011:312:58",
              "text": " @dev Returns the downcasted int224 from int256, reverting on\n overflow (when the input is less than smallest int224 or\n greater than largest int224).\n Counterpart to Solidity's `int224` operator.\n Requirements:\n - input must fit into 224 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt224",
            "nameLocation": "19337:8:58",
            "parameters": {
              "id": 49313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49312,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "19353:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49335,
                  "src": "19346:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49311,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19346:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19345:14:58"
            },
            "returnParameters": {
              "id": 49316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49315,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "19390:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49335,
                  "src": "19383:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int224",
                    "typeString": "int224"
                  },
                  "typeName": {
                    "id": 49314,
                    "name": "int224",
                    "nodeType": "ElementaryTypeName",
                    "src": "19383:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int224",
                      "typeString": "int224"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19382:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49361,
            "nodeType": "FunctionDefinition",
            "src": "19875:224:58",
            "nodes": [],
            "body": {
              "id": 49360,
              "nodeType": "Block",
              "src": "19949:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49343,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49341,
                      "src": "19959:10:58",
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
                          "id": 49346,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49338,
                          "src": "19979:5:58",
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
                        "id": 49345,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "19972:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int216_$",
                          "typeString": "type(int216)"
                        },
                        "typeName": {
                          "id": 49344,
                          "name": "int216",
                          "nodeType": "ElementaryTypeName",
                          "src": "19972:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49347,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19972:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int216",
                        "typeString": "int216"
                      }
                    },
                    "src": "19959:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int216",
                      "typeString": "int216"
                    }
                  },
                  "id": 49349,
                  "nodeType": "ExpressionStatement",
                  "src": "19959:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49352,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49350,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49341,
                      "src": "19999:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int216",
                        "typeString": "int216"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49351,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49338,
                      "src": "20013:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "19999:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49359,
                  "nodeType": "IfStatement",
                  "src": "19995:98:58",
                  "trueBody": {
                    "id": 49358,
                    "nodeType": "Block",
                    "src": "20020:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323136",
                              "id": 49354,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "20071:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_216_by_1",
                                "typeString": "int_const 216"
                              },
                              "value": "216"
                            },
                            {
                              "id": 49355,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49338,
                              "src": "20076:5:58",
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
                            "id": 49353,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "20041:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49356,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20041:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49357,
                        "nodeType": "RevertStatement",
                        "src": "20034:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49336,
              "nodeType": "StructuredDocumentation",
              "src": "19558:312:58",
              "text": " @dev Returns the downcasted int216 from int256, reverting on\n overflow (when the input is less than smallest int216 or\n greater than largest int216).\n Counterpart to Solidity's `int216` operator.\n Requirements:\n - input must fit into 216 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt216",
            "nameLocation": "19884:8:58",
            "parameters": {
              "id": 49339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49338,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "19900:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49361,
                  "src": "19893:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49337,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19893:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19892:14:58"
            },
            "returnParameters": {
              "id": 49342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49341,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "19937:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49361,
                  "src": "19930:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int216",
                    "typeString": "int216"
                  },
                  "typeName": {
                    "id": 49340,
                    "name": "int216",
                    "nodeType": "ElementaryTypeName",
                    "src": "19930:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int216",
                      "typeString": "int216"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19929:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49387,
            "nodeType": "FunctionDefinition",
            "src": "20422:224:58",
            "nodes": [],
            "body": {
              "id": 49386,
              "nodeType": "Block",
              "src": "20496:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49374,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49369,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49367,
                      "src": "20506:10:58",
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
                          "id": 49372,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49364,
                          "src": "20526:5:58",
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
                        "id": 49371,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "20519:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int208_$",
                          "typeString": "type(int208)"
                        },
                        "typeName": {
                          "id": 49370,
                          "name": "int208",
                          "nodeType": "ElementaryTypeName",
                          "src": "20519:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49373,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20519:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int208",
                        "typeString": "int208"
                      }
                    },
                    "src": "20506:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int208",
                      "typeString": "int208"
                    }
                  },
                  "id": 49375,
                  "nodeType": "ExpressionStatement",
                  "src": "20506:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49376,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49367,
                      "src": "20546:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int208",
                        "typeString": "int208"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49377,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49364,
                      "src": "20560:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20546:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49385,
                  "nodeType": "IfStatement",
                  "src": "20542:98:58",
                  "trueBody": {
                    "id": 49384,
                    "nodeType": "Block",
                    "src": "20567:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323038",
                              "id": 49380,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "20618:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_208_by_1",
                                "typeString": "int_const 208"
                              },
                              "value": "208"
                            },
                            {
                              "id": 49381,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49364,
                              "src": "20623:5:58",
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
                            "id": 49379,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "20588:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49382,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20588:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49383,
                        "nodeType": "RevertStatement",
                        "src": "20581:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49362,
              "nodeType": "StructuredDocumentation",
              "src": "20105:312:58",
              "text": " @dev Returns the downcasted int208 from int256, reverting on\n overflow (when the input is less than smallest int208 or\n greater than largest int208).\n Counterpart to Solidity's `int208` operator.\n Requirements:\n - input must fit into 208 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt208",
            "nameLocation": "20431:8:58",
            "parameters": {
              "id": 49365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49364,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "20447:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49387,
                  "src": "20440:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49363,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20440:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20439:14:58"
            },
            "returnParameters": {
              "id": 49368,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49367,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "20484:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49387,
                  "src": "20477:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int208",
                    "typeString": "int208"
                  },
                  "typeName": {
                    "id": 49366,
                    "name": "int208",
                    "nodeType": "ElementaryTypeName",
                    "src": "20477:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int208",
                      "typeString": "int208"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20476:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49413,
            "nodeType": "FunctionDefinition",
            "src": "20969:224:58",
            "nodes": [],
            "body": {
              "id": 49412,
              "nodeType": "Block",
              "src": "21043:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49395,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49393,
                      "src": "21053:10:58",
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
                          "id": 49398,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49390,
                          "src": "21073:5:58",
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
                        "id": 49397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "21066:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int200_$",
                          "typeString": "type(int200)"
                        },
                        "typeName": {
                          "id": 49396,
                          "name": "int200",
                          "nodeType": "ElementaryTypeName",
                          "src": "21066:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21066:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int200",
                        "typeString": "int200"
                      }
                    },
                    "src": "21053:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int200",
                      "typeString": "int200"
                    }
                  },
                  "id": 49401,
                  "nodeType": "ExpressionStatement",
                  "src": "21053:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49402,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49393,
                      "src": "21093:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int200",
                        "typeString": "int200"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49403,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49390,
                      "src": "21107:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "21093:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49411,
                  "nodeType": "IfStatement",
                  "src": "21089:98:58",
                  "trueBody": {
                    "id": 49410,
                    "nodeType": "Block",
                    "src": "21114:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "323030",
                              "id": 49406,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "21165:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_200_by_1",
                                "typeString": "int_const 200"
                              },
                              "value": "200"
                            },
                            {
                              "id": 49407,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49390,
                              "src": "21170:5:58",
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
                            "id": 49405,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "21135:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "21135:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49409,
                        "nodeType": "RevertStatement",
                        "src": "21128:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49388,
              "nodeType": "StructuredDocumentation",
              "src": "20652:312:58",
              "text": " @dev Returns the downcasted int200 from int256, reverting on\n overflow (when the input is less than smallest int200 or\n greater than largest int200).\n Counterpart to Solidity's `int200` operator.\n Requirements:\n - input must fit into 200 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt200",
            "nameLocation": "20978:8:58",
            "parameters": {
              "id": 49391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49390,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "20994:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49413,
                  "src": "20987:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49389,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20987:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20986:14:58"
            },
            "returnParameters": {
              "id": 49394,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49393,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "21031:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49413,
                  "src": "21024:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int200",
                    "typeString": "int200"
                  },
                  "typeName": {
                    "id": 49392,
                    "name": "int200",
                    "nodeType": "ElementaryTypeName",
                    "src": "21024:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int200",
                      "typeString": "int200"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21023:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49439,
            "nodeType": "FunctionDefinition",
            "src": "21516:224:58",
            "nodes": [],
            "body": {
              "id": 49438,
              "nodeType": "Block",
              "src": "21590:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49421,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49419,
                      "src": "21600:10:58",
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
                          "id": 49424,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49416,
                          "src": "21620:5:58",
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
                        "id": 49423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "21613:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int192_$",
                          "typeString": "type(int192)"
                        },
                        "typeName": {
                          "id": 49422,
                          "name": "int192",
                          "nodeType": "ElementaryTypeName",
                          "src": "21613:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49425,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21613:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int192",
                        "typeString": "int192"
                      }
                    },
                    "src": "21600:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int192",
                      "typeString": "int192"
                    }
                  },
                  "id": 49427,
                  "nodeType": "ExpressionStatement",
                  "src": "21600:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49428,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49419,
                      "src": "21640:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int192",
                        "typeString": "int192"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49429,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49416,
                      "src": "21654:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "21640:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49437,
                  "nodeType": "IfStatement",
                  "src": "21636:98:58",
                  "trueBody": {
                    "id": 49436,
                    "nodeType": "Block",
                    "src": "21661:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313932",
                              "id": 49432,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "21712:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_192_by_1",
                                "typeString": "int_const 192"
                              },
                              "value": "192"
                            },
                            {
                              "id": 49433,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49416,
                              "src": "21717:5:58",
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
                            "id": 49431,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "21682:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49434,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "21682:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49435,
                        "nodeType": "RevertStatement",
                        "src": "21675:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49414,
              "nodeType": "StructuredDocumentation",
              "src": "21199:312:58",
              "text": " @dev Returns the downcasted int192 from int256, reverting on\n overflow (when the input is less than smallest int192 or\n greater than largest int192).\n Counterpart to Solidity's `int192` operator.\n Requirements:\n - input must fit into 192 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt192",
            "nameLocation": "21525:8:58",
            "parameters": {
              "id": 49417,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49416,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "21541:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49439,
                  "src": "21534:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49415,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21534:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21533:14:58"
            },
            "returnParameters": {
              "id": 49420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49419,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "21578:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49439,
                  "src": "21571:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int192",
                    "typeString": "int192"
                  },
                  "typeName": {
                    "id": 49418,
                    "name": "int192",
                    "nodeType": "ElementaryTypeName",
                    "src": "21571:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int192",
                      "typeString": "int192"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21570:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49465,
            "nodeType": "FunctionDefinition",
            "src": "22063:224:58",
            "nodes": [],
            "body": {
              "id": 49464,
              "nodeType": "Block",
              "src": "22137:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49452,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49447,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49445,
                      "src": "22147:10:58",
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
                          "id": 49450,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49442,
                          "src": "22167:5:58",
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
                        "id": 49449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "22160:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int184_$",
                          "typeString": "type(int184)"
                        },
                        "typeName": {
                          "id": 49448,
                          "name": "int184",
                          "nodeType": "ElementaryTypeName",
                          "src": "22160:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49451,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "22160:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int184",
                        "typeString": "int184"
                      }
                    },
                    "src": "22147:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int184",
                      "typeString": "int184"
                    }
                  },
                  "id": 49453,
                  "nodeType": "ExpressionStatement",
                  "src": "22147:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49454,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49445,
                      "src": "22187:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int184",
                        "typeString": "int184"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49455,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49442,
                      "src": "22201:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "22187:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49463,
                  "nodeType": "IfStatement",
                  "src": "22183:98:58",
                  "trueBody": {
                    "id": 49462,
                    "nodeType": "Block",
                    "src": "22208:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313834",
                              "id": 49458,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "22259:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_184_by_1",
                                "typeString": "int_const 184"
                              },
                              "value": "184"
                            },
                            {
                              "id": 49459,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49442,
                              "src": "22264:5:58",
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
                            "id": 49457,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "22229:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "22229:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49461,
                        "nodeType": "RevertStatement",
                        "src": "22222:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49440,
              "nodeType": "StructuredDocumentation",
              "src": "21746:312:58",
              "text": " @dev Returns the downcasted int184 from int256, reverting on\n overflow (when the input is less than smallest int184 or\n greater than largest int184).\n Counterpart to Solidity's `int184` operator.\n Requirements:\n - input must fit into 184 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt184",
            "nameLocation": "22072:8:58",
            "parameters": {
              "id": 49443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49442,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "22088:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49465,
                  "src": "22081:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49441,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22081:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22080:14:58"
            },
            "returnParameters": {
              "id": 49446,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49445,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "22125:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49465,
                  "src": "22118:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int184",
                    "typeString": "int184"
                  },
                  "typeName": {
                    "id": 49444,
                    "name": "int184",
                    "nodeType": "ElementaryTypeName",
                    "src": "22118:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int184",
                      "typeString": "int184"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22117:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49491,
            "nodeType": "FunctionDefinition",
            "src": "22610:224:58",
            "nodes": [],
            "body": {
              "id": 49490,
              "nodeType": "Block",
              "src": "22684:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49478,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49473,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49471,
                      "src": "22694:10:58",
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
                          "id": 49476,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49468,
                          "src": "22714:5:58",
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
                        "id": 49475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "22707:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int176_$",
                          "typeString": "type(int176)"
                        },
                        "typeName": {
                          "id": 49474,
                          "name": "int176",
                          "nodeType": "ElementaryTypeName",
                          "src": "22707:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49477,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "22707:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int176",
                        "typeString": "int176"
                      }
                    },
                    "src": "22694:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int176",
                      "typeString": "int176"
                    }
                  },
                  "id": 49479,
                  "nodeType": "ExpressionStatement",
                  "src": "22694:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49482,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49480,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49471,
                      "src": "22734:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int176",
                        "typeString": "int176"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49481,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49468,
                      "src": "22748:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "22734:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49489,
                  "nodeType": "IfStatement",
                  "src": "22730:98:58",
                  "trueBody": {
                    "id": 49488,
                    "nodeType": "Block",
                    "src": "22755:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313736",
                              "id": 49484,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "22806:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_176_by_1",
                                "typeString": "int_const 176"
                              },
                              "value": "176"
                            },
                            {
                              "id": 49485,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49468,
                              "src": "22811:5:58",
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
                            "id": 49483,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "22776:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49486,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "22776:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49487,
                        "nodeType": "RevertStatement",
                        "src": "22769:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49466,
              "nodeType": "StructuredDocumentation",
              "src": "22293:312:58",
              "text": " @dev Returns the downcasted int176 from int256, reverting on\n overflow (when the input is less than smallest int176 or\n greater than largest int176).\n Counterpart to Solidity's `int176` operator.\n Requirements:\n - input must fit into 176 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt176",
            "nameLocation": "22619:8:58",
            "parameters": {
              "id": 49469,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49468,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "22635:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49491,
                  "src": "22628:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49467,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22628:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22627:14:58"
            },
            "returnParameters": {
              "id": 49472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49471,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "22672:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49491,
                  "src": "22665:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int176",
                    "typeString": "int176"
                  },
                  "typeName": {
                    "id": 49470,
                    "name": "int176",
                    "nodeType": "ElementaryTypeName",
                    "src": "22665:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int176",
                      "typeString": "int176"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22664:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49517,
            "nodeType": "FunctionDefinition",
            "src": "23157:224:58",
            "nodes": [],
            "body": {
              "id": 49516,
              "nodeType": "Block",
              "src": "23231:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49504,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49499,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49497,
                      "src": "23241:10:58",
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
                          "id": 49502,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49494,
                          "src": "23261:5:58",
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
                        "id": 49501,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "23254:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int168_$",
                          "typeString": "type(int168)"
                        },
                        "typeName": {
                          "id": 49500,
                          "name": "int168",
                          "nodeType": "ElementaryTypeName",
                          "src": "23254:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49503,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "23254:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int168",
                        "typeString": "int168"
                      }
                    },
                    "src": "23241:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int168",
                      "typeString": "int168"
                    }
                  },
                  "id": 49505,
                  "nodeType": "ExpressionStatement",
                  "src": "23241:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49508,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49506,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49497,
                      "src": "23281:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int168",
                        "typeString": "int168"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49507,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49494,
                      "src": "23295:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "23281:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49515,
                  "nodeType": "IfStatement",
                  "src": "23277:98:58",
                  "trueBody": {
                    "id": 49514,
                    "nodeType": "Block",
                    "src": "23302:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313638",
                              "id": 49510,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "23353:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_168_by_1",
                                "typeString": "int_const 168"
                              },
                              "value": "168"
                            },
                            {
                              "id": 49511,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49494,
                              "src": "23358:5:58",
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
                            "id": 49509,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "23323:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49512,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23323:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49513,
                        "nodeType": "RevertStatement",
                        "src": "23316:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49492,
              "nodeType": "StructuredDocumentation",
              "src": "22840:312:58",
              "text": " @dev Returns the downcasted int168 from int256, reverting on\n overflow (when the input is less than smallest int168 or\n greater than largest int168).\n Counterpart to Solidity's `int168` operator.\n Requirements:\n - input must fit into 168 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt168",
            "nameLocation": "23166:8:58",
            "parameters": {
              "id": 49495,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49494,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "23182:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49517,
                  "src": "23175:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49493,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23175:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23174:14:58"
            },
            "returnParameters": {
              "id": 49498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49497,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "23219:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49517,
                  "src": "23212:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int168",
                    "typeString": "int168"
                  },
                  "typeName": {
                    "id": 49496,
                    "name": "int168",
                    "nodeType": "ElementaryTypeName",
                    "src": "23212:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int168",
                      "typeString": "int168"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23211:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49543,
            "nodeType": "FunctionDefinition",
            "src": "23704:224:58",
            "nodes": [],
            "body": {
              "id": 49542,
              "nodeType": "Block",
              "src": "23778:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49530,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49525,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49523,
                      "src": "23788:10:58",
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
                          "id": 49528,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49520,
                          "src": "23808:5:58",
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
                        "id": 49527,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "23801:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int160_$",
                          "typeString": "type(int160)"
                        },
                        "typeName": {
                          "id": 49526,
                          "name": "int160",
                          "nodeType": "ElementaryTypeName",
                          "src": "23801:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49529,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "23801:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int160",
                        "typeString": "int160"
                      }
                    },
                    "src": "23788:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int160",
                      "typeString": "int160"
                    }
                  },
                  "id": 49531,
                  "nodeType": "ExpressionStatement",
                  "src": "23788:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49532,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49523,
                      "src": "23828:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int160",
                        "typeString": "int160"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49533,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49520,
                      "src": "23842:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "23828:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49541,
                  "nodeType": "IfStatement",
                  "src": "23824:98:58",
                  "trueBody": {
                    "id": 49540,
                    "nodeType": "Block",
                    "src": "23849:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313630",
                              "id": 49536,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "23900:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_160_by_1",
                                "typeString": "int_const 160"
                              },
                              "value": "160"
                            },
                            {
                              "id": 49537,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49520,
                              "src": "23905:5:58",
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
                            "id": 49535,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "23870:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23870:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49539,
                        "nodeType": "RevertStatement",
                        "src": "23863:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49518,
              "nodeType": "StructuredDocumentation",
              "src": "23387:312:58",
              "text": " @dev Returns the downcasted int160 from int256, reverting on\n overflow (when the input is less than smallest int160 or\n greater than largest int160).\n Counterpart to Solidity's `int160` operator.\n Requirements:\n - input must fit into 160 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt160",
            "nameLocation": "23713:8:58",
            "parameters": {
              "id": 49521,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49520,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "23729:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49543,
                  "src": "23722:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49519,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23722:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23721:14:58"
            },
            "returnParameters": {
              "id": 49524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49523,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "23766:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49543,
                  "src": "23759:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int160",
                    "typeString": "int160"
                  },
                  "typeName": {
                    "id": 49522,
                    "name": "int160",
                    "nodeType": "ElementaryTypeName",
                    "src": "23759:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int160",
                      "typeString": "int160"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23758:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49569,
            "nodeType": "FunctionDefinition",
            "src": "24251:224:58",
            "nodes": [],
            "body": {
              "id": 49568,
              "nodeType": "Block",
              "src": "24325:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49551,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49549,
                      "src": "24335:10:58",
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
                          "id": 49554,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49546,
                          "src": "24355:5:58",
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
                        "id": 49553,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "24348:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int152_$",
                          "typeString": "type(int152)"
                        },
                        "typeName": {
                          "id": 49552,
                          "name": "int152",
                          "nodeType": "ElementaryTypeName",
                          "src": "24348:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49555,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24348:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int152",
                        "typeString": "int152"
                      }
                    },
                    "src": "24335:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int152",
                      "typeString": "int152"
                    }
                  },
                  "id": 49557,
                  "nodeType": "ExpressionStatement",
                  "src": "24335:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49560,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49558,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49549,
                      "src": "24375:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int152",
                        "typeString": "int152"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49559,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49546,
                      "src": "24389:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "24375:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49567,
                  "nodeType": "IfStatement",
                  "src": "24371:98:58",
                  "trueBody": {
                    "id": 49566,
                    "nodeType": "Block",
                    "src": "24396:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313532",
                              "id": 49562,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "24447:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_152_by_1",
                                "typeString": "int_const 152"
                              },
                              "value": "152"
                            },
                            {
                              "id": 49563,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49546,
                              "src": "24452:5:58",
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
                            "id": 49561,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "24417:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "24417:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49565,
                        "nodeType": "RevertStatement",
                        "src": "24410:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49544,
              "nodeType": "StructuredDocumentation",
              "src": "23934:312:58",
              "text": " @dev Returns the downcasted int152 from int256, reverting on\n overflow (when the input is less than smallest int152 or\n greater than largest int152).\n Counterpart to Solidity's `int152` operator.\n Requirements:\n - input must fit into 152 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt152",
            "nameLocation": "24260:8:58",
            "parameters": {
              "id": 49547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49546,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "24276:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49569,
                  "src": "24269:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49545,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24269:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24268:14:58"
            },
            "returnParameters": {
              "id": 49550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49549,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "24313:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49569,
                  "src": "24306:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int152",
                    "typeString": "int152"
                  },
                  "typeName": {
                    "id": 49548,
                    "name": "int152",
                    "nodeType": "ElementaryTypeName",
                    "src": "24306:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int152",
                      "typeString": "int152"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24305:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49595,
            "nodeType": "FunctionDefinition",
            "src": "24798:224:58",
            "nodes": [],
            "body": {
              "id": 49594,
              "nodeType": "Block",
              "src": "24872:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49577,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49575,
                      "src": "24882:10:58",
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
                          "id": 49580,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49572,
                          "src": "24902:5:58",
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
                        "id": 49579,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "24895:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int144_$",
                          "typeString": "type(int144)"
                        },
                        "typeName": {
                          "id": 49578,
                          "name": "int144",
                          "nodeType": "ElementaryTypeName",
                          "src": "24895:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49581,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24895:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int144",
                        "typeString": "int144"
                      }
                    },
                    "src": "24882:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int144",
                      "typeString": "int144"
                    }
                  },
                  "id": 49583,
                  "nodeType": "ExpressionStatement",
                  "src": "24882:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49584,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49575,
                      "src": "24922:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int144",
                        "typeString": "int144"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49585,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49572,
                      "src": "24936:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "24922:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49593,
                  "nodeType": "IfStatement",
                  "src": "24918:98:58",
                  "trueBody": {
                    "id": 49592,
                    "nodeType": "Block",
                    "src": "24943:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313434",
                              "id": 49588,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "24994:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_144_by_1",
                                "typeString": "int_const 144"
                              },
                              "value": "144"
                            },
                            {
                              "id": 49589,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49572,
                              "src": "24999:5:58",
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
                            "id": 49587,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "24964:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49590,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "24964:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49591,
                        "nodeType": "RevertStatement",
                        "src": "24957:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49570,
              "nodeType": "StructuredDocumentation",
              "src": "24481:312:58",
              "text": " @dev Returns the downcasted int144 from int256, reverting on\n overflow (when the input is less than smallest int144 or\n greater than largest int144).\n Counterpart to Solidity's `int144` operator.\n Requirements:\n - input must fit into 144 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt144",
            "nameLocation": "24807:8:58",
            "parameters": {
              "id": 49573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49572,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "24823:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49595,
                  "src": "24816:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49571,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24816:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24815:14:58"
            },
            "returnParameters": {
              "id": 49576,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49575,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "24860:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49595,
                  "src": "24853:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int144",
                    "typeString": "int144"
                  },
                  "typeName": {
                    "id": 49574,
                    "name": "int144",
                    "nodeType": "ElementaryTypeName",
                    "src": "24853:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int144",
                      "typeString": "int144"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24852:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49621,
            "nodeType": "FunctionDefinition",
            "src": "25345:224:58",
            "nodes": [],
            "body": {
              "id": 49620,
              "nodeType": "Block",
              "src": "25419:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49608,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49603,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49601,
                      "src": "25429:10:58",
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
                          "id": 49606,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49598,
                          "src": "25449:5:58",
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
                        "id": 49605,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "25442:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int136_$",
                          "typeString": "type(int136)"
                        },
                        "typeName": {
                          "id": 49604,
                          "name": "int136",
                          "nodeType": "ElementaryTypeName",
                          "src": "25442:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49607,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25442:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int136",
                        "typeString": "int136"
                      }
                    },
                    "src": "25429:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int136",
                      "typeString": "int136"
                    }
                  },
                  "id": 49609,
                  "nodeType": "ExpressionStatement",
                  "src": "25429:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49610,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49601,
                      "src": "25469:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int136",
                        "typeString": "int136"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49611,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49598,
                      "src": "25483:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "25469:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49619,
                  "nodeType": "IfStatement",
                  "src": "25465:98:58",
                  "trueBody": {
                    "id": 49618,
                    "nodeType": "Block",
                    "src": "25490:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313336",
                              "id": 49614,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "25541:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_136_by_1",
                                "typeString": "int_const 136"
                              },
                              "value": "136"
                            },
                            {
                              "id": 49615,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49598,
                              "src": "25546:5:58",
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
                            "id": 49613,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "25511:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49616,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "25511:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49617,
                        "nodeType": "RevertStatement",
                        "src": "25504:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49596,
              "nodeType": "StructuredDocumentation",
              "src": "25028:312:58",
              "text": " @dev Returns the downcasted int136 from int256, reverting on\n overflow (when the input is less than smallest int136 or\n greater than largest int136).\n Counterpart to Solidity's `int136` operator.\n Requirements:\n - input must fit into 136 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt136",
            "nameLocation": "25354:8:58",
            "parameters": {
              "id": 49599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49598,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "25370:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49621,
                  "src": "25363:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49597,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25363:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25362:14:58"
            },
            "returnParameters": {
              "id": 49602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49601,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "25407:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49621,
                  "src": "25400:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int136",
                    "typeString": "int136"
                  },
                  "typeName": {
                    "id": 49600,
                    "name": "int136",
                    "nodeType": "ElementaryTypeName",
                    "src": "25400:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int136",
                      "typeString": "int136"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25399:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49647,
            "nodeType": "FunctionDefinition",
            "src": "25892:224:58",
            "nodes": [],
            "body": {
              "id": 49646,
              "nodeType": "Block",
              "src": "25966:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49634,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49629,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49627,
                      "src": "25976:10:58",
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
                          "id": 49632,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49624,
                          "src": "25996:5:58",
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
                        "id": 49631,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "25989:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int128_$",
                          "typeString": "type(int128)"
                        },
                        "typeName": {
                          "id": 49630,
                          "name": "int128",
                          "nodeType": "ElementaryTypeName",
                          "src": "25989:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49633,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25989:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "src": "25976:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "id": 49635,
                  "nodeType": "ExpressionStatement",
                  "src": "25976:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49638,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49636,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49627,
                      "src": "26016:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49637,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49624,
                      "src": "26030:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "26016:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49645,
                  "nodeType": "IfStatement",
                  "src": "26012:98:58",
                  "trueBody": {
                    "id": 49644,
                    "nodeType": "Block",
                    "src": "26037:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313238",
                              "id": 49640,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "26088:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_128_by_1",
                                "typeString": "int_const 128"
                              },
                              "value": "128"
                            },
                            {
                              "id": 49641,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49624,
                              "src": "26093:5:58",
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
                            "id": 49639,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "26058:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49642,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "26058:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49643,
                        "nodeType": "RevertStatement",
                        "src": "26051:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49622,
              "nodeType": "StructuredDocumentation",
              "src": "25575:312:58",
              "text": " @dev Returns the downcasted int128 from int256, reverting on\n overflow (when the input is less than smallest int128 or\n greater than largest int128).\n Counterpart to Solidity's `int128` operator.\n Requirements:\n - input must fit into 128 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt128",
            "nameLocation": "25901:8:58",
            "parameters": {
              "id": 49625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49624,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "25917:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49647,
                  "src": "25910:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49623,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25910:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25909:14:58"
            },
            "returnParameters": {
              "id": 49628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49627,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "25954:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49647,
                  "src": "25947:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int128",
                    "typeString": "int128"
                  },
                  "typeName": {
                    "id": 49626,
                    "name": "int128",
                    "nodeType": "ElementaryTypeName",
                    "src": "25947:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25946:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49673,
            "nodeType": "FunctionDefinition",
            "src": "26439:224:58",
            "nodes": [],
            "body": {
              "id": 49672,
              "nodeType": "Block",
              "src": "26513:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49655,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49653,
                      "src": "26523:10:58",
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
                          "id": 49658,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49650,
                          "src": "26543:5:58",
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
                        "id": 49657,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "26536:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int120_$",
                          "typeString": "type(int120)"
                        },
                        "typeName": {
                          "id": 49656,
                          "name": "int120",
                          "nodeType": "ElementaryTypeName",
                          "src": "26536:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49659,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "26536:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int120",
                        "typeString": "int120"
                      }
                    },
                    "src": "26523:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int120",
                      "typeString": "int120"
                    }
                  },
                  "id": 49661,
                  "nodeType": "ExpressionStatement",
                  "src": "26523:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49664,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49662,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49653,
                      "src": "26563:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int120",
                        "typeString": "int120"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49663,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49650,
                      "src": "26577:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "26563:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49671,
                  "nodeType": "IfStatement",
                  "src": "26559:98:58",
                  "trueBody": {
                    "id": 49670,
                    "nodeType": "Block",
                    "src": "26584:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313230",
                              "id": 49666,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "26635:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_120_by_1",
                                "typeString": "int_const 120"
                              },
                              "value": "120"
                            },
                            {
                              "id": 49667,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49650,
                              "src": "26640:5:58",
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
                            "id": 49665,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "26605:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49668,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "26605:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49669,
                        "nodeType": "RevertStatement",
                        "src": "26598:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49648,
              "nodeType": "StructuredDocumentation",
              "src": "26122:312:58",
              "text": " @dev Returns the downcasted int120 from int256, reverting on\n overflow (when the input is less than smallest int120 or\n greater than largest int120).\n Counterpart to Solidity's `int120` operator.\n Requirements:\n - input must fit into 120 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt120",
            "nameLocation": "26448:8:58",
            "parameters": {
              "id": 49651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49650,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "26464:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49673,
                  "src": "26457:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49649,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26457:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26456:14:58"
            },
            "returnParameters": {
              "id": 49654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49653,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "26501:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49673,
                  "src": "26494:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int120",
                    "typeString": "int120"
                  },
                  "typeName": {
                    "id": 49652,
                    "name": "int120",
                    "nodeType": "ElementaryTypeName",
                    "src": "26494:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int120",
                      "typeString": "int120"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26493:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49699,
            "nodeType": "FunctionDefinition",
            "src": "26986:224:58",
            "nodes": [],
            "body": {
              "id": 49698,
              "nodeType": "Block",
              "src": "27060:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49686,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49681,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49679,
                      "src": "27070:10:58",
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
                          "id": 49684,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49676,
                          "src": "27090:5:58",
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
                        "id": 49683,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "27083:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int112_$",
                          "typeString": "type(int112)"
                        },
                        "typeName": {
                          "id": 49682,
                          "name": "int112",
                          "nodeType": "ElementaryTypeName",
                          "src": "27083:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49685,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "27083:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int112",
                        "typeString": "int112"
                      }
                    },
                    "src": "27070:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int112",
                      "typeString": "int112"
                    }
                  },
                  "id": 49687,
                  "nodeType": "ExpressionStatement",
                  "src": "27070:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49690,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49688,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49679,
                      "src": "27110:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int112",
                        "typeString": "int112"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49689,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49676,
                      "src": "27124:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "27110:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49697,
                  "nodeType": "IfStatement",
                  "src": "27106:98:58",
                  "trueBody": {
                    "id": 49696,
                    "nodeType": "Block",
                    "src": "27131:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313132",
                              "id": 49692,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "27182:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_112_by_1",
                                "typeString": "int_const 112"
                              },
                              "value": "112"
                            },
                            {
                              "id": 49693,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49676,
                              "src": "27187:5:58",
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
                            "id": 49691,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "27152:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "27152:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49695,
                        "nodeType": "RevertStatement",
                        "src": "27145:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49674,
              "nodeType": "StructuredDocumentation",
              "src": "26669:312:58",
              "text": " @dev Returns the downcasted int112 from int256, reverting on\n overflow (when the input is less than smallest int112 or\n greater than largest int112).\n Counterpart to Solidity's `int112` operator.\n Requirements:\n - input must fit into 112 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt112",
            "nameLocation": "26995:8:58",
            "parameters": {
              "id": 49677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49676,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "27011:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49699,
                  "src": "27004:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49675,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27004:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27003:14:58"
            },
            "returnParameters": {
              "id": 49680,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49679,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "27048:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49699,
                  "src": "27041:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int112",
                    "typeString": "int112"
                  },
                  "typeName": {
                    "id": 49678,
                    "name": "int112",
                    "nodeType": "ElementaryTypeName",
                    "src": "27041:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int112",
                      "typeString": "int112"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27040:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49725,
            "nodeType": "FunctionDefinition",
            "src": "27533:224:58",
            "nodes": [],
            "body": {
              "id": 49724,
              "nodeType": "Block",
              "src": "27607:150:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49707,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49705,
                      "src": "27617:10:58",
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
                          "id": 49710,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49702,
                          "src": "27637:5:58",
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
                        "id": 49709,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "27630:6:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int104_$",
                          "typeString": "type(int104)"
                        },
                        "typeName": {
                          "id": 49708,
                          "name": "int104",
                          "nodeType": "ElementaryTypeName",
                          "src": "27630:6:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49711,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "27630:13:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int104",
                        "typeString": "int104"
                      }
                    },
                    "src": "27617:26:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int104",
                      "typeString": "int104"
                    }
                  },
                  "id": 49713,
                  "nodeType": "ExpressionStatement",
                  "src": "27617:26:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49714,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49705,
                      "src": "27657:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int104",
                        "typeString": "int104"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49715,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49702,
                      "src": "27671:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "27657:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49723,
                  "nodeType": "IfStatement",
                  "src": "27653:98:58",
                  "trueBody": {
                    "id": 49722,
                    "nodeType": "Block",
                    "src": "27678:73:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "313034",
                              "id": 49718,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "27729:3:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_104_by_1",
                                "typeString": "int_const 104"
                              },
                              "value": "104"
                            },
                            {
                              "id": 49719,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49702,
                              "src": "27734:5:58",
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
                            "id": 49717,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "27699:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49720,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "27699:41:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49721,
                        "nodeType": "RevertStatement",
                        "src": "27692:48:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49700,
              "nodeType": "StructuredDocumentation",
              "src": "27216:312:58",
              "text": " @dev Returns the downcasted int104 from int256, reverting on\n overflow (when the input is less than smallest int104 or\n greater than largest int104).\n Counterpart to Solidity's `int104` operator.\n Requirements:\n - input must fit into 104 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt104",
            "nameLocation": "27542:8:58",
            "parameters": {
              "id": 49703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49702,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "27558:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49725,
                  "src": "27551:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49701,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27551:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27550:14:58"
            },
            "returnParameters": {
              "id": 49706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49705,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "27595:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49725,
                  "src": "27588:17:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int104",
                    "typeString": "int104"
                  },
                  "typeName": {
                    "id": 49704,
                    "name": "int104",
                    "nodeType": "ElementaryTypeName",
                    "src": "27588:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int104",
                      "typeString": "int104"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27587:19:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49751,
            "nodeType": "FunctionDefinition",
            "src": "28075:220:58",
            "nodes": [],
            "body": {
              "id": 49750,
              "nodeType": "Block",
              "src": "28147:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49738,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49733,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49731,
                      "src": "28157:10:58",
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
                          "id": 49736,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49728,
                          "src": "28176:5:58",
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
                        "id": 49735,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "28170:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int96_$",
                          "typeString": "type(int96)"
                        },
                        "typeName": {
                          "id": 49734,
                          "name": "int96",
                          "nodeType": "ElementaryTypeName",
                          "src": "28170:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49737,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "28170:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int96",
                        "typeString": "int96"
                      }
                    },
                    "src": "28157:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int96",
                      "typeString": "int96"
                    }
                  },
                  "id": 49739,
                  "nodeType": "ExpressionStatement",
                  "src": "28157:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49742,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49740,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49731,
                      "src": "28196:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int96",
                        "typeString": "int96"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49741,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49728,
                      "src": "28210:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "28196:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49749,
                  "nodeType": "IfStatement",
                  "src": "28192:97:58",
                  "trueBody": {
                    "id": 49748,
                    "nodeType": "Block",
                    "src": "28217:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3936",
                              "id": 49744,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "28268:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_96_by_1",
                                "typeString": "int_const 96"
                              },
                              "value": "96"
                            },
                            {
                              "id": 49745,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49728,
                              "src": "28272:5:58",
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
                            "id": 49743,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "28238:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49746,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "28238:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49747,
                        "nodeType": "RevertStatement",
                        "src": "28231:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49726,
              "nodeType": "StructuredDocumentation",
              "src": "27763:307:58",
              "text": " @dev Returns the downcasted int96 from int256, reverting on\n overflow (when the input is less than smallest int96 or\n greater than largest int96).\n Counterpart to Solidity's `int96` operator.\n Requirements:\n - input must fit into 96 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt96",
            "nameLocation": "28084:7:58",
            "parameters": {
              "id": 49729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49728,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "28099:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49751,
                  "src": "28092:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49727,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28092:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28091:14:58"
            },
            "returnParameters": {
              "id": 49732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49731,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "28135:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49751,
                  "src": "28129:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int96",
                    "typeString": "int96"
                  },
                  "typeName": {
                    "id": 49730,
                    "name": "int96",
                    "nodeType": "ElementaryTypeName",
                    "src": "28129:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int96",
                      "typeString": "int96"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28128:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49777,
            "nodeType": "FunctionDefinition",
            "src": "28613:220:58",
            "nodes": [],
            "body": {
              "id": 49776,
              "nodeType": "Block",
              "src": "28685:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49764,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49759,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49757,
                      "src": "28695:10:58",
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
                          "id": 49762,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49754,
                          "src": "28714:5:58",
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
                        "id": 49761,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "28708:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int88_$",
                          "typeString": "type(int88)"
                        },
                        "typeName": {
                          "id": 49760,
                          "name": "int88",
                          "nodeType": "ElementaryTypeName",
                          "src": "28708:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49763,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "28708:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int88",
                        "typeString": "int88"
                      }
                    },
                    "src": "28695:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int88",
                      "typeString": "int88"
                    }
                  },
                  "id": 49765,
                  "nodeType": "ExpressionStatement",
                  "src": "28695:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49766,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49757,
                      "src": "28734:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int88",
                        "typeString": "int88"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49767,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49754,
                      "src": "28748:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "28734:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49775,
                  "nodeType": "IfStatement",
                  "src": "28730:97:58",
                  "trueBody": {
                    "id": 49774,
                    "nodeType": "Block",
                    "src": "28755:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3838",
                              "id": 49770,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "28806:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_88_by_1",
                                "typeString": "int_const 88"
                              },
                              "value": "88"
                            },
                            {
                              "id": 49771,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49754,
                              "src": "28810:5:58",
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
                            "id": 49769,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "28776:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49772,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "28776:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49773,
                        "nodeType": "RevertStatement",
                        "src": "28769:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49752,
              "nodeType": "StructuredDocumentation",
              "src": "28301:307:58",
              "text": " @dev Returns the downcasted int88 from int256, reverting on\n overflow (when the input is less than smallest int88 or\n greater than largest int88).\n Counterpart to Solidity's `int88` operator.\n Requirements:\n - input must fit into 88 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt88",
            "nameLocation": "28622:7:58",
            "parameters": {
              "id": 49755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49754,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "28637:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49777,
                  "src": "28630:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49753,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28630:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28629:14:58"
            },
            "returnParameters": {
              "id": 49758,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49757,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "28673:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49777,
                  "src": "28667:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int88",
                    "typeString": "int88"
                  },
                  "typeName": {
                    "id": 49756,
                    "name": "int88",
                    "nodeType": "ElementaryTypeName",
                    "src": "28667:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int88",
                      "typeString": "int88"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28666:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49803,
            "nodeType": "FunctionDefinition",
            "src": "29151:220:58",
            "nodes": [],
            "body": {
              "id": 49802,
              "nodeType": "Block",
              "src": "29223:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49785,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49783,
                      "src": "29233:10:58",
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
                          "id": 49788,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49780,
                          "src": "29252:5:58",
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
                        "id": 49787,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "29246:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int80_$",
                          "typeString": "type(int80)"
                        },
                        "typeName": {
                          "id": 49786,
                          "name": "int80",
                          "nodeType": "ElementaryTypeName",
                          "src": "29246:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49789,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "29246:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int80",
                        "typeString": "int80"
                      }
                    },
                    "src": "29233:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int80",
                      "typeString": "int80"
                    }
                  },
                  "id": 49791,
                  "nodeType": "ExpressionStatement",
                  "src": "29233:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49792,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49783,
                      "src": "29272:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int80",
                        "typeString": "int80"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49793,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49780,
                      "src": "29286:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "29272:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49801,
                  "nodeType": "IfStatement",
                  "src": "29268:97:58",
                  "trueBody": {
                    "id": 49800,
                    "nodeType": "Block",
                    "src": "29293:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3830",
                              "id": 49796,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "29344:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_80_by_1",
                                "typeString": "int_const 80"
                              },
                              "value": "80"
                            },
                            {
                              "id": 49797,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49780,
                              "src": "29348:5:58",
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
                            "id": 49795,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "29314:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49798,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "29314:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49799,
                        "nodeType": "RevertStatement",
                        "src": "29307:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49778,
              "nodeType": "StructuredDocumentation",
              "src": "28839:307:58",
              "text": " @dev Returns the downcasted int80 from int256, reverting on\n overflow (when the input is less than smallest int80 or\n greater than largest int80).\n Counterpart to Solidity's `int80` operator.\n Requirements:\n - input must fit into 80 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt80",
            "nameLocation": "29160:7:58",
            "parameters": {
              "id": 49781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49780,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "29175:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49803,
                  "src": "29168:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49779,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29168:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29167:14:58"
            },
            "returnParameters": {
              "id": 49784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49783,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "29211:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49803,
                  "src": "29205:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int80",
                    "typeString": "int80"
                  },
                  "typeName": {
                    "id": 49782,
                    "name": "int80",
                    "nodeType": "ElementaryTypeName",
                    "src": "29205:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int80",
                      "typeString": "int80"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29204:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49829,
            "nodeType": "FunctionDefinition",
            "src": "29689:220:58",
            "nodes": [],
            "body": {
              "id": 49828,
              "nodeType": "Block",
              "src": "29761:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49816,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49811,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49809,
                      "src": "29771:10:58",
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
                          "id": 49814,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49806,
                          "src": "29790:5:58",
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
                        "id": 49813,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "29784:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int72_$",
                          "typeString": "type(int72)"
                        },
                        "typeName": {
                          "id": 49812,
                          "name": "int72",
                          "nodeType": "ElementaryTypeName",
                          "src": "29784:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49815,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "29784:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int72",
                        "typeString": "int72"
                      }
                    },
                    "src": "29771:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int72",
                      "typeString": "int72"
                    }
                  },
                  "id": 49817,
                  "nodeType": "ExpressionStatement",
                  "src": "29771:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49818,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49809,
                      "src": "29810:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int72",
                        "typeString": "int72"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49819,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49806,
                      "src": "29824:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "29810:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49827,
                  "nodeType": "IfStatement",
                  "src": "29806:97:58",
                  "trueBody": {
                    "id": 49826,
                    "nodeType": "Block",
                    "src": "29831:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3732",
                              "id": 49822,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "29882:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_72_by_1",
                                "typeString": "int_const 72"
                              },
                              "value": "72"
                            },
                            {
                              "id": 49823,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49806,
                              "src": "29886:5:58",
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
                            "id": 49821,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "29852:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49824,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "29852:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49825,
                        "nodeType": "RevertStatement",
                        "src": "29845:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49804,
              "nodeType": "StructuredDocumentation",
              "src": "29377:307:58",
              "text": " @dev Returns the downcasted int72 from int256, reverting on\n overflow (when the input is less than smallest int72 or\n greater than largest int72).\n Counterpart to Solidity's `int72` operator.\n Requirements:\n - input must fit into 72 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt72",
            "nameLocation": "29698:7:58",
            "parameters": {
              "id": 49807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49806,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "29713:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49829,
                  "src": "29706:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49805,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29706:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29705:14:58"
            },
            "returnParameters": {
              "id": 49810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49809,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "29749:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49829,
                  "src": "29743:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int72",
                    "typeString": "int72"
                  },
                  "typeName": {
                    "id": 49808,
                    "name": "int72",
                    "nodeType": "ElementaryTypeName",
                    "src": "29743:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int72",
                      "typeString": "int72"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29742:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49855,
            "nodeType": "FunctionDefinition",
            "src": "30227:220:58",
            "nodes": [],
            "body": {
              "id": 49854,
              "nodeType": "Block",
              "src": "30299:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49842,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49837,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49835,
                      "src": "30309:10:58",
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
                          "id": 49840,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49832,
                          "src": "30328:5:58",
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
                        "id": 49839,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "30322:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int64_$",
                          "typeString": "type(int64)"
                        },
                        "typeName": {
                          "id": 49838,
                          "name": "int64",
                          "nodeType": "ElementaryTypeName",
                          "src": "30322:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49841,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "30322:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int64",
                        "typeString": "int64"
                      }
                    },
                    "src": "30309:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int64",
                      "typeString": "int64"
                    }
                  },
                  "id": 49843,
                  "nodeType": "ExpressionStatement",
                  "src": "30309:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49846,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49844,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49835,
                      "src": "30348:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int64",
                        "typeString": "int64"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49845,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49832,
                      "src": "30362:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "30348:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49853,
                  "nodeType": "IfStatement",
                  "src": "30344:97:58",
                  "trueBody": {
                    "id": 49852,
                    "nodeType": "Block",
                    "src": "30369:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3634",
                              "id": 49848,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "30420:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_64_by_1",
                                "typeString": "int_const 64"
                              },
                              "value": "64"
                            },
                            {
                              "id": 49849,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49832,
                              "src": "30424:5:58",
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
                            "id": 49847,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "30390:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49850,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "30390:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49851,
                        "nodeType": "RevertStatement",
                        "src": "30383:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49830,
              "nodeType": "StructuredDocumentation",
              "src": "29915:307:58",
              "text": " @dev Returns the downcasted int64 from int256, reverting on\n overflow (when the input is less than smallest int64 or\n greater than largest int64).\n Counterpart to Solidity's `int64` operator.\n Requirements:\n - input must fit into 64 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt64",
            "nameLocation": "30236:7:58",
            "parameters": {
              "id": 49833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49832,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "30251:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49855,
                  "src": "30244:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49831,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30244:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30243:14:58"
            },
            "returnParameters": {
              "id": 49836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49835,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "30287:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49855,
                  "src": "30281:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int64",
                    "typeString": "int64"
                  },
                  "typeName": {
                    "id": 49834,
                    "name": "int64",
                    "nodeType": "ElementaryTypeName",
                    "src": "30281:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int64",
                      "typeString": "int64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30280:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49881,
            "nodeType": "FunctionDefinition",
            "src": "30765:220:58",
            "nodes": [],
            "body": {
              "id": 49880,
              "nodeType": "Block",
              "src": "30837:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49868,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49863,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49861,
                      "src": "30847:10:58",
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
                          "id": 49866,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49858,
                          "src": "30866:5:58",
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
                        "id": 49865,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "30860:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int56_$",
                          "typeString": "type(int56)"
                        },
                        "typeName": {
                          "id": 49864,
                          "name": "int56",
                          "nodeType": "ElementaryTypeName",
                          "src": "30860:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49867,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "30860:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int56",
                        "typeString": "int56"
                      }
                    },
                    "src": "30847:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int56",
                      "typeString": "int56"
                    }
                  },
                  "id": 49869,
                  "nodeType": "ExpressionStatement",
                  "src": "30847:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49872,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49870,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49861,
                      "src": "30886:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int56",
                        "typeString": "int56"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49871,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49858,
                      "src": "30900:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "30886:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49879,
                  "nodeType": "IfStatement",
                  "src": "30882:97:58",
                  "trueBody": {
                    "id": 49878,
                    "nodeType": "Block",
                    "src": "30907:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3536",
                              "id": 49874,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "30958:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_56_by_1",
                                "typeString": "int_const 56"
                              },
                              "value": "56"
                            },
                            {
                              "id": 49875,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49858,
                              "src": "30962:5:58",
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
                            "id": 49873,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "30928:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49876,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "30928:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49877,
                        "nodeType": "RevertStatement",
                        "src": "30921:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49856,
              "nodeType": "StructuredDocumentation",
              "src": "30453:307:58",
              "text": " @dev Returns the downcasted int56 from int256, reverting on\n overflow (when the input is less than smallest int56 or\n greater than largest int56).\n Counterpart to Solidity's `int56` operator.\n Requirements:\n - input must fit into 56 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt56",
            "nameLocation": "30774:7:58",
            "parameters": {
              "id": 49859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49858,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "30789:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49881,
                  "src": "30782:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49857,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30782:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30781:14:58"
            },
            "returnParameters": {
              "id": 49862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49861,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "30825:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49881,
                  "src": "30819:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int56",
                    "typeString": "int56"
                  },
                  "typeName": {
                    "id": 49860,
                    "name": "int56",
                    "nodeType": "ElementaryTypeName",
                    "src": "30819:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int56",
                      "typeString": "int56"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30818:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49907,
            "nodeType": "FunctionDefinition",
            "src": "31303:220:58",
            "nodes": [],
            "body": {
              "id": 49906,
              "nodeType": "Block",
              "src": "31375:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49894,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49889,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49887,
                      "src": "31385:10:58",
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
                          "id": 49892,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49884,
                          "src": "31404:5:58",
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
                        "id": 49891,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "31398:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int48_$",
                          "typeString": "type(int48)"
                        },
                        "typeName": {
                          "id": 49890,
                          "name": "int48",
                          "nodeType": "ElementaryTypeName",
                          "src": "31398:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49893,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "31398:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int48",
                        "typeString": "int48"
                      }
                    },
                    "src": "31385:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int48",
                      "typeString": "int48"
                    }
                  },
                  "id": 49895,
                  "nodeType": "ExpressionStatement",
                  "src": "31385:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49896,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49887,
                      "src": "31424:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int48",
                        "typeString": "int48"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49897,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49884,
                      "src": "31438:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "31424:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49905,
                  "nodeType": "IfStatement",
                  "src": "31420:97:58",
                  "trueBody": {
                    "id": 49904,
                    "nodeType": "Block",
                    "src": "31445:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3438",
                              "id": 49900,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "31496:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_48_by_1",
                                "typeString": "int_const 48"
                              },
                              "value": "48"
                            },
                            {
                              "id": 49901,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49884,
                              "src": "31500:5:58",
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
                            "id": 49899,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "31466:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "31466:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49903,
                        "nodeType": "RevertStatement",
                        "src": "31459:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49882,
              "nodeType": "StructuredDocumentation",
              "src": "30991:307:58",
              "text": " @dev Returns the downcasted int48 from int256, reverting on\n overflow (when the input is less than smallest int48 or\n greater than largest int48).\n Counterpart to Solidity's `int48` operator.\n Requirements:\n - input must fit into 48 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt48",
            "nameLocation": "31312:7:58",
            "parameters": {
              "id": 49885,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49884,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "31327:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49907,
                  "src": "31320:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49883,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31320:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31319:14:58"
            },
            "returnParameters": {
              "id": 49888,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49887,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "31363:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49907,
                  "src": "31357:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int48",
                    "typeString": "int48"
                  },
                  "typeName": {
                    "id": 49886,
                    "name": "int48",
                    "nodeType": "ElementaryTypeName",
                    "src": "31357:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int48",
                      "typeString": "int48"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31356:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49933,
            "nodeType": "FunctionDefinition",
            "src": "31841:220:58",
            "nodes": [],
            "body": {
              "id": 49932,
              "nodeType": "Block",
              "src": "31913:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49920,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49915,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49913,
                      "src": "31923:10:58",
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
                          "id": 49918,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49910,
                          "src": "31942:5:58",
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
                        "id": 49917,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "31936:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int40_$",
                          "typeString": "type(int40)"
                        },
                        "typeName": {
                          "id": 49916,
                          "name": "int40",
                          "nodeType": "ElementaryTypeName",
                          "src": "31936:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49919,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "31936:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int40",
                        "typeString": "int40"
                      }
                    },
                    "src": "31923:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int40",
                      "typeString": "int40"
                    }
                  },
                  "id": 49921,
                  "nodeType": "ExpressionStatement",
                  "src": "31923:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49922,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49913,
                      "src": "31962:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int40",
                        "typeString": "int40"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49923,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49910,
                      "src": "31976:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "31962:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49931,
                  "nodeType": "IfStatement",
                  "src": "31958:97:58",
                  "trueBody": {
                    "id": 49930,
                    "nodeType": "Block",
                    "src": "31983:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3430",
                              "id": 49926,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "32034:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_40_by_1",
                                "typeString": "int_const 40"
                              },
                              "value": "40"
                            },
                            {
                              "id": 49927,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49910,
                              "src": "32038:5:58",
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
                            "id": 49925,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "32004:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49928,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "32004:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49929,
                        "nodeType": "RevertStatement",
                        "src": "31997:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49908,
              "nodeType": "StructuredDocumentation",
              "src": "31529:307:58",
              "text": " @dev Returns the downcasted int40 from int256, reverting on\n overflow (when the input is less than smallest int40 or\n greater than largest int40).\n Counterpart to Solidity's `int40` operator.\n Requirements:\n - input must fit into 40 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt40",
            "nameLocation": "31850:7:58",
            "parameters": {
              "id": 49911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49910,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "31865:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49933,
                  "src": "31858:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49909,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31858:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31857:14:58"
            },
            "returnParameters": {
              "id": 49914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49913,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "31901:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49933,
                  "src": "31895:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int40",
                    "typeString": "int40"
                  },
                  "typeName": {
                    "id": 49912,
                    "name": "int40",
                    "nodeType": "ElementaryTypeName",
                    "src": "31895:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int40",
                      "typeString": "int40"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31894:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49959,
            "nodeType": "FunctionDefinition",
            "src": "32379:220:58",
            "nodes": [],
            "body": {
              "id": 49958,
              "nodeType": "Block",
              "src": "32451:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49946,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49941,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49939,
                      "src": "32461:10:58",
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
                          "id": 49944,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49936,
                          "src": "32480:5:58",
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
                        "id": 49943,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "32474:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int32_$",
                          "typeString": "type(int32)"
                        },
                        "typeName": {
                          "id": 49942,
                          "name": "int32",
                          "nodeType": "ElementaryTypeName",
                          "src": "32474:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49945,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "32474:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int32",
                        "typeString": "int32"
                      }
                    },
                    "src": "32461:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int32",
                      "typeString": "int32"
                    }
                  },
                  "id": 49947,
                  "nodeType": "ExpressionStatement",
                  "src": "32461:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49950,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49948,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49939,
                      "src": "32500:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int32",
                        "typeString": "int32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49949,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49936,
                      "src": "32514:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "32500:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49957,
                  "nodeType": "IfStatement",
                  "src": "32496:97:58",
                  "trueBody": {
                    "id": 49956,
                    "nodeType": "Block",
                    "src": "32521:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3332",
                              "id": 49952,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "32572:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_32_by_1",
                                "typeString": "int_const 32"
                              },
                              "value": "32"
                            },
                            {
                              "id": 49953,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49936,
                              "src": "32576:5:58",
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
                            "id": 49951,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "32542:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49954,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "32542:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49955,
                        "nodeType": "RevertStatement",
                        "src": "32535:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49934,
              "nodeType": "StructuredDocumentation",
              "src": "32067:307:58",
              "text": " @dev Returns the downcasted int32 from int256, reverting on\n overflow (when the input is less than smallest int32 or\n greater than largest int32).\n Counterpart to Solidity's `int32` operator.\n Requirements:\n - input must fit into 32 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt32",
            "nameLocation": "32388:7:58",
            "parameters": {
              "id": 49937,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49936,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "32403:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49959,
                  "src": "32396:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49935,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "32396:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32395:14:58"
            },
            "returnParameters": {
              "id": 49940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49939,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "32439:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49959,
                  "src": "32433:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int32",
                    "typeString": "int32"
                  },
                  "typeName": {
                    "id": 49938,
                    "name": "int32",
                    "nodeType": "ElementaryTypeName",
                    "src": "32433:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int32",
                      "typeString": "int32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32432:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49985,
            "nodeType": "FunctionDefinition",
            "src": "32917:220:58",
            "nodes": [],
            "body": {
              "id": 49984,
              "nodeType": "Block",
              "src": "32989:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49972,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49967,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49965,
                      "src": "32999:10:58",
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
                          "id": 49970,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49962,
                          "src": "33018:5:58",
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
                        "id": 49969,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "33012:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int24_$",
                          "typeString": "type(int24)"
                        },
                        "typeName": {
                          "id": 49968,
                          "name": "int24",
                          "nodeType": "ElementaryTypeName",
                          "src": "33012:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49971,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "33012:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int24",
                        "typeString": "int24"
                      }
                    },
                    "src": "32999:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int24",
                      "typeString": "int24"
                    }
                  },
                  "id": 49973,
                  "nodeType": "ExpressionStatement",
                  "src": "32999:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 49976,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49974,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49965,
                      "src": "33038:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int24",
                        "typeString": "int24"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 49975,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49962,
                      "src": "33052:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "33038:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49983,
                  "nodeType": "IfStatement",
                  "src": "33034:97:58",
                  "trueBody": {
                    "id": 49982,
                    "nodeType": "Block",
                    "src": "33059:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3234",
                              "id": 49978,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "33110:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_24_by_1",
                                "typeString": "int_const 24"
                              },
                              "value": "24"
                            },
                            {
                              "id": 49979,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49962,
                              "src": "33114:5:58",
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
                            "id": 49977,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "33080:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 49980,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "33080:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 49981,
                        "nodeType": "RevertStatement",
                        "src": "33073:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49960,
              "nodeType": "StructuredDocumentation",
              "src": "32605:307:58",
              "text": " @dev Returns the downcasted int24 from int256, reverting on\n overflow (when the input is less than smallest int24 or\n greater than largest int24).\n Counterpart to Solidity's `int24` operator.\n Requirements:\n - input must fit into 24 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt24",
            "nameLocation": "32926:7:58",
            "parameters": {
              "id": 49963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49962,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "32941:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49985,
                  "src": "32934:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49961,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "32934:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32933:14:58"
            },
            "returnParameters": {
              "id": 49966,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49965,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "32977:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 49985,
                  "src": "32971:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int24",
                    "typeString": "int24"
                  },
                  "typeName": {
                    "id": 49964,
                    "name": "int24",
                    "nodeType": "ElementaryTypeName",
                    "src": "32971:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int24",
                      "typeString": "int24"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32970:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50011,
            "nodeType": "FunctionDefinition",
            "src": "33455:220:58",
            "nodes": [],
            "body": {
              "id": 50010,
              "nodeType": "Block",
              "src": "33527:148:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49998,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49993,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49991,
                      "src": "33537:10:58",
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
                          "id": 49996,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49988,
                          "src": "33556:5:58",
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
                        "id": 49995,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "33550:5:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int16_$",
                          "typeString": "type(int16)"
                        },
                        "typeName": {
                          "id": 49994,
                          "name": "int16",
                          "nodeType": "ElementaryTypeName",
                          "src": "33550:5:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49997,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "33550:12:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "src": "33537:25:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int16",
                      "typeString": "int16"
                    }
                  },
                  "id": 49999,
                  "nodeType": "ExpressionStatement",
                  "src": "33537:25:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 50002,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50000,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49991,
                      "src": "33576:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 50001,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49988,
                      "src": "33590:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "33576:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50009,
                  "nodeType": "IfStatement",
                  "src": "33572:97:58",
                  "trueBody": {
                    "id": 50008,
                    "nodeType": "Block",
                    "src": "33597:72:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "3136",
                              "id": 50004,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "33648:2:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_16_by_1",
                                "typeString": "int_const 16"
                              },
                              "value": "16"
                            },
                            {
                              "id": 50005,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49988,
                              "src": "33652:5:58",
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
                            "id": 50003,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "33618:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 50006,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "33618:40:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 50007,
                        "nodeType": "RevertStatement",
                        "src": "33611:47:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49986,
              "nodeType": "StructuredDocumentation",
              "src": "33143:307:58",
              "text": " @dev Returns the downcasted int16 from int256, reverting on\n overflow (when the input is less than smallest int16 or\n greater than largest int16).\n Counterpart to Solidity's `int16` operator.\n Requirements:\n - input must fit into 16 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt16",
            "nameLocation": "33464:7:58",
            "parameters": {
              "id": 49989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49988,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "33479:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 50011,
                  "src": "33472:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 49987,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "33472:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33471:14:58"
            },
            "returnParameters": {
              "id": 49992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49991,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "33515:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 50011,
                  "src": "33509:16:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int16",
                    "typeString": "int16"
                  },
                  "typeName": {
                    "id": 49990,
                    "name": "int16",
                    "nodeType": "ElementaryTypeName",
                    "src": "33509:5:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int16",
                      "typeString": "int16"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33508:18:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50037,
            "nodeType": "FunctionDefinition",
            "src": "33988:216:58",
            "nodes": [],
            "body": {
              "id": 50036,
              "nodeType": "Block",
              "src": "34058:146:58",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 50024,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 50019,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50017,
                      "src": "34068:10:58",
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
                          "id": 50022,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50014,
                          "src": "34086:5:58",
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
                        "id": 50021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "34081:4:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int8_$",
                          "typeString": "type(int8)"
                        },
                        "typeName": {
                          "id": 50020,
                          "name": "int8",
                          "nodeType": "ElementaryTypeName",
                          "src": "34081:4:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50023,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "34081:11:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int8",
                        "typeString": "int8"
                      }
                    },
                    "src": "34068:24:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int8",
                      "typeString": "int8"
                    }
                  },
                  "id": 50025,
                  "nodeType": "ExpressionStatement",
                  "src": "34068:24:58"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 50028,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50026,
                      "name": "downcasted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50017,
                      "src": "34106:10:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int8",
                        "typeString": "int8"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 50027,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50014,
                      "src": "34120:5:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "34106:19:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50035,
                  "nodeType": "IfStatement",
                  "src": "34102:96:58",
                  "trueBody": {
                    "id": 50034,
                    "nodeType": "Block",
                    "src": "34127:71:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "hexValue": "38",
                              "id": 50030,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "34178:1:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_8_by_1",
                                "typeString": "int_const 8"
                              },
                              "value": "8"
                            },
                            {
                              "id": 50031,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50014,
                              "src": "34181:5:58",
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
                            "id": 50029,
                            "name": "SafeCastOverflowedIntDowncast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48335,
                            "src": "34148:29:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint8_$_t_int256_$returns$_t_error_$",
                              "typeString": "function (uint8,int256) pure returns (error)"
                            }
                          },
                          "id": 50032,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "34148:39:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 50033,
                        "nodeType": "RevertStatement",
                        "src": "34141:46:58"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 50012,
              "nodeType": "StructuredDocumentation",
              "src": "33681:302:58",
              "text": " @dev Returns the downcasted int8 from int256, reverting on\n overflow (when the input is less than smallest int8 or\n greater than largest int8).\n Counterpart to Solidity's `int8` operator.\n Requirements:\n - input must fit into 8 bits"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt8",
            "nameLocation": "33997:6:58",
            "parameters": {
              "id": 50015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50014,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "34011:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 50037,
                  "src": "34004:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50013,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "34004:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34003:14:58"
            },
            "returnParameters": {
              "id": 50018,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50017,
                  "mutability": "mutable",
                  "name": "downcasted",
                  "nameLocation": "34046:10:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 50037,
                  "src": "34041:15:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int8",
                    "typeString": "int8"
                  },
                  "typeName": {
                    "id": 50016,
                    "name": "int8",
                    "nodeType": "ElementaryTypeName",
                    "src": "34041:4:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int8",
                      "typeString": "int8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34040:17:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50067,
            "nodeType": "FunctionDefinition",
            "src": "34380:314:58",
            "nodes": [],
            "body": {
              "id": 50066,
              "nodeType": "Block",
              "src": "34444:250:58",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 50054,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50045,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50040,
                      "src": "34557:5:58",
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
                                "id": 50050,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "34578:6:58",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 50049,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "34578:6:58",
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
                              "id": 50048,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "34573:4:58",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 50051,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "34573:12:58",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_int256",
                              "typeString": "type(int256)"
                            }
                          },
                          "id": 50052,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "34586:3:58",
                          "memberName": "max",
                          "nodeType": "MemberAccess",
                          "src": "34573:16:58",
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
                        "id": 50047,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "34565:7:58",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 50046,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "34565:7:58",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50053,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "34565:25:58",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "34557:33:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50060,
                  "nodeType": "IfStatement",
                  "src": "34553:105:58",
                  "trueBody": {
                    "id": 50059,
                    "nodeType": "Block",
                    "src": "34592:66:58",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 50056,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50040,
                              "src": "34641:5:58",
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
                            "id": 50055,
                            "name": "SafeCastOverflowedUintToInt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48340,
                            "src": "34613:27:58",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256) pure returns (error)"
                            }
                          },
                          "id": 50057,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "34613:34:58",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 50058,
                        "nodeType": "RevertStatement",
                        "src": "34606:41:58"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50063,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50040,
                        "src": "34681:5:58",
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
                      "id": 50062,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "34674:6:58",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 50061,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "34674:6:58",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 50064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "34674:13:58",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 50044,
                  "id": 50065,
                  "nodeType": "Return",
                  "src": "34667:20:58"
                }
              ]
            },
            "documentation": {
              "id": 50038,
              "nodeType": "StructuredDocumentation",
              "src": "34210:165:58",
              "text": " @dev Converts an unsigned uint256 into a signed int256.\n Requirements:\n - input must be less than or equal to maxInt256."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt256",
            "nameLocation": "34389:8:58",
            "parameters": {
              "id": 50041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50040,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "34406:5:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 50067,
                  "src": "34398:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50039,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "34398:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34397:15:58"
            },
            "returnParameters": {
              "id": 50044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50043,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50067,
                  "src": "34436:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 50042,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "34436:6:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34435:8:58"
            },
            "scope": 50078,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50077,
            "nodeType": "FunctionDefinition",
            "src": "34795:145:58",
            "nodes": [],
            "body": {
              "id": 50076,
              "nodeType": "Block",
              "src": "34853:87:58",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "34888:46:58",
                    "nodeType": "YulBlock",
                    "src": "34888:46:58",
                    "statements": [
                      {
                        "nativeSrc": "34902:22:58",
                        "nodeType": "YulAssignment",
                        "src": "34902:22:58",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "b",
                                  "nativeSrc": "34921:1:58",
                                  "nodeType": "YulIdentifier",
                                  "src": "34921:1:58"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "34914:6:58",
                                "nodeType": "YulIdentifier",
                                "src": "34914:6:58"
                              },
                              "nativeSrc": "34914:9:58",
                              "nodeType": "YulFunctionCall",
                              "src": "34914:9:58"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "34907:6:58",
                            "nodeType": "YulIdentifier",
                            "src": "34907:6:58"
                          },
                          "nativeSrc": "34907:17:58",
                          "nodeType": "YulFunctionCall",
                          "src": "34907:17:58"
                        },
                        "variableNames": [
                          {
                            "name": "u",
                            "nativeSrc": "34902:1:58",
                            "nodeType": "YulIdentifier",
                            "src": "34902:1:58"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 50070,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "34921:1:58",
                      "valueSize": 1
                    },
                    {
                      "declaration": 50073,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "34902:1:58",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 50075,
                  "nodeType": "InlineAssembly",
                  "src": "34863:71:58"
                }
              ]
            },
            "documentation": {
              "id": 50068,
              "nodeType": "StructuredDocumentation",
              "src": "34700:90:58",
              "text": " @dev Cast a boolean (false or true) to a uint256 (0 or 1) with no jump."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint",
            "nameLocation": "34804:6:58",
            "parameters": {
              "id": 50071,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50070,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "34816:1:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 50077,
                  "src": "34811:6:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 50069,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "34811:4:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34810:8:58"
            },
            "returnParameters": {
              "id": 50074,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50073,
                  "mutability": "mutable",
                  "name": "u",
                  "nameLocation": "34850:1:58",
                  "nodeType": "VariableDeclaration",
                  "scope": 50077,
                  "src": "34842:9:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50072,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "34842:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "34841:11:58"
            },
            "scope": 50078,
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
          "id": 48316,
          "nodeType": "StructuredDocumentation",
          "src": "218:550:58",
          "text": " @dev Wrappers over Solidity's uintXX/intXX/bool casting operators with added overflow\n checks.\n Downcasting from uint256/int256 in Solidity does not revert on overflow. This can\n easily result in undesired exploitation or bugs, since developers usually\n assume that overflows raise errors. `SafeCast` restores this intuition by\n reverting the transaction when such an operation overflows.\n Using this library instead of the unchecked operations eliminates an entire\n class of bugs, so it's recommended to use it always."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          50078
        ],
        "name": "SafeCast",
        "nameLocation": "777:8:58",
        "scope": 50079,
        "usedErrors": [
          48323,
          48328,
          48335,
          48340
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 58
} as const;